'use strict';

socialNetwork.controller('appController', function ($scope, authentication) {
    $scope.authenticated = function () {
        return authentication.isLoggedIn();
    }
});