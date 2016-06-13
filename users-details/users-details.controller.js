(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('UserDetailsController', UserDetailsController);

    UserDetailsController.$inject = [ 'detailsService', '$stateParams'];

    function UserDetailsController (detailsService, $stateParams ) {
      var vm = this;
      var login = $stateParams.login;

      activate();

      function activate() {
        detailsService.getDetails(login).then(function (data) {
          vm.user = data;
        });
      }
    }

})();
