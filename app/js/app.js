'use strict';

angular.module('eNEWSey', ['eNEWSey.controllers', 'eNEWSey.directives', 'eNEWSey.filters', 'eNEWSey.services', 'ngSanitize'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: 'partials/feedList.html'})
            .otherwise({redirectTo: '/'})
    }]);