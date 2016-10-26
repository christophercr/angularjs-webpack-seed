"use strict";

import IStateProvider = angular.ui.IStateProvider;
import {IModule, ILogService} from "angular";

import {HomeController} from "./home.controller";

export const homeModule: IModule = angular.module("homeModule", []);

// import all elements of the module
import "./components/foo/foo";

// load raw html template
const homeTemplate: any = require("./home.template.html");

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
