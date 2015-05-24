'use strict';

socialNetwork.controller('logoutController', function ($scope, $location, notifyService, userService) {
    $scope.logout = function () {
        userService.logout().then(
            function (data) {
                notifyService.showInfo('Successfully logged out.');
                $location.path('/welcome');
            },
            function (error) {
                notifyService.showError(error.message);
            }
        )
    }
});