"use strict";angular.module("myApp.view2",["ngRoute"]).config(["$routeProvider",function(e){e.when("/view2",{templateUrl:"views/view2.html",controller:"View2Ctrl as ctrl"})}]).controller("View2Ctrl",[function(){var e=this;e.labels=[],e.label="",e.add=function(){e.labels.push(e.label)},e.remove=function(l){e.labels.splice(l,1)}}]);