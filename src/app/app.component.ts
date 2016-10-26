import {IComponentOptions} from "angular";

import {AppController} from "./app.controller";

const template:string = require("./app.component.html");

/**
 * @description Main app component
 *
 */
export const appComponent:IComponentOptions = {
    controller: AppController,
    template: template
};
