"use strict";
(self["webpackChunkleden_administratie"] = self["webpackChunkleden_administratie"] || []).push([["resources_js_pages_Leden_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/vue */ "./node_modules/@ionic/vue/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


var __default__ = {
  beforeMount: function beforeMount() {
    this.gridTotaal = this.gridColTellen(this.grid);
    this.gridBreedte = this.gridBreedteTellen(this.gridTotaal, this.colomnBreedte);
  },
  data: function data() {
    return {
      items: [],
      grid: {
        "naam": 2,
        "email": 3,
        "geboortedatum": 2,
        "soort_lid": 1,
        "familie": 1,
        "adres": 2,
        "aanpassen": 1,
        "deleten": 1
      },
      colomnBreedte: 100,
      gridTotaal: 0,
      gridBreedte: "",
      pagina: 1,
      naam: "",
      email: "",
      geboortedatum: "",
      soort_lid: "",
      familie: "",
      adres: "",
      straat: "",
      stad: "",
      land: ""
    };
  },
  methods: {
    leden: function leden(pagina, naam, email, geboortedatum, soort_lid, familie, adres, straat, stad, land) {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/app/leden", {
        "page": pagina,
        "naam": naam,
        "email": email,
        "geboortedatum": geboortedatum,
        "soort_lid": soort_lid,
        "familie": familie,
        "adres": adres,
        "straat": straat,
        "stad": stad,
        "land": land
      }).then(function (response) {
        console.log(response);
        _this.items = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    gridColTellen: function gridColTellen(grid) {
      var col = 0;
      for (var g in grid) {
        col += grid[g];
      }
      ;
      return col;
    },
    gridBreedteTellen: function gridBreedteTellen(gridTotaal, colomnBreedte) {
      var gridBreedte = gridTotaal * colomnBreedte + "px";
      return gridBreedte;
    },
    syncScroll: function syncScroll() {
      this.$refs.scroll2.scrollLeft = this.$refs.scroll1.scrollLeft;
    }
  },
  mounted: function mounted() {
    this.$refs.scroll1.addEventListener("scroll", this.syncScroll);
    if (_typeof(this.get.pagina) !== undefined && !isNaN(this.get.pagina) && this.get.pagina % 1 === 0) {
      this.pagina = this.get.pagina;
    }
    this.naam = this.get.naam;
    this.email = this.get.email;
    this.geboortedatum = this.get.geboortedatum;
    this.soort_lid = this.get.soort_lid;
    this.familie = this.get.familie;
    this.adres = this.get.adres;
    this.straat = this.get.straat;
    this.stad = this.get.stad;
    this.land = this.get.land;
    this.leden(this.pagina, this.get.naam, this.get.email, this.get.geboortedatum, this.get.soort_lid, this.get.familie, this.get.adres, this.get.straat, this.get.stad, this.get.land);
  },
  components: {
    IonGrid: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonGrid,
    IonRow: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonRow,
    IonCol: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonCol,
    IonInput: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonInput,
    IonItem: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonItem,
    IonContent: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonContent,
    IonButton: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonButton
  },
  props: {
    "get": Array
  }
};

var __injectCSSVars__ = function __injectCSSVars__() {
  (0,vue__WEBPACK_IMPORTED_MODULE_2__.useCssVars)(function (_ctx) {
    return {
      "f1cdf38a-gridBreedte": _ctx.gridBreedte,
      "f1cdf38a-gridTotaal": _ctx.gridTotaal
    };
  });
};
var __setup__ = __default__.setup;
__default__.setup = __setup__ ? function (props, ctx) {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f1cdf38a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "d-flex justify-content-center"
  }, "Leden", -1 /* HOISTED */);
});
var _hoisted_2 = {
  "class": "m-2"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, " Zoeken ", -1 /* HOISTED */);
});
var _hoisted_4 = {
  "class": "w-100"
};
var _hoisted_5 = {
  ref: "scroll1",
  "class": "sticky-top overflow-x-scroll"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" naam ");
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" email ");
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" geboortedatum ");
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" soort lid ");
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" familie ");
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" adres ");
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" aanpassen ");
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" deleten ");
var _hoisted_14 = {
  ref: "scroll2",
  "class": "overflow-x-hidden"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" aanpassen ");
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" deleten ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_ion_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-input");
  var _component_ion_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-item");
  var _component_ion_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-button");
  var _component_ion_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-col");
  var _component_ion_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-row");
  var _component_ion_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-grid");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "naam",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "email",
        type: "email",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "geboortedatum",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "soort lid",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "familie",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "adres",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "straat",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "stad",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_item, {
    "class": "d-inline-block"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_input, {
        "class": "d-inline-block",
        label: "land",
        "label-placement": "floating"
      })];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_button)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_grid, {
    "class": "grid-gap leden-grid"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_row, {
        "class": "bg-secondary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.naam
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_6];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.email
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_7];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.geboortedatum
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_8];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.soort_lid
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_9];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.familie
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_10];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.adres
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_11];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.aanpassen
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_12];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
            size: _this.grid.deleten
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_13];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["size"])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  })], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_grid, {
    "class": "grid-gap leden-grid"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.items, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_row, {
          "class": "bg-muted"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.naam
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.naam), 1 /* TEXT */)];
              }),

              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.email
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1 /* TEXT */)];
              }),

              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.geboortedatum
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.geboortedatum), 1 /* TEXT */)];
              }),

              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.soort_lid
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.soort_lid), 1 /* TEXT */)];
              }),

              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.familie
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.familie), 1 /* TEXT */)];
              }),

              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.adres
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.straat) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.adres) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.stad) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.land), 1 /* TEXT */)];
              }),

              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.aanpassen
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [_hoisted_15];
              }),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["size"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_col, {
              size: _this.grid.deleten
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [_hoisted_16];
              }),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["size"])];
          }),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */);
      }), 256 /* UNKEYED_FRAGMENT */))];
    }),

    _: 1 /* STABLE */
  })], 512 /* NEED_PATCH */)])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.leden-grid[data-v-f1cdf38a]{\r\n        min-width: var(--f1cdf38a-gridBreedte);\r\n        --ion-grid-columns: var(--f1cdf38a-gridTotaal);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_style_index_0_id_f1cdf38a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_style_index_0_id_f1cdf38a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_style_index_0_id_f1cdf38a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Leden_vue_vue_type_template_id_f1cdf38a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leden.vue?vue&type=template&id=f1cdf38a&scoped=true */ "./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a&scoped=true");
/* harmony import */ var _Leden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leden.vue?vue&type=script&lang=js */ "./resources/js/pages/Leden.vue?vue&type=script&lang=js");
/* harmony import */ var _Leden_vue_vue_type_style_index_0_id_f1cdf38a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css */ "./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Leden_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Leden_vue_vue_type_template_id_f1cdf38a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f1cdf38a"],['__file',"resources/js/pages/Leden.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a&scoped=true":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a&scoped=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_template_id_f1cdf38a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_template_id_f1cdf38a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Leden.vue?vue&type=template&id=f1cdf38a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=template&id=f1cdf38a&scoped=true");


/***/ }),

/***/ "./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Leden_vue_vue_type_style_index_0_id_f1cdf38a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Leden.vue?vue&type=style&index=0&id=f1cdf38a&scoped=true&lang=css");


/***/ })

}]);