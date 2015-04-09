'use strict';

/**
 * RestaurantController
 * @constructor
 */
var OrderController = function ($scope, $http, $q,  ngTableParams) {

    if(!$scope.model) {
        $scope.model = {};
    }

    if(!$scope.model.orders) {
        $scope.model.orders = {};
    }

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
        getData: function ($defer, params) {
            $http.get('orders/orderHistory').success(function(data){
                $scope.model.orders  = data;

                var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter(), true) :
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

};

