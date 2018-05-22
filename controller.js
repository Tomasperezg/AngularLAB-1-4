"use strict";
{
  function ToDoController(){
    let vm = this;
    vm.nums = [
      {nums: "do homework", className: "Complete"},
      {nums: "clean the car", className: "Complete"},
      {nums: "walk the dog", className: "Complete"},
      {nums: "work in lab", className: "Complete"}
    ];

  }

var changeText = angular.module("ToDoApp", []);
changeText.controller('GoDoController',['$scope', '$http', function($scope, $http){//
  $scope.class1 = false;
  $scope.clicked = true;
  $scope.click = true;

  $scope.ChangeStyle = function(){
    $scope.class1 = true;
    $scope.clicked = false;
  };
  $scope.removeItem = function(){
    $scope.click = false;
    $scope.this.splice(this.nums);
  };
  $scope.addItems = function(input){
    $scope.click = false;
    let array = {
      nums: input,
      className: ""
    }
    nums.push(array);
  };

}]);
angular
.module("ToDoApp")
.controller("ToDoController", ToDoController);
}
