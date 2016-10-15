'use strict';

angular.module('myApp.header', [])

.controller('headerCtrl', ['$location', function($location) {
    var ctrl = this;
	
    ctrl.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);