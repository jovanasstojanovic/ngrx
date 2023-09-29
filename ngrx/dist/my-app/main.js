"use strict";
(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_karaoke_room_component_karaoke_room_karaoke_room_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/karaoke-room.component/karaoke-room/karaoke-room.component */ 8538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'karaoke-room',
  component: _components_karaoke_room_component_karaoke_room_karaoke_room_component__WEBPACK_IMPORTED_MODULE_1__.KaraokeRoomComponent
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'myApp';
  }
  ngOnInit() {
    this.router.events.subscribe();
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_karaoke_room_component_karaoke_room_karaoke_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/karaoke-room.component/karaoke-room/karaoke-room.component */ 8538);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/router-store */ 1794);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_karaoke_room_component_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/karaoke-room.component/search/search.component */ 2691);
/* harmony import */ var _store_you_tube_store_you_tube_store_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/you-tube-store/you-tube-store.effects */ 4164);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _store_you_tube_store_you_tube_store_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/you-tube-store/you-tube-store.reducer */ 8052);
/* harmony import */ var _store_video_names_store_video_names_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/video-names-store/video-names.reducer */ 3294);
/* harmony import */ var _store_video_names_store_video_names_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/video-names-store/video-names.effects */ 9856);
/* harmony import */ var _components_home_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/quiz/quiz.component */ 6602);
/* harmony import */ var _components_home_top_list_top_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/top-list/top-list.component */ 4515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
























class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreModule.forRoot({
    videoId: _store_you_tube_store_you_tube_store_reducer__WEBPACK_IMPORTED_MODULE_7__.youTubeStoreReducer,
    videoNames: _store_video_names_store_video_names_reducer__WEBPACK_IMPORTED_MODULE_8__.videoNamesReducer
  }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__.StoreRouterConnectingModule.forRoot(), _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.EffectsModule.forRoot([_store_you_tube_store_you_tube_store_effects__WEBPACK_IMPORTED_MODULE_6__.YouTubeStoreEffects, _store_video_names_store_video_names_effects__WEBPACK_IMPORTED_MODULE_9__.VideoNamesEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
  }), _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_karaoke_room_component_karaoke_room_karaoke_room_component__WEBPACK_IMPORTED_MODULE_3__.KaraokeRoomComponent, _components_karaoke_room_component_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent, _components_home_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__.QuizComponent, _components_home_top_list_top_list_component__WEBPACK_IMPORTED_MODULE_11__.TopListComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreRootModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__.StoreRouterConnectingModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__.StoreDevtoolsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule]
  });
})();

/***/ }),

/***/ 159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz/quiz.component */ 6602);
/* harmony import */ var _top_list_top_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-list/top-list.component */ 4515);
var _class;





function HomeComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("--i", index_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "../../../assets/galery/img" + (index_r2 + 1) + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class HomeComponent {
  constructor(router) {
    this.router = router;
    this.pictures = new Array(8);
  }
  goToKaraokeRoom() {
    this.router.navigate(['/karaoke-room']);
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 14,
  vars: 1,
  consts: [[1, "container"], [1, "mid"], [1, "welcome"], ["src", "../../../assets/mojLogo.png", "alt", "nesto", 1, "logo"], ["src", "../../../assets/naziv.png", "alt", "nesto", 1, "title"], ["src", "../../../assets/moto.png", "alt", "nesto", 1, "moto"], [1, "getStarted"], [1, "buttonGetSinging", 3, "click"], [1, "galery"], [1, "box"], [3, "--i", 4, "ngFor", "ngForOf"], [1, "galeryImage", 3, "src"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-top-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3)(5, "img", 4)(6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() {
        return ctx.goToKaraokeRoom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " GET SINGING ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeComponent_span_12_Template, 2, 3, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-quiz");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pictures);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_0__.QuizComponent, _top_list_top_list_component__WEBPACK_IMPORTED_MODULE_1__.TopListComponent],
  styles: [".box[_ngcontent-%COMP%] {\n    margin-top: 9vh;\n    margin-left: 42%;\n    height: 8vw;\n    width: 8vw;\n    position: relative;\n    transform-style: preserve-3d;\n    animation: _ngcontent-%COMP%_animate 35s linear infinite;\n}\n\n.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform-origin: center;\n    transform-style: preserve-3d;\n    transform: rotateY(calc(var(--i)*45deg)) translateZ(15vw);\n}\n\n@keyframes _ngcontent-%COMP%_animate {\n    0% {\n        transform: perspective(1000px) rotateY(0deg);\n    }\n\n    100% {\n        transform: perspective(1000px) rotateY(360deg);\n    }\n\n}\n\n.buttonGetSinging[_ngcontent-%COMP%] {\n    border: 3px solid white;\n    cursor: pointer;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n    background: #211836;\n    color: white;\n    text-decoration: none;\n    font-size: 2em;\n    letter-spacing: 0.1em;\n    font-weight: 400;\n    padding: 10px 30px;\n    transition: 0.5s;\n}\n\n.buttonGetSinging[_ngcontent-%COMP%]:hover {\n    border: 1px solid #00ffe0;\n    color: #00ffe0;\n    letter-spacing: 0.2em;\n    box-shadow: 0 0 20px #00ffe0;\n}\n\n.container[_ngcontent-%COMP%] {\n    margin-left: 3vw;\n    margin-top: 5vh;\n    width: 94vw;\n    display: grid;\n    grid-template-columns: 2fr 4fr 2fr;\n    column-gap: 4vw;\n}\n\n.galery[_ngcontent-%COMP%] {\n    background-color: #34205e;\n}\n\n.galeryImage[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);\n}\n\n.getStarted[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #211836;\n}\n\n.logo[_ngcontent-%COMP%]\n{\n    width: 9vw;\n    \n}\n\n\n.mid[_ngcontent-%COMP%] {\n    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.8);\n    display: grid;\n    grid-template-rows: 3.5fr 2fr 3.5fr;\n}\n\n.moto[_ngcontent-%COMP%] {\n    margin-left: 55%;\n    width: 14vw;\n}\n\n\n\n.title[_ngcontent-%COMP%]{\n    width: 30vw;\n}\n\n\n\n.welcome[_ngcontent-%COMP%]{\n    padding-top: 4%;\n    padding-left: 5%;\n    background-color: #34205e;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qix5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSTtRQUNJLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLDhDQUE4QztJQUNsRDs7QUFFSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFVBQVU7O0FBRWQ7OztBQUdBO0lBQ0ksNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOzs7O0FBSUE7SUFDSSxXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA5dmg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDIlO1xyXG4gICAgaGVpZ2h0OiA4dnc7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAzNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uYm94IHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWShjYWxjKHZhcigtLWkpKjQ1ZGVnKSkgdHJhbnNsYXRlWigxNXZ3KTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmJ1dHRvbkdldFNpbmdpbmcge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6ICMyMTE4MzY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uR2V0U2luZ2luZzpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBmZmUwO1xyXG4gICAgY29sb3I6ICMwMGZmZTA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjMDBmZmUwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICB3aWR0aDogOTR2dztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMmZyO1xyXG4gICAgY29sdW1uLWdhcDogNHZ3O1xyXG59XHJcblxyXG4uZ2FsZXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDIwNWU7XHJcbn1cclxuXHJcbi5nYWxlcnlJbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbi5nZXRTdGFydGVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjExODM2O1xyXG59XHJcblxyXG4ubG9nb1xyXG57XHJcbiAgICB3aWR0aDogOXZ3O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubWlkIHtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNWZyIDJmciAzLjVmcjtcclxufVxyXG5cclxuLm1vdG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1JTtcclxuICAgIHdpZHRoOiAxNHZ3O1xyXG59XHJcblxyXG5cclxuXHJcbi50aXRsZXtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG5cclxuXHJcbi53ZWxjb21le1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDIwNWU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6602:
/*!********************************************************!*\
  !*** ./src/app/components/home/quiz/quiz.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizComponent: () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_continue_lyrics_service_continue_lyrics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/continue-lyrics-service/continue-lyrics.service */ 2266);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;



class QuizComponent {
  constructor(lyricsService) {
    this.lyricsService = lyricsService;
    this.question1 = {
      o1: '',
      o2: '',
      o3: '',
      song: '',
      solution: '',
      id: 0
    };
    this.selectedOption = '';
  }
  ngOnChanges(changes) {
    // this.lyricsService
    //   .getContinueLyrics()
    //   .subscribe((data: ContinueLyricsInterface) => {
    //     this.question1 = data;
    //   });
  }
  ngOnInit() {
    this.lyricsService.getContinueLyrics().subscribe(data => {
      this.question1 = data;
    });
  }
}
_class = QuizComponent;
_class.ɵfac = function QuizComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_continue_lyrics_service_continue_lyrics_service__WEBPACK_IMPORTED_MODULE_0__.ContinueLyricsService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-quiz"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 21,
  vars: 7,
  consts: [[1, "quiz"], [1, "continueLyrics"], ["type", "radio", "name", "option", "value", "option1", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "option", "value", "option2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "option", "value", "option3", 3, "ngModel", "ngModelChange"], [1, "guessArtist"], [1, "artistPhoto"], [1, "result"]],
  template: function QuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Continue the lyrics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "label")(8, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QuizComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.selectedOption = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div")(11, "label")(12, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QuizComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.selectedOption = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "label")(16, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QuizComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.selectedOption = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 5)(19, "div", 6)(20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.question1.song);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.question1.o1, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.question1.o2, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.question1.o2, " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".quiz[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90vh;\n    background-color: #34205ec2;\n    box-shadow: 10px 10px 40px rgba(255, 255, 255, 0.508);\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 1;\n    grid-template-rows: auto auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3F1aXovcXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IscURBQXFEO0lBQ3JELGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHVDQUF1QztBQUMzQyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWl6IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MjA1ZWMyO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwOCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4515:
/*!****************************************************************!*\
  !*** ./src/app/components/home/top-list/top-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopListComponent: () => (/* binding */ TopListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_you_tube_service_you_tube_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/you-tube-service/you-tube.service */ 241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;



function TopListComponent_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br")(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r5 = ctx_r7.index;
    const video_r4 = ctx_r7.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r5 + 1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r4.snippet.title, " ");
  }
}
function TopListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopListComponent_ng_container_4_li_1_Template, 6, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 < 20);
  }
}
function TopListComponent_ng_container_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br")(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r9 = ctx_r11.index;
    const video_r8 = ctx_r11.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r9 + 1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r8.snippet.title, " ");
  }
}
function TopListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopListComponent_ng_container_7_li_1_Template, 6, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r9 < 20);
  }
}
function TopListComponent_ng_container_10_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br")(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r13 = ctx_r15.index;
    const video_r12 = ctx_r15.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r13 + 1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r12.snippet.title, " ");
  }
}
function TopListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopListComponent_ng_container_10_li_1_Template, 6, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r13 < 20);
  }
}
function TopListComponent_ng_container_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br")(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r17 = ctx_r19.index;
    const video_r16 = ctx_r19.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r17 + 1, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", video_r16.snippet.title, " ");
  }
}
function TopListComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopListComponent_ng_container_13_li_1_Template, 6, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r17 < 20);
  }
}
class TopListComponent {
  constructor(youTubeService) {
    this.youTubeService = youTubeService;
    this.trendingVideos = [];
  }
  ngOnInit() {
    this.getTrendingVideos();
  }
  getTrendingVideos() {
    this.youTubeService.getTrendingVideos().subscribe(response => {
      this.trendingVideos = response.items;
    });
  }
}
_class = TopListComponent;
_class.ɵfac = function TopListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_you_tube_service_you_tube_service__WEBPACK_IMPORTED_MODULE_0__.YouTubeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-top-list"]],
  decls: 14,
  vars: 4,
  consts: [[1, "topList"], [1, "list"], [1, "topListHeading"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "numberSpan"]],
  template: function TopListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2606TOP LIST\u2606");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TopListComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u2606TOP LIST\u2606");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TopListComponent_ng_container_7_Template, 2, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u2606TOP LIST\u2606");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TopListComponent_ng_container_10_Template, 2, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u2606TOP LIST\u2606");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TopListComponent_ng_container_13_Template, 2, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.trendingVideos);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.trendingVideos);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.trendingVideos);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.trendingVideos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".topList[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90vh;\n    background-color: #34205ec2;\n    box-shadow: 10px 10px 40px rgba(255, 255, 255, 0.508);\n    overflow: hidden;\n    scroll-padding-block-end: nowrap;\n}\n\n.list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1;\n    padding-inline-start: 0;\n    padding: 5%;\n    color: #00ffe199;\n    font-family: 'Poppins', sans-serif;\n    text-transform: uppercase;\n    font-size: 2.5vh;\n\n    animation: _ngcontent-%COMP%_topToBottom 90s infinite linear;\n}\n\n.numberSpan[_ngcontent-%COMP%] {\n    font-size: 2.5vh;\n    font-weight: bolder;\n    color: #00ffe0;\n}\n\n.topListHeading[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    font-family: 'Poppins', sans-serif;\n    color: white;\n    text-decoration: none;\n    font-size: 2em;\n    letter-spacing: 0.1em;\n    font-weight: bold;\n    margin-bottom: 1em;\n    margin-top: 1em;\n}\n\n@keyframes _ngcontent-%COMP%_topToBottom {\n    from {\n        transform: translateY(0%);\n    }\n\n    to {\n        transform: translateY(-320%);\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3RvcC1saXN0L3RvcC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixxREFBcUQ7SUFDckQsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGdCQUFnQjs7SUFFaEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wTGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDIwNWVjMjtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA0MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHNjcm9sbC1wYWRkaW5nLWJsb2NrLWVuZDogbm93cmFwO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGNvbG9yOiAjMDBmZmUxOTk7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMi41dmg7XHJcblxyXG4gICAgYW5pbWF0aW9uOiB0b3BUb0JvdHRvbSA5MHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4ubnVtYmVyU3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIuNXZoO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMDBmZmUwO1xyXG59XHJcblxyXG4udG9wTGlzdEhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdG9wVG9Cb3R0b20ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMjAlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8538:
/*!******************************************************************************************!*\
  !*** ./src/app/components/karaoke-room.component/karaoke-room/karaoke-room.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaraokeRoomComponent: () => (/* binding */ KaraokeRoomComponent)
/* harmony export */ });
/* harmony import */ var _store_you_tube_store_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/you-tube-store/you-tube-store.actions */ 1050);
/* harmony import */ var _store_you_tube_store_you_tube_store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/you-tube-store/you-tube-store.selectors */ 520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _services_you_tube_service_you_tube_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/you-tube-service/you-tube.service */ 241);
/* harmony import */ var src_app_services_video_names_service_video_names_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/video-names-service/video-names.service */ 5947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ 2691);
var _class;










function KaraokeRoomComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 30);
  }
  if (rf & 2) {
    const index_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("--i", index_r6 + 1);
  }
}
function KaraokeRoomComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, KaraokeRoomComponent_div_13_div_1_Template, 1, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.dotsArray);
  }
}
function KaraokeRoomComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No results found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function KaraokeRoomComponent_app_search_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-search", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("videoNameSelected", function KaraokeRoomComponent_app_search_16_Template_app_search_videoNameSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.handleVideoNameSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("videoId", ctx_r2.videoId);
  }
}
function KaraokeRoomComponent_table_25_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function KaraokeRoomComponent_table_25_tr_1_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const name_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.search(name_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const name_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](name_r10);
  }
}
function KaraokeRoomComponent_table_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, KaraokeRoomComponent_table_25_tr_1_Template, 3, 1, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.videoNames);
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class KaraokeRoomComponent {
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  constructor(router, store, youTubeService, videoService) {
    this.router = router;
    this.store = store;
    this.youTubeService = youTubeService;
    this.videoService = videoService;
    this.dotsArray = new Array(15);
    this.searchQuery = '';
    this.localSearchQuery = '';
    this.videoId = '';
    this.loading = false;
    this.error = false;
    this.isOpen = false;
    this.videoNames = [];
  }
  performSearch() {
    if (this.searchQuery.trim() !== '') {
      this.localSearchQuery = this.searchQuery + ' karaoke';
      this.store.dispatch(_store_you_tube_store_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchAction({
        query: this.localSearchQuery
      }));
      this.store.select(state => state.videoId).subscribe(searchState => {
        this.videoId = searchState.videoId;
        this.loading = searchState.loading;
        this.error = searchState.error;
      });
    }
  }
  search(name) {
    console.log('ovde');
    if (name.trim() !== '') {
      this.localSearchQuery = name;
      this.store.dispatch(_store_you_tube_store_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchAction({
        query: this.localSearchQuery
      }));
      this.store.select(state => state.videoId).subscribe(searchState => {
        this.videoId = searchState.videoId;
        this.loading = searchState.loading;
        this.error = searchState.error;
      });
    }
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.videoService.getAllVideoNames().subscribe(names => {
      this.videoNames = names;
    });
    this.store.select(_store_you_tube_store_you_tube_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectVideoId).subscribe(videoId => {
      this.videoId = videoId;
    });
    this.store.select(state => state.videoId.loading).subscribe(loading => {
      this.loading = loading;
    });
  }
  handleVideoNameSelected(videoName) {
    this.youTubeService.getVideoNameByName(videoName).then(videoTitle => {
      if (videoTitle) {
        this.videoService.addVideoName(videoTitle);
      } else {
        console.log('Video sa tim nazivom nije pronađen.');
      }
    }).catch(error => {
      console.error('Greška prilikom dohvatanja naziva videa:', error);
    });
  }
}
_class = KaraokeRoomComponent;
_class.ɵfac = function KaraokeRoomComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_you_tube_service_you_tube_service__WEBPACK_IMPORTED_MODULE_2__.YouTubeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_video_names_service_video_names_service__WEBPACK_IMPORTED_MODULE_3__.VideoNamesService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-karaoke-room"]],
  decls: 33,
  vars: 11,
  consts: [[1, "containerDiv"], [1, "brandDiv"], [1, "imgDiv"], ["src", "../../../../assets/mojLogo.png", "alt", "nesto", 1, "logoImg"], ["src", "../../../../assets/welcome.png", "alt", "nesto", 1, "welcomeImg"], [1, "homeDiv"], [1, "buttonBack", 3, "click"], [1, "questionDiv"], ["src", "../../../../assets/arrow.png", "alt", "nesto", 1, "arrowImg"], ["src", "../../../../assets/question.png", "alt", "nesto", 1, "questionImg"], [1, "wraperDiv"], [1, "videoDiv"], ["class", "loadingDiv", 4, "ngIf"], [1, "ytDiv"], ["class", "errorDiv", 4, "ngIf"], [3, "videoId", "videoNameSelected", 4, "ngIf"], [1, "searchDiv"], [1, "playlistButton", 3, "ngClass", "click"], [2, "color", "white"], [2, "font-weight", "bold"], [1, "dropdown-content", 3, "ngClass"], ["class", "table", 4, "ngIf"], ["src", "../../../../assets/songName.png", "alt", "nesto", 1, "songNameImg"], ["src", "../../../../assets/arrow2.png", "alt", "nesto", 1, "arrow2Img"], [1, "inputForm"], ["src", "../../../../assets/search.png", "alt", "", 1, "searchImg"], ["type", "text", "name", "unos", "placeholder", "karaoke song . . .", 2, "font-size", "2.5vh", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "submit", 1, "searchButton", 3, "click"], [1, "loadingDiv"], ["class", "dots", 3, "--i", 4, "ngFor", "ngForOf"], [1, "dots"], [1, "errorDiv"], [3, "videoId", "videoNameSelected"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "song", 3, "click"]],
  template: function KaraokeRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3)(4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function KaraokeRoomComponent_Template_button_click_6_listener() {
        return ctx.goToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " HOME ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 8)(10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10)(12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, KaraokeRoomComponent_div_13_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, KaraokeRoomComponent_div_15_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, KaraokeRoomComponent_app_search_16_Template, 1, 1, "app-search", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 16)(18, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function KaraokeRoomComponent_Template_button_click_18_listener() {
        return ctx.toggleDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " CHECK OUT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "OUR");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " PLAYLIST");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, KaraokeRoomComponent_table_25_Template, 2, 1, "table", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "img", 22)(27, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "form", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function KaraokeRoomComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.searchQuery = $event;
      })("keyup.enter", function KaraokeRoomComponent_Template_input_keyup_enter_30_listener() {
        return ctx.performSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function KaraokeRoomComponent_Template_button_click_31_listener() {
        return ctx.performSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " SEARCH ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.videoId);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchQuery);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent],
  styles: [".arrowImg[_ngcontent-%COMP%] {\n    opacity: 0.9;\n    margin-bottom: 15%;\n    height: 40%;\n}\n\n.arrow2Img[_ngcontent-%COMP%] {\n    opacity: 0.9;\n    margin-top: 10%;\n    margin-bottom: 10%;\n    margin-right: 0;\n    height: 20%;\n}\n\n.brandDiv[_ngcontent-%COMP%] {\n    opacity: 0.8;\n    border: none;\n    height: 90vh;\n    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.463);\n}\n\n.buttonBack[_ngcontent-%COMP%] {\n    border: 3px solid white;\n    cursor: pointer;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n    background: #211836;\n    color: white;\n    text-decoration: none;\n    font-size: 1.8em;\n    letter-spacing: 0.1em;\n    font-weight: 400;\n    padding: 10px 30px;\n    transition: 0.5s;\n}\n\n.buttonBack[_ngcontent-%COMP%]:hover {\n    border: 1px solid #00ffe0;\n    color: #00ffe0;\n    letter-spacing: 0.2em;\n    box-shadow: 0 0 20px #00ffe0;\n}\n\n.containerDiv[_ngcontent-%COMP%]\n{\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    column-gap: 4vw;\n    padding: 2%;\n    height: 100%;\n    width: 96%;\n}\n\n.dots[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 30px;\n    width: 30px;\n    background: rgba(255, 255, 255, 0.654);\n    border-radius: 50%;\n    transform: rotate(calc(var(--i)*(360deg/15))) translateY(90px);\n    animation: _ngcontent-%COMP%_animate 1.5s linear infinite;\n    animation-delay: calc(var(--i)*0.05s);\n}\n\n@keyframes _ngcontent-%COMP%_animate {\n    0% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n        ;\n    }\n}\n\n.errorDiv[_ngcontent-%COMP%] {\n    font-family: 'Poppins', sans-serif;\n    font-size: 2.2vh;\n}\n\n.homeDiv[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #211836;\n    height: 10vh;\n}\n\n.imgDiv[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #34205e;\n    height: 40vh;\n}\n\n.inputForm[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.95);\n    box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.8);\n    width: 70%;\n    height: 6vh;\n    display: flex;\n    font-family: 'Poppins', sans-serif;\n    font-size: 2vh;\n}\n\ninput[_ngcontent-%COMP%] {\n    background-color: rgba(0, 255, 225, 0);\n    flex: 1;\n    border: none;\n    outline: none;\n    padding: 0;\n    padding-bottom: 0;\n    padding-left: 3%;\n    padding-top: 12%;\n    width: 100%;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n    font-family: 'Poppins', sans-serif;\n    font-size: 2.2vh;\n}\n\n.loadingDiv[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n\n.logoImg[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-bottom: 2%;\n}\n\n.questionDiv[_ngcontent-%COMP%] {\n    background-color: #34205e;\n    height: 40vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.questionImg[_ngcontent-%COMP%] {\n    width: 75%;\n}\n\n.searchButton[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    border: 3px solid white;\n    cursor: pointer;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n    background: #211836;\n    color: white;\n    text-decoration: none;\n    font-size: 1.8em;\n    letter-spacing: 0.1em;\n    font-weight: 400;\n    padding: 10px 30px;\n    transition: 0.5s;\n}\n\n.playlistButton[_ngcontent-%COMP%]{\n    background-color: #211836;\n    margin: 5%;\n    margin-bottom: 10%;\n        border: 3px solid #00ffe0;\n        cursor: pointer;\n        box-sizing: border-box;\n        font-family: 'Poppins', sans-serif;\n        \n        color: #00ffe0;\n        text-decoration: none;\n        font-size: 1.8em;\n        letter-spacing: 0.05em;\n        font-weight: 400;\n        padding: 5px 15px;\n        transition: 0.5s;\n}\n.playlistButton.active[_ngcontent-%COMP%]{\n    border: 1px solid #00ffe0;\n        color: #00ffe0;\n        background-color: #211836;\n        letter-spacing: 0.1em;\n        box-shadow: 0 0 20px #00ffe0;\n}\n .playlistButton[_ngcontent-%COMP%]:hover {\n     border: 1px solid #00ffe0;\n     color: #00ffe0;\n     background-color: #211836;\n     letter-spacing: 0.1em;\n     box-shadow: 0 0 20px #00ffe0;\n }\n\n.searchButton[_ngcontent-%COMP%]:hover {\n    border: 1px solid #00ffe0;\n    color: #00ffe0;\n    letter-spacing: 0.2em;\n    box-shadow: 0 0 20px #00ffe0;\n}\n\n.searchDiv[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    opacity: 0.8;\n    background-color: #211836;\n    height: 90vh;\n    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.463);\n}\n.song[_ngcontent-%COMP%]{\n    font-family: 'Poppins', sans-serif;\n    \n\n    text-transform: uppercase;\n    margin:10px;\n    padding: 5%;\n    border-bottom: 1px solid #211836;\n    \n}\n.table[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.song[_ngcontent-%COMP%]:hover{\n    border:1px solid #00ffe0;\n    box-shadow: 0 0 20px #00ffe0;\n    cursor: pointer;\n    font-weight: bold;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n    background-color: aliceblue;\n    position: absolute;\n    top: 35%;\n    left: 82%;\n    display: none;\n    z-index: 2;\n    width:16.5%;\n    padding-right: 3px;\n    max-height: 55vh;\n        \n\n        overflow-y: auto;\n    \n\n    \n\n}\n\n.dropdown-content.active[_ngcontent-%COMP%] {\n    display: block;\n    \n\n}\n\n.searchImg[_ngcontent-%COMP%] {\n    height: 4vh;\n}\n\n.songNameImg[_ngcontent-%COMP%] {\n    width: 70%;\n}\n\n.videoDiv[_ngcontent-%COMP%] {\n    position: relative;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.8);\n    height: 83vh;\n    background-image: url('music.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    opacity: 0.4;\n    width: 100%;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.welcomeImg[_ngcontent-%COMP%] {\n    width: 90%;\n}\n\n.wraperDiv[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.ytDiv[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 10%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9rYXJhb2tlLXJvb20uY29tcG9uZW50L2thcmFva2Utcm9vbS9rYXJhb2tlLXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsdUNBQXVDO0lBQ3ZDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTs7SUFFZDtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDZDQUE2QztJQUM3QyxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO1FBQ2QseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsa0NBQWtDOztRQUVsQyxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7QUFDeEI7QUFDQTtJQUNJLHlCQUF5QjtRQUNyQixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQiw0QkFBNEI7QUFDcEM7Q0FDQztLQUNJLHlCQUF5QjtLQUN6QixjQUFjO0tBQ2QseUJBQXlCO0tBQ3pCLHFCQUFxQjtLQUNyQiw0QkFBNEI7Q0FDaEM7O0FBRUQ7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1EQUFtRDtBQUN2RDtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQ0FBZ0M7O0FBRXBDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtRQUNaLHNEQUFzRDtRQUN0RCxnQkFBZ0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGNBQWM7SUFDZCw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osa0NBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLmFycm93SW1nIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG4uYXJyb3cySW1nIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4uYnJhbmREaXYge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjMpO1xyXG59XHJcblxyXG4uYnV0dG9uQmFjayB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogIzIxMTgzNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJ1dHRvbkJhY2s6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwZmZlMDtcclxuICAgIGNvbG9yOiAjMDBmZmUwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggIzAwZmZlMDtcclxufVxyXG5cclxuLmNvbnRhaW5lckRpdlxyXG57XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcclxuICAgIGNvbHVtbi1nYXA6IDR2dztcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDk2JTtcclxufVxyXG5cclxuLmRvdHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjU0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0taSkqKDM2MGRlZy8xNSkpKSB0cmFuc2xhdGVZKDkwcHgpO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWkpKjAuMDVzKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3JEaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMi4ydmg7XHJcbn1cclxuXHJcbi5ob21lRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjExODM2O1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4uaW1nRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MjA1ZTtcclxuICAgIGhlaWdodDogNDB2aDtcclxufVxyXG5cclxuLmlucHV0Rm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDJ2aDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIyNSwgMCk7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyLjJ2aDtcclxufVxyXG5cclxuLmxvYWRpbmdEaXYge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmxvZ29JbWcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucXVlc3Rpb25EaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MjA1ZTtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucXVlc3Rpb25JbWcge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLnNlYXJjaEJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogIzIxMTgzNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLnBsYXlsaXN0QnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMTgzNjtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAwZmZlMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjMDBmZmUwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5wbGF5bGlzdEJ1dHRvbi5hY3RpdmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBmZmUwO1xyXG4gICAgICAgIGNvbG9yOiAjMDBmZmUwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTE4MzY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICMwMGZmZTA7XHJcbn1cclxuIC5wbGF5bGlzdEJ1dHRvbjpob3ZlciB7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwZmZlMDtcclxuICAgICBjb2xvcjogIzAwZmZlMDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjExODM2O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjMDBmZmUwO1xyXG4gfVxyXG5cclxuLnNlYXJjaEJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBmZmUwO1xyXG4gICAgY29sb3I6ICMwMGZmZTA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjMDBmZmUwO1xyXG59XHJcblxyXG4uc2VhcmNoRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMTgzNjtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDYzKTtcclxufVxyXG4uc29uZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMTE4MzY7XHJcbiAgICBcclxufVxyXG4udGFibGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4uc29uZzpob3ZlcntcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwZmZlMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICMwMGZmZTA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDgyJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6MTYuNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NXZoO1xyXG4gICAgICAgIC8qIFBvc3Rhdml0ZSBtYWtzaW1hbG51IHZpc2ludSBwcmVtYSB2YcOFwqFpbSBwb3RyZWJhbWEgKi9cclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogUG/DhMKNZXRubyBzYWtyaXZhbmplIGRyb3Bkb3duLWEgKi9cclxuICAgIC8qIERvZGFqdGUgb3N0YWxlIHN0aWxvdmUgemEgaXpnbGVkIGRyb3Bkb3duLWEgKi9cclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogUHJpa2F6aXZhbmplIGRyb3Bkb3duLWEga2FkYSBqZSBha3RpdmFuICovXHJcbn1cclxuXHJcbi5zZWFyY2hJbWcge1xyXG4gICAgaGVpZ2h0OiA0dmg7XHJcbn1cclxuXHJcbi5zb25nTmFtZUltZyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4udmlkZW9EaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGhlaWdodDogODN2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL211c2ljLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lSW1nIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi53cmFwZXJEaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnl0RGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2691:
/*!******************************************************************************!*\
  !*** ./src/app/components/karaoke-room.component/search/search.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
var _class;



class SearchComponent {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
    this.videoId = '';
    this.videoNameSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    //console.log("ovde sam");
  }
  ngOnChanges(changes) {
    if (this.videoId) {
      this.saveVideoName(this.videoId);
    }
  }
  saveVideoName(videoName) {
    this.videoNameSelected.emit(videoName);
  }
  get videoUrl() {
    const url = `https://www.youtube.com/embed/${this.videoId}?fs=1&vq=high&modestbranding=1?autoplay=0&rel=0`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
_class = SearchComponent;
_class.ɵfac = function SearchComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-search"]],
  inputs: {
    videoId: "videoId"
  },
  outputs: {
    videoNameSelected: "videoNameSelected"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 1,
  consts: [["frameborder", "0", "allowfullscreen", "", 1, "videoIframe", 3, "src"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    }
  },
  styles: [".videoIframe[_ngcontent-%COMP%]{\n    width: 95%;\n    margin-left: 2.5%;\n    height: 73vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9rYXJhb2tlLXJvb20uY29tcG9uZW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlb0lmcmFtZXtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgIGhlaWdodDogNzN2aDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2266:
/*!*****************************************************************************!*\
  !*** ./src/app/services/continue-lyrics-service/continue-lyrics.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContinueLyricsService: () => (/* binding */ ContinueLyricsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class ContinueLyricsService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3000';
  }
  getContinueLyrics() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http.get(`${this.apiUrl}/continueLyrics/${randomNumber}`, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(data => {
      console.log('Podaci sa servera:', data); // Dodajte ovu liniju za ispis podataka sa servera
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      if (data.id && data.song && data.o1 && data.o2 && data.o3 && data.solution) {
        return {
          id: data.id,
          song: data.song,
          o1: data.o1,
          o2: data.o2,
          o3: data.o3,
          solution: data.solution
        };
      } else {
        console.error('Neispravni podaci sa servera.'); // Dodajte ovu liniju za ispis greške
        throw new Error('Neispravni podaci sa servera.');
      }
    }));
  }
}
_class = ContinueLyricsService;
_class.ɵfac = function ContinueLyricsService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5947:
/*!*********************************************************************!*\
  !*** ./src/app/services/video-names-service/video-names.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoNamesService: () => (/* binding */ VideoNamesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var src_app_store_video_names_store_video_names_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/video-names-store/video-names.actions */ 1410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;





class VideoNamesService {
  constructor(store, http) {
    this.store = store;
    this.http = http;
    this.jsonServerUrl = 'http://localhost:3000/videos';
  }
  addVideoName(ime) {
    this.store.dispatch((0,src_app_store_video_names_store_video_names_actions__WEBPACK_IMPORTED_MODULE_0__.addVideoName)({
      videoName: ime
    }));
  }
  getAllVideoNames() {
    console.log('imena');
    return this.http.get(this.jsonServerUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.map(item => item.name)));
  }
}
_class = VideoNamesService;
_class.ɵfac = function VideoNamesService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 241:
/*!***************************************************************!*\
  !*** ./src/app/services/you-tube-service/you-tube.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YouTubeService: () => (/* binding */ YouTubeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class YouTubeService {
  constructor(http) {
    this.http = http;
    this.apiKey = 'AIzaSyBirflItHvoACBOXU47WyyVedAXy2HACJw';
  }
  searchVideos(query, maxResults) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&q=${query}&type=video&part=snippet&maxResults=${maxResults}`;
    return this.http.get(apiUrl);
  }
  isVideoEmbeddable(videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=${videoId}&part=status`;
    return this.http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      const status = response.items[0].status.embeddable;
      return status === true;
    }));
  }
  getTrendingVideos() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
  getVideoNameByName(videoName) {
    return new Promise((resolve, reject) => {
      this.searchVideos(videoName, 1).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
        if (response.items && response.items.length > 0) {
          return response.items[0].snippet.title;
        } else {
          return null;
        }
      })).subscribe(videoId => {
        resolve(videoId);
      });
    });
  }
}
_class = YouTubeService;
_class.ɵfac = function YouTubeService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1410:
/*!****************************************************************!*\
  !*** ./src/app/store/video-names-store/video-names.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addVideoName: () => (/* binding */ addVideoName),
/* harmony export */   addVideoNameSuccess: () => (/* binding */ addVideoNameSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const addVideoName = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Video Names] Add Video Name', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addVideoNameSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Video Names] Successfull Adding Video Name', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 9856:
/*!****************************************************************!*\
  !*** ./src/app/store/video-names-store/video-names.effects.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoNamesEffects: () => (/* binding */ VideoNamesEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _video_names_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-names.actions */ 1410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;






class VideoNamesEffects {
  constructor(actions$, http) {
    this.actions$ = actions$;
    this.http = http;
    this.jsonServerUrl = 'http://localhost:3000/videos';
    this.addVideoName$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_video_names_actions__WEBPACK_IMPORTED_MODULE_0__.addVideoName), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(action => this.http.post(this.jsonServerUrl, {
      name: action.videoName
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      console.log('ovde sam');
      return (0,_video_names_actions__WEBPACK_IMPORTED_MODULE_0__.addVideoNameSuccess)({
        videoName: action.videoName
      });
    })))));
  }
}
_class = VideoNamesEffects;
_class.ɵfac = function VideoNamesEffects_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 3294:
/*!****************************************************************!*\
  !*** ./src/app/store/video-names-store/video-names.reducer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_VIDEO_NAMES: () => (/* binding */ MAX_VIDEO_NAMES),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   videoNamesReducer: () => (/* binding */ videoNamesReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _video_names_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-names.actions */ 1410);


const MAX_VIDEO_NAMES = 10;
const initialState = {
  videoNames: new Set()
};
const videoNamesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_video_names_actions__WEBPACK_IMPORTED_MODULE_0__.addVideoName, (state, {
  videoName
}) => ({
  ...state,
  videoNames: new Set([...state.videoNames, videoName])
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_video_names_actions__WEBPACK_IMPORTED_MODULE_0__.addVideoNameSuccess, (state, {
  videoName
}) => ({
  ...state,
  videoNames: new Set([...state.videoNames, videoName])
})));

/***/ }),

/***/ 1050:
/*!****************************************************************!*\
  !*** ./src/app/store/you-tube-store/you-tube-store.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchAction: () => (/* binding */ searchAction),
/* harmony export */   searchErrorAction: () => (/* binding */ searchErrorAction),
/* harmony export */   searchLoadingAction: () => (/* binding */ searchLoadingAction),
/* harmony export */   searchSuccessAction: () => (/* binding */ searchSuccessAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const searchAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] Search Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const searchSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] Search Success Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const searchLoadingAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] Search Loading Action');
const searchErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] Search Error Action');

/***/ }),

/***/ 4164:
/*!****************************************************************!*\
  !*** ./src/app/store/you-tube-store/you-tube-store.effects.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YouTubeStoreEffects: () => (/* binding */ YouTubeStoreEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./you-tube-store.actions */ 1050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_you_tube_service_you_tube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/you-tube-service/you-tube.service */ 241);
var _class;







class YouTubeStoreEffects {
  constructor(actions$, youtubeService) {
    this.actions$ = actions$;
    this.youtubeService = youtubeService;
    this.search$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.searchMultipleVideos(action.query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchErrorAction()))))));
  }
  searchMultipleVideos(query) {
    return this.youtubeService.searchVideos(query, 5).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(response => {
      const videoItems = response.items;
      return this.searchFirstEmbeddableVideo(query, videoItems, 0);
    }));
  }
  searchFirstEmbeddableVideo(query, items, index) {
    if (index < items.length) {
      const videoId = items[index].id.videoId;
      return this.youtubeService.isVideoEmbeddable(videoId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(isEmbeddable => {
        if (isEmbeddable) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchSuccessAction({
            videoId
          }));
        } else {
          return this.searchFirstEmbeddableVideo(query, items, index + 1);
        }
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchErrorAction());
    }
  }
}
_class = YouTubeStoreEffects;
_class.ɵfac = function YouTubeStoreEffects_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_you_tube_service_you_tube_service__WEBPACK_IMPORTED_MODULE_1__.YouTubeService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 8052:
/*!****************************************************************!*\
  !*** ./src/app/store/you-tube-store/you-tube-store.reducer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   youTubeStoreReducer: () => (/* binding */ youTubeStoreReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./you-tube-store.actions */ 1050);


const initialState = {
  videoId: '',
  loading: false,
  error: false
};
const youTubeStoreReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchAction, (state, {
  query
}) => ({
  ...state,
  query: query,
  loading: true,
  error: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchSuccessAction, (state, {
  videoId
}) => ({
  ...state,
  videoId: videoId,
  loading: false,
  error: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchLoadingAction, state => ({
  ...state,
  loading: true,
  error: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_you_tube_store_actions__WEBPACK_IMPORTED_MODULE_0__.searchErrorAction, state => ({
  ...state,
  loading: false,
  error: true
})));

/***/ }),

/***/ 520:
/*!******************************************************************!*\
  !*** ./src/app/store/you-tube-store/you-tube-store.selectors.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectVideoId: () => (/* binding */ selectVideoId)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const selectVideoId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(state => state.videoId, videoIdState => videoIdState.videoId);

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map