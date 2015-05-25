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