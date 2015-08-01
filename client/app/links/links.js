angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  $scope.data = {};

  $scope.getLinks = function () {
    
    Links.getLinks()
    .then(function(data){
      $scope.data = data;
    });
  };


  $scope.followLink = function(link){};
  $scope.getLinks();

});
