var welcome = {
  name: 'welcome',
  url: '/welcome',
  controller: 'WelcomeCtrl',
  secure: true,
  cache: false,
  templateUrl: 'templates/welcome.html'
};

var question = {
  name: 'question',
  url: '/question',
  controller: 'QuestionCtrl',
  secure: true,
  cache: false,
  templateUrl: 'templates/question.html'
};

var result = {
  name: 'result',
  url: '/result',
  controller: 'ResultCtrl',
  secure: true,
  cache: false,
  templateUrl: 'templates/result.html'
};

var emailContent = {
  name: 'emailContent',
  url: '/emailContent',
  controller: 'EmailContentCtrl',
  secure: true,
  cache: false,
  templateUrl: 'templates/emailContent.html'
};
var stateList = [
welcome,
question,
result,
emailContent
];