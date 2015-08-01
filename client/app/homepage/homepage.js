angular.module('shortly.homepage', [])

.controller('HomepageController', function($scope, $location){
  $scope.indexClick = function () {
    $location.path('/links');
  };

  $scope.createClick = function () {
    $location.path('/shorten');
  };

});