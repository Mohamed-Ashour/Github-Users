(function () {

  angular.module('myApp')
    .factory('detailsService', ['$http', function ($http) {
      return { getDetails : getDetails };

      function getDetails(login) {
        return $http.get('https://api.github.com/users/' + login ).then(function (response) {
          return response.data
        });
      }
    }]);

})();
