(function () {
    "use strict";

    angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/complete", {
            templateUrl: "app/components/cart/thank-you.html"
        });
        $routeProvider.when("/placeorder", {
            templateUrl: "app/components/cart/place-order.html"
        });
        $routeProvider.when("/checkout", {
            templateUrl: "app/components/cart/checkout-summary.html"
        });
        $routeProvider.when("/products", {
            templateUrl: "app/product-list/product-list-view.html"
        });
        $routeProvider.otherwise({
            templateUrl: "app/product-list/product-list-view.html"
        });
    });

})();
