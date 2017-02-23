'use strict'
var app = angular.module('isaAdmin.commands.directives', []);

app.directive('isaTaginput', function() {
    return {
        link: function($scope, element, attrs) {
            // Trigger when number of children changes,
            // including by directives like ng-repeat
            //$('input[data-role=tagsinput]').tagsinput('refresh');
            //console.log('test');
            var watch = $scope.$watch(function() {
                return element.children().length;
            }, function() {
                // Wait for templates to render
                $scope.$evalAsync(function() {
                    // Finally, directives are evaluated
                    // and templates are renderer here
                    var children = element.children();
                    //console.log(children);
                    $('input[data-role=tagsinput]').tagsinput('refresh');
                });
            });
        },
    };
});


app.directive('isaTagmanager', function() {
    return {
        restrict: 'E',
        scope: {
            tags: '='
        },
        template: '<input type="text" placeholder="{{text}}" ng-model="new_value" class="form-control"></input> ' +
            '<ul class="tagging no-list-type">' +
            '<li ng-repeat="(idx, tag) in tags"><span class="tag"><span>#</span>{{tag}} <a role="button" ng-click="remove(idx)" class="tag-i">×</a></span> </li>' +
            '</ul>',
        link: function($scope, $element, _attrs) {
            //
            $scope.text = _attrs.placeholder;

            // FIXME: this is lazy and error-prone
            var input = angular.element($element.children()[0]);

            // This adds the new tag to the tags array
            $scope.add = function() {
                $scope.tags.push($scope.new_value);
                $scope.new_value = "";
            };

            // This is the ng-click handler to remove an item
            $scope.remove = function(idx) {
                $scope.tags.splice(idx, 1);
            };

            // Capture all keypresses
            input.bind('keypress', function(event) {
                // But we only care when Enter was pressed
                if (event.keyCode == 13) {
                    // There's probably a better way to handle this...
                    $scope.$apply($scope.add);
                }
            });
        }
    };
});
