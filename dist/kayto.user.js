// ==UserScript==
// @name        kayto
// @include     http://manually-add-your-own-domains.com/*
// @namespace   kayto
// @version     1.0.1
// @grant       none
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var dragNdrop=function(e){function t(e){if(e){var t=o(e);return s(t),t}return!1}function o(e){var t=[];if(e instanceof Array)for(var o=0,r=e.length;o<r;o++)t=t.concat(n(e[o]));else t=t.concat(n(e));return t}function n(e){if("string"==typeof e.innerHTML)return[e];if("string"==typeof e){for(var t=document.querySelectorAll(e),o=[],n=0,r=t.length;n<r;n++)o.push(t[n]);return o}}function r(){a(B),d(B),s()}function s(e){if(_(B,"dragNdrop"),e)for(var t=0,o=e.length;t<o;t++)_(e[t],"dragNdrop__dropzone")}function d(e){D?u(e):(e.style.position=V?"auto":"relative",e.style.zIndex="999",A&&"x"===A||"y"===A?e.style.cursor="x"===A?"col-resize":"row-resize":e.style.cursor="move")}function u(e){var t=q(e,"position");t&&"static"!==t?e.style.position=t:e.style.position=V?"auto":"relative";var o=q(e,"zIndex");o&&"auto"!==o?e.style.zIndex=o:e.style.zIndex="999";var n=q(e,"cursor");n&&"auto"!==o?e.style.cursor=n:A&&"x"===A||"y"===A?e.style.cursor="x"===A?"col-resize":"row-resize":e.style.cursor="move"}function a(e){document.addEventListener?(e.addEventListener("mousedown",c,!1),e.addEventListener("touchstart",c,!1)):(e.attachEvent("onmousedown",c),e.attachEvent("touchstart",c))}function c(e){z("start"),I(B,"dragNdrop--stop"),_(B,"dragNdrop--start");var t="touches"in e?e.touches[0]:e;t.preventDefault?t.preventDefault():t.returnValue=!1,l(B,t),B.style.zIndex=parseInt(B.style.zIndex)+1;var o=document.body.style;o.cursor=o.cursor&&"inherit"!==o.cursor?o.cursor:B.style.cursor,i()}function l(e,t){if(Y={x:t.pageX||t.clientX,y:t.pageY||t.clientY},V){var o=e.style.transform.split("translate3d(")[1],n=!!o&&o.split(",");X.x=parseInt(n[0])||0,X.y=parseInt(n[1])||0}else X.x=parseInt(q(e,"left"))||0,X.y=parseInt(q(e,"top"))||0}function i(){document.addEventListener?(document.addEventListener("mousemove",p,!1),document.addEventListener("touchmove",p,!1),document.addEventListener("mouseup",x,!1),document.addEventListener("touchend",x,!1)):(document.attachEvent("onmousemove",p),document.attachEvent("touchmove",p),document.attachEvent("onmouseup",x),document.attachEvent("touchend",x))}function p(e){var t;z("drag"),I(B,"dragNdrop--start"),_(B,"dragNdrop--drag"),M&&w(B,M),"touches"in e?(e.preventDefault(),t=e.touches[0]):t=e,m(B,t,A)}function m(e,t,o){var n={x:t.pageX||t.clientX,y:t.pageY||t.clientY},r={x:n.x-Y.x,y:n.y-Y.y};Y={x:n.x,y:n.y},f(e,r,o)}function f(e,t,o){o&&o!==!1?y(e,t,o):v(e,{x:X.x+t.x,y:X.y+t.y})}function y(e,t,o){"x"===o?v(e,{x:X.x+t.x,y:X.y}):"y"===o?v(e,{x:X.x,y:X.y+t.y}):H&&(v(e,{x:X.x+t.x,y:X.y+t.y}),g(e,o,!1))}function v(e,t){X={x:t.x,y:t.y},V?(e.style.transform="translate3d("+t.x+"px ,"+t.y+"px , 1px)",e.style.webkitTransform="translate3d("+t.x+"px ,"+t.y+"px , 1px)"):(e.style.left=t.x+"px",e.style.top=t.y+"px")}function g(e,t,o){if(e===t)return!1;for(var n={x:window.scrollY||document.documentElement.scrollTop,y:window.scrollX||document.documentElement.scrollLeft},r={top:t.getBoundingClientRect().top+n.y,left:t.getBoundingClientRect().left+n.x},s={top:t.offsetHeight,left:t.offsetWidth},d={top:e.getBoundingClientRect().top+n.y,left:e.getBoundingClientRect().left+n.x},u={top:e.offsetHeight,left:e.offsetWidth},a=["top","left","top","left"],c=[],l=0,i=a.length;l<i;l++)l<i/2?d[a[l]]>=r[a[l]]?c.push(!0):(c.push(!1),o||h(e,a[l],r[a[l]]-d[a[l]])):d[a[l]]+u[a[l]]<=r[a[l]]+s[a[l]]?c.push(!0):(c.push(!1),o||h(e,a[l],r[a[l]]+s[a[l]]-(d[a[l]]+u[a[l]])));return c[0]&&c[1]&&c[2]&&c[3]}function h(e,t,o){"top"===t?v(e,{y:X.y+o,x:X.x}):v(e,{y:X.y,x:X.x+o})}function x(){z("stop"),I(B,"dragNdrop--drag"),_(B,"dragNdrop--stop");var e=!1;M&&(e=L(B,M)),k&&k({element:B,dropped:e,dropZones:M,constraints:A,customStyles:D,useTransform:V}),N(),B.style.zIndex=parseInt(B.style.zIndex)-1,document.body.style.cursor=Z}function E(){x()}function N(){document.addEventListener?(document.removeEventListener("mousemove",p,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("mouseup",x,!1),document.removeEventListener("touchend",x,!1)):(document.detachEvent("onmousemove",p),document.detachEvent("touchmove",p),document.detachEvent("onmouseup",x),document.detachEvent("touchend",x))}function w(e,t){I(e,"dragNdrop--dropped"),_(e,"dragNdrop--dropable");for(var o=0;o<t.length;o++){var n=t[o];I(n,"dragNdrop__dropzone--dropped"),_(n,"dragNdrop__dropzone--ready")}}function L(e,t){I(e,"dragNdrop--dropable"),I(e,"dragNdrop--dropped");for(var o=[],n=0;n<t.length;n++){var r=t[n];I(r,"dragNdrop__dropzone--ready"),I(r,"dragNdrop__dropzone--dropped"),g(e,r,!0)&&(z("dropped"),_(e,"dragNdrop--dropped"),_(r,"dragNdrop__dropzone--dropped"),o.push(r))}return o.length>0&&o}function b(){S(B),N(),"col-resize"!==B.style.cursor&&"row-resize"!==B.style.cursor&&"move"!==B.style.cursor||(B.style.cursor="auto"),document.addEventListener?(B.removeEventListener("mousedown",c,!1),B.removeEventListener("touchstart",c,!1)):(B.detachEvent("onmousedown",c),B.detachEvent("touchstart",c))}function S(e){I(e,"dragNdrop"),I(e,"dragNdrop--drag"),I(e,"dragNdrop--stop"),I(e,"dragNdrop--dropped"),I(e,"dragNdrop--dropable")}function z(e){var t;"function"==typeof Event?(t=new Event("dragNdrop:"+e),B.dispatchEvent(t)):document.createEvent&&(t=document.createEvent("CustomEvent"),t.initEvent("dragNdrop:"+e,!0,!0),B.dispatchEvent(t))}function C(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function _(e,t){C(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)}function I(e,t){if(C(e,t))if(e.classList)e.classList.remove(t);else{var o=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(o," ")}}function q(e,t){return window.getComputedStyle?window.getComputedStyle(e,null)[t]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null)[t]:e.currentStyle?e.currentStyle[t]:e.style[t]}function R(){if(!window.getComputedStyle)return!1;var e,t=document.createElement("p"),o={webkitTransform:"-webkit-transform",transform:"transform"};document.body.insertBefore(t,null);for(var n in o)void 0!==t.style[n]&&(t.style[n]="translate3d(1px, 1px, 1px)",e=window.getComputedStyle(t).getPropertyValue(o[n]));return document.body.removeChild(t),void 0!==e&&e.length>0&&"none"!==e}function T(){document.querySelectorAll||(document.querySelectorAll=function(e){var t,o=document.createElement("style"),n=[];for(document.documentElement.firstChild.appendChild(o),document._qsa=[],o.styleSheet.cssText=e+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),o.parentNode.removeChild(o);document._qsa.length;)t=document._qsa.shift(),t.style.removeAttribute("x-qsa"),n.push(t);return document._qsa=null,n}),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null})}e?e&&!e.element&&console.log("ERROR: dragNdrop: please provide an element (options.element) that will be made draggable to the function. See reference at: https://github.com/ThibaultJanBeyer/dragNdrop for more info"):console.log("ERROR: dragNdrop: please provide an options object to the function. See reference at: https://github.com/ThibaultJanBeyer/dragNdrop for more info");var B=e.element,D=e.customStyles,A=e.constraints,M=t(e.dropZones),k=e.callback,V=!("useTransform"in e)||e.useTransform,X={},Y={x:0,y:0},H=A&&"string"==typeof A.innerHTML;R()||(console.log("WARNING: dragNdrop: your browser does not support hardware accelerated css. The plugin will still work but do yourself a favor and update your browser."),V=!1),r();var Z=document.body.style.cursor||"inherit";T();var P={setupDropZones:t,getDropZones:o,getElement:n,start:r,setupClasses:s,setStyles:d,setCustomStyles:u,setupEventListeners:a,eleMouseDown:c,getStartingPositions:l,addEventListeners:i,eleMouseMove:p,getPositions:m,handleMoveElement:f,handleConstraints:y,moveElement:v,isElementInside:g,putElementBack:h,eleMouseUp:x,pause:E,removeEventListeners:N,prepareDrop:w,handleDrop:L,stop:b,removeClasses:S};return P};"undefined"!=typeof module&&null!==module?module.exports=dragNdrop:window.dragNdrop=dragNdrop;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_npm_dragndrop__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_npm_dragndrop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_npm_dragndrop__);


(function (window, document, dragNdrop) {
    'use strict';

    var defaultMaxWidth = window.kaytoMaxWidth || 1488;
    var lastGoodMaxWidth = defaultMaxWidth;
    var columns = window.kaytoColumns || 12;
    var TYPE_DELAY = 250;

    var checkLabelView, checkInputView, widgetView, iconEditView,
        overlayView, currentWidthView, maxWidthPanelView, toggleOverlayViewFn,
        maxWidthInputView, containerView, bodyClickFn, currentMaxWidthView, valueView, maxWidthLabelView;
    var doMaxWidthChanged = debounce(onMaxWidthChange, TYPE_DELAY);
    bodyClickFn = null;
    currentWidthView = null;

    var requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    }());

    (function animloop (){
        requestAnimFrame(animloop);
        render();
    })();

    function render () {
        if (currentWidthView === null) {
            return;
        }
        else {
            var widthPx = window.innerWidth;
            currentWidthView.textContent = 'Current width: ' + widthPx + ' px';
        }
    }

    function debounce(fn, wait) {
        var timeout;
        return function () {
            var context = this,
            args = arguments,
            later = function () {
                timeout = null;
                fn.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function applyValueIfValid (vm) {
        if (/^\d+$/.test(vm)) {
            overlayView.style.maxWidth = vm + 'px';
            containerView.style.maxWidth = vm + 'px';
            lastGoodMaxWidth = vm;
            return true;
        }

        return false;
    }

    function setLastGoodValue () {
        valueView.textContent = lastGoodMaxWidth + 'px'; //clickable label back to an acceptable value
        maxWidthInputView.value = lastGoodMaxWidth; //input field back to an acceptable value
    }

    function stopInternalClick (e) {
        e.stopPropagation(); //don’t fire on the body listener that might be there
    }

    function onMaxWidthChange (e) {
        var code = e.charCode || e.keyCode; //normalize char codes cross browser
        var vm = maxWidthInputView.value;

        if (code === 13) { //13 is enter
            applyValueIfValid(vm);
            toggleEditInPlace();
        }
        else if (code === 27) { //27 is esc
            toggleEditInPlace();
        }
        else { //evaluate what was typed - not enter, not esc keys
            if (!applyValueIfValid(vm)) {
                //TODO invalid - validation error, show something
            }
        }
    }

    function isVisible (el) {
        return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
    }

    function toggleDisplay (view) {
        if (isVisible(view)) {
            view.style.display = 'none';
        }
        else {
            view.style.display = 'block';
        }
    }

    function toggleOverlayHidden (view) {
        return function () { //accepts event
            toggleDisplay(view);
        };
    }

    function stopListeningBodyClick () {
        document.body.removeEventListener('click', bodyClickFn);
        document.body.removeEventListener('touch', bodyClickFn);
        bodyClickFn = null;
    }

    function onBodyClick () {
        toggleEditInPlace();
        stopListeningBodyClick();
    }

    function toggleEditInPlace () {
        toggleDisplay(currentMaxWidthView);
        toggleDisplay(maxWidthLabelView);
        toggleDisplay(maxWidthInputView);

        if (isVisible(maxWidthInputView)) {
            maxWidthInputView.focus();
        }
        else {
            setLastGoodValue();
        }

        if (bodyClickFn === null) {
            bodyClickFn = onBodyClick;
            document.body.addEventListener('click', bodyClickFn);
            document.body.addEventListener('touch', bodyClickFn);
        }
        else {
            stopListeningBodyClick();
        }
    }

    function ready () {
        buildGridAssistant();
    }

    function buildGridAssistant () {
        widgetView = document.createElement('div');
        widgetView.className = 'kayto-ctrl';
        widgetView.setAttribute('draggable', 'true');

        var widgetContainer = document.createElement('div');
        widgetContainer.className = 'kayto-ctrl-container';

        currentWidthView = document.createElement('div');
        currentWidthView.className = 'kayto-ctrl-current-width-panel';

        checkLabelView = document.createElement('label');
        checkLabelView.setAttribute('for', 'kayto-enable'); //link up with the checkbox

        checkInputView = document.createElement('input');
        checkInputView.setAttribute('type', 'checkbox');
        checkInputView.setAttribute('tabindex', 0);
        checkInputView.setAttribute('id', 'kayto-enable'); //link up with the label

        checkLabelView.appendChild(checkInputView);
        checkLabelView.appendChild(document.createTextNode('Show Grid Columns'));

        overlayView = document.createElement('div');
        overlayView.className = 'kayto';
        overlayView.style.display = 'none'; //hidden by default, less annoying

        maxWidthPanelView = document.createElement('div');
        maxWidthPanelView.className = 'kayto-ctrl-max-width-panel';

        currentMaxWidthView = document.createElement('a');
        currentMaxWidthView.setAttribute('href', 'javascript:void(0);');
        currentMaxWidthView.className = 'kayto-current-max-width-ctrl';

        var textView = document.createElement('span');
        textView.className = 'kayto-max-width-text';
        textView.textContent = 'Max width: ';

        valueView = document.createElement('span');
        valueView.className = 'kayto-max-width-value';
        valueView.textContent = defaultMaxWidth + 'px';

        iconEditView = document.createElement('span');
        iconEditView.className = 'kayto-edit-icon';
        iconEditView.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 1c-1.031 0-2.179.478-2.851 1.149L3 15.3 1 23l7.7-2L21.85 7.85C22.537 7.162 23 6.094 23 5a4 4 0 0 0-4-4zM5.764 15.363l10.6-10.6.736.737L6.5 16.1l-.736-.737zM7.9 17.5L18.5 6.9l.735.735-10.6 10.6L7.9 17.5zm-3.281-.48l2.361 2.361-3.189.828.828-3.189zM20.613 6.213L17.79 3.39c.316-.209.787-.39 1.21-.39 1.103 0 2 .897 2 2 0 .472-.176.909-.387 1.213z"/></svg>'; //pencil, open icon from WK Icons - better to not have a font dependency

        maxWidthLabelView = document.createElement('label');
        maxWidthLabelView.appendChild(document.createTextNode('Max width:'));
        maxWidthLabelView.setAttribute('for', 'kayto-max-width'); //link up with the input
        maxWidthLabelView.style.display = 'none'; //hidden by default, not in edit mode upon page load

        maxWidthInputView = document.createElement('input');
        maxWidthInputView.setAttribute('type', 'text');
        maxWidthInputView.setAttribute('value', defaultMaxWidth);
        maxWidthInputView.setAttribute('id', 'kayto-max-width'); //link up with the label
        maxWidthInputView.style.display = 'none'; //hidden by default, not in edit mode upon page load

        currentMaxWidthView.appendChild(textView);
        currentMaxWidthView.appendChild(valueView);
        currentMaxWidthView.appendChild(iconEditView);
        maxWidthPanelView.appendChild(maxWidthLabelView);
        maxWidthPanelView.appendChild(maxWidthInputView);

        toggleOverlayViewFn = toggleOverlayHidden(overlayView);

        containerView = document.createElement('div');
        containerView.className = 'kayto-container';

        for(var i = 1; i <= columns; i++) {
            var column = document.createElement('div');
            var content  = document.createElement('div');
            column.className = 'kayto-column';
            content.className = 'kayto-content';
            column.appendChild(content);
            containerView.appendChild(column);
        }

        overlayView.appendChild(containerView);
        widgetContainer.appendChild(checkLabelView);
        maxWidthPanelView.appendChild(currentMaxWidthView);
        widgetView.appendChild(widgetContainer);
        widgetView.appendChild(maxWidthPanelView);
        widgetView.appendChild(currentWidthView);

        document.body.appendChild(widgetView);
        document.body.insertBefore(overlayView, document.body.firstChild);

        maxWidthInputView.addEventListener('keyup', doMaxWidthChanged); //keyup event to capture esc
        checkInputView.addEventListener('click', toggleOverlayViewFn);
        checkInputView.addEventListener('touch', toggleOverlayViewFn);
        currentMaxWidthView.addEventListener('click', toggleEditInPlace);
        currentMaxWidthView.addEventListener('touch', toggleEditInPlace);
        widgetView.addEventListener('click', stopInternalClick);
        widgetView.addEventListener('touch', stopInternalClick);

        dragNdrop({
            element: widgetView,
            customStyles: true
        });
    }

    function unload () {
        maxWidthInputView.removeEventListener('keyup', doMaxWidthChanged); //keyup event to capture esc
        checkInputView.removeEventListener('click', toggleOverlayViewFn);
        checkInputView.removeEventListener('touch', toggleOverlayViewFn);
        currentMaxWidthView.removeEventListener('click', toggleEditInPlace);
        currentMaxWidthView.removeEventListener('touch', toggleEditInPlace);
        widgetView.removeEventListener('click', stopInternalClick);
        widgetView.removeEventListener('touch', stopInternalClick);

        if (bodyClickFn !== null) {
            stopListeningBodyClick();
        }
    }

    document.addEventListener('DOMContentLoaded', ready);
    window.addEventListener('unload', unload);
}(window, document, __WEBPACK_IMPORTED_MODULE_0_npm_dragndrop___default.a));


/***/ })
/******/ ]);
//bake in the styles
(function (document) {
    'use strict';

    function ready () {
        var styleView = document.createElement('style');
        styleView.setAttribute('data-comment', 'required styles for kayto script');
        styleView.textContent = '.kayto{margin-left:auto;margin-right:auto;max-width:1488px;pointer-events:none}.kayto-ctrl::after,.kayto::after{clear:both;content:\' \';display:table}.kayto .kayto-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1488px;opacity:.4;position:fixed;width:100%;z-index:1100}.kayto .kayto-container>.kayto-column{background-color:#80bde1;box-sizing:border-box;-ms-flex:0 1 auto;flex:0 1 auto;float:left;height:100vh;padding-left:8px;padding-right:8px;width:8.33333%}.kayto .kayto-container>.kayto-column>.kayto-content{background-color:#409bd2;height:100vh;overflow-x:hidden}.kayto-ctrl{background-color:#474747;bottom:16px;cursor:move;font-family:"Helvetica Neue",Helvetica,"Roboto",Arial,sans-serif;font-size:16px;min-width:170px;opacity:.5;padding:16px;position:fixed;right:24px;z-index:1200}.kayto-ctrl:hover{opacity:1}.kayto-ctrl .kayto-ctrl-container label:hover,.kayto-ctrl input[type=checkbox]:hover{cursor:pointer}.kayto-ctrl input[type=checkbox]{margin-right:.5em;visibility:visible}.kayto-ctrl input[type=text]{color:#474747;width:100%}.kayto-ctrl .kayto-ctrl-current-width-panel,.kayto-ctrl .kayto-ctrl-max-width-panel,.kayto-ctrl .kayto-ctrl-max-width-panel .kayto-current-max-width-ctrl,.kayto-ctrl label{color:#fff}.kayto-ctrl .kayto-ctrl-max-width-panel .kayto-edit-icon{color:#fff;margin-left:.5em;position:relative;top:3px}.kayto-ctrl .kayto-ctrl-max-width-panel .kayto-edit-icon>svg{fill:#fff;height:16px;width:16px}';
        document.body.appendChild(styleView);
    }

    document.addEventListener('DOMContentLoaded', ready);
}(document));
