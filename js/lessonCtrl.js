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
});