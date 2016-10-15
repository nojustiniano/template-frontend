'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'views/view2.html',
    controller: 'View2Ctrl as ctrl'
  });
}])

.controller('View2Ctrl', [function() {
  var ctrl = this;

  ctrl.labels = [];
  ctrl.label = "";

  ctrl.add = function(){
    ctrl.labels.push(ctrl.label);
  }

  ctrl.remove = function(index){
    ctrl.labels.splice(index,1);
  }
}]);