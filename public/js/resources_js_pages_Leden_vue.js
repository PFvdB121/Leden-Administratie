"use strict";
(self["webpackChunkleden_administratie"] = self["webpackChunkleden_administratie"] || []).push([["resources_js_pages_Leden_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/FamilieVLModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/FamilieVLModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  beforeMount: function beforeMount() {
    if (this.id) {
      this.familie(this.id);
    } else {
      this.land = this.pLand;
      this.stad = this.pStad;
      this.straat = this.pStraat;
      this.huisnummer = this.pHuisnummer;
      this.bijvoeging = this.pBijvoeging;
      this.naam = this.pNaam;
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    next(false);
    this.annuleren();
  },
  components: {
    IonAccordion: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonAccordion,
    IonAccordionGroup: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonAccordionGroup,
    IonList: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonList,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonInput,
    IonItem: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonItem,
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonButton,
    IonTitle: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonTitle,
    IonToolbar: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonToolbar,
    IonHeader: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonHeader,
    IonButtons: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonButtons,
    IonContent: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonContent,
    IonLabel: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonLabel
  },
  data: function data() {
    return {
      land: "",
      stad: "",
      straat: "",
      huisnummer: "",
      bijvoeging: "",
      naam: "",
      landen: {},
      steden: {},
      straten: {},
      huisnummers: {},
      families: {}
    };
  },
  methods: {
    annuleren: function annuleren() {
      _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.modalController.dismiss(null, "cancel");
    },
    bevestigen: function bevestigen() {
      var data = {
        land: this.land,
        stad: this.stad,
        straat: this.straat,
        huisnummer: this.huisnummer,
        bijvoeging: this.bijvoeging,
        naam: this.naam
      };
      _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.modalController.dismiss(data, "confirm");
    },
    familie: function familie(id) {
      var _this = this;
      if (id) {
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("families/show", {
          "id": id
        }).then(function (response) {
          _this.land = response.data.data.land;
          _this.stad = response.data.data.stad;
          _this.straat = response.data.data.straat;
          _this.huisnummer = response.data.data.huisnummer;
          _this.bijvoeging = response.data.data.bijvoeging;
          _this.naam = response.data.data.naam;
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    landZoeken: function landZoeken() {
      var _this2 = this;
      if (this.land) {
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("landen", {
          "naam": this.land
        }).then(function (response) {
          _this2.landen = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        this.landen = {};
      }
    },
    stadZoeken: function stadZoeken() {
      var _this3 = this;
      if (this.stad && this.land) {
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("steden", {
          "naam": this.stad,
          "land": this.land
        }).then(function (response) {
          _this3.steden = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        this.steden = {};
      }
    },
    straatZoeken: function straatZoeken() {
      var _this4 = this;
      if (this.straat && this.stad && this.land) {
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("straten", {
          "naam": this.straat,
          "stad": this.stad,
          "land": this.land
        }).then(function (response) {
          _this4.straten = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        this.straten = {};
      }
    },
    adresZoeken: function adresZoeken() {
      var _this5 = this;
      if ((this.huisnummer || this.bijvoeging) && this.straat && this.stad && this.land) {
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("adressen", {
          "huisnummer": this.huisnummer,
          "bijvoeging": this.bijvoeging,
          "straat": this.straat,
          "stad": this.stad,
          "land": this.land
        }).then(function (response) {
          _this5.huisnummers = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        this.huisnummers = {};
      }
    },
    familieZoeken: function familieZoeken() {
      var _this6 = this;
      if (this.naam && this.huisnummer && this.straat && this.stad && this.land) {
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("families/search", {
          "naam": this.naam,
          "huisnummer": this.huisnummer,
          "bijvoeging": this.bijvoeging,
          "straat": this.straat,
          "stad": this.stad,
          "land": this.land
        }).then(function (response) {
          _this6.families = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        this.families = {};
      }
    }
  },
  mounted: function mounted() {
    if (this.voorLeden) {
      this.$refs.FamilieIn.onIonChange = this.familieZoeken();
    }
  },
  name: "FamilieVLModal",
  props: {
    id: Number,
    pNaam: String,
    pHuisnummer: Number,
    pBijvoeging: String,
    pStraat: String,
    pStad: String,
    pLand: String,
    voorLeden: Boolean
  },
  setup: function setup() {
    var accordionGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toggleAccordion = function toggleAccordion(waarde) {
      if (!accordionGroup.value) {
        return;
      }
      var nativeEl = accordionGroup.value.$el;
      nativeEl.value = waarde;
    };
    return {
      accordionGroup: accordionGroup,
      toggleAccordion: toggleAccordion
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/LedenModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/LedenModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _FamilieVLModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FamilieVLModal.vue */ "./resources/js/components/modals/FamilieVLModal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "LedenModal",
  data: function data() {
    return {
      soortenLeden: {},
      naam: "",
      email: "",
      geboortedatum: "",
      soortLid: "",
      familie: "",
      huisnummer: 0,
      bijvoeging: "",
      straat: "",
      stad: "",
      land: "",
      adres: "",
      error: "",
      checkEm: true,
      isEmail: false,
      huidigeDatum: "",
      date: new Date()
    };
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    next(false);
    this.annuleren();
  },
  beforeMount: function beforeMount() {
    this.soortenLedenOphalen();
    this.huidigeDatum = this.date.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    if (this.id) {
      this.lidOphalen(this.id);
    }
  },
  methods: {
    soortenLedenOphalen: function soortenLedenOphalen() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("soorten_leden/get").then(function (response) {
        _this.soortenLeden = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    check: function check(id, email) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("leden/check", {
                email: email,
                id: id
              }).then(function (response) {
                _this2.checkEm = Boolean(response.data);
              })["catch"](function (error) {
                console.log(error);
                _this2.Toast("Er is iets misgegaan", "danger", 3000, "top");
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    lidOphalen: function lidOphalen(id) {
      var _this3 = this;
      if (id) {
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("leden/show", {
          id: id
        }).then(function (response) {
          _this3.naam = response.data.data.naam;
          _this3.soortLid = response.data.data["soort lid"];
          _this3.email = response.data.data.email;
          _this3.geboortedatum = response.data.data.geboortedatum;
          _this3.familie = response.data.data.familie;
          _this3.huisnummer = response.data.data.huisnummer;
          _this3.bijvoeging = response.data.data.bijvoeging;
          _this3.straat = response.data.data.straat;
          _this3.stad = response.data.data.stad;
          _this3.land = response.data.data.land;
        })["catch"](function (error) {
          console.log(error);
          _this3.Toast("Er is iets misgegaan", "danger", 3000, "top");
        });
      } else {
        console.error("Geen id toegevoegd");
      }
    },
    annuleren: function annuleren() {
      _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.modalController.dismiss(null, "cancel");
    },
    bevestigen: function bevestigen() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = {
                "naam": _this4.naam,
                "email": _this4.email,
                "geboortedatum": _this4.geboortedatum,
                "soortLid": _this4.soortLid,
                "familie": _this4.familie,
                "huisnummer": _this4.huisnummer,
                "bijvoeging": _this4.bijvoeging,
                "straat": _this4.straat,
                "stad": _this4.stad,
                "land": _this4.land
              };
              _context2.next = 3;
              return _this4.check(_this4.id, _this4.email);
            case 3:
              if (_this4.checkEm) {
                _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.modalController.dismiss(data, "confirm");
              } else {
                _this4.error = "Email bestaat al";
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    familieToevoegen: function familieToevoegen() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var modal, _yield$modal$onWillDi, data, role;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.modalController.create({
                component: _FamilieVLModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
                componentProps: {
                  pNaam: _this5.familie,
                  pHuisnummer: _this5.huisnummer,
                  pBijvoeging: _this5.bijvoeging,
                  pStraat: _this5.straat,
                  pStad: _this5.stad,
                  pLand: _this5.land
                }
              });
            case 2:
              modal = _context3.sent;
              modal.present();
              _context3.next = 6;
              return modal.onWillDismiss();
            case 6:
              _yield$modal$onWillDi = _context3.sent;
              data = _yield$modal$onWillDi.data;
              role = _yield$modal$onWillDi.role;
              if (role === "confirm") {
                _this5.familie = data.naam;
                _this5.huisnummer = parseInt(data.huisnummer);
                _this5.bijvoeging = data.bijvoeging;
                _this5.straat = data.straat;
                _this5.stad = data.stad;
                _this5.land = data.land;
              }
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  },
  components: {
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonButton,
    IonItem: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonItem,
    IonList: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonList,
    IonButtons: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonButtons,
    IonToolbar: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonToolbar,
    IonTitle: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonTitle,
    IonHeader: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonHeader,
    IonContent: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonContent,
    IonSelect: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonSelect,
    IonSelectOption: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonSelectOption,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonInput,
    IonText: _ionic_vue__WEBPACK_IMPORTED_MODULE_3__.IonText
  },
  props: {
    titel: String,
    id: Number
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components_modals_LedenModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals/LedenModal.vue */ "./resources/js/components/modals/LedenModal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  beforeMount: function beforeMount() {
    this.naam = this.get.naam;
    this.email = this.get.email;
    this.minGeboortedatum = this.get.minGeboortedatum;
    this.maxGeboortedatum = this.get.maxGeboortedatum;
    this.soortLid = this.get.soortLid;
    this.familie = this.get.familie;
    this.adres = this.get.adres;
    this.straat = this.get.straat;
    this.stad = this.get.stad;
    this.land = this.get.land;
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.soortenLedenOphalen();
    this.huidigeDatum = this.date.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    this.leden(this.get.page, this.get.naam, this.get.email, this.get.minGeboortedatum, this.get.maxGeboortedatum, this.get.soortLid, this.get.familie, this.get.adres, this.get.straat, this.get.stad, this.get.land);
  },
  data: function data() {
    return {
      items: [],
      grid: {
        "naam": 2,
        "email": 3,
        "geboortedatum": 2,
        "soort lid": 1,
        "familie": 2,
        "adres": 2,
        "aanpassen": 2,
        "deleten": 2
      },
      soortenLeden: {},
      colomnBreedte: 100,
      laatstePagina: 1,
      naam: "",
      email: "",
      minGeboortedatum: "",
      maxGeboortedatum: "",
      soortLid: "",
      familie: "",
      adres: "",
      straat: "",
      stad: "",
      land: "",
      huidigeDatum: "",
      lid: {},
      date: new Date()
    };
  },
  methods: {
    zoeken: function zoeken() {
      this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
        "naam": this.naam,
        "email": this.email,
        "minGeboortedatum": this.minGeboortedatum,
        "maxGeboortedatum": this.maxGeboortedatum,
        "soortLid": this.soortLid,
        "familie": this.familie,
        "adres": this.adres,
        "straat": this.straat,
        "stad": this.stad,
        "land": this.land
      });
    },
    soortenLedenOphalen: function soortenLedenOphalen() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("soorten_leden/get").then(function (response) {
        _this.soortenLeden = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    leden: function leden(page, naam, email, minGeboortedatum, maxGeboortedatum, soortLid, familie, adres, straat, stad, land) {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("leden", {
        "page": page,
        "naam": naam,
        "email": email,
        "minGeboortedatum": minGeboortedatum,
        "maxGeboortedatum": maxGeboortedatum,
        "soortLid": soortLid,
        "familie": familie,
        "adres": adres,
        "straat": straat,
        "stad": stad,
        "land": land
      }).then(function (response) {
        _this2.laatstePagina = response.data.meta.last_page;
        _this2.items = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    ledenToevoegen: function ledenToevoegen(naam, email, geboortedatum, soortLid, familie, huisnummer, bijvoeging, straat, stad, land) {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("leden/create", {
        "naam": naam,
        "email": email,
        "geboortedatum": geboortedatum,
        "soortLid": soortLid,
        "familie": familie,
        "huisnummer": huisnummer,
        "bijvoeging": bijvoeging,
        "straat": straat,
        "stad": stad,
        "land": land
      }).then(function () {
        _this3.leden(_this3.get.page, _this3.get.naam, _this3.get.email, _this3.get.minGeboortedatum, _this3.get.maxGeboortedatum, _this3.get.soortLid, _this3.get.familie, _this3.get.adres, _this3.get.straat, _this3.get.stad, _this3.get.land);
        _this3.Toast("Lid succesvol toegevoegd", "success", 3000, "top");
      })["catch"](function (error) {
        console.error(error);
        _this3.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    LedenToevoegenModal: function LedenToevoegenModal() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal, _yield$modal$onWillDi, data, role;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.modalController.create({
                component: _components_modals_LedenModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                componentProps: {
                  titel: "Leden Toevoegen"
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
              if (role == "confirm") {
                _this4.ledenToevoegen(data.naam, data.email, data.geboortedatum, data.soortLid, data.familie, data.huisnummer, data.bijvoeging, data.straat, data.stad, data.land);
              }
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    deleteLid: function deleteLid(id) {
      var _this5 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("leden/delete", {
        "id": id
      }).then(function () {
        _this5.leden(_this5.get.page, _this5.get.naam, _this5.get.email, _this5.get.minGeboortedatum, _this5.get.maxGeboortedatum, _this5.get.soortLid, _this5.get.familie, _this5.get.adres, _this5.get.straat, _this5.get.stad, _this5.get.land);
        _this5.Toast("Lid succesvol gedelete", "success", 3000, "top");
      })["catch"](function (error) {
        console.log(error);
        _this5.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    deleteAlert: function deleteAlert(id) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var lid, alert;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              lid = _this6.items.filter(function (item) {
                return item.id == id;
              });
              _context2.next = 3;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.alertController.create({
                header: "Let op!",
                message: "Weet u zeker dat u " + lid[0].naam + " wilt deleten?",
                buttons: [{
                  text: "Ja",
                  role: "confirm",
                  handler: function handler() {
                    _this6.deleteLid(id);
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
    LidUpdatenModal: function LidUpdatenModal(id) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var modal, _yield$modal$onWillDi2, data, role;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.modalController.create({
                component: _components_modals_LedenModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                componentProps: {
                  titel: "updaten",
                  id: id
                }
              });
            case 2:
              modal = _context3.sent;
              modal.present();
              _context3.next = 6;
              return modal.onWillDismiss();
            case 6:
              _yield$modal$onWillDi2 = _context3.sent;
              data = _yield$modal$onWillDi2.data;
              role = _yield$modal$onWillDi2.role;
              if (role == "confirm") {
                _this7.lidUpdaten(id, data.naam, data.email, data.geboortedatum, data.soortLid, data.familie, data.huisnummer, data.bijvoeging, data.straat, data.stad, data.land);
              }
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    lidUpdaten: function lidUpdaten(id, naam, email, geboortedatum, soortLid, familie, huisnummer, bijvoeging, straat, stad, land) {
      var _this8 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("leden/update", {
        "id": id,
        "naam": naam,
        "email": email,
        "geboortedatum": geboortedatum,
        "soortLid": soortLid,
        "familie": familie,
        "huisnummer": huisnummer,
        "bijvoeging": bijvoeging,
        "straat": straat,
        "stad": stad,
        "land": land
      }).then(function () {
        _this8.leden(_this8.get.page, _this8.get.naam, _this8.get.email, _this8.get.minGeboortedatum, _this8.get.maxGeboortedatum, _this8.get.soortLid, _this8.get.familie, _this8.get.adres, _this8.get.straat, _this8.get.stad, _this8.get.land);
        _this8.Toast("Lid succesvol aangepast", "success", 3000, "top");
      })["catch"](function (error) {
        console.log(error);
        _this8.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    Toast: function Toast(message, color, duration, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.toastController.create({
                message: message,
                color: color,
                duration: duration,
                position: position
              });
            case 2:
              toast = _context4.sent;
              toast.present();
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  },
  components: {
    IonCol: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonCol,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonInput,
    IonItem: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonItem,
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonButton,
    IonSelect: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonSelect,
    IonSelectOption: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonSelectOption
  },
  props: {
    "get": Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/FamilieVLModal.vue?vue&type=template&id=b2add3d8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/FamilieVLModal.vue?vue&type=template&id=b2add3d8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Annuleren ");
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Familie ");
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Land");
var _hoisted_4 = {
  slot: "content"
};
var _hoisted_5 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Volgende");
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Stad");
var _hoisted_8 = {
  slot: "content"
};
var _hoisted_9 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terug");
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Volgende");
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Straat");
var _hoisted_13 = {
  slot: "content"
};
var _hoisted_14 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terug");
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Volgende");
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Huisnummer");
var _hoisted_18 = {
  slot: "content"
};
var _hoisted_19 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terug");
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Volgende");
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Familie");
var _hoisted_23 = {
  slot: "content"
};
var _hoisted_24 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terug");
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Bevestigen");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_ion_buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-buttons");
  var _component_ion_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-title");
  var _component_ion_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-toolbar");
  var _component_ion_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-header");
  var _component_ion_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-label");
  var _component_ion_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-item");
  var _component_ion_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-input");
  var _component_ion_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-list");
  var _component_ion_accordion = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-accordion");
  var _component_ion_accordion_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-accordion-group");
  var _component_ion_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-content");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_header, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_toolbar, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_buttons, {
            slot: "start"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return _this.annuleren();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_1];
                }),
                _: 1 /* STABLE */
              })];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_title, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_2];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_content, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion_group, {
        ref: "accordionGroup",
        value: "land"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion, {
            value: "land"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[1] || (_cache[1] = function (e) {
                  e.stopPropagation();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_label, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_3];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                "class": "border d-inline-block"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    label: "Land",
                    "label-placement": "floating",
                    "on-ion-change": _ctx.landZoeken(),
                    modelValue: _ctx.land,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                      return _ctx.land = $event;
                    })
                  }, null, 8 /* PROPS */, ["on-ion-change", "modelValue"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !_ctx.land,
                onClick: _cache[3] || (_cache[3] = function ($event) {
                  return _ctx.toggleAccordion('stad');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_6];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.landen, function (landItem) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_item, {
                      button: true,
                      onClick: function onClick($event) {
                        return _ctx.waardeAanpassen('land', landItem['naam']);
                      }
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(landItem['naam']), 1 /* TEXT */)];
                      }),

                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]);
                  }), 256 /* UNKEYED_FRAGMENT */))];
                }),

                _: 1 /* STABLE */
              })])];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion, {
            value: "stad"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[4] || (_cache[4] = function (e) {
                  e.stopPropagation();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_label, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_7];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                onClick: _cache[5] || (_cache[5] = function ($event) {
                  return _ctx.toggleAccordion('land');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_10];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                "class": "border d-inline-block"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    label: "Stad",
                    "label-placement": "floating",
                    modelValue: _ctx.stad,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                      return _ctx.stad = $event;
                    }),
                    "on-ion-change": _ctx.stadZoeken()
                  }, null, 8 /* PROPS */, ["modelValue", "on-ion-change"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !_ctx.stad,
                onClick: _cache[7] || (_cache[7] = function () {
                  _ctx.toggleAccordion('straat');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_11];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.steden, function (stadItem) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_item, {
                      button: true,
                      onClick: function onClick() {
                        _ctx.waardeAanpassen('stad', stadItem['naam']);
                      }
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(stadItem['naam']), 1 /* TEXT */)];
                      }),

                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]);
                  }), 256 /* UNKEYED_FRAGMENT */))];
                }),

                _: 1 /* STABLE */
              })])];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion, {
            value: "straat"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[8] || (_cache[8] = function (e) {
                  e.stopPropagation();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_label, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_12];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                onClick: _cache[9] || (_cache[9] = function ($event) {
                  return _ctx.toggleAccordion('stad');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_15];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                "class": "border d-inline-block"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    label: "Straat",
                    "label-placement": "floating",
                    modelValue: _ctx.straat,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                      return _ctx.straat = $event;
                    }),
                    "on-ion-change": _ctx.straatZoeken()
                  }, null, 8 /* PROPS */, ["modelValue", "on-ion-change"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !_ctx.straat,
                onClick: _cache[11] || (_cache[11] = function ($event) {
                  return _ctx.toggleAccordion('huisnummer');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_16];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.straten, function (straatItem) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_item, {
                      button: true,
                      onClick: function onClick($event) {
                        return _ctx.waardeAanpassen('straat', straatItem['naam']);
                      }
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(straatItem['naam']), 1 /* TEXT */)];
                      }),

                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]);
                  }), 256 /* UNKEYED_FRAGMENT */))];
                }),

                _: 1 /* STABLE */
              })])];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion, {
            value: "huisnummer"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[12] || (_cache[12] = function (e) {
                  e.stopPropagation();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_label, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_17];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                onClick: _cache[13] || (_cache[13] = function ($event) {
                  return _ctx.toggleAccordion('straat');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_20];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                "class": "border d-inline-block"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    label: "Huisnummer",
                    min: "1",
                    max: "9999",
                    "label-placement": "floating",
                    type: "number",
                    modelValue: _ctx.huisnummer,
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                      return _ctx.huisnummer = $event;
                    }),
                    "on-ion-change": _ctx.adresZoeken()
                  }, null, 8 /* PROPS */, ["modelValue", "on-ion-change"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                "class": "border d-inline-block"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    label: "Bijvoeging",
                    maxlength: "3",
                    "label-placement": "floating",
                    modelValue: _ctx.bijvoeging,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
                      return _ctx.bijvoeging = $event;
                    }),
                    "on-ion-change": _ctx.adresZoeken()
                  }, null, 8 /* PROPS */, ["modelValue", "on-ion-change"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !_ctx.huisnummer,
                onClick: _cache[16] || (_cache[16] = function ($event) {
                  return _ctx.toggleAccordion('familie');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_21];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.huisnummers, function (huisnummerItem) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_item, {
                      button: true,
                      onClick: function onClick() {
                        _ctx.waardeAanpassen('huisnummer', huisnummerItem['huisnummer']);
                        _ctx.waardeAanpassen('bijvoeging', huisnummerItem['bijvoeging']);
                      }
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(huisnummerItem['huisnummer'] + huisnummerItem['bijvoeging']), 1 /* TEXT */)];
                      }),

                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]);
                  }), 256 /* UNKEYED_FRAGMENT */))];
                }),

                _: 1 /* STABLE */
              })])];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion, {
            value: "familie"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[17] || (_cache[17] = function (e) {
                  e.stopPropagation();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_label, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_22];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                onClick: _cache[18] || (_cache[18] = function ($event) {
                  return _ctx.toggleAccordion('huisnummer');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_25];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                "class": "border d-inline-block"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    label: "Familie",
                    ref: "FamilieIn",
                    "label-placement": "floating",
                    modelValue: _ctx.naam,
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
                      return _ctx.naam = $event;
                    })
                  }, null, 8 /* PROPS */, ["modelValue"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !_ctx.naam,
                onClick: _cache[20] || (_cache[20] = function ($event) {
                  return _ctx.bevestigen();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_26];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])]), _ctx.voorLeden ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_list, {
                key: 0
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.families, function (familieItem) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_item, {
                      button: true,
                      onClick: function onClick($event) {
                        return _ctx.waardeAanpassen('familie', familieItem['naam']);
                      }
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(familieItem['naam']), 1 /* TEXT */)];
                      }),

                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]);
                  }), 256 /* UNKEYED_FRAGMENT */))];
                }),

                _: 1 /* STABLE */
              })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 512 /* NEED_PATCH */)];
    }),

    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/LedenModal.vue?vue&type=template&id=70886472":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/LedenModal.vue?vue&type=template&id=70886472 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Annuleren ");
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Bevestigen ");
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Familie toevoegen");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_ion_buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-buttons");
  var _component_ion_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-title");
  var _component_ion_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-toolbar");
  var _component_ion_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-header");
  var _component_ion_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-text");
  var _component_ion_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-input");
  var _component_ion_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-item");
  var _component_ion_select_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select-option");
  var _component_ion_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select");
  var _component_ion_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-list");
  var _component_ion_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-content");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_header, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_toolbar, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_buttons, {
            slot: "start"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return _ctx.annuleren();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_1];
                }),
                _: 1 /* STABLE */
              })];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_title, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.titel), 1 /* TEXT */)];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_buttons, {
            slot: "end"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !(_ctx.naam && _ctx.validateEmail(_ctx.email) && _ctx.geboortedatum && _ctx.soortLid && _ctx.familie),
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return _ctx.bevestigen();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_2];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_content, {
    "class": "ion-padding"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [!_ctx.checkEm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_text, {
        key: 0,
        color: "danger"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.error), 1 /* TEXT */)];
        }),

        _: 1 /* STABLE */
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                label: "naam",
                modelValue: _ctx.naam,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return _ctx.naam = $event;
                })
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                type: "email",
                label: "email",
                modelValue: _ctx.email,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                  return _ctx.email = $event;
                })
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                type: "date",
                min: "1900-01-01",
                max: _ctx.huidigeDatum,
                label: "geboortedatum",
                modelValue: _ctx.geboortedatum,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                  return _ctx.geboortedatum = $event;
                })
              }, null, 8 /* PROPS */, ["max", "modelValue"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_select, {
                placeholder: "Selecteer wat voor soort lid",
                modelValue: _ctx.soortLid,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                  return _ctx.soortLid = $event;
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.soortenLeden, function (s) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_select_option, {
                      value: s.omschrijving
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(s.omschrijving), 1 /* TEXT */)];
                      }),

                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]);
                  }), 256 /* UNKEYED_FRAGMENT */))];
                }),

                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
            "class": "d-flex justify-content-center"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                label: "familie",
                readonly: true,
                modelValue: _ctx.familie,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                  return _ctx.familie = $event;
                })
              }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                label: "adres",
                readonly: true,
                value: _ctx.straat ? _ctx.straat + ' ' + _ctx.huisnummer + (_ctx.bijvoeging ? _ctx.bijvoeging : '') + ', ' + _ctx.stad + ', ' + _ctx.land : ''
              }, null, 8 /* PROPS */, ["value"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
            onClick: _cache[7] || (_cache[7] = function () {
              _ctx.familieToevoegen();
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_3];
            }),
            _: 1 /* STABLE */
          })])];
        }),

        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "d-flex justify-content-center"
}, "Leden", -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Alle ");
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("aanpassen");
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("deleten");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ion_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-input");
  var _component_ion_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-item");
  var _component_ion_select_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select-option");
  var _component_ion_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select");
  var _component_zoek_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("zoek-container");
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_ion_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-col");
  var _component_grid_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("grid-container");
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_zoek_container, {
    zoeken: $options.zoeken,
    toevoegen: $options.LedenToevoegenModal,
    toevoegenTitel: "Leden Toevoegen"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.naam,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.naam = $event;
            }),
            "class": "d-inline-block",
            label: "naam",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.email,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.email = $event;
            }),
            "class": "d-inline-block",
            label: "email",
            type: "email",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            type: "date",
            min: "1900-01-01",
            max: $data.maxGeboortedatum ? $data.maxGeboortedatum : $data.huidigeDatum,
            modelValue: $data.minGeboortedatum,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.minGeboortedatum = $event;
            }),
            "class": "d-inline-block",
            label: "min geboortedatum",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["max", "modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            type: "date",
            min: $data.minGeboortedatum ? $data.minGeboortedatum : '1900-01-01',
            max: $data.huidigeDatum,
            modelValue: $data.maxGeboortedatum,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.maxGeboortedatum = $event;
            }),
            "class": "d-inline-block",
            label: "max geboortedatum",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["min", "max", "modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block w-25"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_select, {
            modelValue: $data.soortLid,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.soortLid = $event;
            }),
            label: "soort lid",
            "label-placement": "floating"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_select_option, {
                value: "Alle"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_2];
                }),
                _: 1 /* STABLE */
              }), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.soortenLeden, function (s) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_select_option, {
                  value: s.omschrijving
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(s.omschrijving), 1 /* TEXT */)];
                  }),

                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]);
              }), 256 /* UNKEYED_FRAGMENT */))];
            }),

            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.familie,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $data.familie = $event;
            }),
            "class": "d-inline-block",
            label: "familie",
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.adres,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $data.adres = $event;
            }),
            "class": "d-inline-block",
            label: "adres",
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
            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
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
            "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
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
            "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
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
  }, 8 /* PROPS */, ["zoeken", "toevoegen"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_grid_container, {
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
              return $options.LidUpdatenModal(slotProps.item.id);
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_3];
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
              return [_hoisted_4];
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

/***/ "./resources/js/components/modals/FamilieVLModal.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/modals/FamilieVLModal.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FamilieVLModal_vue_vue_type_template_id_b2add3d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FamilieVLModal.vue?vue&type=template&id=b2add3d8 */ "./resources/js/components/modals/FamilieVLModal.vue?vue&type=template&id=b2add3d8");
/* harmony import */ var _FamilieVLModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FamilieVLModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/FamilieVLModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FamilieVLModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FamilieVLModal_vue_vue_type_template_id_b2add3d8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/FamilieVLModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/LedenModal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/modals/LedenModal.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LedenModal_vue_vue_type_template_id_70886472__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LedenModal.vue?vue&type=template&id=70886472 */ "./resources/js/components/modals/LedenModal.vue?vue&type=template&id=70886472");
/* harmony import */ var _LedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LedenModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/LedenModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LedenModal_vue_vue_type_template_id_70886472__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/LedenModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Leden.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Leden.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Leden_vue_vue_type_template_id_f1cdf38a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leden.vue?vue&type=template&id=f1cdf38a */ "./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a");
/* harmony import */ var _Leden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leden.vue?vue&type=script&lang=js */ "./resources/js/pages/Leden.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Leden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Leden_vue_vue_type_template_id_f1cdf38a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Leden.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/FamilieVLModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/modals/FamilieVLModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FamilieVLModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FamilieVLModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FamilieVLModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/FamilieVLModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/LedenModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/modals/LedenModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LedenModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/LedenModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Leden.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Leden.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Leden.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/FamilieVLModal.vue?vue&type=template&id=b2add3d8":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/modals/FamilieVLModal.vue?vue&type=template&id=b2add3d8 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FamilieVLModal_vue_vue_type_template_id_b2add3d8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FamilieVLModal_vue_vue_type_template_id_b2add3d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FamilieVLModal.vue?vue&type=template&id=b2add3d8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/FamilieVLModal.vue?vue&type=template&id=b2add3d8");


/***/ }),

/***/ "./resources/js/components/modals/LedenModal.vue?vue&type=template&id=70886472":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/modals/LedenModal.vue?vue&type=template&id=70886472 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LedenModal_vue_vue_type_template_id_70886472__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LedenModal_vue_vue_type_template_id_70886472__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LedenModal.vue?vue&type=template&id=70886472 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/LedenModal.vue?vue&type=template&id=70886472");


/***/ }),

/***/ "./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_template_id_f1cdf38a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_template_id_f1cdf38a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Leden.vue?vue&type=template&id=f1cdf38a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a");


/***/ })

}]);