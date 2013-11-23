/// <reference path="Globals.ts" />
/// <reference path="../ThirdParty/DefinitelyTyped/angularjs/angular.d.ts" />
var app;
(function (app) {
    // I have defined data-ng-app="app" in the index.html and thus I can use the controller as global
    var myModule = angular.module("app", ['ngRoute', 'displays']);

    myModule.config(['$routeProvider', '$locationProvider', startUpConfiguration]);

    function startUpConfiguration($routeProvider, $locationProvider) {
        for (var i = 0; i < Globals.RegisteredSections.length; i++) {
            Globals.RegisteredSections[i].registerRoutes($routeProvider, $locationProvider);
        }

        // disable html5 as we can't configure the server to support it
        $locationProvider.html5Mode(false).hashPrefix('!');
    }

    myModule.filter('lookupValue', function () {
        return function (value) {
            for (var i = 0; i < Globals.LookupTexts.length; i++) {
                if (Globals.LookupTexts[i].value == value)
                    return Globals.LookupTexts[i].text;
            }
        };
    });

    app.appScope;
    myModule.controller('main', ['$scope', "$filter", 'loader', mainCntl]);

    function mainCntl($scope, $filter, loader) {
        app.appScope = $scope;
        $scope.title = "webinos Docs";
        $scope.loaderMessage = "Almost there...";
        $scope.hideLoader = false;

        // Search field for filtering
        $scope.q = "";

        $scope.currentSection = 'app';

        $scope.$on('$routeChangeStart', function (scope, next, current) {
            loader.Show();
        });
        $scope.$on('$routeChangeSuccess', function (scope) {
            loader.Hide();
        });
        $scope.$on('$routeChangeError', function () {
            loader.Hide();
        });

        $scope.SideNavigation = Globals.SideNavigation;

        for (var index = 0; index < $scope.SideNavigation.length; index++) {
            var item = $scope.SideNavigation[index];
            item.filteredSubItems = item.subItems;
            item.isFiltered = false;
            item.isVisible = function () {
                return item.filteredSubItems.legth > 0;
            };
        }

        // We will implement custom filtering
        $scope.$watch('q', function (val) {
            if (!val || val == "") {
                for (var index = 0; index < $scope.SideNavigation.length; index++) {
                    var item = $scope.SideNavigation[index];
                    item.isFiltered = false;
                    item.filteredSubItems = item.subItems;
                }
            } else {
                for (var index = 0; index < $scope.SideNavigation.length; index++) {
                    var item = $scope.SideNavigation[index];
                    item.isFiltered = true;
                    item.filteredSubItems = $filter('filter')(item.subItems, function (item) {
                        if (item.keywords)
                            return (item.text + item.keywords).toUpperCase().indexOf(val.toUpperCase()) != -1;
else
                            return item.text.toUpperCase().indexOf(val.toUpperCase()) != -1;
                    });
                }
            }
        });
    }

    myModule.factory('titleSetter', function () {
        return function (msg) {
            msg = "webinos Docs - " + msg;
            if (!app.appScope.$$phase)
                app.appScope.$apply('title = "' + msg + '"');
else
                app.appScope["title"] = msg;
        };
    });
    myModule.factory('activeSection', function () {
        return function (sectionName) {
            if (!app.appScope.$$phase)
                app.appScope.$apply('currentSection = "' + sectionName + '"');
else
                app.appScope["currentSection"] = sectionName;
        };
    });

    // Retrieves the mainCntl scope and sets the binded properties
    myModule.factory('loader', function () {
        return {
            SetMessage: function (msg) {
                app.appScope["loaderMessage"] = msg;
                if (!app.appScope.$$phase)
                    app.appScope.$digest();
            },
            Show: function () {
                app.appScope["hideLoader"] = false;
                if (!app.appScope.$$phase)
                    app.appScope.$digest();
            },
            Hide: function () {
                app.appScope["hideLoader"] = true;
                if (!app.appScope.$$phase)
                    app.appScope.$digest();
            }
        };
    });

    //myModule.directive('loader',["$rootScope", function ($rootScope) {
    //return {
    //    restrict: 'C',
    //    scope: {
    //        hideLoader: '=',
    //        loaderMessage: '='
    //    },
    //    link: function (scope, element, attrs) {
    //    }
    //};
    //}]);
    app.mod = myModule;
    app.loadComplete = function () {
        angular.injector(['app']).get('loader').Hide();
        $("#mainContent").removeClass("hidden");
    };
})(app || (app = {}));
//# sourceMappingURL=app.js.map
