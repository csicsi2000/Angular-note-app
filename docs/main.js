(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programozás\ExtraProjektek\AngularProjektek\NoteApp\src\main.ts */"zUnb");


/***/ }),

/***/ "Akln":
/*!************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
  \************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 2, vars: 0, consts: [[1, "center"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".center[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: 0 auto 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Im1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "MkA2":
/*!***************************************!*\
  !*** ./src/app/shared/note.module.ts ***!
  \***************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Note App';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  min-height: 1.5rem;\n  background: linear-gradient(120deg, #8eaee9, #be8ee9, #e98eb4, #e7ddae);\n  background-size: 800% 800%;\n  animation: AnimationName 30s ease infinite;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n}\n\n@keyframes AnimationName {\n  0% {\n    background-position: top left;\n  }\n  50% {\n    background-position: bottom right;\n  }\n  100% {\n    background-position: top left;\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUVBQXVFO0VBQ3ZFLDBCQUEwQjtFQUMxQiwwQ0FBMEM7RUFDMUMsMkNBQW1DO0FBQXZDOztBQUVBO0VBQ0k7SUFBRyw2QkFBNEI7RUFFakM7RUFERTtJQUFJLGlDQUFnQztFQUl0QztFQUhFO0lBQUssNkJBQTRCO0VBTW5DO0FBQ0Y7O0FBSkE7RUFDSSxXQUFXO0VBQ1gsZUFBZTtBQU9uQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmF2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjOGVhZWU5LCAjYmU4ZWU5LCAjZTk4ZWI0LCAjZTdkZGFlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAwJSA4MDAlO1xyXG4gICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDMwcyBlYXNlIGluZmluaXRlOyAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYShibGFjaywgMC4zKSA7XHJcbn1cclxuQGtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcclxuICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246dG9wIGxlZnR9XHJcbiAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjpib3R0b20gcmlnaHR9XHJcbiAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246dG9wIGxlZnR9XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ "T1+9":
/*!**************************************************************!*\
  !*** ./src/app/pages/note-details/note-details.component.ts ***!
  \**************************************************************/
/*! exports provided: NoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function() { return NoteDetailsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var src_app_shared_note_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/note.module */ "MkA2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class NoteDetailsComponent {
    constructor(noteService, router, route) {
        this.noteService = noteService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.note = new src_app_shared_note_module__WEBPACK_IMPORTED_MODULE_1__["Note"]();
            if (params.id) {
                this.note = this.noteService.get(params.id);
                this.noteId = params.id;
                this.new = false;
            }
            else {
                this.new = true;
            }
        });
    }
    onSubmit(form) {
        if (this.new) {
            this.noteService.add(form.value);
        }
        else {
            this.noteService.update(this.noteId, form.value.title, form.value.note);
        }
        this.router.navigateByUrl("/");
    }
}
NoteDetailsComponent.ɵfac = function NoteDetailsComponent_Factory(t) { return new (t || NoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
NoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NoteDetailsComponent, selectors: [["app-note-details"]], decls: 14, vars: 4, consts: [[1, "form-container"], [1, "notePage", 3, "ngSubmit"], ["noteForm", "ngForm"], [1, "fieldName"], ["type", "text", "name", "title", "required", "", 1, "place", 3, "ngModel"], ["name", "note", 1, "textarea", "place", 3, "ngModel"], [1, "buttons"], ["type", "button", "routerLink", "", 1, "cancel"], ["type", "submit", 1, "save", 3, "disabled"]], template: function NoteDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NoteDetailsComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@pageChange", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.note.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.note.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  min-height: 100vh;\n  font-family: 'Montserrat', sans-serif;\n  background-color: white;\n  width: 100vw;\n}\np[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  margin-top: 0.3rem;\n}\n.notePage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.fieldName[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  border: none;\n  font-weight: 700;\n  font-size: 1.3rem;\n  text-align: left;\n}\n.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  max-height: 60vh;\n  height: 5rem;\n  flex-grow: 1;\n  font-weight: 500;\n}\n.place[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  border-color: transparent;\n  background-color: #eeeeee;\n  border-radius: 20px;\n  min-height: 1.2rem;\n  padding: 0.7rem;\n  line-height: 1.5rem;\n  transition: 0.3s;\n}\n.place[_ngcontent-%COMP%]:focus {\n  outline: none;\n  filter: drop-shadow(1px 6px 5px rgba(0, 0, 0, 0.4));\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\ninput.ng-invalid[_ngcontent-%COMP%], textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: #ffd4db;\n}\n.buttons[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  text-align: right;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  height: 2.4rem;\n  width: 6rem;\n  border-radius: 20px;\n  border: none;\n  transition: 0.3s;\n  font-size: 1.2rem;\n}\n.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: lightpink;\n}\n.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ff8396;\n  transform: scale(1.05);\n}\n.buttons[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: lightgreen;\n}\n.buttons[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:not([disabled]):not([disabled]):hover {\n  background-color: #64e764;\n  transform: scale(1.05);\n}\n@media only screen and (max-width: 900px) {\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    margin: 0.7rem;\n  }\n  label[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n  }\n  .notePage[_ngcontent-%COMP%] {\n    height: 90vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtFQUFZO0FBRFosOEVBQUE7QUFRQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyx1QkFUYztFQVVkLFlBQVk7QUNMaEI7QURRQTtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7QUNMdEI7QUFaQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQWVqQjtBQWJBO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBZ0JwQjtBQWJBO0VBQ0ksZ0JBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFnQnBCO0FBYkE7RUFDSSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHlCRHZCMEI7RUN3QjFCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFnQnBCO0FBeEJBO0VBV1EsYUFBYTtFQUNiLG1EQUFnRDtBQWlCeEQ7QUFiQTtFQUNJLGdCQUFnQjtBQWdCcEI7QUFqQkE7RUFJUSx5QkFBb0M7QUFpQjVDO0FBVkE7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBYXJCO0FBZkE7RUFLUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFjekI7QUF6QkE7RUFjUSwyQkFBMkI7QUFlbkM7QUE3QkE7RUFpQlkseUJBQXVDO0VBQ3ZDLHNCQUFzQjtBQWdCbEM7QUFsQ0E7RUF1QlEsNEJBQTRCO0FBZXBDO0FBdENBO0VBMEJZLHlCQUF3QztFQUN4QyxzQkFBc0I7QUFnQmxDO0FBWEE7RUFDSTtJQUNJLGNBQWM7RUFjcEI7RUFaRTtJQUNJLGlCQUFpQjtFQWN2QjtFQVpFO0lBQ0ksWUFBWTtFQWNsQjtBQUNGIiwiZmlsZSI6Im5vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiR0ZXh0OiBibGFjaztcclxuJGJhY2tncm91bmQ6IHdoaXRlO1xyXG4kdGV4dGFyZWFDOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcblxyXG5cclxuYm9keXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG5wIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG59XG5cbi5ub3RlUGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5maWVsZE5hbWUge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgaGVpZ2h0OiA1cmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wbGFjZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxLjJyZW07XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnBsYWNlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggNnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLCB0ZXh0YXJlYS5uZy1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRkYjtcbn1cblxuLmJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgaGVpZ2h0OiAyLjRyZW07XG4gIHdpZHRoOiA2cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYnV0dG9ucyAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xufVxuXG4uYnV0dG9ucyAuY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODM5NjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmJ1dHRvbnMgLnNhdmU6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbnMgLnNhdmU6bm90KFtkaXNhYmxlZF0pOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGU3NjQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICBtYXJnaW46IDAuN3JlbTtcbiAgfVxuICBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cbiAgLm5vdGVQYWdlIHtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('pageChange', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(100%)',
                    height: '*'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('350ms ease-out')
                ])
            ])
        ] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "Akln");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "vbGj");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note-card/note-card.component */ "rKqP");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "T1+9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
        _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__["NotesListComponent"],
        _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_7__["NoteCardComponent"],
        _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_8__["NoteDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "phcf":
/*!*****************************************!*\
  !*** ./src/app/shared/notes.service.ts ***!
  \*****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotesService {
    constructor() {
        this.notes = new Array();
    }
    getAll() {
        return this.notes;
    }
    get(id) {
        return this.notes[id];
    }
    getId(note) {
        return this.notes.indexOf(note);
    }
    add(note) {
        let newLength = this.notes.push(note);
        let index = newLength - 1;
        return index;
    }
    update(id, title, body) {
        let note = this.notes[id];
        note.title = title;
        note.note = body;
    }
    delete(id) {
        this.notes.splice(id, 1);
    }
}
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rKqP":
/*!**************************************************!*\
  !*** ./src/app/note-card/note-card.component.ts ***!
  \**************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NoteCardComponent {
    //@ViewChild('overflowfade') overflowfade: ElementRef<HTMLElement>;
    //@ViewChild('bodytext') bodytext: ElementRef<HTMLElement>;
    constructor(renderer) {
        this.renderer = renderer;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        /*
        let style = window.getComputedStyle(this.bodytext.nativeElement, null);
        let viewableHeight = parseInt(style.getPropertyValue("height"), 10);
        console.log(viewableHeight);
        if(this.bodytext.nativeElement.scrollHeight > viewableHeight){
          this.renderer.setStyle(this.overflowfade.nativeElement, 'display', 'block');
        } else{
          this.renderer.setStyle(this.overflowfade.nativeElement, 'display', 'none');
        }
        */
    }
    onXButtonClick() {
        this.deleteEvent.emit();
    }
}
NoteCardComponent.ɵfac = function NoteCardComponent_Factory(t) { return new (t || NoteCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
NoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoteCardComponent, selectors: [["app-note-card"]], inputs: { title: "title", body: "body", link: "link" }, outputs: { deleteEvent: "delete" }, decls: 16, vars: 4, consts: [[1, "note-card-container"], ["container", ""], [3, "routerLink"], [1, "notes-card-content"], [1, "note-card-title"], [1, "note-card-body"], ["bodytext", ""], [1, "fade-out"], ["overflowfade", ""], [1, "delete", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-x"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"]], template: function NoteCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteCardComponent_Template_div_click_12_listener() { return ctx.onXButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.body);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".note-card-container[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n  display: block;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.note-card-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);\n  border-color: gray;\n}\n\n.note-card-container[_ngcontent-%COMP%]:hover   .delete[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%] {\n  margin: 0.3rem;\n  padding: 15px;\n  text-align: left;\n}\n\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%]   .note-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 5px;\n  font-weight: bold;\n}\n\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 80px;\n  overflow-x: hidden;\n  display: block;\n  line-height: 1.5rem;\n}\n\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%]   .fade-out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 40%;\n  width: 100%;\n  background: linear-gradient(to top, white 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);\n  pointer-events: none;\n}\n\n.delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 30px;\n  width: 30px;\n  opacity: 0;\n  transition: 0.15s linear;\n}\n\n.delete[_ngcontent-%COMP%]:hover {\n  color: red;\n  transform: scale(1.1);\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited {\n  color: black;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n@media only screen and (max-width: 900px) {\n  .delete[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdEQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0FBQ25COztBQVRBO0VBV1Esc0JBQXNCO0VBQ3RCLDhDQUFzQztFQUN0QyxrQkFBa0I7QUFFMUI7O0FBZkE7RUFnQlksVUFBVTtBQUd0Qjs7QUFuQkE7RUFxQlEsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7QUFFeEI7O0FBekJBO0VBMEJZLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBRzdCOztBQS9CQTtFQWdDWSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBRy9COztBQXZDQTtFQXVDZ0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLHdHQUFrRztFQUNsRyxvQkFBb0I7QUFJcEM7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7QUFDNUI7O0FBUkE7RUFVUSxVQUFVO0VBQ1YscUJBQXFCO0FBRTdCOztBQUVBO0VBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0VBQ0ksWUFBWTtBQUVoQjs7QUFBQTtFQUNJLFlBQVk7QUFHaEI7O0FBREE7RUFDSTtJQUNJLFVBQVU7RUFJaEI7QUFDRiIsImZpbGUiOiJub3RlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZS1jYXJkLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAxcHggcmdiYShibGFjaywgMC4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiYShibGFjaywgMC4xKTtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyYXk7XHJcblxyXG4gICAgICAgIC5kZWxldGV7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3Rlcy1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwLjNyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAubm90ZS1jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdGUtY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZmFkZS1vdXR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSh3aGl0ZSwgMTAwJSkgMCUscmdiYSh3aGl0ZSwwLjgpIDUwJSwgcmdiYSh3aGl0ZSwwJSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRlbGV0ZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgbGluZWFyO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmE6bGluaywgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIC5kZWxldGV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                //Entry
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: 0,
                        opacity: 0,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(20000)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out')
                ])
            ])
        ] } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "Akln");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "T1+9");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "vbGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"], children: [
            { path: '', component: _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"] },
            { path: 'new', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_2__["NoteDetailsComponent"] },
            { path: ':id', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_2__["NoteDetailsComponent"] }
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vbGj":
/*!**********************************************************!*\
  !*** ./src/app/pages/notes-list/notes-list.component.ts ***!
  \**********************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../note-card/note-card.component */ "rKqP");






function NotesListComponent_app_note_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-note-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("delete", function NotesListComponent_app_note_card_2_Template_app_note_card_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteNote(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("link", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", note_r1.title)("body", note_r1.note);
} }
class NotesListComponent {
    constructor(notesService) {
        this.notesService = notesService;
        this.notes = new Array();
        this.filteredNotes = new Array();
    }
    ngOnInit() {
        this.notes = this.notesService.getAll();
        this.filteredNotes = this.notes;
    }
    deleteNote(id) {
        this.notesService.delete(id);
    }
    filter(query) {
        query = query.toLowerCase().trim();
        let allResult = new Array();
        let terms = query.split(' ');
        terms = this.removeDuplicates(terms);
        terms.forEach(term => {
            let result = this.relevantNotes(term);
            allResult = [...allResult, ...result];
        });
        let uniqueResult = this.removeDuplicates(allResult);
        this.filteredNotes = uniqueResult;
    }
    removeDuplicates(arr) {
        let uniqueResult = new Set();
        arr.forEach(e => uniqueResult.add(e));
        return Array.from(uniqueResult);
    }
    relevantNotes(query) {
        query = query.toLowerCase().trim();
        let relevantNotes = this.notes.filter(note => {
            if (note.title && note.title.toLowerCase().includes(query)) {
                return true;
            }
            if (note.note && note.note.toLowerCase().includes(query)) {
                return true;
            }
            return false;
        });
        return relevantNotes;
    }
}
NotesListComponent.ɵfac = function NotesListComponent_Factory(t) { return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"])); };
NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotesListComponent, selectors: [["app-notes-list"]], decls: 5, vars: 2, consts: [[1, "main-container"], [1, "notes-list"], [3, "link", "title", "body", "delete", 4, "ngFor", "ngForOf"], ["routerLink", "new", 1, "addNote"], [3, "link", "title", "body", "delete"]], template: function NotesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotesListComponent_app_note_card_2_Template, 1, 3, "app-note-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@pageChange", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredNotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__["NoteCardComponent"]], styles: [".searchbar[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 2rem 1rem 2rem 1rem;\n  padding-right: 0.7rem;\n  padding-left: 0.7rem;\n  font-size: 1.3rem;\n  border-radius: 1rem;\n  border: none;\n  height: 2.5rem;\n  background-color: #e7e7e7;\n  transition: 0.2s;\n  vertical-align: middle;\n}\n\n.searchbar[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.5;\n  font-size: 1.3rem;\n}\n\n.searchbar[_ngcontent-%COMP%]:focus {\n  transform: scale(1.05);\n}\n\n.searchbar[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  position: relative;\n}\n\n.notes-list[_ngcontent-%COMP%] {\n  margin-bottom: 7rem;\n}\n\n.addNote[_ngcontent-%COMP%] {\n  height: 5rem;\n  width: 5rem;\n  text-align: center;\n  font-size: 4rem;\n  border-radius: 50%;\n  border: none;\n  background-color: #d7b3f8;\n  position: fixed;\n  bottom: 3rem;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.addNote[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg) scale(1.1);\n}\n\n@media only screen and (max-width: 900px) {\n  .addNote[_ngcontent-%COMP%] {\n    left: 3rem;\n    position: fixed;\n  }\n  .notes-list[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .addNote[_ngcontent-%COMP%] {\n    left: 2rem;\n    bottom: 2rem;\n    position: fixed;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUMxQjs7QUFaQTtFQWNRLFlBQVk7RUFDWixpQkFBaUI7QUFFekI7O0FBakJBO0VBbUJRLHNCQUFzQjtBQUU5Qjs7QUFFQTtFQUNJLGFBQWE7QUFDakI7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDSSxtQkFBbUI7QUFFdkI7O0FBQUE7RUFDSSxZQUFZO0VBQ1osV0FBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBb0M7RUFDcEMsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUduQjs7QUFkQTtFQWFRLG9DQUFvQztBQUs1Qzs7QUFEQTtFQUNJO0lBQ0ksVUFBVTtJQUNWLGVBQWU7RUFJckI7RUFERTtJQUNJLGNBQWM7RUFHcEI7QUFDRjs7QUFEQTtFQUNJO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0VBSXJCO0FBQ0YiLCJmaWxlIjoibm90ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hiYXJ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMnJlbSAxcmVtIDJyZW0gMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC43cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1c3tcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoYmFyOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5vdGVzLWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cmVtO1xyXG59XHJcbi5hZGROb3Rle1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgd2lkdGg6ICA1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMTc5LCAyNDgpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIC5hZGROb3Rle1xyXG4gICAgICAgIGxlZnQ6IDNyZW07XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub3Rlcy1saXN0e1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgLmFkZE5vdGV7XHJcbiAgICAgICAgbGVmdDogMnJlbTtcclxuICAgICAgICBib3R0b206IDJyZW07XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('pageChange', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')
                ])
            ])
        ] } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map