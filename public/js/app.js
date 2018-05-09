
const app = angular.module('StayHuman', []);


app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.tasks = [];
  this.complete = false;


  this.getTasks = function(){
  $http({
    method:'GET',
    url: '/tasks',
  }).then(function(response){
    controller.tasks = response.data
  }, function(){
    console.log('get error');
  });
};


  this.createTasks = function(){
    $http({
      method:'POST',
      url:'/tasks',
      data: {
        description: this.description,
        complete: this.complete
      }
    }).then(function(response){
      controller.getTasks();
    }, function(){
      console.log('error');
    });
  }

  this.toggleTasksComplete = function(tasks){
        console.log(tasks);
        let newCompleteValue;
        if(tasks.complete === true){
            newCompleteValue = false
        } else {
            newCompleteValue = true
        }

        $http({
            method:'PUT',
            url:'/tasks/' + tasks._id,
            data: {
                description: tasks.description,
                complete: newCompleteValue
            }
        }).then(function(response){
            controller.getTasks();
        })
    }

    this.deleteTasks = function(tasks){
        $http({
            method:'DELETE',
            url:'/tasks/' + tasks._id
        }).then(function(response){
            controller.getTasks();
        })
    }

    this.editTasks = function(tasks){
        $http({
            method:'PUT',
            url:'/tasks/' + tasks._id,
            data: {
                description: this.updatedDescription,
                complete: tasks.complete
            }
        }).then(function(response){
            controller.getTasks();
        })
    }





this.getTasks();

}]); //closes app.controller
