(function(){
  'use strict'
var x="text";
angular.module('myFirstApp',[])
.controller('MyFirstController',function($scope){
  $scope.name="gagansuri";
  $scope.sayHello=function(){
    return "hello";
  };

});





})();
