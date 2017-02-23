'use strict'
var app = angular.module('isaAdmin.commands.services', [])

app.factory('Command', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT) {
    return $resource(API_ENDPOINT, {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

app.value('API_ENDPOINT', 'http://isa.westcentralus.cloudapp.azure.com:3000/api/cmd/commands/:id');
