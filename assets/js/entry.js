!function o(i,u,s){function c(t,e){if(!u[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var a=u[t]={exports:{}};i[t][0].call(a.exports,function(e){return c(i[t][1][e]||e)},a,a.exports,o,i,u,s)}return u[t].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,n){"use strict";var r,a=e("./lib/anime"),o=(r=a)&&r.__esModule?r:{default:r};var i=screen.width<414,u=(screen.width<1280&&screen.width,1280<=screen.width);document&&document.addEventListener("DOMContentLoaded",function(){document.getElementById("filler-svg")&&(i?(0,o.default)({targets:".filler-svg > path",scaleY:1.8,d:[{value:"M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},{value:"M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-404.437,33.266-404.437,33.266s-84.744,101.563-276.344,37.563c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},{value:"M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"}],easing:"easeOutQuad",duration:9e3,endDelay:1e3,direction:"alternate",loop:!0}):u&&(0,o.default)({targets:".filler-svg > path",scale:1.06,d:[{value:"M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},{value:"M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-404.437,33.266-404.437,33.266s-84.744,101.563-276.344,37.563c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},{value:"M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"}],easing:"easeOutQuad",duration:9e3,endDelay:1e3,direction:"alternate",loop:!0})),document.getElementById("morph")&&(0,o.default)({targets:".intro-lick > .morph",translateY:3,scale:1.3,d:[{value:"M1919.8,443.2s66.967,172.732-295.233,172.732c-297.7,0-173.343,159.132-347.922,207.43s-185.7,24.659-377.3-39.341c-139-46.4-306.872,35.951-503.172,87.351C145.569,950.072,0,632.1,0,632.1V0H1919.8Z"}],easing:"easeInOutSine",duration:9e3,delay:100,endDelay:1e3,direction:"alternate",loop:!0}),document.getElementById("morph")&&(0,o.default)({targets:".intro-lick > .morph-img",d:[{value:"M1919.8,510.678s90.9,247.1-271.3,247.1c-297.7,0-168.541,62.711-343.12,111.009s-219.883,28.234-411.483-35.766c-139-46.4-271.642,20.974-467.942,72.374C175.351,984.1,0,716.786,0,716.786V0H1919.8Z"}],easing:"easeInOutSine",duration:9e3,delay:100,endDelay:1e3,direction:"alternate",loop:!0}),document.getElementById("footer-svg-container")&&(0,o.default)({targets:"#footer-svg > path",d:[{value:"M794,343.155s-44.4,18.538-55.2,78.022c-5,24.372-7.6,46.508-7.6,46.508s-2.5,28.57,21.1,42.8,55,42.637,128.5,48.307c163.7,10.468,238.1-42.255,238.1-42.255s86.2-44.981,67.1-83.2c-19.1-38.166-19-43.236-69.6-73.442-50.6-30.151-77.6-40.129-107-38.657-29.3,1.472-43.1.164-84.5-1.418C883.5,318.293,818.713,335.2,794,343.155Z"},{value:"M790.225,362.7s-41.734,34-51.886,143.1c-4.7,44.7-7.144,85.3-7.144,85.3s-2.35,52.4,19.833,78.5,51.7,78.2,120.784,88.6c153.871,19.2,223.8-77.5,223.8-77.5s81.024-82.5,63.071-152.6c-17.953-70-17.859-79.3-65.421-134.7-47.562-55.3-72.94-73.6-100.575-70.9-27.541,2.7-40.512.3-79.426-2.6C874.351,317.1,813.454,348.105,790.225,362.7Z"}],easing:"easeInOutSine",duration:9e3,delay:100,endDelay:1e3,direction:"alternate",loop:!0})});var s=document.getElementsByClassName("nav-btn")[0];s&&s.addEventListener("click",function(){document.getElementById("nav-menu-svg")&&(0,o.default)({targets:"#nav-menu-svg > path",scaleY:[{value:[.8,1.25],duration:4500,easing:"easeInSine"},{value:.9,duration:4500,easing:"easeOutSine"}],easing:"easeInOutSine",duration:9e3,delay:1e3})});var c=document.getElementsByClassName("flavours-cloud")[0];c&&c.addEventListener("click",function(e){if(e&&e.target)for(var t=e.target.getAttribute("id"),n=document.getElementsByClassName("ice-cream"),r=0;r<n.length;r++)n[r].classList.remove("active"),n[r].classList.contains(t)&&n[r].classList.add("active")})},{"./lib/anime":2}],2:[function(e,a,t){(function(t){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o={scope:{}};o.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},o.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:void 0!==t&&null!=t?t:e},o.global=o.getGlobal(void 0),o.SYMBOL_PREFIX="jscomp_symbol_",o.initSymbol=function(){o.initSymbol=function(){},o.global.Symbol||(o.global.Symbol=o.Symbol)},o.symbolCounter_=0,o.Symbol=function(e){return o.SYMBOL_PREFIX+(e||"")+o.symbolCounter_++},o.initSymbolIterator=function(){o.initSymbol();var e=o.global.Symbol.iterator;e||(e=o.global.Symbol.iterator=o.global.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&o.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return o.arrayIterator(this)}}),o.initSymbolIterator=function(){}},o.arrayIterator=function(e){var t=0;return o.iteratorPrototype(function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}})},o.iteratorPrototype=function(e){return o.initSymbolIterator(),(e={next:e})[o.global.Symbol.iterator]=function(){return this},e},o.array=o.array||{},o.iteratorFromArray=function(t,n){o.initSymbolIterator(),t instanceof String&&(t+="");var r=0,a={next:function(){if(r<t.length){var e=r++;return{value:n(e,t[e]),done:!1}}return a.next=function(){return{done:!0,value:void 0}},a.next()}};return a[Symbol.iterator]=function(){return a},a},o.polyfill=function(e,t,n,r){if(t){for(n=o.global,e=e.split("."),r=0;r<e.length-1;r++){var a=e[r];a in n||(n[a]={}),n=n[a]}(t=t(r=n[e=e[e.length-1]]))!=r&&null!=t&&o.defineProperty(n,e,{configurable:!0,writable:!0,value:t})}},o.polyfill("Array.prototype.keys",function(e){return e||function(){return o.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var n,r;n=void 0,r=function(){function a(e){if(!k.col(e))try{return document.querySelectorAll(e)}catch(e){}}function x(e,t){for(var n=e.length,r=2<=arguments.length?t:void 0,a=[],o=0;o<n;o++)if(o in e){var i=e[o];t.call(r,i,o,e)&&a.push(i)}return a}function f(e){return e.reduce(function(e,t){return e.concat(k.arr(t)?f(t):t)},[])}function o(e){return k.arr(e)?e:(k.str(e)&&(e=a(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function i(e,t){return e.some(function(e){return e===t})}function u(e){var t,n={};for(t in e)n[t]=e[t];return n}function d(e,t){var n,r=u(e);for(n in e)r[n]=t.hasOwnProperty(n)?t[n]:e[n];return r}function p(e,t){var n,r=u(e);for(n in t)r[n]=k.und(e[n])?t[n]:e[n];return r}function s(e){if(e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))return e[2]}function c(e,t){return k.fnc(e)?e(t.target,t.id,t.total):e}function M(e,t){if(t in e.style)return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function g(e,t){return k.dom(e)&&i(L,t)?"transform":k.dom(e)&&(e.getAttribute(t)||k.svg(e)&&e[t])?"attribute":k.dom(e)&&"transform"!==t&&M(e,t)?"css":null!=e[t]?"object":void 0}function l(e,t){switch(g(e,t)){case"transform":return function(e,n){var t,r=-1<(t=n).indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0;if(r=-1<n.indexOf("scale")?1:0+r,!(e=e.style.transform))return r;for(var a=[],o=[],i=[],u=/(\w+)\((.+?)\)/g;a=u.exec(e);)o.push(a[1]),i.push(a[2]);return(e=x(i,function(e,t){return o[t]===n})).length?e[0]:r}(e,t);case"css":return M(e,t);case"attribute":return e.getAttribute(t)}return e[t]||0}function m(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=s(e)||0;switch(t=parseFloat(t),e=parseFloat(e.replace(n[0],"")),n[0][0]){case"+":return t+e+r;case"-":return t-e+r;case"*":return t*e+r}}function y(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function n(e){e=e.points;for(var t,n=0,r=0;r<e.numberOfItems;r++){var a=e.getItem(r);0<r&&(n+=y(t,a)),t=a}return n}function v(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*e.getAttribute("r");case"rect":return 2*e.getAttribute("width")+2*e.getAttribute("height");case"line":return y({x:e.getAttribute("x1"),y:e.getAttribute("y1")},{x:e.getAttribute("x2"),y:e.getAttribute("y2")});case"polyline":return n(e);case"polygon":var t=e.points;return n(e)+y(t.getItem(t.numberOfItems-1),t.getItem(0))}}function S(t,n){function e(e){return e=void 0===e?0:e,t.el.getPointAtLength(1<=n+e?n+e:0)}var r=e(),a=e(-1),o=e(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(o.y-a.y,o.x-a.x)/Math.PI}}function h(e,t){var n,r=/-?\d*\.?\d+/g;if(n=k.pth(e)?e.totalLength:e,k.col(n))if(k.rgb(n)){var a=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=a?"rgba("+a[1]+",1)":n}else n=k.hex(n)?function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+(e=parseInt(t[1],16))+","+parseInt(t[2],16)+","+(t=parseInt(t[3],16))+",1)"}(n):k.hsl(n)?function(e){function t(e,t,n){return n<0&&(n+=1),1<n&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);e=parseInt(n[1])/360;var r=parseInt(n[2])/100,a=parseInt(n[3])/100;if(n=n[4]||1,0==r)a=r=e=a;else{var o=a<.5?a*(1+r):a+r-a*r,i=2*a-o;a=t(i,o,e+1/3),r=t(i,o,e),e=t(i,o,e-1/3)}return"rgba("+255*a+","+255*r+","+255*e+","+n+")"}(n):void 0;else a=(a=s(n))?n.substr(0,n.length-a.length):n,n=t&&!/\s/g.test(n)?a+t:a;return{original:n+="",numbers:n.match(r)?n.match(r).map(Number):[0],strings:k.str(e)||t?n.split(r):[]}}function b(e){return x(e=e?f(k.arr(e)?e.map(o):o(e)):[],function(e,t,n){return n.indexOf(e)===t})}function w(e,n){var t=u(n);if(k.arr(e)){var r=e.length;2!==r||k.obj(e[0])?k.fnc(n.duration)||(t.duration=n.duration/r):e={value:e}}return o(e).map(function(e,t){return t=t?0:n.delay,e=k.obj(e)&&!k.pth(e)?e:{value:e},k.und(e.delay)&&(e.delay=t),e}).map(function(e){return p(e,t)})}function I(o,i){var u;return o.tweens.map(function(e){var t=(e=function(e,t){var n,r={};for(n in e){var a=c(e[n],t);k.arr(a)&&1===(a=a.map(function(e){return c(e,t)})).length&&(a=a[0]),r[n]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(e,i)).value,n=l(i.target,o.name),r=u?u.to.original:n,a=(r=k.arr(t)?t[0]:r,m(k.arr(t)?t[1]:t,r));n=s(a)||s(r)||s(n);return e.from=h(r,n),e.to=h(a,n),e.start=u?u.end:o.offset,e.end=e.start+e.delay+e.duration,e.easing=function(e){return k.arr(e)?j.apply(this,e):F[e]}(e.easing),e.elasticity=(1e3-Math.min(Math.max(e.elasticity,1),999))/1e3,e.isPath=k.pth(t),e.isColor=k.col(e.from.original),e.isColor&&(e.round=1),u=e})}function O(t,e,n,r){var a="delay"===t;return e.length?(a?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):a?r.delay:n.offset+r.delay+r.duration}function r(e){var t,n,r,a,o,i=d(E,e),u=d(P,e),s=(n=e.targets,(r=b(n)).map(function(e,t){return{target:e,id:t,total:r.length}})),c=[],l=p(i,u);for(t in e)l.hasOwnProperty(t)||"targets"===t||c.push({name:t,offset:l.offset,tweens:w(e[t],u)});return o=c,p(i,{children:[],animatables:a=s,animations:e=x(f(a.map(function(r){return o.map(function(e){var t=g(r.target,e.name);if(t){var n=I(e,r);e={type:t,property:e.name,animatable:r,tweens:n,duration:n[n.length-1].end,delay:n[0].delay}}else e=void 0;return e})})),function(e){return!k.und(e)}),duration:O("duration",e,i,u),delay:O("delay",e,i,u)})}function A(e){function l(){return window.Promise&&new Promise(function(e){return h=e})}function f(e){return w.reversed?w.duration-e:e}function d(t){for(var e=0,n={},r=w.animations,a=r.length;e<a;){var o=r[e],i=o.animatable,u=(s=o.tweens)[f=s.length-1];f&&(u=x(s,function(e){return t<e.end})[0]||u);for(var s=Math.min(Math.max(t-u.start-u.delay,0),u.duration)/u.duration,c=isNaN(s)?1:u.easing(s,u.elasticity),l=(s=u.to.strings,u.round),f=[],d=void 0,p=(d=u.to.numbers.length,0);p<d;p++){var g=void 0,m=(g=u.to.numbers[p],u.from.numbers[p]);g=u.isPath?S(u.value,c*g):m+c*(g-m);l&&(u.isColor&&2<p||(g=Math.round(g*l)/l)),f.push(g)}if(u=s.length)for(d=s[0],c=0;c<u;c++)l=s[c+1],p=f[c],isNaN(p)||(d=l?d+(p+l):d+(p+" "));else d=f[0];Z[o.type](i.target,o.property,d,n,i.id),o.currentValue=d,e++}if(e=Object.keys(n).length)for(r=0;r<e;r++)C||(C=M(document.body,"transform")?"transform":"-webkit-transform"),w.animatables[r].target.style[C]=n[r].join(" ");w.currentTime=t,w.progress=t/w.duration*100}function p(e){w[e]&&w[e](w)}function g(){w.remaining&&!0!==w.remaining&&w.remaining--}function t(e){var t=w.duration,n=w.offset,r=n+w.delay,a=w.currentTime,o=w.reversed,i=f(e);if(w.children.length){var u=w.children,s=u.length;if(i>=w.currentTime)for(var c=0;c<s;c++)u[c].seek(i);else for(;s--;)u[s].seek(i)}(r<=i||!t)&&(w.began||(w.began=!0,p("begin")),p("run")),n<i&&i<t?d(i):(i<=n&&0!==a&&(d(0),o&&g()),(t<=i&&a!==t||!t)&&(d(t),o||g())),p("update"),t<=e&&(w.remaining?(y=m,"alternate"===w.direction&&(w.reversed=!w.reversed)):(w.pause(),w.completed||(w.completed=!0,p("complete"),"Promise"in window&&(h(),b=l()))),v=0)}e=void 0===e?{}:e;var m,y,v=0,h=null,b=l(),w=r(e);return w.reset=function(){var e=w.direction,t=w.loop;for(w.currentTime=0,w.progress=0,w.paused=!0,w.began=!1,w.completed=!1,w.reversed="reverse"===e,w.remaining="alternate"===e&&1===t?2:t,d(0),e=w.children.length;e--;)w.children[e].reset()},w.tick=function(e){m=e,y||(y=m),t((v+m-y)*A.speed)},w.seek=function(e){t(f(e))},w.pause=function(){var e=N.indexOf(w);-1<e&&N.splice(e,1),w.paused=!0},w.play=function(){w.paused&&(w.paused=!1,y=0,v=f(w.currentTime),N.push(w),T||V())},w.reverse=function(){w.reversed=!w.reversed,y=0,v=f(w.currentTime)},w.restart=function(){w.pause(),w.reset(),w.play()},w.finished=b,w.reset(),w.autoplay&&w.play(),w}var C,E={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},P={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},L="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),k={arr:function(e){return Array.isArray(e)},obj:function(e){return-1<Object.prototype.toString.call(e).indexOf("Object")},pth:function(e){return k.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},dom:function(e){return e.nodeType||k.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return k.hex(e)||k.rgb(e)||k.hsl(e)}},j=function(){function f(e,t,n){return(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e}return function(i,u,s,c){if(0<=i&&i<=1&&0<=s&&s<=1){var l=new Float32Array(11);if(i!==u||s!==c)for(var e=0;e<11;++e)l[e]=f(.1*e,i,s);return function(e){if(i===u&&s===c)return e;if(0===e)return 0;if(1===e)return 1;for(var t=0,n=1;10!==n&&l[n]<=e;++n)t+=.1;n=t+(e-l[--n])/(l[n+1]-l[n])*.1;var r=3*(1-3*s+3*i)*n*n+2*(3*s-6*i)*n+3*i;if(.001<=r){for(t=0;t<4&&0!==(r=3*(1-3*s+3*i)*n*n+2*(3*s-6*i)*n+3*i);++t){var a=f(n,i,s)-e;n=n-a/r}e=n}else if(0===r)e=n;else{n=t,t=t+.1;for(var o=0;0<(r=f(a=n+(t-n)/2,i,s)-e)?t=a:n=a,1e-7<Math.abs(r)&&++o<10;);e=a}return f(e,u,c)}}}}(),F=function(){function n(e,t){return 0===e||1===e?e:-Math.pow(2,10*(e-1))*Math.sin(2*(e-1-t/(2*Math.PI)*Math.asin(1))*Math.PI/t)}var e,r="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),t={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],n],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,t){return 1-n(1-e,t)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,t){return e<.5?n(2*e,t)/2:1-n(-2*e+2,t)/2}]},a={linear:j(.25,.25,.75,.75)},o={};for(e in t)o.type=e,t[o.type].forEach(function(n){return function(e,t){a["ease"+n.type+r[t]]=k.fnc(e)?e:j.apply(void 0,e)}}(o)),o={type:o.type};return a}(),Z={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){r[a]||(r[a]=[]),r[a].push(t+"("+n+")")}},N=[],T=0,V=function(){function r(){T=requestAnimationFrame(e)}function e(e){var t=N.length;if(t){for(var n=0;n<t;)N[n]&&N[n].tick(e),n++;r()}else cancelAnimationFrame(T),T=0}return r}();return A.version="2.2.0",A.speed=1,A.running=N,A.remove=function(e){e=b(e);for(var t=N.length;t--;)for(var n=N[t],r=n.animations,a=r.length;a--;)i(e,r[a].animatable.target)&&(r.splice(a,1),r.length||n.pause())},A.getValue=l,A.path=function(e,t){var n=k.str(e)?a(e)[0]:e,r=t||100;return function(e){return{el:n,property:e,totalLength:v(n)*(r/100)}}},A.setDashoffset=function(e){var t=v(e);return e.setAttribute("stroke-dasharray",t),t},A.bezier=j,A.easings=F,A.timeline=function(r){var a=A(r);return a.pause(),a.duration=0,a.add=function(e){return a.children.forEach(function(e){e.began=!0,e.completed=!0}),o(e).forEach(function(e){var t=p(e,d(P,r||{}));t.targets=t.targets||r.targets,e=a.duration;var n=t.offset;t.autoplay=!1,t.direction=a.direction,t.offset=k.und(n)?e:m(n,e),a.began=!0,a.completed=!0,a.seek(t.offset),(t=A(t)).began=!0,t.completed=!0,t.duration>e&&(a.duration=t.duration),a.children.push(t)}),a.seek(0),a.reset(),a.autoplay&&a.restart(),a},a},A.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},A},"function"==typeof define&&define.amd?define([],r):"object"===(void 0===a?"undefined":e(a))&&a.exports?a.exports=r():n.anime=r()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
//# sourceMappingURL=entry.js.map
