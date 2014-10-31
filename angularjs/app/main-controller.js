(function () {
    'use strict';

    angular.module('sportsStore')
        .constant("dataUrl", "http://localhost:2403/products")
        .controller('mainController', ['$scope', "$http", "dataUrl",
            function ($scope, $http, dataUrl) {
                $scope.data = {};
                $http.get(dataUrl)
                    .success(function (data) {
                        $scope.data.products = data;
                    })
                    .error(function (error) {
                        $scope.data.error = error;
                    });
            }]);
})();
