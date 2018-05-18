"use strict";
{
  function ToDoController(){
    let vm = this;
    vm.nums = ["Walk the Dog","Do homework","Clean the car"];
  }

  angular
  .module("ToDoApp")
  .controller("ToDoController", ToDoController);
}
