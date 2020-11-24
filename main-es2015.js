(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_constants_RouterUrls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/constants/RouterUrls */ "./src/app/shared/constants/RouterUrls.ts");
/* harmony import */ var _shared_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/authenticate.guard */ "./src/app/shared/guards/authenticate.guard.ts");
/* harmony import */ var _shared_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/account.guard */ "./src/app/shared/guards/account.guard.ts");








const routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        children: [
            {
                path: '',
                redirectTo: _shared_constants_RouterUrls__WEBPACK_IMPORTED_MODULE_3__["RouterUrls"].AUTHENTICATE.BASE_MODULE,
                pathMatch: 'full'
            },
            {
                path: _shared_constants_RouterUrls__WEBPACK_IMPORTED_MODULE_3__["RouterUrls"].AUTHENTICATE.BASE_MODULE,
                loadChildren: () => Promise.all(/*! import() | modules-authenticate-authenticate-module */[__webpack_require__.e("default~account-management-account-management-module~biblioteka-biblioteka-module~modules-authentica~8d9ba643"), __webpack_require__.e("default~modules-account-account-module~modules-authenticate-authenticate-module"), __webpack_require__.e("modules-authenticate-authenticate-module")]).then(__webpack_require__.bind(null, /*! ./modules/authenticate/authenticate.module */ "./src/app/modules/authenticate/authenticate.module.ts")).then(mod => mod.AuthenticateModule),
                canActivate: [_shared_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticateGuard"]]
            },
            {
                path: _shared_constants_RouterUrls__WEBPACK_IMPORTED_MODULE_3__["RouterUrls"].ACCOUNT.BASE_MODULE,
                loadChildren: () => Promise.all(/*! import() | modules-account-account-module */[__webpack_require__.e("default~modules-account-account-module~modules-authenticate-authenticate-module"), __webpack_require__.e("modules-account-account-module")]).then(__webpack_require__.bind(null, /*! ./modules/account/account.module */ "./src/app/modules/account/account.module.ts")).then(mod => mod.AccountModule),
                canActivate: [_shared_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__["AccountGuard"]]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1ZXN0L2VtcHR5L2Frcm9wb2xpLXByLXVpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/authenticate.guard */ "./src/app/shared/guards/authenticate.guard.ts");
/* harmony import */ var _shared_services_auth_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth/token.service */ "./src/app/shared/services/auth/token.service.ts");
/* harmony import */ var _shared_guards_account_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/account.guard */ "./src/app/shared/guards/account.guard.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/http-interceptor.service */ "./src/app/shared/services/http-interceptor.service.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticateGuard"],
        _shared_guards_account_guard__WEBPACK_IMPORTED_MODULE_8__["AccountGuard"],
        _shared_services_auth_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpInterceptorService"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
                ],
                providers: [
                    _shared_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticateGuard"],
                    _shared_guards_account_guard__WEBPACK_IMPORTED_MODULE_8__["AccountGuard"],
                    _shared_services_auth_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpInterceptorService"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/constants/GeneralConstant.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/GeneralConstant.ts ***!
  \*****************************************************/
/*! exports provided: GeneralConstant, IMAGEURLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralConstant", function() { return GeneralConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGEURLS", function() { return IMAGEURLS; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

const GeneralConstant = {
    LOCALSTORAGE_TOKEN: 'token'
};
const IMAGEURLS = {
    LOGO: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseHref + '/assets/images/logo.png',
    AVATAR: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseHref + '/assets/images/img_avatar.png'
};


/***/ }),

/***/ "./src/app/shared/constants/RouterUrls.ts":
/*!************************************************!*\
  !*** ./src/app/shared/constants/RouterUrls.ts ***!
  \************************************************/
/*! exports provided: RouterUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterUrls", function() { return RouterUrls; });
const RouterUrls = {
    AUTHENTICATE: {
        BASE_MODULE: 'auth'
    },
    ACCOUNT: {
        BASE_MODULE: 'account',
        MANAGE: 'manage',
        MANAGEMENT: {
            USERS: 'users'
        }
    },
    BIBLIOTEKA: {
        BASE_MODULE: 'biblioteka',
        AUTHOR: 'manage-authors',
        AUTHORDETAILS: 'author-details',
    }
};


/***/ }),

/***/ "./src/app/shared/guards/account.guard.ts":
/*!************************************************!*\
  !*** ./src/app/shared/guards/account.guard.ts ***!
  \************************************************/
/*! exports provided: AccountGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountGuard", function() { return AccountGuard; });
/* harmony import */ var _constants_RouterUrls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/RouterUrls */ "./src/app/shared/constants/RouterUrls.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/token.service */ "./src/app/shared/services/auth/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AccountGuard {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate() {
        if (this.tokenService.isTokenExpired()) {
            return true;
        }
        this.router.navigateByUrl('/' + _constants_RouterUrls__WEBPACK_IMPORTED_MODULE_0__["RouterUrls"].AUTHENTICATE.BASE_MODULE);
        return false;
    }
}
AccountGuard.ɵfac = function AccountGuard_Factory(t) { return new (t || AccountGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AccountGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountGuard, factory: AccountGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_auth_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/authenticate.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/authenticate.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateGuard", function() { return AuthenticateGuard; });
/* harmony import */ var _constants_RouterUrls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/RouterUrls */ "./src/app/shared/constants/RouterUrls.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/token.service */ "./src/app/shared/services/auth/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthenticateGuard {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate() {
        if (!this.tokenService.isTokenExpired()) {
            return true;
        }
        this.router.navigateByUrl('/' + _constants_RouterUrls__WEBPACK_IMPORTED_MODULE_0__["RouterUrls"].ACCOUNT.BASE_MODULE);
        return false;
    }
}
AuthenticateGuard.ɵfac = function AuthenticateGuard_Factory(t) { return new (t || AuthenticateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthenticateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticateGuard, factory: AuthenticateGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_auth_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth/token.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth/token.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_GeneralConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/GeneralConstant */ "./src/app/shared/constants/GeneralConstant.ts");




class TokenService {
    constructor() { }
    saveToken(token) {
        localStorage.setItem(_constants_GeneralConstant__WEBPACK_IMPORTED_MODULE_2__["GeneralConstant"].LOCALSTORAGE_TOKEN, token);
    }
    geToken() {
        return localStorage.getItem(_constants_GeneralConstant__WEBPACK_IMPORTED_MODULE_2__["GeneralConstant"].LOCALSTORAGE_TOKEN);
    }
    getData() {
        const token = this.geToken();
        return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
    }
    isTokenExpired() {
        if (!this.geToken()) {
            return;
        }
        const expirationDate = new Date(this.getData().exp);
        const currentDate = new Date();
        return currentDate > expirationDate;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/http-interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/http-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/token.service */ "./src/app/shared/services/auth/token.service.ts");



class HttpInterceptorService {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(request, next) {
        const token = this.tokenService.geToken();
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(request);
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'http://localhost:8080/api',
    baseHref: 'https://itarprishtine.github.io/akropoli-pr-ui'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guest/empty/akropoli-pr-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map