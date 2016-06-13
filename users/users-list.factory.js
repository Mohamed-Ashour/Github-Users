(function () {
  'use strict';

  angular
    .module('myApp')
    .factory('listService', listService);

    listService.$inject = ['$http'];

    function listService($http) {
      return { listUsers : listUsers };

      function listUsers() {
        return $http.get('https://api.github.com/users').then( function (response){
          return response.data;
        });
      }
    }

})();
