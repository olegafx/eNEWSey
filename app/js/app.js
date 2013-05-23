'use strict';

angular.module('eNEWSey', ['ui.bootstrap', 'eNEWSey.controllers', 'eNEWSey.directives', 'eNEWSey.filters', 'eNEWSey.services', 'ngSanitize'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'partials/feedsList.html'})
            .otherwise({redirectTo: '/'})
    }]);