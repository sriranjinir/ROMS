'use strict';

/**
 * AddressController
 * @constructor
 */
var AddressController = function ($scope) {

    if(!$scope.model) {
        $scope.model = {};
    }
    $scope.model.address = {};
    var address = {};
    address.addressLine1 = "10";
    address.addressLine2 = "Sriram nagar";
    address.city = "Kumbakonam";
    address.pincode = "612702";
    $scope.model.address = address;

    $scope.showAddress = function () {
      $scope.showAddress = true;
    };

};