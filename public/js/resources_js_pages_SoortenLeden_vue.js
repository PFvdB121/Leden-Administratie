"use strict";
(self["webpackChunkleden_administratie"] = self["webpackChunkleden_administratie"] || []).push([["resources_js_pages_SoortenLeden_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/SoortenLedenModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/SoortenLedenModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  beforeMount: function beforeMount() {
    if (this.id) {
      this.soortLidOphalen(this.id);
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    next(false);
    this.annuleren();
  },
  components: {
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonButton,
    IonItem: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonItem,
    IonList: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonList,
    IonButtons: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonButtons,
    IonToolbar: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonToolbar,
    IonTitle: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonTitle,
    IonHeader: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonHeader,
    IonContent: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonContent,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonInput,
    IonText: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonText
  },
  data: function data() {
    return {
      omschrijving: "",
      minLeeftijd: "",
      maxLeeftijd: "",
      korting: "",
      checkOm: true,
      error: ""
    };
  },
  methods: {
    soortLidOphalen: function soortLidOphalen(id) {
      var _this = this;
      if (id) {
        axios.post("soorten_leden/show", {
          id: id
        }).then(function (response) {
          _this.omschrijving = response.data.omschrijving;
          _this.korting = String(response.data.korting);
          _this.minLeeftijd = String(response.data.min_leeftijd);
          _this.maxLeeftijd = String(response.data.max_leeftijd);
        })["catch"](function (error) {
          console.log(error);
          _this.Toast("Er is iets misgegaan", "danger", 3000, "top");
        });
      } else {
        console.error("Geen id toegevoegd");
      }
    },
    check: function check(id, omschrijving) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.post("soorten_leden/check", {
                omschrijving: omschrijving,
                id: id
              }).then(function (response) {
                _this2.checkOm = Boolean(response.data);
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
    annuleren: function annuleren() {
      _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.modalController.dismiss(null, "cancel");
    },
    bevestigen: function bevestigen() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = {
                "omschrijving": _this3.omschrijving,
                "korting": _this3.korting,
                "minLeeftijd": _this3.minLeeftijd,
                "maxLeeftijd": _this3.maxLeeftijd
              };
              _context2.next = 3;
              return _this3.check(_this3.id, _this3.omschrijving);
            case 3:
              if (_this3.checkOm) {
                _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.modalController.dismiss(data, "confirm");
              } else {
                _this3.error = "omschrijving bestaat al";
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    Toast: function Toast(message, color, duration, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.toastController.create({
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
  name: "SoortenLedenModal",
  props: {
    titel: String,
    id: Number
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SoortenLeden.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SoortenLeden.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components_modals_SoortenLedenModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals/SoortenLedenModal.vue */ "./resources/js/components/modals/SoortenLedenModal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: [],
      colomnBreedte: 100,
      grid: {
        "omschrijving": 2,
        "korting": 1,
        "min leeftijd": 2,
        "max leeftijd": 2,
        "hoeveelheid leden": 3,
        "leden zoeken": 2,
        "aanpassen": 2,
        "deleten": 2
      },
      ledUrl: ""
    };
  },
  methods: {
    soortenLeden: function soortenLeden() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("soorten_leden").then(function (response) {
        _this.items = response.data.data;
      })["catch"](function (error) {
        console.error(error);
        _this.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    soortLidToevoegen: function soortLidToevoegen(omschrijving, minLeeftijd, maxLeeftijd, korting) {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("soorten_leden/store", {
        "omschrijving": omschrijving,
        "minLeeftijd": minLeeftijd,
        "maxLeeftijd": maxLeeftijd,
        "korting": korting
      }).then(function () {
        _this2.soortenLeden(_this2.get);
        _this2.Toast("Soort lid succesvol toegevoegd", "success", 3000, "top");
      })["catch"](function (error) {
        console.log(error);
        _this2.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    soortLidToevoegenModal: function soortLidToevoegenModal() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal, _yield$modal$onWillDi, data, role;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.modalController.create({
                component: _components_modals_SoortenLedenModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                componentProps: {
                  titel: "Soort lid Toevoegen"
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
                _this3.soortLidToevoegen(data.omschrijving, data.minLeeftijd, data.maxLeeftijd, data.korting);
              }
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    updateSoortLid: function updateSoortLid(id, omschrijving, minLeeftijd, maxLeeftijd, korting) {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("soorten_leden/update", {
        "id": id,
        "omschrijving": omschrijving,
        "minLeeftijd": minLeeftijd,
        "maxLeeftijd": maxLeeftijd,
        "korting": korting
      }).then(function () {
        _this4.soortenLeden(_this4.get);
        _this4.Toast("Soort lid succesvol aangepast", "success", 3000, "top");
      })["catch"](function (error) {
        console.log(error);
        _this4.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    updateSoortLidModal: function updateSoortLidModal(id) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var modal, _yield$modal$onWillDi2, data, role;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.modalController.create({
                component: _components_modals_SoortenLedenModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                componentProps: {
                  titel: "updaten",
                  id: id
                }
              });
            case 2:
              modal = _context2.sent;
              modal.present();
              _context2.next = 6;
              return modal.onWillDismiss();
            case 6:
              _yield$modal$onWillDi2 = _context2.sent;
              data = _yield$modal$onWillDi2.data;
              role = _yield$modal$onWillDi2.role;
              if (role == "confirm") {
                _this5.updateSoortLid(id, data.omschrijving, data.minLeeftijd, data.maxLeeftijd, data.korting);
              }
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    deleteSoortLid: function deleteSoortLid(id) {
      var _this6 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("soorten_leden/delete", {
        "id": id
      }).then(function () {
        _this6.soortenLeden(_this6.get);
        _this6.Toast("Soort lid succesvol gedelete", "success", 3000, "top");
      })["catch"](function (error) {
        _this6.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    deleteAlert: function deleteAlert(id) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var soortLid, alert;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              soortLid = _this7.items.filter(function (item) {
                return item.id == id;
              });
              _context3.next = 3;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.alertController.create({
                header: "Let op!",
                message: "Weet u zeker dat u het soort lid" + soortLid[0].omschrijving + " wilt deleten?",
                buttons: [{
                  text: "Ja",
                  role: "confirm",
                  handler: function handler() {
                    _this7.deleteSoortLid(id);
                  }
                }, {
                  text: "Nee",
                  role: "cancel"
                }]
              });
            case 3:
              alert = _context3.sent;
              _context3.next = 6;
              return alert.present();
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
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
  beforeMount: function beforeMount() {
    this.ledUrl = window.location.protocol + '//' + window.location.host + '/app/leden';
  },
  mounted: function mounted() {
    this.soortenLeden();
  },
  props: {
    get: Object
  },
  components: {
    IonCol: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonCol,
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonButton
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/SoortenLedenModal.vue?vue&type=template&id=09ee140e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/SoortenLedenModal.vue?vue&type=template&id=09ee140e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Annuleren ");
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Bevestigen ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_ion_buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-buttons");
  var _component_ion_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-title");
  var _component_ion_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-toolbar");
  var _component_ion_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-header");
  var _component_ion_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-text");
  var _component_ion_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-input");
  var _component_ion_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-item");
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
                  return $options.annuleren();
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
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.titel), 1 /* TEXT */)];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_buttons, {
            slot: "end"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !($data.omschrijving && $data.korting && ($data.minLeeftijd == 'null' || !$data.minLeeftijd || $data.maxLeeftijd == 'null' || !$data.maxLeeftijd || parseInt($data.maxLeeftijd) >= parseInt($data.minLeeftijd))),
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return $options.bevestigen();
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
      return [!$data.checkOm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_text, {
        key: 0,
        color: "danger"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.error), 1 /* TEXT */)];
        }),

        _: 1 /* STABLE */
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                label: "omschrijving",
                modelValue: $data.omschrijving,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $data.omschrijving = $event;
                })
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                type: "number",
                min: "0",
                max: "100",
                label: "korting",
                modelValue: $data.korting,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                  return $data.korting = $event;
                })
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                type: "number",
                min: "0",
                max: $data.maxLeeftijd ? $data.maxLeeftijd : '',
                label: "min leeftijd",
                modelValue: $data.minLeeftijd,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                  return $data.minLeeftijd = $event;
                })
              }, null, 8 /* PROPS */, ["max", "modelValue"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                "label-placement": "floating",
                type: "number",
                min: $data.minLeeftijd ? $data.minLeeftijd : '',
                label: "max leeftijd",
                modelValue: $data.maxLeeftijd,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                  return $data.maxLeeftijd = $event;
                })
              }, null, 8 /* PROPS */, ["min", "modelValue"])];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SoortenLeden.vue?vue&type=template&id=501fb1c2":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SoortenLeden.vue?vue&type=template&id=501fb1c2 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["action"];
var _hoisted_2 = ["value"];
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "submit",
  value: "soort leden zoeken"
}, null, -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" aanpassen ");
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" deleten ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_zoek_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("zoek-container");
  var _component_ion_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-col");
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_grid_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("grid-container");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_zoek_container, {
    toevoegen: $options.soortLidToevoegenModal,
    toevoegenTitel: "Leden Toevoegen"
  }, null, 8 /* PROPS */, ["toevoegen"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_grid_container, {
    items: $data.items,
    colomnBreedte: $data.colomnBreedte,
    gridCols: $data.grid
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
        size: $data.grid['leden zoeken'],
        "class": "d-flex justify-content-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
            action: _this.ledUrl
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "hidden",
            name: "soortLid",
            value: slotProps.item.omschrijving
          }, null, 8 /* PROPS */, _hoisted_2), _hoisted_3], 8 /* PROPS */, _hoisted_1)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
        size: $data.grid.aanpassen,
        "class": "d-flex justify-content-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
            onClick: function onClick($event) {
              return $options.updateSoortLidModal(slotProps.item.id);
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_4];
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
            disabled: slotProps.item['hoeveelheid leden'] > 0,
            color: "danger"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_5];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick", "disabled"])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["items", "colomnBreedte", "gridCols"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/components/modals/SoortenLedenModal.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/modals/SoortenLedenModal.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SoortenLedenModal_vue_vue_type_template_id_09ee140e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoortenLedenModal.vue?vue&type=template&id=09ee140e */ "./resources/js/components/modals/SoortenLedenModal.vue?vue&type=template&id=09ee140e");
/* harmony import */ var _SoortenLedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoortenLedenModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/SoortenLedenModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SoortenLedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SoortenLedenModal_vue_vue_type_template_id_09ee140e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/SoortenLedenModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/SoortenLeden.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/SoortenLeden.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SoortenLeden_vue_vue_type_template_id_501fb1c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoortenLeden.vue?vue&type=template&id=501fb1c2 */ "./resources/js/pages/SoortenLeden.vue?vue&type=template&id=501fb1c2");
/* harmony import */ var _SoortenLeden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoortenLeden.vue?vue&type=script&lang=js */ "./resources/js/pages/SoortenLeden.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SoortenLeden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SoortenLeden_vue_vue_type_template_id_501fb1c2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/SoortenLeden.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/SoortenLedenModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/modals/SoortenLedenModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLedenModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoortenLedenModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/SoortenLedenModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/SoortenLeden.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/SoortenLeden.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLeden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLeden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoortenLeden.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SoortenLeden.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/SoortenLedenModal.vue?vue&type=template&id=09ee140e":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/modals/SoortenLedenModal.vue?vue&type=template&id=09ee140e ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLedenModal_vue_vue_type_template_id_09ee140e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLedenModal_vue_vue_type_template_id_09ee140e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoortenLedenModal.vue?vue&type=template&id=09ee140e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/SoortenLedenModal.vue?vue&type=template&id=09ee140e");


/***/ }),

/***/ "./resources/js/pages/SoortenLeden.vue?vue&type=template&id=501fb1c2":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/SoortenLeden.vue?vue&type=template&id=501fb1c2 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLeden_vue_vue_type_template_id_501fb1c2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SoortenLeden_vue_vue_type_template_id_501fb1c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SoortenLeden.vue?vue&type=template&id=501fb1c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/SoortenLeden.vue?vue&type=template&id=501fb1c2");


/***/ })

}]);