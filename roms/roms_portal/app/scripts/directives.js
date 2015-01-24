/* global $ */

    'use strict';

    angular.module('mytodoApp')
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
        })
//        .directive('bootstrapTimepicker', function () {
//            return {
//                require: 'ngModel',
//                link: function (scope, element, attrs, ngModelCtrl) {
//                    $(element).timepicker({
//                        showMeridian: false,
//                        defaultTime: false
//                    }).on('changeTime.timepicker', function (e) {
//                        var time24 = e.time.hours + ":" + e.time.minutes;
//                        ngModelCtrl.$setViewValue(time24);
//                        scope.$apply();
//                    });
//                }
//            };
//        })
        .directive('editableInput', function () {
            // Stop entering text once maximium characters reached.
            return {
                restrict: "C",
                link: function (scope, element) {
                    $(element).keypress(function () {
                        var inputText = $('.editable-input').val();
                        if (inputText.length >= 140) {
                            return false;
                        }
                    });
                }
            };
        })
        .directive('showErrors', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                require: '^?form',
                link: function (scope, el, attrs, formCtrl) {
                    // find the text box element, which has the 'ng-model' attribute
                    var inputEl = el[0].querySelector("[ng-model]");
                    // convert the native text box element to an angular element
                    var inputNgEl = angular.element(inputEl);
                    // get the name on the text box so we know the property to check
                    // on the form controller
                    var inputName = inputNgEl.attr('name');

                    // only apply the has-error class after the user leaves the text box
                    inputNgEl.bind('blur', function () {
                        el.toggleClass('has-error', formCtrl[inputName].$invalid);
                    }).bind('focus', function () {
                        // Remove has-error if element get focus
                        el.removeClass('has-error');
                    });

                    scope.$on('show-errors-check-validity', function () {
                        $timeout(function () {
                            el.toggleClass('has-error', formCtrl[inputName].$invalid);
                        }, 1, false);
                    });

                    scope.$on('show-errors-reset', function () {
                        $timeout(function () {
                            el.removeClass('has-error');
                        }, 1, false);
                    });
                }
            };
        }])
        .directive('showHideRow', function () {
            return function (scope, elm) {
                $(elm).click(function () {
                    var id = $(elm).parent().attr("for");
                    if ($('#' + id).length) {
                        $('#' + id).toggleClass('hide');
                        $(elm).toggleClass('glyphicon-chevron-right');
                        $(elm).toggleClass('glyphicon-chevron-down');
                    }
                });
            };
        });
//        .directive('startDatePicker', startDatePickerDirective)
//        .directive('endDatePicker', endDatePickerDirective);










