angular.module('app.contact', [
  ])
.config(function($stateProvider) {
  $stateProvider
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.tpl.html',
      controller: 'ContactController'
    });
})
.controller('ContactController', function() {

});