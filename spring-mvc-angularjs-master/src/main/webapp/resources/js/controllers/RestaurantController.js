'use strict';

/**
 * CarController
 * @constructor
 */
var RestaurantController = function ($scope, $filter, $http, ngTableParams) {

    if(!$scope.model) {
        $scope.model = {};
    }

    if(!$scope.model.restaurants) {
        $scope.model.restaurants = {};
    }

//    var data = [ {
//        "id" : 1,
//        "name" : "Saravana bhavan",
//        "locality" : "Adayar",
//        "city" : "Chennai",
//        "state" : "TamilNadu",
//        "cuisine" : 'Vegetarian'
//    },
//        {
//            "id" : 2,
//            "name" : "Anjappar",
//            "locality" : "T Nagar",
//            "city" : "Chennai",
//            "state" : "TamilNadu",
//            "cuisine" : 'Non Vegetarian'
//        },
//        {
//            "id" : 3,
//            "name" : "Copper chimney",
//            "locality" : "Alwarpet",
//            "city" : "Chennai",
//            "state" : "TamilNadu",
//            "cuisine" : 'Asian Cuisine'
//        },
//        {
//            "id" : 4,
//            "name" : "Woodlands",
//            "locality" : "Alwarpet",
//            "city" : "Chennai",
//            "state" : "TamilNadu",
//            "cuisine" : 'Asian Cuisine'
//        },
//        {
//            "id" : 5,
//            "name" : "Hot chips",
//            "locality" : "Alwarpet",
//            "city" : "Chennai",
//            "state" : "TamilNadu",
//            "cuisine" : 'Asian Cuisine'
//        },
//        {
//            "id" : 6,
//            "name" : "Murari",
//            "locality" : "Kumbakonam",
//            "city" : "Kumbakonam",
//            "state" : "TamilNadu",
//            "cuisine" : 'Vegetarian'
//        },
//        {
//            "id" : 7,
//            "name" : "Adithya",
//            "locality" : "Kumbakonam",
//            "city" : "Kumbakonam",
//            "state" : "TamilNadu",
//            "cuisine" : 'Vegetarian'
//        }];


//    $scope.model.restaurants = data;
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
//        total: data.length,
        getData: function ($defer, params) {
            $http.get('cars/carlist.json').success(function(data){
                $scope.model.restaurants  = data;


//                $scope.priceList = resp;
                // Convert to integer before sorting.
//                angular.forEach($scope.priceList, function(el){
//                    el.id = parseInt(el.id);
//                });

            var filteredData = params.filter() ?
                $filter('filter')(data, params.filter()) :
                data;

            var orderedData = params.sorting() ?
                $filter('orderBy')(filteredData, params.orderBy()) :
                filteredData;

            params.total(orderedData.length);
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            });
        }
    });
    $scope.tableParams.reload();
    $scope.clearFilters = function () {
        _.each($scope.tableParams.filter(), function (v, k) {
            $scope.tableParams.filter()[k] = '';
        });
    };

//        $scope.select = function (id) {
//            $state.go('supplier-product/detail', {id: id});
//        };

};

