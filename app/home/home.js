angular.module('app.home', [
  ])
.config(function($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'app/home/home.tpl.html',
      controller: 'HomeController'
    });
})
.controller('HomeController', function(){

});
