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

/***/ "./src/app/actions/task.action.ts":
/*!****************************************!*\
  !*** ./src/app/actions/task.action.ts ***!
  \****************************************/
/*! exports provided: ADD_TASK, REMOVE_TASK, AddTask, RemoveTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TASK", function() { return ADD_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TASK", function() { return REMOVE_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTask", function() { return AddTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTask", function() { return RemoveTask; });
// Defining the type of actions to perfom 
const ADD_TASK = '[TASK]Add';
const REMOVE_TASK = '[TASK]Remove';
// We create classes for all the actions and constructors  that will allow us to pass a pay load
class AddTask {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TASK;
    }
}
class RemoveTask {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_TASK;
    }
}


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
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");



class AppComponent {
    constructor() {
        this.title = 'DailyTask';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-list");
    } }, directives: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_1__["TaskListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
/* harmony import */ var _reducers_task_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/task.reducer */ "./src/app/reducers/task.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                tasks: _reducers_task_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__["TaskListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__["TaskListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                        tasks: _reducers_task_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/reducers/task.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/task.reducer.ts ***!
  \******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_task_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/task.action */ "./src/app/actions/task.action.ts");

// Defining the initial state  or the defualt state 
const initalState = {
    name: 'Default Task',
};
// this section is the actual reducer that decides what to do with the actions recived , we optionally bind it tot the inital state
function reducer(state = [initalState], action) {
    switch (action.type) {
        case _actions_task_action__WEBPACK_IMPORTED_MODULE_0__["ADD_TASK"]:
            return [...state, action.payload];
        case _actions_task_action__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TASK"]:
            const index = action.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_task_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/task.action */ "./src/app/actions/task.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TaskListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_div_5_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delTutorial(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r2.name);
} }
class TaskListComponent {
    constructor(store) {
        this.store = store;
        this.task = store.select('tasks');
    }
    ngOnInit() {
    }
    delTutorial(index) {
        this.store.dispatch(new _actions_task_action__WEBPACK_IMPORTED_MODULE_1__["RemoveTask"](index));
        console.log('deleted');
    }
    addTutorial(name) {
        this.store.dispatch(new _actions_task_action__WEBPACK_IMPORTED_MODULE_1__["AddTask"]({ name: name }));
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 14, vars: 3, consts: [[1, "centered-content"], [1, "task-manager-container"], [1, "task-list-container", "has-background-light"], [1, "title", "has-text-primary"], ["class", "task-elements", 4, "ngFor", "ngForOf"], [1, "field", "is-grouped", 2, "margin-top", "30px"], [1, "control", "is-expanded"], ["type", "text", "placeholder", "add a new task", 1, "input"], ["name", ""], [1, "control"], [1, "button", "is-primary", 3, "click"], [1, "task-elements"], [1, "task", 3, "click"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskListComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.addTutorial(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.task));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Nunito[_ngcontent-%COMP%]:wght@400;700&display=swap\")[_ngcontent-%COMP%];\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #44ddd0, #006450);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.task-manager-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 680px;\n}\n.siderbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  background-color: white;\n  padding: 42px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.task-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  padding: 42px;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"lato\";\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.list-menu[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 15px;\n  flex-grow: 1;\n  flex-direction: column;\n}\n.Item-Lists[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 10px 15px;\n  border-radius: 5px;\n  width: 100%;\n  color: #5f5f5f !important;\n  margin-top: 5px;\n}\n.Item-Lists[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n}\n.Item-Lists.is-active[_ngcontent-%COMP%] {\n  background-color: #cff8ef;\n  color: #006450;\n}\n.task[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 15px 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n.task[_ngcontent-%COMP%]:not(.completed) {\n  cursor: pointer;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.task[_ngcontent-%COMP%]:not(.completed):hover {\n  box-shadow: 0 0 0 5px #eeeeee;\n}\n.task[_ngcontent-%COMP%]:not(.completed):active {\n  transform: scale(0.95);\n  background: orangered;\n  opacity: 0.7;\n  color: white;\n}\n.task.completed[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1saXN0L0M6XFxVc2Vyc1xcQ0hSSVNcXERhaWx5VGFzay9zcmNcXG1haW4uc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stbGlzdC9DOlxcVXNlcnNcXENIUklTXFxEYWlseVRhc2svc3JjXFxhcHBcXHRhc2stbGlzdFxcdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlIQUFBO0FBY1I7RUFDSSwyREFBQTtBQ1pKO0FEY0E7RUFDSSxZQUFBO0FDWEo7QUNOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURTSjtBQ1BBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRFVKO0FDTEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBRFFKO0FDTkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7QURTSjtBQ05BO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRFNKO0FDUEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QURVSjtBQ1BBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURVSjtBQ1RJO0VBQ0kseUJGdkRBO0FDa0VSO0FDVEk7RUFDSSx5QkFBQTtFQUNBLGNGMURJO0FDcUVaO0FDTEE7RUFDUSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURRUjtBQ1BRO0VBQ0ksZUFBQTtFQUNBLHFEQUFBO0FEU1o7QUNSWTtFQUNJLDZCQUFBO0FEVWhCO0FDUFk7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURTaEI7QUNIUTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtBREtaIiwiZmlsZSI6InNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA0MDA7NzAwJmZhbWlseT1OdW5pdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kdHVycXVvaXNlOiAjNDRkZGQwO1xyXG4kbGlnaHQtZ3JlZW46IzI3ZDdhMTtcclxuJGxpZ2h0IDojZjhmOGY4O1xyXG4kZGFyay1ncmVlbjpyZ2IoMCwxMDAsODApO1xyXG5cclxuJGZhbWlseS1zYW5zLXNlcmlmOlwiTnVtaXRvXCIsc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6JGRhcmstZ3JlZW47XHJcbiRsaW5rOiRsaWdodC1ncmVlbjtcclxuXHJcbiRjb250cm9sLWJvcmRlci13aWR0aDoycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1zaGFkb3c6bm9uZTtcclxuXHJcbmh0bWx7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCR0dXJxdW9pc2UsJGRhcmstZ3JlZW4pO1xyXG59XHJcbmh0bWwsYm9keXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDQwMDs3MDAmZmFtaWx5PU51bml0bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICM0NGRkZDAsICMwMDY0NTApO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFzay1tYW5hZ2VyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiA2ODBweDtcbn1cblxuLnNpZGVyYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA0MnB4O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJsYXRvXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmxpc3QtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLkl0ZW0tTGlzdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzVmNWY1ZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uSXRlbS1MaXN0czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG4uSXRlbS1MaXN0cy5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmOGVmO1xuICBjb2xvcjogIzAwNjQ1MDtcbn1cblxuLnRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi50YXNrOm5vdCguY29tcGxldGVkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG4udGFzazpub3QoLmNvbXBsZXRlZCk6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2VlZWVlZTtcbn1cbi50YXNrOm5vdCguY29tcGxldGVkKTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRhc2suY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG9wYWNpdHk6IDAuODtcbn0iLCJAaW1wb3J0ICcuLi8uLi9tYWluLnN0eWxlcy5zY3NzJztcclxuLmNlbnRlcmVkLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRhc2stbWFuYWdlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDY4MHB4O1xyXG4gICBcclxuICAgXHJcbn1cclxuXHJcbi5zaWRlcmJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0MnB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG59XHJcbi50YXNrLWxpc3QtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTs7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA0MnB4O1xyXG4gXHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbi5saXN0LW1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcbi5JdGVtLUxpc3Rze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzVmNWY1ZiAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xyXG4gICAgfVxyXG4gICAgJi5pcy1hY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjhlZjtcclxuICAgICAgICBjb2xvcjogJGRhcmstZ3JlZW47XHJcbiAgICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG4udGFza3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgJjpub3QoLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UgLHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2VlZWVlZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWN0aXZle1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuY29tcGxldGVke1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-list',
                templateUrl: './task-list.component.html',
                styleUrls: ['./task-list.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\CHRIS\DailyTask\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map