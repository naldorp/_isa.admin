'use strict'
angular.module('commandsModule', ['ui.router', 'isaAdmin.commands.controllers', 'isaAdmin.commands.directives', 'isaAdmin.commands.services']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('commands_all', {
        url: '/commands/all',
        controller: 'CommandsController',
        templateUrl: 'modules/commands/views/commands.html'
    });

    $stateProvider.state('commands_new', {
        url: '/commands/new',
        controller: 'CommandCreateController',
        templateUrl: 'modules/commands/views/new.html',
        //css: ['http://demo.pixinvent.com/robust-admin/ltr/vertical-content-menu-template/robust-assets/css/plugins/forms/toggle/switchery.min.css', 'http://demo.pixinvent.com/robust-admin/ltr/vertical-content-menu-template/robust-assets/css/plugins/forms/toggle/bootstrap-switch.min.css'],
        js: ['/assets/js/theme/plugins/forms/tags/bootstrap-tagsinput.min.js','/assets/js/theme/plugins/forms/tags/tagging.min.js']
    });

    $stateProvider.state('commands_update', {
        url: '/commands/:id/update',
        controller: 'CommandUpdateController',
        templateUrl: 'modules/commands/views/edit.html'
    });

    $urlRouterProvider.otherwise('/commands/all');
}]);
