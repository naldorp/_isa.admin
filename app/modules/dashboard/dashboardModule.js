'use strict'
angular.module('dashboardModule', ['ui.router', 'isaAdmin.dashboard.controllers']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard_index', {
        url: '/dashboard',
        controller: 'DashboardController',
        templateUrl: 'modules/dashboard/views/dashboard.html'
    });
    $urlRouterProvider.otherwise('/dashboard');
}]);
