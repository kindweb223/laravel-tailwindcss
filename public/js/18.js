(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ \"./resources/js/Shared/Layout.vue\");\n/* harmony import */ var _Shared_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Card */ \"./resources/js/Shared/Card.vue\");\n/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ \"./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      currentDate: this.date,\n      sending: false\n    };\n  },\n  layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  computed: {\n    formattedDate: function formattedDate() {\n      return this.moment(this.currentDate).format(\"MMMM YYYY\");\n    },\n    formattedDateSlug: function formattedDateSlug() {\n      return this.moment(this.currentDate).format(\"YYYY-MM\");\n    }\n  },\n  metaInfo: function metaInfo() {\n    return {\n      title: \"Image Sales \" + this.formattedDate\n    };\n  },\n  components: {\n    Card: _Shared_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: {\n    downloads: Array,\n    date: String\n  },\n  methods: {\n    salesForDate: function salesForDate() {\n      var _this = this;\n\n      this.sending = true;\n      this.$inertia.visit(this.route(\"downloads.show\", {\n        date: this.formattedDateSlug\n      })).then(function () {\n        _this.sending = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL1BhZ2VzL0Rvd25sb2Fkcy9JbmRleC52dWU/OGY4NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTtBQU9BLGdFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBO0FBQ0E7QUFDQTtBQU5BLEdBUkE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQSxHQWxCQTtBQW1CQTtBQUNBLDhEQURBO0FBRUE7QUFGQSxHQW5CQTtBQXVCQTtBQUNBLG9CQURBO0FBRUE7QUFGQSxHQXZCQTtBQTJCQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQSxvQkFDQSxLQURBLENBRUE7QUFDQTtBQURBLFFBRkEsRUFNQSxJQU5BLENBTUE7QUFDQTtBQUNBLE9BUkE7QUFTQTtBQVpBO0FBM0JBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9QYWdlcy9Eb3dubG9hZHMvSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICA8Y2FyZCB0aXRsZT1cIlNlbGVjdCBSZXBvcnRpbmcgUGVyaW9kXCIgY2xhc3M9XCJ3LWZ1bGwgbWQ6dy0xLzMgbGc6dy0xLzRcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgbWluaW11bS12aWV3PVwibW9udGhcIlxuICAgICAgICAgICAgICAgIG1heGltdW0tdmlldz1cIm1vbnRoXCJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJNTU1NIHl5eXlcIlxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjdXJyZW50RGF0ZVwiXG4gICAgICAgICAgICAgICAgQGlucHV0PVwic2FsZXNGb3JEYXRlKClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgICA8Y2FyZFxuICAgICAgICAgICAgOnRpdGxlPVwiJ0ltYWdlIFNhbGVzICcgKyBmb3JtYXR0ZWREYXRlXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG1kOnctMi8zIGxnOnctMy80XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0YWJsZSB3LWZ1bGwgdGFibGUtZml4ZWQgdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZG93bmxvYWRzLml0ZW1zLmxlbmd0aCB8fCBkb3dubG9hZHMucHJvbW8gPiAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbWFnZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHVyY2hhc2UgRGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+WW91ciBFYXJuaW5ncyAoJCk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItdCBib3JkZXItYmx1ZS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImRvd25sb2Fkcy5wcm9tbyA+IDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0yXCI+UHJvbW90aW9uPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTJcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktMlwiPiQge3sgZG93bmxvYWRzLnByb21vIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImRvd25sb2FkIGluIGRvd25sb2Fkcy5pdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZG93bmxvYWQuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItdCBib3JkZXItYmx1ZS0zMDAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEvM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJkb3dubG9hZC5pbWFnZV91cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiZG93bmxvYWQuaW1hZ2VfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktMlwiPnt7IGRvd25sb2FkLnB1cmNoYXNlZF9hdCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7eyBkb3dubG9hZC5hbW91bnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZG93bmxvYWQuYW1vdW50IDwgMC4wMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC14cyBwLTEgbGVhZGluZy1ub25lIGJvcmRlciBib3JkZXItYmx1ZS01MDAgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlBST01PPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwicHktMTZcIj5cbiAgICAgICAgICAgICAgICA8aDI+WW91IGhhdmUgbm8gZG93bmxvYWRzLjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvU2hhcmVkL0xheW91dFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkAvU2hhcmVkL0NhcmRcIjtcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gXCJ2dWVqcy1kYXRlcGlja2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnREYXRlOiB0aGlzLmRhdGUsXG4gICAgICAgICAgICBzZW5kaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbGF5b3V0OiBMYXlvdXQsXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZm9ybWF0dGVkRGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnQodGhpcy5jdXJyZW50RGF0ZSkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXR0ZWREYXRlU2x1ZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnQodGhpcy5jdXJyZW50RGF0ZSkuZm9ybWF0KFwiWVlZWS1NTVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0YUluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geyB0aXRsZTogXCJJbWFnZSBTYWxlcyBcIiArIHRoaXMuZm9ybWF0dGVkRGF0ZSB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBDYXJkLFxuICAgICAgICBEYXRlcGlja2VyXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBkb3dubG9hZHM6IEFycmF5LFxuICAgICAgICBkYXRlOiBTdHJpbmdcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2FsZXNGb3JEYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRpbmVydGlhXG4gICAgICAgICAgICAgICAgLnZpc2l0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlKFwiZG93bmxvYWRzLnNob3dcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGhpcy5mb3JtYXR0ZWREYXRlU2x1Z1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"flex items-start\" },\n    [\n      _c(\n        \"card\",\n        {\n          staticClass: \"w-full md:w-1/3 lg:w-1/4\",\n          attrs: { title: \"Select Reporting Period\" }\n        },\n        [\n          _c(\"datepicker\", {\n            attrs: {\n              \"minimum-view\": \"month\",\n              \"maximum-view\": \"month\",\n              format: \"MMMM yyyy\",\n              inline: \"\"\n            },\n            on: {\n              input: function($event) {\n                return _vm.salesForDate()\n              }\n            },\n            model: {\n              value: _vm.currentDate,\n              callback: function($$v) {\n                _vm.currentDate = $$v\n              },\n              expression: \"currentDate\"\n            }\n          })\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"card\",\n        {\n          staticClass: \"w-full md:w-2/3 lg:w-3/4\",\n          attrs: { title: \"Image Sales \" + _vm.formattedDate }\n        },\n        [\n          _vm.downloads.items.length || _vm.downloads.promo > 0\n            ? _c(\n                \"table\",\n                { staticClass: \"table w-full table-fixed text-left\" },\n                [\n                  _c(\"thead\", [\n                    _c(\"tr\", [\n                      _c(\"th\", [_vm._v(\"Image\")]),\n                      _vm._v(\" \"),\n                      _c(\"th\", [_vm._v(\"Purchase Date\")]),\n                      _vm._v(\" \"),\n                      _c(\"th\", [_vm._v(\"Your Earnings ($)\")])\n                    ])\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"tbody\",\n                    [\n                      _vm.downloads.promo > 0\n                        ? _c(\n                            \"tr\",\n                            { staticClass: \"border-t border-blue-300\" },\n                            [\n                              _c(\"td\", { staticClass: \"py-2\" }, [\n                                _vm._v(\"Promotion\")\n                              ]),\n                              _vm._v(\" \"),\n                              _c(\"td\", { staticClass: \"py-2\" }),\n                              _vm._v(\" \"),\n                              _c(\"td\", { staticClass: \"py-2\" }, [\n                                _vm._v(\"$ \" + _vm._s(_vm.downloads.promo))\n                              ])\n                            ]\n                          )\n                        : _vm._e(),\n                      _vm._v(\" \"),\n                      _vm._l(_vm.downloads.items, function(download) {\n                        return _c(\n                          \"tr\",\n                          {\n                            key: download.id,\n                            staticClass: \"border-t border-blue-300 \"\n                          },\n                          [\n                            _c(\"td\", { staticClass: \"py-2\" }, [\n                              _c(\"img\", {\n                                staticClass: \"w-1/3\",\n                                attrs: {\n                                  src: download.image_url,\n                                  alt: download.image_id\n                                }\n                              })\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"td\", { staticClass: \"py-2\" }, [\n                              _vm._v(_vm._s(download.purchased_at))\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"td\", { staticClass: \"py-2\" }, [\n                              _vm._v(\n                                \"\\n                        $ \" +\n                                  _vm._s(download.amount) +\n                                  \"\\n                        \"\n                              ),\n                              download.amount < 0.02\n                                ? _c(\n                                    \"span\",\n                                    {\n                                      staticClass:\n                                        \"text-xs p-1 leading-none border border-blue-500 bg-blue-500 text-white rounded\"\n                                    },\n                                    [_vm._v(\"PROMO\")]\n                                  )\n                                : _vm._e()\n                            ])\n                          ]\n                        )\n                      })\n                    ],\n                    2\n                  )\n                ]\n              )\n            : _c(\"div\", { staticClass: \"py-16\" }, [\n                _c(\"h2\", [_vm._v(\"You have no downloads.\")])\n              ])\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRG93bmxvYWRzL0luZGV4LnZ1ZT9mNDEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0NBQWtDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0RBQW9EO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMENBQTBDO0FBQ3ZFO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0JBQXNCO0FBQzlEO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9QYWdlcy9Eb3dubG9hZHMvSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1MWJjY2Y1Ji5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtc3RhcnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbCBtZDp3LTEvMyBsZzp3LTEvNFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIlNlbGVjdCBSZXBvcnRpbmcgUGVyaW9kXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibWluaW11bS12aWV3XCI6IFwibW9udGhcIixcbiAgICAgICAgICAgICAgXCJtYXhpbXVtLXZpZXdcIjogXCJtb250aFwiLFxuICAgICAgICAgICAgICBmb3JtYXQ6IFwiTU1NTSB5eXl5XCIsXG4gICAgICAgICAgICAgIGlubGluZTogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhbGVzRm9yRGF0ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnREYXRlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREYXRlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudERhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1kOnctMi8zIGxnOnctMy80XCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiSW1hZ2UgU2FsZXMgXCIgKyBfdm0uZm9ybWF0dGVkRGF0ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uZG93bmxvYWRzLml0ZW1zLmxlbmd0aCB8fCBfdm0uZG93bmxvYWRzLnByb21vID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB3LWZ1bGwgdGFibGUtZml4ZWQgdGV4dC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiSW1hZ2VcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlB1cmNoYXNlIERhdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIllvdXIgRWFybmluZ3MgKCQpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZG93bmxvYWRzLnByb21vID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3JkZXItdCBib3JkZXItYmx1ZS0zMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJweS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9tb3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJweS0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiQgXCIgKyBfdm0uX3MoX3ZtLmRvd25sb2Fkcy5wcm9tbykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZG93bmxvYWRzLml0ZW1zLCBmdW5jdGlvbihkb3dubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGRvd25sb2FkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvcmRlci10IGJvcmRlci1ibHVlLTMwMCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMS8zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBkb3dubG9hZC5pbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBkb3dubG9hZC5pbWFnZV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGRvd25sb2FkLnB1cmNoYXNlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZG93bmxvYWQuYW1vdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkLmFtb3VudCA8IDAuMDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMgcC0xIGxlYWRpbmctbm9uZSBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlBST01PXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiWW91IGhhdmUgbm8gZG93bmxvYWRzLlwiKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5&\n");

/***/ }),

/***/ "./resources/js/Pages/Downloads/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Downloads/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Index_vue_vue_type_template_id_651bccf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=651bccf5& */ \"./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5&\");\n/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ \"./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Index_vue_vue_type_template_id_651bccf5___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Index_vue_vue_type_template_id_651bccf5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/Pages/Downloads/Index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRG93bmxvYWRzL0luZGV4LnZ1ZT8zOGY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0Rvd25sb2Fkcy9JbmRleC52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTFiY2NmNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2Vta2VpL1Byb2plY3RzL0N1cnJlbnQveWF5L2NvbnRyaWJ1dG9ycy55YXlpbWFnZXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjUxYmNjZjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjUxYmNjZjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjUxYmNjZjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTFiY2NmNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NTFiY2NmNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL1BhZ2VzL0Rvd25sb2Fkcy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Downloads/Index.vue\n");

/***/ }),

/***/ "./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRG93bmxvYWRzL0luZGV4LnZ1ZT8yNTg3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9Eb3dubG9hZHMvSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/Downloads/Index.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_651bccf5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=651bccf5& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_651bccf5___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_651bccf5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRG93bmxvYWRzL0luZGV4LnZ1ZT9lODJiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9Eb3dubG9hZHMvSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1MWJjY2Y1Ji5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjUxYmNjZjUmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Downloads/Index.vue?vue&type=template&id=651bccf5&\n");

/***/ })

}]);