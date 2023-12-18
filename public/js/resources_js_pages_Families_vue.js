"use strict";
(self["webpackChunkleden_administratie"] = self["webpackChunkleden_administratie"] || []).push([["resources_js_pages_Families_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Families.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Families.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './FamilieVLModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  beforeMount: function beforeMount() {
    this.naam = this.get.naam;
    this.huisnummer = this.get.huisnummer;
    this.straat = this.get.straat;
    this.stad = this.get.stad;
    this.land = this.get.land;
    this.minLeden = this.get.minLeden;
    this.maxLeden = this.get.maxLeden;
  },
  props: {
    get: Object
  },
  data: function data() {
    return {
      naam: "",
      huisnummer: "",
      straat: "",
      stad: "",
      land: "",
      minLeden: "",
      maxLeden: "",
      items: {},
      laatstePagina: 1,
      colomnBreedte: 100,
      grid: {
        "naam": 2,
        "adres": 3,
        "hoeveelheid leden": 2,
        "aanpassen": 1,
        "deleten": 1
      }
    };
  },
  methods: {
    families: function families(get) {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("families", get).then(function (response) {
        _this.items = response.data.data;
      })["catch"](function (error) {
        console.error(error);
        _this.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    zoeken: function zoeken() {
      this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
        "naam": this.naam,
        "huisnummer": this.huisnummer,
        "straat": this.straat,
        "stad": this.stad,
        "land": this.land,
        "minLeden": this.minLeden,
        "maxLeden": this.maxLeden
      });
    },
    familieUpdaten: function familieUpdaten(id, naam, huisnummer, bijvoeging, straat, stad, land) {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("leden/update", {
        "id": id,
        "naam": naam,
        "huisnummer": huisnummer,
        "bijvoeging": bijvoeging,
        "straat": straat,
        "stad": stad,
        "land": land
      }).then(function () {
        _this2.families(_this2.get);
        _this2.Toast("Lid succesvol aangepast", "success", 3000, "top");
      })["catch"](function (error) {
        console.log(error);
        _this2.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    FamilieUpdatenModal: function FamilieUpdatenModal(item) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal, _yield$modal$onWillDi, data, role;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.modalController.create({
                component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './FamilieVLModal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                componentProps: {
                  pFamilie: item.familie,
                  pHuisnummer: item.huisnummer,
                  pBijvoeging: item.bijvoeging,
                  pStraat: item.straat,
                  pStad: item.stad,
                  pLand: item.land
                }
              });
            case 2:
              modal = _context.sent;
              modal.present();
              _context.next = 6;
              return modal.onWillDismiss();
            case 6:
              _yield$modal$onWillDi = _context.sent;
              data = _yield$modal$onWillDi.data;
              role = _yield$modal$onWillDi.role;
              if (role === "confirm") {
                _this3.familieUpdaten(id, data.naam, data.huisnummer, data.bijvoeging, data.straat, data.stad, data.land);
              }
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    familieDeleten: function familieDeleten(id) {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("families/delete", {
        "id": id
      }).then(function () {
        _this4.families(_this4.get);
        _this4.Toast("Lid succesvol gedelete", "success", 3000, "top");
      })["catch"](function (error) {
        console.error(error);
        _this4.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    deleteAlert: function deleteAlert(id) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var familie, alert;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              familie = _this5.items.filter(function (item) {
                return item.id == id;
              });
              _context2.next = 3;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.alertController.create({
                header: "Let op!",
                message: "Weet u zeker dat u " + familie[0].naam + " wilt deleten?",
                buttons: [{
                  text: "Ja",
                  role: "confirm",
                  handler: function handler() {
                    _this5.familieDeleten(id);
                  }
                }, {
                  text: "Nee",
                  role: "cancel"
                }]
              });
            case 3:
              alert = _context2.sent;
              _context2.next = 6;
              return alert.present();
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    Toast: function Toast(message, color, duration, position) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this6.toastController.create({
                message: message,
                color: color,
                duration: duration,
                position: position
              });
            case 2:
              toast = _context3.sent;
              toast.present();
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  },
  components: {
    IonCol: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonCol,
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonButton,
    IonItem: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonItem,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonInput
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Families.vue?vue&type=template&id=231d9c8b":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Families.vue?vue&type=template&id=231d9c8b ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("aanpassen");
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("deleten");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ion_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-input");
  var _component_ion_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-item");
  var _component_zoek_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("zoek-container");
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_ion_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-col");
  var _component_grid_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("grid-container");
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_zoek_container, {
    zoeken: $options.zoeken
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.land,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.land = $event;
            }),
            "class": "d-inline-block",
            label: "land",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.huisnummer,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.huisnummer = $event;
            }),
            "class": "d-inline-block",
            label: "huisnummer",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.straat,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.straat = $event;
            }),
            "class": "d-inline-block",
            label: "straat",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.stad,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.stad = $event;
            }),
            "class": "d-inline-block",
            label: "stad",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.land,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.land = $event;
            }),
            "class": "d-inline-block",
            label: "land",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["zoeken"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_grid_container, {
    items: $data.items,
    colomnBreedte: $data.colomnBreedte,
    gridCols: $data.grid
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
        size: $data.grid.aanpassen,
        "class": "d-flex justify-content-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
            onClick: function onClick($event) {
              return $options.FamilieUpdatenModal(slotProps.item);
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_1];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
        size: $data.grid.deleten,
        "class": "d-flex justify-content-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
            onClick: function onClick($event) {
              return $options.deleteAlert(slotProps.item.id);
            },
            color: "danger"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_2];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["items", "colomnBreedte", "gridCols"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination, {
    get: this.get,
    laatstePagina: this.laatstePagina
  }, null, 8 /* PROPS */, ["get", "laatstePagina"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/pages/Families.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Families.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Families_vue_vue_type_template_id_231d9c8b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Families.vue?vue&type=template&id=231d9c8b */ "./resources/js/pages/Families.vue?vue&type=template&id=231d9c8b");
/* harmony import */ var _Families_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Families.vue?vue&type=script&lang=js */ "./resources/js/pages/Families.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Families_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Families_vue_vue_type_template_id_231d9c8b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Families.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Families.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Families.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Families_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Families_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Families.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Families.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Families.vue?vue&type=template&id=231d9c8b":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Families.vue?vue&type=template&id=231d9c8b ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Families_vue_vue_type_template_id_231d9c8b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Families_vue_vue_type_template_id_231d9c8b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Families.vue?vue&type=template&id=231d9c8b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Families.vue?vue&type=template&id=231d9c8b");


/***/ })

}]);