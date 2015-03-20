angular.module('app.projects', [
  ])
.config(function($stateProvider) {
  $stateProvider
    .state('app.projects', {
      url:'/projects',
      templateUrl: 'app/projects/projects.tpl.html',
      controller: 'ProjectsController'
    });
})
.controller('ProjectsController', function() {

});