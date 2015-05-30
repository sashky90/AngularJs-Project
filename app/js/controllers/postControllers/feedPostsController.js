'use strict';

socialNetwork.controller('feedPostsController', function ($scope, $location, $routeParams, postsService, authentication, notifyService) {
    var user = authentication.getUserData().username;
    $scope.editPostContainer = {};

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
    //$scope.getNewsFeedPosts();

    $scope.getUserWallPosts = function (username) {
        postsService.getUserWallPosts(username).then(
            function success(userWallPosts) {
                userWallPosts.data.forEach(function(post) {

                    post = postsService.getAvailablePostOptions(post, user);
                });
                $scope.posts = userWallPosts.data;
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

    $scope.deletePost = function(post) {
        postsService.deletePost(post).then(
            function success(result) {
                notifyService.showInfo("Successfully deleted post.");

                $scope.posts = $scope.posts.filter(function(p) {
                    return p.id != post;
                });
            },
            function error(error) {
                notifyService.showError("Error while deleting post.");
            })
    };

    $scope.editPost = function(post) {
        postsService.editPost(post.id, $scope.editPostContainer[post.id]).then(
            function success(result) {
                notifyService.showInfo("Successfully edited post.");
                post.postContent = $scope.editPostContainer[post.id];
                $scope.editPostContainer[post.id] = undefined;
            },
            function error(error) {
                notifyService.showError("Error while editing post.");
            })
    };

    $scope.enableEditPost = function(post) {
        $scope.editPostContainer[post.id] = post.postContent;
    };

    $scope.cancelEditPost = function(post) {
        $scope.editPostContainer[post.id] = undefined;
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