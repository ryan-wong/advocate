// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('advocate', ['ionic', 'ngMessages', "base64"])

.run(function($ionicPlatform, $rootScope, storageService, $http) {
  $ionicPlatform.ready(function() {
  });
  storageService.fillGaps();
  $rootScope.data = data;
  $rootScope.count = storageService.getField('count',"");
  $rootScope.username = storageService.getField('name',"");
  $rootScope.educationLevel = storageService.getField('education',"");
  $rootScope.age = false;
  $rootScope.disability = false;
  $rootScope.email  = "";
  $rootScope.researchEmail = data.researcher_email;
  $rootScope.plans = [];
  $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
  var d = new Date();
   var n = d.getTime();
    // $http.jsonp("http://fai.sixtooth.com/uploads/data.min.json?query=" + n + "&callback=JSON_CALLBACK")
    $http.jsonp("http://dev2.sixtooth.com/data.min.json?query=" + n + "&callback=JSON_CALLBACK")
    .success(function(data) {
      $rootScope.dataPull = data;
      $rootScope.data = data;
      $rootScope.researchEmail = data.researcher_email;
      $rootScope.plans = [];
      return data;
    })
    .error(function(err,status) {
      $rootScope.dataPull = 'not found';
      return $rootScope.data;
    });
})
.config(function($provide) {
    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });
})
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

})
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  stateList.forEach(function(state){
    $stateProvider.state(state);
  //foreach ends
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');

}])
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.swipeBackEnabled(false);
})
.config(function($httpProvider){
 // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];

})
.controller('WelcomeCtrl', ['$scope', 'storageService', '$state', WelcomeCtrl])
.controller('EducationCtrl', ['$scope','$rootScope', 'storageService', '$state',  EducationCtrl])
.controller('AgeCtrl', ['$scope', '$rootScope', '$state', 'emailQueue', AgeCtrl])
.controller('DisabilityCtrl', ['$scope', '$rootScope', '$state', '$sce', DisabilityCtrl])
.controller('QuestionCtrl', ['$scope', '$rootScope', '$state', '$ionicPopup', QuestionCtrl])
.controller('ResultCtrl', ['$scope', '$rootScope', '$state', 'emailQueue', 'storageService', '$sce', ResultCtrl])
.controller('EmailContentCtrl', ['$scope', '$ionicPopup', '$rootScope', 'storageService', 'emailQueue', EmailContentCtrl])
.service('storageService', [storageService])
.service('emailService', ["$http", emailService])
.service('emailQueue', ["$base64", "$rootScope", 'storageService', 'APIInterceptor', 'emailService', emailQueue])
.service('APIInterceptor', ['$ionicPopup', '$ionicPlatform', APIInterceptor])
.directive('slideable', [slideable])
.directive('slideToggle', [slideToggle])
.directive('backbutton', ['$ionicGesture', backbutton])
function slideable () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
}
function slideToggle() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;

            attrs.expanded = false;

            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');

                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
}
function backbutton($ionicGesture){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        $ionicGesture.on('swiperight', function(event) {
        console.log('Got swiped!');
        event.preventDefault();

      }, element);
      }
    };
}
function WelcomeCtrl($s, sS, $st){
  var hasName = sS.getField('name',"");
  var hasEducation = sS.getField('education',"");
  $s.whichPage = function(){
    if (hasName.length > 0 && hasEducation.length > 0){
      $st.transitionTo('age', null,{refresh:true, inherit:true, notify:true});
    }else{
      $st.transitionTo('education', null,{refresh:true, inherit:true, notify:true});
    }
  }
}

function AgeCtrl($s, $r, $st, eQ){
  $s.question = $r.data.benefitQuestion[6].text;
  $s.yesno = function(answer){
    if (answer == 1){
      $r.age = true;
      $r.plans = [7];
      $st.transitionTo('disability', null,{refresh:true, inherit:true, notify:true});
    }else{
      $r.age = false;
      $r.plans = [];
      $st.transitionTo('question', null,{refresh:true, inherit:true, notify:true});
    }
  }
  eQ.clearQueue();
}
function DisabilityCtrl($s, $r, $st, $sce){
  $s.show = false;
  $s.disability =  $sce.trustAsHtml($r.data.disability);
  $s.yesno = function(answer){
    if (answer == 1){
      $r.disability = true;
      $r.plans = [7,2];
      $st.transitionTo('result', null,{refresh:true, inherit:true, notify:true});
    }else{
      $r.disability = false;
      $r.plans = [7];
      $st.transitionTo('result', null,{refresh:true, inherit:true, notify:true});
    }
  }

}
function QuestionCtrl($s, $r, $st, $i){
  for (var i = 0; i < $r.plans.length; i++){
    if ($r.plans[i] != 7 || $r.plans[i] != 2){
      $r.plans[i] = -1;
    }
  }
$r.plans = $r.plans.filter(function(onePlan){ return onePlan > 0;});
$s.questions = $r.data.benefitQuestion.filter(function(oneQuestion){
  return oneQuestion.show;
});
$s.continue = function(){
  var hasChecked = false;
  $s.questions.map(function(oneQuestion){
    if (oneQuestion.checked){
      hasChecked = true;
      $r.plans.push(oneQuestion.id);
    }
  });
  if (hasChecked){
    $st.transitionTo('result', null,{refresh:true, inherit:true, notify:true});
  } else{
     $i.alert({
        title: 'Missing Answers',
        template: "Please check off which one that applies to you?",
        buttons: [
        { text: 'Ok',
          type: 'button-royal'
        }
        ]
      });
  }
};
}

function ResultCtrl($s, $r, $st, eQ, sS, $sce){
  $s.showPlans = $r.data.plans.filter(function(onePlan){
    var or = onePlan.or;
    var and = onePlan.and;
    var not = (onePlan.not != undefined)?onePlan.not:[];
    if (not.length > 0){
      var match = true;
      for (var i = 0; i < or.length; i++){
        if ($r.plans.indexOf(or[i]) == -1){
          match = false;
        }
      }
      return match;
    }
    if (and.length > 0){
      var match = true;
      for (var i = 0; i < and.length; i++){
        if ($r.plans.indexOf(and[i]) > -1){
          match = match && true;
        } else{
          match = match && false;
        }
      }
      return match;
    //if ends
    }
    if (or.length > 0){
      var match = false;
      for (var i = 0; i < or.length; i++){
        if ($r.plans.indexOf(or[i]) > -1){
          match = true;
        }
      }
      return match;
    //if ends
    }
    return true;
  });
  $s.showPlans = $s.showPlans.map(function(onePlan){
    try{
    onePlan.htmldescription = $sce.trustAsHtml(onePlan.description);
    } catch( e){}

    return onePlan;
  });
  $s.toggleGroup = function(group) {
    if ($s.isGroupShown(group)) {
      $s.shownGroup = null;
    } else {
      $s.shownGroup = group;
    }
  };
  $s.isGroupShown = function(group) {
    return $s.shownGroup === group;
  };
  $r.count++;
  var planList = $r.plans.map(function(onePlan){
    var questionFound = $r.data.benefitQuestion.filter(function(oneQuestion){ return oneQuestion.id == onePlan;});
    return questionFound[0].tag;
  }).join(',');

  sS.setField('count', 'integer', $r.count);
  var content = "<p>Name: " + $r.username + "<br/>" +
                "<p>Education: " + $r.educationLevel + "<br/>" +
                "<p>Count: " + $r.count + "<br/>" +
                "<p>Answers: " + planList + "<br/>" ;
  var csv = $r.username + "," + $r.educationLevel + "," + $r.count + ","  + planList;
  eQ.addQueue($r.data.researcher_email, "Research Report", "Research Report", content, csv, 'research', function(e, data){
    console.log('e', e);
    console.log('data', data);
  });
  sS.setField("planHolder", "object", $s.showPlans);
}

function EmailContentCtrl($s, $i, $r, sS, eQ ){
$s.profile = {
  email: ""
};

$s.send = function(form){
  if(form.$valid) {
    var plans = sS.getField('planHolder',[]);
    var content = "";
    plans.map(function(onePlan){
      content = content + "<h1>" + onePlan.text + "</h1>" + onePlan.description;
      return onePlan;
    });
    content = $r.data.printout + content;
    eQ.addQueue($s.profile.email, $r.username, "Advocate App Benefit Programs", content, "", 'personal',function(e, data){
      console.log('e', e);
      console.log('data', data);
      if (data.internet != undefined){
       $i.alert({
          title: 'No Internet',
          template: "You do not have internet right now. We will send your email when you do.",
          buttons: [
          { text: 'Ok',
            type: 'button-royal'
          }
          ]
        });
      }else{
       $i.alert({
          title: 'Email Sent',
          template: "We just sent an email out to you",
          buttons: [
          { text: 'Ok',
            type: 'button-royal'
          }
          ]
        });
      }
    });
  }
}
}

function EducationCtrl($s, $r, sS, $st){
$s.options = [
'Medical Student',
'Junior Resident',
'Senior Resident',
'Chief Resident',
'Staff Physician',
'Physician Assistant/Student',
'Social Worker'
];
$s.profile = {
  name: "",
  education:"Medical Student"
};

$s.signUp = function(form){
  if(form.$valid) {
    sS.setField('name', 'string', $s.profile.name);
    sS.setField('education', 'string', $s.profile.education);
    $r.username = $s.profile.name;
    $r.educationLevel = $s.profile.education;
    $st.transitionTo('age', null,{refresh:true, inherit:true, notify:true});
  }
}
}

function storageService () {
 var storageList = {
  namespace: "advocate",
  fields: {
   name:{type: 'string', value:""},
   education:{type: 'string', value:""},
   count:{type: 'integer', value:0},
   data: {type: 'object', value: ""},
   planHolder: {type: 'object', value: ""},
   queueResearch: {type: 'array', value: [] },
   queueEmail: {type: 'array', value: []}
  }
 };
  var _keys = Object.keys(storageList.fields);
  var namespace = storageList.namespace;
  this.reset = function(){
    for (var i = 0; i < _keys.length; i++){
      window.localStorage.setItem(namespace + _keys[i] , JSON.stringify(storageList.fields[_keys[i]].value));
    }
  };
  this.fillGaps = function(){
    for (var i = 0; i < _keys.length; i++){
      this.hasField(_keys[i]);
    }
  };
  //retrieve field
  this.getField = function(field, defaultValue){
    //if not a valid field, just give back defaultValue
    if (!this.hasField(field)){
      return defaultValue;
    }else{
      //find field
      var result = JSON.parse(localStorage.getItem(namespace + field));
      //if invalid field reset it
      if (result == null){
        window.localStorage.setItem(namespace + field , JSON.stringify(storageList.fields[field].value));
      }
      if (storageList.fields[field].type == 'float'){
        result = Number(result);
      }
      if (storageList.fields[field].type == 'integer'){
        result = Number(result);
      }
      return result;
    }
  };

  this.setField = function(field, type, value){
    var result = value;
    if (type =='float'){
      result = Number(result);
    }else if (type =='integer'){
      result = Number(result);
    }
    if (type=='array'){
      var result = JSON.parse(localStorage.getItem(namespace + field));
      result.push(value);
    }
    if (type=='reset'){
      result = value;
    }
      window.localStorage.setItem(namespace + field, JSON.stringify(result));
      return result;
  };
  //check if field exist in local storage
  this.hasField = function(field){
    //if field is not registered field return false
    if (_keys.indexOf(field) < 0){
      return false;
    }
    //find field
    var result = JSON.parse(localStorage.getItem(namespace + field));
    //if not there, create it to default
    if (result == null){
      window.localStorage.setItem(namespace + field , JSON.stringify(storageList.fields[field].value));
      return false;
    }else{
      return true;
    }
  };
  //reset specific field
  this.clearField = function(field){
    if (this.hasField(field)){
     window.localStorage.setItem(namespace + field , JSON.stringify(storageList.fields[field].value));
    }
  };
  return this;
}

function emailService($http){
  this.sendEmail = function(data, cb){
  $http({
      method: 'POST',
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: data
    })
    .success(function(data) {
      cb(null, data);
    })
    .error(function(err,status) {
      cb(err);
    });
  }
  return this;
}

function emailQueue($base64, $rootScope, storageService, APIInterceptor, emailService){
  this.addQueue = function(email, name, subject, content, attachment, type, cb){
    var data = {
        "key" : "OdzE9_MvlC2bOlhUyApG7g",
        // "key" : "gV0U28t3tBBrCZo0Dklngg",
        "message": {
          "from_email" : $rootScope.researchEmail,
          "to" : [{
            "email" : email,
            "name" : name,
            "type" : 'to'
          }],
          "subject" : subject,
          "html" : content
        }
      };
    if (attachment.length > 0){
      data["message"]["attachments"] = [
        {
          "type": "text/plain",
          "name": "research.csv",
          "content": $base64.encode(attachment)
        }
      ];
    }
    console.log('offline', APIInterceptor.isOffline());
    if (APIInterceptor.isOffline()){
      console.log('offline');
      if (type == 'research'){
        storageService.setField('queueResearch', 'array', data);
      } else{
        storageService.setField('queueEmail', 'array', data);
      }
      cb(null,{"message": "Saved to queue", 'internet': false});
      return true;
    }else{
      return emailService.sendEmail(data,cb);
    }
  };
  this.clearQueue = function(){
    var research = storageService.getField('queueResearch',[]);
    var emails = storageService.getField('queueEmail',[]);
    if (!APIInterceptor.isOffline()){
      console.log('offline');
      if (research.length > 0){
        for (var i = 0; i < research.length; i++){
          emailService.sendEmail(research[i],function(e, d){console.log(i, d);});
        }
        storageService.setField('queueResearch', 'reset', []);
      }
      if (emails.length > 0){
        for (var i = 0; i < emails.length; i++){
          emailService.sendEmail(emails[i],function(e, d){console.log(i, d);});
        }
        storageService.setField('queueEmail', 'reset', []);
      }
    }
  };
  return this;
}

function APIInterceptor($ionicPopup, $ionicPlatform) {
    this.isOffline = function() {
          if(window.Connection) {
              if(navigator.connection.type == Connection.NONE) {
                return true;
              }
          }
          return false;
    };
}