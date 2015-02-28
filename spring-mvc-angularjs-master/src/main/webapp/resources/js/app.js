'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularSpringApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives', 'ngTable', 'ui.router', 'ngResource']);

// Declare app level module which depends on filters, and services
App.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'restaurants/layout.html',
            controller: 'RestaurantController',
            pageId: 'something'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            pageId: 'login'
        })
        .state('restaurants', {
            url: '/restaurants',
            templateUrl: 'trains/layout.html',
            controller: 'RestaurantCtrl',
            pageId: 'something1'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'register/registerForm.html',
            pageId: 'registerPage'
        })
        .state('orders', {
            url: '/orders',
            templateUrl: 'orders/layout',
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
            templateUrl: 'orders/selectItems.html'
        });
//
//        // url will be /form/payment
//        .state('form.payment', {
//            url: '/payment',
//            templateUrl: 'form-payment.html'
//        });

}]);
