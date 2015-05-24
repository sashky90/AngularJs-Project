'use strict';

socialNetwork.controller('loginController', function ($scope, $location, notifyService, userService) {

    $scope.login = function (user) {
        userService.login(user).then(
            function success(data) {
                notifyService.showInfo('Successfully logged in.');
                $location.path('/home');
            },
            function (error) {
                notifyService.showError('Login failed. Review your data and try again', error);
            }
        )
    }

});