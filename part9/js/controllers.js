var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', ListController]);
artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', DetailsController]);

function ListController($scope, $http) {
  $http.get('js/data.json').success(fillArtists).error(showError);

  function fillArtists (data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  }

  function showError () {
    alert('Something is wrong with that request! ');
  }
}

function DetailsController($scope, $http, $routeParams) {
  $http.get('js/data.json').success(fillArtists).error(showError);

  function fillArtists (data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
  }

  function showError () {
    alert('Something is wrong with that request! ');
  }
}
