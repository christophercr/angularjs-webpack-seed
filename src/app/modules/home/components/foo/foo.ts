"use strict";

import {FooController} from "./foo.controller";
import {IComponentOptions} from "angular";

// load raw html template
let fooTemplate: any = require("./foo.template.html");

export const fooComponent: IComponentOptions = {
    controller: FooController,
    template: fooTemplate
};
