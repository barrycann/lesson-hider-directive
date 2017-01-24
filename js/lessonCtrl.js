angular.module('directivePractice')
.controller('lessonCtrl', function($scope, lessonService){
   $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

   $scope.announceDay = function(lesson, day){
      if(day){
         alert(lesson + ' takes place on ' + day + '.');
      } else {
         alert(lesson + ' has not been assigned a day!');
      }
   }

   $scope.deleteLesson = function(lesson){
      var ind = $scope.lessons.indexOf(lesson);
      $scope.removed = $scope.lessons.splice(ind, 1)
      console.log($scope.removed);
   }
});