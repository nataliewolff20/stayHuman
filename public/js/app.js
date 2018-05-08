
const app = angular.module('StayHuman', []);


app.controller('MyController', ['$http', function($http){
  const controller = this;

  this.createTodo = function(){
    $http({
      method:'POST',
      url:'/todos',
      data: {
        description: this.description,
        complete: this.complete
      }
    }).then(function(response){
      controller.getTodos;
    }, function(){
      console.log('error');
    });
  }

  this.getTodos = function(){
      $http({
          method:'GET',
          url: '/todos',
      }).then(function(response){
          controller.todos = response.data;
      }, function(){
          console.log('GET error');
      });
  };
    this.getTodos();
}]);






//jquery stuff

// $(()=>{
//   $('#submit').on('click', addCompleted);
// });
//
// const addCompleted = ()=>{
//   const $inputBox = $('#input-box');
//   const todo = $inputBox.val();
//   $inputBox.val('');
//
//   const $div = $('<div>')
//     .addClass('to-do-item')
//     .html('<h3>' + todo + '</h3>');
//
//   $('#to-do-list').append($div);
//
//
// const $button = $('<button>')
//   .text('Completed')
//   .on('click', moveToDo)
//   .appendTo($div)
// }
//
// const moveToDo = ()=>{
//   const $toDoDiv = $(event.currentTarget).parent();
//
// $toDoDiv
//   .removeClass('to-do-item')
//   .addClass('done-item')
//   .appendTo($('#completed'))
//   .children()
//   .eq(1)
//   .text(remove)
//   .on('click', removeToDo)
// }
//
// const removeToDo = ()=>{
//   $(event.currentTarget).parent().remove();
// }
