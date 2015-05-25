'use strict';

socialNetwork.directive('userSearch', function () {
    return {
        restrict: 'A',
        templateUrl: 'templates/search.html',
        controller: 'searchUserController'
    }
});