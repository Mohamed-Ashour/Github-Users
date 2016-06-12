var myApp = angular.module('myApp', ['ui.router', 'usersControllers']);

myApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/users/mojombo');

  $stateProvider.state('users', {
    url : '/users',
    templateUrl: 'users.html',
    controller: 'UsersList',
    controllerAs: 'ctrl'
  });

  $stateProvider.state('users.details', {
    url : '/:login',
    templateUrl: 'users.details.html',
    controller: 'UserDetails',
    controllerAs: 'detailsCtrl'
  });

}]);
