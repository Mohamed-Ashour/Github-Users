(function () {

  angular.module('myApp')
    .factory('listService', ['$http', function ($http) {
      return { listUsers : listUsers };

      function listUsers() {
        return $http.get('https://api.github.com/users').then( function (response){
          return response.data;
        });
      }
    }]);

})();
