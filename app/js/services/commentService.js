'use strict';

socialNetwork.factory('commentsData', function($http, baseServiceUrl, authentication) {
    function getPostComments(postId) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'posts/' + postId + '/comments',
            headers: authentication.getHeaders()
        });
    }

    function addPostComment(postId, commentContent) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + 'posts/' + postId + '/comments',
            headers: authentication.getHeaders(),
            data: {
                commentContent: commentContent
            }
        });
    }

    function deletePostComment(postId, commentId) {
        return $http({
            method: 'DELETE',
            url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId,
            headers: authentication.getHeaders()
        });
    }

    function editPostComment(postId, commentId, commentContent) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId,
            headers: authentication.getHeaders(),
            data: {
                commentContent: commentContent
            }
        });
    }

    function likePostComment(postId, commentId) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId + '/likes',
            headers: authentication.getHeaders()
        });
    }

    function unlikePostComment(postId, commentId) {
        return $http({
            method: 'DELETE',
            url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId + '/likes',
            headers: authentication.getHeaders()
        });
    }

    return {
        getPostComments: getPostComments,
        addPostComment: addPostComment,
        deletePostComment: deletePostComment,
        editPostComment: editPostComment,
        likePostComment: likePostComment,
        unlikePostComment: unlikePostComment
    }
});