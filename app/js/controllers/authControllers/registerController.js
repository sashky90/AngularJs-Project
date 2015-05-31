'use strict';

socialNetwork.controller('registerController', function ($scope, $location, notifyService, userService) {
    $scope.user = {};

    $scope.register = function (user) {
        userService.register(user).then(
            function (data) {
                notifyService.showInfo("Successfully registered. Welcome");
                $location.path('/home');
            },
            function (error) {
                notifyService.showError('Registration failed. Please try again.');
            }
        )
    };
    
});