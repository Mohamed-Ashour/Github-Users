(function () {

  angular.module('myApp')
    .controller('UsersListController', ['listService', function (listService) {
      var vm = this;
      var usersCount = 0;
      var pagesShown = 1;
      var pageSize = 10;

      activate();

      vm.paginationLimit = function() {
        return pageSize * pagesShown;
      };
      vm.hasMoreItemsToShow = function() {
        return pagesShown < (usersCount / pageSize);
      };
      vm.showMoreItems = function() {
        pagesShown = pagesShown + 1;
      };

      function activate() {
        listService.listUsers().then(function(data) {
          vm.users = data;
          usersCount = vm.users.length;
        });
      }
    }]);

})();
