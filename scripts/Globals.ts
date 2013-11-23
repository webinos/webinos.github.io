interface ISectionRegistration {
    name: string;
    registerRoutes($routeProvider, $locationProvider): void;
}

interface ILookupValue {
    value: any;
    text: string;
}

interface INavigationItem {
    link: string;
    text: string;
    keywords?: string;
    sectionName?: string;
    subItems?: INavigationItem[];
}

module Globals {
    // Placeholder to keep all modules to register in app
    export var RegisteredSections: ISectionRegistration[] = []; 

    export function RegisterSection(name, fn) {
        RegisteredSections.push({ name: name, registerRoutes: fn });
    }

    export var LookupTexts: ILookupValue[] = [];
    export function RegisterLookupText(value, text) {
        LookupTexts.push({ value: value, text: text });
    }

    export var SideNavigation: INavigationItem[] = [];
    export function RegisterSideNavigationItem(item: INavigationItem) {
        SideNavigation.push(item);
    }

    export function LoadDisqus(identifier) {
        // http://docs.disqus.com/help/2/
        window["disqus_shortname"] = 'webinosdocs';
        window["disqus_identifier"] = identifier;
        window["disqus_url"] = window.location.href;
        // http://docs.disqus.com/developers/universal/
        (function () {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'http://angularjs.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] ||
                document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        angular.element(document.getElementById('disqus_thread')).html('');
    };
}
