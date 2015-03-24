var app = angular.module('app', []);
app.controller('SettingsController', SettingsController);

function SettingsController () {
  this.name = "John Smith";
  this.title = "staff author";
  this.company ="Death Star";
}
