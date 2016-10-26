"use strict";

import {homeModule} from "../../home";
import {FooController} from "./foo.controller";

// load raw html template
let fooTemplate: any = require("./foo.template.html");

homeModule.component("foo", {
    controller: FooController,
    controllerAs: "$ctrl",
    template: fooTemplate,
});
