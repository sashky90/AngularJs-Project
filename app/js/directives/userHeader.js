'use strict';

socialNetwork.directive('userHeader', function () {
    return {
        restrict: 'A',
        templateUrl: 'templates/userHeader.html',
        controller: 'userHeaderController'
    }
});