(function () {
    "use strict";

    var model = {
        user: "Adam",
        items: [{ action: "Buy Flowers", done: false },
            { action: "Get Shoes", done: false },
            { action: "Collect Tickets", done: true },
            { action: "Call Joe", done: false }]
        },

        todoApp = angular.module("todoApp", []);

    todoApp.controller("ToDoCtrl", function ($scope) {
        $scope.todo = model;

        $scope.incompleteCount = function () {
            var count = 0;
            angular.forEach($scope.todo.items, function (item) {
                if (!item.done) { count++ }
            });
            return count;
        }
    });

})();
