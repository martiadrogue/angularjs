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

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.artists.length - 1;
    }

    if ($routeParams.itemId < $scope.artists.length - 1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }
  }

  function showError () {
    alert('Something is wrong with that request! ');
  }
}
