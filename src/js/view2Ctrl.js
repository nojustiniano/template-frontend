'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngTouch', 'ngAnimate'])

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
    if(ctrl.labels.indexOf(ctrl.label) === -1)
      ctrl.labels.push(ctrl.label);
    else
      bootbox.alert("Elemento ya existente");
  }

  ctrl.remove = function(index){
    ctrl.labels.splice(index,1);
  }
}]);