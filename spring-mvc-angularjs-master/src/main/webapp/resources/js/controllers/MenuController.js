'use strict';

/**
 * RestaurantController
 * @constructor
 */
var MenuController = function ($scope, $filter, $http, $q,  ngTableParams) {

    if(!$scope.model) {
        $scope.model = {};
    }

        var data = [{id:1, name: "Idly", price: 50, quantity: 1, role: 'Breakfast'},
            {id:2, name: "Dosa", price: 50, quantity: 1, role: 'Breakfast'},
            {id:3, name: "Mini Tiffin", price: 150, quantity: 1, role: 'Breakfast'},
            {id:4, name: "Paneer Tikka", price: 150, quantity: 1, role: 'Appetiser'},
            {id:5, name: "Onion Pakoda", price: 100, quantity: 1, role: 'Appetiser'},
            {id:6, name: "Tomoato Soup", price: 70, quantity: 1, role: 'Appetiser'},
            {id:7, name: "Samosa", price: 30, quantity: 1, role: 'Appetiser'},
            {id:8, name: "Paneer Mutter", price: 200, quantity: 1, role: 'Main course'},
            {id:9, name: "Aloo Mutter", price: 180, quantity: 1, role: 'Main course'},
            {id:10, name: "Kadai Vegetables", price:180, quantity: 1, role: 'Main course'},
            {id:11, name: "Veg Pulao", price: 250, quantity: 1, role: 'Main course'},
            {id:12, name: "Gulab Jamun", price: 150, quantity: 1, role: 'Desserts'},
            {id:13, name: "Icecrean", price: 75, quantity: 1, role: 'Desserts'},
            {id:14, name: "Fruit Salad", price: 150, quantity: 1, role: 'Desserts'},
            {id:15, name: "Dosa", price: 50, quantity: 1, role: 'Dinner'},
            {id:16, name: "Idly", price: 50, quantity: 1, role: 'Dinner'},
            {id:17, name: "Mini Tiffin", price: 150, quantity: 1, role: 'Dinner'}];

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10          // count per page
        }, {
            groupBy: function(item) {
                return item.role ;
            },
            total: data.length,
            getData: function($defer, params) {
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, $scope.tableParams.orderBy()) :
                    data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    if(!$scope.model.selectedItems) {
        $scope.model.selectedItems = [];
    }
    $scope.select = function(id) {
       if(! _.find($scope.model.selectedItems, function (item) {
            return item.id === id;
        })) {
           $scope.model.selectedItems.push(getItem(id));
       }
    };

    var getItem = function(id) {
        return _.find(data, function (item) {
            return item.id === id;
        });
    };

    $scope.isSelected = function(id) {
        return _.find($scope.model.selectedItems, function (item) {
            return item.id === id;
        });
    };
};