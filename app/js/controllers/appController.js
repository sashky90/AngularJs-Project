'use strict';

socialNetwork.controller('appController', function ($scope, authentication) {
    $scope.authenticated = function () {
        return authentication.isLoggedIn();
        console.log(authentication.isLoggedIn())
    };

    $scope.formatImageString = function (data) {
        if(data) {
            return 'data:image/jpeg;base64,' + data;
        }
        return null;
    };


});