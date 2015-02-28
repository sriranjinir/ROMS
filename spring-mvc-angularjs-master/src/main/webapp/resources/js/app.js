'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularSpringApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives', 'ngTable', 'ui.router', 'ngResource']);

// Declare app level module which depends on filters, and services
App.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
//            templateUrl: '/home',
            pageId: 'home'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            pageId: 'login'
        })
        .state('restaurants', {
            url: '/restaurants',
            templateUrl: 'restaurants/layout.html',
            controller: 'RestaurantController',
            pageId: 'restaurantPage'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'register/registerForm.html',
            pageId: 'registerPage'
        })
        .state('orders', {
            abstract:true,
            url: '/orders',
            templateUrl: 'orders/layout',
            controller: 'OrdersController',
            pageId: 'orderCreatePage'
        })
        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('orders.selectRestaurant', {
            url: '/selectRestaurant',
            templateUrl: 'orders/resLayout.html',
            controller: 'RestaurantController'
        })

        // url will be /form/interests
        .state('orders.selectItems', {
            url: '/selectItems',
            templateUrl: 'orders/selectItems.html',
            controller: 'MenuController'
        })

        // url will be /form/payment
        .state('orders.previewInvoice', {
            url: '/previewInvoice',
            templateUrl: 'orders/previewInvoice.html',
            controller: 'InvoiceController'
        });

}]);
