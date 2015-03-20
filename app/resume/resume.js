angular.module('app.resume', [
  
])
.config(function($stateProvider) {
  $stateProvider
    .state('app.resume', {
      url: '/resume',
      templateUrl: 'app/resume/resume.tpl.html',
      controller: 'ResumeController'
    });
})
.controller('ResumeController', function(){
  angular.element('.hide').fadeIn("slow");
});