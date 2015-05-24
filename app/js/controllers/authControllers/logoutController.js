'use strict';

socialNetwork.controller('logoutController', function ($scope, $location, notifyService, userService) {
    (function() {
        userService.logout().then(
            function() {
                notifyService.showInfo('Successfully logged out.');
                $location.path('/welcome');
            });
    })();
});