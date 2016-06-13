(function () {

  angular.module('myApp')
    .controller('UserDetailsController', [ 'detailsService', '$stateParams', function (detailsService, $stateParams ) {
      var vm = this;
      var login = $stateParams.login;

      activate();

      function activate() {
        detailsService.getDetails(login).then(function (data) {
          vm.user = data;
        });
      }
    }]);

})();
