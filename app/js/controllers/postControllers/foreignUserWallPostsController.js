'use strict';

socialNetwork.controller('UserPostsController', function ($scope, $routeParams, postsService, authentication, notifyService) {
    var user = authentication.getUserData().username;



    $scope.getUserWallPosts($routeParams.username);
});