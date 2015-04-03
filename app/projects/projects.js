'use strict';
angular.module('app.projects', [
  ])
.config(function($stateProvider, $provide) {
  $stateProvider
    .state('app.projects', {
      url:'/projects',
      templateUrl: 'app/projects/projects.tpl.html',
      controller: 'ProjectsController as ProjectCtrl'
    });
  $provide.value('jQuery', angular.element);
})
.controller('ProjectsController', ['$scope','slideCtrl', function($scope, slideCtrl) {
  jQuery('.hide').fadeIn('slow');

  //slideCtrl: new all slide instances
  $scope.p1 = new slideCtrl(jQuery('#p1 ul').children('li'));
  $scope.p2 = new slideCtrl(jQuery('#p2 ul').children('li'));

}])
.factory('slideCtrl', function() {
	var slideConstructor = function(slides) {
		var slides = slides;
		var current = 0;

		this.moveRight = function() {
	    if(current>slides.length-2)
	    	current = slides.length-1;
	    else if(current<0) 
	    	current = 0;
	    else {
		    current++; 
		  	var value = 0 - current*100;
		  	for(var i=0; i<slides.length; i++) {
		    	jQuery(slides[i]).css('transform', 'translateX('+value+'%)');
		    }
	  	}
	  }
	  this.moveLeft = function() {
	  	if(current<=0) 
	    	current = 0;
	    else {
		    current--;
		    var value = 0 - current*100;
		    for(var i=0; i<slides.length; i++) {
		    	jQuery(slides[i]).css('transform', 'translateX('+value+'%)');
		    }
	    }
	  };
	}
  return slideConstructor;
})