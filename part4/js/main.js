var app = angular.module('app', []);
app.controller('SettingsController', ['$scope', '$http', SettingsController]);

function SettingsController($scope, $http) {
  $http.get('js/data.json').success(fillArtists).error(showError);

  function fillArtists (data) {
    $scope.artists = data;
  }

  function showError () {
    alert('Something is wrong with that request! ');
  }
}
