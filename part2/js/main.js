var app = angular.module('app', []);
app.controller('SettingsController', ['$scope', SettingsController]);

function SettingsController($scope) {
  $scope.author = {
    "name": "John Smith",
    "title": "staff author",
    "company": "Death Star"
  };
}
