var Globals;
(function (Globals) {
    // Placeholder to keep all modules to register in app
    Globals.RegisteredSections = [];

    function RegisterSection(name, fn) {
        Globals.RegisteredSections.push({ name: name, registerRoutes: fn });
    }
    Globals.RegisterSection = RegisterSection;

    Globals.LookupTexts = [];
    function RegisterLookupText(value, text) {
        Globals.LookupTexts.push({ value: value, text: text });
    }
    Globals.RegisterLookupText = RegisterLookupText;

    Globals.SideNavigation = [];
    function RegisterSideNavigationItem(item) {
        Globals.SideNavigation.push(item);
    }
    Globals.RegisterSideNavigationItem = RegisterSideNavigationItem;

    function LoadDisqus(identifier) {
        // http://docs.disqus.com/help/2/
        window["disqus_shortname"] = 'webinosdocs';
        window["disqus_identifier"] = identifier;
        window["disqus_url"] = window.location.href;

        // http://docs.disqus.com/developers/universal/
        (function () {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = 'http://angularjs.disqus.com/embed.js';
            var container;
            if (document.getElementsByTagName('head')[0])
                container = document.getElementsByTagName('head')[0];
            else
                container = document.getElementsByTagName('body')[0];
            container.appendChild(dsq);
        })();
        angular.element(document.getElementById('disqus_thread')).html('');
    }
    Globals.LoadDisqus = LoadDisqus;
    ;
})(Globals || (Globals = {}));
//# sourceMappingURL=Globals.js.map
