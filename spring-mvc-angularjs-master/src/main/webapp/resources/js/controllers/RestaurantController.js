'use strict';

/**
 * RestaurantController
 * @constructor
 */
var RestaurantController = function ($scope, $filter, $http, $q,  ngTableParams) {

    if(!$scope.model) {
        $scope.model = {};
    }

    if(!$scope.model.restaurants) {
        $scope.model.restaurants = {};
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
            $http.get('restaurants/restaurantlist.json').success(function(data){
                $scope.model.restaurants  = data;

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

    $scope.cuisines = function () {
        var def = $q.defer(),
            cuisines = [
                {
                    'id': 'VEGETARIAN',
                    'title': 'VEGETARIAN'
                },
                {
                    'id': 'NON-VEGETARIAN',
                    'title': 'NON-VEGETARIAN'
                },
                {
                    'id': 'ASIAN',
                    'title': 'ASIAN'
                }
            ];
        def.resolve(cuisines);
        return def;
    };

    $scope.isSelected = function (id) {
        return $scope.model.restaurant && $scope.model.restaurant.id === id;
    };

    $scope.select = function (id) {
        $scope.model.restaurant = getRestaurant(id);
    };

    var getRestaurant = function (id) {
        return _.find($scope.model.restaurants, function (restaurant) {
            return restaurant.id === id;
        });
    };

    $scope.goNext = function () {
        $scope.Submitted = true;
//        $state.go("orders.selectItems");
    };
};

