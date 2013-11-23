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
            keywords: "gmail, people, address, email, outlook, thunderbird"
        },
        {
            name: "Vehicle",
            repositoryName: "webinos-api-vehicle",
            specificationName: "vehicle",
            keywords: "CAN bus, odb, simulator, vehicle, obdsim, car"
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
            specificationName: "actuators",
            keywords: "actuator, sensors, iot, obd, temperature, light"
        }, {
            name: "Web Notification",
            repositoryName: "webinos-api-webNotification",
            specificationName: "notifications",
            keywords: "instant notifications, user interaction"
        }, {
            name: "Device Orientation",
            repositoryName: "webinos-api-deviceOrientation",
            //TODO: out of webinos
            //specificationName: "http://www.w3.org/TR/2011/WD-orientation-event-20111201/",
            keywords: "compass, calibration, motion"
        }, {
            name: "NFC",
            repositoryName: "webinos-api-nfc",
            specificationName: "nfc",
            keywords: "payments, interface, tag"
        }, {
            name: "App Launcher",
            repositoryName: "webinos-api-applauncher",
            specificationName: "launcher",
            keywords: "new process, executables, start widgets"
        }, {
            name: "Device Discovery",
            repositoryName: "webinos-api-deviceDiscovery",
            keywords: "discover devices, bluetooth, wifi, p2p, peers"
        }, {
            name: "Geolocation",
            repositoryName: "webinos-api-geolocation",
            //TODO out of webinos specs 
            keywords: "latitude, longitude, altitude, accuracy, heading, speed"
        }, {
            name: "TV",
            repositoryName: "webinos-api-tv",
            specificationName: "tv",
            keywords: "television, setop box, remote control, streaming content"
        }, {
            name: "Payment",
            repositoryName: "webinos-api-payment",
            specificationName: "payment",
            keywords: "wallet, shopping, simulator"
        }, {
            name: "Events",
            repositoryName: "webinos-api-events",
            specificationName: "events",
            keywords: "messaging, communication"
        }, {
            name: "Device status",
            repositoryName: "webinos-api-deviceStatus",
            specificationName: "devicestatus",
            keywords: "battery, cpu, memory, aspect is supported, device type"
        }, {
            name: "Media content",
            repositoryName: "webinos-api-mediaContent",
            specificationName: "MediaContent",
            keywords: "media info, local folders, find media, metadata"
        }, {
            name: "Media play",
            repositoryName: "webinos-api-mediaplay",
            keywords: "omx, mplayer, upnp scan, xbmc, upnp media renderer"
        }
    ];
    export var Core: IDisplayItemMeta[] = [
        {
            name: "Utilities",
            repositoryName: "webinos-utilities"
        }, {
            name: "Policy",
            repositoryName: "webinos-api-policy",
            keywords: "security, message restriction, privileges"
        }, {
            name: "Discovery",
            repositoryName: "webinos-api-serviceDiscovery",
            keywords: "discover services"
        }, {
            name: "Dashboard",
            repositoryName: "webinos-dashboard",
            keywords: "explorer, select services, devices, people"
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