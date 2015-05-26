'use strict';

socialNetwork.controller('feedPostsController', function ($scope, postsService, authentication, notifyService) {
    var user = authentication.getUserData().username;

    $scope.getNewsFeedPosts = function () {
        postsService.getNewsFeedPosts().then(
            function success(posts) {
                posts.data.forEach(function(post) {
                    post = postsService.getAvailablePostOptions(post, user);
                });

                $scope.posts = posts.data;
            },
            function error(error) {
                notifyService.showError('Error requesting data')
            }
        )
    };
    $scope.getNewsFeedPosts();

    $scope.getUserWallPosts = function (username) {
        postsService.getUserWallPosts(username).then(
            function success(userWallPosts) {
                userWallPosts.data.forEach(function(post) {

                    post = postsService.getAvailablePostOptions(post, user);
                });
                $scope.userWallPosts = userWallPosts.data;
            },
            function error(error) {
                notifyService.showError('Cannot proceed data request.')
            }
        )
    };

    //$scope.loadPosts = function() {
    //    if ($location.path().indexOf('/users/') > -1) {
    //        $scope.getUserWallPosts($routeParams.username);
    //    } else if ($location.path().indexOf('/home') > -1) {
    //        $scope.getNewsFeedPosts();
    //    }
    //};
    //
    //$scope.loadPosts();

    //$scope.addNewPost = function (postContent) {
    //    var contentToPost = {
    //        postContent: postContent,
    //        username: $scope.
    //    }
    //}
});