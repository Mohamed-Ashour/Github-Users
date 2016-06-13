(function () {
  'use strict';

  angular
    .module('myApp')
    .factory('detailsService', detailsService);

    detailsService.$inject = ['$http'];

    function detailsService ($http) {
      return { getDetails : getDetails };

      function getDetails(login) {
        return $http.get('https://api.github.com/users/' + login ).then(function (response) {
          return response.data
        });
      }
    }

})();
