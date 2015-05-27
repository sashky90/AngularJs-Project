'use strict';

socialNetwork.controller('feedPostsController', function ($scope, $location, $routeParams, postsService, authentication, notifyService) {
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

    $scope.loadPosts = function() {
        if ($location.path().indexOf('/users/') > -1) {
            $scope.getUserWallPosts($routeParams.username);
        } else if ($location.path().indexOf('/home') > -1) {
            $scope.getNewsFeedPosts();
        }
    };

    $scope.loadPosts();

    $scope.addNewPost = function (postContent) {
        var contentToPost = {
            postContent: postContent,
            username: $scope.wallOwner.username
        };

        postsService.addNewPost(contentToPost).then(
            function success(data) {
                notifyService.showInfo('Successfully posted to' + $scope.wallOwner + ' wall');
                $scope.getUserWallPosts($routeParams.username);
            },
            function error(error) {
                notifyService.showError('Cannot proceed data request');
            }
        )
    };

    $scope.deletePost = function(postId) {
        postsService.deletePost(postId).then(
            function success(result) {
                notifyService.showInfo("Successfully deleted post.");
                $scope.loadPosts();
            },
            function error(error) {
                notifyService.showError("Error while deleting post.", error);
            })
    };

    $scope.likePost = function(postId) {
        postsService.likePost(postId).then(
            function success(result) {
                notifyService.showInfo("Successfully liked post.");
                $scope.loadPosts();
            },
            function error(error) {
                notifyService.showError("Error while liking post.", error);
            });
    };

    $scope.unlikePost = function(postId) {
        postsService.unlikePost(postId).then(
            function success(result) {
                notifyService.showInfo("Successfully unliked post.");
                $scope.loadPosts();
            },
            function error(error) {
                notifyService.showError("Error while unliking post.");
            });
    };
});