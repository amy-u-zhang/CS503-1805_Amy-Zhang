(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-problem-list></app-problem-list> -->\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'oj-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_5__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_7__["NewProblemComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");



var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full' // exactly match
    },
    {
        path: 'problems',
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__["ProblemListComponent"]
    },
    {
        path: 'problems/:id',
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProblemDetailComponent"]
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n #editor {\n   height: 600px;\n }\n   .lang-select {\n   width: 100px;\n   margin-right: 10px;\n }\n   header .btn {\n   margin: 0 5px;\n }\n   footer .btn {\n   margin: 0 5px;\n }\n   .editor-footer, .editor-header {\n   margin: 10px 0;\n }\n   .cursor {\n   /*position:absolute;*/\n   background: rgba(0, 250, 0, 0.5);\n   z-index: 40;\n   width: 2px!important\n} }"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<header class=\"editor-header\">\n\t\t<div class=\"row\">\n\t\t\t<select class=\"form-control pull-left lang-select\" name=\"language\" [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n\t\t\t\t<option *ngFor=\"let language of languages\" [value]=\"language\">\n\t\t\t\t\t{{language}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<!-- reset button -->\n\t\t\t<!-- Button trigger modal -->\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n\t\t\t\tReset\n\t\t\t</button>\n\n\t\t\t<!-- Modal -->\n\t\t\t<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"resetEditor()\">Reset</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\n\t<div id=\"editor\">\n\t</div> <!-- This is the body -->\n\n\t<footer class=\"editor-footer\">\n\t\t<button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Submit Solution</button>\n\t</footer>\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_collaboration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/collaboration.service */ "./src/app/services/collaboration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorComponent = /** @class */ (function () {
    // inject CollaborationService
    function EditorComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            'Java': "public class Example {\n  \t\t        public static void main(String[] args) {\n  \t\t        \t// Type your Java code here\n  \t\t        }\n  \t}\n  \t",
            'Python': "class Solution:\n  \t               def example():\n  \t                   # write your Python code here"
        }; //use `` to write multi-line text
    }
    EditorComponent.prototype.ngOnInit = function () {
        //  // init collaboration service
        //  this.collaboration.init();
        // // "editor" is the id in html
        // this.editor = ace.edit("editor");
        // this.editor.setTheme("ace/theme/eclipse");
        var _this = this;
        //use problem id as session id
        // since we subscribe the changes, every time the params changes
        // sessionId will be updated and editor will be initilized
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
        // restore buffer from backend
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipes");
        this.resetEditor();
        document.getElementsByTagName('textarea')[0].focus();
        // set up collaboration socket
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        // register change callback
        this.editor.on("change", function (e) {
            console.log('editor changes: ' + JSON.stringify(e));
            // check if the change is same as last change,
            // if they are the same, skip this change
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
        // set the java
        this.editor.setValue(this.defaultContent[this.language]);
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.submit = function () {
        var usercode = this.editor.getValue();
        console.log(usercode);
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_collaboration_service__WEBPACK_IMPORTED_MODULE_1__["CollaborationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<form #formRef=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"problemName\">Problem Name</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"problemName\" name=\"problemName\" placeholder=\"Input problem name\" required [(ngModel)]=\"newProblem.name\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"problemDesc\">Problem Description</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\" placeholder=\"Input description\" required [(ngModel)]=\"newProblem.desc\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"difficulty\">Difficulty</label>\n\t\t\t<select class=\"form-control\" id=\"difficulty\" name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n\t\t\t\t<option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n\t\t\t\t\t{{difficulty}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary pull-right\"\n\t\t\t\t  (click)=\"addProblem()\">Add problem</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n<br/>\n<br/>\n\n\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// default problem
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    // inject data service
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem);
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- *ngIf: only show the problem when problem is not null -->\n<div class=\"container\" *ngIf=\"problem\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t<div>\n\t\t\t\t<h2>\n\t\t\t\t\t{{problem.id}}. {{problem.name}}\n\t\t\t\t</h2>\n\t\t\t\t<p>\n\t\t\t\t\t{{problem.desc}}\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"hidden-xs col-sm-12 col-md-8\">\n\t\t\t<app-editor></app-editor>\n\t\t</div>\n\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            //this.problem = this.dataService.getProblem(+params['id']);
            // getProblem(id) returns a Promise
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
            //getProblem return a promise
            //problem is the returned data source.
            //this.problem is your local problem.
        });
    };
    ProblemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".difficult {\n  min-width: 65px;\n  margin-right: 18px;\n}\n.badge.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n.title {\n  font-size: 1.2em;\n}\n.diff-easy {\n  background-color: #42ebf4;\n}\n.diff-medium {\n  background-color: #92cf5c;\n}\n.diff-hard {\n  background-color: #dd0d1e;\n}\n.diff-super{\n  background-color: #8d16e2;\n}"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-new-problem></app-new-problem>\n\t<div class=\"list-group\">\n\t\t<a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n\t\t   [routerLink]=\"['/problems', problem.id]\">\n\t\t\t<span class=\"{{'pull-left badge difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n\t\t\t\t{{problem.difficulty}}\n\t\t\t</span>\n\t\t\t<strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n\t\t</a>\n\t</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    // initialize problems in this class
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProblems.unsubscribe();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        //this.problems = this.dataService.getProblems();
        this.subscriptionProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
        //getProblems() return observable. need to subscribe it.
    };
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.css */ "./src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/collaboration.service.ts ***!
  \***************************************************/
/*! exports provided: CollaborationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationService", function() { return CollaborationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        // window.location.origin: the server location on the current page
        // for example, the current page on the browser is 
        // "localhost:3000/problems/1", the window.location.origin =
        // "http://localhost:3000"
        this.collaborationSocket = io(window.location.origin, {
            query: 'sessionId=' + sessionId
        });
        /// wait for 'message' event
        /// when receive the message, for now just print the message
        // handle the changes send from server
        this.collaborationSocket.on('change', function (delta) {
            console.log('collabration: editor changes ' + delta);
            delta = JSON.parse(delta); // delta is in josn format
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    // emit event to make changes and inform server and other collaborators
    CollaborationService.prototype.change = function (delta) {
        // emit "change" event
        this.collaborationSocket.emit("change", delta);
    };
    // restore buffer from redis cache
    CollaborationService.prototype.restoreBuffer = function () {
        // emit "restoreBuffer" event
        // let server to handle this event
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { PROBLEMS } from '../mock-problems';


var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        // list of problems
        //problems: Problem[] = PROBLEMS;
        // private field start with _
        // BehaviorSubject: when subscribe, we can get the value that emitted last time.
        // Subject: when subscribe, we can only get the value that emitted 
        // after subscribe and we cannot get value that emitted before we subscribe
        this._problemSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    // return a list of problems
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpClient.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            // .next: next data
            _this._problemSource.next(res);
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    // input: id
    // return a problem by id
    DataService.prototype.getProblem = function (id) {
        //return this.problem.find((problem) => problem.id ===id);
        // for(let problem of this.problems){
        //   if(problem.id === id){
        //     return problem;
        //   }
        // }
        return this.httpClient.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; }) // same as ( return res)
            .catch(this.handleError);
    };
    // add a new problem
    DataService.prototype.addProblem = function (problem) {
        // assign problem id
        // problem.id = this.problems.length + 1;
        // add to the end of problems list
        // this.problems.push(problem);
        var _this = this;
        // "content-Type" is case sensitive
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post('api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            // any: type, 
            // update the _problemSource
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yun/Desktop/CS503-1805_Amy-Zhang/week3/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map