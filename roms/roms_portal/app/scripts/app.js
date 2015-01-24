'use strict';

angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
    'ui.sortable',
    'ui.router',
    'ngTable',
//    'lodash',
//    'directives',
  'LocalStorageModule'
])
  .config(['localStorageServiceProvider', '$stateProvider', '$urlRouterProvider', function(localStorageServiceProvider, $stateProvider, $urlRouterProvider){
    localStorageServiceProvider.setPrefix('ls');
        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/restaurants1.html',
                controller: 'RestaurantCtrl',
                pageId: 'something'
            })
            .state('restaurants', {
                url: '/restaurants',
                templateUrl: 'views/restaurants1.html',
                controller: 'RestaurantCtrl',
                pageId: 'something1'
            });

  }])
    .directive('expandableMenuItem', function () {
        return function (scope, elm) {
            $(elm).click(function (e) {
                var $li = $(this).parent("li");
                var $ul = $(this).next("ul");

                if ($li.hasClass("open")) {
                    $ul.slideUp(350);
                    $li.removeClass("open");
                } else {
                    $(".nav > li > ul").slideUp(350);
                    $(".nav > li").removeClass("open");
                    $ul.slideDown(350);
                    $li.addClass("open");
                }

                e.preventDefault();
            });
        };
    });