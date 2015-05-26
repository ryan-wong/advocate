var welcome = {
  name: 'welcome',
  url: '/welcome',
  controller: 'WelcomeCtrl',
  templateUrl: 'templates/welcome.html'
};

var age = {
  name: 'age',
  url: '/age',
  controller: 'AgeCtrl',
  resolve:{
    update: function($http, $rootScope){
       var d = new Date();
       var n = d.getTime();
       $http.jsonp("http://fai.sixtooth.com/uploads/data.min.json?query=" + n + "&callback=JSON_CALLBACK")
        .success(function(data) {
          $rootScope.dataPull = data;
          $rootScope.data = data;
          $rootScope.researchEmail = data.researcher_email;
          $rootScope.plans = [];
          return null;
        })
        .error(function(err,status) {
          $rootScope.dataPull = 'not found';
          console.log('err', err);
          console.log(status);
          return null;
        });
    }
  },
  templateUrl: 'templates/age.html'
};

var disability = {
  name: 'disability',
  url: '/disability',
  controller: 'DisabilityCtrl',
  templateUrl: 'templates/disability.html'
};

var question = {
  name: 'question',
  url: '/question',
  controller: 'QuestionCtrl',
  cache: false,
  templateUrl: 'templates/question.html'
};

var result = {
  name: 'result',
  url: '/result',
  controller: 'ResultCtrl',
  cache: false,
  templateUrl: 'templates/result.html'
};

var emailContent = {
  name: 'emailContent',
  url: '/emailContent',
  controller: 'EmailContentCtrl',
  templateUrl: 'templates/emailContent.html'
};

var education = {
  name: 'education',
  url: '/education',
  controller: 'EducationCtrl',
  templateUrl: 'templates/education.html'
};
var stateList = [
welcome,
age,
disability,
question,
result,
emailContent,
education
];