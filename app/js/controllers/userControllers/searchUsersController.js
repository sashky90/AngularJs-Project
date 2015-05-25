'use strict';

socialNetwork.controller('searchUserController', function ($scope, userService) {
    $scope.search = function (searchName) {
        if ($scope.searchName != null && $scope.searchName != '') {
            userService.searchUserByName(searchName).then(
                function success(foundUsers) {
                    $scope.foundUsers = foundUsers.data;
                },
                function error(error) {

                })

        } else {
            $scope.foundUsers = {};
        }

    }

});
