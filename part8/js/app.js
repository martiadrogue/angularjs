var myApp = angular.module('myApp',['ngRoute', 'artistControllers']);

myApp.config(['$routeProvider', Router]);

function Router ($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  });
  $routeProvider.otherwise({
    redirectTo: '/list'
  });
}
