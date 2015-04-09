'use strict';

/**
 * InvoiceController
 * @constructor
 */
var InvoiceController = function ($scope) {

    if(!$scope.model) {
        $scope.model = {};
    }
    $scope.totalPrice = function() {
      if($scope.model.selectedItems) {
          $scope.model.totalPrice = $scope.model.selectedItems.reduce(function(memo, item) {
              return memo + (item.price * item.quantity); // return previous total plus current age
          }, 0); // initialize age with 0 that will be passed as memo
          return $scope.model.totalPrice;
      }
        return 0;
    };

    $scope.submitt = function () {
      alert("Order submitted successfully");
    };

};