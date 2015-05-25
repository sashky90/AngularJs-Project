'use strict';

socialNetwork.controller('feedPostsController', function ($scope, postsService, authentication, notifyService) {
    //var user = authentication.getUserData().username;

    $scope.getNewsFeedPosts = function () {
        postsService.getNewsFeedPosts().then(
            function success(posts) {
                $scope.posts = posts.data;
            },
            function error(error) {
                notifyService.showError('Error requesting data')
            }
        )
    };
    $scope.getNewsFeedPosts();
});