// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('advocate', ['ionic', 'ngMessages', "base64"])

.run(function($ionicPlatform, $rootScope, storageService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
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
.controller('WelcomeCtrl', ['$scope', 'storageService', '$state',  WelcomeCtrl])
.controller('EducationCtrl', ['$scope','$rootScope', 'storageService', '$state',  EducationCtrl])
.controller('AgeCtrl', ['$scope', '$rootScope', '$state', AgeCtrl])
.controller('DisabilityCtrl', ['$scope', '$rootScope', '$state', DisabilityCtrl])
.controller('QuestionCtrl', ['$scope', '$rootScope', '$state', '$ionicPopup', QuestionCtrl])
.controller('ResultCtrl', ['$scope', '$rootScope', '$state', 'emailService', 'storageService', ResultCtrl])
.controller('EmailContentCtrl', ['$scope', '$ionicPopup', '$rootScope', 'storageService', 'emailService', EmailContentCtrl])
.service('storageService', [storageService])
.service('emailService', ["$http", "$base64",emailService])

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

function AgeCtrl($s, $r, $st){
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
}
function DisabilityCtrl($s, $r, $st){
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

function ResultCtrl($s, $r, $st, eS, sS){
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
  sS.setField('count', 'integer', $r.count);
  var content = "<p>Name: " + $r.username + "<br/>" +
                "<p>Education: " + $r.educationLevel + "<br/>" +
                "<p>Count: " + $r.count + "<br/>" +
                "<p>Age > 65: " + (($r.age)?"yes":"no") + "<br/>" +
                "<p>Disability: " + (($r.disability)?"yes":"no") + "<br/>" +
                "<p>Other: " + $r.plans.join(";") + "<br/>" ;
  var csv = $r.username + "," + $r.educationLevel + "," + $r.count + "," + (($r.age)?"yes":"no") + "," + (($r.disability)?"yes":"no") + ","  + $r.plans.join(";");
  eS.sendEmail($r.data.researcher_email, "Research Report", "Research Report", content, csv, function(e, data){
    console.log('e', e);
    console.log('data', data);
  });
  sS.setField("planHolder", "object", $s.showPlans);
}

function EmailContentCtrl($s, $i, $r, sS, eS ){
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
    content = content + $r.data.printout;
  eS.sendEmail($s.profile.email, $r.username, "Advocate App Benefit Programs", content, "", function(e, data){
    console.log('e', e);
    console.log('data', data);
     $i.alert({
        title: 'Email Sent',
        template: "We just sent an email out to you",
        buttons: [
        { text: 'Ok',
          type: 'button-royal'
        }
        ]
      });
  });
  }
}
}

function EducationCtrl($s, $r, sS, $st){
$s.options = [
'Public School',
'High School',
'College',
'University',
'Graduate School'
];
$s.profile = {
  name: "",
  education:"Public School"
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
   planHolder: {type: 'object', value: ""}
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

function emailService($http, $base64){
  this.sendEmail = function(email, name, subject, content, attachment, cb){
    var data = {
        "key" : "OdzE9_MvlC2bOlhUyApG7g",
        "message": {
          "from_email" : "sameer@sixtooth.com",
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
