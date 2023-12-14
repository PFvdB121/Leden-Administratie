"use strict";
(self["webpackChunkleden_administratie"] = self["webpackChunkleden_administratie"] || []).push([["resources_js_pages_Contributies_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/ContributiesModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/ContributiesModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContributiesModal",
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    next(false);
    this.annuleren();
  },
  beforeMount: function beforeMount() {
    this.soortenLedenOphalen();
    if (this.id) {
      this.contributieOphalen();
    }
  },
  props: {
    titel: String,
    id: Number
  },
  data: function data() {
    return {
      bedrag: 0,
      email: "",
      soortLid: "",
      boekjaar: "",
      emails: [],
      gekozenMail: "",
      soortenLeden: [],
      lid: {},
      boekenjaren: [],
      basisBedrag: 100,
      korting: 0,
      minBedrag: ""
    };
  },
  methods: {
    soortenLedenOphalen: function soortenLedenOphalen() {
      var _this = this;
      axios.post("soorten_leden").then(function (response) {
        _this.soortenLeden = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    minBedragBepalen: function minBedragBepalen() {
      var _this2 = this;
      if (this.soortLid) {
        soortLid = this.soortenLeden.filter(function (s) {
          return s.omschrijving === _this2.soortLid;
        });
        this.korting = soortLid[0]["korting"];
        this.minBedrag = this.basisBedrag - this.basisBedrag / this.korting;
      } else {
        this.korting = 0;
        this.minBedrag = "";
      }
    },
    contributieOphalen: function contributieOphalen(id) {
      var _this3 = this;
      if (id) {
        axios.post("contributies/show", {
          id: id
        }).then(function (response) {
          _this3.soortLid = response.data.data["soort lid"];
          _this3.email = response.data.data.email;
          _this3.bedrag = response.data.data.bedrag;
          _this3.boekjaar = response.data.data.boekjaar;
        })["catch"](function (error) {
          console.log(error);
          _this3.Toast("Er is iets misgegaan", "danger", 3000, "top");
        });
      } else {
        console.error("Geen id toegevoegd");
      }
    },
    zoekMails: function zoekMails() {
      var _this4 = this;
      if (this.email) {
        axios.post("leden/zoek_mails", {
          email: this.email
        }).then(function (response) {
          _this4.gekozenMail = response.data.email;
        })["catch"](function (error) {
          console.log(error);
          _this4.Toast("Er is iets misgegaan", "danger", 3000, "top");
        });
      } else {
        console.error("Geen id toegevoegd");
      }
    },
    LidOphalen: function LidOphalen(id) {
      var _this5 = this;
      axios.post("leden/show", {
        id: id
      }).then(function (response) {
        _this5.gekozenMail = response.data.data.email;
        _this5.soortLid = response.data.data["soort lid"];
      })["catch"](function (error) {
        console.log(error);
        _this5.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    zoekjaar: function zoekjaar() {
      var _this6 = this;
      if (this.boekjaar) {
        axios.post("boekenjaren/zoek_jaar", {
          jaar: this.boekjaar
        }).then(function (response) {
          _this6.boekenjaren = response.data;
        })["catch"](function (error) {
          console.log(error);
          _this6.Toast("Er is iets misgegaan", "danger", 3000, "top");
        });
      } else {
        console.error("Geen id toegevoegd");
      }
    },
    annuleren: function annuleren() {
      _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.modalController.dismiss(null, "cancel");
    },
    bevestigen: function bevestigen() {
      var data = {
        "soortLid": this.soortLid,
        "email": this.gekozenMail,
        "bedrag": this.bedrag,
        "boekjaar": this.boekjaar
      };
      _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.modalController.dismiss(data, "confirm");
    }
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
    IonSelect: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonSelect,
    IonSelectOption: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonSelectOption,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonInput,
    IonLabel: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonLabel,
    IonAccordion: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonAccordion,
    IonAccordionGroup: _ionic_vue__WEBPACK_IMPORTED_MODULE_0__.IonAccordionGroup
  },
  setup: function setup() {
    var accordionGroup = ref(null);
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
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Contributies.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Contributies.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components_modals_ContributiesModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals/ContributiesModal.vue */ "./resources/js/components/modals/ContributiesModal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    get: Object
  },
  methods: {
    contributies: function contributies(get) {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("contributies", get).then(function (response) {
        _this.laatstePagina = response.data.meta.last_page;
        _this.items = response.data.data;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    zoeken: function zoeken() {
      this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
        "email": this.email,
        "soortLid": this.soortLid,
        "boekjaar": this.boekjaar,
        "minBedrag": this.minBedrag,
        "maxBedrag": this.maxBedrag,
        "minLeeftijd": this.minLeeftijd,
        "maxLeeftijd": this.maxLeeftijd
      });
    },
    soortenLedenOphalen: function soortenLedenOphalen() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("soorten_leden").then(function (response) {
        _this2.soortenLeden = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    contributieToevoegen: function contributieToevoegen(bedrag, boekjaar, email, soortLid) {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("conntributies/store", {
        "bedrag": bedrag,
        "boekjaar": boekjaar,
        "email": email,
        "soortLid": soortLid
      }).then(function () {
        _this3.contributies(_this3.get);
        _this3.Toast("Contributie succesvol toegevoegd", "success", 3000, "top");
      })["catch"](function (error) {
        _this3.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    contributieToevoegenModal: function contributieToevoegenModal() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal, _yield$modal$onWillDi, data, role;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.modalController.create({
                component: _components_modals_ContributiesModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                componentProps: {
                  titel: "Contributies Toevoegen"
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
                _this4.contributieToevoegen(data.bedrag, data.boekjaar, data.email, data.soortLid);
              }
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    deleteContributie: function deleteContributie(id) {
      var _this5 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("contributies/delete", {
        "id": id
      }).then(function () {
        _this5.contributies(_this5.get);
        _this5.Toast("Contributie succesvol gedelete", "success", 3000, "top");
      })["catch"](function (error) {
        _this5.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    },
    deleteAlert: function deleteAlert(id) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var contributie, alert;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              contributie = _this6.items.filter(function (item) {
                return item.id == id;
              });
              _context2.next = 3;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.alertController.create({
                header: "Let op!",
                message: "Weet u zeker dat u de contributie van" + contributie[0].email + " op " + contributie[0].boekjaar + " wilt deleten?",
                buttons: [{
                  text: "Ja",
                  role: "confirm",
                  handler: function handler() {
                    _this6.deleteContributie(id);
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
    ContributieUpdatenModal: function ContributieUpdatenModal(id) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var modal, _yield$modal$onWillDi2, data, role;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.modalController.create({
                component: _components_modals_ContributiesModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
                _this7.Contributies(id, data.bedrag, data.boekjaar, data.email, data.soortLid);
              }
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    contributieUpdaten: function contributieUpdaten(id, bedrag, boekjaar, email, soortLid) {
      var _this8 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("contributies/update", {
        "id": id,
        "bedrag": bedrag,
        "boekjaar": boekjaar,
        "email": email,
        "soortLid": soortLid
      }).then(function () {
        _this8.contributies(_this8.get);
        _this8.Toast("Contributie succesvol aangepast", "success", 3000, "top");
      })["catch"](function (error) {
        console.log(error);
        _this8.Toast("Er is iets misgegaan", "danger", 3000, "top");
      });
    }
  },
  data: function data() {
    return {
      items: [],
      colomnBreedte: 100,
      laatstePagina: 1,
      email: "",
      soortLid: "",
      minBedrag: "",
      maxBedrag: "",
      minLeeftijd: "",
      maxLeeftijd: "",
      boekjaar: "",
      soortenLeden: [],
      grid: {
        "bedrag": 1,
        "email": 3,
        "leeftijd": 1,
        "boekjaar": 1,
        "soort lid": 2,
        "aanpassen": 2,
        "deleten": 2
      }
    };
  },
  beforeMount: function beforeMount() {
    this.email = this.get.email;
    this.minBedrag = this.get.minBedrag;
    this.maxBedrag = this.get.maxBedrag;
    this.minLeeftijd = this.get.minLeeftijd;
    this.maxLeeftijd = this.get.maxLeeftijd;
    this.soortLid = this.get.soortLid;
    this.boekjaar = this.get.boekjaar;
    this.soortenLedenOphalen();
    this.contributies(this.get);
  },
  components: {
    IonCol: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonCol,
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonButton,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonInput,
    IonItem: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonItem,
    IonSelect: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonSelect,
    IonSelectOption: _ionic_vue__WEBPACK_IMPORTED_MODULE_2__.IonSelectOption
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/ContributiesModal.vue?vue&type=template&id=a4904560":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/ContributiesModal.vue?vue&type=template&id=a4904560 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Annuleren ");
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Bevestigen ");
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Boekjaar");
var _hoisted_4 = {
  slot: "content"
};
var _hoisted_5 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Volgende");
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Email Lid");
var _hoisted_8 = {
  slot: "content"
};
var _hoisted_9 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terug");
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Volgende");
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Soort Lid");
var _hoisted_13 = {
  slot: "content"
};
var _hoisted_14 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terug");
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Volgende");
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("bedrag");
var _hoisted_18 = {
  slot: "content"
};
var _hoisted_19 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terug");
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Bevestigen ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
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
  var _component_ion_select_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select-option");
  var _component_ion_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select");
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
                disabled: !($data.gekozenMail && $data.bedrag && $data.soortLid && $data.boekjaar),
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
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion_group, {
        ref: "accordionGroup",
        value: "boekjaar"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion, {
            value: "boekjaar"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[2] || (_cache[2] = function (e) {
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
                    label: "Boekjaar",
                    "label-placement": "floating",
                    modelValue: $data.boekjaar,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                      return $data.boekjaar = $event;
                    }),
                    "on-ion-change": $options.zoekjaar()
                  }, null, 8 /* PROPS */, ["modelValue", "on-ion-change"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !$data.boekjaar,
                onClick: _cache[4] || (_cache[4] = function ($event) {
                  return $setup.toggleAccordion('email');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_6];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.boekenjaren, function (boekjaar) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_item, {
                      button: true,
                      onClick: function onClick() {
                        _ctx.waardeAanpassen('boekjaar', boekjaar['jaar']);
                      }
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(boekjaar['jaar']), 1 /* TEXT */)];
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
            value: "email"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[5] || (_cache[5] = function (e) {
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
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    readonly: true,
                    modelValue: $data.gekozenMail,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                      return $data.gekozenMail = $event;
                    })
                  }, null, 8 /* PROPS */, ["modelValue"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                onClick: _cache[7] || (_cache[7] = function ($event) {
                  return $setup.toggleAccordion('boekjaar');
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
                    label: "Email",
                    "label-placement": "floating",
                    modelValue: $data.email,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                      return $data.email = $event;
                    }),
                    "on-ion-change": $options.zoekMails()
                  }, null, 8 /* PROPS */, ["modelValue", "on-ion-change"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !_ctx.huisnummer,
                onClick: _cache[9] || (_cache[9] = function ($event) {
                  return $setup.toggleAccordion('soortLid');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_11];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.emails, function (email) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_item, {
                      button: true,
                      onClick: function onClick() {
                        _ctx.waardeAanpassen('gekozenMail', email['email']);
                        _ctx.waardeAanpassen('soortLid', email['soort lid']);
                      }
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(email['email']), 1 /* TEXT */)];
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
            value: "soortLid"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[10] || (_cache[10] = function (e) {
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
                onClick: _cache[11] || (_cache[11] = function ($event) {
                  return $setup.toggleAccordion('email');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_15];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_select, {
                    modelValue: $data.soortLid,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
                      return $data.soortLid = $event;
                    }),
                    "on-ion-change": $options.minBedragBepalen()
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.soortenLeden, function (soortLid) {
                        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_select_option, {
                          value: soortLid.omschrijving
                        }, {
                          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(soortLid.omschrijving), 1 /* TEXT */)];
                          }),

                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]);
                      }), 256 /* UNKEYED_FRAGMENT */))];
                    }),

                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["modelValue", "on-ion-change"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !$data.soortLid,
                onClick: _cache[13] || (_cache[13] = function ($event) {
                  return $setup.toggleAccordion('bedrag');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_16];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])])])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_accordion, {
            value: "bedrag"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
                slot: "header",
                onClick: _cache[14] || (_cache[14] = function (e) {
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
                onClick: _cache[15] || (_cache[15] = function ($event) {
                  return $setup.toggleAccordion('email');
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_20];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
                    label: "Bedrag",
                    type: "number",
                    min: $data.minBedrag,
                    step: ".01",
                    "label-placement": "floating",
                    modelValue: $data.bedrag,
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
                      return $data.bedrag = $event;
                    })
                  }, null, 8 /* PROPS */, ["min", "modelValue"])];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button, {
                disabled: !($data.bedrag >= $data.minBedrag),
                onClick: _cache[17] || (_cache[17] = function ($event) {
                  return $options.bevestigen();
                })
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_21];
                }),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["disabled"])])])];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Contributies.vue?vue&type=template&id=68a5c568":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Contributies.vue?vue&type=template&id=68a5c568 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
  var _component_ion_select_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select-option");
  var _component_ion_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-select");
  var _component_zoek_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("zoek-container");
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_ion_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-col");
  var _component_grid_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("grid-container");
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_zoek_container, {
    zoeken: $options.zoeken,
    toevoegen: $options.contributieToevoegen,
    toevoegenTitel: "Contributie toevoegen"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.email,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
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
            modelValue: $data.minBedrag,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.minBedrag = $event;
            }),
            "class": "d-inline-block",
            label: "minimum bedrag",
            type: "number",
            step: ".01",
            min: 0,
            max: $data.maxBedrag,
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue", "max"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.maxBedrag,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.maxBedrag = $event;
            }),
            "class": "d-inline-block",
            label: "maximum bedrag",
            type: "number",
            step: ".01",
            min: $data.minBedrag ? $data.minBedrag : 0,
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue", "min"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.minLeeftijd,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.minLeeftijd = $event;
            }),
            "class": "d-inline-block",
            label: "minimum leeftijd",
            type: "number",
            min: 0,
            max: $data.maxLeeftijd,
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue", "max"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.maxLeeftijd,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.maxLeeftijd = $event;
            }),
            "class": "d-inline-block",
            label: "maximum leeftijd",
            type: "number",
            min: $data.minLeeftijd ? $data.minLeeftijd : 0,
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue", "min"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
            modelValue: $data.email,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $data.email = $event;
            }),
            "class": "d-inline-block",
            label: "boekjaar",
            type: "number",
            min: 0,
            "label-placement": "floating"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
        "class": "border mx-1 d-inline-block w-25"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_select, {
            modelValue: $data.soortLid,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $data.soortLid = $event;
            }),
            label: "soort lid",
            "label-placement": "floating"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.soortenLeden, function (s) {
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
              return $options.ContributieUpdatenModal(slotProps.item.id);
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

/***/ "./resources/js/components/modals/ContributiesModal.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/modals/ContributiesModal.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContributiesModal_vue_vue_type_template_id_a4904560__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContributiesModal.vue?vue&type=template&id=a4904560 */ "./resources/js/components/modals/ContributiesModal.vue?vue&type=template&id=a4904560");
/* harmony import */ var _ContributiesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContributiesModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/ContributiesModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ContributiesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ContributiesModal_vue_vue_type_template_id_a4904560__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/ContributiesModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Contributies.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Contributies.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contributies_vue_vue_type_template_id_68a5c568__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contributies.vue?vue&type=template&id=68a5c568 */ "./resources/js/pages/Contributies.vue?vue&type=template&id=68a5c568");
/* harmony import */ var _Contributies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contributies.vue?vue&type=script&lang=js */ "./resources/js/pages/Contributies.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Contributies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Contributies_vue_vue_type_template_id_68a5c568__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Contributies.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/ContributiesModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/modals/ContributiesModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContributiesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContributiesModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContributiesModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/ContributiesModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Contributies.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Contributies.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contributies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contributies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Contributies.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Contributies.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/ContributiesModal.vue?vue&type=template&id=a4904560":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/modals/ContributiesModal.vue?vue&type=template&id=a4904560 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContributiesModal_vue_vue_type_template_id_a4904560__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContributiesModal_vue_vue_type_template_id_a4904560__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContributiesModal.vue?vue&type=template&id=a4904560 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/ContributiesModal.vue?vue&type=template&id=a4904560");


/***/ }),

/***/ "./resources/js/pages/Contributies.vue?vue&type=template&id=68a5c568":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Contributies.vue?vue&type=template&id=68a5c568 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contributies_vue_vue_type_template_id_68a5c568__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contributies_vue_vue_type_template_id_68a5c568__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Contributies.vue?vue&type=template&id=68a5c568 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Contributies.vue?vue&type=template&id=68a5c568");


/***/ })

}]);