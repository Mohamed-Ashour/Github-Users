(function () {
  "use strict";

  desctipe('github api service', function () {
    var listService, httpBackend, detailsService;

    beforeEach(module('myApp'));
    beforeEach( inject( function(_listService_, _detailsService_, $httpBackend) {
      listService = _listService_;
      detailsService = _detailsService_;
      httpBackend = $httpBackend;
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should return list of users', function () {
      var returnData = [
        {
          "login": "mojombo",
          "id": 1,
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3"
        },
        {
          "login": "defunkt",
          "id": 2,
          "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3"
        }
      ];

      httpBackend.expectGET('https://api.github.com/users').respond(returnData);

      var result;
      listService.listUsers().then(function(data) {
        result = data;
      });

      httpBackend.flush();

      expect(result).toEqual(returnData);

    });

    it('should return user details', function () {
      var returnData = {
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3"
      };

      httpBackend.expectGET('https://api.github.com/users/' + 'mojombo').respond(returnData);

      var result;
      listService.listUsers('mojombo').then(function(data) {
        result = data;
      });

      httpBackend.flush();

      expect(result).toEqual(returnData);

    });

  });

})();
