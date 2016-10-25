"use strict";

// Load all third party dependencies

// AngularJS
import "angular";

// Angular UI Router
import "angular-ui-router";

// Angular translate
import "angular-translate";
import "angular-translate-loader-static-files";

// Angular Material
import "angular-material";

// RxJS
import "rxjs/Observable";
import "rxjs/Subscription";
import "rxjs/Subject";

// RxJS operators
import "./rxjs-operators";

// MomentJS
import "moment";

// 3rd party styles
if(PRODUCTION) {
    // We only import the vendor styles here for the production build
    // In development, vendor-styles.ts takes care of that (separate bundle)
    require("./app/css/vendor.scss");
}
