/// <reference path="../ThirdParty/DefinitelyTyped/node/node.d.ts" />

interface IDisplayItemMeta {
    name: string;
    repositoryName: string;
    specificationName?: string;
    keywords?: string;
}


module Configuration {

    export var APIs: IDisplayItemMeta[] = [
        {
            name: "Contacts",
            repositoryName: "webinos-api-contacts",
            specificationName: "contacts",
            keywords: ""
        },
        {
            name: "Vehicle",
            repositoryName: "webinos-api-vehicle",
            specificationName: "vehicle",
            keywords: "CAN bus, odb, simulator, vehicle, obdsim"
        }, {
            name: "File",
            repositoryName: "webinos-api-file",
            //TODO: Multiple specs out of webinos http://www.w3.org/TR/FileAPI/ , http://www.w3.org/TR/file-writer-api/ , http://www.w3.org/TR/file-system-api/
            keywords: "local file systems, dropbox, virtual, read, writer, directories, files"
        }, {
            name: "App2App",
            repositoryName: "webinos-api-app2app",
            specificationName: "app2app",
            keywords: "messaging, communication, channels, exchange message"
        }, {
            name: "IoT Sensors - Actuators",
            repositoryName: "webinos-api-iot",
            specificationName:"actuators",
            keywords: "actuator, sensors, iot, obd, temperature, light"
        }
    ];
    export var Core: IDisplayItemMeta[] = [
        {
            name: "Utilities",
            repositoryName: "webinos-utilities"
        }
    ];

    export var Platform: IDisplayItemMeta[] = [
        {
            name: "Pzp",
            repositoryName: "webinos-pzp",
            specificationName: "webinoscore",
            keywords: "personal zone proxy, webinos"
        },
        {
            name: "Pzh",
            repositoryName: "webinos-pzh",
            keywords: "personal zone hub, webinos"
        }
    ];

    // NodeJs exports for file downloader
    if (typeof(exports) !== "undefined") {
        exports["APIs"] = APIs;
        exports["Core"] = Core;
        exports["Platform"] = Platform;
    }

}