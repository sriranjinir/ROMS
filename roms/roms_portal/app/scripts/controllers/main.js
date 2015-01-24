'use strict';

angular.module('mytodoApp')
  .controller('RestaurantCtrl', function ($scope) {

        if(!$scope.model) {
            $scope.model = {};
        }

        if(!$scope.model.restaurants) {
            $scope.model.restaurants = {};
        }

//        if(!$scope.model.restaurants.tableParams) {
            var response = [ {
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
                }];

//            supplierProductService.getAll(function (response) {
//                $scope.model.restaurants.tableParams = ngTableUtil.constructTableParams(response);
//            });
//        }
        $scope.model.restaurants = response;
//        $scope.tableParams = new ngTableParams({
//            filter: {
//                "id" : '',
//                "name" : '',
//                "locality" : '',
//                "city" : '',
//                "state" : '',
//                "Cuisine" : ''
//            },
//            debugMode: true,
//            page: 1,
//            count: 10,
//            sorting: {
//                id: 'asc'     // initial sorting Id
//            }
//        }, {
//            filterDelay: 250,
//            getData: function ($defer, params) {
//                var all = params.filter();
//                // Format DateTime using moment.js
////                var criteria = _.defaults({
////                    'startDateTime': (all.startDateTime === null || all.startDateTime === '') ? '' : moment(all.startDateTime).format("YYYY-MM-DD"),
////                    'endDateTime': (all.endDateTime === null || all.endDateTime === '') ? '' : moment(all.endDateTime).format("YYYY-MM-DD")
////                }, all);
//
////                priceService.findPriceList(all, function (resp) {
//                $scope.model.restaurants = resp;
//                // Convert to integer before sorting.
//                angular.forEach($scope.model.restaurants, function (el) {
//                    el.id = parseInt(el.id);
//                });
//
//                params.total($scope.model.restaurants.length);
//                $defer.resolve($scope.model.restaurants);
////                    $scope.model.restaurants = params.sorting() ? $filter('orderBy')(resp, params.orderBy()) : resp;
//                $scope.model.restaurants = $scope.model.restaurants.slice((params.page() - 1) * params.count(), params.page() * params.count());
////                });
//            }
//        });

//        $scope.clearFilters = function () {
//            _.each($scope.tableParams.filter(), function (v, k) {
//                $scope.tableParams.filter()[k] = '';
//            });
//        };

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

    });