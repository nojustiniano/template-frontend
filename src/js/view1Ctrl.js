'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1.html',
    controller: 'View1Ctrl as ctrl'
  });
}])

.controller('View1Ctrl', [function() {
	var ctrl = this;
	ctrl.nombre = "";
}]);