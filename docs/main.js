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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".center[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: 0 auto 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6Im1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  min-height: 1.5rem;\n  background: linear-gradient(120deg, #8eaee9, #be8ee9, #e98eb4, #e7ddae);\n  background-size: 800% 800%;\n  animation: AnimationName 30s ease infinite;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n}\n\n@keyframes AnimationName {\n  0% {\n    background-position: top left;\n  }\n  50% {\n    background-position: bottom right;\n  }\n  100% {\n    background-position: top left;\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RUFBQTtFQUNBLDBCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQUFKOztBQUVBO0VBQ0k7SUFBRyw2QkFBQTtFQUVMO0VBREU7SUFBSSxpQ0FBQTtFQUlOO0VBSEU7SUFBSyw2QkFBQTtFQU1QO0FBQ0Y7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQU1KIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uYXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM4ZWFlZTksICNiZThlZTksICNlOThlYjQsICNlN2RkYWUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDAlIDgwMCU7XHJcbiAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMzBzIGVhc2UgaW5maW5pdGU7ICBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKGJsYWNrLCAwLjMpIDtcclxufVxyXG5Aa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xyXG4gICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3AgbGVmdH1cclxuICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbSByaWdodH1cclxuICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3AgbGVmdH1cclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufSJdfQ== */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  min-height: 100vh;\n  font-family: \"Montserrat\", sans-serif;\n  background-color: white;\n}\np[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  margin-top: 0.3rem;\n}\n.notePage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.fieldName[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  border: none;\n  font-weight: 700;\n  font-size: 1.3rem;\n  text-align: left;\n}\n.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  max-height: 60vh;\n  height: 5rem;\n  flex-grow: 1;\n  font-weight: 500;\n}\n.place[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  border-color: transparent;\n  background-color: #eeeeee;\n  border-radius: 20px;\n  min-height: 1.2rem;\n  padding: 0.7rem;\n  line-height: 1.5rem;\n  transition: 0.3s;\n}\n.place[_ngcontent-%COMP%]:focus {\n  outline: none;\n  filter: drop-shadow(1px 6px 5px rgba(0, 0, 0, 0.4));\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\ninput.ng-invalid[_ngcontent-%COMP%], textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: #ffd4db;\n}\n.buttons[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  text-align: right;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  height: 2.4rem;\n  width: 6rem;\n  border-radius: 20px;\n  border: none;\n  transition: 0.3s;\n  font-size: 1.2rem;\n}\n.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: lightpink;\n}\n.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ff8396;\n  transform: scale(1.05);\n}\n.buttons[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: lightgreen;\n}\n.buttons[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:not([disabled]):not([disabled]):hover {\n  background-color: #64e764;\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLCtFQUFBO0FBRFIsOEVBQUE7QUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQVRTO0FDSWI7QURRQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBQVhBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQWNKO0FBWkE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBZUo7QUFaQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZUo7QUFaQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkR2QlE7RUN3QlIsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZUo7QUFiSTtFQUNJLGFBQUE7RUFDQSxtREFBQTtBQWVSO0FBWEE7RUFDSSxnQkFBQTtBQWNKO0FBWkk7RUFDSSx5QkFBQTtBQWNSO0FBUEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBVUo7QUFSSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVVI7QUFSSTtFQUNJLDJCQUFBO0FBVVI7QUFSUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFVWjtBQU5JO0VBQ0ksNEJBQUE7QUFRUjtBQU5RO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQVFaIiwiZmlsZSI6Im5vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiR0ZXh0OiBibGFjaztcbiRiYWNrZ3JvdW5kOiB3aGl0ZTtcbiR0ZXh0YXJlYUM6IHJnYigyMzgsIDIzOCwgMjM4KTtcblxuXG5ib2R5e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xufVxuXG5we1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcbn1cblxuLm5vdGVQYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmZpZWxkTmFtZSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtYXgtaGVpZ2h0OiA2MHZoO1xuICBoZWlnaHQ6IDVyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBsYWNlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEuMnJlbTtcbiAgcGFkZGluZzogMC43cmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnBsYWNlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggNnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuaW5wdXQubmctaW52YWxpZCwgdGV4dGFyZWEubmctaW52YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0ZGI7XG59XG5cbi5idXR0b25zIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGhlaWdodDogMi40cmVtO1xuICB3aWR0aDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5idXR0b25zIC5jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XG59XG4uYnV0dG9ucyAuY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODM5NjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cbi5idXR0b25zIC5zYXZlOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG4uYnV0dG9ucyAuc2F2ZTpub3QoW2Rpc2FibGVkXSk6bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0ZTc2NDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn0iXX0= */"], data: { animation: [
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".note-card-container[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.1);\n  transition: 0.3s;\n  display: block;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.note-card-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);\n  border-color: gray;\n}\n.note-card-container[_ngcontent-%COMP%]:hover   .delete[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%] {\n  margin: 0.3rem;\n  padding: 15px;\n  text-align: left;\n}\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%]   .note-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 5px;\n  font-weight: bold;\n}\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 80px;\n  overflow-x: hidden;\n  display: block;\n  line-height: 1.5rem;\n}\n.note-card-container[_ngcontent-%COMP%]   .notes-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%]   .fade-out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 40%;\n  width: 100%;\n  background: linear-gradient(to top, white 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);\n  pointer-events: none;\n}\n.delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 30px;\n  width: 30px;\n  opacity: 0;\n  transition: 0.15s linear;\n}\n.delete[_ngcontent-%COMP%]:hover {\n  color: red;\n  transform: scale(1.1);\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited {\n  color: black;\n}\na[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxVQUFBO0FBQ1o7QUFHSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdRO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRlo7QUFJWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0dBQUE7RUFDQSxvQkFBQTtBQUZoQjtBQVFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBTEo7QUFPSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQUxSO0FBU0E7RUFDSSxxQkFBQTtBQU5KO0FBUUE7RUFDSSxZQUFBO0FBTEo7QUFPQTtFQUNJLFlBQUE7QUFKSiIsImZpbGUiOiJub3RlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZS1jYXJkLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAxcHggcmdiYShibGFjaywgMC4xKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2JhKGJsYWNrLCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JheTtcclxuXHJcbiAgICAgICAgLmRlbGV0ZXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGVzLWNhcmQtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAuM3JlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgIC5ub3RlLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90ZS1jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5mYWRlLW91dHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKHdoaXRlLCAxMDAlKSAwJSxyZ2JhKHdoaXRlLDAuOCkgNTAlLCByZ2JhKHdoaXRlLDAlKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGVsZXRle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBsaW5lYXI7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYTpsaW5rLCBhOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"], data: { animation: [
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__["NoteCardComponent"]], styles: [".searchbar[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 2rem 1rem 2rem 1rem;\n  padding-right: 0.7rem;\n  padding-left: 0.7rem;\n  font-size: 1.3rem;\n  border-radius: 1rem;\n  border: none;\n  height: 2.5rem;\n  background-color: #e7e7e7;\n  transition: 0.2s;\n  vertical-align: middle;\n}\n.searchbar[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.5;\n  font-size: 1.3rem;\n}\n.searchbar[_ngcontent-%COMP%]:focus {\n  transform: scale(1.05);\n}\n.searchbar[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 95.4vh;\n  position: relative;\n}\n.notes-list[_ngcontent-%COMP%] {\n  margin-bottom: 7rem;\n}\n.addNote[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  text-align: center;\n  font-size: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  background-color: #d7b3f8;\n  position: fixed;\n  bottom: 3rem;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.addNote[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg) scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVJO0VBQ0ksc0JBQUE7QUFBUjtBQUlBO0VBQ0ksYUFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHQTtFQUNJLG1CQUFBO0FBQUo7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksb0NBQUE7QUFFUiIsImZpbGUiOiJub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaGJhcntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAycmVtIDFyZW0gMnJlbSAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC43cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2hiYXI6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDk1LjR2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubm90ZXMtbGlzdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDdyZW07XHJcbn1cclxuLmFkZE5vdGV7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICB3aWR0aDogIDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDE3OSwgMjQ4KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogM3JlbTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGUoMS4xKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('pageChange', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateX(-100%)',
                        height: '*'
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