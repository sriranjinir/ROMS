'use strict';

/**
 * CarController
 * @constructor
 */
var CarController = function ($scope, $filter, ngTableParams) {

    if(!$scope.model) {
        $scope.model = {};
    }

    if(!$scope.model.restaurants) {
        $scope.model.restaurants = {};
    }

    var data = [ {
        "id" : 1,
        "name" : "Saravana bhavan",
        "locality" : "Adayar",
        "city" : "Chennai",
        "state" : "TamilNadu",
        "cuisine" : 'Vegetarian'
    },
        {
            "id" : 2,
            "name" : "Anjappar",
            "locality" : "T Nagar",
            "city" : "Chennai",
            "state" : "TamilNadu",
            "cuisine" : 'Non Vegetarian'
        },
        {
            "id" : 3,
            "name" : "Copper chimney",
            "locality" : "Alwarpet",
            "city" : "Chennai",
            "state" : "TamilNadu",
            "cuisine" : 'Asian Cuisine'
        },
        {
            "id" : 4,
            "name" : "Woodlands",
            "locality" : "Alwarpet",
            "city" : "Chennai",
            "state" : "TamilNadu",
            "cuisine" : 'Asian Cuisine'
        },
        {
            "id" : 5,
            "name" : "Hot chips",
            "locality" : "Alwarpet",
            "city" : "Chennai",
            "state" : "TamilNadu",
            "cuisine" : 'Asian Cuisine'
        },
        {
            "id" : 6,
            "name" : "Murari",
            "locality" : "Kumbakonam",
            "city" : "Kumbakonam",
            "state" : "TamilNadu",
            "cuisine" : 'Vegetarian'
        },
        {
            "id" : 7,
            "name" : "Adithya",
            "locality" : "Kumbakonam",
            "city" : "Kumbakonam",
            "state" : "TamilNadu",
            "cuisine" : 'Vegetarian'
        }];


    $scope.model.restaurants = data;
    $scope.tableParams = new ngTableParams({
        filter: {
        },
        debugMode: true,
        page: 1,
        count: 5,
        sorting: {
            id: 'asc'     // initial sorting Id
        }
    }, {
        filterDelay: 250,
        total: data.length,
        getData: function ($defer, params) {
            var orderedData = params.filter() ?
                $filter('filter')(data, params.filter()) : data;

            params.total(orderedData.length);

            $defer.resolve(params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    $scope.clearFilters = function () {
        _.each($scope.tableParams.filter(), function (v, k) {
            $scope.tableParams.filter()[k] = '';
        });
    };

//        $scope.getRestaurants = function() {
//            return $scope.model.restaurants.tableParams.data;
//        };
//
//        $scope.clearFilters = function () {
//            ngTableUtil.clearFilters($scope.model.restaurants.tableParams);
//        };
//
//        $scope.select = function (id) {
//            $state.go('supplier-product/detail', {id: id});
//        };

};

