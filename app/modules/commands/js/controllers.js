var app = angular.module('isaAdmin.commands.controllers', [])

app.controller('CommandsController', function($scope, $state, $window, Command) {
    //pagination data
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    //load data
    $scope.commands = Command.query();

    //# ACTIONS
    //delete
    $scope.delete = function(command) {
        if ($window.confirm('Are you sure?')) {
            command.$delete(function() {
                $state.go('commands_all', undefined, {
                    reload: true
                });
            });
        }
    }
});

app.controller('CommandCreateController', ['$scope', '$state', 'Command', function($scope, $state, Command) {
    $scope.command = new Command();
    $scope.command.questions = [];
    $scope.command.answers = [];

    $scope.save = function() {

        $scope.command.$save(function() {
            $state.go('commands_all');
        });
    }

    $scope.$broadcast('dataLoaded');
}]);

app.controller('CommandUpdateController', ['$scope', '$state', '$stateParams', '$timeout', 'Command', function($scope, $state, $stateParams, $timeout, Command) {
    $scope.command = Command.get({
        id: $stateParams.id
    });

    $scope.save = function() {
        $scope.command.$update(function() {
            $state.go('commands_all');
        });
    }


    //refresh tag input data
    //$('input[data-role=tagsinput]').tagsinput('refresh');
}]);
