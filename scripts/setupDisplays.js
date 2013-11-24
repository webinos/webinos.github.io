/// <reference path="configuration.ts" />
/// <reference path="Definitions\Showdown.d.ts" />
/// <reference path="Globals.ts" />
var SetupDisplays;
(function (SetupDisplays) {
    var myModule = angular.module("displays", []);

    // Register factory to provide the md converter
    myModule.factory("Showdown", function () {
        return new Showdown.converter();
    });
    var mdFilesCache = {};

    // Register markdown directive
    myModule.directive('mdInclude', [
        'Showdown',
        function (Showdown) {
            return {
                restrict: 'AE',
                link: function (scope, element, attrs) {
                    var fileName = attrs.mdInclude;

                    if (mdFilesCache.hasOwnProperty(fileName)) {
                        element.html(mdFilesCache[fileName]);
                    } else {
                        $.get('/mdfiles/' + fileName + ".md.html", null, function (data) {
                            var html = data ? Showdown.makeHtml(data) : '';
                            mdFilesCache[fileName] = html;
                            element.html(html);
                        });
                    }
                }
            };
        }
    ]);

    // Register specs directive
    myModule.directive('specsInclude', [
        'loader',
        function (loader) {
            return {
                restrict: 'AE',
                link: function (scope, element, attrs) {
                    var iFrame = $("<iframe src='http://dev.webinos.org/specifications/api/" + attrs.specsInclude + ".html' frameborder='0'/>");
                    loader.SetMessage("Loading specs");
                    loader.Show();
                    iFrame.load(function () {
                        loader.Hide();
                    });
                    element.html(iFrame);
                }
            };
        }
    ]);

    var RegisterSection = function (sectionName, items) {
        var rootAction = "/" + sectionName + "/";

        Globals.RegisterSection(sectionName, function ($routeProvider, $locationProvider) {
            $routeProvider.when(rootAction + ':itemName/:tab?', {
                templateUrl: '/templates/displayItem.html',
                controller: [
                    '$scope',
                    '$routeParams',
                    '$filter',
                    '$location',
                    'titleSetter',
                    'activeSection',
                    function ($scope, $routeParams, $filter, $location, titleSetter, activeSection) {
                        var results = $filter('filter')(Configuration[sectionName], { name: $routeParams.itemName });
                        if (results.length != 1)
                            $location.path(rootAction);
                        var item = results[0];
                        $scope.activeTab = $routeParams.tab ? $routeParams.tab : "descr";
                        titleSetter(item.name);
                        activeSection(sectionName);
                        angular.extend($scope, item);

                        Globals.LoadDisqus(sectionName + "_" + item.name);
                    }
                ]
            }).when(rootAction, {
                templateUrl: '/templates/' + sectionName + '.html',
                controller: [
                    '$scope',
                    'titleSetter',
                    'activeSection',
                    function ($scope, titleSetter, activeSection) {
                        titleSetter(sectionName);
                        activeSection(sectionName);
                        $scope.sectionName = sectionName;
                    }
                ]
            });
        });

        var sideMenuLinks = {
            link: '/' + sectionName,
            text: sectionName + " reference",
            sectionName: sectionName,
            subItems: []
        };
        for (var i = 0; i < items.length; i++) {
            sideMenuLinks.subItems.push({
                link: rootAction + items[i].name,
                text: items[i].name,
                keywords: items[i].keywords
            });
        }

        Globals.RegisterSideNavigationItem(sideMenuLinks);
    };

    for (var i in Configuration) {
        RegisterSection(i, Configuration[i]);
    }
})(SetupDisplays || (SetupDisplays = {}));
//# sourceMappingURL=setupDisplays.js.map
