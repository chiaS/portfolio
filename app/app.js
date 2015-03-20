/*app.js*/
angular.module('app', [
  'ui.router',
  'app.contact',
  'app.home',
  'app.resume',
  'app.projects'
  ])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/app.home");
  $stateProvider
    .state('app', {
      abstract: true,
      url: '',
      template: '<ui-view/>',
      controller: 'AppController'
    });
})
.controller('AppController', function() {
});