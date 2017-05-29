'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'view1/view1.html', controller: 'myCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'view2/view2.html', controller: 'myCtrl2'});
        $routeProvider.otherwise({redirectTo: '/view2'});
    }]);
