module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Common/CodeEditor/CodeEditor.js":
/*!****************************************************!*\
  !*** ./components/Common/CodeEditor/CodeEditor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _uikit_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../uikit/Select */ "./components/uikit/Select.js");
/* harmony import */ var _CodeEditorStyle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CodeEditorStyle */ "./components/Common/CodeEditor/CodeEditorStyle.js");















var CodeMirror;
var modes = ['apl', 'asciiarmor', 'asn.1', 'asterisk', 'brainfuck', 'clike', 'clojure', 'cmake', 'cobol', 'coffeescript', 'commonlisp', 'crystal', 'css', 'cypher', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dtd', 'dylan', 'ebnf', 'ecl', 'eiffel', 'elm', 'erlang', 'factor', 'fcl', 'forth', 'fortran', 'gas', 'gfm', 'gherkin', 'go', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell-literate', 'haxe', 'htmlembedded', 'htmlmixed', 'http', 'idl', 'javascript', 'jinja2', 'jsx', 'julia', 'livescript', 'lua', 'markdown', 'mathematica', 'mbox', 'mirc', 'mllike', 'modelica', 'mscgen', 'mumps', 'nginx', 'nsis', 'ntriples', 'octave', 'oz', 'pascal', 'pegjs', 'perl', 'php', 'pig', 'powershell', 'properties', 'protobuf', 'pug', 'puppet', 'python', 'q', 'r', 'rpm', 'rst', 'ruby', 'rust', 'sas', 'sass', 'scheme', 'shell', 'sieve', 'slim', 'smalltalk', 'smarty', 'solr', 'soy', 'sparql', 'spreadsheet', 'sql', 'stex', 'stylus', 'swift', 'tcl', 'textile', 'tiddlywiki', 'tiki', 'toml', 'tornado', 'troff', 'ttcn', 'ttcn-cfg', 'turtle', 'twig', 'vb', 'vbscript', 'velocity', 'verilog', 'vhdl', 'vue', 'webidl', 'xml', 'xquery', 'yacas', 'yaml', 'yaml-frontmatter', 'z80'];

var CodeEditor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(CodeEditor, _Component);

  function CodeEditor() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CodeEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(CodeEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      render: false,
      selectedMode: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "componentDidMount", function () {
      CodeMirror = __webpack_require__(/*! react-codemirror2 */ "react-codemirror2");

      __webpack_require__(/*! codemirror/mode/apl/apl */ "codemirror/mode/apl/apl");

      __webpack_require__(/*! codemirror/mode/asciiarmor/asciiarmor */ "codemirror/mode/asciiarmor/asciiarmor");

      __webpack_require__(/*! codemirror/mode/asn.1/asn.1 */ "codemirror/mode/asn.1/asn.1");

      __webpack_require__(/*! codemirror/mode/asterisk/asterisk */ "codemirror/mode/asterisk/asterisk");

      __webpack_require__(/*! codemirror/mode/brainfuck/brainfuck */ "codemirror/mode/brainfuck/brainfuck");

      __webpack_require__(/*! codemirror/mode/clike/clike */ "codemirror/mode/clike/clike");

      __webpack_require__(/*! codemirror/mode/clojure/clojure */ "codemirror/mode/clojure/clojure");

      __webpack_require__(/*! codemirror/mode/cmake/cmake */ "codemirror/mode/cmake/cmake");

      __webpack_require__(/*! codemirror/mode/cobol/cobol */ "codemirror/mode/cobol/cobol");

      __webpack_require__(/*! codemirror/mode/coffeescript/coffeescript */ "codemirror/mode/coffeescript/coffeescript");

      __webpack_require__(/*! codemirror/mode/commonlisp/commonlisp */ "codemirror/mode/commonlisp/commonlisp");

      __webpack_require__(/*! codemirror/mode/crystal/crystal */ "codemirror/mode/crystal/crystal");

      __webpack_require__(/*! codemirror/mode/css/css */ "codemirror/mode/css/css");

      __webpack_require__(/*! codemirror/mode/cypher/cypher */ "codemirror/mode/cypher/cypher");

      __webpack_require__(/*! codemirror/mode/d/d */ "codemirror/mode/d/d");

      __webpack_require__(/*! codemirror/mode/dart/dart */ "codemirror/mode/dart/dart");

      __webpack_require__(/*! codemirror/mode/diff/diff */ "codemirror/mode/diff/diff");

      __webpack_require__(/*! codemirror/mode/django/django */ "codemirror/mode/django/django");

      __webpack_require__(/*! codemirror/mode/dockerfile/dockerfile */ "codemirror/mode/dockerfile/dockerfile");

      __webpack_require__(/*! codemirror/mode/dtd/dtd */ "codemirror/mode/dtd/dtd");

      __webpack_require__(/*! codemirror/mode/dylan/dylan */ "codemirror/mode/dylan/dylan");

      __webpack_require__(/*! codemirror/mode/ebnf/ebnf */ "codemirror/mode/ebnf/ebnf");

      __webpack_require__(/*! codemirror/mode/ecl/ecl */ "codemirror/mode/ecl/ecl");

      __webpack_require__(/*! codemirror/mode/eiffel/eiffel */ "codemirror/mode/eiffel/eiffel");

      __webpack_require__(/*! codemirror/mode/elm/elm */ "codemirror/mode/elm/elm");

      __webpack_require__(/*! codemirror/mode/erlang/erlang */ "codemirror/mode/erlang/erlang");

      __webpack_require__(/*! codemirror/mode/factor/factor */ "codemirror/mode/factor/factor");

      __webpack_require__(/*! codemirror/mode/fcl/fcl */ "codemirror/mode/fcl/fcl");

      __webpack_require__(/*! codemirror/mode/forth/forth */ "codemirror/mode/forth/forth");

      __webpack_require__(/*! codemirror/mode/fortran/fortran */ "codemirror/mode/fortran/fortran");

      __webpack_require__(/*! codemirror/mode/gas/gas */ "codemirror/mode/gas/gas");

      __webpack_require__(/*! codemirror/mode/gfm/gfm */ "codemirror/mode/gfm/gfm");

      __webpack_require__(/*! codemirror/mode/gherkin/gherkin */ "codemirror/mode/gherkin/gherkin");

      __webpack_require__(/*! codemirror/mode/go/go */ "codemirror/mode/go/go");

      __webpack_require__(/*! codemirror/mode/groovy/groovy */ "codemirror/mode/groovy/groovy");

      __webpack_require__(/*! codemirror/mode/haml/haml */ "codemirror/mode/haml/haml");

      __webpack_require__(/*! codemirror/mode/handlebars/handlebars */ "codemirror/mode/handlebars/handlebars");

      __webpack_require__(/*! codemirror/mode/haskell/haskell */ "codemirror/mode/haskell/haskell");

      __webpack_require__(/*! codemirror/mode/haskell-literate/haskell-literate */ "codemirror/mode/haskell-literate/haskell-literate");

      __webpack_require__(/*! codemirror/mode/haxe/haxe */ "codemirror/mode/haxe/haxe");

      __webpack_require__(/*! codemirror/mode/htmlembedded/htmlembedded */ "codemirror/mode/htmlembedded/htmlembedded");

      __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed */ "codemirror/mode/htmlmixed/htmlmixed");

      __webpack_require__(/*! codemirror/mode/http/http */ "codemirror/mode/http/http");

      __webpack_require__(/*! codemirror/mode/idl/idl */ "codemirror/mode/idl/idl");

      __webpack_require__(/*! codemirror/mode/javascript/javascript */ "codemirror/mode/javascript/javascript");

      __webpack_require__(/*! codemirror/mode/jinja2/jinja2 */ "codemirror/mode/jinja2/jinja2");

      __webpack_require__(/*! codemirror/mode/jsx/jsx */ "codemirror/mode/jsx/jsx");

      __webpack_require__(/*! codemirror/mode/julia/julia */ "codemirror/mode/julia/julia");

      __webpack_require__(/*! codemirror/mode/livescript/livescript */ "codemirror/mode/livescript/livescript");

      __webpack_require__(/*! codemirror/mode/lua/lua */ "codemirror/mode/lua/lua");

      __webpack_require__(/*! codemirror/mode/markdown/markdown */ "codemirror/mode/markdown/markdown");

      __webpack_require__(/*! codemirror/mode/mathematica/mathematica */ "codemirror/mode/mathematica/mathematica");

      __webpack_require__(/*! codemirror/mode/mbox/mbox */ "codemirror/mode/mbox/mbox");

      __webpack_require__(/*! codemirror/mode/mirc/mirc */ "codemirror/mode/mirc/mirc");

      __webpack_require__(/*! codemirror/mode/mllike/mllike */ "codemirror/mode/mllike/mllike");

      __webpack_require__(/*! codemirror/mode/modelica/modelica */ "codemirror/mode/modelica/modelica");

      __webpack_require__(/*! codemirror/mode/mscgen/mscgen */ "codemirror/mode/mscgen/mscgen");

      __webpack_require__(/*! codemirror/mode/mumps/mumps */ "codemirror/mode/mumps/mumps");

      __webpack_require__(/*! codemirror/mode/nginx/nginx */ "codemirror/mode/nginx/nginx");

      __webpack_require__(/*! codemirror/mode/nsis/nsis */ "codemirror/mode/nsis/nsis");

      __webpack_require__(/*! codemirror/mode/ntriples/ntriples */ "codemirror/mode/ntriples/ntriples");

      __webpack_require__(/*! codemirror/mode/octave/octave */ "codemirror/mode/octave/octave");

      __webpack_require__(/*! codemirror/mode/oz/oz */ "codemirror/mode/oz/oz");

      __webpack_require__(/*! codemirror/mode/pascal/pascal */ "codemirror/mode/pascal/pascal");

      __webpack_require__(/*! codemirror/mode/pegjs/pegjs */ "codemirror/mode/pegjs/pegjs");

      __webpack_require__(/*! codemirror/mode/perl/perl */ "codemirror/mode/perl/perl");

      __webpack_require__(/*! codemirror/mode/php/php */ "codemirror/mode/php/php");

      __webpack_require__(/*! codemirror/mode/pig/pig */ "codemirror/mode/pig/pig");

      __webpack_require__(/*! codemirror/mode/powershell/powershell */ "codemirror/mode/powershell/powershell");

      __webpack_require__(/*! codemirror/mode/properties/properties */ "codemirror/mode/properties/properties");

      __webpack_require__(/*! codemirror/mode/protobuf/protobuf */ "codemirror/mode/protobuf/protobuf");

      __webpack_require__(/*! codemirror/mode/pug/pug */ "codemirror/mode/pug/pug");

      __webpack_require__(/*! codemirror/mode/puppet/puppet */ "codemirror/mode/puppet/puppet");

      __webpack_require__(/*! codemirror/mode/python/python */ "codemirror/mode/python/python");

      __webpack_require__(/*! codemirror/mode/q/q */ "codemirror/mode/q/q");

      __webpack_require__(/*! codemirror/mode/r/r */ "codemirror/mode/r/r");

      __webpack_require__(/*! codemirror/mode/rpm/rpm */ "codemirror/mode/rpm/rpm");

      __webpack_require__(/*! codemirror/mode/rst/rst */ "codemirror/mode/rst/rst");

      __webpack_require__(/*! codemirror/mode/ruby/ruby */ "codemirror/mode/ruby/ruby");

      __webpack_require__(/*! codemirror/mode/rust/rust */ "codemirror/mode/rust/rust");

      __webpack_require__(/*! codemirror/mode/sas/sas */ "codemirror/mode/sas/sas");

      __webpack_require__(/*! codemirror/mode/sass/sass */ "codemirror/mode/sass/sass");

      __webpack_require__(/*! codemirror/mode/scheme/scheme */ "codemirror/mode/scheme/scheme");

      __webpack_require__(/*! codemirror/mode/shell/shell */ "codemirror/mode/shell/shell");

      __webpack_require__(/*! codemirror/mode/sieve/sieve */ "codemirror/mode/sieve/sieve");

      __webpack_require__(/*! codemirror/mode/slim/slim */ "codemirror/mode/slim/slim");

      __webpack_require__(/*! codemirror/mode/smalltalk/smalltalk */ "codemirror/mode/smalltalk/smalltalk");

      __webpack_require__(/*! codemirror/mode/smarty/smarty */ "codemirror/mode/smarty/smarty");

      __webpack_require__(/*! codemirror/mode/solr/solr */ "codemirror/mode/solr/solr");

      __webpack_require__(/*! codemirror/mode/soy/soy */ "codemirror/mode/soy/soy");

      __webpack_require__(/*! codemirror/mode/sparql/sparql */ "codemirror/mode/sparql/sparql");

      __webpack_require__(/*! codemirror/mode/spreadsheet/spreadsheet */ "codemirror/mode/spreadsheet/spreadsheet");

      __webpack_require__(/*! codemirror/mode/sql/sql */ "codemirror/mode/sql/sql");

      __webpack_require__(/*! codemirror/mode/stex/stex */ "codemirror/mode/stex/stex");

      __webpack_require__(/*! codemirror/mode/stylus/stylus */ "codemirror/mode/stylus/stylus");

      __webpack_require__(/*! codemirror/mode/swift/swift */ "codemirror/mode/swift/swift");

      __webpack_require__(/*! codemirror/mode/tcl/tcl */ "codemirror/mode/tcl/tcl");

      __webpack_require__(/*! codemirror/mode/textile/textile */ "codemirror/mode/textile/textile");

      __webpack_require__(/*! codemirror/mode/tiddlywiki/tiddlywiki */ "codemirror/mode/tiddlywiki/tiddlywiki");

      __webpack_require__(/*! codemirror/mode/tiki/tiki */ "codemirror/mode/tiki/tiki");

      __webpack_require__(/*! codemirror/mode/toml/toml */ "codemirror/mode/toml/toml");

      __webpack_require__(/*! codemirror/mode/tornado/tornado */ "codemirror/mode/tornado/tornado");

      __webpack_require__(/*! codemirror/mode/troff/troff */ "codemirror/mode/troff/troff");

      __webpack_require__(/*! codemirror/mode/ttcn/ttcn */ "codemirror/mode/ttcn/ttcn");

      __webpack_require__(/*! codemirror/mode/ttcn-cfg/ttcn-cfg */ "codemirror/mode/ttcn-cfg/ttcn-cfg");

      __webpack_require__(/*! codemirror/mode/turtle/turtle */ "codemirror/mode/turtle/turtle");

      __webpack_require__(/*! codemirror/mode/twig/twig */ "codemirror/mode/twig/twig");

      __webpack_require__(/*! codemirror/mode/vb/vb */ "codemirror/mode/vb/vb");

      __webpack_require__(/*! codemirror/mode/vbscript/vbscript */ "codemirror/mode/vbscript/vbscript");

      __webpack_require__(/*! codemirror/mode/velocity/velocity */ "codemirror/mode/velocity/velocity");

      __webpack_require__(/*! codemirror/mode/verilog/verilog */ "codemirror/mode/verilog/verilog");

      __webpack_require__(/*! codemirror/mode/vhdl/vhdl */ "codemirror/mode/vhdl/vhdl");

      __webpack_require__(/*! codemirror/mode/vue/vue */ "codemirror/mode/vue/vue");

      __webpack_require__(/*! codemirror/mode/webidl/webidl */ "codemirror/mode/webidl/webidl");

      __webpack_require__(/*! codemirror/mode/xml/xml */ "codemirror/mode/xml/xml");

      __webpack_require__(/*! codemirror/mode/xquery/xquery */ "codemirror/mode/xquery/xquery");

      __webpack_require__(/*! codemirror/mode/yacas/yacas */ "codemirror/mode/yacas/yacas");

      __webpack_require__(/*! codemirror/mode/yaml/yaml */ "codemirror/mode/yaml/yaml");

      __webpack_require__(/*! codemirror/mode/yaml-frontmatter/yaml-frontmatter */ "codemirror/mode/yaml-frontmatter/yaml-frontmatter");

      __webpack_require__(/*! codemirror/mode/z80/z80 */ "codemirror/mode/z80/z80");

      __webpack_require__(/*! codemirror/theme/darcula.css */ "./node_modules/codemirror/theme/darcula.css");

      __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");

      var language = _this.props.language;

      _this.setState({
        render: true,
        selectedMode: language
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "languageChangeHandler", function (language) {
      var onLanguageChange = _this.props.onLanguageChange;

      _this.setState({
        selectedMode: language
      });

      if (onLanguageChange) onLanguageChange(language);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "codeChangeHandler", function (editor, data, value) {
      var onChange = _this.props.onChange;
      if (onChange) onChange(value);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CodeEditor, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          render = _this$state.render,
          selectedMode = _this$state.selectedMode;
      var _this$props = this.props,
          code = _this$props.code,
          readonly = _this$props.readonly,
          error = _this$props.error;
      var Option = _uikit_Select__WEBPACK_IMPORTED_MODULE_13__["default"].Option;
      if (!render) return null;
      var _CodeMirror = CodeMirror,
          UnControlled = _CodeMirror.UnControlled;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        justify: "space-between",
        style: {
          marginBottom: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 6,
        xs: 24
      }, !readonly && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_uikit_Select__WEBPACK_IMPORTED_MODULE_13__["default"], {
        showSearch: true,
        optionFilterProp: "children",
        onChange: this.languageChangeHandler,
        value: selectedMode,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, modes.map(function (mod) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, {
          key: mod,
          value: mod
        }, mod);
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_CodeEditorStyle__WEBPACK_IMPORTED_MODULE_14__["EditorContainer"], {
        error: !!error
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(UnControlled, {
        value: code,
        options: {
          readOnly: readonly ? 'nocursor' : false,
          mode: selectedMode,
          theme: 'darcula',
          lineNumbers: true
        },
        onChange: this.codeChangeHandler
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_CodeEditorStyle__WEBPACK_IMPORTED_MODULE_14__["ErrorMessage"], null, error));
    }
  }]);

  return CodeEditor;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

CodeEditor.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  onLanguageChange: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  code: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  language: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  readonly: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
};
CodeEditor.defaultProps = {
  onChange: null,
  onLanguageChange: null,
  code: '// Your code goes here...',
  language: 'javascript',
  readonly: false,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (CodeEditor);

/***/ }),

/***/ "./components/Common/CodeEditor/CodeEditorStyle.js":
/*!*********************************************************!*\
  !*** ./components/Common/CodeEditor/CodeEditorStyle.js ***!
  \*********************************************************/
/*! exports provided: EditorContainer, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorContainer", function() { return EditorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var EditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CodeEditorStyle__EditorContainer",
  componentId: "sc-1y6rp8r-0"
})(["height:100%;.react-codemirror2{height:100%;}.CodeMirror{", " height:100%;border-radius:3px;}"], function (_ref) {
  var error = _ref.error;
  return error && 'border: 1px solid #f5222d;';
});
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "CodeEditorStyle__ErrorMessage",
  componentId: "sc-1y6rp8r-1"
})(["color:#f5222d;"]);

/***/ }),

/***/ "./components/Common/Layout/Header/Header.js":
/*!***************************************************!*\
  !*** ./components/Common/Layout/Header/Header.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar/style */ "antd/lib/avatar/style");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/dropdown/style */ "antd/lib/dropdown/style");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/badge/style */ "antd/lib/badge/style");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/badge */ "antd/lib/badge");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../utils/auth0 */ "./utils/auth0.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./HeaderStyles */ "./components/Common/Layout/Header/HeaderStyles.js");
/* harmony import */ var _UserMenu_UserMenu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./UserMenu/UserMenu */ "./components/Common/Layout/Header/UserMenu/UserMenu.js");
/* harmony import */ var _Notifications_Notifications__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Notifications/Notifications */ "./components/Common/Layout/Header/Notifications/Notifications.js");





























var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_17__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_14__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_15__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_18__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_16__["default"])(_this), "state", {
      notificationsReaded: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_18__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_16__["default"])(_this), "loginHandler", function () {
      Object(_utils_auth0__WEBPACK_IMPORTED_MODULE_24__["login"])();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_18__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_16__["default"])(_this), "logoutHandler", function () {
      Object(_utils_auth0__WEBPACK_IMPORTED_MODULE_24__["logout"])();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_18__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_16__["default"])(_this), "readNotifications",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee() {
      var user, notificationsReaded;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = _this.props.user;
              notificationsReaded = _this.state.notificationsReaded;

              _this.setState({
                notificationsReaded: true
              });

              if (!(!notificationsReaded && user.unreadNotifications)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_23__["default"])().put('/users/notifications');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.user;
      var notificationsReaded = this.state.notificationsReaded;
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_HeaderStyles__WEBPACK_IMPORTED_MODULE_25__["HeaderContainer"], null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 22,
          offset: 1
        },
        md: {
          span: 20,
          offset: 2
        },
        lg: {
          span: 16,
          offset: 4
        },
        xl: {
          span: 16,
          offset: 4
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        justify: "space-between"
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        xs: 24,
        sm: 24,
        md: 4,
        lg: 4,
        xl: 4
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_HeaderStyles__WEBPACK_IMPORTED_MODULE_25__["Logo"], {
        src: "/static/img/logo.png",
        alt: "codereforge logo"
      })))), user ? react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_HeaderStyles__WEBPACK_IMPORTED_MODULE_25__["UserBar"], {
        xs: 24,
        sm: 24,
        md: 4,
        lg: 4,
        xl: 4
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        overlay: function overlay() {
          return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_27__["default"], {
            notifications: user.notifications
          });
        },
        overlayClassName: "notifications",
        onVisibleChange: this.readNotifications,
        trigger: ['click'],
        placement: "bottomRight"
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_HeaderStyles__WEBPACK_IMPORTED_MODULE_25__["NotificationsIcon"], null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
        offset: [0, 18],
        dot: !notificationsReaded && user.unreadNotifications
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: "bell"
      })))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        overlay: function overlay() {
          return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_UserMenu_UserMenu__WEBPACK_IMPORTED_MODULE_26__["default"], {
            onLogout: _this2.logoutHandler
          });
        },
        overlayClassName: "user-menu",
        trigger: ['click'],
        placement: "bottomRight"
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_HeaderStyles__WEBPACK_IMPORTED_MODULE_25__["User"], null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        shape: "square",
        icon: "user",
        src: user.picture
      })))) : react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_HeaderStyles__WEBPACK_IMPORTED_MODULE_25__["LoginButton"], {
        onClick: this.loginHandler
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: "user"
      }), "Login"))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_19__["Component"]);

Header.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,
    picture: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string
  })
};
Header.defaultProps = {
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Common/Layout/Header/HeaderStyles.js":
/*!*********************************************************!*\
  !*** ./components/Common/Layout/Header/HeaderStyles.js ***!
  \*********************************************************/
/*! exports provided: Logo, HeaderContainer, UserBar, UserBarClickable, NotificationsIcon, User, LoginButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBar", function() { return UserBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBarClickable", function() { return UserBarClickable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsIcon", function() { return NotificationsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginButton", function() { return LoginButton; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);







var Logo = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img.withConfig({
  displayName: "HeaderStyles__Logo",
  componentId: "pzmqoy-0"
})(["height:30px;margin:10px 0;cursor:pointer;"]);
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "HeaderStyles__HeaderContainer",
  componentId: "pzmqoy-1"
})(["background-color:#1c1c1c;border-bottom:1px solid #2e2e2e;margin-bottom:10px;"]);
var UserBar = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "HeaderStyles__UserBar",
  componentId: "pzmqoy-2"
})(["display:flex;justify-content:flex-end;"]);
var UserBarClickable = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "HeaderStyles__UserBarClickable",
  componentId: "pzmqoy-3"
})(["height:100%;width:50px;display:inline-block;text-align:center;:hover{background-color:#2e2e2e;cursor:pointer;}"]);
var NotificationsIcon = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(UserBarClickable).withConfig({
  displayName: "HeaderStyles__NotificationsIcon",
  componentId: "pzmqoy-4"
})([".ant-badge{margin-top:17px;}svg{font-size:20px;}"]);
var User = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(UserBarClickable).withConfig({
  displayName: "HeaderStyles__User",
  componentId: "pzmqoy-5"
})([".ant-avatar{margin-top:10px;}"]);
var LoginButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "HeaderStyles__LoginButton",
  componentId: "pzmqoy-6"
})(["background-color:transparent !important;margin-top:8px;svg{margin-right:10px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Common/Layout/Header/Notifications/Notifications.js":
/*!************************************************************************!*\
  !*** ./components/Common/Layout/Header/Notifications/Notifications.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NotificationsStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationsStyles */ "./components/Common/Layout/Header/Notifications/NotificationsStyles.js");






var Notifications = function Notifications(_ref) {
  var notifications = _ref.notifications;

  var sortedNotifications = function sortedNotifications() {
    return notifications.sort(function (a, b) {
      var aDate = new Date(a.created_at);
      var bDate = new Date(b.created_at);
      if (aDate.getTime() > bDate.getTime()) return -1;
      if (aDate.getTime() < bDate.getTime()) return 1;
      return 0;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NotificationsStyles__WEBPACK_IMPORTED_MODULE_4__["NotificationsDropdownStyle"], null), sortedNotifications().slice(0, 5).map(function (notification) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: notification._id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/post/".concat(notification.postId)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, notification.message)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./components/Common/Layout/Header/Notifications/NotificationsStyles.js":
/*!******************************************************************************!*\
  !*** ./components/Common/Layout/Header/Notifications/NotificationsStyles.js ***!
  \******************************************************************************/
/*! exports provided: NotificationsDropdownStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsDropdownStyle", function() { return NotificationsDropdownStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .notifications {\n    .ant-menu {\n      border: 1px solid #2E2E2E;\n    }\n    \n    .ant-menu-item {\n      padding-left: 20px;\n      padding-right: 30px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var NotificationsDropdownStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (NotificationsDropdownStyle);

/***/ }),

/***/ "./components/Common/Layout/Header/UserMenu/UserMenu.js":
/*!**************************************************************!*\
  !*** ./components/Common/Layout/Header/UserMenu/UserMenu.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UserMenuStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserMenuStyles */ "./components/Common/Layout/Header/UserMenu/UserMenuStyles.js");








var UserMenu = function UserMenu(_ref) {
  var onLogout = _ref.onLogout;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UserMenuStyles__WEBPACK_IMPORTED_MODULE_6__["UserMenuDropdownStyle"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "user-profile-menu-item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/users/me"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: "user-cog"
  }), "Profile"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Divider, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "user-logout-menu-item",
    onClick: onLogout
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: "power-off"
  }), "Logout"));
};

UserMenu.propTypes = {
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserMenu);

/***/ }),

/***/ "./components/Common/Layout/Header/UserMenu/UserMenuStyles.js":
/*!********************************************************************!*\
  !*** ./components/Common/Layout/Header/UserMenu/UserMenuStyles.js ***!
  \********************************************************************/
/*! exports provided: UserMenuDropdownStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuDropdownStyle", function() { return UserMenuDropdownStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .user-menu {\n    .ant-menu {\n      border: 1px solid #2E2E2E;\n    }\n    \n    .ant-menu-item {\n      padding-left: 20px;\n      padding-right: 30px;\n\n      svg {\n        margin-right: 10px;\n        width: 20px;\n      }\n    }\n\n    .ant-menu-item-divider {\n      background-color: #2E2E2E;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var UserMenuDropdownStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (UserMenuDropdownStyle);

/***/ }),

/***/ "./components/Common/Layout/Layout.js":
/*!********************************************!*\
  !*** ./components/Common/Layout/Layout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hoc_withUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withUser */ "./components/hoc/withUser.js");
/* harmony import */ var _NewPostWidget_NewPostWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NewPostWidget/NewPostWidget */ "./components/Common/NewPostWidget/NewPostWidget.js");
/* harmony import */ var _LeaderboardWidget_LeaderboardWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LeaderboardWidget/LeaderboardWidget */ "./components/Common/LeaderboardWidget/LeaderboardWidget.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header/Header */ "./components/Common/Layout/Header/Header.js");










var Layout = function Layout(_ref) {
  var user = _ref.user,
      render = _ref.render;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      marginBottom: '50px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: user
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 24,
      offset: 1
    },
    md: {
      span: 20,
      offset: 2
    },
    lg: {
      span: 16,
      offset: 4
    },
    xl: {
      span: 16,
      offset: 4
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 24,
    sm: 24,
    md: 20,
    lg: 20,
    xl: 20
  }, render(user)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 24,
    sm: 24,
    md: 4,
    lg: 4,
    xl: 4,
    style: {
      paddingLeft: '10px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NewPostWidget_NewPostWidget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isAuthenticated: !!user
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LeaderboardWidget_LeaderboardWidget__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withUser__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout));

/***/ }),

/***/ "./components/Common/LeaderboardWidget/LeaderboardWidget.js":
/*!******************************************************************!*\
  !*** ./components/Common/LeaderboardWidget/LeaderboardWidget.js ***!
  \******************************************************************/
/*! exports provided: LeaderboardWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardWidget", function() { return LeaderboardWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LeaderboardWidgetStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeaderboardWidgetStyles */ "./components/Common/LeaderboardWidget/LeaderboardWidgetStyles.js");



var LeaderboardWidget = function LeaderboardWidget() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LeaderboardWidgetStyles__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    size: "small",
    title: "Leaderboard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Writing refactorings and receiving votes gets you up in the leaderboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/leaderboard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LeaderboardWidgetStyles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary"
  }, "Check the leaderboard"))));
};
/* harmony default export */ __webpack_exports__["default"] = (LeaderboardWidget);

/***/ }),

/***/ "./components/Common/LeaderboardWidget/LeaderboardWidgetStyles.js":
/*!************************************************************************!*\
  !*** ./components/Common/LeaderboardWidget/LeaderboardWidgetStyles.js ***!
  \************************************************************************/
/*! exports provided: Card, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);





var Card = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "LeaderboardWidgetStyles__Card",
  componentId: "tct6du-0"
})(["border:1px solid #2e2e2e;margin-bottom:10px;.ant-card-head{border-bottom:1px solid #2e2e2e;}"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "LeaderboardWidgetStyles__Button",
  componentId: "tct6du-1"
})(["width:100%;"]);

/***/ }),

/***/ "./components/Common/NewPostWidget/NewPostWidget.js":
/*!**********************************************************!*\
  !*** ./components/Common/NewPostWidget/NewPostWidget.js ***!
  \**********************************************************/
/*! exports provided: NewPostWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostWidget", function() { return NewPostWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NewPostWidgetStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewPostWidgetStyles */ "./components/Common/NewPostWidget/NewPostWidgetStyles.js");




var NewPostWidget = function NewPostWidget(_ref) {
  var isAuthenticated = _ref.isAuthenticated;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewPostWidgetStyles__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    size: "small",
    title: "New post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you have a piece of code that you think it could be improved, create a new post"), !isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewPostWidgetStyles__WEBPACK_IMPORTED_MODULE_3__["AuthenticateMessage"], null, "Login to create a new post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/new"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewPostWidgetStyles__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    disabled: !isAuthenticated
  }, "Create a post"))));
};
NewPostWidget.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NewPostWidget);

/***/ }),

/***/ "./components/Common/NewPostWidget/NewPostWidgetStyles.js":
/*!****************************************************************!*\
  !*** ./components/Common/NewPostWidget/NewPostWidgetStyles.js ***!
  \****************************************************************/
/*! exports provided: Card, Button, AuthenticateMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateMessage", function() { return AuthenticateMessage; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);





var Card = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "NewPostWidgetStyles__Card",
  componentId: "t3nkft-0"
})(["border:1px solid #2e2e2e;margin-bottom:10px;.ant-card-head{border-bottom:1px solid #2e2e2e;}"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "NewPostWidgetStyles__Button",
  componentId: "t3nkft-1"
})(["width:100%;"]);
var AuthenticateMessage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "NewPostWidgetStyles__AuthenticateMessage",
  componentId: "t3nkft-2"
})([""]);

/***/ }),

/***/ "./components/NewPost/NewPost.js":
/*!***************************************!*\
  !*** ./components/NewPost/NewPost.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "antd/lib/form/style");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/axios */ "./utils/axios.js");
/* harmony import */ var _Common_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Common/CodeEditor/CodeEditor */ "./components/Common/CodeEditor/CodeEditor.js");
/* harmony import */ var _uikit_Input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../uikit/Input */ "./components/uikit/Input.js");
/* harmony import */ var _uikit_TextArea__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../uikit/TextArea */ "./components/uikit/TextArea.js");
/* harmony import */ var _uikit_Select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../uikit/Select */ "./components/uikit/Select.js");
/* harmony import */ var _NewPostStyles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./NewPostStyles */ "./components/NewPost/NewPostStyles.js");



























var NewPost =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_16__["default"])(NewPost, _Component);

  function NewPost() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__["default"])(this, NewPost);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__["default"])(NewPost)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_15__["default"])(_this), "state", {
      codeFiles: [''],
      currentCodeFile: 0,
      language: 'javascript',
      tags: [],
      saving: false,
      showCodeError: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_15__["default"])(_this), "codeChangeHandler", function (code) {
      _this.setState(function (prevState) {
        return {
          codeFiles: prevState.codeFiles.map(function (file, index) {
            return index === prevState.currentCodeFile ? code : file;
          }),
          showCodeError: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_15__["default"])(_this), "languageChangeHandler", function (language) {
      _this.setState({
        language: language
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_15__["default"])(_this), "componentDidMount",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee() {
      var _ref2, data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_20__["default"])().get('tags');

            case 2:
              _ref2 = _context.sent;
              data = _ref2.data;

              _this.setState({
                tags: data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_15__["default"])(_this), "submitPost", function () {
      var form = _this.props.form;
      var _this$state = _this.state,
          codeFiles = _this$state.codeFiles,
          tags = _this$state.tags,
          language = _this$state.language;

      _this.setState({
        showCodeError: !codeFiles[0]
      });

      form.validateFieldsAndScroll(
      /*#__PURE__*/
      function () {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee2(err, values) {
          var newPost;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(err || !codeFiles[0])) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  _this.setState({
                    saving: true
                  });

                  _context2.prev = 3;
                  _context2.next = 6;
                  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_20__["default"])().post('posts', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, values, {
                    codeFiles: codeFiles,
                    language: language,
                    tags: values.tags.map(function (tag) {
                      return tags.find(function (t) {
                        return t.name === tag;
                      })._id;
                    })
                  }));

                case 6:
                  newPost = _context2.sent;

                  _this.setState({
                    saving: false
                  });

                  next_router__WEBPACK_IMPORTED_MODULE_19___default.a.push("/post/".concat(newPost.data._id));
                  _context2.next = 14;
                  break;

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](3);

                  _this.setState({
                    saving: false
                  });

                case 14:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[3, 11]]);
        }));

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__["default"])(NewPost, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$state2 = this.state,
          tags = _this$state2.tags,
          saving = _this$state2.saving,
          language = _this$state2.language,
          showCodeError = _this$state2.showCodeError;
      return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_NewPostStyles__WEBPACK_IMPORTED_MODULE_25__["Container"], null, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_uikit_Select__WEBPACK_IMPORTED_MODULE_24__["SelectDropdownStyle"], null), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_NewPostStyles__WEBPACK_IMPORTED_MODULE_25__["Title"], null, "New post"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        xs: 24,
        sm: 24,
        md: 14,
        lg: 14,
        xl: 14
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_NewPostStyles__WEBPACK_IMPORTED_MODULE_25__["EditorContainer"], null, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_Common_CodeEditor_CodeEditor__WEBPACK_IMPORTED_MODULE_21__["default"], {
        language: language,
        onChange: this.codeChangeHandler,
        onLanguageChange: this.languageChangeHandler,
        error: showCodeError ? 'Please provide some code to refactor' : null
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_NewPostStyles__WEBPACK_IMPORTED_MODULE_25__["FieldsContainer"], {
        xs: 24,
        sm: 24,
        md: 10,
        lg: 10,
        xl: 10
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, getFieldDecorator('name', {
        rules: [{
          required: true,
          message: 'Please input the post name'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_uikit_Input__WEBPACK_IMPORTED_MODULE_22__["default"], {
        autoComplete: "off",
        placeholder: "Post name..."
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, getFieldDecorator('tags', {
        rules: [{
          required: true,
          message: 'Please input the post name'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_uikit_Select__WEBPACK_IMPORTED_MODULE_24__["default"], {
        mode: "multiple",
        placeholder: "Tags..."
      }, tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_uikit_Select__WEBPACK_IMPORTED_MODULE_24__["default"].Option, {
          key: tag._id,
          value: tag.name
        }, tag.name);
      })))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, getFieldDecorator('description', {
        rules: [{
          required: true,
          message: 'Please input the description'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_uikit_TextArea__WEBPACK_IMPORTED_MODULE_23__["default"], {
        rows: "12",
        autoComplete: "off",
        placeholder: "Description of your code..."
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        justify: "end"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_NewPostStyles__WEBPACK_IMPORTED_MODULE_25__["ButtonsContainer"], {
        xs: 24,
        sm: 24,
        md: 6,
        lg: 6,
        xl: 6
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        loading: saving,
        disabled: saving,
        style: {
          width: '100%'
        },
        type: "primary",
        onClick: this.submitPost
      }, "Save")))))));
    }
  }]);

  return NewPost;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.create()(NewPost));

/***/ }),

/***/ "./components/NewPost/NewPostStyles.js":
/*!*********************************************!*\
  !*** ./components/NewPost/NewPostStyles.js ***!
  \*********************************************/
/*! exports provided: Container, Title, EditorContainer, FieldsContainer, ButtonsContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorContainer", function() { return EditorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsContainer", function() { return FieldsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainer", function() { return ButtonsContainer; });
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NewPostStyles__Container",
  componentId: "sc-11erj5g-0"
})(["background-color:#1c1c1c;padding:20px;margin-bottom:20px;border:1px solid #2e2e2e;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "NewPostStyles__Title",
  componentId: "sc-11erj5g-1"
})(["font-size:24px;border-bottom:1px solid #2e2e2e;"]);
var EditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "NewPostStyles__EditorContainer",
  componentId: "sc-11erj5g-2"
})(["height:386px;"]);
var FieldsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "NewPostStyles__FieldsContainer",
  componentId: "sc-11erj5g-3"
})(["margin-top:38px;padding-left:10px;"]);
var ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "NewPostStyles__ButtonsContainer",
  componentId: "sc-11erj5g-4"
})(["margin-top:-20px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/hoc/withUser.js":
/*!************************************!*\
  !*** ./components/hoc/withUser.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/auth0 */ "./utils/auth0.js");














var withUser = function withUser(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_class, _Component);

    function _class() {
      var _getPrototypeOf2;

      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
        user: null
      });

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "componentDidMount",
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _ref2, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!Object(_utils_auth0__WEBPACK_IMPORTED_MODULE_12__["isAuthenticated"])()) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_11__["default"])().get('/users/me');

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;

                _this.setState({
                  user: data
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));

      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_class, [{
      key: "render",
      value: function render() {
        var user = this.state.user;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          user: user
        }, this.props));
      }
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "getInitialProps", WrappedComponent.getInitialProps ? function (ctx) {
    return WrappedComponent.getInitialProps(ctx);
  } : undefined), _temp;
};

/* harmony default export */ __webpack_exports__["default"] = (withUser);

/***/ }),

/***/ "./components/uikit/Input.js":
/*!***********************************!*\
  !*** ./components/uikit/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Input",
  componentId: "sc-1ejm0az-0"
})(["background-color:#1c1c1c;border-color:#2e2e2e;&.ant-input-disabled{color:rgba(255,255,255,0.35);}"]);
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/uikit/Select.js":
/*!************************************!*\
  !*** ./components/uikit/Select.js ***!
  \************************************/
/*! exports provided: SelectDropdownStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDropdownStyle", function() { return SelectDropdownStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .ant-select-dropdown-menu-item-selected {\n    background-color: #1c1c1c !important;\n    :hover {\n      border-color: #2e2e2e !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Select = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "Select",
  componentId: "sc-1hvibpr-0"
})(["width:100%;.ant-select-selection{border-color:#2e2e2e;}.ant-select-arrow{color:rgba(255,255,255,0.65);}.ant-select-selection__choice{background-color:#d358f7;border:none;border-radius:2px;color:white;padding-top:1px;font-weight:900;.ant-select-selection__choice__remove{color:white;}}"]);
var SelectDropdownStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./components/uikit/TextArea.js":
/*!**************************************!*\
  !*** ./components/uikit/TextArea.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var AntTextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.TextArea;
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(AntTextArea).withConfig({
  displayName: "TextArea",
  componentId: "sc-1r7m83z-0"
})(["background-color:#1c1c1c;border-color:#2e2e2e;"]);
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/codemirror/lib/codemirror.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/lib/codemirror.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/codemirror/theme/darcula.css":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/theme/darcula.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./pages/post/new/index.js":
/*!*********************************!*\
  !*** ./pages/post/new/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Common_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Common/Layout/Layout */ "./components/Common/Layout/Layout.js");
/* harmony import */ var _components_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/NewPost/NewPost */ "./components/NewPost/NewPost.js");




var NewPostPage = function NewPostPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewPostPage);

/***/ }),

/***/ "./utils/auth0.js":
/*!************************!*\
  !*** ./utils/auth0.js ***!
  \************************/
/*! exports provided: storeSession, login, logout, parseHash, isAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSession", function() { return storeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHash", function() { return parseHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenticated", function() { return isAuthenticated; });
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ "auth0-js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



var getAuth0 = function getAuth0() {
  return new auth0_js__WEBPACK_IMPORTED_MODULE_0___default.a.WebAuth({
    clientID: "ULwMJ15H2IOUgYjP1AcxjGAf2XXw0E2d",
    domain: "codereforge.auth0.com",
    audience: "http://codereforge.com"
  });
};

var getBaseUrl = function getBaseUrl() {
  return "".concat(window.location.protocol, "//").concat(window.location.host);
};

var getOptions = function getOptions() {
  return {
    responseType: 'token id_token',
    redirectUri: "".concat(getBaseUrl(), "/redirect"),
    scope: 'openid profile email'
  };
};

var storeSession = function storeSession(session) {
  var idToken = session.idToken,
      accessToken = session.accessToken,
      expiresIn = session.expiresIn;
  localStorage.setItem('idToken', idToken);
  localStorage.setItem('accessToken', accessToken);
  var expiration = new Date();
  expiration.setSeconds(expiration.getSeconds() + expiresIn);
  localStorage.setItem('expiration', expiration);
};
var login = function login() {
  localStorage.setItem('loginRedirection', next_router__WEBPACK_IMPORTED_MODULE_1___default.a.asPath);
  getAuth0().authorize(getOptions());
};
var logout = function logout() {
  localStorage.removeItem('idToken');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('expiration');
  getAuth0().logout({
    returnTo: getBaseUrl()
  });
};
var parseHash = function parseHash(callback) {
  return getAuth0().parseHash(callback);
};
var isAuthenticated = function isAuthenticated() {
  try {
    var idToken = localStorage.getItem('idToken');
    var accessToken = localStorage.getItem('accessToken');
    var expiration = localStorage.getItem('expiration');

    if (idToken && accessToken) {
      if (new Date(expiration).getTime() > new Date().getTime()) return true;
      logout();
    }

    return false;
  } catch (_unused) {
    return true;
  }
};

/***/ }),

/***/ "./utils/axios.js":
/*!************************!*\
  !*** ./utils/axios.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var getToken = function getToken() {
  try {
    return localStorage.getItem('idToken');
  } catch (_unused) {
    return null;
  }
};

var getAxios = function getAxios() {
  var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    baseURL: "http://localhost:3001/",
    timeout: 3000
  });
  instance.interceptors.request.use(function (config) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, config, {
      headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, config.headers, {
        Authorization: getToken()
      })
    });
  }, function (error) {
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  return instance;
};

/* harmony default export */ __webpack_exports__["default"] = (getAxios);

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/post/new/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pablo\Desktop\codeforge\codereforge-frontend\pages\post\new\index.js */"./pages/post/new/index.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/avatar/style":
/*!****************************************!*\
  !*** external "antd/lib/avatar/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style");

/***/ }),

/***/ "antd/lib/badge":
/*!*********************************!*\
  !*** external "antd/lib/badge" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),

/***/ "antd/lib/badge/style":
/*!***************************************!*\
  !*** external "antd/lib/badge/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge/style");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style":
/*!****************************************!*\
  !*** external "antd/lib/button/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/card/style":
/*!**************************************!*\
  !*** external "antd/lib/card/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card/style");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style":
/*!*************************************!*\
  !*** external "antd/lib/col/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/dropdown/style":
/*!******************************************!*\
  !*** external "antd/lib/dropdown/style" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/form/style":
/*!**************************************!*\
  !*** external "antd/lib/form/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style":
/*!***************************************!*\
  !*** external "antd/lib/input/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style":
/*!**************************************!*\
  !*** external "antd/lib/menu/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style":
/*!*************************************!*\
  !*** external "antd/lib/row/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style":
/*!****************************************!*\
  !*** external "antd/lib/select/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),

/***/ "auth0-js":
/*!***************************!*\
  !*** external "auth0-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "codemirror/mode/apl/apl":
/*!******************************************!*\
  !*** external "codemirror/mode/apl/apl" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/apl/apl");

/***/ }),

/***/ "codemirror/mode/asciiarmor/asciiarmor":
/*!********************************************************!*\
  !*** external "codemirror/mode/asciiarmor/asciiarmor" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/asciiarmor/asciiarmor");

/***/ }),

/***/ "codemirror/mode/asn.1/asn.1":
/*!**********************************************!*\
  !*** external "codemirror/mode/asn.1/asn.1" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/asn.1/asn.1");

/***/ }),

/***/ "codemirror/mode/asterisk/asterisk":
/*!****************************************************!*\
  !*** external "codemirror/mode/asterisk/asterisk" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/asterisk/asterisk");

/***/ }),

/***/ "codemirror/mode/brainfuck/brainfuck":
/*!******************************************************!*\
  !*** external "codemirror/mode/brainfuck/brainfuck" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/brainfuck/brainfuck");

/***/ }),

/***/ "codemirror/mode/clike/clike":
/*!**********************************************!*\
  !*** external "codemirror/mode/clike/clike" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/clike/clike");

/***/ }),

/***/ "codemirror/mode/clojure/clojure":
/*!**************************************************!*\
  !*** external "codemirror/mode/clojure/clojure" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/clojure/clojure");

/***/ }),

/***/ "codemirror/mode/cmake/cmake":
/*!**********************************************!*\
  !*** external "codemirror/mode/cmake/cmake" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/cmake/cmake");

/***/ }),

/***/ "codemirror/mode/cobol/cobol":
/*!**********************************************!*\
  !*** external "codemirror/mode/cobol/cobol" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/cobol/cobol");

/***/ }),

/***/ "codemirror/mode/coffeescript/coffeescript":
/*!************************************************************!*\
  !*** external "codemirror/mode/coffeescript/coffeescript" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/coffeescript/coffeescript");

/***/ }),

/***/ "codemirror/mode/commonlisp/commonlisp":
/*!********************************************************!*\
  !*** external "codemirror/mode/commonlisp/commonlisp" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/commonlisp/commonlisp");

/***/ }),

/***/ "codemirror/mode/crystal/crystal":
/*!**************************************************!*\
  !*** external "codemirror/mode/crystal/crystal" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/crystal/crystal");

/***/ }),

/***/ "codemirror/mode/css/css":
/*!******************************************!*\
  !*** external "codemirror/mode/css/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/css/css");

/***/ }),

/***/ "codemirror/mode/cypher/cypher":
/*!************************************************!*\
  !*** external "codemirror/mode/cypher/cypher" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/cypher/cypher");

/***/ }),

/***/ "codemirror/mode/d/d":
/*!**************************************!*\
  !*** external "codemirror/mode/d/d" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/d/d");

/***/ }),

/***/ "codemirror/mode/dart/dart":
/*!********************************************!*\
  !*** external "codemirror/mode/dart/dart" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/dart/dart");

/***/ }),

/***/ "codemirror/mode/diff/diff":
/*!********************************************!*\
  !*** external "codemirror/mode/diff/diff" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/diff/diff");

/***/ }),

/***/ "codemirror/mode/django/django":
/*!************************************************!*\
  !*** external "codemirror/mode/django/django" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/django/django");

/***/ }),

/***/ "codemirror/mode/dockerfile/dockerfile":
/*!********************************************************!*\
  !*** external "codemirror/mode/dockerfile/dockerfile" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/dockerfile/dockerfile");

/***/ }),

/***/ "codemirror/mode/dtd/dtd":
/*!******************************************!*\
  !*** external "codemirror/mode/dtd/dtd" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/dtd/dtd");

/***/ }),

/***/ "codemirror/mode/dylan/dylan":
/*!**********************************************!*\
  !*** external "codemirror/mode/dylan/dylan" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/dylan/dylan");

/***/ }),

/***/ "codemirror/mode/ebnf/ebnf":
/*!********************************************!*\
  !*** external "codemirror/mode/ebnf/ebnf" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/ebnf/ebnf");

/***/ }),

/***/ "codemirror/mode/ecl/ecl":
/*!******************************************!*\
  !*** external "codemirror/mode/ecl/ecl" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/ecl/ecl");

/***/ }),

/***/ "codemirror/mode/eiffel/eiffel":
/*!************************************************!*\
  !*** external "codemirror/mode/eiffel/eiffel" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/eiffel/eiffel");

/***/ }),

/***/ "codemirror/mode/elm/elm":
/*!******************************************!*\
  !*** external "codemirror/mode/elm/elm" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/elm/elm");

/***/ }),

/***/ "codemirror/mode/erlang/erlang":
/*!************************************************!*\
  !*** external "codemirror/mode/erlang/erlang" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/erlang/erlang");

/***/ }),

/***/ "codemirror/mode/factor/factor":
/*!************************************************!*\
  !*** external "codemirror/mode/factor/factor" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/factor/factor");

/***/ }),

/***/ "codemirror/mode/fcl/fcl":
/*!******************************************!*\
  !*** external "codemirror/mode/fcl/fcl" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/fcl/fcl");

/***/ }),

/***/ "codemirror/mode/forth/forth":
/*!**********************************************!*\
  !*** external "codemirror/mode/forth/forth" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/forth/forth");

/***/ }),

/***/ "codemirror/mode/fortran/fortran":
/*!**************************************************!*\
  !*** external "codemirror/mode/fortran/fortran" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/fortran/fortran");

/***/ }),

/***/ "codemirror/mode/gas/gas":
/*!******************************************!*\
  !*** external "codemirror/mode/gas/gas" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/gas/gas");

/***/ }),

/***/ "codemirror/mode/gfm/gfm":
/*!******************************************!*\
  !*** external "codemirror/mode/gfm/gfm" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/gfm/gfm");

/***/ }),

/***/ "codemirror/mode/gherkin/gherkin":
/*!**************************************************!*\
  !*** external "codemirror/mode/gherkin/gherkin" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/gherkin/gherkin");

/***/ }),

/***/ "codemirror/mode/go/go":
/*!****************************************!*\
  !*** external "codemirror/mode/go/go" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/go/go");

/***/ }),

/***/ "codemirror/mode/groovy/groovy":
/*!************************************************!*\
  !*** external "codemirror/mode/groovy/groovy" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/groovy/groovy");

/***/ }),

/***/ "codemirror/mode/haml/haml":
/*!********************************************!*\
  !*** external "codemirror/mode/haml/haml" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/haml/haml");

/***/ }),

/***/ "codemirror/mode/handlebars/handlebars":
/*!********************************************************!*\
  !*** external "codemirror/mode/handlebars/handlebars" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/handlebars/handlebars");

/***/ }),

/***/ "codemirror/mode/haskell-literate/haskell-literate":
/*!********************************************************************!*\
  !*** external "codemirror/mode/haskell-literate/haskell-literate" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/haskell-literate/haskell-literate");

/***/ }),

/***/ "codemirror/mode/haskell/haskell":
/*!**************************************************!*\
  !*** external "codemirror/mode/haskell/haskell" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/haskell/haskell");

/***/ }),

/***/ "codemirror/mode/haxe/haxe":
/*!********************************************!*\
  !*** external "codemirror/mode/haxe/haxe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/haxe/haxe");

/***/ }),

/***/ "codemirror/mode/htmlembedded/htmlembedded":
/*!************************************************************!*\
  !*** external "codemirror/mode/htmlembedded/htmlembedded" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/htmlembedded/htmlembedded");

/***/ }),

/***/ "codemirror/mode/htmlmixed/htmlmixed":
/*!******************************************************!*\
  !*** external "codemirror/mode/htmlmixed/htmlmixed" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/htmlmixed/htmlmixed");

/***/ }),

/***/ "codemirror/mode/http/http":
/*!********************************************!*\
  !*** external "codemirror/mode/http/http" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/http/http");

/***/ }),

/***/ "codemirror/mode/idl/idl":
/*!******************************************!*\
  !*** external "codemirror/mode/idl/idl" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/idl/idl");

/***/ }),

/***/ "codemirror/mode/javascript/javascript":
/*!********************************************************!*\
  !*** external "codemirror/mode/javascript/javascript" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/javascript/javascript");

/***/ }),

/***/ "codemirror/mode/jinja2/jinja2":
/*!************************************************!*\
  !*** external "codemirror/mode/jinja2/jinja2" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/jinja2/jinja2");

/***/ }),

/***/ "codemirror/mode/jsx/jsx":
/*!******************************************!*\
  !*** external "codemirror/mode/jsx/jsx" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/jsx/jsx");

/***/ }),

/***/ "codemirror/mode/julia/julia":
/*!**********************************************!*\
  !*** external "codemirror/mode/julia/julia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/julia/julia");

/***/ }),

/***/ "codemirror/mode/livescript/livescript":
/*!********************************************************!*\
  !*** external "codemirror/mode/livescript/livescript" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/livescript/livescript");

/***/ }),

/***/ "codemirror/mode/lua/lua":
/*!******************************************!*\
  !*** external "codemirror/mode/lua/lua" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/lua/lua");

/***/ }),

/***/ "codemirror/mode/markdown/markdown":
/*!****************************************************!*\
  !*** external "codemirror/mode/markdown/markdown" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/markdown/markdown");

/***/ }),

/***/ "codemirror/mode/mathematica/mathematica":
/*!**********************************************************!*\
  !*** external "codemirror/mode/mathematica/mathematica" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/mathematica/mathematica");

/***/ }),

/***/ "codemirror/mode/mbox/mbox":
/*!********************************************!*\
  !*** external "codemirror/mode/mbox/mbox" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/mbox/mbox");

/***/ }),

/***/ "codemirror/mode/mirc/mirc":
/*!********************************************!*\
  !*** external "codemirror/mode/mirc/mirc" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/mirc/mirc");

/***/ }),

/***/ "codemirror/mode/mllike/mllike":
/*!************************************************!*\
  !*** external "codemirror/mode/mllike/mllike" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/mllike/mllike");

/***/ }),

/***/ "codemirror/mode/modelica/modelica":
/*!****************************************************!*\
  !*** external "codemirror/mode/modelica/modelica" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/modelica/modelica");

/***/ }),

/***/ "codemirror/mode/mscgen/mscgen":
/*!************************************************!*\
  !*** external "codemirror/mode/mscgen/mscgen" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/mscgen/mscgen");

/***/ }),

/***/ "codemirror/mode/mumps/mumps":
/*!**********************************************!*\
  !*** external "codemirror/mode/mumps/mumps" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/mumps/mumps");

/***/ }),

/***/ "codemirror/mode/nginx/nginx":
/*!**********************************************!*\
  !*** external "codemirror/mode/nginx/nginx" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/nginx/nginx");

/***/ }),

/***/ "codemirror/mode/nsis/nsis":
/*!********************************************!*\
  !*** external "codemirror/mode/nsis/nsis" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/nsis/nsis");

/***/ }),

/***/ "codemirror/mode/ntriples/ntriples":
/*!****************************************************!*\
  !*** external "codemirror/mode/ntriples/ntriples" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/ntriples/ntriples");

/***/ }),

/***/ "codemirror/mode/octave/octave":
/*!************************************************!*\
  !*** external "codemirror/mode/octave/octave" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/octave/octave");

/***/ }),

/***/ "codemirror/mode/oz/oz":
/*!****************************************!*\
  !*** external "codemirror/mode/oz/oz" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/oz/oz");

/***/ }),

/***/ "codemirror/mode/pascal/pascal":
/*!************************************************!*\
  !*** external "codemirror/mode/pascal/pascal" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/pascal/pascal");

/***/ }),

/***/ "codemirror/mode/pegjs/pegjs":
/*!**********************************************!*\
  !*** external "codemirror/mode/pegjs/pegjs" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/pegjs/pegjs");

/***/ }),

/***/ "codemirror/mode/perl/perl":
/*!********************************************!*\
  !*** external "codemirror/mode/perl/perl" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/perl/perl");

/***/ }),

/***/ "codemirror/mode/php/php":
/*!******************************************!*\
  !*** external "codemirror/mode/php/php" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/php/php");

/***/ }),

/***/ "codemirror/mode/pig/pig":
/*!******************************************!*\
  !*** external "codemirror/mode/pig/pig" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/pig/pig");

/***/ }),

/***/ "codemirror/mode/powershell/powershell":
/*!********************************************************!*\
  !*** external "codemirror/mode/powershell/powershell" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/powershell/powershell");

/***/ }),

/***/ "codemirror/mode/properties/properties":
/*!********************************************************!*\
  !*** external "codemirror/mode/properties/properties" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/properties/properties");

/***/ }),

/***/ "codemirror/mode/protobuf/protobuf":
/*!****************************************************!*\
  !*** external "codemirror/mode/protobuf/protobuf" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/protobuf/protobuf");

/***/ }),

/***/ "codemirror/mode/pug/pug":
/*!******************************************!*\
  !*** external "codemirror/mode/pug/pug" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/pug/pug");

/***/ }),

/***/ "codemirror/mode/puppet/puppet":
/*!************************************************!*\
  !*** external "codemirror/mode/puppet/puppet" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/puppet/puppet");

/***/ }),

/***/ "codemirror/mode/python/python":
/*!************************************************!*\
  !*** external "codemirror/mode/python/python" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/python/python");

/***/ }),

/***/ "codemirror/mode/q/q":
/*!**************************************!*\
  !*** external "codemirror/mode/q/q" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/q/q");

/***/ }),

/***/ "codemirror/mode/r/r":
/*!**************************************!*\
  !*** external "codemirror/mode/r/r" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/r/r");

/***/ }),

/***/ "codemirror/mode/rpm/rpm":
/*!******************************************!*\
  !*** external "codemirror/mode/rpm/rpm" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/rpm/rpm");

/***/ }),

/***/ "codemirror/mode/rst/rst":
/*!******************************************!*\
  !*** external "codemirror/mode/rst/rst" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/rst/rst");

/***/ }),

/***/ "codemirror/mode/ruby/ruby":
/*!********************************************!*\
  !*** external "codemirror/mode/ruby/ruby" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/ruby/ruby");

/***/ }),

/***/ "codemirror/mode/rust/rust":
/*!********************************************!*\
  !*** external "codemirror/mode/rust/rust" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/rust/rust");

/***/ }),

/***/ "codemirror/mode/sas/sas":
/*!******************************************!*\
  !*** external "codemirror/mode/sas/sas" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/sas/sas");

/***/ }),

/***/ "codemirror/mode/sass/sass":
/*!********************************************!*\
  !*** external "codemirror/mode/sass/sass" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/sass/sass");

/***/ }),

/***/ "codemirror/mode/scheme/scheme":
/*!************************************************!*\
  !*** external "codemirror/mode/scheme/scheme" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/scheme/scheme");

/***/ }),

/***/ "codemirror/mode/shell/shell":
/*!**********************************************!*\
  !*** external "codemirror/mode/shell/shell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/shell/shell");

/***/ }),

/***/ "codemirror/mode/sieve/sieve":
/*!**********************************************!*\
  !*** external "codemirror/mode/sieve/sieve" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/sieve/sieve");

/***/ }),

/***/ "codemirror/mode/slim/slim":
/*!********************************************!*\
  !*** external "codemirror/mode/slim/slim" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/slim/slim");

/***/ }),

/***/ "codemirror/mode/smalltalk/smalltalk":
/*!******************************************************!*\
  !*** external "codemirror/mode/smalltalk/smalltalk" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/smalltalk/smalltalk");

/***/ }),

/***/ "codemirror/mode/smarty/smarty":
/*!************************************************!*\
  !*** external "codemirror/mode/smarty/smarty" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/smarty/smarty");

/***/ }),

/***/ "codemirror/mode/solr/solr":
/*!********************************************!*\
  !*** external "codemirror/mode/solr/solr" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/solr/solr");

/***/ }),

/***/ "codemirror/mode/soy/soy":
/*!******************************************!*\
  !*** external "codemirror/mode/soy/soy" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/soy/soy");

/***/ }),

/***/ "codemirror/mode/sparql/sparql":
/*!************************************************!*\
  !*** external "codemirror/mode/sparql/sparql" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/sparql/sparql");

/***/ }),

/***/ "codemirror/mode/spreadsheet/spreadsheet":
/*!**********************************************************!*\
  !*** external "codemirror/mode/spreadsheet/spreadsheet" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/spreadsheet/spreadsheet");

/***/ }),

/***/ "codemirror/mode/sql/sql":
/*!******************************************!*\
  !*** external "codemirror/mode/sql/sql" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/sql/sql");

/***/ }),

/***/ "codemirror/mode/stex/stex":
/*!********************************************!*\
  !*** external "codemirror/mode/stex/stex" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/stex/stex");

/***/ }),

/***/ "codemirror/mode/stylus/stylus":
/*!************************************************!*\
  !*** external "codemirror/mode/stylus/stylus" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/stylus/stylus");

/***/ }),

/***/ "codemirror/mode/swift/swift":
/*!**********************************************!*\
  !*** external "codemirror/mode/swift/swift" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/swift/swift");

/***/ }),

/***/ "codemirror/mode/tcl/tcl":
/*!******************************************!*\
  !*** external "codemirror/mode/tcl/tcl" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/tcl/tcl");

/***/ }),

/***/ "codemirror/mode/textile/textile":
/*!**************************************************!*\
  !*** external "codemirror/mode/textile/textile" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/textile/textile");

/***/ }),

/***/ "codemirror/mode/tiddlywiki/tiddlywiki":
/*!********************************************************!*\
  !*** external "codemirror/mode/tiddlywiki/tiddlywiki" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/tiddlywiki/tiddlywiki");

/***/ }),

/***/ "codemirror/mode/tiki/tiki":
/*!********************************************!*\
  !*** external "codemirror/mode/tiki/tiki" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/tiki/tiki");

/***/ }),

/***/ "codemirror/mode/toml/toml":
/*!********************************************!*\
  !*** external "codemirror/mode/toml/toml" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/toml/toml");

/***/ }),

/***/ "codemirror/mode/tornado/tornado":
/*!**************************************************!*\
  !*** external "codemirror/mode/tornado/tornado" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/tornado/tornado");

/***/ }),

/***/ "codemirror/mode/troff/troff":
/*!**********************************************!*\
  !*** external "codemirror/mode/troff/troff" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/troff/troff");

/***/ }),

/***/ "codemirror/mode/ttcn-cfg/ttcn-cfg":
/*!****************************************************!*\
  !*** external "codemirror/mode/ttcn-cfg/ttcn-cfg" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/ttcn-cfg/ttcn-cfg");

/***/ }),

/***/ "codemirror/mode/ttcn/ttcn":
/*!********************************************!*\
  !*** external "codemirror/mode/ttcn/ttcn" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/ttcn/ttcn");

/***/ }),

/***/ "codemirror/mode/turtle/turtle":
/*!************************************************!*\
  !*** external "codemirror/mode/turtle/turtle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/turtle/turtle");

/***/ }),

/***/ "codemirror/mode/twig/twig":
/*!********************************************!*\
  !*** external "codemirror/mode/twig/twig" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/twig/twig");

/***/ }),

/***/ "codemirror/mode/vb/vb":
/*!****************************************!*\
  !*** external "codemirror/mode/vb/vb" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/vb/vb");

/***/ }),

/***/ "codemirror/mode/vbscript/vbscript":
/*!****************************************************!*\
  !*** external "codemirror/mode/vbscript/vbscript" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/vbscript/vbscript");

/***/ }),

/***/ "codemirror/mode/velocity/velocity":
/*!****************************************************!*\
  !*** external "codemirror/mode/velocity/velocity" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/velocity/velocity");

/***/ }),

/***/ "codemirror/mode/verilog/verilog":
/*!**************************************************!*\
  !*** external "codemirror/mode/verilog/verilog" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/verilog/verilog");

/***/ }),

/***/ "codemirror/mode/vhdl/vhdl":
/*!********************************************!*\
  !*** external "codemirror/mode/vhdl/vhdl" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/vhdl/vhdl");

/***/ }),

/***/ "codemirror/mode/vue/vue":
/*!******************************************!*\
  !*** external "codemirror/mode/vue/vue" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/vue/vue");

/***/ }),

/***/ "codemirror/mode/webidl/webidl":
/*!************************************************!*\
  !*** external "codemirror/mode/webidl/webidl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/webidl/webidl");

/***/ }),

/***/ "codemirror/mode/xml/xml":
/*!******************************************!*\
  !*** external "codemirror/mode/xml/xml" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/xml/xml");

/***/ }),

/***/ "codemirror/mode/xquery/xquery":
/*!************************************************!*\
  !*** external "codemirror/mode/xquery/xquery" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/xquery/xquery");

/***/ }),

/***/ "codemirror/mode/yacas/yacas":
/*!**********************************************!*\
  !*** external "codemirror/mode/yacas/yacas" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/yacas/yacas");

/***/ }),

/***/ "codemirror/mode/yaml-frontmatter/yaml-frontmatter":
/*!********************************************************************!*\
  !*** external "codemirror/mode/yaml-frontmatter/yaml-frontmatter" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/yaml-frontmatter/yaml-frontmatter");

/***/ }),

/***/ "codemirror/mode/yaml/yaml":
/*!********************************************!*\
  !*** external "codemirror/mode/yaml/yaml" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/yaml/yaml");

/***/ }),

/***/ "codemirror/mode/z80/z80":
/*!******************************************!*\
  !*** external "codemirror/mode/z80/z80" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/z80/z80");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-codemirror2":
/*!************************************!*\
  !*** external "react-codemirror2" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-codemirror2");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=new.js.map