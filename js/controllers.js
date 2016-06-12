var usersControllers = angular.module('usersControllers', []);

usersControllers.controller('UsersList', ['$http', function ($http) {
  var self = this;
  // self.users = {};
  var usersCount = 0;
  var pagesShown = 1;
  var pageSize = 10;

  $http.get('https://api.github.com/users').success(function(data) {
    //console.log(data);
    self.users = data;
    usersCount = self.users.length;
  });

  self.paginationLimit = function() {
    return pageSize * pagesShown;
  };

  self.hasMoreItemsToShow = function() {
    return pagesShown < (usersCount / pageSize);
  };

  self.showMoreItems = function() {
    pagesShown = pagesShown + 1;
  };

}]);


usersControllers.controller('UserDetails', ['$http', '$stateParams', function ($http, $stateParams) {
  var self = this;
  var login = $stateParams.login;
  // console.log(login);
  //self.user = {};

  $http.get('https://api.github.com/users/' + login ).success(function (data) {
    self.user = data;
    // console.log(data);
  });
}]);
