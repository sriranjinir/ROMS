'use strict';

/* Directives */

var AppDirectives = angular.module('AngularSpringApp.directives', []);

AppDirectives.directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
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
