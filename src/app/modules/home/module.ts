import {IModule, ILogService} from "angular";
import {IStateProvider} from "angular-ui-router";
import {HomeController} from "./home.controller";

// import all elements of the module
import {fooComponent} from "./components/foo/foo";

// load raw html template
const homeTemplate: any = require("./home.template.html");

export const homeModule: IModule = angular.module("homeModule", []);

homeModule.component("foo", fooComponent);

homeModule.config(["$stateProvider", ($stateProvider: IStateProvider) => {
    $stateProvider
        .state("home", {
            parent: "appMain",
            url: "/home",
            views: {
                "home@": {
                    controller: HomeController,
                    controllerAs: "$ctrl",
                    template: homeTemplate,
                },
            },
        });
},]);

homeModule.run(["$log", (logger: ILogService) => {
    logger.debug("Home module loaded...");
},]);
