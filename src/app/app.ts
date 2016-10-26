"use strict";

// Angular
import {IModule, ILogService, ILocationProvider} from "angular";

// Angular UI Router
import {IState, IStateProvider, IUrlRouterProvider, IStateService} from "angular-ui-router";

// i18n
import ITranslateProvider = angular.translate.ITranslateProvider;

// modules
import {commonsModule} from "./modules/commons/module";
import {homeModule} from "./modules/home/module";

// application component
import {appComponent} from "./app.component";

export const appModuleName: string = "appModule";
export const appComponentName: string = "app";

/**
 * The application
 */
export class App {
    public appModule: IModule;

    public constructor() {

        this.appModule = angular.module(appModuleName, [
            "ui.router",
            "pascalprecht.translate",
            "ngMaterial",
            commonsModule.name,
            homeModule.name
        ]);

        this.appModule.component(appComponentName, appComponent);

        this.appModule.config(["$urlRouterProvider", "$stateProvider", "$translateProvider", "$locationProvider",
            ($urlRouterProvider: IUrlRouterProvider, $stateProvider: IStateProvider, $translateProvider: ITranslateProvider,
             $locationProvider: ILocationProvider): any => {
                $urlRouterProvider.otherwise("/home");

                $stateProvider
                    .state("appMain", {
                        abstract: true, // means that this state will never be directly activated (user can never navigate to it)
                        url: "",
                    });

                // i18n
                $translateProvider.useStaticFilesLoader({
                    prefix: "assets/translations/",
                    suffix: ".json",
                });

                // Preferred language to be used when there is no language set or there is an error while downloading the translations files
                $translateProvider.preferredLanguage("en");

                // Language to be used for those translation keys that are not defined in another language
                $translateProvider.fallbackLanguage("en");

                // Enable escaping of HTML
                $translateProvider.useSanitizeValueStrategy("escaped");

                // Enable HTML5 History API: adds support for pretty URLs
                // requires server configuration (URL rewriting)
                $locationProvider.html5Mode(true);
            },]);

        this.appModule.run(["$state", "$log", ($state: IStateService, logger: ILogService) => {
            logger.debug("Application bootstrapped");

            logger.debug("Registered UI-router states: ");
            let index: number;
            let len: number;
            for (index = 0, len = $state.get().length; index < len; ++index) {
                const stateName: IState = $state.get()[index].name;
                const stateParent: IState = $state.get()[index].parent;
                const stateUrl: IState = $state.get()[index].url;
                logger.debug(`State : ${stateName} [parent: ${stateParent}, url: ${stateUrl}]`);
            }
        },]);
    }

    /**
     * Method responsible for actually bootstrapping the app.
     * It can initialize Angular or any other framework for example, initialize routing, etc
     */
    public bootstrapApp(): void {
        // Enabling "StrictDI" mode to enforce explicit annotations in injectable functions
        // https://docs.angularjs.org/guide/production#disabling-debug-data
        angular.bootstrap(document, [this.appModule.name], {
            strictDi: true
        });
    }
}
