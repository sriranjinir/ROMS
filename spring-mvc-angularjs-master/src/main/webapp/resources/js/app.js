'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularSpringApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives', 'ngTable', 'ui.router', 'ngResource']);

// Declare app level module which depends on filters, and services
App.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'cars/layout.html',
            controller: 'RestaurantController',
            pageId: 'something'
        })
        .state('restaurants', {
            url: '/restaurants',
            templateUrl: 'trains/layout.html',
            controller: 'RestaurantCtrl',
            pageId: 'something1'
        });

}]);
