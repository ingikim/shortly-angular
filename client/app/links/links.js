angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
    .then(function(data){
      $scope.data = data;
    });
  };

  $scope.indexClick = function () {
    $location.path('/links');
  };

  $scope.createClick = function () {
    $location.path('/shorten');
  };


  $scope.followLink = function(link){};
  $scope.getLinks();

});
