// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('advocate', ['ionic'])

.run(function($ionicPlatform, $rootScope) {
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
  $rootScope.data = data;
  $rootScope.category = [];
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
.controller('WelcomeCtrl', ['$scope', WelcomeCtrl])
.controller('QuestionCtrl', ['$scope', '$rootScope', '$state', QuestionCtrl])
.controller('ResultCtrl', ['$scope', ResultCtrl])
.controller('SpecificQuestionCtrl', ['$scope',  '$rootScope', '$state', SpecificQuestionCtrl])
.controller('EmailContentCtrl', ['$scope', EmailContentCtrl])

function WelcomeCtrl($s){
}

function SpecificQuestionCtrl($s, $r, $st){
console.log($r.category);
$s.plans = [];
$r.category.map(function(oneCategory){
  var categoryFound = $r.data.categories.filter(function(onePlan){
  return onePlan.id == oneCategory;
});
  console.log('cat', categoryFound);
  if (categoryFound.length > 0){
    for (var i = 0; i < categoryFound[0]['plans'].length; i++) {
      if ($s.plans.indexOf(categoryFound[0]['plans'][i]) < 0){
        $s.plans.push(categoryFound[0]['plans'][i]);
      }
    };
  }
});
console.log($s.plans);
}

function QuestionCtrl($s, $r, $st){
$s.category = [
false,
false,
false,
false,
false,
false,
false
];
$s.save = function(i){
  $s.category[i-1] = !$s.category[i-1];
};
$s.continue = function(){
  var hasOneCategory = false;
  for (var i = 0; i < $s.category.length; i++){
    if ($s.category[i]){
      $r.category.push(i+1);
      hasOneCategory = true;
    }
  }
  if (hasOneCategory){
    $st.transitionTo('specificQuestion',null, null, null);
  }
};
}

function ResultCtrl($s){

}

function EmailContentCtrl($s){

}