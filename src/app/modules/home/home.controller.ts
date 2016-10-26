"use strict";

import IStateService = angular.ui.IStateService;
import {ILogService} from "angular";

import {AbstractController} from "../commons/controllers/abstract.controller";

export class HomeController extends AbstractController {

    public static $inject: Array<string> = ["$log", "$state"];

    public constructor(logger: ILogService, $state: IStateService) {
        super(logger, $state);
        logger.debug("Home controller loaded...");
    }
}
