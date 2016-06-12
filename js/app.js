var myApp = angular.module('myApp', ['ui.router', 'usersControllers']);

myApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/users/mojombo');

  // $stateProvider.state('users', {
  //   url : '/users',
  //   templateUrl: 'users.html',
  //   controller: 'UsersList',
  //   controllerAs: 'ctrl'
  // });

  $stateProvider.state('users', {
    url: '/users/:login',
    views: {
      'UsersList': {
        templateUrl: 'users.html',
        controller: 'UsersList as ctrl'
      },
      'UserDetails': {
        templateUrl: 'users.details.html',
        controller: 'UserDetails as detailsCtrl'
      }
    }
  });

}]);
