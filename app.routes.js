(function () {

  angular.module('myApp')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/users/mojombo');

      $stateProvider.state('users', {
        url : '/users',
        abstract: true,
        templateUrl: 'users/users-list.html',
        controller: 'UsersListController',
        controllerAs: 'vm'
      });

      $stateProvider.state('users.details', {
        url : '/:login',
        templateUrl: 'users-details/users.details.html',
        controller: 'UserDetailsController',
        controllerAs: 'vm'
      });

    }]);

})();
