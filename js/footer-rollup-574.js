/*
 =======================================================================*\
|| ###################################################################### ||
|| # vBulletin 5.7.4
|| # ------------------------------------------------------------------ # ||
|| # Copyright 2000-2023 MH Sub I, LLC dba vBulletin. All Rights Reserved.  # ||
|| # This file may not be redistributed in whole or significant part.   # ||
|| # ----------------- VBULLETIN IS NOT FREE SOFTWARE ----------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html   # ||
|| ###################################################################### ||
\*========================================================================*/
// ***************************
// js.compressed/jquery/jquery-migrate-3.3.0.min.js
// ***************************
/*! jQuery Migrate v3.3.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){var r,n=/^(\d+)\.(\d+)\.(\d+)/,i=n.exec(e)||[],o=n.exec(t)||[];for(r=1;r<=3;r++){if(+i[r]>+o[r])return 1;if(+i[r]<+o[r])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.0",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function i(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var o,a={},c=s.fn.init,d=s.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,f=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(o in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),c.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&l.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(p,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return d.apply(this,r)},d)Object.prototype.hasOwnProperty.call(d,o)&&(s.find[o]=d[o]);if(i(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),i(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),i(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),i(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&i(s,"trim",function(e){return null==e?"":(e+"").replace(f,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&i(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),e("3.3.0")&&(i(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){a["[object "+t+"]"]=t.toLowerCase()}),i(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),i(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),i(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated"),i(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),s.ajax){var y=s.ajax;s.ajax=function(){var e=y.apply(this,arguments);return e.promise&&(i(e,"success",e.done,"jQXHR.success is deprecated and removed"),i(e,"error",e.fail,"jQXHR.error is deprecated and removed"),i(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e}}var m=s.fn.removeAttr,g=s.fn.toggleClass,h=/\S+/g;function v(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(h),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),m.apply(this,arguments)};var j,Q=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?g.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":s.data(this,"__className__")||"")}))}),b=/^[a-z]/,w=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return Q=!0,e=r.apply(this,arguments),Q=!1,e})}),s.swap=function(e,t,r,n){var i,o,a={};for(o in Q||u("jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=r.apply(e,n||[]),t)e.style[o]=a[o];return i},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),j=s.fn.css,s.fn.css=function(e,t){var r=this;return"string"!=typeof e&&s.each(e,function(e,t){s.fn.css.call(r,e,t)}),"number"!=typeof t||function(e){return b.test(e)&&w.test(e[0].toUpperCase()+e.slice(1))}(v(e))||u("Use of number-typed values is deprecated in jQuery.fn.css"),j.apply(this,arguments)};var x=s.data;if(s.data=function(e,t,r){var n,i,o;if(t&&"object"==typeof t&&2===arguments.length){for(o in n=s.hasData(e)&&x.call(this,e),i={},t)o!==v(o)?(u("jQuery.data() always sets/gets camelCased names: "+o),n[o]=t[o]):i[o]=t[o];return x.call(this,e,i),t}return t&&"string"==typeof t&&t!==v(t)&&(n=s.hasData(e)&&x.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):x.apply(this,arguments)},s.fx){var A,k,M=s.Tween.prototype.run,S=function(e){return e};s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=S),M.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}})}var H=s.fn.load,R=s.event.add,N=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],i=s.event.props;if(i.length){u("jQuery.event.props are deprecated and removed: "+i.join());while(i.length)s.event.addProp(i.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(i=n.props)&&i.length))while(i.length)s.event.addProp(i.pop());return t=N.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),R.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?H.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function C(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function T(e){var t=e.replace(P,"<$1></$2>");t!==e&&C(e)!==C(t)&&u("HTML tags must be properly nested and closed: "+e)}var P=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return T(e),e.replace(P,"<$1></$2>")}},s.htmlPrefilter=function(e){return T(e),q(e)};var D=s.fn.offset;if(s.fn.offset=function(){var e,t=this[0];if(t&&t.nodeType)return e=(t.ownerDocument||n.document).documentElement,s.contains(e,t)?D.apply(this,arguments):(u("jQuery.fn.offset() requires an element connected to a document"),{top:0,left:0});u("jQuery.fn.offset() requires a valid DOM element")},s.ajax){var E=s.param;s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),E.call(this,e,t)}}var _=s.fn.andSelf||s.fn.addBack;if(s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),_.apply(this,arguments)},s.Deferred){var F=s.Deferred,O=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]];s.Deferred=function(e){var o=F(),a=o.promise();return o.pipe=a.pipe=function(){var i=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(O,function(e,t){var r="function"==typeof i[e]&&i[e];o[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),i=null}).promise()},e&&e.call(o,o),o},s.Deferred.exceptionHook=F.exceptionHook}return s});
;

// ***************************
// js.compressed/jquery/jquery-ui-1.12.1.custom.min.js
// ***************************
/*
 jQuery UI - v1.12.1 - 2020-05-28
 http://jqueryui.com
 Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/slider.js, widgets/tabs.js
 Copyright jQuery Foundation and other contributors; Licensed MIT  jQuery UI Widget 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Position 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/position/
 jQuery UI :data 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Disable Selection 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Focusable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Form Reset Mixin 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Keycode 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Labels 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Scroll Parent 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabbable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Unique ID 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Mouse 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Draggable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Droppable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Resizable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Sortable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Accordion 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Menu 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Autocomplete 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Controlgroup 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Checkboxradio 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Button 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Dialog 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Slider 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabs 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):d(jQuery)})(function(d){d.ui=d.ui||{};if(!d.ui.version){d.ui.version="1.12.1";var F=0,E=Array.prototype.slice;d.cleanData=function(a){return function(b){var c,e,f;for(f=0;null!=(e=b[f]);f++)try{(c=d._data(e,"events"))&&c.remove&&d(e).triggerHandler("remove")}catch(g){}a(b)}}(d.cleanData);d.widget=function(a,b,c){var e={},f=a.split(".")[0];a=a.split(".")[1];var g=f+"-"+a;c||(c=b,b=d.Widget);d.isArray(c)&&(c=d.extend.apply(null,
[{}].concat(c)));d.expr[":"][g.toLowerCase()]=function(a){return!!d.data(a,g)};d[f]=d[f]||{};var h=d[f][a];var k=d[f][a]=function(a,b){if(!this._createWidget)return new k(a,b);arguments.length&&this._createWidget(a,b)};d.extend(k,h,{version:c.version,_proto:d.extend({},c),_childConstructors:[]});var m=new b;m.options=d.widget.extend({},m.options);d.each(c,function(a,c){d.isFunction(c)?e[a]=function(){function d(){return b.prototype[a].apply(this,arguments)}function e(c){return b.prototype[a].apply(this,
c)}return function(){var a=this._super,b=this._superApply;this._super=d;this._superApply=e;var f=c.apply(this,arguments);this._super=a;this._superApply=b;return f}}():e[a]=c});k.prototype=d.widget.extend(m,{widgetEventPrefix:h?m.widgetEventPrefix||a:a},e,{constructor:k,namespace:f,widgetName:a,widgetFullName:g});h?(d.each(h._childConstructors,function(a,b){a=b.prototype;d.widget(a.namespace+"."+a.widgetName,k,b._proto)}),delete h._childConstructors):b._childConstructors.push(k);d.widget.bridge(a,
k);return k};d.widget.extend=function(a){for(var b=E.call(arguments,1),c=0,e=b.length,f,g;c<e;c++)for(f in b[c])g=b[c][f],b[c].hasOwnProperty(f)&&void 0!==g&&(d.isPlainObject(g)?a[f]=d.isPlainObject(a[f])?d.widget.extend({},a[f],g):d.widget.extend({},g):a[f]=g);return a};d.widget.bridge=function(a,b){var c=b.prototype.widgetFullName||a;d.fn[a]=function(e){var f="string"===typeof e,g=E.call(arguments,1),h=this;f?this.length||"instance"!==e?this.each(function(){var b=d.data(this,c);if("instance"===
e)return h=b,!1;if(!b)return d.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+e+"'");if(!d.isFunction(b[e])||"_"===e.charAt(0))return d.error("no such method '"+e+"' for "+a+" widget instance");var f=b[e].apply(b,g);if(f!==b&&void 0!==f)return h=f&&f.jquery?h.pushStack(f.get()):f,!1}):h=void 0:(g.length&&(e=d.widget.extend.apply(null,[e].concat(g))),this.each(function(){var a=d.data(this,c);a?(a.option(e||{}),a._init&&a._init()):d.data(this,c,new b(e,this))}));
return h}};d.Widget=function(){};d.Widget._childConstructors=[];d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(a,b){b=d(b||this.defaultElement||this)[0];this.element=d(b);this.uuid=F++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=d();this.hoverable=d();this.focusable=d();this.classesElementLookup={};b!==this&&(d.data(b,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===
b&&this.destroy()}}),this.document=d(b.style?b.ownerDocument:b.document||b),this.window=d(this.document[0].defaultView||this.document[0].parentWindow));this.options=d.widget.extend({},this.options,this._getCreateOptions(),a);this._create();this.options.disabled&&this._setOptionDisabled(this.options.disabled);this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){var a=this;
this._destroy();d.each(this.classesElementLookup,function(b,c){a._removeClass(c,b)});this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace)},_destroy:d.noop,widget:function(){return this.element},option:function(a,b){var c=a,e;if(0===arguments.length)return d.widget.extend({},this.options);if("string"===typeof a){c={};var f=a.split(".");a=f.shift();if(f.length){var g=c[a]=d.widget.extend({},
this.options[a]);for(e=0;e<f.length-1;e++)g[f[e]]=g[f[e]]||{},g=g[f[e]];a=f.pop();if(1===arguments.length)return void 0===g[a]?null:g[a];g[a]=b}else{if(1===arguments.length)return void 0===this.options[a]?null:this.options[a];c[a]=b}}this._setOptions(c);return this},_setOptions:function(a){for(var b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){"classes"===a&&this._setOptionClasses(b);this.options[a]=b;"disabled"===a&&this._setOptionDisabled(b);return this},_setOptionClasses:function(a){var b;
for(b in a){var c=this.classesElementLookup[b];if(a[b]!==this.options.classes[b]&&c&&c.length){var e=d(c.get());this._removeClass(c,b);e.addClass(this._classes({element:e,keys:b,classes:a,add:!0}))}}},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a);a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},
_classes:function(a){function b(b,g){var f;for(f=0;f<b.length;f++){var k=e.classesElementLookup[b[f]]||d();k=a.add?d(d.unique(k.get().concat(a.element.get()))):d(k.not(a.element).get());e.classesElementLookup[b[f]]=k;c.push(b[f]);g&&a.classes[b[f]]&&c.push(a.classes[b[f]])}}var c=[],e=this;a=d.extend({element:this.element,classes:this.options.classes||{}},a);this._on(a.element,{remove:"_untrackClassesElement"});a.keys&&b(a.keys.match(/\S+/g)||[],!0);a.extra&&b(a.extra.match(/\S+/g)||[]);return c.join(" ")},
_untrackClassesElement:function(a){var b=this;d.each(b.classesElementLookup,function(c,e){-1!==d.inArray(a.target,e)&&(b.classesElementLookup[c]=d(e.not(a.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"===typeof d?d:c;var e="string"===typeof a||null===a;a={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};a.element.toggleClass(this._classes(a),d);return this},
_on:function(a,b,c){var e,f=this;"boolean"!==typeof a&&(c=b,b=a,a=!1);c?(b=e=d(b),this.bindings=this.bindings.add(b)):(c=b,b=this.element,e=this.widget());d.each(c,function(c,h){function g(){if(a||!0!==f.options.disabled&&!d(this).hasClass("ui-state-disabled"))return("string"===typeof h?f[h]:h).apply(f,arguments)}"string"!==typeof h&&(g.guid=h.guid=h.guid||g.guid||d.guid++);var m=c.match(/^([\w:-]*)\s*(.*)$/);c=m[1]+f.eventNamespace;if(m=m[2])e.on(c,m,g);else b.on(c,g)})},_off:function(a,b){b=(b||
"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;a.off(b).off(b);this.bindings=d(this.bindings.not(a).get());this.focusable=d(this.focusable.not(a).get());this.hoverable=d(this.hoverable.not(a).get())},_delay:function(a,b){var c=this;return setTimeout(function(){return("string"===typeof a?c[a]:a).apply(c,arguments)},b||0)},_hoverable:function(a){this.hoverable=this.hoverable.add(a);this._on(a,{mouseenter:function(a){this._addClass(d(a.currentTarget),null,"ui-state-hover")},mouseleave:function(a){this._removeClass(d(a.currentTarget),
null,"ui-state-hover")}})},_focusable:function(a){this.focusable=this.focusable.add(a);this._on(a,{focusin:function(a){this._addClass(d(a.currentTarget),null,"ui-state-focus")},focusout:function(a){this._removeClass(d(a.currentTarget),null,"ui-state-focus")}})},_trigger:function(a,b,c){var e,f=this.options[a];c=c||{};b=d.Event(b);b.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();b.target=this.element[0];if(a=b.originalEvent)for(e in a)e in b||(b[e]=a[e]);this.element.trigger(b,
c);return!(d.isFunction(f)&&!1===f.apply(this.element[0],[b].concat(c))||b.isDefaultPrevented())}};d.each({show:"fadeIn",hide:"fadeOut"},function(a,b){d.Widget.prototype["_"+a]=function(c,e,f){"string"===typeof e&&(e={effect:e});var g=e?!0===e||"number"===typeof e?b:e.effect||b:a;e=e||{};"number"===typeof e&&(e={duration:e});var h=!d.isEmptyObject(e);e.complete=f;e.delay&&c.delay(e.delay);if(h&&d.effects&&d.effects.effect[g])c[a](e);else if(g!==a&&c[g])c[g](e.duration,e.easing,f);else c.queue(function(b){d(this)[a]();
f&&f.call(c[0]);b()})}});(function(){function a(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function b(a){var b=a[0];return 9===b.nodeType?{width:a.width(),height:a.height(),offset:{top:0,left:0}}:d.isWindow(b)?{width:a.width(),height:a.height(),offset:{top:a.scrollTop(),left:a.scrollLeft()}}:b.preventDefault?{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}:{width:a.outerWidth(),height:a.outerHeight(),offset:a.offset()}}var c,e=Math.max,f=Math.abs,
g=/left|center|right/,h=/top|center|bottom/,k=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,l=/%$/,n=d.fn.position;d.position={scrollbarWidth:function(){if(void 0!==c)return c;var a=d("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");var b=a.children()[0];d("body").append(a);var e=b.offsetWidth;a.css("overflow","scroll");b=b.offsetWidth;e===b&&(b=a[0].clientWidth);a.remove();return c=e-b},getScrollInfo:function(a){var b=a.isWindow||
a.isDocument?"":a.element.css("overflow-x"),c=a.isWindow||a.isDocument?"":a.element.css("overflow-y");b="scroll"===b||"auto"===b&&a.width<a.element[0].scrollWidth;return{width:"scroll"===c||"auto"===c&&a.height<a.element[0].scrollHeight?d.position.scrollbarWidth():0,height:b?d.position.scrollbarWidth():0}},getWithinInfo:function(a){var b=d(a||window),c=d.isWindow(b[0]),e=!!b[0]&&9===b[0].nodeType;return{element:b,isWindow:c,isDocument:e,offset:c||e?{left:0,top:0}:d(a).offset(),scrollLeft:b.scrollLeft(),
scrollTop:b.scrollTop(),width:b.outerWidth(),height:b.outerHeight()}}};d.fn.position=function(c){if(!c||!c.of)return n.apply(this,arguments);c=d.extend({},c);var l=d(c.of),p=d.position.getWithinInfo(c.within),w=d.position.getScrollInfo(p),t=(c.collision||"flip").split(" "),u={};var q=b(l);l[0].preventDefault&&(c.at="left top");var x=q.width;var A=q.height;var B=q.offset;var v=d.extend({},B);d.each(["my","at"],function(){var a=(c[this]||"").split(" ");1===a.length&&(a=g.test(a[0])?a.concat(["center"]):
h.test(a[0])?["center"].concat(a):["center","center"]);a[0]=g.test(a[0])?a[0]:"center";a[1]=h.test(a[1])?a[1]:"center";var b=k.exec(a[0]);var d=k.exec(a[1]);u[this]=[b?b[0]:0,d?d[0]:0];c[this]=[m.exec(a[0])[0],m.exec(a[1])[0]]});1===t.length&&(t[1]=t[0]);"right"===c.at[0]?v.left+=x:"center"===c.at[0]&&(v.left+=x/2);"bottom"===c.at[1]?v.top+=A:"center"===c.at[1]&&(v.top+=A/2);var z=a(u.at,x,A);v.left+=z[0];v.top+=z[1];return this.each(function(){var b,g=d(this),h=g.outerWidth(),k=g.outerHeight(),m=
parseInt(d.css(this,"marginLeft"),10)||0,r=parseInt(d.css(this,"marginTop"),10)||0,y=h+m+(parseInt(d.css(this,"marginRight"),10)||0)+w.width,n=k+r+(parseInt(d.css(this,"marginBottom"),10)||0)+w.height,q=d.extend({},v),D=a(u.my,g.outerWidth(),g.outerHeight());"right"===c.my[0]?q.left-=h:"center"===c.my[0]&&(q.left-=h/2);"bottom"===c.my[1]?q.top-=k:"center"===c.my[1]&&(q.top-=k/2);q.left+=D[0];q.top+=D[1];var C={marginLeft:m,marginTop:r};d.each(["left","top"],function(a,b){if(d.ui.position[t[a]])d.ui.position[t[a]][b](q,
{targetWidth:x,targetHeight:A,elemWidth:h,elemHeight:k,collisionPosition:C,collisionWidth:y,collisionHeight:n,offset:[z[0]+D[0],z[1]+D[1]],my:c.my,at:c.at,within:p,elem:g})});c.using&&(b=function(a){var b=B.left-q.left,d=b+x-h,m=B.top-q.top,r=m+A-k,p={target:{element:l,left:B.left,top:B.top,width:x,height:A},element:{element:g,left:q.left,top:q.top,width:h,height:k},horizontal:0>d?"left":0<b?"right":"center",vertical:0>r?"top":0<m?"bottom":"middle"};x<h&&f(b+d)<x&&(p.horizontal="center");A<k&&f(m+
r)<A&&(p.vertical="middle");e(f(b),f(d))>e(f(m),f(r))?p.important="horizontal":p.important="vertical";c.using.call(this,a,p)});g.offset(d.extend(q,{using:b}))})};d.ui.position={fit:{left:function(a,b){var c=b.within,d=c.isWindow?c.scrollLeft:c.offset.left,f=c.width,g=a.left-b.collisionPosition.marginLeft;c=d-g;var h=g+b.collisionWidth-f-d;b.collisionWidth>f?0<c&&0>=h?(b=a.left+c+b.collisionWidth-f-d,a.left+=c-b):a.left=0<h&&0>=c?d:c>h?d+f-b.collisionWidth:d:a.left=0<c?a.left+c:0<h?a.left-h:e(a.left-
g,a.left)},top:function(a,b){var c=b.within,d=c.isWindow?c.scrollTop:c.offset.top,f=b.within.height,g=a.top-b.collisionPosition.marginTop;c=d-g;var h=g+b.collisionHeight-f-d;b.collisionHeight>f?0<c&&0>=h?(b=a.top+c+b.collisionHeight-f-d,a.top+=c-b):a.top=0<h&&0>=c?d:c>h?d+f-b.collisionHeight:d:a.top=0<c?a.top+c:0<h?a.top-h:e(a.top-g,a.top)}},flip:{left:function(a,b){var c=b.within,d=c.offset.left+c.scrollLeft,e=c.width,g=c.isWindow?c.scrollLeft:c.offset.left,h=a.left-b.collisionPosition.marginLeft;
c=h-g;var k=h+b.collisionWidth-e-g;h="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0;var m="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,l=-2*b.offset[0];if(0>c){if(b=a.left+h+m+l+b.collisionWidth-e-d,0>b||b<f(c))a.left+=h+m+l}else 0<k&&(b=a.left-b.collisionPosition.marginLeft+h+m+l-g,0<b||f(b)<k)&&(a.left+=h+m+l)},top:function(a,b){var c=b.within,d=c.offset.top+c.scrollTop,e=c.height,g=c.isWindow?c.scrollTop:c.offset.top,h=a.top-b.collisionPosition.marginTop;c=h-
g;var k=h+b.collisionHeight-e-g;h="top"===b.my[1]?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0;var m="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,l=-2*b.offset[1];if(0>c){if(b=a.top+h+m+l+b.collisionHeight-e-d,0>b||b<f(c))a.top+=h+m+l}else 0<k&&(b=a.top-b.collisionPosition.marginTop+h+m+l-g,0<b||f(b)<k)&&(a.top+=h+m+l)}},flipfit:{left:function(){d.ui.position.flip.left.apply(this,arguments);d.ui.position.fit.left.apply(this,arguments)},top:function(){d.ui.position.flip.top.apply(this,
arguments);d.ui.position.fit.top.apply(this,arguments)}}}})();d.extend(d.expr[":"],{data:d.expr.createPseudo?d.expr.createPseudo(function(a){return function(b){return!!d.data(b,a)}}):function(a,b,c){return!!d.data(a,c[3])}});d.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}});
d.ui.focusable=function(a,b){var c=a.nodeName.toLowerCase();if("area"===c){b=a.parentNode;c=b.name;if(!a.href||!c||"map"!==b.nodeName.toLowerCase())return!1;a=d("img[usemap='#"+c+"']");return 0<a.length&&a.is(":visible")}/^(input|select|textarea|button|object)$/.test(c)?(b=!a.disabled)&&(c=d(a).closest("fieldset")[0])&&(b=!c.disabled):b="a"===c?a.href||b:b;if(b=b&&d(a).is(":visible")){a=d(a);for(b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");b="hidden"!==b}return b};d.extend(d.expr[":"],
{focusable:function(a){return d.ui.focusable(a,null!=d.attr(a,"tabindex"))}});d.fn.form=function(){return"string"===typeof this[0].form?this.closest("form"):d(this[0].form)};d.ui.formResetMixin={_formResetHandler:function(){var a=d(this);setTimeout(function(){var b=a.data("ui-form-reset-instances");d.each(b,function(){this.refresh()})})},_bindFormResetHandler:function(){this.form=this.element.form();if(this.form.length){var a=this.form.data("ui-form-reset-instances")||[];if(!a.length)this.form.on("reset.ui-form-reset",
this._formResetHandler);a.push(this);this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var a=this.form.data("ui-form-reset-instances");a.splice(d.inArray(this,a),1);a.length?this.form.data("ui-form-reset-instances",a):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}};d.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,
UP:38};d.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(b){return b.replace(a,"\\$1")}}();d.fn.labels=function(){var a;if(this[0].labels&&this[0].labels.length)return this.pushStack(this[0].labels);var b=this.eq(0).parents("label");if(a=this.attr("id")){var c=this.eq(0).parents().last();c=c.add(c.length?c.siblings():this.siblings());a="label[for='"+d.ui.escapeSelector(a)+"']";b=b.add(c.find(a).addBack(a))}return this.pushStack(b)};d.fn.scrollParent=function(a){var b=
this.css("position"),c="absolute"===b,e=a?/(auto|scroll|hidden)/:/(auto|scroll)/;a=this.parents().filter(function(){var a=d(this);return c&&"static"===a.css("position")?!1:e.test(a.css("overflow")+a.css("overflow-y")+a.css("overflow-x"))}).eq(0);return"fixed"!==b&&a.length?a:d(this[0].ownerDocument||document)};d.extend(d.expr[":"],{tabbable:function(a){var b=d.attr(a,"tabindex"),c=null!=b;return(!c||0<=b)&&d.ui.focusable(a,c)}});d.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||
(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&d(this).removeAttr("id")})}});d.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var z=!1;d(document).on("mouseup",function(){z=!1});d.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.on("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).on("click."+
this.widgetName,function(b){if(!0===d.data(b.target,a.widgetName+".preventClickEvent"))return d.removeData(b.target,a.widgetName+".preventClickEvent"),b.stopImmediatePropagation(),!1});this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName);this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(a){if(!z){this._mouseMoved=!1;this._mouseStarted&&this._mouseUp(a);
this._mouseDownEvent=a;var b=this,c=1===a.which,e="string"===typeof this.options.cancel&&a.target.nodeName?d(a.target).closest(this.options.cancel).length:!1;if(!c||e||!this._mouseCapture(a))return!0;this.mouseDelayMet=!this.options.delay;this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){b.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=!1!==this._mouseStart(a),!this._mouseStarted))return a.preventDefault(),!0;!0===d.data(a.target,
this.widgetName+".preventClickEvent")&&d.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(a){return b._mouseMove(a)};this._mouseUpDelegate=function(a){return b._mouseUp(a)};this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return z=!0}},_mouseMove:function(a){if(this._mouseMoved){if(d.ui.ie&&(!document.documentMode||9>document.documentMode)&&!a.button)return this._mouseUp(a);
if(!a.which)if(a.originalEvent.altKey||a.originalEvent.ctrlKey||a.originalEvent.metaKey||a.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(a)}if(a.which||a.button)this._mouseMoved=!0;if(this._mouseStarted)return this._mouseDrag(a),a.preventDefault();this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&((this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,a))?this._mouseDrag(a):this._mouseUp(a));return!this._mouseStarted},_mouseUp:function(a){this.document.off("mousemove."+
this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);this._mouseStarted&&(this._mouseStarted=!1,a.target===this._mouseDownEvent.target&&d.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a));this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer);z=this.ignoreMissingWhich=!1;a.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-
a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});d.ui.plugin={add:function(a,b,c){var e;a=d.ui[a].prototype;for(e in c)a.plugins[e]=a.plugins[e]||[],a.plugins[e].push([b,c[e]])},call:function(a,b,c,d){if((b=a.plugins[b])&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(d=0;d<b.length;d++)a.options[b[d][0]]&&b[d][1].apply(a.element,
c)}};d.ui.safeActiveElement=function(a){try{var b=a.activeElement}catch(c){b=a.body}b||(b=a.body);b.nodeName||(b=a.body);return b};d.ui.safeBlur=function(a){a&&"body"!==a.nodeName.toLowerCase()&&d(a).trigger("blur")};d.widget("ui.draggable",d.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,
scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative();this.options.addClasses&&this._addClass("ui-draggable");this._setHandleClassName();this._mouseInit()},_setOption:function(a,b){this._super(a,b);"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?
this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(a){var b=this.options;if(this.helper||b.disabled||0<d(a.target).closest(".ui-resizable-handle").length)return!1;this.handle=this._getHandle(a);if(!this.handle)return!1;this._blurActiveElement(a);this._blockFrames(!0===b.iframeFix?"iframe":b.iframeFix);return!0},_blockFrames:function(a){this.iframeBlocks=this.document.find(a).map(function(){var a=d(this);return d("<div>").css("position","absolute").appendTo(a.parent()).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).offset(a.offset())[0]})},
_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(a){var b=d.ui.safeActiveElement(this.document[0]);d(a.target).closest(b).length||d.ui.safeBlur(b)},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._addClass(this.helper,"ui-draggable-dragging");this._cacheHelperProportions();d.ui.ddmanager&&(d.ui.ddmanager.current=this);this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=
this.helper.scrollParent(!0);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===d(this).css("position")}).length;this.positionAbs=this.element.offset();this._refreshOffsets(a);this.originalPosition=this.position=this._generatePosition(a,!1);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this._setContainment();if(!1===this._trigger("start",a))return this._clear(),!1;
this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this._mouseDrag(a,!0);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return!0},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(a,b){this.hasFixedAncestor&&
(this.offset.parent=this._getParentOffset());this.position=this._generatePosition(a,!0);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(!1===this._trigger("drag",a,b))return this._mouseUp(new d.Event("mouseup",a)),!1;this.position=b.position}this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return!1},_mouseStop:function(a){var b=this,c=!1;d.ui.ddmanager&&!this.options.dropBehaviour&&
(c=d.ui.ddmanager.drop(this,a));this.dropped&&(c=this.dropped,this.dropped=!1);"invalid"===this.options.revert&&!c||"valid"===this.options.revert&&c||!0===this.options.revert||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)?d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==b._trigger("stop",a)&&b._clear()}):!1!==this._trigger("stop",a)&&this._clear();return!1},_mouseUp:function(a){this._unblockFrames();d.ui.ddmanager&&
d.ui.ddmanager.dragStop(this,a);this.handleElement.is(a.target)&&this.element.trigger("focus");return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp(new d.Event("mouseup",{target:this.element[0]})):this._clear();return this},_getHandle:function(a){return this.options.handle?!!d(a.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):
this.element;this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(a){var b=this.options,c=d.isFunction(b.helper);a=c?d(b.helper.apply(this.element[0],[a])):"clone"===b.helper?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo("parent"===b.appendTo?this.element[0].parentNode:b.appendTo);c&&a[0]===this.element[0]&&this._setPositionRelative();
a[0]===this.element[0]||/(fixed|absolute)/.test(a.css("position"))||a.css("position","absolute");return a},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(a){"string"===typeof a&&(a=a.split(" "));d.isArray(a)&&(a={left:+a[0],top:+a[1]||0});"left"in a&&(this.offset.click.left=a.left+this.margins.left);"right"in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left);
"top"in a&&(this.offset.click.top=a.top+this.margins.top);"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var a=this.offsetParent.offset(),b=this.document[0];"absolute"===this.cssPosition&&this.scrollParent[0]!==b&&d.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop());
this._isRootNode(this.offsetParent[0])&&(a={top:0,left:0});return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),
10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a;var b=this.options;var c=this.document[0];this.relativeContainer=
null;if(b.containment)if("window"===b.containment)this.containment=[d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,d(window).scrollLeft()+d(window).width()-this.helperProportions.width-this.margins.left,d(window).scrollTop()+(d(window).height()||c.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];else if("document"===b.containment)this.containment=[0,0,d(c).width()-this.helperProportions.width-
this.margins.left,(d(c).height()||c.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];else if(b.containment.constructor===Array)this.containment=b.containment;else{if("parent"===b.containment&&(b.containment=this.helper[0].parentNode),c=d(b.containment),a=c[0])b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),
10)||0),(b?Math.max(a.scrollWidth,a.offsetWidth):a.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(a.scrollHeight,a.offsetHeight):a.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c}else this.containment=null},_convertPositionTo:function(a,
b){b||(b=this.position);a="absolute"===a?1:-1;var c=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.offset.scroll.top:c?0:this.offset.scroll.top)*a,left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.offset.scroll.left:c?0:this.offset.scroll.left)*a}},_generatePosition:function(a,b){var c=this.options,d=this._isRootNode(this.scrollParent[0]);var f=a.pageX;var g=
a.pageY;d&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()});if(b){if(this.containment){if(this.relativeContainer){var h=this.relativeContainer.offset();h=[this.containment[0]+h.left,this.containment[1]+h.top,this.containment[2]+h.left,this.containment[3]+h.top]}else h=this.containment;a.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left);a.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top);a.pageX-this.offset.click.left>
h[2]&&(f=h[2]+this.offset.click.left);a.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}c.grid&&(g=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY,g=h?g-this.offset.click.top>=h[1]||g-this.offset.click.top>h[3]?g:g-this.offset.click.top>=h[1]?g-c.grid[1]:g+c.grid[1]:g,f=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX,f=h?f-this.offset.click.left>=h[0]||f-this.offset.click.left>
h[2]?f:f-this.offset.click.left>=h[0]?f-c.grid[0]:f+c.grid[0]:f);"y"===c.axis&&(f=this.originalPageX);"x"===c.axis&&(g=this.originalPageY)}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,
"ui-draggable-dragging");this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove();this.helper=null;this.cancelHelperRemoval=!1;this.destroyOnClear&&this.destroy()},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c,this],!0);/^(drag|start|stop)/.test(a)&&(this.positionAbs=this._convertPositionTo("absolute"),c.offset=this.positionAbs);return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,
originalPosition:this.originalPosition,offset:this.positionAbs}}});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b,c){var e=d.extend({},b,{item:c.element});c.sortables=[];d(c.options.connectToSortable).each(function(){var b=d(this).sortable("instance");b&&!b.options.disabled&&(c.sortables.push(b),b.refreshPositions(),b._trigger("activate",a,e))})},stop:function(a,b,c){var e=d.extend({},b,{item:c.element});c.cancelHelperRemoval=!1;d.each(c.sortables,function(){this.isOver?(this.isOver=
0,c.cancelHelperRemoval=!0,this.cancelHelperRemoval=!1,this._storedCSS={position:this.placeholder.css("position"),top:this.placeholder.css("top"),left:this.placeholder.css("left")},this._mouseStop(a),this.options.helper=this.options._helper):(this.cancelHelperRemoval=!0,this._trigger("deactivate",a,e))})},drag:function(a,b,c){d.each(c.sortables,function(){var e=!1,f=this;f.positionAbs=c.positionAbs;f.helperProportions=c.helperProportions;f.offset.click=c.offset.click;f._intersectsWith(f.containerCache)&&
(e=!0,d.each(c.sortables,function(){this.positionAbs=c.positionAbs;this.helperProportions=c.helperProportions;this.offset.click=c.offset.click;this!==f&&this._intersectsWith(this.containerCache)&&d.contains(f.element[0],this.element[0])&&(e=!1);return e}));e?(f.isOver||(f.isOver=1,c._parent=b.helper.parent(),f.currentItem=b.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return b.helper[0]},a.target=f.currentItem[0],f._mouseCapture(a,
!0),f._mouseStart(a,!0,!0),f.offset.click.top=c.offset.click.top,f.offset.click.left=c.offset.click.left,f.offset.parent.left-=c.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=c.offset.parent.top-f.offset.parent.top,c._trigger("toSortable",a),c.dropped=f.element,d.each(c.sortables,function(){this.refreshPositions()}),c.currentItem=c.element,f.fromOutside=c),f.currentItem&&(f._mouseDrag(a),b.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,
f.options.revert=!1,f._trigger("out",a,f._uiHash(f)),f._mouseStop(a,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),b.helper.appendTo(c._parent),c._refreshOffsets(a),b.position=c._generatePosition(a,!0),c._trigger("fromSortable",a),c.dropped=!1,d.each(c.sortables,function(){this.refreshPositions()}))})}});d.ui.plugin.add("draggable","cursor",{start:function(a,b,c){a=d("body");c=c.options;a.css("cursor")&&(c._cursor=a.css("cursor"));a.css("cursor",
c.cursor)},stop:function(a,b,c){a=c.options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b,c){a=d(b.helper);c=c.options;a.css("opacity")&&(c._opacity=a.css("opacity"));a.css("opacity",c.opacity)},stop:function(a,b,c){a=c.options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1));c.scrollParentNotHidden[0]!==
c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(a,b,c){b=c.options;var e=!1,f=c.scrollParentNotHidden[0],g=c.document[0];f!==g&&"HTML"!==f.tagName?(b.axis&&"x"===b.axis||(c.overflowOffset.top+f.offsetHeight-a.pageY<b.scrollSensitivity?f.scrollTop=e=f.scrollTop+b.scrollSpeed:a.pageY-c.overflowOffset.top<b.scrollSensitivity&&(f.scrollTop=e=f.scrollTop-b.scrollSpeed)),b.axis&&"y"===b.axis||(c.overflowOffset.left+f.offsetWidth-
a.pageX<b.scrollSensitivity?f.scrollLeft=e=f.scrollLeft+b.scrollSpeed:a.pageX-c.overflowOffset.left<b.scrollSensitivity&&(f.scrollLeft=e=f.scrollLeft-b.scrollSpeed))):(b.axis&&"x"===b.axis||(a.pageY-d(g).scrollTop()<b.scrollSensitivity?e=d(g).scrollTop(d(g).scrollTop()-b.scrollSpeed):d(window).height()-(a.pageY-d(g).scrollTop())<b.scrollSensitivity&&(e=d(g).scrollTop(d(g).scrollTop()+b.scrollSpeed))),b.axis&&"y"===b.axis||(a.pageX-d(g).scrollLeft()<b.scrollSensitivity?e=d(g).scrollLeft(d(g).scrollLeft()-
b.scrollSpeed):d(window).width()-(a.pageX-d(g).scrollLeft())<b.scrollSensitivity&&(e=d(g).scrollLeft(d(g).scrollLeft()+b.scrollSpeed))));!1!==e&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(c,a)}});d.ui.plugin.add("draggable","snap",{start:function(a,b,c){a=c.options;c.snapElements=[];d(a.snap.constructor!==String?a.snap.items||":data(ui-draggable)":a.snap).each(function(){var a=d(this),b=a.offset();this!==c.element[0]&&c.snapElements.push({item:this,width:a.outerWidth(),height:a.outerHeight(),
top:b.top,left:b.left})})},drag:function(a,b,c){var e,f=c.options,g=f.snapTolerance,h=b.offset.left,k=h+c.helperProportions.width,m=b.offset.top,l=m+c.helperProportions.height;for(e=c.snapElements.length-1;0<=e;e--){var n=c.snapElements[e].left-c.margins.left;var p=n+c.snapElements[e].width;var r=c.snapElements[e].top-c.margins.top;var y=r+c.snapElements[e].height;if(k<n-g||h>p+g||l<r-g||m>y+g||!d.contains(c.snapElements[e].item.ownerDocument,c.snapElements[e].item))c.snapElements[e].snapping&&c.options.snap.release&&
c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[e].item})),c.snapElements[e].snapping=!1;else{if("inner"!==f.snapMode){var w=Math.abs(r-l)<=g;var t=Math.abs(y-m)<=g;var u=Math.abs(n-k)<=g;var q=Math.abs(p-h)<=g;w&&(b.position.top=c._convertPositionTo("relative",{top:r-c.helperProportions.height,left:0}).top);t&&(b.position.top=c._convertPositionTo("relative",{top:y,left:0}).top);u&&(b.position.left=c._convertPositionTo("relative",{top:0,left:n-c.helperProportions.width}).left);
q&&(b.position.left=c._convertPositionTo("relative",{top:0,left:p}).left)}var x=w||t||u||q;"outer"!==f.snapMode&&(w=Math.abs(r-m)<=g,t=Math.abs(y-l)<=g,u=Math.abs(n-h)<=g,q=Math.abs(p-k)<=g,w&&(b.position.top=c._convertPositionTo("relative",{top:r,left:0}).top),t&&(b.position.top=c._convertPositionTo("relative",{top:y-c.helperProportions.height,left:0}).top),u&&(b.position.left=c._convertPositionTo("relative",{top:0,left:n}).left),q&&(b.position.left=c._convertPositionTo("relative",{top:0,left:p-
c.helperProportions.width}).left));!c.snapElements[e].snapping&&(w||t||u||q||x)&&c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[e].item}));c.snapElements[e].snapping=w||t||u||q||x}}}});d.ui.plugin.add("draggable","stack",{start:function(a,b,c){a=d.makeArray(d(c.options.stack)).sort(function(a,b){return(parseInt(d(a).css("zIndex"),10)||0)-(parseInt(d(b).css("zIndex"),10)||0)});if(a.length){var e=parseInt(d(a[0]).css("zIndex"),10)||0;d(a).each(function(a){d(this).css("zIndex",
e+a)});this.css("zIndex",e+a.length)}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b,c){a=d(b.helper);c=c.options;a.css("zIndex")&&(c._zIndex=a.css("zIndex"));a.css("zIndex",c.zIndex)},stop:function(a,b,c){a=c.options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}});d.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var a,
b=this.options,c=b.accept;this.isover=!1;this.isout=!0;this.accept=d.isFunction(c)?c:function(a){return a.is(c)};this.proportions=function(){if(arguments.length)a=arguments[0];else return a?a:a={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}};this._addToManager(b.scope);b.addClasses&&this._addClass("ui-droppable")},_addToManager:function(a){d.ui.ddmanager.droppables[a]=d.ui.ddmanager.droppables[a]||[];d.ui.ddmanager.droppables[a].push(this)},_splice:function(a){for(var b=0;b<
a.length;b++)a[b]===this&&a.splice(b,1)},_destroy:function(){this._splice(d.ui.ddmanager.droppables[this.options.scope])},_setOption:function(a,b){"accept"===a?this.accept=d.isFunction(b)?b:function(a){return a.is(b)}:"scope"===a&&(this._splice(d.ui.ddmanager.droppables[this.options.scope]),this._addToManager(b));this._super(a,b)},_activate:function(a){var b=d.ui.ddmanager.current;this._addActiveClass();b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;
this._removeActiveClass();b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;b&&(b.currentItem||b.element)[0]!==this.element[0]&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this._addHoverClass(),this._trigger("over",a,this.ui(b)))},_out:function(a){var b=d.ui.ddmanager.current;b&&(b.currentItem||b.element)[0]!==this.element[0]&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this._removeHoverClass(),this._trigger("out",a,this.ui(b)))},
_drop:function(a,b){var c=b||d.ui.ddmanager.current,e=!1;if(!c||(c.currentItem||c.element)[0]===this.element[0])return!1;this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var b=d(this).droppable("instance");if(b.options.greedy&&!b.options.disabled&&b.options.scope===c.options.scope&&b.accept.call(b.element[0],c.currentItem||c.element)&&C(c,d.extend(b,{offset:b.element.offset()}),b.options.tolerance,a))return e=!0,!1});return e?!1:this.accept.call(this.element[0],
c.currentItem||c.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",a,this.ui(c)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});
var C=d.ui.intersect=function(){return function(a,b,c,d){if(!b.offset)return!1;var e=(a.positionAbs||a.position.absolute).left+a.margins.left,g=(a.positionAbs||a.position.absolute).top+a.margins.top,h=e+a.helperProportions.width,k=g+a.helperProportions.height,m=b.offset.left,l=b.offset.top,n=m+b.proportions().width,p=l+b.proportions().height;switch(c){case "fit":return m<=e&&h<=n&&l<=g&&k<=p;case "intersect":return m<e+a.helperProportions.width/2&&h-a.helperProportions.width/2<n&&l<g+a.helperProportions.height/
2&&k-a.helperProportions.height/2<p;case "pointer":a=d.pageY;c=b.proportions().height;if(l=a>=l&&a<l+c)d=d.pageX,b=b.proportions().width,l=d>=m&&d<m+b;return l;case "touch":return(g>=l&&g<=p||k>=l&&k<=p||g<l&&k>p)&&(e>=m&&e<=n||h>=m&&h<=n||e<m&&h>n);default:return!1}}}();d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c,e=d.ui.ddmanager.droppables[a.options.scope]||[],f=b?b.type:null,g=(a.currentItem||a.element).find(":data(ui-droppable)").addBack();var h=0;
a:for(;h<e.length;h++)if(!(e[h].options.disabled||a&&!e[h].accept.call(e[h].element[0],a.currentItem||a.element))){for(c=0;c<g.length;c++)if(g[c]===e[h].element[0]){e[h].proportions().height=0;continue a}e[h].visible="none"!==e[h].element.css("display");e[h].visible&&("mousedown"===f&&e[h]._activate.call(e[h],b),e[h].offset=e[h].element.offset(),e[h].proportions({width:e[h].element[0].offsetWidth,height:e[h].element[0].offsetHeight}))}},drop:function(a,b){var c=!1;d.each((d.ui.ddmanager.droppables[a.options.scope]||
[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&C(a,this,this.options.tolerance,b)&&(c=this._drop.call(this,b)||c),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,b)))});return c},dragStart:function(a,b){a.element.parentsUntil("body").on("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&
d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var c=C(a,this,this.options.tolerance,b);var e=!c&&this.isover?"isout":c&&!this.isover?"isover":null;if(e){if(this.options.greedy){var f=this.options.scope;c=this.element.parents(":data(ui-droppable)").filter(function(){return d(this).droppable("instance").options.scope===f});if(c.length){var g=d(c[0]).droppable("instance");g.greedyChild="isover"===
e}}g&&"isover"===e&&(g.isover=!1,g.isout=!0,g._out.call(g,b));this[e]=!0;this["isout"===e?"isover":"isout"]=!1;this["isover"===e?"_over":"_out"].call(this,b);g&&"isout"===e&&(g.isout=!1,g.isover=!0,g._over.call(g,b))}}})},dragStop:function(a,b){a.element.parentsUntil("body").off("scroll.droppable");a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)}};!1!==d.uiBackCompat&&d.widget("ui.droppable",d.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super();
this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super();this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super();this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super();this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}});d.widget("ui.resizable",d.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",
options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(a,b){if("hidden"===d(a).css("overflow"))return!1;b=b&&"left"===
b?"scrollLeft":"scrollTop";if(0<a[b])return!0;a[b]=1;var c=0<a[b];a[b]=0;return c},_create:function(){var a=this.options,b=this;this._addClass("ui-resizable");d.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap(d("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),
width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));this.elementIsWrapper=!0;var c={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};this.element.css(c);this.originalElement.css("margin",
0);this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css(c);this._proportionallyResize()}this._setupHandles();if(a.autoHide)d(this.element).on("mouseenter",function(){a.disabled||(b._removeClass("ui-resizable-autohide"),b._handles.show())}).on("mouseleave",function(){a.disabled||b.resizing||(b._addClass("ui-resizable-autohide"),
b._handles.hide())});this._mouseInit()},_destroy:function(){this._mouseDestroy();var a=function(a){d(a).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){a(this.element);var b=this.element;this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b);b.remove()}this.originalElement.css("resize",this.originalResizeStyle);a(this.originalElement);
return this},_setOption:function(a,b){this._super(a,b);switch(a){case "handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var a=this.options,b,c=this;this.handles=a.handles||(d(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");this._handles=d();if(this.handles.constructor===String){"all"===this.handles&&
(this.handles="n,e,s,w,se,sw,ne,nw");var e=this.handles.split(",");this.handles={};for(b=0;b<e.length;b++){var f=d.trim(e[b]);var g="ui-resizable-"+f;var h=d("<div>");this._addClass(h,"ui-resizable-handle "+g);h.css({zIndex:a.zIndex});this.handles[f]=".ui-resizable-"+f;this.element.append(h)}}this._renderAxis=function(a){var b;a=a||this.element;for(b in this.handles){if(this.handles[b].constructor===String)this.handles[b]=this.element.children(this.handles[b]).first().show();else if(this.handles[b].jquery||
this.handles[b].nodeType)this.handles[b]=d(this.handles[b]),this._on(this.handles[b],{mousedown:c._mouseDown});if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){var e=d(this.handles[b],this.element);var f=/sw|ne|nw|se|n|s/.test(b)?e.outerHeight():e.outerWidth();e=["padding",/ne|nw|n/.test(b)?"Top":/se|sw|s/.test(b)?"Bottom":/^e$/.test(b)?"Right":"Left"].join("");a.css(e,f);this._proportionallyResize()}this._handles=this._handles.add(this.handles[b])}};
this._renderAxis(this.element);this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));this._handles.disableSelection();this._handles.on("mouseover",function(){c.resizing||(this.className&&(h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),c.axis=h&&h[1]?h[1]:"se")});a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(a){var b,c=!1;for(b in this.handles){var e=d(this.handles[b])[0];
if(e===a.target||d.contains(e,a.target))c=!0}return!this.options.disabled&&c},_mouseStart:function(a){var b=this.options,c=this.element;this.resizing=!0;this._renderProxy();var e=this._num(this.helper.css("left"));var f=this._num(this.helper.css("top"));b.containment&&(e+=d(b.containment).scrollLeft()||0,f+=d(b.containment).scrollTop()||0);this.offset=this.helper.offset();this.position={left:e,top:f};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:c.width(),height:c.height()};
this.originalSize=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()};this.sizeDiff={width:c.outerWidth()-c.width(),height:c.outerHeight()-c.height()};this.originalPosition={left:e,top:f};this.originalMousePosition={left:a.pageX,top:a.pageY};this.aspectRatio="number"===typeof b.aspectRatio?b.aspectRatio:this.originalSize.width/this.originalSize.height||1;e=d(".ui-resizable-"+this.axis).css("cursor");d("body").css("cursor","auto"===e?this.axis+"-resize":e);
this._addClass("ui-resizable-resizing");this._propagate("start",a);return!0},_mouseDrag:function(a){var b=this.originalMousePosition;var c=a.pageX-b.left||0;b=a.pageY-b.top||0;var e=this._change[this.axis];this._updatePrevProperties();if(!e)return!1;c=e.apply(this,[a,c,b]);this._updateVirtualBoundaries(a.shiftKey);if(this._aspectRatio||a.shiftKey)c=this._updateRatio(c,a);c=this._respectSize(c,a);this._updateCache(c);this._propagate("resize",a);c=this._applyChanges();!this._helper&&this._proportionallyResizeElements.length&&
this._proportionallyResize();d.isEmptyObject(c)||(this._updatePrevProperties(),this._trigger("resize",a,this.ui()),this._applyChanges());return!1},_mouseStop:function(a){this.resizing=!1;var b,c=this.options;if(this._helper){var e=this._proportionallyResizeElements;e=(b=e.length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:this.sizeDiff.height;b=b?0:this.sizeDiff.width;b={width:this.helper.width()-b,height:this.helper.height()-e};e=parseFloat(this.element.css("left"))+(this.position.left-
this.originalPosition.left)||null;var f=parseFloat(this.element.css("top"))+(this.position.top-this.originalPosition.top)||null;c.animate||this.element.css(d.extend(b,{top:f,left:e}));this.helper.height(this.size.height);this.helper.width(this.size.width);this._helper&&!c.animate&&this._proportionallyResize()}d("body").css("cursor","auto");this._removeClass("ui-resizable-resizing");this._propagate("stop",a);this._helper&&this.helper.remove();return!1},_updatePrevProperties:function(){this.prevPosition=
{top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px");this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px");this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px");this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px");this.helper.css(a);return a},_updateVirtualBoundaries:function(a){var b=
this.options;b={minWidth:this._isNumber(b.minWidth)?b.minWidth:0,maxWidth:this._isNumber(b.maxWidth)?b.maxWidth:Infinity,minHeight:this._isNumber(b.minHeight)?b.minHeight:0,maxHeight:this._isNumber(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a){a=b.minHeight*this.aspectRatio;var c=b.minWidth/this.aspectRatio;var d=b.maxHeight*this.aspectRatio;var f=b.maxWidth/this.aspectRatio;a>b.minWidth&&(b.minWidth=a);c>b.minHeight&&(b.minHeight=c);d<b.maxWidth&&(b.maxWidth=d);f<b.maxHeight&&(b.maxHeight=
f)}this._vBoundaries=b},_updateCache:function(a){this.offset=this.helper.offset();this._isNumber(a.left)&&(this.position.left=a.left);this._isNumber(a.top)&&(this.position.top=a.top);this._isNumber(a.height)&&(this.size.height=a.height);this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio);"sw"===d&&(a.left=b.left+
(c.width-a.width),a.top=null);"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width));return a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,f=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,g=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,h=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,k=this.originalPosition.left+this.originalSize.width,m=this.originalPosition.top+this.originalSize.height,
l=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);g&&(a.width=b.minWidth);h&&(a.height=b.minHeight);d&&(a.width=b.maxWidth);f&&(a.height=b.maxHeight);g&&l&&(a.left=k-b.minWidth);d&&l&&(a.left=k-b.maxWidth);h&&c&&(a.top=m-b.minHeight);f&&c&&(a.top=m-b.maxHeight);a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null;return a},_getPaddingPlusBorderDimensions:function(a){var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")];
for(a=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];4>b;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(a[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-
this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var a=this.options;this.elementOffset=this.element.offset();this._helper?(this.helper=this.helper||d("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex}),this.helper.appendTo("body").disableSelection()):
this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){return{left:this.originalPosition.left+b,width:this.originalSize.width-b}},n:function(a,b,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(a,b,c){return d.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[a,b,c]))},sw:function(a,b,c){return d.extend(this._change.s.apply(this,
arguments),this._change.w.apply(this,[a,b,c]))},ne:function(a,b,c){return d.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[a,b,c]))},nw:function(a,b,c){return d.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[a,b,c]))}},_propagate:function(a,b){d.ui.plugin.call(this,a,[b,this.ui()]);"resize"!==a&&this._trigger(a,b,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,
size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});d.ui.plugin.add("resizable","animate",{stop:function(a){var b=d(this).resizable("instance"),c=b.options,e=b._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&b._hasScroll(e[0],"left")?0:b.sizeDiff.height;f={width:b.size.width-(f?0:b.sizeDiff.width),height:b.size.height-g};g=parseFloat(b.element.css("left"))+(b.position.left-b.originalPosition.left)||null;var h=parseFloat(b.element.css("top"))+
(b.position.top-b.originalPosition.top)||null;b.element.animate(d.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var c={width:parseFloat(b.element.css("width")),height:parseFloat(b.element.css("height")),top:parseFloat(b.element.css("top")),left:parseFloat(b.element.css("left"))};e&&e.length&&d(e[0]).css({width:c.width,height:c.height});b._updateCache(c);b._propagate("resize",a)}})}});d.ui.plugin.add("resizable","containment",{start:function(){var a=
d(this).resizable("instance"),b=a.element;var c=a.options.containment;if(b=c instanceof d?c.get(0):/parent/.test(c)?b.parent().get(0):c)if(a.containerElement=d(b),/document/.test(c)||c===document)a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:d(document),left:0,top:0,width:d(document).width(),height:d(document).height()||document.body.parentNode.scrollHeight};else{var e=d(b);var f=[];d(["Top","Right","Left","Bottom"]).each(function(b,c){f[b]=a._num(e.css("padding"+
c))});a.containerOffset=e.offset();a.containerPosition=e.position();a.containerSize={height:e.innerHeight()-f[3],width:e.innerWidth()-f[1]};c=a.containerOffset;var g=a.containerSize.height;var h=a.containerSize.width;h=a._hasScroll(b,"left")?b.scrollWidth:h;g=a._hasScroll(b)?b.scrollHeight:g;a.parentData={element:b,left:c.left,top:c.top,width:h,height:g}}},resize:function(a){var b=d(this).resizable("instance");var c=b.options;var e=b.containerOffset;var f=b.position;a=b._aspectRatio||a.shiftKey;var g=
{top:0,left:0},h=b.containerElement,k=!0;h[0]!==document&&/static/.test(h.css("position"))&&(g=e);f.left<(b._helper?e.left:0)&&(b.size.width+=b._helper?b.position.left-e.left:b.position.left-g.left,a&&(b.size.height=b.size.width/b.aspectRatio,k=!1),b.position.left=c.helper?e.left:0);f.top<(b._helper?e.top:0)&&(b.size.height+=b._helper?b.position.top-e.top:b.position.top,a&&(b.size.width=b.size.height*b.aspectRatio,k=!1),b.position.top=b._helper?e.top:0);c=b.containerElement.get(0)===b.element.parent().get(0);
f=/relative|absolute/.test(b.containerElement.css("position"));c&&f?(b.offset.left=b.parentData.left+b.position.left,b.offset.top=b.parentData.top+b.position.top):(b.offset.left=b.element.offset().left,b.offset.top=b.element.offset().top);c=Math.abs(b.sizeDiff.width+(b._helper?b.offset.left-g.left:b.offset.left-e.left));e=Math.abs(b.sizeDiff.height+(b._helper?b.offset.top-g.top:b.offset.top-e.top));c+b.size.width>=b.parentData.width&&(b.size.width=b.parentData.width-c,a&&(b.size.height=b.size.width/
b.aspectRatio,k=!1));e+b.size.height>=b.parentData.height&&(b.size.height=b.parentData.height-e,a&&(b.size.width=b.size.height*b.aspectRatio,k=!1));k||(b.position.left=b.prevPosition.left,b.position.top=b.prevPosition.top,b.size.width=b.prevSize.width,b.size.height=b.prevSize.height)},stop:function(){var a=d(this).resizable("instance"),b=a.options,c=a.containerOffset,e=a.containerPosition,f=a.containerElement,g=d(a.helper),h=g.offset(),k=g.outerWidth()-a.sizeDiff.width;g=g.outerHeight()-a.sizeDiff.height;
a._helper&&!b.animate&&/relative/.test(f.css("position"))&&d(this).css({left:h.left-e.left-c.left,width:k,height:g});a._helper&&!b.animate&&/static/.test(f.css("position"))&&d(this).css({left:h.left-e.left-c.left,width:k,height:g})}});d.ui.plugin.add("resizable","alsoResize",{start:function(){var a=d(this).resizable("instance").options;d(a.alsoResize).each(function(){var a=d(this);a.data("ui-resizable-alsoresize",{width:parseFloat(a.width()),height:parseFloat(a.height()),left:parseFloat(a.css("left")),
top:parseFloat(a.css("top"))})})},resize:function(a,b){a=d(this).resizable("instance");var c=a.originalSize,e=a.originalPosition,f={height:a.size.height-c.height||0,width:a.size.width-c.width||0,top:a.position.top-e.top||0,left:a.position.left-e.left||0};d(a.options.alsoResize).each(function(){var a=d(this),c=d(this).data("ui-resizable-alsoresize"),e={},m=a.parents(b.originalElement[0]).length?["width","height"]:["width","height","top","left"];d.each(m,function(a,b){(a=(c[b]||0)+(f[b]||0))&&0<=a&&
(e[b]=a||null)});a.css(e)})},stop:function(){d(this).removeData("ui-resizable-alsoresize")}});d.ui.plugin.add("resizable","ghost",{start:function(){var a=d(this).resizable("instance"),b=a.size;a.ghost=a.originalElement.clone();a.ghost.css({opacity:.25,display:"block",position:"relative",height:b.height,width:b.width,margin:0,left:0,top:0});a._addClass(a.ghost,"ui-resizable-ghost");!1!==d.uiBackCompat&&"string"===typeof a.options.ghost&&a.ghost.addClass(this.options.ghost);a.ghost.appendTo(a.helper)},
resize:function(){var a=d(this).resizable("instance");a.ghost&&a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})},stop:function(){var a=d(this).resizable("instance");a.ghost&&a.helper&&a.helper.get(0).removeChild(a.ghost.get(0))}});d.ui.plugin.add("resizable","grid",{resize:function(){var a=d(this).resizable("instance"),b=a.options,c=a.size,e=a.originalSize,f=a.originalPosition,g=a.axis,h="number"===typeof b.grid?[b.grid,b.grid]:b.grid,k=h[0]||1,m=h[1]||1,l=Math.round((c.width-
e.width)/k)*k;c=Math.round((c.height-e.height)/m)*m;var n=e.width+l,p=e.height+c,r=b.maxWidth&&b.maxWidth<n,y=b.maxHeight&&b.maxHeight<p,w=b.minWidth&&b.minWidth>n,t=b.minHeight&&b.minHeight>p;b.grid=h;w&&(n+=k);t&&(p+=m);r&&(n-=k);y&&(p-=m);if(/^(se|s|e)$/.test(g))a.size.width=n,a.size.height=p;else if(/^(ne)$/.test(g))a.size.width=n,a.size.height=p,a.position.top=f.top-c;else if(/^(sw)$/.test(g))a.size.width=n,a.size.height=p,a.position.left=f.left-l;else{if(0>=p-m||0>=n-k)var u=a._getPaddingPlusBorderDimensions(this);
0<p-m?(a.size.height=p,a.position.top=f.top-c):(p=m-u.height,a.size.height=p,a.position.top=f.top+e.height-p);0<n-k?(a.size.width=n,a.position.left=f.left-l):(n=k-u.width,a.size.width=n,a.position.left=f.left+e.width-n)}}});d.widget("ui.sortable",d.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",
opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&a<b+c},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={};this._addClass("ui-sortable");
this.refresh();this.offset=this.element.offset();this._mouseInit();this._setHandleClassName();this.ready=!0},_setOption:function(a,b){this._super(a,b);"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){var a=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");d.each(this.items,function(){a._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();
for(var a=this.items.length-1;0<=a;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(a,b){var c=null,e=!1,f=this;if(this.reverting||this.options.disabled||"static"===this.options.type)return!1;this._refreshItems(a);d(a.target).parents().each(function(){if(d.data(this,f.widgetName+"-item")===f)return c=d(this),!1});d.data(a.target,f.widgetName+"-item")===f&&(c=d(a.target));if(!c||this.options.handle&&!b&&(d(this.options.handle,c).find("*").addBack().each(function(){this===
a.target&&(e=!0)}),!e))return!1;this.currentItem=c;this._removeCurrentsFromItems();return!0},_mouseStart:function(a,b,c){b=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,
top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};this.helper[0]!==this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();
b.containment&&this._setContainment();if(b.cursor&&"auto"!==b.cursor){var e=this.document.find("body");this.storedCursor=e.css("cursor");e.css("cursor",b.cursor);this.storedStylesheet=d("<style>*{ cursor: "+b.cursor+" !important; }</style>").appendTo(e)}b.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",b.opacity));b.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",b.zIndex));
this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset());this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;0<=c;c--)this.containers[c]._trigger("activate",a,this._uiHash(this));d.ui.ddmanager&&(d.ui.ddmanager.current=this);d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=!0;this._addClass(this.helper,
"ui-sortable-helper");this._mouseDrag(a);return!0},_mouseDrag:function(a){var b;var c=this.options;var e=!1;this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop+
c.scrollSpeed:a.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft+c.scrollSpeed:a.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(a.pageY-this.document.scrollTop()<c.scrollSensitivity?
e=this.document.scrollTop(this.document.scrollTop()-c.scrollSpeed):this.window.height()-(a.pageY-this.document.scrollTop())<c.scrollSensitivity&&(e=this.document.scrollTop(this.document.scrollTop()+c.scrollSpeed)),a.pageX-this.document.scrollLeft()<c.scrollSensitivity?e=this.document.scrollLeft(this.document.scrollLeft()-c.scrollSpeed):this.window.width()-(a.pageX-this.document.scrollLeft())<c.scrollSensitivity&&(e=this.document.scrollLeft(this.document.scrollLeft()+c.scrollSpeed))),!1!==e&&d.ui.ddmanager&&
!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a));this.positionAbs=this._convertPositionTo("absolute");this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px");this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px");for(c=this.items.length-1;0<=c;c--){e=this.items[c];var f=e.item[0];if((b=this._intersectsWithPointer(e))&&e.instance===this.currentContainer&&f!==this.currentItem[0]&&this.placeholder[1===b?"next":"prev"]()[0]!==
f&&!d.contains(this.placeholder[0],f)&&("semi-dynamic"===this.options.type?!d.contains(this.element[0],f):1)){this.direction=1===b?"down":"up";if("pointer"===this.options.tolerance||this._intersectsWithSides(e))this._rearrange(a,e);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return!1},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&
d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=this.placeholder.offset();var e=this.options.axis,f={};e&&"x"!==e||(f.left=b.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft));e&&"y"!==e||(f.top=b.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop));this.reverting=!0;d(this.helper).animate(f,parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,
b);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new d.Event("mouseup",{target:null}));"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var a=this.containers.length-1;0<=a;a--)this.containers[a]._trigger("deactivate",null,this._uiHash(this)),this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",null,this._uiHash(this)),this.containers[a].containerCache.over=
0)}this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),d.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem));return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};
d(b).each(function(){var b=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[\-=_](.+)/);b&&c.push((a.key||b[1]+"[]")+"="+(a.key&&a.expression?b[1]:b[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,
f=d+this.helperProportions.height,g=a.left,h=g+a.width,k=a.top,m=k+a.height,l=this.offset.click.top,n=this.offset.click.left;l="x"===this.options.axis||d+l>k&&d+l<m;n="y"===this.options.axis||b+n>g&&b+n<h;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l&&n:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&k<d+this.helperProportions.height/
2&&f-this.helperProportions.height/2<m},_intersectsWithPointer:function(a){var b="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);if(!b||!a)return!1;b=this._getDragVerticalDirection();a=this._getDragHorizontalDirection();return this.floating?"right"===a||"down"===b?2:1:b&&("down"===b?2:1)},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+
this.offset.click.top,a.top+a.height/2,a.height);a=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),d=this._getDragHorizontalDirection();return this.floating&&d?"right"===d&&a||"left"===d&&!a:c&&("down"===c&&b||"up"===c&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(0<a?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==a&&(0<a?"right":"left")},refresh:function(a){this._refreshItems(a);this._setHandleClassName();this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){function b(){f.push(this)}var c,e,f=[],g=[],h=this._connectWith();if(h&&a)for(a=h.length-1;0<=a;a--){var k=d(h[a],this.document[0]);for(c=k.length-1;0<=c;c--)(e=d.data(k[c],this.widgetFullName))&&e!==this&&!e.options.disabled&&
g.push([d.isFunction(e.options.items)?e.options.items.call(e.element):d(e.options.items,e.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),e])}g.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(a=g.length-1;0<=a;a--)g[a][0].each(b);return d(f)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+
this.widgetName+"-item)");this.items=d.grep(this.items,function(b){for(var c=0;c<a.length;c++)if(a[c]===b.item[0])return!1;return!0})},_refreshItems:function(a){this.items=[];this.containers=[this];var b,c,e,f,g=this.items,h=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),this]];if((f=this._connectWith())&&this.ready)for(b=f.length-1;0<=b;b--){var k=d(f[b],this.document[0]);for(c=k.length-1;0<=c;c--)(e=d.data(k[c],
this.widgetFullName))&&e!==this&&!e.options.disabled&&(h.push([d.isFunction(e.options.items)?e.options.items.call(e.element[0],a,{item:this.currentItem}):d(e.options.items,e.element),e]),this.containers.push(e))}for(b=h.length-1;0<=b;b--)for(a=h[b][1],k=h[b][0],c=0,f=k.length;c<f;c++)e=d(k[c]),e.data(this.widgetName+"-item",a),g.push({item:e,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(a){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):
!1;this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var b;for(b=this.items.length-1;0<=b;b--){var c=this.items[b];if(c.instance===this.currentContainer||!this.currentContainer||c.item[0]===this.currentItem[0]){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;a||(c.width=e.outerWidth(),c.height=e.outerHeight());e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);
else for(b=this.containers.length-1;0<=b;b--)e=this.containers[b].element.offset(),this.containers[b].containerCache.left=e.left,this.containers[b].containerCache.top=e.top,this.containers[b].containerCache.width=this.containers[b].element.outerWidth(),this.containers[b].containerCache.height=this.containers[b].element.outerHeight();return this},_createPlaceholder:function(a){a=a||this;var b=a.options;if(!b.placeholder||b.placeholder.constructor===String){var c=b.placeholder;b.placeholder={element:function(){var b=
a.currentItem[0].nodeName.toLowerCase(),f=d("<"+b+">",a.document[0]);a._addClass(f,"ui-sortable-placeholder",c||a.currentItem[0].className)._removeClass(f,"ui-sortable-helper");"tbody"===b?a._createTrPlaceholder(a.currentItem.find("tr").eq(0),d("<tr>",a.document[0]).appendTo(f)):"tr"===b?a._createTrPlaceholder(a.currentItem,f):"img"===b&&f.attr("src",a.currentItem.attr("src"));c||f.css("visibility","hidden");return f},update:function(d,f){if(!c||b.forcePlaceholderSize)f.height()||f.height(a.currentItem.innerHeight()-
parseInt(a.currentItem.css("paddingTop")||0,10)-parseInt(a.currentItem.css("paddingBottom")||0,10)),f.width()||f.width(a.currentItem.innerWidth()-parseInt(a.currentItem.css("paddingLeft")||0,10)-parseInt(a.currentItem.css("paddingRight")||0,10))}}}a.placeholder=d(b.placeholder.element.call(a.element,a.currentItem));a.currentItem.after(a.placeholder);b.placeholder.update(a,a.placeholder)},_createTrPlaceholder:function(a,b){var c=this;a.children().each(function(){d("<td>&#160;</td>",c.document[0]).attr("colspan",
d(this).attr("colspan")||1).appendTo(b)})},_contactContainers:function(a){var b,c,e,f=e=null;for(b=this.containers.length-1;0<=b;b--)d.contains(this.currentItem[0],this.containers[b].element[0])||(this._intersectsWith(this.containers[b].containerCache)?e&&d.contains(this.containers[b].element[0],e.element[0])||(e=this.containers[b],f=b):this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",a,this._uiHash(this)),this.containers[b].containerCache.over=0));if(e)if(1===this.containers.length)this.containers[f].containerCache.over||
(this.containers[f]._trigger("over",a,this._uiHash(this)),this.containers[f].containerCache.over=1);else{b=1E4;var g=null;e=(c=e.floating||this._isFloating(this.currentItem))?"left":"top";var h=c?"width":"height";var k=c?"pageX":"pageY";for(c=this.items.length-1;0<=c;c--)if(d.contains(this.containers[f].element[0],this.items[c].item[0])&&this.items[c].item[0]!==this.currentItem[0]){var m=this.items[c].item.offset()[e];var l=!1;a[k]-m>this.items[c][h]/2&&(l=!0);Math.abs(a[k]-m)<b&&(b=Math.abs(a[k]-
m),g=this.items[c],this.direction=l?"up":"down")}if(g||this.options.dropOnEmpty)this.currentContainer===this.containers[f]?this.currentContainer.containerCache.over||(this.containers[f]._trigger("over",a,this._uiHash()),this.currentContainer.containerCache.over=1):(g?this._rearrange(a,g,null,!0):this._rearrange(a,null,this.containers[f].element,!0),this._trigger("change",a,this._uiHash()),this.containers[f]._trigger("change",a,this._uiHash(this)),this.currentContainer=this.containers[f],this.options.placeholder.update(this.currentContainer,
this.placeholder),this.containers[f]._trigger("over",a,this._uiHash(this)),this.containers[f].containerCache.over=1)}},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):"clone"===b.helper?this.currentItem.clone():this.currentItem;a.parents("body").length||d("parent"!==b.appendTo?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);a[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,
height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")});a[0].style.width&&!b.forceHelperSize||a.width(this.currentItem.width());a[0].style.height&&!b.forceHelperSize||a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){"string"===typeof a&&(a=a.split(" "));d.isArray(a)&&(a={left:+a[0],top:+a[1]||0});"left"in a&&(this.offset.click.left=a.left+this.margins.left);"right"in a&&(this.offset.click.left=
this.helperProportions.width-a.right+this.margins.left);"top"in a&&(this.offset.click.top=a.top+this.margins.top);"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&d.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop());
if(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&d.ui.ie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-
(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;"parent"===a.containment&&(a.containment=this.helper[0].parentNode);if("document"===
a.containment||"window"===a.containment)this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===a.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===a.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=
d(a.containment)[0];a=d(a.containment).offset();var c="hidden"!==d(b).css("overflow");this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-
this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){b||(b=this.position);a="absolute"===a?1:-1;var c="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&d.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,e=/(html|body)/i.test(c[0].tagName);
return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a,left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a}},_generatePosition:function(a){var b=this.options;var c=a.pageX;var e=a.pageY;var f="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&d.contains(this.scrollParent[0],this.offsetParent[0])?
this.scrollParent:this.offsetParent,g=/(html|body)/i.test(f[0].tagName);"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset());this.originalPosition&&(this.containment&&(a.pageX-this.offset.click.left<this.containment[0]&&(c=this.containment[0]+this.offset.click.left),a.pageY-this.offset.click.top<this.containment[1]&&(e=this.containment[1]+this.offset.click.top),a.pageX-this.offset.click.left>
this.containment[2]&&(c=this.containment[2]+this.offset.click.left),a.pageY-this.offset.click.top>this.containment[3]&&(e=this.containment[3]+this.offset.click.top)),b.grid&&(e=this.originalPageY+Math.round((e-this.originalPageY)/b.grid[1])*b.grid[1],e=this.containment?e-this.offset.click.top>=this.containment[1]&&e-this.offset.click.top<=this.containment[3]?e:e-this.offset.click.top>=this.containment[1]?e-b.grid[1]:e+b.grid[1]:e,c=this.originalPageX+Math.round((c-this.originalPageX)/b.grid[0])*b.grid[0],
c=this.containment?c-this.offset.click.left>=this.containment[0]&&c-this.offset.click.left<=this.containment[2]?c:c-this.offset.click.left>=this.containment[0]?c-b.grid[0]:c+b.grid[0]:c));return{top:e-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:c-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())}},
_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling);var e=this.counter=this.counter?++this.counter:1;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;var d,f=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);
this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)if("auto"===this._storedCSS[d]||"static"===this._storedCSS[d])this._storedCSS[d]="";this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&f.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))});!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===
this.currentItem.parent()[0]||b||f.push(function(a){this._trigger("update",a,this._uiHash())});this===this.currentContainer||b||(f.push(function(a){this._trigger("remove",a,this._uiHash())}),f.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),f.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)));for(d=this.containers.length-1;0<=d;d--)b||f.push(c("deactivate",this,this.containers[d])),
this.containers[d].containerCache.over&&(f.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove());this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex);this.dragging=!1;b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null);if(!b){for(d=0;d<f.length;d++)f[d].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=!1;return!this.cancelHelperRemoval},_trigger:function(){!1===d.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,
item:b.currentItem,sender:a?a.element:null}}});d.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",
paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var a=this.options;this.prevShow=this.prevHide=d();this._addClass("ui-accordion","ui-widget ui-helper-reset");this.element.attr("role","tablist");a.collapsible||!1!==a.active&&null!=a.active||(a.active=0);this._processPanels();0>a.active&&(a.active+=this.headers.length);this._refresh()},_getCreateEventData:function(){return{header:this.active,
panel:this.active.length?this.active.next():d()}},_createIcons:function(){var a=this.options.icons;if(a){var b=d("<span>");this._addClass(b,"ui-accordion-header-icon","ui-icon "+a.header);b.prependTo(this.headers);b=this.active.children(".ui-accordion-header-icon");this._removeClass(b,a.header)._addClass(b,null,a.activeHeader)._addClass(this.headers,"ui-accordion-icons")}},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons");this.headers.children(".ui-accordion-header-icon").remove()},
_destroy:function(){this.element.removeAttr("role");this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();this._destroyIcons();var a=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){"active"===a?this._activate(b):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,
b),"collapsible"!==a||b||!1!==this.options.active||this._activate(0),"icons"===a&&(this._destroyIcons(),b&&this._createIcons()))},_setOptionDisabled:function(a){this._super(a);this.element.attr("aria-disabled",a);this._toggleClass(null,"ui-state-disabled",!!a);this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!a)},_keydown:function(a){if(!a.altKey&&!a.ctrlKey){var b=d.ui.keyCode,c=this.headers.length,e=this.headers.index(a.target),f=!1;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=
this.headers[(e+1)%c];break;case b.LEFT:case b.UP:f=this.headers[(e-1+c)%c];break;case b.SPACE:case b.ENTER:this._eventHandler(a);break;case b.HOME:f=this.headers[0];break;case b.END:f=this.headers[c-1]}f&&(d(a.target).attr("tabIndex",-1),d(f).attr("tabIndex",0),d(f).trigger("focus"),a.preventDefault())}},_panelKeyDown:function(a){a.keyCode===d.ui.keyCode.UP&&a.ctrlKey&&d(a.currentTarget).prev().trigger("focus")},refresh:function(){var a=this.options;this._processPanels();!1===a.active&&!0===a.collapsible||
!this.headers.length?(a.active=!1,this.active=d()):!1===a.active?this._activate(0):this.active.length&&!d.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(a.active=!1,this.active=d()):this._activate(Math.max(0,a.active-1)):a.active=this.headers.index(this.active);this._destroyIcons();this._refresh()},_processPanels:function(){var a=this.headers,b=this.panels;this.headers=this.element.find(this.options.header);this._addClass(this.headers,
"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");b&&(this._off(a.not(this.headers)),this._off(b.not(this.panels)))},_refresh:function(){var a=this.options,b=a.heightStyle,c=this.element.parent();this.active=this._findActive(a.active);this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,
"ui-accordion-header-collapsed");this._addClass(this.active.next(),"ui-accordion-content-active");this.active.next().show();this.headers.attr("role","tab").each(function(){var a=d(this),b=a.uniqueId().attr("id"),c=a.next(),e=c.uniqueId().attr("id");a.attr("aria-controls",e);c.attr("aria-labelledby",b)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();this.active.length?this.active.attr({"aria-selected":"true",
"aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0);this._createIcons();this._setupEvents(a.event);if("fill"===b){var e=c.height();this.element.siblings(":visible").each(function(){var a=d(this),b=a.css("position");"absolute"!==b&&"fixed"!==b&&(e-=a.outerHeight(!0))});this.headers.each(function(){e-=d(this).outerHeight(!0)});this.headers.next().each(function(){d(this).height(Math.max(0,e-d(this).innerHeight()+d(this).height()))}).css("overflow",
"auto")}else"auto"===b&&(e=0,this.headers.next().each(function(){var a=d(this).is(":visible");a||d(this).show();e=Math.max(e,d(this).css("height","").height());a||d(this).hide()}).height(e))},_activate:function(a){a=this._findActive(a)[0];a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:d.noop}))},_findActive:function(a){return"number"===typeof a?this.headers.eq(a):d()},_setupEvents:function(a){var b={keydown:"_keydown"};a&&d.each(a.split(" "),function(a,
d){b[d]="_eventHandler"});this._off(this.headers.add(this.headers.next()));this._on(this.headers,b);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(a){var b,c=this.options,e=this.active,f=d(a.currentTarget),g=(b=f[0]===e[0])&&c.collapsible,h=g?d():f.next(),k=e.next();h={oldHeader:e,oldPanel:k,newHeader:g?d():f,newPanel:h};a.preventDefault();b&&!c.collapsible||!1===this._trigger("beforeActivate",a,h)||(c.active=
g?!1:this.headers.index(f),this.active=b?d():f,this._toggle(h),this._removeClass(e,"ui-accordion-header-active","ui-state-active"),c.icons&&(a=e.children(".ui-accordion-header-icon"),this._removeClass(a,null,c.icons.activeHeader)._addClass(a,null,c.icons.header)),b||(this._removeClass(f,"ui-accordion-header-collapsed")._addClass(f,"ui-accordion-header-active","ui-state-active"),c.icons&&(b=f.children(".ui-accordion-header-icon"),this._removeClass(b,null,c.icons.header)._addClass(b,null,c.icons.activeHeader)),
this._addClass(f.next(),"ui-accordion-content-active")))},_toggle:function(a){var b=a.newPanel,c=this.prevShow.length?this.prevShow:a.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0);this.prevShow=b;this.prevHide=c;this.options.animate?this._animate(b,c,a):(c.hide(),b.show(),this._toggleComplete(a));c.attr({"aria-hidden":"true"});c.prev().attr({"aria-selected":"false","aria-expanded":"false"});b.length&&c.length?c.prev().attr({tabIndex:-1,"aria-expanded":"false"}):b.length&&this.headers.filter(function(){return 0===
parseInt(d(this).attr("tabIndex"),10)}).attr("tabIndex",-1);b.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(a,b,c){var d,f,g=this,h=0,k=a.css("box-sizing"),m=a.length&&(!b.length||a.index()<b.index()),l=this.options.animate||{};m=m&&l.down||l;var n=function(){g._toggleComplete(c)};"number"===typeof m&&(f=m);"string"===typeof m&&(d=m);d=d||m.easing||l.easing;f=f||m.duration||l.duration;if(!b.length)return a.animate(this.showProps,
f,d,n);if(!a.length)return b.animate(this.hideProps,f,d,n);var p=a.show().outerHeight();b.animate(this.hideProps,{duration:f,easing:d,step:function(a,b){b.now=Math.round(a)}});a.hide().animate(this.showProps,{duration:f,easing:d,complete:n,step:function(a,c){c.now=Math.round(a);"height"!==c.prop?"content-box"===k&&(h+=c.now):"content"!==g.options.heightStyle&&(c.now=Math.round(p-b.outerHeight()-h),h=0)}})},_toggleComplete:function(a){var b=a.oldPanel,c=b.prev();this._removeClass(b,"ui-accordion-content-active");
this._removeClass(c,"ui-accordion-header-active")._addClass(c,"ui-accordion-header-collapsed");b.length&&(b.parent()[0].className=b.parent()[0].className);this._trigger("activate",null,a)}});d.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=!1;this.element.uniqueId().attr({role:this.options.role,
tabIndex:0});this._addClass("ui-menu","ui-widget ui-widget-content");this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(a){var b=d(a.target),c=d(d.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&b.not(".ui-state-disabled").length&&(this.select(a),a.isPropagationStopped()||(this.mouseHandled=!0),b.has(".ui-menu").length?this.expand(a):!this.element.is(":focus")&&c.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&
1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(a){if(!this.previousFilter){var b=d(a.target).closest(".ui-menu-item"),c=d(a.currentTarget);b[0]===c[0]&&(this._removeClass(c.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(a,c))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(a){this._delay(function(){d.contains(this.element[0],
d.ui.safeActiveElement(this.document[0]))||this.collapseAll(a)})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a);this.mouseHandled=!1}})},_destroy:function(){var a=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
a.children().each(function(){var a=d(this);a.data("ui-menu-submenu-caret")&&a.remove()})},_keydown:function(a){var b=!0;switch(a.keyCode){case d.ui.keyCode.PAGE_UP:this.previousPage(a);break;case d.ui.keyCode.PAGE_DOWN:this.nextPage(a);break;case d.ui.keyCode.HOME:this._move("first","first",a);break;case d.ui.keyCode.END:this._move("last","last",a);break;case d.ui.keyCode.UP:this.previous(a);break;case d.ui.keyCode.DOWN:this.next(a);break;case d.ui.keyCode.LEFT:this.collapse(a);break;case d.ui.keyCode.RIGHT:this.active&&
!this.active.is(".ui-state-disabled")&&this.expand(a);break;case d.ui.keyCode.ENTER:case d.ui.keyCode.SPACE:this._activate(a);break;case d.ui.keyCode.ESCAPE:this.collapse(a);break;default:b=!1;var c=this.previousFilter||"";var e=!1;var f=96<=a.keyCode&&105>=a.keyCode?(a.keyCode-96).toString():String.fromCharCode(a.keyCode);clearTimeout(this.filterTimer);f===c?e=!0:f=c+f;c=this._filterMenuItems(f);c=e&&-1!==c.index(this.active.next())?this.active.nextAll(".ui-menu-item"):c;c.length||(f=String.fromCharCode(a.keyCode),
c=this._filterMenuItems(f));c.length?(this.focus(a,c),this.previousFilter=f,this.filterTimer=this._delay(function(){delete this.previousFilter},1E3)):delete this.previousFilter}b&&a.preventDefault()},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var a=this,b=this.options.icons.submenu;var c=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,
!!this.element.find(".ui-icon").length);var e=c.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var c=d(this),e=c.prev(),f=d("<span>").data("ui-menu-submenu-caret",!0);a._addClass(f,"ui-menu-icon","ui-icon "+b);e.attr("aria-haspopup","true").prepend(f);c.attr("aria-labelledby",e.attr("id"))});this._addClass(e,"ui-menu","ui-widget ui-widget-content ui-front");e=c.add(this.element).find(this.options.items);e.not(".ui-menu-item").each(function(){var b=
d(this);a._isDivider(b)&&a._addClass(b,"ui-menu-divider","ui-widget-content")});c=e.not(".ui-menu-item, .ui-menu-divider");var f=c.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});this._addClass(c,"ui-menu-item")._addClass(f,"ui-menu-item-wrapper");e.filter(".ui-state-disabled").attr("aria-disabled","true");this.active&&!d.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,
b){if("icons"===a){var c=this.element.find(".ui-menu-icon");this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,b.submenu)}this._super(a,b)},_setOptionDisabled:function(a){this._super(a);this.element.attr("aria-disabled",String(a));this._toggleClass(null,"ui-state-disabled",!!a)},focus:function(a,b){this.blur(a,a&&"focus"===a.type);this._scrollIntoView(b);this.active=b.first();var c=this.active.children(".ui-menu-item-wrapper");this._addClass(c,null,"ui-state-active");this.options.role&&
this.element.attr("aria-activedescendant",c.attr("id"));c=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");this._addClass(c,null,"ui-state-active");a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay);c=b.children(".ui-menu");c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c);this.activeMenu=b.parent();this._trigger("focus",a,{item:b})},_scrollIntoView:function(a){if(this._hasScroll()){var b=parseFloat(d.css(this.activeMenu[0],
"borderTopWidth"))||0;var c=parseFloat(d.css(this.activeMenu[0],"paddingTop"))||0;b=a.offset().top-this.activeMenu.offset().top-b-c;c=this.activeMenu.scrollTop();var e=this.activeMenu.height();a=a.outerHeight();0>b?this.activeMenu.scrollTop(c+b):b+a>e&&this.activeMenu.scrollTop(c+b-e+a)}},blur:function(a,b){b||clearTimeout(this.timer);this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)},
_startOpening:function(a){clearTimeout(this.timer);"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close();this._open(a)},this.delay))},_open:function(a){var b=d.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden","true");a.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)},collapseAll:function(a,b){clearTimeout(this.timer);this.timer=this._delay(function(){var c=
b?this.element:d(a&&a.target).closest(this.element.find(".ui-menu"));c.length||(c=this.element);this._close(c);this.blur(a);this._removeClass(c.find(".ui-state-active"),null,"ui-state-active");this.activeMenu=c},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element);a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(a){return!d(a.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},
collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},
isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0));d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]());this.focus(c,d)},nextPage:function(a){var b;if(!this.active)this.next(a);else if(!this.isLastItem())if(this._hasScroll()){var c=this.active.offset().top;var e=
this.element.height();this.active.nextAll(".ui-menu-item").each(function(){b=d(this);return 0>b.offset().top-c-e});this.focus(a,b)}else this.focus(a,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())},previousPage:function(a){var b;if(!this.active)this.next(a);else if(!this.isFirstItem())if(this._hasScroll()){var c=this.active.offset().top;var e=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){b=d(this);return 0<b.offset().top-c+e});this.focus(a,b)}else this.focus(a,
this.activeMenu.find(this.options.items).first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(a){this.active=this.active||d(a.target).closest(".ui-menu-item");var b={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(a,!0);this._trigger("select",a,b)},_filterMenuItems:function(a){a=a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");var b=new RegExp("^"+a,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return b.test(d.trim(d(this).children(".ui-menu-item-wrapper").text()))})}});
d.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var a,b,c,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e;e="input"===e;this.isMultiLine=f||!e&&this._isContentEditable(this.element);this.valueMethod=this.element[f||
e?"val":"text"];this.isNewMenu=!0;this._addClass("ui-autocomplete-input");this.element.attr("autocomplete","off");this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))b=c=a=!0;else{b=c=a=!1;var f=d.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:a=!0;this._move("previousPage",e);break;case f.PAGE_DOWN:a=!0;this._move("nextPage",e);break;case f.UP:a=!0;this._keyEvent("previous",e);break;case f.DOWN:a=!0;this._keyEvent("next",e);break;case f.ENTER:this.menu.active&&(a=!0,e.preventDefault(),
this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:b=!0,this._searchTimeout(e)}}},keypress:function(c){if(a)a=!1,this.isMultiLine&&!this.menu.element.is(":visible")||c.preventDefault();else if(!b){var e=d.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:this._move("previousPage",c);break;case e.PAGE_DOWN:this._move("nextPage",c);break;
case e.UP:this._keyEvent("previous",c);break;case e.DOWN:this._keyEvent("next",c)}}},input:function(a){c?(c=!1,a.preventDefault()):this._searchTimeout(a)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(a){this.cancelBlur?delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),this._change(a))}});this._initSource();this.menu=d("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");this._addClass(this.menu.element,"ui-autocomplete",
"ui-front");this._on(this.menu.element,{mousedown:function(a){a.preventDefault();this.cancelBlur=!0;this._delay(function(){delete this.cancelBlur;this.element[0]!==d.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(a,b){if(this.isNewMenu&&(this.isNewMenu=!1,a.originalEvent&&/^mouse/.test(a.originalEvent.type))){this.menu.blur();this.document.one("mousemove",function(){d(a.target).trigger(a.originalEvent)});return}var c=b.item.data("ui-autocomplete-item");
!1!==this._trigger("focus",a,{item:c})&&a.originalEvent&&/^key/.test(a.originalEvent.type)&&this._value(c.value);(b=b.item.attr("aria-label")||c.value)&&d.trim(b).length&&(this.liveRegion.children().hide(),d("<div>").text(b).appendTo(this.liveRegion))},menuselect:function(a,b){var c=b.item.data("ui-autocomplete-item"),e=this.previous;this.element[0]!==d.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=e,this._delay(function(){this.previous=e;this.selectedItem=c}));
!1!==this._trigger("select",a,{item:c})&&this._value(c.value);this.term=this._value();this.close(a);this.selectedItem=c}});this.liveRegion=d("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeAttr("autocomplete");this.menu.element.remove();
this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b);"source"===a&&this._initSource();"appendTo"===a&&this.menu.element.appendTo(this._appendTo());"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(a){var b=this.menu.element[0];return a.target===this.element[0]||a.target===b||d.contains(b,a.target)},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()},_appendTo:function(){var a=this.options.appendTo;a&&(a=a.jquery||a.nodeType?d(a):
this.document.find(a).eq(0));a&&a[0]||(a=this.element.closest(".ui-front, dialog"));a.length||(a=this.document[0].body);return a},_initSource:function(){var a=this;if(d.isArray(this.options.source)){var b=this.options.source;this.source=function(a,c){c(d.ui.autocomplete.filter(b,a.term))}}else if("string"===typeof this.options.source){var c=this.options.source;this.source=function(b,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:c,data:b,dataType:"json",success:function(a){f(a)},error:function(){f([])}})}}else this.source=
this.options.source},_searchTimeout:function(a){clearTimeout(this.searching);this.searching=this._delay(function(){var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;if(!b||b&&!c&&!d)this.selectedItem=null,this.search(null,a)},this.options.delay)},search:function(a,b){a=null!=a?a:this._value();this.term=this._value();if(a.length<this.options.minLength)return this.close(b);if(!1!==this._trigger("search",b))return this._search(a)},_search:function(a){this.pending++;
this._addClass("ui-autocomplete-loading");this.cancelSearch=!1;this.source({term:a},this._response())},_response:function(){var a=++this.requestIndex;return d.proxy(function(b){a===this.requestIndex&&this.__response(b);this.pending--;this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(a){a&&(a=this._normalize(a));this._trigger("response",null,{content:a});!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},
close:function(a){this.cancelSearch=!0;this._close(a)},_close:function(a){this._off(this.document,"mousedown");this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){return a.length&&a[0].label&&a[0].value?a:d.map(a,function(a){return"string"===typeof a?{label:a,value:a}:d.extend({},a,{label:a.label||a.value,
value:a.value||a.label})})},_suggest:function(a){var b=this.menu.element.empty();this._renderMenu(b,a);this.isNewMenu=!0;this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next();this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(a,b){var c=this;d.each(b,
function(b,d){c._renderItemData(a,d)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(a,b){return d("<li>").append(d("<div>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a))this.isMultiLine||this._value(this.term),this.menu.blur();else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element},
_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()},_isContentEditable:function(a){if(!a.length)return!1;var b=a.prop("contentEditable");return"inherit"===b?this._isContentEditable(a.parent()):"true"===b}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(a,b){var c=new RegExp(d.ui.autocomplete.escapeRegex(b),
"i");return d.grep(a,function(a){return c.test(a.label||a.value||a)})}});d.widget("ui.autocomplete",d.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(1<a?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(a){this._superApply(arguments);if(!this.options.disabled&&!this.cancelSearch){var b=a&&a.length?this.options.messages.results(a.length):this.options.messages.noResults;this.liveRegion.children().hide();
d("<div>").text(b).appendTo(this.liveRegion)}}});var G=/ui-corner-([a-z]){2,6}/g;d.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role",
"toolbar");this.refresh()},_destroy:function(){this._callChildMethod("destroy");this.childWidgets.removeData("ui-controlgroup-data");this.element.removeAttr("role");this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var a=this,b=[];d.each(this.options.items,function(c,e){var f={};e&&("controlgroupLabel"===c?(e=a.element.find(e),e.each(function(){var a=d(this);a.children(".ui-controlgroup-label-contents").length||
a.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),a._addClass(e,null,"ui-widget ui-widget-content ui-state-default"),b=b.concat(e.get())):d.fn[c]&&(f=a["_"+c+"Options"]?a["_"+c+"Options"]("middle"):{classes:{}},a.element.find(e).each(function(){var e=d(this),h=e[c]("instance"),k=d.widget.extend({},f);"button"===c&&e.parent(".ui-spinner").length||(h||(h=e[c]()[c]("instance")),h&&(k.classes=a._resolveClassesValues(k.classes,h)),e[c](k),k=e[c]("widget"),d.data(k[0],"ui-controlgroup-data",
h?h:e[c]("instance")),b.push(k[0]))})))});this.childWidgets=d(d.unique(b));this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(a){this.childWidgets.each(function(){var b=d(this).data("ui-controlgroup-data");if(b&&b[a])b[a]()})},_updateCornerClass:function(a,b){b=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all");this._addClass(a,null,b)},_buildSimpleOptions:function(a,
b){var c="vertical"===this.options.direction,d={classes:{}};d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a];return d},_spinnerOptions:function(a){a=this._buildSimpleOptions(a,"ui-spinner");a.classes["ui-spinner-up"]="";a.classes["ui-spinner-down"]="";return a},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},
_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:b?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},
_resolveClassesValues:function(a,b){var c={};d.each(a,function(e){var f=b.options.classes[e]||"";f=d.trim(f.replace(G,""));c[e]=(f+" "+a[e]).replace(/\s+/g," ")});return c},_setOption:function(a,b){"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction);this._super(a,b);"disabled"===a?this._callChildMethod(b?"disable":"enable"):this.refresh()},refresh:function(){var a=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);"horizontal"===this.options.direction&&
this._addClass(null,"ui-helper-clearfix");this._initWidgets();var b=this.childWidgets;this.options.onlyVisible&&(b=b.filter(":visible"));b.length&&(d.each(["first","last"],function(c,d){(c=b[d]().data("ui-controlgroup-data"))&&a["_"+c.widgetName+"Options"]?(d=a["_"+c.widgetName+"Options"](1===b.length?"only":d),d.classes=a._resolveClassesValues(d.classes,c),c.element[c.widgetName](d)):a._updateCornerClass(b[d](),d)}),this._callChildMethod("refresh"))}});d.widget("ui.checkboxradio",[d.ui.formResetMixin,
{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var a=this,b=this._super()||{};this._readType();var c=this.element.labels();this.label=d(c[c.length-1]);this.label.length||d.error("No label found for checkboxradio widget");this.originalLabel="";this.label.contents().not(this.element[0]).each(function(){a.originalLabel+=3===this.nodeType?d(this).text():this.outerHTML});
this.originalLabel&&(b.label=this.originalLabel);c=this.element[0].disabled;null!=c&&(b.disabled=c);return b},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler();null==this.options.disabled&&(this.options.disabled=this.element[0].disabled);this._setOption("disabled",this.options.disabled);this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");"radio"===this.type&&this._addClass(this.label,
"ui-checkboxradio-radio-label");this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel);this._enhance();a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover"));this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},
_readType:function(){var a=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type;"input"===a&&/radio|checkbox/.test(this.type)||d.error("Can't create checkboxradio on element.nodeName="+a+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var a=this.element[0].name,b="input[name='"+d.ui.escapeSelector(a)+"']";return a?(this.form.length?d(this.form[0].elements).filter(b):d(b).filter(function(){return 0===
d(this).form().length})).not(this.element):d([])},_toggleClasses:function(){var a=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a);this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",a)._toggleClass(this.icon,null,"ui-icon-blank",!a);"radio"===this.type&&this._getRadioGroup().each(function(){var a=d(this).checkboxradio("instance");a&&a._removeClass(a.label,"ui-checkboxradio-checked","ui-state-active")})},
_destroy:function(){this._unbindFormResetHandler();this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(a,b){if("label"!==a||b)this._super(a,b),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",b),this.element[0].disabled=b):this.refresh()},_updateIcon:function(a){var b="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=d("<span>"),this.iconSpace=d("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===
this.type?(b+=a?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,a?"ui-icon-blank":"ui-icon-check")):b+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",b),a||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);this.icon&&(a=a.not(this.icon[0]));
this.iconSpace&&(a=a.not(this.iconSpace[0]));a.remove();this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a);this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a);null!==this.options.label&&this._updateLabel();b!==this.options.disabled&&this._setOptions({disabled:b})}}]);d.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,
icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a=this._super()||{};this.isInput=this.element.is("input");var b=this.element[0].disabled;null!=b&&(a.disabled=b);if(this.originalLabel=this.isInput?this.element.val():this.element.html())a.label=this.originalLabel;return a},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0);null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1);this.hasTitle=
!!this.element.attr("title");this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label));this._addClass("ui-button","ui-widget");this._setOption("disabled",this.options.disabled);this._enhance();this.element.is("a")&&this._on({keyup:function(a){a.keyCode===d.ui.keyCode.SPACE&&(a.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||
this.element.attr("role","button");this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title");this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(a,b){var c=(a="iconPosition"!==a)?this.options.iconPosition:b,e="top"===c||"bottom"===c;this.icon?a&&this._removeClass(this.icon,null,this.options.icon):(this.icon=d("<span>"),this._addClass(this.icon,"ui-button-icon",
"ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only"));a&&this._addClass(this.icon,null,b);this._attachIcon(c);e?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=d("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(c))},_destroy:function(){this.element.removeAttr("role");this.icon&&this.icon.remove();
this.iconSpace&&this.iconSpace.remove();this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.icon?this.options.icon:a.icon;(void 0===a.showLabel?this.options.showLabel:a.showLabel)||b||(a.showLabel=!0);this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,
b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove()));"iconPosition"===a&&this._updateIcon(a,b);"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip());"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition))));this._super(a,b);"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),(this.element[0].disabled=b)&&this.element.blur())},
refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a});this._updateTooltip()}});!1!==d.uiBackCompat&&(d.widget("ui.button",d.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text);!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel);
this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end");this._super()},_setOption:function(a,b){"text"===a?this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",
b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),this._superApply(arguments))}}),d.fn.button=function(a){return function(){if(!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type"))return a.apply(this,arguments);d.ui.checkboxradio||d.error("Checkboxradio widget missing");return 0===arguments.length?this.checkboxradio({icon:!1}):
this.checkboxradio.apply(this,arguments)}}(d.fn.button),d.fn.buttonset=function(){d.ui.controlgroup||d.error("Controlgroup widget missing");if("option"===arguments[0]&&"items"===arguments[1]&&arguments[2])return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]);if("option"===arguments[0]&&"items"===arguments[1])return this.controlgroup.apply(this,[arguments[0],"items.button"]);"object"===typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items});
return this.controlgroup.apply(this,arguments)});d.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",showCloseButton:!0,showTitleBar:!0,draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=d(this).css(a).offset().top;0>b&&d(this).css("top",
a.top-b)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,
maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle);this.options.disabled&&(this.options.disabled=!1);this._createWrapper();this.element.show().removeAttr("title").appendTo(this.uiDialog);this._addClass("ui-dialog-content","ui-widget-content");
this._createTitlebar();this._createButtonPane();this.options.draggable&&d.fn.draggable&&this._makeDraggable();this.options.resizable&&d.fn.resizable&&this._makeResizable();this._isOpen=!1;this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var a=this.options.appendTo;return a&&(a.jquery||a.nodeType)?d(a):this.document.find(a||"body").eq(0)},_destroy:function(){var a=this.originalPosition;this._untrackInstance();this._destroyOverlay();this.element.removeUniqueId().css(this.originalCss).detach();
this.uiDialog.remove();this.originalTitle&&this.element.attr("title",this.originalTitle);var b=a.parent.children().eq(a.index);b.length&&b[0]!==this.element[0]?b.before(this.element):a.parent.append(this.element)},widget:function(){return this.uiDialog},disable:d.noop,enable:d.noop,close:function(a){var b=this;this._isOpen&&!1!==this._trigger("beforeClose",a)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||
d.ui.safeBlur(d.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){b._trigger("close",a)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(a,b){var c=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+d(this).css("z-index")}).get();e=Math.max.apply(null,e);e>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",e+1),c=!0);c&&!b&&this._trigger("focus",a);return c},open:function(){var a=
this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=d(d.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){a._focusTabbable();a._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]"));
a.length||(a=this.element.find(":tabbable"));a.length||(a=this.uiDialogButtonPane.find(":tabbable"));a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable"));a.length||(a=this.uiDialog);a.eq(0).trigger("focus")},_keepFocus:function(a){function b(){var a=d.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===a||d.contains(this.uiDialog[0],a)||this._focusTabbable()}a.preventDefault();b.call(this);this._delay(b)},_createWrapper:function(){this.uiDialog=d("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");this._on(this.uiDialog,{keydown:function(a){if(this.options.closeOnEscape&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===d.ui.keyCode.ESCAPE)a.preventDefault(),this.close(a);else if(a.keyCode===d.ui.keyCode.TAB&&!a.isDefaultPrevented()){var b=this.uiDialog.find(":tabbable"),c=b.filter(":first"),e=b.filter(":last");a.target!==e[0]&&a.target!==this.uiDialog[0]||a.shiftKey?a.target!==c[0]&&a.target!==this.uiDialog[0]||
!a.shiftKey||(this._delay(function(){e.trigger("focus")}),a.preventDefault()):(this._delay(function(){c.trigger("focus")}),a.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}});this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){this.uiDialogTitlebar=d("<div>");this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"+(this.options.showTitleBar?
"":" ui-helper-hidden"));this._on(this.uiDialogTitlebar,{mousedown:function(a){d(a.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}});this.uiDialogTitlebarClose=d("<button type='button'></button>").button({label:d("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar);this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"+(this.options.showCloseButton?"":" ui-helper-hidden"));this._on(this.uiDialogTitlebarClose,
{click:function(a){a.preventDefault();this.close(a)}});var a=d("<span>").uniqueId().prependTo(this.uiDialogTitlebar);this._addClass(a,"ui-dialog-title");this._title(a);this.uiDialogTitlebar.prependTo(this.uiDialog);this.uiDialog.attr({"aria-labelledby":a.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=d("<div>");this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");
this.uiButtonSet=d("<div>").appendTo(this.uiDialogButtonPane);this._addClass(this.uiButtonSet,"ui-dialog-buttonset");this._createButtons()},_createButtons:function(){var a=this,b=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();d.isEmptyObject(b)||d.isArray(b)&&!b.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(d.each(b,function(b,e){e=d.isFunction(e)?{click:e,text:b}:e;e=d.extend({type:"button"},e);var c=e.click;b={icon:e.icon,iconPosition:e.iconPosition,
showLabel:e.showLabel,icons:e.icons,text:e.text};delete e.click;delete e.icon;delete e.iconPosition;delete e.showLabel;delete e.icons;"boolean"===typeof e.text&&delete e.text;d("<button></button>",e).button(b).appendTo(a.uiButtonSet).on("click",function(){c.apply(a.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function a(a){return{position:a.position,offset:a.offset}}var b=this,c=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(c,f){b._addClass(d(this),"ui-dialog-dragging");b._blockFrames();b._trigger("dragStart",c,a(f))},drag:function(c,d){b._trigger("drag",c,a(d))},stop:function(e,f){var g=f.offset.left-b.document.scrollLeft(),h=f.offset.top-b.document.scrollTop();c.position={my:"left top",at:"left"+(0<=g?"+":"")+g+" top"+(0<=h?"+":"")+h,of:b.window};b._removeClass(d(this),
"ui-dialog-dragging");b._unblockFrames();b._trigger("dragStop",e,a(f))}})},_makeResizable:function(){function a(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var b=this,c=this.options,e=c.resizable,f=this.uiDialog.css("position");e="string"===typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),
handles:e,start:function(c,e){b._addClass(d(this),"ui-dialog-resizing");b._blockFrames();b._trigger("resizeStart",c,a(e))},resize:function(c,d){b._trigger("resize",c,a(d))},stop:function(e,f){var g=b.uiDialog.offset(),h=g.left-b.document.scrollLeft();g=g.top-b.document.scrollTop();c.height=b.uiDialog.height();c.width=b.uiDialog.width();c.position={my:"left top",at:"left"+(0<=h?"+":"")+h+" top"+(0<=g?"+":"")+g,of:b.window};b._removeClass(d(this),"ui-dialog-resizing");b._unblockFrames();b._trigger("resizeStop",
e,a(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(a){this._makeFocusTarget();this._focusedElement=d(a.target)}})},_makeFocusTarget:function(){this._untrackInstance();this._trackingInstances().unshift(this)},_untrackInstance:function(){var a=this._trackingInstances(),b=d.inArray(this,a);-1!==b&&a.splice(b,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");a||(a=[],this.document.data("ui-dialog-instances",a));return a},_minHeight:function(){var a=
this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show();this.uiDialog.position(this.options.position);a||this.uiDialog.hide()},_setOptions:function(a){var b=this,c=!1,e={};d.each(a,function(a,d){b._setOption(a,d);a in b.sizeRelatedOptions&&(c=!0);a in b.resizableRelatedOptions&&(e[a]=d)});c&&(this._size(),this._position());this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",
e)},_setOption:function(a,b){var c,e=this.uiDialog;"disabled"!==a&&(this._super(a,b),"appendTo"===a&&this.uiDialog.appendTo(this._appendTo()),"buttons"===a&&this._createButtons(),"closeText"===a&&this.uiDialogTitlebarClose.button({label:d("<a>").text(""+this.options.closeText).html()}),"showCloseButton"===a&&this._toggleClass(this.uiDialogTitlebar.find(".ui-dialog-titlebar-close"),null,"ui-helper-hidden",!b),"showTitleBar"===a&&this._toggleClass(this.uiDialogTitlebar,null,"ui-helper-hidden",!b),"draggable"===
a&&((c=e.is(":data(ui-draggable)"))&&!b&&e.draggable("destroy"),!c&&b&&this._makeDraggable()),"position"===a&&this._position(),"resizable"===a&&((c=e.is(":data(ui-resizable)"))&&!b&&e.resizable("destroy"),c&&"string"===typeof b&&e.resizable("option","handles",b),c||!1===b||this._makeResizable()),"title"===a&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});a.minWidth>a.width&&
(a.width=a.minWidth);var b=this.uiDialog.css({height:"auto",width:a.width}).outerHeight();var c=Math.max(0,a.minHeight-b);var d="number"===typeof a.maxHeight?Math.max(0,a.maxHeight-b):"none";"auto"===a.height?this.element.css({minHeight:c,maxHeight:d,height:"auto"}):this.element.height(Math.max(0,a.height-b));this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=
d(this);return d("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(a){return d(a.target).closest(".ui-dialog").length?!0:!!d(a.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var a=!0;this._delay(function(){a=!1});this.document.data("ui-dialog-overlays")||
this._on(this.document,{focusin:function(b){a||this._allowInteraction(b)||(b.preventDefault(),this._trackingInstances()[0]._focusTabbable())}});this.overlay=d("<div>").appendTo(this._appendTo());this._addClass(this.overlay,null,"ui-widget-overlay ui-front");this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-
1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays"));this.overlay.remove();this.overlay=null}}});!1!==d.uiBackCompat&&d.widget("ui.dialog",d.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super();this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b);this._superApply(arguments)}});d.widget("ui.slider",
d.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",isRTL:!1,range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){var a=this.options;this._mouseSliding=this._keySliding=!1;this._animateOff=!0;this._handleIndex=null;this._detectOrientation();this._mouseInit();
this._calculateNewMax();this._addClass("ui-slider ui-slider-"+this.orientation+(a.isRTL?" ui-slider-rtl":"")+"ui-widget ui-widget-content");this._refresh();this._animateOff=!1},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var a=this.options;var b=this.element.find(".ui-slider-handle"),c=[];var e=a.values&&a.values.length||1;b.length>e&&(b.slice(e).remove(),b=b.slice(0,e));for(a=b.length;a<e;a++)c.push("<span tabindex='0'></span>");
this.handles=b.add(d(c.join("")).appendTo(this.element));this._addClass(this.handles,"ui-slider-handle","ui-state-default");this.handle=this.handles.eq(0);this.handles.each(function(a){d(this).data("ui-slider-handle-index",a).attr("tabIndex",0)})},_createRange:function(){var a=this.options;a.range?(!0===a.range&&(a.values?a.values.length&&2!==a.values.length?a.values=[a.values[0],a.values[0]]:d.isArray(a.values)&&(a.values=a.values.slice(0)):a.values=[this._valueMin(),this._valueMin()]),this.range&&
this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=d("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==a.range&&"max"!==a.range||this._addClass(this.range,"ui-slider-range-"+a.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles)},
_destroy:function(){this.handles.remove();this.range&&this.range.remove();this._mouseDestroy()},_mouseCapture:function(a){var b,c,e=this,f=this.options;if(f.disabled)return!1;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var g=this._normValueFromMouse({x:a.pageX,y:a.pageY});var h=this._valueMax()-this._valueMin()+1;this.handles.each(function(a){var k=Math.abs(g-e.values(a));if(h>k||h===k&&(a===e._lastChangedValue||e.values(a)===
f.min))h=k,b=d(this),c=a});if(!1===this._start(a,c))return!1;this._mouseSliding=!0;this._handleIndex=c;this._addClass(b,null,"ui-state-active");b.trigger("focus");var k=b.offset();this._clickOffset=d(a.target).parents().addBack().is(".ui-slider-handle")?{left:a.pageX-k.left-b.width()/2,top:a.pageY-k.top-b.height()/2-(parseInt(b.css("borderTopWidth"),10)||0)-(parseInt(b.css("borderBottomWidth"),10)||0)+(parseInt(b.css("marginTop"),10)||0)}:{left:0,top:0};this.handles.hasClass("ui-state-hover")||this._slide(a,
c,g);return this._animateOff=!0},_mouseStart:function(){return!0},_mouseDrag:function(a){var b=this._normValueFromMouse({x:a.pageX,y:a.pageY});this._slide(a,this._handleIndex,b);return!1},_mouseStop:function(a){this._removeClass(this.handles,null,"ui-state-active");this._mouseSliding=!1;this._stop(a,this._handleIndex);this._change(a,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?
"vertical":"horizontal"},_normValueFromMouse:function(a){if("horizontal"===this.orientation){var b=this.elementSize.width;a=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else b=this.elementSize.height,a=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);b=a/b;1<b&&(b=1);0>b&&(b=0);"vertical"===this.orientation&&(b=1-b);this.options.isRTL&&(b=1-b);a=this._valueMax()-this._valueMin();b=this._valueMin()+b*a;return this._trimAlignValue(b)},_uiHash:function(a,
b,c){var d={handle:this.handles[a],handleIndex:a,value:void 0!==b?b:this.value()};this._hasMultipleValues()&&(d.value=void 0!==b?b:this.values(a),d.values=c||this.values());return d},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(a,b){return this._trigger("start",a,this._uiHash(b))},_slide:function(a,b,c){var d=this.value(),f=this.values();if(this._hasMultipleValues()){var g=this.values(b?0:1);d=this.values(b);2===this.options.values.length&&
!0===this.options.range&&(c=0===b?Math.min(g,c):Math.max(g,c));f[b]=c}c!==d&&!1!==this._trigger("slide",a,this._uiHash(b,c,f))&&(this._hasMultipleValues()?this.values(b,c):this.value(c))},_stop:function(a,b){this._trigger("stop",a,this._uiHash(b))},_change:function(a,b){this._keySliding||this._mouseSliding||(this._lastChangedValue=b,this._trigger("change",a,this._uiHash(b)))},value:function(a){if(arguments.length)this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);
else return this._value()},values:function(a,b){var c;if(1<arguments.length)this.options.values[a]=this._trimAlignValue(b),this._refreshValue(),this._change(null,a);else if(arguments.length)if(d.isArray(arguments[0])){var e=this.options.values;var f=arguments[0];for(c=0;c<e.length;c+=1)e[c]=this._trimAlignValue(f[c]),this._change(null,c);this._refreshValue()}else return this._hasMultipleValues()?this._values(a):this.value();else return this._values()},_setOption:function(a,b){var c=0;"range"===a&&
!0===this.options.range&&("min"===b?(this.options.value=this._values(0),this.options.values=null):"max"===b&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null));d.isArray(this.options.values)&&(c=this.options.values.length);this._super(a,b);switch(a){case "orientation":this._detectOrientation();this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);this._refreshValue();this.options.range&&this._refreshRange(b);this.handles.css("horizontal"===
b?"bottom":"left","");break;case "isRTL":this.element.toggleClass("ui-slider-rtl",b);this._refreshValue();break;case "value":this._animateOff=!0;this._refreshValue();this._change(null,0);this._animateOff=!1;break;case "values":this._animateOff=!0;this._refreshValue();for(a=c-1;0<=a;a--)this._change(null,a);this._animateOff=!1;break;case "step":case "min":case "max":this._animateOff=!0;this._calculateNewMax();this._refreshValue();this._animateOff=!1;break;case "range":this._animateOff=!0,this._refresh(),
this._animateOff=!1}},_setOptionDisabled:function(a){this._super(a);this._toggleClass(null,"ui-state-disabled",!!a)},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b;if(arguments.length){var c=this.options.values[a];return c=this._trimAlignValue(c)}if(this._hasMultipleValues()){c=this.options.values.slice();for(b=0;b<c.length;b+=1)c[b]=this._trimAlignValue(c[b]);return c}return[]},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();
if(a>=this._valueMax())return this._valueMax();var b=0<this.options.step?this.options.step:1,c=(a-this._valueMin())%b;a-=c;2*Math.abs(c)>=b&&(a+=0<c?b:-b);return parseFloat(a.toFixed(5))},_calculateNewMax:function(){var a=this.options.max,b=this._valueMin(),c=this.options.step;a=Math.round((a-b)/c)*c+b;a>this.options.max&&(a-=c);this.max=parseFloat(a.toFixed(this._precision()))},_precision:function(){var a=this._precisionOf(this.options.step);null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min)));
return a},_precisionOf:function(a){a=a.toString();var b=a.indexOf(".");return-1===b?0:a.length-b-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(a){"vertical"===a&&this.range.css({width:"",left:""});"horizontal"===a&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var a,b=this.options.range,c=this.options,e=this,f=this._animateOff?!1:c.animate,g={};if(this._hasMultipleValues())this.handles.each(function(b){l=(e.values(b)-
e._valueMin())/(e._valueMax()-e._valueMin())*100;l=e.options.isRTL?100-l:l;g["horizontal"===e.orientation?"left":"bottom"]=l+"%";d(this).stop(1,1)[f?"animate":"css"](g,c.animate);if(!0===e.options.range)if("horizontal"===e.orientation){if(0===b)e.range.stop(1,1)[f?"animate":"css"](e.options.isRTL?{right:100-l+"%"}:{left:l+"%"},c.animate);if(1===b)e.range[f?"animate":"css"]({width:(e.options.isRTL?-1:1)*(l-a)+"%"},{queue:!1,duration:c.animate})}else{if(0===b)e.range.stop(1,1)[f?"animate":"css"](e.options.isRTL?
{top:100-l+"%"}:{bottom:l+"%"},c.animate);if(1===b)e.range[f?"animate":"css"]({height:(e.options.isRTL?-1:1)*(l-a)+"%"},{queue:!1,duration:c.animate})}a=l});else{var h=this.value();var k=this._valueMin();var m=this._valueMax();var l=m!==k?(h-k)/(m-k)*100:0;l=e.options.isRTL?100-l:l;g["horizontal"===this.orientation?"left":"bottom"]=l+"%";this.handle.stop(1,1)[f?"animate":"css"](g,c.animate);if("min"===b&&"horizontal"===this.orientation)this.range.stop(1,1)[f?"animate":"css"]({width:(e.options.isRTL?
100-l:l)+"%"},c.animate);if("max"===b&&"horizontal"===this.orientation)this.range.stop(1,1)[f?"animate":"css"]({width:(e.options.isRTL?l:100-l)+"%"},c.animate);if("min"===b&&"vertical"===this.orientation)this.range.stop(1,1)[f?"animate":"css"]({height:(e.options.isRTL?100-l:l)+"%"},c.animate);if("max"===b&&"vertical"===this.orientation)this.range.stop(1,1)[f?"animate":"css"]({height:(e.options.isRTL?l:100-l)+"%"},c.animate)}},_handleEvents:{keydown:function(a){var b,c=d(a.target).data("ui-slider-handle-index");
switch(a.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(a.preventDefault(),!this._keySliding){this._keySliding=!0;this._addClass(d(a.target),null,"ui-state-active");var e=this._start(a,c);if(!1===e)return}}var f=this.options.step;e=this._hasMultipleValues()?b=this.values(c):b=this.value();switch(a.keyCode){case d.ui.keyCode.HOME:b=this._valueMin();
break;case d.ui.keyCode.END:b=this._valueMax();break;case d.ui.keyCode.PAGE_UP:b=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/this.numPages);break;case d.ui.keyCode.PAGE_DOWN:b=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/this.numPages);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:var g=self.options.isRTL?self._valueMin():self._valueMax();e!==g&&(b=self._trimAlignValue(e+(self.options.isRTL?-f:f)));break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:g=self.options.isRTL?
self._valueMax():self._valueMin(),e!==g&&(b=self._trimAlignValue(e+(self.options.isRTL?f:-f)))}this._slide(a,c,b)},keyup:function(a){var b=d(a.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(a,b),this._change(a,b),this._removeClass(d(a.target),null,"ui-state-active"))}}});d.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},
collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;return function(b){var c=b.href.replace(a,"");var d=location.href.replace(a,"");try{c=decodeURIComponent(c)}catch(f){}try{d=decodeURIComponent(d)}catch(f){}return 1<b.hash.length&&c===d}}(),_create:function(){var a=this,b=this.options;this.running=!1;this._addClass("ui-tabs","ui-widget ui-widget-content");this._toggleClass("ui-tabs-collapsible",
null,b.collapsible);this._processTabs();b.active=this._initialActive();d.isArray(b.disabled)&&(b.disabled=d.unique(b.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"),function(b){return a.tabs.index(b)}))).sort());this.active=!1!==this.options.active&&this.anchors.length?this._findActive(b.active):d();this._refresh();this.active.length&&this.load(b.active)},_initialActive:function(){var a=this.options.active,b=this.options.collapsible,c=location.hash.substring(1);null===a&&(c&&this.tabs.each(function(b,
f){if(d(f).attr("aria-controls")===c)return a=b,!1}),null===a&&(a=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null===a||-1===a)&&(a=this.tabs.length?0:!1);!1!==a&&(a=this.tabs.index(this.tabs.eq(a)),-1===a&&(a=b?!1:0));!b&&!1===a&&this.anchors.length&&(a=0);return a},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):d()}},_tabKeydown:function(a){var b=d(d.ui.safeActiveElement(this.document[0])).closest("li"),c=this.tabs.index(b),
e=!0;if(!this._handlePageNav(a)){switch(a.keyCode){case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:c++;break;case d.ui.keyCode.UP:case d.ui.keyCode.LEFT:e=!1;c--;break;case d.ui.keyCode.END:c=this.anchors.length-1;break;case d.ui.keyCode.HOME:c=0;break;case d.ui.keyCode.SPACE:a.preventDefault();clearTimeout(this.activating);this._activate(c);return;case d.ui.keyCode.ENTER:a.preventDefault();clearTimeout(this.activating);this._activate(c===this.options.active?!1:c);return;default:return}a.preventDefault();
clearTimeout(this.activating);c=this._focusNextTab(c,e);a.ctrlKey||a.metaKey||(b.attr("aria-selected","false"),this.tabs.eq(c).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",c)},this.delay))}},_panelKeydown:function(a){!this._handlePageNav(a)&&a.ctrlKey&&a.keyCode===d.ui.keyCode.UP&&(a.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(a){if(a.altKey&&a.keyCode===d.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-
1,!1)),!0;if(a.altKey&&a.keyCode===d.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(a,b){function c(){a>e&&(a=0);0>a&&(a=e);return a}for(var e=this.tabs.length-1;-1!==d.inArray(c(),this.options.disabled);)a=b?a+1:a-1;return a},_focusNextTab:function(a,b){a=this._findNextTab(a,b);this.tabs.eq(a).trigger("focus");return a},_setOption:function(a,b){"active"===a?this._activate(b):(this._super(a,b),"collapsible"===a&&(this._toggleClass("ui-tabs-collapsible",
null,b),b||!1!==this.options.active||this._activate(0)),"event"===a&&this._setupEvents(b),"heightStyle"===a&&this._setupHeightStyle(b))},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var a=this.options,b=this.tablist.children(":has(a[href])");a.disabled=d.map(b.filter(".ui-state-disabled"),function(a){return b.index(a)});this._processTabs();!1!==a.active&&this.anchors.length?this.active.length&&!d.contains(this.tablist[0],this.active[0])?
this.tabs.length===a.disabled.length?(a.active=!1,this.active=d()):this._activate(this._findNextTab(Math.max(0,a.active-1),!1)):a.active=this.tabs.index(this.active):(a.active=!1,this.active=d());this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});
this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var a=this,b=this.tabs,c=this.anchors,e=this.panels;this.tablist=this._getList().attr("role","tablist");this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");this.tablist.on("mousedown"+
this.eventNamespace,"> li",function(a){d(this).is(".ui-state-disabled")&&a.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){d(this).closest("li").is(".ui-state-disabled")&&this.blur()});this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");this.anchors=this.tabs.map(function(){return d("a",this)[0]}).attr({role:"presentation",tabIndex:-1});this._addClass(this.anchors,"ui-tabs-anchor");
this.panels=d();this.anchors.each(function(b,c){var e=d(c).uniqueId().attr("id"),f=d(c).closest("li"),g=f.attr("aria-controls");if(a._isLocal(c)){b=c.hash;c=b.substring(1);var l=a.element.find(a._sanitizeSelector(b))}else c=f.attr("aria-controls")||d({}).uniqueId()[0].id,l=a.element.find("#"+c),l.length||(l=a._createPanel(c),l.insertAfter(a.panels[b-1]||a.tablist)),l.attr("aria-live","polite");l.length&&(a.panels=a.panels.add(l));g&&f.data("ui-tabs-aria-controls",g);f.attr({"aria-controls":c,"aria-labelledby":e});
l.attr("aria-labelledby",e)});this.panels.attr("role","tabpanel");this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");b&&(this._off(b.not(this.tabs)),this._off(c.not(this.anchors)),this._off(e.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol:not(.ui-tabs-skip),ul:not(.ui-tabs-skip)").eq(0)},_createPanel:function(a){return d("<div>").attr("id",a).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(a){var b,c;d.isArray(a)&&(a.length?a.length===this.anchors.length&&
(a=!0):a=!1);for(c=0;b=this.tabs[c];c++)b=d(b),!0===a||-1!==d.inArray(c,a)?(b.attr("aria-disabled","true"),this._addClass(b,null,"ui-state-disabled")):(b.removeAttr("aria-disabled"),this._removeClass(b,null,"ui-state-disabled"));this.options.disabled=a;this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===a)},_setupEvents:function(a){var b={};a&&d.each(a.split(" "),function(a,d){b[d]="_eventHandler"});this._off(this.anchors.add(this.tabs).add(this.panels));this._on(!0,this.anchors,
{click:function(a){a.preventDefault()}});this._on(this.anchors,b);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(a){var b=this.element.parent();if("fill"===a){var c=b.height();c-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var a=d(this),b=a.css("position");"absolute"!==b&&"fixed"!==b&&(c-=a.outerHeight(!0))});this.element.children().not(this.panels).each(function(){c-=
d(this).outerHeight(!0)});this.panels.each(function(){d(this).height(Math.max(0,c-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")}else"auto"===a&&(c=0,this.panels.each(function(){c=Math.max(c,d(this).height("").height())}).height(c))},_eventHandler:function(a){var b=this.options,c=this.active,e=d(a.currentTarget).closest("li"),f=e[0]===c[0],g=f&&b.collapsible,h=g?d():this._getPanelForTab(e),k=c.length?this._getPanelForTab(c):d();c={oldTab:c,oldPanel:k,newTab:g?d():e,newPanel:h};
a.preventDefault();e.hasClass("ui-state-disabled")||e.hasClass("ui-tabs-loading")||this.running||f&&!b.collapsible||!1===this._trigger("beforeActivate",a,c)||(b.active=g?!1:this.tabs.index(e),this.active=f?d():e,this.xhr&&this.xhr.abort(),k.length||h.length||d.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(e),a),this._toggle(a,c))},_toggle:function(a,b){function c(){f.running=!1;f._trigger("activate",a,b)}function e(){f._addClass(b.newTab.closest("li"),
"ui-tabs-active","ui-state-active");g.length&&f.options.show?f._show(g,f.options.show,c):(g.show(),c())}var f=this,g=b.newPanel,h=b.oldPanel;this.running=!0;h.length&&this.options.hide?this._hide(h,this.options.hide,function(){f._removeClass(b.oldTab.closest("li"),"ui-tabs-active","ui-state-active");e()}):(this._removeClass(b.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),h.hide(),e());h.attr("aria-hidden","true");b.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});g.length&&
h.length?b.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===d(this).attr("tabIndex")}).attr("tabIndex",-1);g.attr("aria-hidden","false");b.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(a){a=this._findActive(a);a[0]!==this.active[0]&&(a.length||(a=this.active),a=a.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:d.noop}))},_findActive:function(a){return!1===a?d():this.tabs.eq(a)},_getIndex:function(a){"string"===
typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+d.ui.escapeSelector(a)+"']")));return a},_destroy:function(){this.xhr&&this.xhr.abort();this.tablist.removeAttr("role").off(this.eventNamespace);this.anchors.removeAttr("role tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){d.data(this,"ui-tabs-destroy")?d(this).remove():d(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")});this.tabs.each(function(){var a=
d(this),b=a.data("ui-tabs-aria-controls");b?a.attr("aria-controls",b).removeData("ui-tabs-aria-controls"):a.removeAttr("aria-controls")});this.panels.show();"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(a){var b=this.options.disabled;!1!==b&&(void 0===a?b=!1:(a=this._getIndex(a),b=d.isArray(b)?d.map(b,function(b){return b!==a?b:null}):d.map(this.tabs,function(b,d){return d!==a?d:null})),this._setOptionDisabled(b))},disable:function(a){var b=this.options.disabled;
if(!0!==b){if(void 0===a)b=!0;else{a=this._getIndex(a);if(-1!==d.inArray(a,b))return;b=d.isArray(b)?d.merge([a],b).sort():[a]}this._setOptionDisabled(b)}},load:function(a,b){a=this._getIndex(a);var c=this,e=this.tabs.eq(a);a=e.find(".ui-tabs-anchor");var f=this._getPanelForTab(e),g={tab:e,panel:f},h=function(a,b){"abort"===b&&c.panels.stop(!1,!0);c._removeClass(e,"ui-tabs-loading");f.removeAttr("aria-busy");a===c.xhr&&delete c.xhr};this._isLocal(a[0])||(this.xhr=d.ajax(this._ajaxSettings(a,b,g)))&&
"canceled"!==this.xhr.statusText&&(this._addClass(e,"ui-tabs-loading"),f.attr("aria-busy","true"),this.xhr.done(function(a,d,e){setTimeout(function(){f.html(a);c._trigger("load",b,g);h(e,d)},1)}).fail(function(a,b){setTimeout(function(){h(a,b)},1)}))},_ajaxSettings:function(a,b,c){var e=this;return{url:a.attr("href").replace(/#.*$/,""),beforeSend:function(a,g){return e._trigger("beforeLoad",b,d.extend({jqXHR:a,ajaxSettings:g},c))}}},_getPanelForTab:function(a){a=d(a).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+
a))}});!1!==d.uiBackCompat&&d.widget("ui.tabs",d.ui.tabs,{_processTabs:function(){this._superApply(arguments);this._addClass(this.tabs,"ui-tab")}})}});
;

// ***************************
// js.compressed/jquery/jquery.ui.touch-punch.min.js
// ***************************
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.

 Depends:
  jquery.ui.widget.js
  jquery.ui.mouse.js
*/
(function(c){function b(a,c){if(!(1<a.originalEvent.touches.length)){a.preventDefault();var b=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(c,!0,!0,window,1,b.screenX,b.screenY,b.clientX,b.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(d)}}c.support.touch="ontouchend"in document;if(c.support.touch){var d=c.ui.mouse.prototype,f=d._mouseInit,g=d._mouseDestroy,e;d._touchStart=function(a){!e&&this._mouseCapture(a.originalEvent.changedTouches[0])&&
(e=!0,this._touchMoved=!1,b(a,"mouseover"),b(a,"mousemove"),b(a,"mousedown"))};d._touchMove=function(a){e&&(this._touchMoved=!0,b(a,"mousemove"))};d._touchEnd=function(a){e&&(b(a,"mouseup"),b(a,"mouseout"),this._touchMoved||b(a,"click"),e=!1)};d._mouseInit=function(){this.element.bind({touchstart:c.proxy(this,"_touchStart"),touchmove:c.proxy(this,"_touchMove"),touchend:c.proxy(this,"_touchEnd")});f.call(this)};d._mouseDestroy=function(){this.element.unbind({touchstart:c.proxy(this,"_touchStart"),
touchmove:c.proxy(this,"_touchMove"),touchend:c.proxy(this,"_touchEnd")});g.call(this)}}})(jQuery);
;

// ***************************
// js.compressed/jquery/jquery.cookie.min.js
// ***************************
/*
 jQuery Cookie Plugin v1.2
 https://github.com/carhartl/jquery-cookie

 Copyright 2011, Klaus Hartl
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://www.opensource.org/licenses/mit-license.php
 http://www.opensource.org/licenses/GPL-2.0
*/
(function(e,h,k){function l(b){return b}function m(b){return decodeURIComponent(b.replace(n," "))}var n=/\+/g,d=e.cookie=function(b,c,a){if(c!==k){a=e.extend({},d.defaults,a);null===c&&(a.expires=-1);if("number"===typeof a.expires){var f=a.expires,g=a.expires=new Date;g.setDate(g.getDate()+f)}c=d.json?JSON.stringify(c):String(c);return h.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?
"; domain="+a.domain:"",a.secure?"; secure":""].join("")}c=d.raw?l:m;a=h.cookie.split("; ");for(f=0;g=a[f]&&a[f].split("=");f++)if(c(g.shift())===b)return b=c(g.join("=")),d.json?JSON.parse(b):b;return null};d.defaults={};e.removeCookie=function(b,c){return null!==e.cookie(b)?(e.cookie(b,null,c),!0):!1}})(jQuery,document);
;

// ***************************
// js.compressed/responsive.js
// ***************************
/*
 jQuery throttle / debounce - v1.1 - 3/7/2010
 http://benalman.com/projects/jquery-throttle-debounce-plugin/

 Copyright (c) 2010 "Cowboy" Ben Alman
 Dual licensed under the MIT and GPL licenses.
 http://benalman.com/about/license/
*/
vBulletin.ensureObj("Responsive");
(function(c){function p(){c(".conversation-content .videoscontainer").each(function(){c(this).siblings("div.post-signature").length||c(this).addClass("no-signature")})}var l=vBulletin.Responsive,q=0;l.scrollToFixedBreakPoint=480;l.ChannelContent={cloneAndMoveToolbarButtons:function(){function b(){var a=parseInt(c(this).data("js-movable-button-clone-id")||0,10);d=Math.max(d,a)}var e=c(".js-movable-toolbar-button"),g=c(".js-movable-toolbar-button-clone"),n=e,a=c(".js-movable-toolbar-button-container"),
d=0,f={};e.each(b);g.each(b);++d;e=e.filter(function(){var a=c(this),d="uniq-"+a.attr("class").split(/\s+/).sort().join("-")+"-"+a.attr("id");d=d.replace("-h-hide-on-small","");return f[d]?(a.addClass("h-hide-on-small"),!1):f[d]=!0});if(1>a.length){var m=!1;if(0<e.length){console.warn("Responsive warning: .js-movable-toolbar-button-container is not available.");var h=e.eq(0).closest(".canvas-widget");1==h.length&&(a=c("<div />").addClass("h-right h-clear hide-on-editmode b-button-group h-margin-bottom-l js-movable-toolbar-button-container h-hide-on-large"),
h.is(".b-module--contiguous")?(m=h.closest(".canvas-layout-row"),a.removeClass("h-right").addClass("b-button-group--contiguous-layout").prependTo(m),c("<div />").addClass("js-movable-toolbar-button-container-marker-desktop h-hide-imp").prependTo(m),c("<div />").addClass("js-movable-toolbar-button-container-marker-small h-hide-imp").insertBefore(h)):a.prependTo(h),console.log("Responsive: Created .js-movable-toolbar-button-container"),m=!0)}if(!m)return}e=e.filter(function(){var a=c(this).data("js-movable-button-clone-id");
if(a){var d=!1;g.each(function(){if(c(this).data("js-movable-button-clone-id")==a)return d=!0,!1});if(d)return!1}return!0});g.each(function(){var a=c(this),d=a.data("js-movable-button-clone-id"),f=!1;n.each(function(a,m){if(c(m).data("js-movable-button-clone-id")==d)return f=!0,!1});f||a.remove()});e=e.reverse();e.each(function(){var f=c(this);f.data("js-movable-button-clone-id")||(f.clone().removeAttr("id").removeClass("js-movable-toolbar-button").addClass("h-hide-on-large js-movable-toolbar-button-clone").data("js-movable-button-clone-id",
d).off("click").on("click",function(){f.trigger("click")}).prependTo(a),f.addClass("h-hide-on-small").data("js-movable-button-clone-id",d),++d)})},initToolbarShrink:function(){function b(a){c(".js-movable-toolbar-button-container, .js-movable-toolbar-button-clone").toggleClass("h-hide-on-large",a);c(".js-movable-toolbar-button, .js-button-filter-my-label").toggleClass("h-hide-imp",!a)}function e(a,d){d=d.closest(".conversation-toolbar-wrapper").next(".js-under-toolbar-pagenav");1==d.length&&d.parent().is(":visible")&&
(c(".js-toolbar-pagenav").toggleClass("h-hide-on-xsmall",a).toggleClass("h-hide-imp",!a),d.toggleClass("h-show-on-xsmall",a),c(".js-subtoolbar-list-header").toggleClass("h-hide",!a))}function g(a){e(!1,a);b(!0)}function n(a){e(!0,a);b(!1)}function a(a){e(!1,a);b(!1)}function d(){var d=c(this),m=[g,n,a];e(!0,d);b(!0);c.each(m,function(a,c){if("need_shrink"==k.checkElementShrinkRequirement(d))c(d);else return!1})}c(".conversation-toolbar > .js-shrink-event-parent").on("vbulletin:shrink",d).on("vbulletin:unshrink",
d)},initPmToolbarShrink:function(){function b(b){c(".js-movable-toolbar-button-container, .js-movable-toolbar-button-clone").toggleClass("h-hide-on-large",b);c(".js-movable-toolbar-button, .js-button-filter-my-label").toggleClass("h-hide-imp",!b)}function e(c){b(!1)}function g(){var g=c(this),a=[e];b(!0);c.each(a,function(a,c){if("need_shrink"==k.checkElementShrinkRequirement(g))c(g);else return!1})}c(".js-pm-floating-toolbar-content.js-shrink-event-parent, .js-pm-floating-toolbar-content > .js-shrink-event-parent").on("vbulletin:shrink",
g).on("vbulletin:unshrink",g)},movePmToolbarButtonContainer:function(){var b=c(".js-movable-toolbar-button-container.b-button-group--contiguous-layout");b.length&&(c("body").is(".l-small")?b.insertAfter(".js-movable-toolbar-button-container-marker-small"):b.insertAfter(".js-movable-toolbar-button-container-marker-desktop"))}};l.MediaQueries={setResizeEvent:function(){var b=this.handleResizeEvent;c(window).on("resize orientationchange",b)},handleResizeEvent:function(){var b=c("#vb-page-body").width();
b!=q&&(q=b,(b=vBulletin.contentslider)&&"function"==typeof b.handleWindowResize&&b.handleWindowResize())}};l.checkForVideoSignature=p;var k=l.Debounce;(function(){function b(a){var d=a.first(),f=d.position().top,b=d.outerHeight()/2+f,h=!0;a.each(function(a,d){a=c(d);d=a.position().top;if(d!=f&&(a=a.outerHeight()/2+d,2<Math.abs(a-b)))return h=!1});return h}function e(a){var d=!1;a.each(function(f,b){if(f<a.length-1){var h=c(b),e=a.eq(f+1);f=h.offset();b=e.offset();h=h[0].getBoundingClientRect();e=
e[0].getBoundingClientRect();f.bottom=f.top+h.height-1;f.right=f.left+h.width-1;b.bottom=b.top+e.height-1;b.right=b.left+e.width-1;if(!(f.right<b.left||f.bottom<b.top||b.right<f.left||b.bottom<f.top))return d=!0,!1}});return d}function g(a){k.callbacks.push(a)}function n(){var a=k.callbacks.length,d;for(d=0;d<a;++d)k.callbacks[d]()}(function(a,d){"$:nomunge";var c=a.jQuery||a.Cowboy||(a.Cowboy={}),b;c.throttle=b=function(a,b,f,e){function g(){function c(){m=+new Date;f.apply(l,n)}function g(){h=d}
var l=this,k=+new Date-m,n=arguments;e&&!h&&c();h&&clearTimeout(h);e===d&&k>a?c():!0!==b&&(h=setTimeout(e?g:c,e===d?a-k:a))}var h,m=0;"boolean"!==typeof b&&(e=f,f=b,b=d);c.guid&&(g.guid=f.guid=f.guid||c.guid++);return g};c.debounce=function(a,c,f){return f===d?b(a,c,!1):b(a,f,!1!==c)}})(this);c.extend(k,{areElementsOnOneRow:b,checkElementShrinkRequirement:function(a){var d=a.find("> .js-shrink-event-child").filter(":visible");if(1>d.length)return a=a.data("vbulletin-shrink-triggered"),"undefined"!=
typeof a&&"1"==a?"need_unshrink":"no_children";if(!b(d)||e(d))return a.data("vbulletin-shrink-triggered","1"),"need_shrink";a=a.data("vbulletin-shrink-triggered");return"undefined"!=typeof a&&"1"==a?"need_unshrink":"no_change"},checkShrinkEvent:function(a){"undefined"==typeof a&&(a=c(".js-shrink-event-parent"));a.each(function(a,b){a=c(b);switch(k.checkElementShrinkRequirement(a)){case "need_shrink":a.trigger("vbulletin:shrink");break;case "need_unshrink":a.trigger("vbulletin:unshrink")}})},init:function(){g(k.checkBrowserSize);
g(function(){var a=c(".l-row");1>a.length||a.reverse().each(function(){var a=c(this);if(768<=a.width())return a.removeClass("l-small"),!0;var b=a.find("> .l-col__flex-1, > .l-col__flex-2, > .l-col__flex-3, > .l-col__flex-4, > .l-col__flex-5, > .l-col__flex-6"),e=!1;a.removeClass("l-small");b.reverse().each(function(){if(this.offsetWidth<this.scrollWidth)return e=!0,!1});e&&a.addClass("l-small")})});g(function(){var a=c(".l-row > .l-col__large-1, .l-row > .l-col__large-2, .l-row > .l-col__large-3, .l-row > .l-col__large-4, .l-row > .l-col__large-5, .l-row > .l-col__large-6, .l-row > .l-col__large-7, .l-row > .l-col__large-8, .l-row > .l-col__large-9, .l-row > .l-col__large-10, .l-row > .l-col__large-11, .l-row > .l-col__large-12, .l-row > .l-col__fixed-1, .l-row > .l-col__flex-1, .l-row > .l-col__fixed-2, .l-row > .l-col__flex-2, .l-row > .l-col__fixed-3, .l-row > .l-col__flex-3, .l-row > .l-col__fixed-4, .l-row > .l-col__flex-4, .l-row > .l-col__fixed-5, .l-row > .l-col__flex-5, .l-row > .l-col__fixed-6, .l-row > .l-col__flex-6, .l-row > .l-col__small-1, .l-row > .l-col__small-2, .l-row > .l-col__small-3, .l-row > .l-col__small-4");
1>a.length||a.reverse().each(function(){var a=c(this),b=a.width(),e=parseInt(a.css("marginLeft"),10),g=parseInt(a.css("marginRight"),10);0>e&&(b+=e);0>g&&(b+=g);a.toggleClass("l-column-xsmall",480>b);a.toggleClass("l-column-small",768>b);a.toggleClass("l-column-desktop",768<=b)})});g(function(){c(".ui-dialog:visible .ui-dialog-content").each(function(a,b){a=c(b);a.trigger("vbulletin:dialogresize");a.dialog("option","position",{my:"center",at:"center",of:window,collision:"flipfit"});if(!a.is(".js-no-responsive-resize")){a.closest(".ui-dialog").hide();
b=c(window).width();a.closest(".ui-dialog").show();var d=a.dialog("option","width");if(d>b)a.data("original-dialog-width")||a.data("original-dialog-width",d),a.dialog("option","width",b);else if(d<b){var e=a.data("original-dialog-width");e&&d<e&&a.dialog("option","width",Math.min(e,b))}}})});g(k.checkShrinkEvent);g(l.ChannelContent.movePmToolbarButtonContainer);c(window).on("resize",c.debounce(300,n));n()},callbacks:[],registerCallback:g,runCallbacks:n,registerCallbackOnce:function(a){var b=!1;c.each(k.callbacks,
function(){if(a==this||""+a==""+this)return b=!0,!1});b||g(a)}})})();c(function(){l.MediaQueries.setResizeEvent();l.MediaQueries.handleResizeEvent();l.ChannelContent.cloneAndMoveToolbarButtons();l.ChannelContent.initToolbarShrink();l.ChannelContent.initPmToolbarShrink();var b=c(".search-results-widget .conversation-toolbar");b.addClass("desktop");if(b.find(".toolbar-pagenav").length){var e=c("<div>").addClass("conversation-toolbar mobile-search-results");e.insertAfter(b);e.append(b.find(".toolset-right").clone(!0,
!0))}p();c("html").hasClass("touch")&&(b=navigator.userAgent.toLowerCase(),firefoxIndex=b.indexOf("firefox"),windows7Index=b.indexOf("windows nt 6.1"),-1!==firefoxIndex&&-1!==windows7Index&&c("html").removeClass("touch").addClass("no-touch"));k.init()})})(jQuery);
;

// ***************************
// js.compressed/jquery/jquery.autogrow.min.js
// ***************************
/*
 jQuery Textarea AutoGrow plugin
 Author: Bruno Sampaio
 Licensed under the MIT license
*/
(function(f){function g(b,c){if("TEXTAREA"===b.tagName){var a=f(b),d=f("<div></div>");d.addClass("autogrow-mirror");void 0!==c.id&&d.attr("id",0==index?c.id:c.id+"-"+index);void 0!==c.classes&&d.addClass(c.classes);a.addClass("autogrow-field").on("input keyup",function(e){(e=a.val())&&"\n"!=e.charAt(e.length-1)||(e+=" ");e=e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>");d.html(e);
a.height(d.height())}).off("autogrow.resize").on("autogrow.resize",function(){d.css({border:a.css("border"),"font-family":a.css("font-family"),"font-size":a.css("font-size"),"font-weight":a.css("font-weight"),"letter-spacing":a.css("letter-spacing"),"line-height":a.css("line-height"),padding:a.css("padding"),position:"absolute",visibility:"hidden","white-space":"normal",width:a.css("width"),"word-break":"break-word","z-index":-1,zoom:a.css("zoom")})}).trigger("autogrow.resize").after(d)}}f.fn.autogrow=
function(b,c){var a=this,d=this.context;void 0===c&&(c=b instanceof Object?b:{});"string"!==typeof b&&(b=null);b&&(a=f(b,d),f(document).on("DOMNodeInserted",function(a){a=a.target;f(a,d).is(b)&&g(a,c)}));a.each(function(a,b){g(b,c)});return this}})(jQuery);
;

// ***************************
// js.compressed/jquery/jquery.form.min.js
// ***************************
/*
 jQuery Form Plugin
 version: 2.85 (23-SEP-2011)
 @requires jQuery v1.3.2 or later

 Examples and documentation at: http://malsup.com/jquery/form/
 Dual licensed under the MIT and GPL licenses:
   http://www.opensource.org/licenses/mit-license.php
   http://www.gnu.org/licenses/gpl.html
*/
(function(c){function p(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}c.fn.ajaxSubmit=function(a){function d(b){function d(){function a(){try{var c=(r.contentWindow?r.contentWindow.document:r.contentDocument?r.contentDocument:r.document).readyState;p("state = "+c);"uninitialized"==c.toLowerCase()&&setTimeout(a,50)}catch(C){p("Server abort: ",
C," (",C.name,")"),k(2),x&&clearTimeout(x),x=void 0}}var b=h.attr("target"),g=h.attr("action");m.setAttribute("target",z);f||m.setAttribute("method","POST");g!=e.url&&m.setAttribute("action",e.url);e.skipEncodingOverride||f&&!/post/i.test(f)||h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&(x=setTimeout(function(){u=!0;k(1)},e.timeout));var d=[];try{if(e.extraData)for(var l in e.extraData)d.push(c('<input type="hidden" name="'+l+'" />').attr("value",e.extraData[l]).appendTo(m)[0]);
e.iframeTarget||(v.appendTo("body"),r.attachEvent?r.attachEvent("onload",k):r.addEventListener("load",k,!1));setTimeout(a,15);m.submit()}finally{m.setAttribute("action",g),b?m.setAttribute("target",b):h.removeAttr("target"),c(d).remove()}}function k(a){if(!g.aborted&&!D){try{t=r.contentWindow?r.contentWindow.document:r.contentDocument?r.contentDocument:r.document}catch(w){p("cannot access response document: ",w),a=2}if(1===a&&g)g.abort("timeout");else if(2==a&&g)g.abort("server abort");else if(t&&
t.location.href!=e.iframeSrc||u){r.detachEvent?r.detachEvent("onload",k):r.removeEventListener("load",k,!1);a="success";var b;try{if(u)throw"timeout";var d="xml"==e.dataType||t.XMLDocument||c.isXMLDoc(t);p("isXml="+d);if(!d&&window.opera&&(null==t.body||""==t.body.innerHTML)&&--A){p("requeing onLoad callback, DOM not available");setTimeout(k,250);return}var f=t.body?t.body:t.documentElement;g.responseText=f?f.innerHTML:null;g.responseXML=t.XMLDocument?t.XMLDocument:t;d&&(e.dataType="xml");g.getResponseHeader=
function(a){return{"content-type":e.dataType}[a]};f&&(g.status=Number(f.getAttribute("status"))||g.status,g.statusText=f.getAttribute("statusText")||g.statusText);var h=(e.dataType||"").toLowerCase(),m=/(json|script|text)/.test(h);if(m||e.textarea){var l=t.getElementsByTagName("textarea")[0];if(l)g.responseText=l.value,g.status=Number(l.getAttribute("status"))||g.status,g.statusText=l.getAttribute("statusText")||g.statusText;else if(m){var y=t.getElementsByTagName("pre")[0],q=t.getElementsByTagName("body")[0];
y?g.responseText=y.textContent?y.textContent:y.innerText:q&&(g.responseText=q.textContent?q.textContent:q.innerText)}}else"xml"!=h||g.responseXML||null==g.responseText||(g.responseXML=E(g.responseText));try{B=F(g,h,e)}catch(w){a="parsererror",g.error=b=w||a}}catch(w){p("error caught: ",w),a="error",g.error=b=w||a}g.aborted&&(p("upload aborted"),a=null);g.status&&(a=200<=g.status&&300>g.status||304===g.status?"success":"error");"success"===a?(e.success&&e.success.call(e.context,B,"success",g),n&&c.event.trigger("ajaxSuccess",
[g,e])):a&&(void 0==b&&(b=g.statusText),e.error&&e.error.call(e.context,g,a,b),n&&c.event.trigger("ajaxError",[g,e,b]));n&&c.event.trigger("ajaxComplete",[g,e]);n&&!--c.active&&c.event.trigger("ajaxStop");e.complete&&e.complete.call(e.context,g,a);D=!0;e.timeout&&clearTimeout(x);setTimeout(function(){e.iframeTarget||v.remove();g.responseXML=null},100)}}}var m=h[0],l,n,u,x;var q=!!c.fn.prop;if(b)if(q)for(l=0;l<b.length;l++)q=c(m[b[l].name]),q.prop("disabled",!1);else for(l=0;l<b.length;l++)q=c(m[b[l].name]),
q.removeAttr("disabled");if(c(":input[name=submit],:input[id=submit]",m).length)alert('Error: Form elements must not have name or id of "submit".');else{var e=c.extend(!0,{},c.ajaxSettings,a);e.context=e.context||e;var z="jqFormIO"+(new Date).getTime();if(e.iframeTarget){var v=c(e.iframeTarget);q=v.attr("name");null==q?v.attr("name",z):z=q}else v=c('<iframe name="'+z+'" src="'+e.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"});var r=v[0];var g={aborted:0,responseText:null,
responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var b="timeout"===a?"timeout":"aborted";p("aborting upload... "+b);this.aborted=1;v.attr("src",e.iframeSrc);g.error=b;e.error&&e.error.call(e.context,g,b,a);n&&c.event.trigger("ajaxError",[g,e,b]);e.complete&&e.complete.call(e.context,g,b)}};(n=e.global)&&!c.active++&&c.event.trigger("ajaxStart");n&&c.event.trigger("ajaxSend",[g,e]);if(e.beforeSend&&
!1===e.beforeSend.call(e.context,g,e))e.global&&c.active--;else if(!g.aborted){(b=m.clk)&&(q=b.name)&&!b.disabled&&(e.extraData=e.extraData||{},e.extraData[q]=b.value,"image"==b.type&&(e.extraData[q+".x"]=m.clk_x,e.extraData[q+".y"]=m.clk_y));e.forceSync?d():setTimeout(d,10);var B,t,A=50,D,E=c.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&"parsererror"!=
b.documentElement.nodeName?b:null},G=c.parseJSON||function(a){return window.eval("("+a+")")},F=function(a,b,e){var d=a.getResponseHeader("content-type")||"",f="xml"===b||!b&&0<=d.indexOf("xml");a=f?a.responseXML:a.responseText;f&&"parsererror"===a.documentElement.nodeName&&c.error&&c.error("parsererror");e&&e.dataFilter&&(a=e.dataFilter(a,b));"string"===typeof a&&("json"===b||!b&&0<=d.indexOf("json")?a=G(a):("script"===b||!b&&0<=d.indexOf("javascript"))&&c.globalEval(a));return a}}}}if(!this.length)return p("ajaxSubmit: skipping submit process - no element selected"),
this;var h=this;"function"==typeof a&&(a={success:a});var f=this.attr("method");var b=this.attr("action");(b=(b="string"===typeof b?c.trim(b):"")||window.location.href||"")&&(b=(b.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:b,success:c.ajaxSettings.success,type:f||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&
!1===a.beforeSerialize(this,a))return p("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var k=this.formToArray(a.semantic);if(a.data)for(n in a.extraData=a.data,a.data)if(c.isArray(a.data[n]))for(var m in a.data[n])k.push({name:n,value:a.data[n][m]});else{var u=a.data[n];u=c.isFunction(u)?u():u;k.push({name:n,value:u})}if(a.beforeSubmit&&!1===a.beforeSubmit(k,this,a))return p("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[k,this,a,
b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var n=c.param(k);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+n,a.data=null):a.data=n;var l=[];a.resetForm&&l.push(function(){h.resetForm()});a.clearForm&&l.push(function(){h.clearForm()});if(!a.dataType&&a.target){var A=a.success||function(){};l.push(function(b){var d=a.replaceTarget?"replaceWith":"html";c(a.target)[d](b).each(A,arguments)})}else a.success&&l.push(a.success);a.success=
function(b,c,d){for(var f=a.context||a,k=0,m=l.length;k<m;k++)l[k].apply(f,[b,c,d||h,h])};n=0<c("input:file",this).length;m="multipart/form-data"==h.attr("enctype")||"multipart/form-data"==h.attr("encoding");!1!==a.iframe&&(n||a.iframe||m)?a.closeKeepAlive?c.get(a.closeKeepAlive,function(){d(k)}):d(k):c.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){if(0===this.length){var d=this.selector,h=this.context;if(!c.isReady&&d)return p("DOM not ready, queuing ajaxForm"),
c(function(){c(d,h).ajaxForm(a)}),this;p("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().on("submit.form-plugin",function(d){d.isDefaultPrevented()||(d.preventDefault(),c(this).ajaxSubmit(a))}).on("click.form-plugin",function(a){var b=a.target,d=c(b);if(!d.is(":submit,input:image")){b=d.closest(":submit");if(0==b.length)return;b=b[0]}var f=this;f.clk=b;"image"==b.type&&(void 0!=a.offsetX?(f.clk_x=a.offsetX,f.clk_y=a.offsetY):
"function"==typeof c.fn.offset?(d=d.offset(),f.clk_x=a.pageX-d.left,f.clk_y=a.pageY-d.top):(f.clk_x=a.pageX-b.offsetLeft,f.clk_y=a.pageY-b.offsetTop));setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)})};c.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a){var d=[];if(0===this.length)return d;var h=this[0],f=a?h.getElementsByTagName("*"):h.elements;if(!f)return d;var b,k,m,p;var n=0;for(m=f.length;n<m;n++){var l=f[n];if(b=l.name)if(a&&
h.clk&&"image"==l.type)l.disabled||h.clk!=l||(d.push({name:b,value:c(l).val()}),d.push({name:b+".x",value:h.clk_x},{name:b+".y",value:h.clk_y}));else if((k=c.fieldValue(l,!0))&&k.constructor==Array)for(l=0,p=k.length;l<p;l++)d.push({name:b,value:k[l]});else null!==k&&"undefined"!=typeof k&&d.push({name:b,value:k})}!a&&h.clk&&(a=c(h.clk),f=a[0],(b=f.name)&&!f.disabled&&"image"==f.type&&(d.push({name:b,value:a.val()}),d.push({name:b+".x",value:h.clk_x},{name:b+".y",value:h.clk_y})));return d};c.fn.formSerialize=
function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var d=[];this.each(function(){var h=this.name;if(h){var f=c.fieldValue(this,a);if(f&&f.constructor==Array)for(var b=0,k=f.length;b<k;b++)d.push({name:h,value:f[b]});else null!==f&&"undefined"!=typeof f&&d.push({name:this.name,value:f})}});return c.param(d)};c.fn.fieldValue=function(a){for(var d=[],h=0,f=this.length;h<f;h++){var b=c.fieldValue(this[h],a);null===b||"undefined"==typeof b||b.constructor==Array&&!b.length||
(b.constructor==Array?c.merge(d,b):d.push(b))}return d};c.fieldValue=function(a,d){var h=a.name,f=a.type,b=a.tagName.toLowerCase();void 0===d&&(d=!0);if(d&&(!h||a.disabled||"reset"==f||"button"==f||("checkbox"==f||"radio"==f)&&!a.checked||("submit"==f||"image"==f)&&a.form&&a.form.clk!=a||"select"==b&&-1==a.selectedIndex))return null;if("select"==b){b=a.selectedIndex;if(0>b)return null;d=[];a=a.options;h=(f="select-one"==f)?b+1:a.length;for(b=f?b:0;b<h;b++){var k=a[b];if(k.selected){var m=k.value;
m||(m=k.attributes&&k.attributes.value&&!k.attributes.value.specified?k.text:k.value);if(f)return m;d.push(m)}}return d}return c(a).val()};c.fn.clearForm=function(){return this.each(function(){c("input,select,textarea",this).clearFields()})};c.fn.clearFields=c.fn.clearInputs=function(){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var c=this.type,h=this.tagName.toLowerCase();a.test(c)||"textarea"==h?this.value="":"checkbox"==
c||"radio"==c?this.checked=!1:"select"==h&&(this.selectedIndex=-1)})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var d=this.type;"checkbox"==d||"radio"==d?this.checked=a:"option"==this.tagName.toLowerCase()&&(d=c(this).parent("select"),
a&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=a)})};c.fn.ajaxSubmit.debug=!1})(jQuery);
;

// ***************************
// js.compressed/jquery/jquery.selectBox.min.js
// ***************************
/*
 jQuery selectBox - A cosmetic, styleable replacement for SELECT elements

  Copyright 2012 Cory LaViska for A Beautiful Site, LLC.

  https://github.com/claviska/jquery-selectBox

  Licensed under both the MIT license and the GNU GPLv2 (same as jQuery: http://jquery.org/license)


  Note: Modified for vBulletin. Grep for 'vBulletin' to see the changes.
*/
jQuery&&function(b){b.extend(b.fn,{selectBox:function(x,k){var y,p="",z=navigator.platform.match(/mac/i),E=function(a,c){if(navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)||"select"!==a.tagName.toLowerCase())return!1;a=b(a);if(a.data("selectBox-control")||a.is(":hidden")&&(!c||!c.allowHidden))return!1;var e=b('<a class="selectBox" />'),d=a.attr("multiple")||1<parseInt(a.attr("size"));c=c||{};e.addClass(a.attr("class")).attr("title",a.attr("title")||"").attr("tabindex",
parseInt(a.attr("tabindex"))).css("display","inline-block").on("focus.selectBox",function(){this!==document.activeElement&&document.body!==document.activeElement&&b(document.activeElement).blur();e.hasClass("selectBox-active")||(e.addClass("selectBox-active"),a.trigger("focus"))}).on("blur.selectBox",function(){e.hasClass("selectBox-active")&&(e.removeClass("selectBox-active"),a.trigger("blur"))});if(!b(window).data("selectBox-bindings"))b(window).data("selectBox-bindings",!0).on("scroll.selectBox",
l).on("resize.selectBox",l);a.attr("disabled")&&e.addClass("selectBox-disabled");a.on("click.selectBox",function(a){e.focus();a.preventDefault()});if(d){var f=t(a,"inline");e.append(f).data("selectBox-options",f).addClass("selectBox-inline selectBox-menuShowing").on("keydown.selectBox",function(b){A(a,b)}).on("keypress.selectBox",function(b){B(a,b)}).on("mousedown.selectBox",function(a){b(a.target).is("A.selectBox-inline")&&a.preventDefault();e.hasClass("selectBox-focus")||e.focus()}).insertAfter(a);
e.width(a.css("fontSize",e.css("fontSize")).outerWidth());if(!a[0].style.height){d=a.attr("size")?parseInt(a.attr("size")):5;var h=e.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo("body");h.find(".selectBox-options").html("<li><a> </a></li>");var g=parseInt(h.find(".selectBox-options A:first").html("&nbsp;").outerHeight());h.remove();e.height(g*d)}}else d=b('<span class="selectBox-label" />'),h=b('<span class="selectBox-arrow" />'),d.attr("class",C(a)).text(D(a)),
f=t(a,"dropdown"),f.appendTo("BODY"),e.data("selectBox-options",f).addClass("selectBox-dropdown").append(d).append(h).on("mousedown.selectBox",function(b){e.hasClass("selectBox-menuShowing")?l():(b.stopPropagation(),f.data("selectBox-down-at-x",b.screenX).data("selectBox-down-at-y",b.screenY),m(a))}).on("keydown.selectBox",function(b){A(a,b)}).on("keypress.selectBox",function(b){B(a,b)}).on("open.selectBox",function(b,c){c&&!0===c._selectBox||m(a)}).on("close.selectBox",function(a,b){b&&!0===b._selectBox||
l()}).insertAfter(a),e.width(a.css("fontSize",e.css("fontSize")).width()),h=e.width()-h.outerWidth()-parseInt(d.css("paddingLeft"))-parseInt(d.css("paddingRight")),d.width(h);u(e);d=b(".selectBox-label",e);h=parseInt(d.css("paddingLeft"))-4+parseInt(d.css("paddingRight"));g=e.width()+h;g<=e.parent().innerWidth()&&(e.width(g),d.width(d.width()+h));a.addClass("selectBox").data("selectBox-control",e).data("selectBox-settings",c).hide()},t=function(a,c){var e=function(a,c){a.children("OPTION, OPTGROUP").each(function(){if(b(this).is("OPTION"))if(0<
b(this).length){var a=b(this),d=c,f=b("<li />"),h=b("<a />");f.addClass(a.attr("class"));f.data(a.data());h.attr("rel",a.val()).text(a.text());f.append(h);a.attr("disabled")&&f.addClass("selectBox-disabled");a.prop("selected")&&f.addClass("selectBox-selected");d.append(f)}else c.append("<li> </li>");else a=b('<li class="selectBox-optgroup" />'),a.text(b(this).attr("label")),c.append(a),c=e(b(this),c)});return c};switch(c){case "inline":var d=b('<ul class="selectBox-options" />');d=e(a,d);d.find("A").on("mouseover.selectBox",
function(c){n(a,b(this).parent())}).on("mouseout.selectBox",function(c){v(a,b(this).parent())}).on("mousedown.selectBox",function(b){b.preventDefault();a.selectBox("control").hasClass("selectBox-active")||a.selectBox("control").focus()}).on("mouseup.selectBox",function(c){l();q(a,b(this).parent(),c)});u(d);return d;case "dropdown":d=b('<ul class="selectBox-dropdown-menu selectBox-options" />');d=e(a,d);d.data("selectBox-select",a).css("display","none").appendTo("BODY").find("A").on("mousedown.selectBox",
function(a){a.preventDefault();a.screenX===d.data("selectBox-down-at-x")&&a.screenY===d.data("selectBox-down-at-y")&&(d.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),l())}).on("mouseup.selectBox",function(c){if(c.screenX!==d.data("selectBox-down-at-x")||c.screenY!==d.data("selectBox-down-at-y"))d.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),q(a,b(this).parent()),l()}).on("mouseover.selectBox",function(c){n(a,b(this).parent())}).on("mouseout.selectBox",
function(c){v(a,b(this).parent())});c=a.attr("class")||"";if(""!==c){c=c.split(" ");for(var f in c)d.addClass(c[f]+"-selectBox-dropdown-menu")}u(d);return d}},C=function(a){return("selectBox-label "+(b(a).find("OPTION:selected").attr("class")||"")).replace(/\s+$/,"")},D=function(a){return b(a).find("OPTION:selected").text()||String.fromCharCode(160)},w=function(a){a=b(a);var c=a.data("selectBox-control");c&&c.find(".selectBox-label").attr("class",C(a)).text(D(a))},m=function(a){a=b(a);var c=a.data("selectBox-control")||
b(),e=a.data("selectBox-settings")||{},d=c.data("selectBox-options")||b();if(c.hasClass("selectBox-disabled"))return!1;l();var f=parseInt(c.css("borderBottomWidth"))||0;d.width(c.innerWidth()).css({top:c.offset().top+c.outerHeight()-f,left:c.offset().left});if(a.triggerHandler("beforeopen"))return!1;f=function(){a.triggerHandler("open",{_selectBox:!0});var e=b(window).scrollTop(),f=e+b(window).height(),k=d.offset().top,l=k+d.outerHeight();0<=k-e&&0<=f-l||d.css("top",parseFloat(d.css("top"))-(c.outerHeight()+
d.outerHeight()))};switch(e.menuTransition){case "fade":d.fadeIn(e.menuSpeed,f);break;case "slide":d.slideDown(e.menuSpeed,f);break;default:d.show(e.menuSpeed,f)}e.menuSpeed||f();e=d.find(".selectBox-selected:first");r(a,e,!0);n(a,e);c.addClass("selectBox-menuShowing");b(document).on("mousedown.selectBox",function(a){b(a.target).parents().addBack().hasClass("selectBox-options")||l()})},l=function(){0!==b(".selectBox-dropdown-menu:visible").length&&(b(document).off("mousedown.selectBox"),b(".selectBox-dropdown-menu").each(function(){var a=
b(this),c=a.data("selectBox-select")||b(),e=c.data("selectBox-control")||b(),d=c.data("selectBox-settings")||{};if(c.triggerHandler("beforeclose"))return!1;var f=function(){c.triggerHandler("close",{_selectBox:!0})};switch(d.menuTransition){case "fade":a.fadeOut(d.menuSpeed,f);break;case "slide":a.slideUp(d.menuSpeed,f);break;default:a.hide(d.menuSpeed,f)}d.menuSpeed||f();e.removeClass("selectBox-menuShowing")}))},q=function(a,c,e){a=b(a);c=b(c);var d=a.data("selectBox-control")||b();a.data("selectBox-settings");
if(d.hasClass("selectBox-disabled")||0===c.length||c.hasClass("selectBox-disabled"))return!1;a.attr("multiple")?e.shiftKey&&d.data("selectBox-last-selected")?(c.toggleClass("selectBox-selected"),e=c.index()>d.data("selectBox-last-selected").index()?c.siblings().slice(d.data("selectBox-last-selected").index(),c.index()):c.siblings().slice(c.index(),d.data("selectBox-last-selected").index()),e=e.not(".selectBox-optgroup, .selectBox-disabled"),c.hasClass("selectBox-selected")?e.addClass("selectBox-selected"):
e.removeClass("selectBox-selected")):z&&e.metaKey||!z&&e.ctrlKey?c.toggleClass("selectBox-selected"):(c.siblings().removeClass("selectBox-selected"),c.addClass("selectBox-selected")):(c.siblings().removeClass("selectBox-selected"),c.addClass("selectBox-selected"));d.hasClass("selectBox-dropdown")&&d.find(".selectBox-label").text(c.text());var f=0,h=[];a.attr("multiple")?d.find(".selectBox-selected A").each(function(){h[f++]=b(this).attr("rel")}):h=c.find("A").attr("rel");d.data("selectBox-last-selected",
c);a.val()!==h&&(a.val(h),w(a),a.trigger("change"));return!0},n=function(a,c){a=b(a);c=b(c);((a.data("selectBox-control")||b()).data("selectBox-options")||b()).find(".selectBox-hover").removeClass("selectBox-hover");c.addClass("selectBox-hover")},v=function(a,c){a=b(a);b(c);((a.data("selectBox-control")||b()).data("selectBox-options")||b()).find(".selectBox-hover").removeClass("selectBox-hover")},r=function(a,c,e){if(c&&0!==c.length){a=b(a);a=a.data("selectBox-control")||b();var d=a.data("selectBox-options")||
b();a=a.hasClass("selectBox-dropdown")?d:d.parent();d=parseInt(c.offset().top-a.position().top);var f=parseInt(d+c.outerHeight());e?a.scrollTop(c.offset().top-a.offset().top+a.scrollTop()-a.height()/2):(0>d&&a.scrollTop(c.offset().top-a.offset().top+a.scrollTop()),f>a.height()&&a.scrollTop(c.offset().top+c.outerHeight()-a.offset().top+a.scrollTop()-a.height()))}},A=function(a,c){a=b(a);var e=a.data("selectBox-control")||b(),d=e.data("selectBox-options")||b(),f=a.data("selectBox-settings")||{},h;if(!e.hasClass("selectBox-disabled"))switch(c.keyCode){case 8:c.preventDefault();
p="";break;case 9:case 27:l();v(a);break;case 13:e.hasClass("selectBox-menuShowing")?(q(a,d.find("LI.selectBox-hover:first"),c),e.hasClass("selectBox-dropdown")&&l()):m(a);break;case 38:case 37:c.preventDefault();if(e.hasClass("selectBox-menuShowing")){var g=d.find(".selectBox-hover").prev("LI");e=d.find("LI:not(.selectBox-optgroup)").length;for(h=0;(0===g.length||g.hasClass("selectBox-disabled")||g.hasClass("selectBox-optgroup"))&&!(g=g.prev("LI"),0===g.length&&(g=f.loopOptions?d.find("LI:last"):
d.find("LI:first")),++h>=e););n(a,g);q(a,g,c);r(a,g)}else m(a);break;case 40:case 39:if(c.preventDefault(),e.hasClass("selectBox-menuShowing")){g=d.find(".selectBox-hover").next("LI");e=d.find("LI:not(.selectBox-optgroup)").length;for(h=0;(0===g.length||g.hasClass("selectBox-disabled")||g.hasClass("selectBox-optgroup"))&&!(g=g.next("LI"),0===g.length&&(g=f.loopOptions?d.find("LI:first"):d.find("LI:last")),++h>=e););n(a,g);q(a,g,c);r(a,g)}else m(a)}},B=function(a,c){a=b(a);var e=a.data("selectBox-control")||
b(),d=e.data("selectBox-options")||b();if(!e.hasClass("selectBox-disabled"))switch(c.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:e.hasClass("selectBox-menuShowing")||m(a),c.preventDefault(),clearTimeout(y),p+=String.fromCharCode(c.charCode||c.keyCode),d.find("A").each(function(){if(b(this).text().substr(0,p.length).toLowerCase()===p.toLowerCase())return n(a,b(this).parent()),r(a,b(this).parent()),!1}),y=setTimeout(function(){p=""},1E3)}},F=function(a,c){a=b(a);a.val(c);
c=a.val();null!==c||a.attr("multiple")||(a[0].selectedIndex=0,c=a.val());var e=a.data("selectBox-control");if(e){var d=a.data("selectBox-settings")||{};e=e.data("selectBox-options")||b();w(a);e.find(".selectBox-selected").removeClass("selectBox-selected");e.find("A").each(function(){if("object"===typeof c)for(var a=0;a<c.length;a++)b(this).attr("rel")==c[a]&&b(this).parent().addClass("selectBox-selected");else b(this).attr("rel")==c&&b(this).parent().addClass("selectBox-selected")});d.change&&d.change.call(a)}},
u=function(a){b(a).css("MozUserSelect","none").on("selectstart",function(a){a.preventDefault()})};switch(x){case "control":return b(this).data("selectBox-control");case "settings":if(!k)return b(this).data("selectBox-settings");b(this).each(function(){b(this).data("selectBox-settings",b.extend(!0,b(this).data("selectBox-settings"),k))});break;case "options":if(void 0===k)return b(this).data("selectBox-control").data("selectBox-options");b(this).each(function(){var a=b(this);var c=a.data("selectBox-control")||
b();a.data("selectBox-settings");switch(typeof k){case "string":a.html(k);break;case "object":for(f in a.html(""),k)if(null!==k[f])if("object"===typeof k[f]){var e=b('<optgroup label="'+f+'" />');for(d in k[f])e.append('<option value="'+d+'">'+k[f][d]+"</option>");a.append(e)}else e=b('<option value="'+f+'">'+k[f]+"</option>"),a.append(e)}if(c){c.data("selectBox-options").remove();var d=c.hasClass("selectBox-dropdown")?"dropdown":"inline";var f=t(a,d);c.data("selectBox-options",f);switch(d){case "inline":c.append(f);
break;case "dropdown":w(a),b("BODY").append(f)}}});break;case "value":if(void 0===k)return b(this).val();b(this).each(function(){F(this,k)});break;case "refresh":b(this).each(function(){var a=b(this);a.selectBox("options",a.html())});break;case "enable":b(this).each(function(){var a=b(this);a.attr("disabled",!1);(a=a.data("selectBox-control"))&&a.removeClass("selectBox-disabled")});break;case "disable":b(this).each(function(){var a=b(this);a.attr("disabled",!0);(a=a.data("selectBox-control"))&&a.addClass("selectBox-disabled")});
break;case "destroy":b(this).each(function(){var a=b(this);var c=a.data("selectBox-control");c&&((c.data("selectBox-options")||b()).remove(),c.remove(),a.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control",null).removeData("selectBox-settings").data("selectBox-settings",null).show())});break;default:b(this).each(function(){E(this,x)})}return b(this)}})}(jQuery);
;

// ***************************
// js.compressed/storage.js
// ***************************
vBulletin.createStorageTools=function(e,n,p){function d(a){if(!a.loaded){a.loaded=!0;try{var b=localStorage.getItem(e+a.name);if(b)if(b=JSON.parse(b),a.istimed){a.cache.values=b.values||a.cache.values;a.cache.times=b.times||a.cache.times;b=!1;var c=a.cache.values,f=a.cache.times,d;for(d in c)f[d]<a.latest&&(delete c[d],delete f[d],b=!0);b&&g(a)}else a.cache.values=b}catch(q){}}}function g(a){try{var b=e+a.name,c=a.cache;a.istimed||(c=c.values);localStorage.removeItem(b);localStorage.setItem(b,
JSON.stringify(c))}catch(f){}}function h(a,b,c,d){this.loaded=!1;this.name=a;this.cache={values:{},times:{}};if(this.istimed=!!b)this.latest=c,this.current=d}function k(a,b,c){var d={path:n,domain:p};c&&(!0===c&&(c=365),d.expires=c);$.cookie(e+a,b,d)}function l(a){return $.cookie(e+a)}function m(a,b){this.name=a;this.permanent=b;try{var c=l(a);c&&(this.cache=JSON.parse(c))}catch(f){}this.cache=this.cache||{}}try{localStorage.removeItem("vbcache-")}catch(a){}h.prototype={get:function(a){d(this);var b=
this.cache.values;return b.hasOwnProperty(a)?b[a]:null},getAll:function(){d(this);return this.cache.values},isSet:function(a){d(this);return this.cache.values.hasOwnProperty(a)},set:function(a,b){d(this);var c=a;$.isPlainObject(a)||(c={},c[a]=b);for(_key in c)this.cache.values[_key]=c[_key],this.istimed&&(this.cache.times[_key]=this.current);g(this)},unset:function(a){d(this);delete this.cache.values[a];delete this.cache.times[a];g(this)}};m.prototype={get:function(a,b){return this.cache.hasOwnProperty(a)?
this.cache[a]:void 0!==b?b:null},getAll:function(){return this.cache},set:function(a,b){this.cache[a]=b;k(this.name,JSON.stringify(this.cache),this.permanent)},unset:function(a){delete this.cache[a];k(this.name,JSON.stringify(this.cache),this.permanent)}};return{createStorage:a=>new h(a),createStorageTimed:(a,b,c)=>new h(a,!0,b,c),createArrayCookie:(a,b)=>new m(a,b),setCookie:k,getCookie:l}};
;

// ***************************
// js.compressed/sitedata.js
// ***************************
vBulletin.createSiteDataTools=function(p){function g(){var a=[],b=[];(new Set(h)).forEach(function(d){a.push(d)});a=a.filter(function(a){return!k.isSet(a)});(new Set(l)).forEach(function(a){b.push(a)});b=b.filter(function(a){return!m.isSet(a+n)});vBulletin.loadingIndicator.suppressNextAjaxIndicator();$.ajax({url:p+"/ajax/loaddata",async:!1,data:{options:a,phrases:b},type:"POST",dataType:"json",success:function(d){if(d&&!d.hasOwnProperty("errors")){h.length=0;l.length=0;var c={},e=d.options;
$.each(a,function(a,b){c[b]=e.hasOwnProperty(b)?e[b]:null});k.set(c);var f={},g=d.phrases;$.each(b,function(a,b){f[b+n]=g.hasOwnProperty(b)?g[b]:b});m.set(f)}else console.warn("Unexpected result when fetching options",d)},error:function(a,b,c){console.warn("Error when fetching options: {0}".format(c))}})}var f={},m,l,c,n,e={},k,h;f.init=function(a,b,d,e){c=a;n="-"+b;m=d;l=e};f.get=function(){if(1>arguments.length)return console.log("vBulletin.phrase.get() called with no parameters"),"";var a=arguments;
Array.isArray(a[0])&&(a=a[0]);var b=a[0]+n;m.isSet(b)||(l.push(a[0]),g());var d=m.get(b);if(!d)return b;d=d.replace(/\{sitename\}/g,e.get("bbtitle")).replace(/\{musername\}/g,c.musername).replace(/\{username\}/g,c.username).replace(/\{userid\}/g,c.userid).replace(/\{registerurl\}/g,c.registerurl).replace(/\{activationurl\}/g,c.activationurl).replace(/\{helpurl\}/g,c.helpurl).replace(/\{contacturl\}/g,c.contacturl).replace(/\{homeurl\}/g,c.baseurl).replace(/\{date\}/g,c.datenow).replace(/\{register_page\}/g,
c.registerurl).replace(/\{activation_page\}/g,c.activationurl).replace(/\{help_page\}/g,c.helpurl).replace(/\{sessionurl\}/g,"").replace(/\{sessionurl_q\}/g,"");for(b=1;b<a.length;++b)d=d.replace(new RegExp("%"+b+"\\$s","gm"),a[b]);return d};f.register=function(a){$.merge(l,$.makeArray(a))};e.init=function(a,b){k=a;h=b};e.get=function(a){k.isSet(a)||(h.push(a),g(a));return k.get(a)};e.register=function(a){$.merge(h,$.makeArray(a))};return{phrase:f,options:e}};
;

// ***************************
// js.compressed/dialog.js
// ***************************
vBulletin.precache(["cancel","no","ok","yes"],[]);
vBulletin.createDialogTools=(f,w,g)=>{function p(a,b,c){a.data("created")||a.dialog({autoOpen:!1,modal:!0,resizable:!1,closeOnEscape:!1,showCloseButton:!1,dialogClass:"dialog-container dialog-box "+c,create:()=>{a.data("created",!0)}});a.dialog("option","width",b||500);a.find(".js-button").toggleClass("b-button--sitebuilder",f("body").is(".edit-mode, .js-edit-mode-style"))}function q(a,b){a=a.find(".icon");a.removeClass((a,b)=>(b.match(/b-icon\S+\b/g)||[]).join(" ")+" no-icon b-icon");switch(b){case "warning":case "error":a.addClass("b-icon b-icon__warning-l--red h-margin-right-xl");
a.show();break;default:a.addClass("no-icon").hide()}}function r(a,b,c=a=>a){b&&a.find(".message").html(c(b))}function t(a){var b=f("#prompt-dialog");b.data("created")||b.dialog({autoOpen:!1,modal:!0,resizable:!1,closeOnEscape:!1,showCloseButton:!1,width:500,dialogClass:"dialog-container prompt-dialog-container dialog-box",create:function(){b.data("created",!0)}});a=a||{};b.dialog("option","title",a.title);var c=b.find(".dialog-content"),e=c.find(".message");a.message&&e.html(a.message);e=a.initialValue||
"";if(a.multiline){var d=b.find("textarea.input-box").val(e).removeClass("h-hide");d.prev().addClass("h-hide");c.removeClass("table");c.find("> .td").removeClass("td")}else d=b.find("input.input-box").val(e).removeClass("h-hide"),d.next().addClass("h-hide"),Number(a.maxlength)?d.attr("maxlength",Number(a.maxlength)):d.removeAttr("maxlength"),c.addClass("table"),c.find("> div").addClass("td");a.buttonLabel=a.buttonLabel||{};a.buttonLabel.okLabel=a.buttonLabel.okLabel||g.get("ok");a.buttonLabel.cancelLabel=
a.buttonLabel.cancelLabel||g.get("cancel");f("#btnPromptDialogOK").html(a.buttonLabel.okLabel);f("#btnPromptDialogCancel").html(a.buttonLabel.cancelLabel);var h;b.find(".js-button").toggleClass("b-button--sitebuilder",f("body").is(".edit-mode, .js-edit-mode-style"));b.off("dialogopen").on("dialogopen",function(){f("#btnPromptDialogOK").off("click").on("click",function(){h=this;var c=f.trim(d.val());if(a.validation&&"object"==typeof a.validation){var e=a.validation;if(!e.override&&e.callback){var l=
e.callback;Array.isArray(l)||(l=[l]);for(i=0;i<l.length;i++)if("function"==typeof l[i]){var n=l[i].apply(b,[d,a]);if(!0!==n)return n&&e.showError&&b.find(".js-prompt-error").html(g.get(n)).removeClass("h-hide"),d.trigger("select").trigger("focus"),!1}}if("function"==typeof e.custom&&!e.custom.apply(this,[d]))return!1}if("function"==typeof a.onClickOK){var k=a.onClickOK.apply(this,[c]);if("undefined"!=typeof a.onClickOKWithAjax&&a.onClickOKWithAjax)return!1}if(!1===k)return!1;if("function"==typeof a.onBeforeClose){var m=
a.onBeforeClose.apply(this);if("undefined"!=typeof a.onBeforeCloseWithAjax&&a.onBeforeCloseWithAjax)return!1}if(!1===m)return!1;b.dialog("close")}).trigger("focus");f("#btnPromptDialogCancel").off("click").on("click",function(){h=this;"function"==typeof a.onClickCancel&&a.onClickCancel.apply(this);"function"==typeof a.onBeforeClose&&a.onBeforeClose.apply(this);b.dialog("close")})});b.off("dialogclose").on("dialogclose",function(){b.find(".js-prompt-error").addClass("h-hide");"function"==typeof a.onAfterClose&&
(a.onAfterClose.apply(h),d.val(""))});b.dialog("open");d.trigger("focus");return b}function u(a){a=a||{};let b=f("#confirm-dialog");p(b,a.width,"");b.dialog("option","dialogClass","dialog-container confirm-dialog-container dialog-box "+(a.dialogClass||""));var c=a.title;b.dialog("option","title",c);b.closest(".ui-dialog").find(".ui-dialog-title").html(c);c=b.find(".dialog-content");q(c,a.iconType);r(c,a.message,a=>a.replace("\n","<br />"));c=a.buttonLabel||{};let e=f("#btnConfirmDialogYes").html(c.yesLabel||
g.get("yes"));$noButton=f("#btnConfirmDialogNo").html(c.noLabel||g.get("no"));e.addClass("b-button--primary").removeClass("b-button--secondary");$noButton.addClass("b-button--secondary").removeClass("b-button--primary");let d;processcallback=a=>k(a).apply(d,[b]);b.offon("dialogopen",function(){e.offon("click",function(){d=this;if(!1===processcallback(a.onClickYes)||a.onClickYesWithAjax||!1===processcallback(a.onBeforeClose))return!1;b.dialog("close")}).trigger("focus");$noButton.offon("click",function(){d=
this;processcallback(a.onClickNo);processcallback(a.onBeforeClose);b.dialog("close")})});b.offon("dialogclose",()=>{processcallback(a.onAfterClose)});b.dialog("open");return b}function v(a){a=a||{};var b=f("#alert-dialog");p(b,a.width,"alert-dialog-container");b.dialog("option","title",a.title);var c=b.find(".dialog-content"),e=f("#btnAlertDialogOK"),d="",h="";q(c,a.iconType);r(c,a.message);a.maxHeight&&(d=a.maxHeight,h="auto");c.css({"max-height":d,overflow:h});e.html(a.buttonLabel||g.get("ok"));
b.offon("dialogopen",function(){e.offon("click",function(){k(a.onBeforeClose).apply(this);b.dialog("close")}).trigger("focus");b.parent(".alert-dialog-container").css("z-index","10100")});b.offon("dialogclose",()=>{k(a.onAfterClose).apply(e)});b.dialog("open");return b}function m(a,b,c,e){var d=e;d instanceof jQuery&&(d=()=>{e.trigger("focus")});v({title:g.get(a),message:g.get(b),iconType:c,onAfterClose:d})}let k=w.ensureFun;f.widget("ui.dialog",f.ui.dialog,{_allowInteraction:function(a){if(this._super(a)||
a.target.ownerDocument!=this.document[0]||f(a.target).closest(".cke_dialog").length||f(a.target).closest(".cke").length)return!0}});(function(){var a=jQuery.fn.dialog;jQuery.fn.dialog=function(){if("object"==typeof arguments[0]){var b=function(){};"function"==typeof arguments[0].open&&(b=arguments[0].open);arguments[0].open=function(){var a=f(this);setTimeout(function(){vBulletin.Responsive.Debounce.runCallbacks();a.closest(".ui-dialog").find(".ui-dialog-titlebar-close .ui-icon").removeClass("ui-icon ui-icon-closethick").addClass("b-icon b-icon__x-square--gray")},
0);a.closest(".ui-dialog").find(".ui-dialog-content").removeClass("h-hide");return b.apply(this,arguments)};var c=function(){};"function"==typeof arguments[0].close&&(c=arguments[0].close);arguments[0].close=function(){f(this).closest(".ui-dialog").find(".ui-dialog-content").addClass("h-hide");return c.apply(this,arguments)}}return a.apply(this,arguments)}})();t.validationString=function(a,b){return(a=f.trim(a.val()))?b.multiline&&a.length>b.maxlength?["message_too_long",b.maxlength]:!0:"please_enter_a_value"};
return{openAlertDialog:v,openConfirmDialog:u,openPromptDialog:t,openTemplateConfirmDialog:function(a,b,c){let e=b.title,d=u({title:g.get(e),message:g.get("loading_ellipsis"),width:b.width,dialogClass:"loading "+(b.dialogClass||""),buttonLabel:{yesLabel:g.get(b.yesPhrase||"yes"),noLabel:g.get(b.noPhrase||"no")},onClickYes:b.onClickYes,onClickNo:b.onClickNo}),h=c.data||{};h.isAjaxTemplateRender=!0;h.isAjaxTemplateRenderWithData=!0;let k=c.call||"/ajax/render/"+c.name;return new Promise((b,g)=>{a.ajax({call:k,
data:h,success:a=>{d.parent(".confirm-dialog-container").removeClass("loading");f(".dialog-content .message",d).html(a.template);d.dialog("option","position",{of:window});b(d)},api_error:c.api_error,title_phrase:e,error_phrase:"error_loading_dialog_form",after_error:()=>{g();d.dialog("close")}})})},popupWindow:function(a,b,c,e){let d=window,f=document;a=d.open(a,b,"status=yes,resizable=yes,scrollbars=yes,width="+c+", height="+e+", top="+((d.innerHeight||f.documentElement.clientHeight||screen.height)/
2-e/2+(d.screenTop||screen.top))+", left="+((d.innerWidth||f.documentElement.clientWidth||screen.width)/2-c/2+(d.screenLeft||screen.left)));d.focus&&a.focus();return a},alert:m,warning:(a,b,c)=>m(a,b,"warning",c),error:(a,b,c)=>m(a,b,"error",c)}};
;

// ***************************
// js.compressed/ajax.js
// ***************************
vBulletin.precache(["login","cancel"],[]);
vBulletin.createAjaxTools=(r,h,g,t)=>{function l(a,b){if(Array.isArray(a))a.unshift(b);else{var c=a;a=function(...a){b.apply(this,a);"function"==typeof c&&c.apply(this,a)}}return a}function y(a){return'<textarea style="border:1px solid #999;margin-top:10px;height:120px;width:100%;">'+a+"</textarea>"}function z(a){for(var b=[],c=0;c<a.length;c++){var d=$.isArray(a[c])?a[c][0]:a[c],e=g.get(a[c]);1==$("#debug-information").length&&d!=e&&(e+=" ("+d+")");b.push(e)}return b}function A(a,b){return(c,d,e)=>
{var f="";"undefined"!=typeof c.status&&(f+=" "+c.status);null!=d&&(f+=" "+d);"undefined"!=typeof e&&(f+=" "+e);console.log(b+" Error callback: "+a.url);B(c,d,e);c=g.get(a.error_phrase)+"<br /><br />"+g.get("error_information_x",f);t.openAlertDialog({title:g.get(a.title_phrase),message:c,iconType:"error",onAfterClose:a.after_error})}}function C(a,b,c,d,e,f){(c=a.errors)||(c=[a.error]);if(!b.api_error||b.api_error.apply(d,[c,a,b])){var m=a=>{f.data=f.data.replace(/securitytoken=[^&]*(&|$)/,"securitytoken="+
a.newtoken+"$1");$.ajax(f)};if(0!=h){if(u(c,["inlinemodauth_required"])){v("inlinemod_auth",m,h,"cplogin");return}if(0==a.userid&&u(c,[/^humanverify_/,"no_create_permissions","session_timed_out_login","not_logged_no_permission","no_permission","no_delete_permissions","no_featured_permissions"])){a=()=>{v("login",m,h,b.cpaction?"cplogin":"")};H(m,a,h)||a();return}}w(c,a,b)}}function u(a,b){if(!$.isArray(a))return!1;var c=b;$.isArray(c)||(c=[b]);for(b=0;b<a.length;b++){var d=a[b];$.isArray(d)&&(d=d[0]);
for(var e=0;e<c.length;e++){var f=c[e];if("regexp"==$.type(f)){if(f.test(d))return!0}else if(f==d)return!0}}return!1}function w(a,b,c){var d={title_phrase:"error",after_error:null};$.extend(!0,d,c);a:{for(c=0;c<a.length;c++){var e=a[c];if($.isArray(e)&&"exception_trace"==e[0]){a.splice(c,1);c=e[1];break a}}c=""}a=z(a);1==$("#debug-information").length&&(c&&a.push(y(c)),a.push(y(JSON.stringify(b))));a="<ul>\n<li>"+a.join("</li>\n<li>")+"</li>\n</ul>";t.openAlertDialog({title:g.get(d.title_phrase),
message:a,iconType:"error",onAfterClose:d.after_error})}function B(a,b,c){console.dir({textStatus:b,jqXHRStatus:a.status,jqXHRResponseText:a.responseText,errorThrown:c});console.trace()}function k(a){var b={type:"POST",dataType:"json",title_phrase:"error",error_phrase:"error",api_error:!1,after_error:null,silent:!1};a.data instanceof FormData&&(b.processData=!1,b.contentType=!1);$.extend(!0,b,a);b.url||(b.url=r+b.call,b.call="");b.silent&&(b.error=$.noop,b.api_error=$.noop);b.error||(b.error=A(b,
"ajax"));var c=this;b.success=function(d,e,f){d||b.allowEmptyResponse||(d={errors:[["invalid_server_response_please_try_again"]]});d&&(d.errors||d.error)?C(d,b,a,c,k,this):a.success&&a.success.apply(this,arguments)};return $.ajax(b)}function D(a){var b={dataType:"json",title_phrase:"error",error_phrase:"error",api_error:!1,after_error:null,iframe:!1,silent:!1};$.extend(b,a);b.silent&&(b.error=$.noop,b.api_error=$.noop);b.error||(b.error=A(b,"ajaxForm"));b.beforeSubmit=function(b,c,f){if(a.beforeSubmit&&
!1===a.beforeSubmit.apply(this,arguments))return!1;var d=$("button, .b-button",c);d.prop("disabled",!0);$(document).one("ajaxComplete",()=>{d.prop("disabled",!1)});return!0};var c=this;b.success=function(d,e,f,m){d||b.allowEmptyResponse||(d={errors:[["invalid_server_response_please_try_again"]]});d&&(d.errors||d.error)?C(d,b,a,c,D,this):a.success&&a.success.apply(this,arguments)};this.ajaxForm(b)}function H(a,b,c){return"undefined"!=typeof vBfb&&vBfb.isFbLogin()?(vBfb.makeAuthEvent(d=>{k({call:"/auth/login-external",
data:{provider:"facebook",auth:d.accessToken,userid:c},success:b=>{vBulletin.doReplaceSecurityToken(b.newtoken);return a(b)},api_error:b})})(),!0):!1}function v(a,b,c,d){let e,f;t.openTemplateConfirmDialog(E,{title:a,width:400,yesPhrase:"login",noPhrase:"cancel",onClickYes:b=>{f.text("").addClass("h-hide");k({call:"/auth/ajax-login",data:e.serializeArray(),success:a=>{b.trigger("vb-login",a)},api_error:a=>{f.html(g.get(a[0])).removeClass("h-hide");f.find("a").attr("target","_blank")},title_phrase:a});
return!1}},{call:"/auth/login-dialog",data:{logintype:d,userid:c},api_error:w}).then(a=>{e=a.find(".js-login-form");f=$(".js-error-box",e);var c=$('[type="text"], [type="password"]',a);c.on("keydown",b=>{13==b.which&&(b.preventDefault(),$("#btnConfirmDialogYes",a).trigger("click"))});c.filter(":visible").first().trigger("focus");a.on("vb-login",(c,d)=>{c.stopPropagation();vBulletin.doReplaceSecurityToken(d.newtoken);a.dialog("close");return b(d)})})}$.ajaxSetup({contentType:"application/x-www-form-urlencoded; charset=UTF-8"});
let x,F=!1,G=!0,n,p,q=[];$(()=>{x=$("#debug-information");(F=0<x.length)?(n=x.find("#debug-ajax-request-count"),p=$("<ol />").attr("id","debug-ajax-request-list").hide().css({height:"150px",overflow:"auto",padding:"4px",border:"1px solid #CCC",background:"#EEE","margin-top":"2px","margin-bottom":"4px"}).appendTo(n.closest("li")),n.css("cursor","pointer").on("click",()=>{p.toggle()})):(G=!1,q=[])});$.ajaxPrefilter((a,b,c)=>{if(G){var d={url:a.url,startTimeStamp:Date.now(),endTimeStamp:0,finalTimeStamp:0,
status:"UNKNOWN",errorThrown:""};q.push(d);a.success=l(a.success,(a,b,c)=>{d.endTimeStamp=Date.now()});a.error=l(a.error,(a,b,c)=>{d.endTimeStamp=Date.now();d.errorThrown=c});a.complete=l(a.complete,(a,b)=>{d.finalTimeStamp=Date.now();d.status=b;if(F)for(a=q.length,n.text(a),b=0;b<a;b++){var c=q[b];let a="js-request-counter-"+b;if(0==p.find("."+a).length){let b=0==c.url.indexOf(r)?c.url.substring(r.length):c.url,d=c.endTimeStamp-c.startTimeStamp,e=c.finalTimeStamp-c.startTimeStamp;c='{0} <span style="font-size:x-small;">({1}, <span title="Request Time: {2}ms, Processing Time: {3}ms, Total Time: {4}ms" style="text-decoration:underline;">{2}ms, {3}ms</span>){5}</span>'.format(b,
c.status,d,e-d,e,c.errorThrown?" Error: "+c.errorThrown:"");$("<li />").addClass(a).html(c).appendTo(p)}}})}});var E={hasError:u,ajax:k,ajaxSilent:function(a){vBulletin.loadingIndicator.suppressNextAjaxIndicator();return k(a)},ajaxForm:D,logApiError:function(a){console.dir(z(a))},logAjaxError:B,showApiError:w,runBeforeCallback:l,library:{inlineMod(a){v("inlinemod_auth",a,h,"cplogin")}}};return E};
;

// ***************************
// js.compressed/global.js
// ***************************
(function(b){function w(){vBulletin.AJAX({call:"/ajax/activate-sitebuilder",data:{pageid:pageData.pageid,nodeid:pageData.nodeid,userid:pageData.userid,loadMenu:!1,isAjaxTemplateRender:!0,isAjaxTemplateRenderWithData:!0},cache:!1,success:a=>{a.templates&&(b("#sitebuilder-wrapper").prepend(a.templates.main),b(".js-top-menu-sitebuilder").show(),b(".edit-switch-container .switch-control").addClass("on"),x.setCookie("sitebuilder_active","1"))}})}function q(a,c){var d=0,e=a.length;a.each(function(){if(this.complete&&
0<this.naturalHeight&&this.src)++d;else b(this).one("load",function(){++d;d==e&&c()})});d==e&&c()}function y(a,c,d,e,h){function g(b){b=b.position().top+b.outerHeight();b=Math.round(b);return[b-1,b,b+1]}function f(b,a){var f,c;for(f in b)for(c in a)if(b[f]===a[c])return!0;return!1}b(a).each(function(){var a=b(this);a.trigger("vbulletin:flexgridstart",{isResize:h});var l=b(c,a),m=l.last(),A=!1,u={},r=0,k=!1,t=!1,z=l.first();l.length&&(l.removeClass(d+" vb-temp-placeholder-grid-lastrow"),l.removeClass(e),
setTimeout(function(){A=g(m);l.each(function(){var a=b(this),c=g(a);f(A,c)?a.addClass("vb-temp-placeholder-grid-lastrow"):(k||(k=c),f(k,c)||(++r,z.addClass(e)),k=c,z=a,"undefined"==typeof u[r]&&(u[r]=0),++u[r])});z!=l.first()&&z.addClass(e);b.each(u,function(b,a){!1===t&&(t=a);a<t&&(t=a)});var c=l.filter(".vb-temp-placeholder-grid-lastrow");c.removeClass("vb-temp-placeholder-grid-lastrow");(!1===t||c.length<t)&&c.addClass(d);!1!==t&&c.length==t&&c.last().addClass(e);a.trigger("vbulletin:flexgridready",
{isResize:h})},0))})}function B(a,c,d,e,h,g,f){b(a).each(function(){var a=b(this),l=b(d,a);g?y(a,c,e,h,f):q(l,function(){y(a,c,e,h,f)})})}function H(a,c){function d(b,a,c){var f={},d=[];var g=b.data.length-32;var e=b.data;for(b=0;b<g;b+=32){var k=Math.round(e[b]/a);var t=Math.round(e[b+1]/a);var n=Math.round(e[b+2]/a);var h=Math.round(e[b+3]/a);k=k+100*t+1E4*n+1E6*h;f[k]?++f[k]:f[k]=1}for(b in f)d.push([b,f[b]]);d.sort(function(b,a){return b[1]>a[1]?-1:a[1]>b[1]?1:0});d.length>c&&(d=d.slice(0,c));
return d}function e(b){var a=Math.floor(b/1E6);var c=Math.floor(b/1E4)-100*a;var f=Math.floor(b/100)-1E4*a-100*c;return[b-1E6*a-1E4*c-100*f,f,c,a]}function h(b,a){b=e(b[0]);var c=e(a[0]);a=Math.min(b[0],b[1],b[2]);var f=Math.max(b[0],b[1],b[2]);b=Math.min(c[0],c[1],c[2]);c=Math.max(c[0],c[1],c[2]);a=f-a;b=c-b;return a>b?-1:b>a?1:0}function g(b,a){var c=0,f=0;b=e(b[0]);a=e(a[0]);b[0]!=b[1]&&++c;b[0]!=b[2]&&++c;b[1]!=b[2]&&++c;a[0]!=a[1]&&++f;a[0]!=a[2]&&++f;a[1]!=a[2]&&++f;return c>f?-1:f>c?1:0}b(a).each(function(a){var f=
b(this),l=b(c,f);l.length&&setTimeout(function(){q(l,function(){var a=b(c,f),n=f.innerWidth(),l=f.innerHeight(),r=a.outerWidth(),k=a.outerHeight();if(a.length&&!(r>=n&&k>=l)){a=a.get(0);n=document.createElement("canvas");l=n.getContext&&n.getContext("2d");r=a.naturalWidth||r;k=a.naturalHeight||k;var t=!1;n.width=r;n.height=k;l.drawImage(a,0,0);try{t=l.getImageData(0,0,r,k)}catch(z){}t&&t.data&&t.data.length&&(k=d(t,20,100),k.sort(h),k.sort(g),k=k.shift(),k=e(k[0]),k[0]*=20,k[1]*=20,k[2]*=20,k[3]*=
20,245<=k[3]&&(k[3]=255),f.css("backgroundColor","rgba("+k.join(",")+")"))}})},0)})}function I(){function a(){var a=b(this);if(""==a.prop("title")){var d=a.get(0);d.scrollWidth>d.clientWidth&&(d=a.text().trim(),300<d.length&&(d=d.substr(0,297)+"..."),a.prop("title",d))}a.addClass("js-ellipsis-has-title")}b(document).off("mouseover",".ellipsis:not(.js-ellipsis-has-title)",a).on("mouseover",".ellipsis:not(.js-ellipsis-has-title)",a)}b.fn.offon=function(b,c,d,e){null==e&&(e=d,null==d?(e=c,c=void 0):
"string"!==typeof c&&(d=c,c=void 0));return this.off(b,c).on(b,c,d,e)};String.prototype.format=function(){for(var b=this,c=arguments.length;c--;)b=b.replace(new RegExp("\\{"+c+"\\}","gm"),arguments[c]);return b};jQuery.fn.reverse=[].reverse;b(".js-module__hide-if-empty:not(:has(*))").each(function(){var a=b(this);/\s/.test(a.html())&&a.closest(".js-module").hide()});jQuery.ajaxPrefilter(function(b){b.crossDomain&&(b.contents.script=!1)});b.ajaxPrefilter("script",function(b){b.cache=!0});vBulletin.normalizeAjaxUrl=
function(b){return 0==b.indexOf("http://")?b.substring(5):0==b.indexOf("https://")?b.substring(6):b};vBulletin.getAjaxBaseurl=function(){return vBulletin.normalizeAjaxUrl(pageData.baseurl)};vBulletin.getAbsoluteUrl=function(){var b;return function(a){b||(b=document.createElement("a"));b.href=a;return b.href}}();vBulletin.regexEscape=function(b){return b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")};vBulletin.isInternalUrl=function(){var b=vBulletin.normalizeAjaxUrl(pageData.baseurl),c=new RegExp("^"+
vBulletin.regexEscape(b));return function(b){b=vBulletin.normalizeAjaxUrl(vBulletin.getAbsoluteUrl(b));return c.test(b)}}();vBulletin.isInternalJSUrl=function(){var b=vBulletin.normalizeAjaxUrl(pageData.baseurl),c=new RegExp("^"+vBulletin.regexEscape(b+"/js/")+".*.js");return function(b){b=vBulletin.normalizeAjaxUrl(vBulletin.getAbsoluteUrl(b));return c.test(b)}}();vBulletin.isAbsoluteUrl=function(){var b=/^(?:[a-z]+:)?\/\//i;return function(a){return b.test(a)}}();vBulletin.isEmptyList=function(a){return b.isArray(a)&&
0==a.length||b.isPlainObject(a)&&b.isEmptyObject(a)};b.ajaxPrefilter(function(a,c,d){if(!a.url||vBulletin.isInternalUrl(a.url)&&!vBulletin.isInternalJSUrl(a.url))if("undefined"==typeof a.data)a.data="securitytoken="+pageData.securitytoken,"undefined"!==typeof a.formData&&Array.isArray(a.formData)&&a.formData.push({name:"securitytoken",value:pageData.securitytoken});else if("undefined"!==typeof FormData&&a.data instanceof FormData)a.data.append("securitytoken",pageData.securitytoken);else{var e=!0;
c=a.data.split("&");b.each(c,function(b,a){if(a.match(/^securitytoken=/))return e=!1});e&&(a.data+="&securitytoken="+pageData.securitytoken)}});b.ajaxPrefilter(function(a,c,d){(function(){var d=vBulletin.getAjaxBaseurl();if(0==c.url.indexOf(d)&&0==c.url.substr(d.length).indexOf("/ajax/render/")||c&&c.data&&c.data.isAjaxTemplateRender){var h=a.success;a.success=function(){console.log("Intercept AJAX template render calls: Start (URL: {0})".format(a.url));var d=arguments[0];if(!d||"object"!=typeof d||
b.isEmptyObject(d))return"function"==typeof h?h.apply(this,arguments):!1;c.data&&c.data.isAjaxTemplateRenderWithData?arguments[0]=d:(arguments[0]=d.template,arguments[1]=d.errors);var f=d.css_links;if(f&&0!=f.length){console.log("Intercept AJAX template render calls: Has CSS");var e=/sheet=([^&]+)&/;d=f.pop();var l=null!=d.match(e);f.push(d);var m=function(a){var c=a.match(e),f={};c&&c[1]?b.each(c[1].split(","),function(b,c){f[c]=a}):f[a.replace(/^.*\//g,"")]=a;return f},A={};b("head link[rel=stylesheet]").each(function(){b.extend(A,
m(b(this).attr("href")))});var u={};b.each(f,function(a,c){b.extend(u,m(c))});var r=[];b.each(u,function(b,a){b&&"undefined"==typeof A[b]&&(l?r.push(b):r.push(a))});if(0==r.length){if(console.log("Intercept AJAX template render calls: Needed CSS is already on the page"),"function"==typeof h)return console.log("Intercept AJAX template render calls: Calling original success handler"),h.apply(this,arguments)}else{f=[];l?(console.log("Intercept AJAX template render calls: found DB CSS"),f.push(d.replace(/sheet=[^&]+&/,
"sheet="+r.join(",")+"&"))):(console.log("Intercept AJAX template render calls: found FS CSS"),f=r);var k=this,t=arguments;console.log("Intercept AJAX template render calls: Fetching CSS: {0}".format(f.join(", ")));var z=function(a){if(0==a.length)console.log("Intercept AJAX template render calls: Done. Calling original callback."),setTimeout(function(){if("function"==typeof h)return h.apply(k,t)},50);else{var c=b("<div />").append(a.shift()).text();console.log("Intercept AJAX template render calls: Fetching CSS file: {0}".format(c));
b.get(c,{cache:!0},function(a){a=b("<link />",{rel:"stylesheet",type:"text/css",href:c});var f=b(".js-additional-css");1==f.length?f.before(a):b("head").append(a)}).then(function(){console.log("Intercept AJAX template render calls: Fetched CSS file: {0}".format(c));if(0<b(".js-debug-css-template-list").length){var f=m(c),k=b("<ol />");b.each(f,function(a,c){l?k.append(b("<li />").append(a)):k.append(b("<li />").append(c))});f=b(".js-debug-css-template-list").append(b("<li />").append(vBulletin.phrase.get("added_via_ajax_call")+
":").append(k)).prev("b");f.text(parseInt(f.text(),10)+1)}z(a)},function(){console.warn("Intercept AJAX template render calls: Failed to fetch CSS file: {0}".format(c));z(a)})}};z(f)}}else if(console.log("Intercept AJAX template render calls: No CSS"),"function"==typeof h)return console.log("Intercept AJAX template render calls: Calling original success handler"),h.apply(this,arguments)}}})()});vBulletin.isRtl=function(){return"rtl"==b("html").attr("dir")};"object"==typeof b.cookie.defaults&&(b.cookie.defaults.secure=
"https"==pageData.baseurl.substr(0,5).toLowerCase()||"https:"==location.protocol);var x=vBulletin.createStorageTools(pageData.cookie_prefix,pageData.cookie_path,pageData.cookie_domain);vBulletin.storagetools=x;jQuery.fn.swipeable=function(a){function c(b){var a={x:0,y:0};try{a={x:b.pageX||b.originalEvent.touches[0].pageX||0,y:b.pageY||b.originalEvent.touches[0].pageY||0}}catch(r){}return a}function d(b,a){return{x:b.x-a.x,y:b.y-a.y}}function e(b){n=!0;l=!1;m.start=c(b);m.previous=c(b);m.current=c(b);
m.moved={x:0,y:0};m.totalMoved={x:0,y:0};m.target=b.target;"touchstart"!=b.type&&b.preventDefault()}function h(b){if(n){m.current=c(b);m.moved=d(m.current,m.previous);m.totalMoved=d(m.current,m.start);if(m.moved.x||m.moved.y)l=!0;a.swiping.call(this,b,m);m.previous=m.current}}function g(b){n&&("mouseup"==b.type&&b.target!=m.target?f.call(this,b):"mouseleave"==b.type&&f.call(this,b));n=!1;b.preventDefault()}function f(b){if(m.totalMoved){var c=Math.abs(m.totalMoved.x);var f=Math.abs(m.totalMoved.y),
k=Math.max(c,f);c=40>k||k<=2*Math.min(c,f)?!1:c>f?0>m.totalMoved.x?"left":"right":0>m.totalMoved.y?"up":"down"}else c=!1;c&&a["swipe"+c].call(this,b,m);a.swipeend.call(this,b,m);n=!1;m={start:null,previous:null,current:null,moved:null,totalMoved:null,target:null};if(l)return l=!1}a=a||{};"object"==typeof a&&(a.swiping=a.swiping||function(){},a.swipeend=a.swipeend||function(){},a.swipeleft=a.swipeleft||function(){},a.swiperight=a.swiperight||function(){},a.swipeup=a.swipeup||function(){},a.swipedown=
a.swipedown||function(){});var n=!1,l=!1,m={start:null,previous:null,current:null,moved:null,totalMoved:null,target:null};return this.each(function(){var c=b(this);if("disable"==a)c.off(".vbswipeable","body");else c.on("mousedown.vbswipeable touchstart.vbswipeable","body",e).on("mousemove.vbswipeable touchmove.vbswipeable","body",h).on("mouseup.vbswipeable mouseleave.vbswipeable touchcancel.vbswipeable","body",g).on("click.vbswipeable touchend.vbswipeable","body",f)})};(function(){var a=jQuery.fn.selectBox;
jQuery.fn.selectBox=function(){var c=b(this);"undefined"==typeof c.attr("tabindex")&&c.attr("tabindex","0");c=a.apply(this,arguments);b(".selectBox-arrow").addClass("b-icon b-icon__arrow-down-s");return c}})();(function(){(function(){var a=b(".js-login-menu");a.find(".js-comp-menu-dropdown__trigger").on("click",function(){setTimeout(function(){a.find(".js-login-username").trigger("focus")},0)});(function(){function a(a,c){b(a).toggleClass("h-hide-imp",!c)}var d=b(".js-top-menu-user--list"),e=[".js-header__notifications-label",
".js-pmchat__messages-label",".js-menu__username-label"],h=e.slice(0).reverse();d.on("vbulletin:shrink",function(){b.each(e,function(b,c){a(c,!1);if("need_shrink"!=vBulletin.Responsive.Debounce.checkElementShrinkRequirement(d))return!1})}).on("vbulletin:unshrink",function(){b.each(h,function(b,c){a(c,!0);if("need_shrink"==vBulletin.Responsive.Debounce.checkElementShrinkRequirement(d))return a(c,!1),!1})})})();(function(){var a=b(".js-top-menu-sitebuilder--list"),d=a.find(".b-top-menu__item"),e=d.find(".js-top-menu-link"),
h=a.closest(".js-top-menu-sitebuilder"),g=[function(b){e.toggleClass("b-top-menu__item-link--compact",b)},function(b){h.toggleClass("b-top-menu__background--compact",b)},function(b){vBulletin.CompMenuHorizontal.convertDropdownProgressive({$parent:a,$children:d,removeMenu:!b})}];a.on("vbulletin:shrink",function(){b.each(g,function(b,c){c(!0);if("need_shrink"!=vBulletin.Responsive.Debounce.checkElementShrinkRequirement(a))return!1})}).on("vbulletin:unshrink",function(){for(var b=g.length;0<=--b;)if(g[b](!1),
"need_shrink"==vBulletin.Responsive.Debounce.checkElementShrinkRequirement(a)){g[b](!0);break}})})()})();b(".ui-tabs .ui-tabs-nav > li").addClass("ui-state-disabled");b(".announcement-tabs .ui-tabs-nav > li").removeClass("ui-state-disabled")})();vBulletin.pageHasSelectors=function(a){if(b.isArray(a)&&0<a.length&&""!=b.trim(a.toString())){var c=!1;b.each(a,function(a,e){if(0<b(e).length)return c=!0,!1});return c}return!0};vBulletin.areJsonObjectsEqual=function(a,c){var d=function(a,c){for(var d in a)if(a.hasOwnProperty(d)&&
c.hasOwnProperty(d)){var f=a[d],e=c[d];if(f!=e)if(f instanceof Array&&e instanceof Array){if(0<b(f).not(e).length||0<b(e).not(f).length)return!1}else return!1}else return!1;return!0};return Object.keys(a).length==Object.keys(c).length?d(a,c):!1};vBulletin.loadingIndicator=function(){function a(a){if(a){a=b(".js-loading-indicator");var c=a.outerWidth(),f=vBulletin.isRtl()?"margin-right":"margin-left";0<c&&a.css(f,-(c/2));a.removeClass("h-hide");b("body").css("cursor","wait")}else b(".js-loading-indicator").addClass("h-hide"),
b("body").css("cursor","auto")}var c=0,d=!1,e=!1,h=0,g=0;return{init:function(){d||(b(document).ajaxStart(function(){vBulletin.loadingIndicator.show("ajaxStart")}),b(document).ajaxStop(function(){vBulletin.loadingIndicator.hide("ajaxStop")}),d=!0)},show:function(b){0<h&&"ajaxStart"==b?(--h,++g,console.log("vBulletin.loadingIndicator.show ajax indicator suppressed")):(++c,console.log("vBulletin.loadingIndicator.show Counter: "+c+" Source: "+(b||"Unspecified")),0<c&&(e=setTimeout(function(){e&&(a(!0),
e=!1)},1E3)))},hide:function(b){0<g&&"ajaxStop"==b?(--g,console.log("vBulletin.loadingIndicator.hide ajax indicator suppressed")):(--c,c=0>c?0:c,b||(c=0),console.log("vBulletin.loadingIndicator.hide Counter: "+c+" Source: "+(b||"Unspecified")),1>c&&(e&&(clearTimeout(e),e=!1),a(!1)))},suppressNextAjaxIndicator:function(){++h}}}();vBulletin.precache("admin admin_auth april attach_link attach_video august cancel_edit close conversation december done email_addresses_must_match error error_loading_ckeditor_script error_loading_editor error_posting_comment_code error_x existing_reply_will_be_deleted february follow follow_error following following_pending following_remove friday_min go_to_first_new_post hour inlinemod_auth_password_empty invalid_data invalid_data_requested invalid_email_address invalid_request invalid_server_response_please_try_again invalid_special_channel_subscribe_request invalid_username_specified invalid_username_specified_maxlength_x invalid_username_specified_minlength_x invalid_query_definition_x january join joined join_error july june leave loading logged_out_while_editing_post login login_success_admin_auth march may minute moderator monday_min new_posts no no_create_permissions no_icon no_leave_channel_permission no_permission no_update_permissions no_valid_tags_found not_logged_no_permission november now october physically_remove_blog physically_remove_comment physically_remove_media physically_remove_reply physically_remove_topic physically_remove_visitorMessage please_enter_a_valid_url_and_click_attach please_enter_link_url please_enter_video_url please_enter_your_comment please_enter_your_email_address please_provide_search_string post_comment post_history posttype_blog posttype_comment posttype_media posttype_reply posttype_topic posttype_visitorMessage preview refer_a_friend saturday_min search see_less see_more select_option_and_click_delete_button_blog select_option_and_click_delete_button_comment select_option_and_click_delete_button_media select_option_and_click_delete_button_reply select_option_and_click_delete_button_topic select_option_and_click_delete_button_visitorMessage send_report september soft_delete_blog soft_delete_comment soft_delete_media soft_delete_notes_blog soft_delete_notes_comment soft_delete_notes_media soft_delete_notes_reply soft_delete_notes_topic soft_delete_notes_visitorMessage soft_delete_reply soft_delete_topic soft_delete_visitorMessage sunday_min thanks_for_signing_up_log_in time tuesday_min thursday_min unable_to_check_admin_permissions unable_to_contact_server_please_try_again unexpected_error unfollow_error unvote_cap usernametaken vote_a_post vote_cap wednesday_min".split(" "),
["bbtitle","crontab","bbtitle","markinglimit","threadpreview"]);var p=vBulletin,C=p.getAjaxBaseurl(),v=p.createSiteDataTools(C);v.phrase.init(pageData,pageData.languageid,x.createStorageTimed("phrase",pageData.phrasedate,pageData.current_server_datetime),p.phrase.precache);b.extend(p.phrase,v.phrase);v.options.init(x.createStorageTimed("options",pageData.optionsdate,pageData.current_server_datetime),p.options.precache);b.extend(p.options,v.options);v=p.createDialogTools(b,p,p.phrase);p.dialogtools=
v;p.error=v.error;p.warning=v.warning;p.alert=v.alert;p.openConfirmDialog=v.openConfirmDialog;p.openPromptDialog=v.openPromptDialog;window.openAlertDialog=v.openAlertDialog;window.openConfirmDialog=v.openConfirmDialog;window.openPromptDialog=vBulletin.openPromptDialog;C=p.createAjaxTools(C,pageData.userid,p.phrase,p.dialogtools);p.ajaxtools=C;p.ajaxlib=C.library;p.AJAX=C.ajax;p.ajaxForm=C.ajaxForm;vBulletin.getScrollbarWidth=function(){if(b("body").data("scrollbar-width"))return b("body").data("scrollbar-width");
var a=b('<div style="width:50px;height:50px;overflow:auto;position:absolute;top:-99999px;"><div /></div>').appendTo("body"),c=a.children();c=c.innerWidth()-c.height(99).innerWidth();a.remove();b("body").data("scrollbar-width",c);return c};vBulletin.assertUserHasAdminPermission=function(a,c,d,e){if(b(c).data("in-progress"))return!1;b("body").css("cursor","wait");b(c).data("in-progress",!0);vBulletin.AJAX({call:"/ajax/api/user/currentUserHasAdminPermission",data:{adminPermission:a},complete:function(){b("body").css("cursor",
"auto");b(c).data("in-progress",null)},success:function(a){!0===a?d():(vBulletin.error("error","unable_to_check_admin_permissions"),b("#config-dialog .loader").hide())},api_error:"undefined"==typeof e?void 0:function(b){return vBulletin.ajaxtools.hasError(b,"inlinemodauth_required")?(vBulletin.ajaxlib.inlineMod(e),!1):!0},error_phrase:"unable_to_check_admin_permissions"})};vBulletin.selectTabByIndex=function(a){var c=this instanceof b?this:b(this);c.length&&-1<a&&c.hasClass("ui-tabs")&&c.data("noPushState",
!0).tabs("option","active",a).data("noPushState",null).find(".ui-tabs-nav li").removeClass("ui-state-focus").eq(a).addClass("ui-state-focus").find("a").trigger("focus")};b.ui.tabs.prototype._isLocal=function(){return!0};(function(){var a=b.ui.tabs.prototype._processTabs;b.ui.tabs.prototype._processTabs=function(){var b=a.apply(this,arguments);this.panels.removeClass("h-hide");return b}})();vBulletin.getSelectedTabHashOrPath=function(b,c){return(c?b.find(".ui-tabs-nav > .ui-tabs-active > a").prop("hash"):
b.find(".ui-tabs-nav > .ui-tabs-active > a").data("url-path"))||""};vBulletin.parseUrl=function(b){var a=document.createElement("a");a.href=b||"/";b=a.pathname;0!=b.indexOf("/")&&(b="/"+b);return{protocol:a.protocol,hostname:a.hostname,port:a.port,pathname:b,search:a.search,hash:a.hash}};vBulletin.makeTabUrl=function(b,c,d,e,h){b?(b=vBulletin.parseUrl(b),d?(h=h||"tab",d=new RegExp("([?+|&+])"+h+"=\\w+[-\\w]*","i"),b=b.search.match(d)?b.pathname+b.search.replace(d,"$1{0}={1}".format(h,c)):b.search?
"{0}{1}&{2}={3}".format(b.pathname,b.search,h,c):"{0}?{1}={2}".format(b.pathname,h,c)):(h=b.pathname.replace(/\/$/,""),d=h.split("/"),d="\\/"+d[d.length-(h.match(/\/page([0-9]+)/)?2:1)]+"$",b=b.pathname.replace(new RegExp(d),"/"+c)+b.search)):b="/";e&&(b+="#"+e);return b};vBulletin.makePaginatedUrl=function(b,c){if(b){var a=b.match(/\/page[0-9]+/);a?b=1<c?b.replace(a[0],"/page"+c):b.replace(a[0],""):1<c&&(b=b.match(/\?/)?b.replace(/\?/,"/page"+c+"?"):b.match(/#/)?b.replace(/#.*/,"/page"+c):b+("/page"+
c))}return b};vBulletin.makeFilterUrl=function(a,c,d,e,h,g){g=g||!1;a=a||location.href;var f=b(".filtered-by",e);a=vBulletin.parseUrl(a);var n=a.search,l=b(".js-button-filter.js-default-checked.js-checked",e);l.data("filter-name")==c&&l.data("filter-value")==d&&(g=!0);!g&&(f.data("clicked")&&b('.toolbar-filter-overlay input[name="{0}"][value="{1}"]'.format(c,d),e).hasClass("js-default-checked")||b('.toolbar-search-form input[name="{0}"]'.format(c),e).length&&!d)&&(g=!0,f.data("clicked",null));a=a.pathname;
if(n&&1<n.length)if(n.match(new RegExp(c+"=","i"))){if(e=vBulletin.parseQueryString(n),!b.isEmptyObject(e)){var m="";b.each(e,function(b,a){g&&b==c||(m+="{0}={1}&".format(b,b==c?d:a))});m&&(a+="?"+m.substring(0,m.length-1))}}else a=g?a+n:a+(n+"&{0}={1}".format(c,encodeURIComponent(d)));else g||(a+="?{0}={1}".format(c,encodeURIComponent(d)));h&&(a+="#"+h);return a};vBulletin.getSelectedFilters=function(a,c){var d={};if(c){var e=a.parent().find(".filtered-by .filter-text").filter(":visible");a.find(":input:radio:checked").each(function(a,
c){a=b(c);if((a.hasClass("js-default-checked")||1==a.data("bypass-filter-display"))&&(0==e.length||0==e.filter('[data-filter-name={0}][data-filter-value="{1}"]').length))return!0;"[]"==c.name.slice(-2)?(a=c.name.split("[]"),d[a[0]]=d[a[0]]||[],d[a[0]].push(c.value)):d[c.name]=c.value})}else a=a.serializeArray(),b.each(a,function(b,a){"securitytoken"!=a.name&&("[]"==a.name.slice(-2)?(b=a.name.split("[]"),d[b[0]]=d[b[0]]||[],d[b[0]].push(a.value)):d[a.name]=a.value)});return d};vBulletin.parseQueryString=
function(a,c){var d={};if(a&&1<a.length){var e=a.indexOf("?");c=c instanceof Array?c:[];-1!=e&&(a=a.substring(e+1).split("&"),b.each(a,function(a,e){a=e.split("=");if(0==c.length||-1==b.inArray(a[0],c))d[a[0]]=decodeURIComponent(a[1]||"").replace(/\+/g," ")}))}return d};vBulletin.togglePageScrolling=function(a){function c(){d.scrollTop(e).scrollLeft(h)}var d=b(window),e=d.scrollTop(),h=d.scrollLeft();d.off("scroll.vbtogglepagescrolling");if(!a)d.on("scroll.vbtogglepagescrolling",c)};vBulletin.pagination=
function(a){function c(){return parseInt((b(".pagetotal",this).html()||"").replace(/[^\d]+/g,""),10)||1}function d(a,f){var k=c.apply(this),d=b(".arrow[rel=next]",this),e=b(".arrow[rel=prev]",this);1>a?a=1:a>k&&(a=k);b(".js-pagenum",this).val(a);a==k?d.addClass("h-disabled").removeAttr("href"):d.removeClass("h-disabled").attr("href",vBulletin.makePaginatedUrl(location.href,a+1));1==a?e.addClass("h-disabled").removeAttr("href"):e.removeClass("h-disabled").attr("href",vBulletin.makePaginatedUrl(location.href,
a-1));"function"==typeof g.onPageChanged&&g.onPageChanged.apply(this,[a,f]);1<k&&l.isEnabled()&&!f&&(f=l.getState(),!f||!f.data||!f.data.from||b.inArray(f.data.from,-1==["filter_blogs","filter_groups"]))&&(u=1==a?b(".arrow[rel=next]",this).attr("href"):b(".arrow[rel=prev]",this).attr("href"))&&(u=vBulletin.makePaginatedUrl(u,a),a={from:"pagination",page:a,tab:g.tabParamAsQueryString?"#"+b(this).closest(".ui-tabs-panel").attr("id"):vBulletin.getSelectedTabHashOrPath(b(this).closest(".ui-tabs"),!1)},
l.pushState(a,document.title,u))}function e(a){b("a.see-all-btn",this).closest(".pagenav-controls")[a?"addClass":"removeClass"]("h-hide")}function h(){b(g.context).off("click",".js-pagenav .js-pagenav-button").on("click",".js-pagenav .js-pagenav-button",function(a){if(l.isEnabled()){a=b(this).data("page");var c=b(".pagenav-form",g.context).get(0);d.apply(c,[a,!1]);return!1}return!0}).off("mouseover",".js-pagenav .js-pagenav-button").on("mouseover",".js-pagenav .js-pagenav-button",function(a){a=b(this);
a.prop("href")||a.prop("href",vBulletin.makePaginatedUrl(location.href,parseInt(a.data("page"),10)))});b(".js-pagenav .js-pagenav-button",g.context).each(function(){this.href=vBulletin.makePaginatedUrl(location.href,parseInt(b(this).data("page")))});(function(){b(document).on("vbulletin:shrink vbulletin:unshrink",".js-pagenav",function(){var a=b(this),c=a.data("vbshrink-hidden-elements");"undefined"!=typeof c&&c.removeClass("h-hide-imp");c=a.find("> .js-pagenav-button").filter(":visible");var f=b(),
d=b(),e=c.filter(".js-pagenav-current-button").data("page");c.each(function(a,c){a=b(c);var d=a.data("page");c=a.is(".js-pagenav-prev-button, .js-pagenav-current-button, .js-pagenav-next-button");var k=a.is(".js-pagenav-first-button, .js-pagenav-last-button");d=d==e-1||d==e+1;k=k?"1":d?"2":"3";c||(f=f.add(a),a.data("vbshrink-priority",k))});b.each(["3","2","1"],function(c,k){f.each(function(c,f){c=b(f);if(c.data("vbshrink-priority")!=k)return!0;if("need_shrink"==vBulletin.Responsive.Debounce.checkElementShrinkRequirement(a))c.addClass("h-hide-imp"),
d=d.add(c);else return!1})});a.data("vbshrink-hidden-elements",d)});vBulletin.Responsive.Debounce.checkShrinkEvent(b(".js-pagenav"))})()}var g={context:document,onPageChanged:null,tabParamAsQueryString:!0,allowHistory:!1};a&&"object"==typeof a&&b.extend(g,a);var f=b(".pagenav-controls .pagenav-form",g.context),n=Number(b(".defaultpage",f).val())||Number(b(".js-pagenum",f).val())||1,l=new vBulletin.history.instance(g.allowHistory);f.data("object-instance",this);if(l.isEnabled()){a=vBulletin.parseQueryString(location.search,
["_"]);var m=location.pathname.match(/\/page([0-9]+)/),A=l.getState();if(m&&1<Number(m[1])&&b.isEmptyObject(a)&&(!A||b.isEmptyObject(A.data))){var u=vBulletin.makePaginatedUrl(location.href,n);a={from:"pagination",page:n,tab:g.tabParamAsQueryString?"#"+f.closest(".ui-tabs-panel").attr("id"):vBulletin.getSelectedTabHashOrPath(f.closest(".ui-tabs"),!1)};l.setDefaultState(a,document.title,u)}l.setStateChange(function(a){a=l.getState();if("pagination"==a.data.from){l.log(a.data,a.title,a.url);if(location.search){var c=
vBulletin.parseQueryString(location.search,["_"]);if(!b.isEmptyObject(c)||"groups-tab"==c.tab){delete c.tab;b(window).trigger("statechange.filter",["pagination",c]);return}}var f,d;a.data.tab&&(f=g.tabParamAsQueryString?b(a.data.tab):b('.ui-tabs .ui-tabs-panel[data-url-path="'+a.data.tab+'"]'));c=f&&f.length&&f||g.context;(d=b(".conversation-toolbar .filter-wrapper",c).data("object-instance"))&&d.resetFilters(!0);if(a.data.tab&&(f=f.closest(".ui-tabs"),$tabAnchor=g.tabParamAsQueryString?f.find('.ui-tabs-nav > li > a[href*="{0}"]'.format(a.data.tab)):
f.find('.ui-tabs-nav > li > a[data-url-path="'+a.data.tab+'"]'),!$tabAnchor.parent().hasClass("ui-tabs-active"))){a=$tabAnchor.parent().index();vBulletin.selectTabByIndex.call(f,a);return}f=b(".pagenav-controls .pagenav-form",c);(c=f.data("object-instance"))&&"function"==typeof c.getOption&&"function"==typeof c.getOption("onPageChanged")&&(a=a.data.page||n,c.getOption("onPageChanged").apply(f.get(0),[a,!1,!location.search,location.search]))}},"pagination")}b(".arrow",f).off("click").on("click",function(a){var c=
b(this);a=this.form||c.closest("form").get(0);if(!c.hasClass("h-disabled")){c=parseInt(b(".js-pagenum",a).val())+("next"==c.attr("rel")?1:-1);if(!l.isEnabled()&&g.allowHistory)return this.href&&this.hash!=this.href||(this.href=vBulletin.makePaginatedUrl(location.href,c)),!0;d.apply(a,[c,!1])}return!1});h();b(".js-pagenum",f).off("keypress").on("keypress",function(a){if(13==a.keyCode){a.preventDefault();a=b(this).val();a=isNaN(a)?1:parseInt(a,10);var f=c.apply(this.form);a>f&&(a=f);1>a&&(a=1);l.isEnabled()?
d.apply(this.form,[a,!1]):g.allowHistory?location.href=vBulletin.makePaginatedUrl(location.href,a):d.apply(this.form,[a,!1])}});b(".js-pagenum",f).off("click").on("click",function(a){b(this).select()});this.updatePageInfo=function(a,c){if(a&&"object"==typeof a){var f=a.totalpages||1,k=b(".pagenav-controls .pagenav-form",g.context);b(".pagetotal",k).text(f);"undefined"!=typeof a.showseemore&&e.apply(k,[!a.showseemore]);a.perpage=vBulletin.conversation.POSTS_PER_PAGE;c&&0<b(".pagenav-container",g.context).length&&
b.post(pageData.baseurl+"/ajax/render/pagenav",{pagenav:a},function(a){a&&(b(".pagenav-container",g.context).replaceWith(a.template),h())},"json");k.length&&d.apply(k.get(0),[a.pagenumber,c])}};this.updateResultId=function(a){(a=parseInt(a))&&"number"===typeof a&&b("input[name=result-id]",f).val(a)};this.setOption=function(b,a){g[b]=a};this.getOption=function(b){return g[b]};this.updatePageNavigation=function(b,a,c){d.apply(b.get(0),[a,c])}};vBulletin.conversation=vBulletin.conversation||{};vBulletin.conversation.postComment=
function(a,c){var d=this;a=b(d);var e=a.closest(".js-comment-entry"),h=e.find(".js-comment-entry__textbox"),g=b.trim(h.val());if(!g)return vBulletin.warning("post_comment","please_enter_your_comment",function(){h.trigger("focus")}),!1;b("body").css("cursor","wait");a.blur();var f=a.closest(".js-comment-entry__parent"),n=1==a.closest(".js-comment-entry--blog").length?1:0,l=1==a.closest(".js-comment-entry--article").length?1:0,m={text:g,parentid:f.attr("data-node-id"),postindex:f.find(".js-post__content .js-show-post-link").text().replace("#",
""),view:f.parent().hasClass("stream-view")?"stream":"thread",redirecturl:h.hasClass(".reload-on-post")?1:0,isblogcomment:n,isarticlecomment:l};e.find('[name^="humanverify"]').each((a,c)=>{a=b(c);m[a.attr("name")]=a.val()});vBulletin.AJAX({call:"/ajax/post-comment",data:m,complete:function(){console.log("post-comment complete.");b("body").css("cursor","auto");vBulletin.hv.reset()},success:function(b,a,g){"function"==typeof c&&c.apply(d,[b]);n||l||e.slideToggle();vBulletin.subscribe.updateSubscribeButton(b.topic_subscribed);
b=f.attr("data-node-id");vBulletin.markRead(b)},api_error:vBulletin.hv.resetOnError,title_phrase:"conversation",error_phrase:"error_posting_comment_code"})};vBulletin.conversation.bindEditFormEventHandlers=function(a){a=a?a.toLowerCase():"";if(-1!=b.inArray(a,"text gallery video poll link comment event".split(" "))||"all"==a){var c=function(a,c){if("function"==typeof c){console.log("Edit mode: initializeEditor");var f=a.find(".js-editor");0<f.length?vBulletin.ckeditor.initEditor(f,{success:function(d){if("function"==
typeof c){c();vBulletin.contentEntryBox.afterPanelChange(a);vBulletin.ckeditor.initEditorComponents(a);var e=this;setTimeout(function(){console.log("Edit mode: Adding post data to CKEditor (vBulletin.conversation.bindEditFormEventHandlers)");e.setData(f.prev(".js-editor-parsed-text").html(),function(){var a=vBulletin.ckeditor.getEditor(d);vBulletin.ckeditor.fixTableFunctionality.call(vBulletin.ckeditor,{},a);setTimeout(function(){vBulletin.ckeditor.modifyImagePaths(b(a.container.$))},0);a.focus()})},
0)}},error:function(b){"function"==typeof c&&c();f.prop("disabled",!1).removeClass("ckeditor-load-on-focus").closest(".js-content-entry").addClass("b-content-entry--no-ckeditor");b=f.prev(".js-editor-parsed-text").html();""!=b&&vBulletin.AJAX({call:"/ajax/api/editor/convertHtmlToBbcode",data:{nodeid:pageData.nodeid,data:b,allowsmilie:1,securitytoken:pageData.securitytoken},success:function(b){f.html(b.data)},error_phrase:"error_converting_message"})},hideLoadingDialog:!1}):"function"==typeof c&&(c(),
f.trigger("focus"))}},d=function(b){b=b.find(".js-editor");if(0<b.length){var a=b.attr("id");vBulletin.ckeditor.editorExists(a)&&vBulletin.ckeditor.destroyEditor(a)}b.closest("form").remove()},e={comment:function(){b("body").off("comment_editform_onload").on("comment_editform_onload",function(a,c,d){"function"==typeof d&&(d(),b(".js-editor",c).trigger("focus").filter(".autogrow").css("min-height",function(){return b(this).css("height")}).autogrow())})},text:function(){b("body").off("text_editform_onload").on("text_editform_onload",
function(b,a,d){c(a,d)}).off("text_editform_onunload").on("text_editform_onunload",function(b,a){d(a)}).off("text_newcontent_onload").on("text_newcontent_onload",function(b,a){0<a.closest(".conversation-list.stream-view.activity-view").length&&vBulletin.truncatePostContent(a)})},event:function(){b("body").off("event_editform_onload").on("event_editform_onload",function(b,a,d){c(a,d)}).off("event_editform_onunload").on("event_editform_onunload",function(b,a){d(a)}).off("event_newcontent_onload").on("event_newcontent_onload",
function(b,a){0<a.closest(".conversation-list.stream-view.activity-view").length&&vBulletin.truncatePostContent(a)})},poll:function(){var a=function(b){b.find(".js-remove-button").prop("disabled",2>=b.find("li").length)};b("body").off("poll_editform_onload").on("poll_editform_onload",function(f,d,e){c(d,e);a(b(this).find(".b-poll-fieldset__poll-answers"))}).off("poll_editform_onunload").on("poll_editform_onunload",function(b,a){d(a)}).off("poll_newcontent_onload").on("poll_newcontent_onload",function(c,
d){a(b(this).find(".b-poll-fieldset__poll-answers"));0<d.closest(".conversation-list.stream-view.activity-view").length&&(vBulletin.truncatePostContent(d),vBulletin.conversation.limitVisiblePollOptionsInAPost(b("form.poll",d),3))})},gallery:function(){b("body").off("gallery_editform_onload").on("gallery_editform_onload",function(a,d,e){b('.b-toolbar__item[data-panel="b-content-entry-panel__content--gallery"]',d).trigger("click");c(d,function(){"function"==typeof e&&e();vBulletin.upload.initializePhotoUpload(d)})}).off("gallery_editform_onunload").on("gallery_editform_onunload",
function(b,a){d(a)}).off("gallery_newcontent_onload").on("gallery_newcontent_onload",function(b,a){0<a.closest(".conversation-list.stream-view.activity-view").length&&vBulletin.truncatePostContent(a)})},video:function(){b("body").off("video_editform_onload").on("video_editform_onload",function(a,d,e){b('.b-toolbar__item[data-panel="b-content-entry-panel__content--video"]',d).trigger("click");c(d,function(){"function"==typeof e&&e();h(b(".b-content-entry-panel__content--video",d),"video")});b(".js-attach-button",
d).off("click").on("click",function(a){a.preventDefault();var c=b(this),f=c.closest(".b-content-entry-panel__content--video"),e=b(".b-link-input__url",f);a=b.trim(e.val());if(!a)return openAlertDialog({title:vBulletin.phrase.get("attach_video"),message:vBulletin.phrase.get("please_enter_video_url"),iconType:"warning",onAfterClose:function(){e.trigger("focus")}}),!1;c.prop("disabled",!0);b(".js-contententry-buttons .b-button",f).prop("disabled",!0);b("body").css("cursor","wait");b.post(vBulletin.getAjaxBaseurl()+
"/link/getlinkdata",{url:a,isAjaxTemplateRender:!0,isAjaxTemplateRenderWithData:!0},function(a){if(a.error)openAlertDialog({title:vBulletin.phrase.get("attach_video"),message:vBulletin.phrase.get(a.error),iconType:"warning",onAfterClose:function(){e.trigger("focus")}});else{var c=b(a.template);a=a.contenttype||"video";d.closest("form").data("content-type",a);f.find(".js-panel-content").append(c);h(f,"video");c.fadeIn("slow",function(){e.val("");b(".b-link-input",f).addClass("h-hide")})}},"json").error(function(b,
a,c){openAlertDialog({title:vBulletin.phrase.get("attach_video"),message:"HTTP {0} - {1}".format(b.status,c),iconType:"error"})}).complete(function(){b("body").css("cursor","default");c.prop("disabled",!1);b(".js-contententry-buttons .b-button",f).prop("disabled",!1)})})}).off("video_editform_onunload").on("video_editform_onunload",function(b,a){d(a)}).off("video_newcontent_onload").on("video_newcontent_onload",function(b,a){0<a.closest(".conversation-list.stream-view.activity-view").length&&vBulletin.truncatePostContent(a)})},
link:function(){b("body").off("link_editform_onload").on("link_editform_onload",function(a,d,e){b('.b-toolbar__item[data-panel="b-content-entry-panel__content--link"]',d).trigger("click");c(d,function(){"function"==typeof e&&e();h(b(".b-content-entry-panel__content--link",d),"link")});b(".js-attach-button",d).off("click").on("click",function(a){a.preventDefault();var c=b(this),f=c.closest(".b-content-entry-panel__content--link"),e=b(".b-link-input__url",f);a=b.trim(e.val());if(!a)return openAlertDialog({title:vBulletin.phrase.get("error"),
message:vBulletin.phrase.get("please_enter_a_valid_url_and_click_attach"),iconType:"warning",onAfterClose:function(){e.trigger("focus")}}),!1;a.match(/^https?:\/\//)||(a="http://"+a,e.val(a));c.prop("disabled",!0);b(".js-contententry-buttons .b-button",f).prop("disabled",!0);b("body").css("cursor","wait");b.post(vBulletin.getAjaxBaseurl()+"/link/getlinkdata",{url:a,isAjaxTemplateRender:!0,isAjaxTemplateRenderWithData:!0},function(a){if(a.error)openAlertDialog({title:vBulletin.phrase.get("attach_link"),
message:vBulletin.phrase.get(a.error),iconType:"warning",onAfterClose:function(){e.trigger("focus")}});else{var c=b(a.template);a=a.contenttype||"video";d.closest("form").data("content-type",a);c.find("img").error(function(){b(this).closest("li").remove()});f.find(".js-panel-content").append(c);h(f,"link");c.fadeIn("slow",function(){e.val("");b(".b-link-input",f).addClass("h-hide")})}},"json").error(function(b,a,c){openAlertDialog({title:vBulletin.phrase.get("attach_link"),message:"HTTP {0} - {1}".format(b.status,
c),iconType:"error"})}).complete(function(){b("body").css("cursor","default");c.prop("disabled",!1);b(".js-contententry-buttons .b-button",f).prop("disabled",!1)})})}).off("link_editform_onunload").on("link_editform_onunload",function(b,a){d(a)}).off("link_newcontent_onload").on("link_newcontent_onload",function(b,a){0<a.closest(".conversation-list.stream-view.activity-view").length&&vBulletin.truncatePostContent(a)}).off("link_savepost_success").on("link_savepost_success",function(a,c){b(".b-link-input",
c).removeClass("h-hide-imp")})}},h=function(a,c){b(".b-link-content__urlinfo .js-link-edit",a).on("click",function(a){a.preventDefault();var c=b(this).parent().parent();c.addClass("b-link-content__urlinfo-meta--edit-mode");b(".js-link-textbox",c).val(b.trim(b(".b-link-content__urlinfo-text",c).text())).trigger("focus");b(".js-link-save",c).on("click",function(a){a.preventDefault();b(".b-link-content__urlinfo-text",c).text(b(".js-link-textbox",c).val());c.removeClass("b-link-content__urlinfo-meta--edit-mode")})});
b(".js-link-remove",a).on("click",function(c){c.preventDefault();b(this).closest(".b-content-entry-panel__content").find(".b-link-input").removeClass("h-hide");b(this).closest(".js-panel-content").empty();b(".b-link-input",a).removeClass("h-hide")});if("link"==c){b(".js-link-preview-checkbox",a).off("click").on("click",function(){b(".b-link-content__thumbnail",a)[this.checked?"addClass":"removeClass"]("h-hide")});var d=b(".b-link-thumbnail-list__item",a).length;b(".b-link-thumbnail-list",a).jcarousel({scroll:1,
wrap:null,size:d,rtl:vBulletin.isRtl(),buttonNextCallback:function(c,d,e){b(".b-thumbnail-nav .b-thumbnail-nav__next-arrow",a).toggleClass("b-icon--disabled",!e)},buttonPrevCallback:function(c,d,e){b(".b-thumbnail-nav .b-thumbnail-nav__prev-arrow",a).toggleClass("b-icon--disabled",!e)},initCallback:function(c,e){"init"==e&&0<d&&(b(".b-thumbnail-nav .b-thumbnail-nav__counter",a).html("1/"+d),b(".b-thumbnail-nav .b-thumbnail-nav__prev-arrow",a).off("click").on("click",function(){b(this).hasClass("b-icon--disabled")||
b(".jcarousel-container .jcarousel-prev",a).trigger("click")}),b(".b-thumbnail-nav .b-thumbnail-nav__next-arrow",a).off("click").on("click",function(){b(this).hasClass("b-icon--disabled")||b(".jcarousel-container .jcarousel-next",a).trigger("click")}))},itemVisibleInCallback:function(c,e,f,g){if("init"==g)return!1;b(".b-thumbnail-nav .b-thumbnail-nav__counter",a).html(f+"/"+d);b('input[type="radio"]',e).prop("checked",!0)},itemFallbackDimension:90})}};"all"!=a?e[a].call():b.each(e,function(b,a){a.call()})}};
vBulletin.isScrolledIntoView=function(a,c){var d=!1;b.isPlainObject(c)&&"[object Object]"==c.toString()&&(d=!0,c.top=0,c.bottom=0);a=a instanceof b?a:b(a);if(0==a.length)return!1;var e=b(window).scrollTop(),h=e+b(window).height(),g=a.offset().top;a=g+a.outerHeight();e=g-e;h-=a;d&&(c.top=e,c.bottom=h);return 0<=e&&0<=h};vBulletin.scrollToFixed=function(a){function c(a){e=b.extend({},e,a);if(e.element&&(e.element=e.element instanceof b?e.element:b(e.element),0<e.element.length)){b.inArray(e.fixedAt,
["top","bottom"])&&(e.fixedAt="top");var c=e.element,g={width:c.width(),offset:c.offset(),"margin-top":parseInt(c.css("margin-top"),10),"margin-bottom":parseInt(c.css("margin-bottom"),10),cssPosition:c.css("position"),coordinates:{left:c.css("left"),top:c.css("top"),right:c.css("right"),bottom:c.css("bottom")}},l=b("<div />").addClass("scrolltofixed-filler").hide().insertAfter(c);c.data("origOffsetTop",g.offset.top);c.css("z-index",e.zIndex);c.data("object-instance",d);a=b(window).off("scroll."+h).on("scroll."+
h,function(){if(!c.is(":hidden")){var a=b(this).scrollTop();if(0<e.limit&&a>e.limit&&c.hasClass("scrolltofixed"))c.removeClass("scrolltofixed").css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto",width:g.width});else if(0<e.limit&&a<e.limit&&a>g.offset.top&&!c.hasClass("scrolltofixed")||0>=e.limit&&a>g.offset.top&&!c.hasClass("scrolltofixed")){if(l.css({display:c.css("display"),width:c.outerWidth(!0),height:c.outerHeight(!0),"float":c.css("float")}),a=vBulletin.Responsive&&
vBulletin.Responsive.scrollToFixedBreakPoint?vBulletin.Responsive.scrollToFixedBreakPoint:0,b("#vb-page-body").width()>a?c.addClass("scrolltofixed").width(g.width).css({left:g.offset.left,right:"auto",width:g.width,top:"top"==e.fixedAt?0:"auto",bottom:"bottom"==e.fixedAt?0:"auto",position:""}):l.hide(),a=g["margin-"+e.fixedAt]){var d={};d[e.fixedAt]=-a+"px";c.animate(d,"fast")}}else a<=g.offset.top&&c.hasClass("scrolltofixed")&&(l.hide(),c.removeClass("scrolltofixed").css({position:"",width:"",left:"",
top:"",right:"",bottom:""}))}}).off("resize."+h).on("resize."+h,function(){c.removeClass("scrolltofixed").width("auto").css({position:"",left:""});g.width=c.width();g.offset=c.offset();b(this).trigger("scroll."+h)});e.triggerOnload&&a.trigger("scroll."+h)}}var d=this,e={element:b(),fixedAt:"top",limit:0,triggerOnload:!0,zIndex:99},h=("scrollToFixed"+Math.random()).replace(".","");this.updateLimit=function(a){isNaN(Number(a))||(e.limit=a,b(window).trigger("scroll."+h))};this.addLimit=function(a){isNaN(Number(a))||
(e.limit+=a,b(window).trigger("scroll."+h))};this.reset=function(b){c(b)};c(a)};vBulletin.scrollToAnchor=function(a){a=a.replace(/(:|\.|\[|\]|,|\/)/g,"\\$1");var c=b(a);console.log("vBulletin.scrollToAnchor() hash: {0}, found: {1}".format(a,c.length));if(0<c.length){var d=function(){h.stop(!0)},e=c.show().offset().top-2;c.hide();var h=b("html,body"),g=b(".scrolltofixed-floating.scrolltofixed-top"),f=!1;0<g.length&&(1==b(".list-container .list-item:first > a.anchor"+a).length?(g.hasClass("scrolltofixed")&&
g.removeClass("scrolltofixed"),e=g.offset().top,f=!0):g.hasClass("scrolltofixed")&&(e-=g.outerHeight()));h.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup",d).one("scroll mousedown wheel DOMMouseScroll mousewheel keyup",d);h.animate({scrollTop:e},{duration:1E3,step:function(b,a){f||(b=c.show().offset().top,c.hide(),b-=g.hasClass("scrolltofixed")?g.outerHeight():0,a.end=Math.round(b))},always:function(){b("a.anchor").show();c.show();h.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup",
d)}});return!1}b("a.anchor").show();return!0};location.hash&&vBulletin.scrollToAnchor(location.hash);vBulletin.animateScrollTop=function(a,c){console.log("vBulletin.animateScrollTop({0})".format(a));var d=b(".scrolltofixed-floating.scrolltofixed-top");if(0<d.length){var e=d.data("origOffsetTop")||d.offset().top;!d.hasClass("scrolltofixed")&&e<a&&(a-=d.outerHeight(!0));e<a&&(a-=d.outerHeight())}b("html, body").animate({scrollTop:a},c)};vBulletin.truncatePostContent=function(a){a=a instanceof b?a:b(a);
a.length||(a=b("body"));b(".poll-desc.ellipsis, .message-body.ellipsis",a).each(function(){var a=b(this);truncatedHeight=a.height();a.removeClass("ellipsis");var d=a.height();a.addClass("ellipsis");if(d>truncatedHeight)a.closest(".list-item-body").find(".post-links").removeClass("hide-see-link").find(".see-link").off("click").on("click",function(){var c=b(this);c.hasClass("more")?a.removeClass("ellipsis"):a.addClass("ellipsis");c.toggleClass("more less");var d=c.text();c.text(c.data("toggle-text")).data("toggle-text",
d);return!1})});b(".list-item .see-link.more",a).each(function(a){var c=b(this).closest(".list-item"),e=b(c).find(".post-content");if(0<e.length){var h=!1,g=!1,f=b(this).text(),n="",l=b(e).html(),m=this;b(this).on("click",function(){nodeid=b(c).attr("data-node-id");h?(b(m).text(f),b(e).html(l),h=!1):g?(b(m).text(vBulletin.phrase.get("see_less")),h=!0,b(e).html(n)):!g&&nodeid&&vBulletin.AJAX({call:"/activity/fetchText",data:{nodeid},success:function(a){n=a.nodeText;if(n.length<=l.length)b(m).addClass("ui-helper-hidden"),
postLink=b(m).closest(".post-links").html().replace("<span>|</span>",""),b(m).closest(".post-links").html(postLink);else return b(e).html(n),b(m).text(vBulletin.phrase.get("see_less")),console.log("loaded content for node "+nodeid),g=h=!0,!1},error:vBulletin.ajaxtools.logAjaxError,api_error:vBulletin.ajaxtools.logApiError});return!1})}})};var D=0<parseInt(pageData.threadmarking)&&0<parseInt(pageData.userid);if(!D){var E=x.createArrayCookie("discussion_view",!0);var F=x.createArrayCookie("channel_view",
!0)}vBulletin.discussionViewCookie=E;vBulletin.markreadcheck=function(){function a(b){var a=b.getAll(),c;for(c in a)a[c]<d&&b.unset(c)}function c(b,a,c){var e=parseInt(b.data("lastcontent"));if(e<=d)e=!1;else{var g=parseInt(F.get(b.data("channel-id"),0));e=e>g}b.find(".icon").toggleClass(a,e).toggleClass(c,!e)}if(!D){var d=Math.round(Date.now()/1E3)-86400*vBulletin.options.get("markinglimit");a(E);a(F);b(".forum-item").each(function(){c(b(this),"b-icon__speech-double-large--blue","b-icon__speech-double-large--gray")});
b(".subforum-item").each(function(){c(b(this),"b-icon__speech-single2--blue","b-icon__speech-single2--gray")});b(".topic-item").each(function(){var a=parseInt(b(this).data("lastcontent")),c=parseInt(F.get(b(this).data("channel-id"),0)),g=parseInt(E.get(b(this).data("node-id"),0));a<=Math.max(c,g,d)||b(this).hasClass("redirect")?b(this).addClass("read").removeClass("unread"):0==b(this).find(".topic-wrapper .js-go-to-first-unread").length&&(a=b(this).find(".topic-wrapper .topic-title").attr("href"),
"undefined"!=typeof a&&(a+=(-1==a.indexOf("?")?"?":"&amp;")+"goto=newpost",b("<a />").addClass("go-to-first-unread b-icon b-icon__double-arrow-down--blue js-go-to-first-unread").attr("href",a).attr("title",vBulletin.phrase.get("go_to_first_new_post")).html("&nbsp;").prependTo(b(this).find(".topic-wrapper")),b(this).find(".vb-icon-topic-status").attr("title",vBulletin.phrase.get("new_posts"))))})}};vBulletin.markchannelsread=function(a,c,d){if(parseInt(a))vBulletin.setChannelRead(a,c);else if(pageData.channelid&&
parseInt(pageData.channelid)&&0<parseInt(pageData.threadmarking)&&0<parseInt(pageData.userid))vBulletin.setChannelRead(pageData.channelid,c);else{var e=[];d=b(d).closest(".widget-content").find(".forum-list-container");a=d.find(".forum-item");d=d.find(".subforum-item");var h=function(a,c){(a=parseInt(b(c).attr("data-channel-id"),10))&&e.push(a)};b.each(a,h);b.each(d,h);b.each(e,function(b,a){b>=e.length-1?vBulletin.setChannelRead(a,c):vBulletin.setChannelRead(a,[])})}};vBulletin.markRead=function(a){D?
vBulletin.AJAX({call:"/ajax/api/node/markRead",data:{nodeid:a},success:b.noop,api_error:b.noop,error:b.noop}):E.set(a,Math.round(Date.now()/1E3))};vBulletin.setChannelRead=function(a,c){var d=Math.round(Date.now()/1E3);success=c.success&&"function"==typeof c.success?c.success:b.noop;D?vBulletin.AJAX({call:"/ajax/api/node/markChannelsRead",data:{nodeid:a},success,api_error:vBulletin.ajaxtools.logApiError}):(0==a?b.cookie(pageData.cookie_prefix+"lastvisit",d):F.set(a,d),success());return!0};vBulletin.ckeditor=
vBulletin.ckeditor||{};window.CKEDITOR_BASEPATH=pageData.baseurl+"/js/ckeditor/";vBulletin.ckeditor.requiredScriptsLoaded=!1;vBulletin.ckeditor.requiredScriptsLoadFailed=!1;vBulletin.ckeditor.requiredScriptLoadingStarted=!1;vBulletin.ckeditor.checkEnvironment=function(){return!0};vBulletin.ckeditor.fireCallbacks=function(b,c,d,e){"error"==d&&"function"==typeof c.error&&c.error(b);"success"==d&&"function"==typeof c.success&&c.success.apply(e,[b,e]);"function"==typeof c.complete&&c.complete(b)};vBulletin.ckeditor.initEditor=
function(a,c){c=c||{};a=vBulletin.ckeditor.verifyEditorId(a);console.log("Ckeditor: initEditor({0})".format(a));if(vBulletin.ckeditor.checkEnvironment())vBulletin.ckeditor.requiredScriptsLoaded?vBulletin.ckeditor.doInitEditor(a,c):vBulletin.ckeditor.loadScripts(a,c);else{var d=b("#"+a).closest(".js-content-entry");d.find("li[data-panel=b-content-entry-panel__content--toggle-editor]").addClass("h-hide");d.find("li[data-panel=b-content-entry-panel__content--smiley]").addClass("h-hide");d.find("form").append(b('<input type="hidden" name="nl2br" value="1" />'));
vBulletin.ckeditor.fireCallbacks(a,c,"error")}};vBulletin.ckeditor.loadScripts=function(a,c,d){if(vBulletin.ckeditor.requiredScriptLoadingStarted)console.warn("Ckeditor: Trying to load required scripts more than once.");else{vBulletin.ckeditor.requiredScriptLoadingStarted=!0;c=c||{};a=a||"";"undefined"===typeof c.hideLoadingDialog||c.hideLoadingDialog||vBulletin.ckeditor.showLoadingDialog(a);var e=function(){!c.showError&&vBulletin.ckeditor.requiredScriptsLoadFailed||vBulletin.warning("error","error_loading_ckeditor_script");
vBulletin.loadingIndicator.hide();vBulletin.ckeditor.requiredScriptsLoadFailed=!0;vBulletin.ckeditor.fireCallbacks(a,c,"error")},h=function(){vBulletin.ckeditor.requiredScriptsLoadFailed?(vBulletin.ckeditor.fireCallbacks(a,c,"error"),c.hideLoadingDialog||vBulletin.ckeditor.hideLoadingDialog(a)):("function"==typeof d&&d(),"function"==typeof vBulletin.ckeditor.doInitEditor&&window.CKEDITOR?(vBulletin.ckeditor.requiredScriptsLoaded=!0,vBulletin.ckeditor.doInitEditor(a,c)):setTimeout(h,10))};"function"==
typeof vBulletin.ckeditor.doInitEditor||window.CKEDITOR?h():vBulletin.AJAX({url:vBulletin.getAjaxBaseurl()+"/ajax/render/ckeditor_javascript",success:function(a){for(var c=[],d=/src="([^"]+)"/g;match=d.exec(a);)c.push(match[1]);var g=function(){0<c.length?(console.log("Ckeditor: Calling getScript for: {0}".format(c[0])),b.getScript(c[0],function(b,a,d){if("success"!=a)return console.warn("Ckeditor: Error loading "+c[0]),e(),!1;console.log("Ckeditor: Script loaded: "+c[0]);c.splice(0,1);g()}).fail(function(b,
a,c){console.warn("Ckeditor: Error loading script: "+a+" Exception: "+c);e()})):h()};g()},error_phrase:"error_fetching_dialog"})}};vBulletin.ckeditor.editorExists=function(b){return!1};vBulletin.ckeditor.isEditorEmpty=function(b){return!0};vBulletin.ckeditor.resetEditor=function(b){return!1};vBulletin.ckeditor.getEditorContent=function(a){a=vBulletin.ckeditor.verifyEditorId(a);return a?vBulletin.ckeditor.editorExists(a)?(a=vBulletin.ckeditor.getEditor(a))&&a.getData?b.trim(a.getData()):!1:b.trim(b("#"+
a).val()):!1};vBulletin.ckeditor.focusEditor=function(a){if(a=vBulletin.ckeditor.verifyEditorId(a))vBulletin.ckeditor.editorExists(a)?(a=vBulletin.ckeditor.getEditor(a))&&a.focus():b("#"+a).trigger("focus")};vBulletin.ckeditor.loadingDialogStack={};vBulletin.ckeditor.showLoadingDialog=function(a){if("undefined"==typeof vBulletin.ckeditor.loadingDialogStack[a]||!vBulletin.ckeditor.loadingDialogStack[a]){vBulletin.ckeditor.loadingDialogStack[a]=!0;var c=b("#"+a);0<c.length&&c.is(":visible")&&c.prop("disabled",
!0);vBulletin.loadingIndicator.show("vBulletin.ckeditor.showLoadingDialog editorId: "+a)}};vBulletin.ckeditor.hideLoadingDialog=function(a){"undefined"!=typeof vBulletin.ckeditor.loadingDialogStack[a]&&vBulletin.ckeditor.loadingDialogStack[a]&&(vBulletin.ckeditor.loadingDialogStack[a]=!1,b("#"+a).prop("disabled",!1),vBulletin.loadingIndicator.hide("vBulletin.ckeditor.hideLoadingDialog editorId: "+a))};vBulletin.ckeditor.generatedIdCounter=0;vBulletin.ckeditor.verifyEditorId=function(a){a=a||"";if("string"==
typeof a)return a;if("object"==typeof a&&"undefined"!=typeof a.checkDirty&&"undefined"!=typeof a.name)return a.name;a=a instanceof b?a:b(a);a.attr("id")||(++vBulletin.ckeditor.generatedIdCounter,a.attr("id","vb-cke-instance-"+vBulletin.ckeditor.generatedIdCounter));return a.attr("id")};vBulletin.ckeditor.initEditorComponents=function(a,c){a=a||document;b(function(){b(".js-ckeditor-init-on-focus",a).off("focus").on("focus",function(){vBulletin.ckeditor.initEditor(b(this))});b(".js-ckeditor-init-on-page-load",
a).each(function(){vBulletin.ckeditor.initEditor(b(this))});if(!c){var d=function(c){if(0==c)return b("<span />").html(vBulletin.phrase.get("no_icon")).get(0);var d=b(".js-content-entry-post-icons option",a).filter((a,d)=>b(d).val()==c),e=d.data("icon-url");return e?(d=d.text(),b("<img />").attr("src",e).attr("alt","").attr("title",d).get(0)):""},e=b(".js-content-entry-post-icons",a);e.selectBox().on("change",function(){var c=b(this).val();b(".js-content-entry-post-icons.selectBox-dropdown .selectBox-label",
a).html(d(c))});b(".js-content-entry-post-icons-selectBox-dropdown-menu li a").each(function(){var a=b(this).attr("rel");b(this).html(d(a))});e.trigger("change");b(".js-content-entry-prefixes",a).selectBox();e=b(".js-content-entry-event-highlights-container",a);var h=e.is(".h-hide-imp");h&&e.removeClass("h-hide-imp");b(".js-content-entry-event-highlights",a).selectBox();h&&e.addClass("h-hide-imp");var g=[];b(".js-select-box",a).each(function(){for(var a=b(this),c;a.is(":hidden");){c=a.closest(".h-hide");
if(1>c.length)break;g.push(c);c.removeClass("h-hide")}a.selectBox()});b.each(g,function(b,a){a.addClass("h-hide")})}})};vBulletin.ckeditor.initEditorComponents(document);b(".js-focus-on-page-load").first().trigger("focus");vBulletin.doReplaceSecurityToken=function(a){"undefined"!=typeof a&&""!=a&&(b("form").each(function(){var c=b(this);if(this.action&&!vBulletin.isInternalUrl(this.action))return console.log("Skipping security token for external url (form action): "+this.action),!0;"undefined"!=typeof this.method&&
"post"==this.method.toLowerCase()&&(c.find('input[name="securitytoken"]').length?c.find('input[name="securitytoken"]').val(a):c.append('<input type="hidden" name="securitytoken" value="'+a+'" />'))}),pageData.securitytoken=a,console.log("Securitytoken updated"))};var G=null;vBulletin.flashMessage=function(a){var c=b(".js-flash-message"),d=c.find(".js-flash-message-content");G&&clearTimeout(G);d.text(a);c.removeClass("h-hide").show();G=setTimeout(function(){c.fadeOut(function(){c.addClass("h-hide")})},
5E3)};vBulletin.flashPhrase=function(b){vBulletin.flashMessage(vBulletin.phrase.get(b))};bindFormReset=function(a){return b(a).on("reset",function(b,a){"function"==typeof a&&a()})};vBulletin.sitebuilder=vBulletin.sitebuilder||{};vBulletin.sitebuilder.toggleSitebuilder=function(a){a=b(this);a.hasClass("on")?(x.setCookie("sitebuilder_active",""),b(".js-top-menu-sitebuilder").slideUp("fast"),a.removeClass("on")):(b(".js-top-menu-sitebuilder").slideDown("fast"),a.addClass("on"),x.setCookie("sitebuilder_active",
"1"))};vBulletin.sitebuilder.setupMenuProxy=()=>{var a=b(".js-top-menu-sitebuilder--list");a.find(".js-top-menu-link:not(.js-top-menu-tab--admincp)").removeClass("b-top-menu__item-link--disabled");a.on("click.menuproxy",".js-top-menu-link:not(.js-top-menu-tab--admincp)",c=>{w();vBulletin.ready("sb_page").then(()=>{a.off(".menuproxy");b(c.currentTarget).trigger("click")});return!1})};"undefined"!=typeof tzOffset&&(p=(new Date).getTimezoneOffset()/60,1==Math.abs(tzOffset+p)&&vBulletin.AJAX({call:"/profile/save-dst",
data:{userid:pageData.userid,clientUtcOffset:p},success:function(){location.reload()},api_error:b.noop,error:b.noop}));vBulletin.initFlexGridFixLastRowAll=function(b){function a(b){B(".js-flexgrid",".js-flexgrid-item",".js-flexgrid-image","b-flexgrid__item--lastrow","b-flexgrid__item--lastinrow",!0,b);B(".js-photo-preview",".b-gallery-thumbnail-list__item",".b-gallery-thumbnail-list__thumbnail","b-gallery-thumbnail-list__item--lastrow","b-gallery-thumbnail-list__item--lastinrow",!1,b)}a("undefined"==
typeof b?!1:b);vBulletin.Responsive.Debounce.registerCallbackOnce(function(){a(!0)})};vBulletin.initFrameImagesWithColor=function(){H(".js-frame-image-wrapper",".js-frame-image")};setTimeout(function(){function a(){clearTimeout(securitytoken_timeout);if("guest"!=pageData.securitytoken){securitytoken_timeout=setTimeout(a,36E5);var b=function(){3==++securitytoken_errors&&vBulletin.doReplaceSecurityToken("guest")};vBulletin.AJAX({call:"/ajax/replace-securitytoken",data:{securitytoken:pageData.securitytoken},
success:function(b){securitytoken_errors=0;vBulletin.doReplaceSecurityToken(b.newtoken)},api_error:b,error:b})}}b.support.selectstart||b.fn.extend({disableSelection:function(){return this.each(function(){b(this).css({"-moz-user-select":"-moz-none","-webkit-user-select":"none","-khtml-user-select":"none","-o-user-select":"none","user-select":"none"})})},enableSelection:function(){return this.each(function(){b(this).css({"-moz-user-select":"","-webkit-user-select":"","-khtml-user-select":"","-o-user-select":"",
"user-select":""})})}});(function(){function a(a){b("textarea.autogrow",a).css("min-height",function(){return b(this).css("height")}).autogrow()}function c(a){a.preventDefault();a=b(".js-refer-user-dialog");a.length?a.dialog("open"):vBulletin.AJAX({call:"/ajax/render/dialog_refer_user",data:{isAjaxTemplateRenderWithData:!0},success:function(a){b(a.template).appendTo("body");b(".js-refer-user-dialog").dialog({title:vBulletin.phrase.get("refer_a_friend"),autoOpen:!0,modal:!0,resizable:!1,closeOnEscape:!0,
showCloseButton:!1,width:500,dialogClass:"dialog-container dialog-box",create:function(){b(".js-close-button",this).on("click",function(a){a.preventDefault();b(this).closest(".js-refer-user-dialog").dialog("close")})},open:function(){function a(b){this.select()}var c=b(".js-referral-link",this);c.val(c.data("link")).off("focus",a).on("focus",a).trigger("focus")}})}})}function h(a){var c=b(`.js-namecard-html[data-userid="${a}"]`);return new Promise((d,e)=>{0<c.length?d(c):(vBulletin.loadingIndicator.show(),
vBulletin.AJAX({call:"/ajax/render/user_namecard",data:{userid:a,isAjaxTemplateRender:!0},success:function(a){a&&(c=b(a).filter(".js-namecard-html"),c.appendTo(document.body),d(c))},after_error:function(){e()},complete:()=>{vBulletin.loadingIndicator.hide()}}))})}function g(a){var c=parseInt(a.data("vbnamecard")||0);if(Number.isNaN(c))return!1;h(c).then(c=>{vBulletin.qtip.apply(a,"",{content:function(a,d){a=b(c[0].outerHTML).removeClass("h-hide-imp");a.find(".js-close-qtip").click(()=>{d.hide()});
return a},position:{my:"top center",at:"bottom center",viewport:b(window),adjust:{method:"shift flip"}},show:{solo:!1,ready:!0,event:!1},hide:{event:"unfocus",fixed:!0},style:{classes:"qtip--b-namecard"}})});return!0}function f(a){a.find("input.js-dependent-master").each(function(){var a=b(this),c=a.attr("type"),d=function(){var c=a.data("action"),d=!a.is(":checked"),e=b(document).find(a.data("on"));"invisible"==c?e.toggleClass("h-invisible",d):"hide"==c?e.toggleClass("h-hide-imp",d):(e.find(":input").addBack(":input").prop("disabled",
d),e.find("select").addBack("select").selectBox(d?"disable":"enable"))};if("checkbox"==c)a.on("change",d);else if("radio"==c)a.closest("form").find('input[name="'+a.attr("name")+'"]').on("change",d)})}function n(b){vBulletin.flashMessage(b);b=new URL(location.href);b.searchParams.delete("flashmsg");var a=document.title;History.replaceState({},a,b.href);document.title=a}function l(){b(".js-full-height").each(function(){var a=b(this),c=a.parent();a.css("height","");a.outerHeight(Math.floor(c.height()),
!0)})}function m(a){let c=b=>b.src="core/images/default/google-material/image_placeholder.svg";b("img.js-img-fallback",a).each((b,a)=>{!a.complete||a.naturalWidth&&a.naturalHeight||c(a);a.addEventListener("error",()=>c(a))})}vBulletin.loadingIndicator.init();var p=b(document);p.off("click","a.animate-scroll").on("click","a.animate-scroll",function(){vBulletin.scrollToAnchor(this.hash)&&(location.href=this.href);return!1});var q=function(a){a=b(this).closest(".split-button");a.toggleClass("open").find(".submenu").toggleClass("h-hide");
a.find(".js-button__icon .vb-icon").toggleClass("vb-icon-triangle-down-wide vb-icon-triangle-up-wide");b("body").off("click.buttonset").on("click.buttonset",function(a){0==b(a.target).closest(".split-button").length&&(a=b(".split-button"),a.removeClass("open").find(".submenu").addClass("h-hide"),a.find(".js-button__icon .vb-icon").addClass("vb-icon-triangle-down-wide").removeClass("vb-icon-triangle-up-wide"),b("body").off("click.buttonset"))})};b(".split-button .button-text").button().closest(".button-set").find(".js-button__icon").button({showLabel:!1,
icon:"vb-icon vb-icon-triangle-down-wide"}).closest(".button-set").buttonset();p.off("click",".split-button .button-set",q).on("click",".split-button .button-set",q);var r=x.createStorage("collapse");p.off("click",".canvas-widget .toggle-button").on("click",".canvas-widget .toggle-button",function(a,c){a=b(this);var d=a.closest(".canvas-widget"),e=b(".widget-content",d),f=d.data("widget-instance-id"),k=a.closest(".edit-mode").length;a.hasClass("expand")?(d.removeClass("collapsed"),c?e.show():e.slideDown("slow"),
k||r.unset(f)):(c?(e.hide(),d.addClass("collapsed")):e.slideUp("slow",function(){d.addClass("collapsed")}),k||r.set(f,1));a.toggleClass("collapse expand");c=a.attr("title");a.attr("title",a.data("toggle-title")).data("toggle-title",c);return!1});(function(){var a=r.getAll("collapse");a&&null!=a&&b.each(a,function(a,c){b("#widget_"+a+":not(.widget-no-header-buttons) .widget-header .toggle-button").trigger("click",[!0])})})();b(".conversation-toolbar-wrapper form.toolbar-filter-overlay").trigger("reset");
a(p);p.on("vb-loadnewposts",function(b,c){a(p,c.insertedHtml)});b(".edit-switch-container .switch-control").on("click",vBulletin.sitebuilder.toggleSitebuilder);vBulletin.sitebuilder.setupMenuProxy();q=(new URL(location.href)).searchParams.get("adminAction");actionMap={quickConfig:".js-top-menu-tab--quicksetup",stylePanel:".js-top-menu-tab--style",editPage:".js-top-menu-tab--editpage"};$action=b(actionMap[q]);0<$action.length?($action.trigger("click"),"editPage"==q&&vBulletin.ready("history").then(()=>
{let a=new URL(location.href),b=new vBulletin.history.instance(!0);a.searchParams.delete("adminAction");b.pushState({},document.title,a)})):0==pageData.userid&&actionMap[q]&&vBulletin.assertUserHasAdminPermission("canusesitebuilder",self,b.noop,function(){location.reload()});b("select.custom-dropdown").selectBox();p.off("keypress",".js-button").on("keypress",".js-button",function(a){if(32==a.which||13==a.which)a.target&&a.target.nodeName&&"label"==(a.target.nodeName+"").toLowerCase()&&1==b(a.target).find("input").length?
b(a.target).find("input").trigger("click"):b(this).trigger("click"),a.preventDefault()});p.off("keypress",".js-link").on("keypress",".js-link",function(a){13==a.which&&(b(this).trigger("click"),a.preventDefault())});b(".js-debug-collapse-list").next("ol, ul").hide();p.off("click",".js-debug-collapse-list").on("click",".js-debug-collapse-list",function(a){b(this).next("ol, ul").toggle()});p.off("click",".js-refer-user",c).on("click",".js-refer-user",c);p.off("click",".js-toggle-slider").on("click",
".js-toggle-slider",function(){var a=b(this);a.is(".b-toggle-slider--yes")?(a.removeClass("b-toggle-slider--yes").addClass("b-toggle-slider--no"),a.find(".b-toggle-slider__radio--no").prop("checked",!0),a.data("value","0")):(a.removeClass("b-toggle-slider--no").addClass("b-toggle-slider--yes"),a.find(".b-toggle-slider__radio--yes").prop("checked",!0),a.data("value","1"));var c=b(".js-toggle-slider, .js-toggle-slider__dependent"),d=c.index(a),e=!1;c.each(function(a,c){if(a==d)e=!0;else if(1==e)if(a=
b(this),a.is(".js-toggle-slider__dependent"))a.toggleClass("h-hide");else return e=!1});a.trigger("change",a.data("value"));return!1});vBulletin.options.get("usenamecard")&&b(document).offon("click","a[data-vbnamecard]",function(a){g(b(a.currentTarget))&&a.preventDefault()});b(document).offon("click",".js-follow-action",a=>{a=b(a.currentTarget);var c=parseInt(a.data("userid")),d=a.data("action");if("add"!=d&&"delete"!=d||isNaN(c))return!1;vBulletin.AJAX({call:"/ajax/api/user/changeUserRelation",data:{action:d,
userid:c},success:function(a){if(1==a.follow||2==a.follow){var e=a.follow;"delete"==d&&(e=0);b(document).trigger("vb-userrelation-change",{newRelation:e,ignoring:a.ignoring,targetUserid:c})}},title_phrase:"profile_guser"})});b(document).offon("mouseover mouseout",".js-button-hover-switch",a=>{var c=b(this),d=c.data("on-hover-toggle"),e=c.data("off-hover-toggle");a="mouseover"==a.type;d&&c.toggleClass(d,a);e&&c.toggleClass(e,!a)});b(document).offon("vb-userrelation-change",(a,c)=>{var d=parseInt(c.hasOwnProperty("targetUserid")?
c.targetUserid:"");a=c.hasOwnProperty("newRelation")?c.newRelation:null;c=c.hasOwnProperty("ignoring")?c.ignoring:null;var e=`.js-ignore-user[data-userid="${d}"][data-state="`,f=b(`${e}ignoring"]`);e=b(`${e}normal"]`);isNaN(d)||(null!==c&&(f.toggleClass("h-hide-imp",!c),e.toggleClass("h-hide-imp",c)),null!==a&&(f=`.js-follow-action[data-userid="${d}"]`,d=b(f),f=b(`${f}[data-state="${a}"]`),d.addClass("h-hide-imp"),f.removeClass("h-hide-imp"),0===a||c||e.addClass("h-hide-imp")))});b(document).offon("click",
".js-ignore-user",a=>{a=b(a.currentTarget);var c=parseInt(a.data("userid"));a=a.data("action");var d="ignore"==a?1:0;if("ignore"!=a&&"unignore"!=a||isNaN(c))return!1;vBulletin.AJAX({call:"/ajax/api/user/ignoreUser",data:{userid:c,add:d},success:function(a){a&&b(document).trigger("vb-userrelation-change",{ignoring:d,targetUserid:c})},title_phrase:"profile_guser"})});b(".js-select-box").selectBox();b(".channel-content-widget .new-conversation-btn").off("click").on("click",function(){location.href=pageData.baseurl+
"/new-content/"+pageData.channelid});b(".pagenav-form").on("submit",function(){var a=Number(this.page.value);0<a&&(location.href=this.action+"&p="+a);return!1}).trigger("reset");b(".toolbar-pagenav").off("keydown",".toolbar-pagenav input").on("keydown",".toolbar-pagenav input",function(a){var b=a.which;return a.shiftKey||a.altKey||a.ctrlKey||!(48<=b&&57>=b||96<=b&&105>=b||8==b||9==b||13==b||35==b||36==b||37==b||39==b||46==b||45==b)?!1:!0});b(document).off("click",".js-post__manage").on("click",".js-post__manage",
function(){if("undefined"==typeof vBulletin.inlinemod){var a=vBulletin.getAjaxBaseurl()+"/js/inlinemod.js?v="+pageData.simpleversion,c=this;b.getScript(a,function(){vBulletin.inlinemod.manage_deleted_form.apply(c)}).error(function(){vBulletin.warning("error","error_loading_inlinemod_script")})}else vBulletin.inlinemod.manage_deleted_form.apply(this)});b(document).off("click",".js-post__show-hide").on("click",".js-post__show-hide",function(){var a=b(this),c=a.text(),d=a.data("toggle-text");a.hasClass("js-post__show-hide--show")?
(a.closest(".js-post").addClass("b-post--show-deleted-content"),a.html(d).data("toggle-text",c).removeClass("js-post__show-hide--show")):(a.closest(".js-post").removeClass("b-post--show-deleted-content"),a.html(d).data("toggle-text",c).addClass("js-post__show-hide--show"))});b(document).offon("click","a.video-frame",function(a){a.preventDefault();var c=b(this);vBulletin.AJAX({call:"/ajax/render/bbcode_video",data:{code:c.data("vcode"),provider:c.data("vprovider"),height:c.data("height"),width:c.data("width"),
isAjaxTemplateRenderWithData:!0},success:a=>{(a=a.template)&&c.replaceWith(a)}})});vBulletin.markreadcheck();b(document).offon("click","a.markchannelsread, a.navbar_mark_channels_read",function(){vBulletin.markchannelsread(0,{success:function(){location.reload()}},b(this));return!1});b(".js-footer-go-to-top").off("click").on("click",function(a){a.preventDefault();b("body,html").animate({scrollTop:0},800)});f(b(document));b(document).on("vb-instrument",function(a){f(b(a.target))});b("input.js-select-all-master").on("change",
function(){var a=b(this);$list=b(document).find(a.data("list"));$list.prop("checked",a.is(":checked"))});pageData.flash_message&&n(pageData.flash_message);b("input[placeholder]").each(function(){var a=b(this),c=a.attr("placeholder");c&&!a.attr("aria-label")&&a.attr("aria-label",c)});l();vBulletin.Responsive.Debounce.registerCallbackOnce(l);b(document).off("vb-filterposts",l).on("vb-filterposts",l);m(b(document));b(document).on("vb-instrument",function(a){m(b(a.target))});vBulletin.ready("global").resolve()})();
b("#btnAdvSearch").off("click").on("click",function(a){a.preventDefault();b(this).data("clicked2submit",1);a=b("#searchForm");b('<input type="hidden" name="AdvSearch" value="1" />').appendTo(a);a.submit()});b("#searchForm").off("submit.searchform").on("submit.searchform",function(a){function c(a,b,c){0<c.length&&c.prop("checked")&&(a[b]=c.val())}var d=b(this),g={},f=d.find("#q"),n=b.trim(f.val());if(0<n.length)g.keywords=n;else if(!b("#btnAdvSearch").data("clicked2submit"))return vBulletin.warning("search",
"please_provide_search_string",function(){f.trigger("focus")}),a.stopPropagation(),!1;a=d.find(".searchPopupBody");c(g,"title_only",a.find(".searchFields_title_only"));c(g,"authorid",a.find(".searchFields_authorid"));c(g,"channel",a.find(".searchFields_channel"));d.find("input[name=searchJSON]").val(JSON.stringify(g));return!0});var c=x.getCookie("np_notices_displayed");c=c?c.split(","):[];c=c.concat(b('ul.notices li[data-notice-persistent="0"]').map((a,c)=>b(c).data("notice-id")).get());c=c.filter((a,
b)=>c.indexOf(a)===b);0<c.length&&x.setCookie("np_notices_displayed",c.join(","),!0);b("ul.notices > li > .close").off("click").on("click",function(a){var c=b(this).closest("li");a=c.attr("data-notice-id");vBulletin.AJAX({call:"/ajax/api/notice/dismiss",data:{noticeid:a},success:function(a){c.hide("slow",function(){var a=b(this).parent();0==a.find(">li:visible").length&&a.addClass("h-hide")})}})});b(".js-stylechooser a").off("click").on("click",function(){var a=b(this).data("styleid"),c=new Date;
c.setDate(c.getDate()+365);b.cookie(pageData.cookie_prefix+"userstyleid",a,{path:pageData.cookie_path,domain:pageData.cookie_domain,expires:c});pageData.userid?(a={userid:pageData.userid,password:"",user:{styleid:a},options:[""],adminoptions:[""],userfield:[""]},vBulletin.loadingIndicator.suppressNextAjaxIndicator(),vBulletin.AJAX({call:"/ajax/apidetach/user/save",data:a,success:function(){location.reload()}})):location.reload();return!1});b(".js-languagechooser a").off("click").on("click",function(){var a=
b(this).data("languageid"),c=new Date;c.setDate(c.getDate()+365);b.cookie(pageData.cookie_prefix+"languageid",a,{path:pageData.cookie_path,domain:pageData.cookie_domain,expires:c});location.reload();return!1});vBulletin.doReplaceSecurityToken(pageData.securitytoken);securitytoken_timeout=setTimeout(a,36E5);securitytoken_errors=0;vBulletin.initFlexGridFixLastRowAll();vBulletin.initFrameImagesWithColor();I();setTimeout(function(){vBulletin.options.get("crontab")&&pageData.nextcron<=pageData.current_server_datetime&&
(vBulletin.loadingIndicator.suppressNextAjaxIndicator(),vBulletin.AJAX({call:"/ajax/apidetach/cron/run",api_error:b.noop,error:vBulletin.ajaxtools.logAjaxError}))},5)},1);vBulletin.triggerHandler=function(a,c,d){c&&0!=c.length?c instanceof b||(c=b(c)):c=b(document);d=d||[];a=b.Event(a);a.target=this instanceof b?this.get(0):this;return c.triggerHandler(a,d)}})(jQuery);
function JShtmlEncode(b){var w="";b&&"undefined"!==typeof b&&0<b.length&&(w=$("<div/>").text(b).html());return w=String(w).replace(/"/g,"&quot;")}
function isValidEmailAddress(b){return(new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i)).test(b)}
function str_repeat(b,w){for(var q="",y=0;y<w;y++)q=q.concat(b);return q}
function showStatusMessage(b,w){var q=$(".conversation-status-message.notice"),y;if(0<q.length){var B=q.filter("."+w);q=1==B.length?B:1==(y=q.filter(".h-hide")).length?y:q.first().clone().removeClass().addClass("conversation-status-message notice").appendTo(".conversation-status-messages");q=(1==B.length?B:q).show();vBulletin.isScrolledIntoView(q)?q.hasClass("h-hide")?q.hide().removeClass("h-hide").addClass(w+" show-x").find("span").html(b).end().fadeIn(800,"linear"):q.fadeOut("slow","linear",function(){q.find("span").html(b).end().addClass(w+
" show-x").fadeIn("slow","linear")}):(y=q.offset().top-10,q.hide(),$("html,body").animate({scrollTop:y},"slow",function(){q.find("span").html(b).end().addClass(w+" show-x").fadeIn("slow","linear")}))}}vBulletin.htmlEntities=function(b){return String(b).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};vBulletin.htmlEntities_decode=function(b){return String(b).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')};
;

// ***************************
// js.compressed/jquery/jquery.qtip.min.js
// ***************************
/*
 qTip2 - Pretty powerful tooltips - v3.0.3
 http://qtip2.com

 Copyright (c) 2016
 Released under the MIT licenses
 http://jquery.org/license

 Date: Wed May 11 2016 10:31 GMT+0100+0100
 Plugins: tips modal viewport svg imagemap ie6
 Styles: core basic css3
*/
(function(z,w,I){(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(e){function T(a,b,c,d){this.id=c;this.target=a;this.tooltip=null;this.elements={target:a};this._id="qtip-"+c;this.timers={img:{}};this.options=b;this.plugins={};this.cache={event:{},target:e(),disabled:!1,attr:d,onTooltip:!1,lastClass:""};this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=!1}
function A(a){return null===a||"object"!==e.type(a)}function X(a){return!(e.isFunction(a)||a&&a.attr||a.length||"object"===e.type(a)&&(a.jquery||a.then))}function O(a){var b;if(A(a))return!1;A(a.metadata)&&(a.metadata={type:a.metadata});if("content"in a){var c=a.content;if(A(c)||c.jquery||c.done){var d=X(c)?!1:c;c=a.content={text:d}}else d=c.text;if("ajax"in c){var h=(b=c.ajax)&&!1!==b.once;delete c.ajax;c.text=function(a,c){a=d||e(this).attr(c.options.content.attr)||"Loading...";var f=e.ajax(e.extend({},
b,{context:c})).then(b.success,null,b.error).then(function(a){a&&h&&c.set("content.text",a);return a},function(a,b,d){c.destroyed||0===a.status||c.set("content.text",b+": "+d)});return h?a:(c.set("content.text",a),f)}}"title"in c&&(e.isPlainObject(c.title)&&(c.button=c.title.button,c.title=c.title.text),X(c.title||!1)&&(c.title=!1))}"position"in a&&A(a.position)&&(a.position={my:a.position,at:a.position});"show"in a&&A(a.show)&&(a.show=a.show.jquery?{target:a.show}:!0===a.show?{ready:!0}:{event:a.show});
"hide"in a&&A(a.hide)&&(a.hide=a.hide.jquery?{target:a.hide}:{event:a.hide});"style"in a&&A(a.style)&&(a.style={classes:a.style});e.each(u,function(){this.sanitize&&this.sanitize(a)});return a}function Y(a,b){var c=0,d,e=a;for(b=b.split(".");e=e[b[c++]];)c<b.length&&(d=e);return[d||a,b.pop()]}function ia(a,b){var c,d,e;for(c in this.checks)if(this.checks.hasOwnProperty(c))for(d in this.checks[c])this.checks[c].hasOwnProperty(d)&&(e=(new RegExp(d,"i")).exec(a))&&(b.push(e),("builtin"===c||this.plugins[c])&&
this.checks[c][d].apply(this.plugins[c]||this,b))}function P(a){return ja.concat("").join(a?"-"+a+" ":" ")}function Q(a,b){if(0<b)return setTimeout(e.proxy(a,this),b);a.call(this)}function ka(a){this.tooltip.hasClass(x)||(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=Q.call(this,function(){this.toggle(!0,a)},this.options.show.delay))}function la(a){if(!this.tooltip.hasClass(x)&&!this.destroyed){var b=e(a.relatedTarget),c=b.closest(".qtip")[0]===this.tooltip[0],d=b[0]===
this.options.show.target[0];clearTimeout(this.timers.show);clearTimeout(this.timers.hide);if(this!==b[0]&&"mouse"===this.options.position.target&&c||this.options.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(c||d))try{a.preventDefault(),a.stopImmediatePropagation()}catch(h){}else this.timers.hide=Q.call(this,function(){this.toggle(!1,a)},this.options.hide.delay,this)}}function U(a){!this.tooltip.hasClass(x)&&this.options.hide.inactive&&(clearTimeout(this.timers.inactive),this.timers.inactive=
Q.call(this,function(){this.hide(a)},this.options.hide.inactive))}function Z(a){this.rendered&&0<this.tooltip[0].offsetWidth&&this.reposition(a)}function aa(a,b,c){e(w.body).on((b.split?b:b.join(".qtip "))+".qtip",a,function(){var a=t.api[e.attr(this,"data-qtip-id")];a&&!a.disabled&&c.apply(a,arguments)})}function ma(a,b,c){var d,h=e(w.body),f=a[0]===w?h:a;var g=a.metadata?a.metadata(c.metadata):null;var k="html5"===c.metadata.type&&g?g[c.metadata.name]:null,m=a.data(c.metadata.name||"qtipopts");
try{m="string"===typeof m?e.parseJSON(m):m}catch(v){}g=e.extend(!0,{},t.defaults,c,"object"===typeof m?O(m):null,O(k||g));c=g.position;g.id=b;if("boolean"===typeof g.content.text){var n=a.attr(g.content.attr);if(!1!==g.content.attr&&n)g.content.text=n;else return!1}c.container.length||(c.container=h);!1===c.target&&(c.target=f);!1===g.show.target&&(g.show.target=f);!0===g.show.solo&&(g.show.solo=c.container.closest("body"));!1===g.hide.target&&(g.hide.target=f);!0===g.position.viewport&&(g.position.viewport=
c.container);c.container=c.container.eq(0);c.at=new B(c.at,!0);c.my=new B(c.my);if(a.data("qtip"))if(g.overwrite)a.qtip("destroy",!0);else if(!1===g.overwrite)return!1;a.attr("data-hasqtip",b);g.suppress&&(d=a.attr("title"))&&a.removeAttr("title").attr("oldtitle",d).attr("title","");b=new T(a,g,b,!!n);a.data("qtip",b);return b}function N(a){return a.charAt(0).toUpperCase()+a.slice(1)}function na(a,b){var c=b.charAt(0).toUpperCase()+b.slice(1);c=(b+" "+oa.join(c+" ")+c).split(" ");var d,e,f=0;if(V[b])return a.css(V[b]);
for(;d=c[f++];)if((e=a.css(d))!==I)return V[b]=d,e}function J(a,b){return Math.ceil(parseFloat(na(a,b)))}function ba(a,b){this._ns="tip";this.options=b;this.offset=b.offset;this.size=[b.width,b.height];this.qtip=a;this.init(a)}function ca(a,b){this.options=b;this._ns="-modal";this.qtip=a;this.init(a)}function da(a){this._ns="ie6";this.qtip=a;this.init(a)}var B,u={},ja=["ui-widget","ui-tooltip"],ea="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),x="qtip-disabled",R,F=
function(){var a;var b=4;for(a=w.createElement("div");(a.innerHTML="\x3c!--[if gt IE "+b+"]><i></i><![endif]--\x3e")&&a.getElementsByTagName("i")[0];b+=1);return 4<b?b:NaN}(),D=parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||!1;var l=T.prototype;l._when=function(a){return e.when.apply(e,a)};l.render=function(a){if(this.rendered||this.destroyed)return this;var b=this,c=this.options,
d=this.cache,h=this.elements,f=c.content.text,g=c.content.title,k=c.content.button,m=c.position,n=[];e.attr(this.target[0],"aria-describedby",this._id);d.posClass=this._createPosClass((this.position={my:m.my,at:m.at}).my);this.tooltip=h.tooltip=e("<div/>",{id:this._id,"class":["qtip qtip-default",c.style.classes,d.posClass].join(" "),width:c.style.width||"",height:c.style.height||"",tracking:"mouse"===m.target&&m.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":!1,"aria-describedby":this._id+
"-content","aria-hidden":!0}).toggleClass(x,this.disabled).attr("data-qtip-id",this.id).data("qtip",this).appendTo(m.container).append(h.content=e("<div />",{"class":"qtip-content",id:this._id+"-content","aria-atomic":!0}));this.rendered=-1;this.positioning=!0;g&&(this._createTitle(),e.isFunction(g)||n.push(this._updateTitle(g,!1)));k&&this._createButton();e.isFunction(f)||n.push(this._updateContent(f,!1));this.rendered=!0;this._setWidget();e.each(u,function(a){var c;"render"===this.initialize&&(c=
this(b))&&(b.plugins[a]=c)});this._unassignEvents();this._assignEvents();this._when(n).then(function(){b._trigger("render");b.positioning=!1;b.hiddenDuringWait||!c.show.ready&&!a||b.toggle(!0,d.event,!1);b.hiddenDuringWait=!1});t.api[this.id]=this;return this};l.destroy=function(a){function b(){if(!this.destroyed){this.destroyed=!0;var a=this.target,b=a.attr("oldtitle"),h;this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove();e.each(this.plugins,function(){this.destroy&&this.destroy()});
for(h in this.timers)this.timers.hasOwnProperty(h)&&clearTimeout(this.timers[h]);a.removeData("qtip").removeAttr("data-qtip-id").removeAttr("data-hasqtip").removeAttr("aria-describedby");this.options.suppress&&b&&a.attr("title",b).removeAttr("oldtitle");this._unassignEvents();this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=null;delete t.api[this.id]}}if(this.destroyed)return this.target;!0===a&&"hide"!==this.triggering||!this.rendered?b.call(this):(this.tooltip.one("tooltiphidden",
e.proxy(b,this)),!this.triggering&&this.hide());return this.target};var W=l.checks={builtin:{"^id$":function(a,b,c,d){c=!0===c?t.nextid:c;var h="qtip-"+c;!1!==c&&0<c.length&&!e("#"+h).length?(this._id=h,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):a[b]=d},"^prerender":function(a,b,c){c&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(a,b,c){this._updateContent(c)},"^content.attr$":function(a,
b,c,d){this.options.content.text===this.target.attr(d)&&this._updateContent(this.target.attr(c))},"^content.title$":function(a,b,c){if(!c)return this._removeTitle();c&&!this.elements.title&&this._createTitle();this._updateTitle(c)},"^content.button$":function(a,b,c){this._updateButton(c)},"^content.title.(text|button)$":function(a,b,c){this.set("content."+b,c)},"^position.(my|at)$":function(a,b,c){"string"===typeof c&&(this.position[b]=a[b]=new B(c,"at"===b))},"^position.container$":function(a,b,
c){this.rendered&&this.tooltip.appendTo(c)},"^show.ready$":function(a,b,c){c&&(!this.rendered&&this.render(!0)||this.toggle(!0))},"^style.classes$":function(a,b,c,d){this.rendered&&this.tooltip.removeClass(d).addClass(c)},"^style.(width|height)":function(a,b,c){this.rendered&&this.tooltip.css(b,c)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(a,b,c){this.rendered&&this.tooltip.toggleClass("qtip-default",!!c)},"^events.(render|show|move|hide|focus|blur)$":function(a,
b,c){this.rendered&&this.tooltip[(e.isFunction(c)?"":"un")+"bind"]("tooltip"+b,c)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var a=this.options.position;this.tooltip.attr("tracking","mouse"===a.target&&a.adjust.mouse);this._unassignEvents();this._assignEvents()}}}};l.get=function(a){if(this.destroyed)return this;a=Y(this.options,a.toLowerCase());a=a[0][a[1]];return a.precedance?a.string():a};var pa=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
qa=/^prerender|show\.ready/i;l.set=function(a,b){if(this.destroyed)return this;var c=this.rendered,d=!1,h=this.options;if("string"===typeof a){var f=a;a={};a[f]=b}else a=e.extend({},a);e.each(a,function(b,f){if(c&&qa.test(b))delete a[b];else{var m=Y(h,b.toLowerCase());var g=m[0][m[1]];m[0][m[1]]=f&&f.nodeType?e(f):f;d=pa.test(b)||d;a[b]=[m[0],m[1],f,g]}});O(h);this.positioning=!0;e.each(a,e.proxy(ia,this));this.positioning=!1;this.rendered&&0<this.tooltip[0].offsetWidth&&d&&this.reposition("mouse"===
h.position.target?null:this.cache.event);return this};l._update=function(a,b){var c=this,d=this.cache;if(!this.rendered||!a)return!1;e.isFunction(a)&&(a=a.call(this.elements.target,d.event,this)||"");if(e.isFunction(a.then))return d.waiting=!0,a.then(function(a){d.waiting=!1;return c._update(a,b)},null,function(a){return c._update(a,b)});if(!1===a||!a&&""!==a)return!1;a.jquery&&0<a.length?b.empty().append(a.css({display:"block",visibility:"visible"})):b.html(a);return this._waitForContent(b).then(function(a){c.rendered&&
0<c.tooltip[0].offsetWidth&&c.reposition(d.event,!a.length)})};l._waitForContent=function(a){var b=this.cache;b.waiting=!0;return(e.fn.imagesLoaded?a.imagesLoaded():(new e.Deferred).resolve([])).done(function(){b.waiting=!1}).promise()};l._updateContent=function(a,b){this._update(a,this.elements.content,b)};l._updateTitle=function(a,b){!1===this._update(a,this.elements.title,b)&&this._removeTitle(!1)};l._createTitle=function(){var a=this.elements,b=this._id+"-title";a.titlebar&&this._removeTitle();
a.titlebar=e("<div />",{"class":"qtip-titlebar "+(this.options.style.widget?P("header"):"")}).append(a.title=e("<div />",{id:b,"class":"qtip-title","aria-atomic":!0})).insertBefore(a.content).on("mousedown keydown mouseup keyup mouseout",".qtip-close",function(a){e(this).toggleClass("ui-state-active ui-state-focus","down"===a.type.substr(-4))}).on("mouseover mouseout",".qtip-close",function(a){e(this).toggleClass("ui-state-hover","mouseover"===a.type)});this.options.content.button&&this._createButton()};
l._removeTitle=function(a){var b=this.elements;b.title&&(b.titlebar.remove(),b.titlebar=b.title=b.button=null,!1!==a&&this.reposition())};l._createPosClass=function(a){return"qtip-pos-"+(a||this.options.position.my).abbrev()};l.reposition=function(a,b){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=!0;var c=this.cache,d=this.tooltip,h=this.options.position,f=h.target,g=h.my,k=h.at,m=h.viewport,n=h.container,v=h.adjust,p=v.method.split(" "),q=d.outerWidth(!1),H=d.outerHeight(!1),
l=0,K=0,t=d.css("position"),r={left:0,top:0},x=0<d[0].offsetWidth,B=a&&"scroll"===a.type,y=e(z),A=n[0].ownerDocument,E=this.mouse,C;if(e.isArray(f)&&2===f.length)k={x:"left",y:"top"},r={left:f[0],top:f[1]};else if("mouse"===f)k={x:"left",y:"top"},(!v.mouse||this.options.hide.distance)&&c.origin&&c.origin.pageX?a=c.origin:!a||a&&("resize"===a.type||"scroll"===a.type)?a=c.event:E&&E.pageX&&(a=E),"static"!==t&&(r=n.offset()),A.body.offsetWidth!==(z.innerWidth||A.documentElement.clientWidth)&&(C=e(w.body).offset()),
r={left:a.pageX-r.left+(C&&C.left||0),top:a.pageY-r.top+(C&&C.top||0)},v.mouse&&B&&E&&(r.left-=(E.scrollX||0)-y.scrollLeft(),r.top-=(E.scrollY||0)-y.scrollTop());else{"event"===f?a&&a.target&&"scroll"!==a.type&&"resize"!==a.type?c.target=e(a.target):a.target||(c.target=this.elements.target):"event"!==f&&(c.target=e(f.jquery?f:this.elements.target));f=c.target;f=e(f).eq(0);if(0===f.length)return this;if(f[0]===w||f[0]===z)l=D?z.innerWidth:f.width(),K=D?z.innerHeight:f.height(),f[0]===z&&(r={top:(m||
f).scrollTop(),left:(m||f).scrollLeft()});else if(u.imagemap&&f.is("area"))var G=u.imagemap(this,f,k,u.viewport?p:!1);else u.svg&&f&&f[0].ownerSVGElement?G=u.svg(this,f,k,u.viewport?p:!1):(l=f.outerWidth(!1),K=f.outerHeight(!1),r=f.offset());G&&(l=G.width,K=G.height,C=G.offset,r=G.position);r=this.reposition.offset(f,r,n);if(3.1<D&&4.1>D||4.3<=D&&4.33>D||!D&&"fixed"===t)r.left-=y.scrollLeft(),r.top-=y.scrollTop();if(!G||G&&!1!==G.adjustable)r.left+="right"===k.x?l:"center"===k.x?l/2:0,r.top+="bottom"===
k.y?K:"center"===k.y?K/2:0}r.left+=v.x+("right"===g.x?-q:"center"===g.x?-q/2:0);r.top+=v.y+("bottom"===g.y?-H:"center"===g.y?-H/2:0);u.viewport?(g=r.adjusted=u.viewport(this,r,h,l,K,q,H),C&&g.left&&(r.left+=C.left),C&&g.top&&(r.top+=C.top),g.my&&(this.position.my=g.my)):r.adjusted={left:0,top:0};c.posClass!==(C=this._createPosClass(this.position.my))&&(c.posClass=C,d.removeClass(c.posClass).addClass(C));if(!this._trigger("move",[r,m.elem||m],a))return this;delete r.adjusted;!1===b||!x||isNaN(r.left)||
isNaN(r.top)||"mouse"===f||!e.isFunction(h.effect)?d.css(r):e.isFunction(h.effect)&&(h.effect.call(d,this,e.extend({},r)),d.queue(function(a){e(this).css({opacity:"",height:""});F&&this.style.removeAttribute("filter");a()}));this.positioning=!1;return this};l.reposition.offset=function(a,b,c){if(!c[0])return b;a=e(a[0].ownerDocument);var d=!!F&&"CSS1Compat"!==w.compatMode;c=c[0];var h,f,g;do if("static"!==(f=e.css(c,"position"))){if("fixed"===f){f=c.getBoundingClientRect();var k=a;b.left+=-1*k.scrollLeft();
b.top+=-1*k.scrollTop()}else f=e(c).position(),f.left+=parseFloat(e.css(c,"borderLeftWidth"))||0,f.top+=parseFloat(e.css(c,"borderTopWidth"))||0;b.left-=f.left+(parseFloat(e.css(c,"marginLeft"))||0);b.top-=f.top+(parseFloat(e.css(c,"marginTop"))||0);h||"hidden"===(g=e.css(c,"overflow"))||"visible"===g||(h=e(c))}while(c=c.offsetParent);h&&(h[0]!==a[0]||d)&&(b.left+=1*h.scrollLeft(),b.top+=1*h.scrollTop());return b};var L=(B=l.reposition.Corner=function(a,b){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,
"center").toLowerCase();this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase();this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();this.forceY=!!b;a=a.charAt(0);this.precedance="t"===a||"b"===a?"y":"x"}).prototype;L.invert=function(a,b){this[a]="left"===this[a]?"right":"right"===this[a]?"left":b||this[a]};L.string=function(a){var b=this.x,c=this.y;b=b!==c?"center"===b||"center"!==c&&("y"===this.precedance||this.forceY)?[c,b]:[b,c]:[b];return!1!==a?b.join(" "):
b};L.abbrev=function(){var a=this.string(!1);return a[0].charAt(0)+(a[1]&&a[1].charAt(0)||"")};L.clone=function(){return new B(this.string(),this.forceY)};l.toggle=function(a,b,c){var d=this.cache,h=this.options,f=this.tooltip;if(b){if(/over|enter/.test(b.type)&&d.event&&/out|leave/.test(d.event.type)&&h.show.target.add(b.target).length===h.show.target.length&&f.has(b.relatedTarget).length)return this;d.event=e.event.fix(b)}this.waiting&&!a&&(this.hiddenDuringWait=!0);if(!this.rendered)return a?this.render(1):
this;if(this.destroyed||this.disabled)return this;h=a?"show":"hide";var g=this.options[h],k=this.options.position,m=this.options.content,n=this.tooltip.css("width"),v=this.tooltip.is(":visible"),p=a||1===g.target.length,q=!b||2>g.target.length||d.target[0]===b.target;(typeof a).search("boolean|number")&&(a=!v);q=(v=!f.is(":animated")&&v===a&&q)?null:!!this._trigger(h,[90]);if(this.destroyed)return this;!1!==q&&a&&this.focus(b);if(!q||v)return this;e.attr(f[0],"aria-hidden",!a);a?(this.mouse&&(d.origin=
e.event.fix(this.mouse)),e.isFunction(m.text)&&this._updateContent(m.text,!1),e.isFunction(m.title)&&this._updateTitle(m.title,!1),!R&&"mouse"===k.target&&k.adjust.mouse&&(e(w).on("mousemove.qtip",this._storeMouse),R=!0),n||f.css("width",f.outerWidth(!1)),this.reposition(b,c),n||f.css("width",""),g.solo&&("string"===typeof g.solo?e(g.solo):e(".qtip",g.solo)).not(f).not(g.target).qtip("hide",new e.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete d.origin,R&&!e('.qtip[tracking="true"]:visible',
g.solo).not(f).length&&(e(w).off("mousemove.qtip"),R=!1),this.blur(b));var H=e.proxy(function(){a?(F&&f[0].style.removeAttribute("filter"),f.css("overflow",""),"string"===typeof g.autofocus&&e(this.options.show.autofocus,f).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):f.css({display:"",visibility:"",opacity:"",left:"",top:""});this._trigger(a?"visible":"hidden")},this);!1===g.effect||!1===p?(f[h](),H()):e.isFunction(g.effect)?(f.stop(1,1),g.effect.call(f,this),f.queue("fx",
function(a){H();a()})):f.fadeTo(90,a?1:0,H);a&&g.target.trigger("qtip-"+this.id+"-inactive");return this};l.show=function(a){return this.toggle(!0,a)};l.hide=function(a){return this.toggle(!1,a)};l.focus=function(a){if(!this.rendered||this.destroyed)return this;var b=e(".qtip"),c=this.tooltip,d=parseInt(c[0].style.zIndex,10),h=t.zindex+b.length;!c.hasClass("qtip-focus")&&this._trigger("focus",[h],a)&&(d!==h&&(b.each(function(){this.style.zIndex>d&&--this.style.zIndex}),b.filter(".qtip-focus").qtip("blur",
a)),c.addClass("qtip-focus")[0].style.zIndex=h);return this};l.blur=function(a){if(!this.rendered||this.destroyed)return this;this.tooltip.removeClass("qtip-focus");this._trigger("blur",[this.tooltip.css("zIndex")],a);return this};l.disable=function(a){if(this.destroyed)return this;"toggle"===a?a=!(this.rendered?this.tooltip.hasClass(x):this.disabled):"boolean"!==typeof a&&(a=!0);this.rendered&&this.tooltip.toggleClass(x,a).attr("aria-disabled",a);this.disabled=!!a;return this};l.enable=function(){return this.disable(!1)};
l._createButton=function(){var a=this,b=this.elements,c=b.tooltip,d=this.options.content.button,h="string"===typeof d?d:"Close tooltip";b.button&&b.button.remove();b.button=d.jquery?d:e("<a />",{"class":"qtip-close "+(this.options.style.widget?"":"qtip-icon"),title:h,"aria-label":h}).prepend(e("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"}));b.button.appendTo(b.titlebar||c).attr("role","button").click(function(b){c.hasClass(x)||a.hide(b);return!1})};l._updateButton=function(a){if(!this.rendered)return!1;
var b=this.elements.button;a?this._createButton():b.remove()};l._setWidget=function(){var a=this.options.style.widget,b=this.elements,c=b.tooltip,d=c.hasClass(x);c.removeClass(x);x=a?"ui-state-disabled":"qtip-disabled";c.toggleClass(x,d);c.toggleClass("ui-helper-reset "+P(),a).toggleClass("qtip-default",this.options.style.def&&!a);b.content&&b.content.toggleClass(P("content"),a);b.titlebar&&b.titlebar.toggleClass(P("header"),a);b.button&&b.button.toggleClass("qtip-icon",!a)};l._storeMouse=function(a){(this.mouse=
e.event.fix(a)).type="mousemove";return this};l._bind=function(a,b,c,d,h){if(a&&c&&b.length)return d="."+this._id+(d?"-"+d:""),e(a).on((b.split?b:b.join(d+" "))+d,e.proxy(c,h||this)),this};l._unbind=function(a,b){a&&e(a).off("."+this._id+(b?"-"+b:""));return this};l._trigger=function(a,b,c){var d=new e.Event("tooltip"+a);d.originalEvent=c&&e.extend({},c)||this.cache.event||null;this.triggering=a;this.tooltip.trigger(d,[this].concat(b||[]));this.triggering=!1;return!d.isDefaultPrevented()};l._bindEvents=
function(a,b,c,d,h,f){var g=c.filter(d).add(d.filter(c)),k=[];g.length&&(e.each(b,function(b,c){b=e.inArray(c,a);-1<b&&k.push(a.splice(b,1)[0])}),k.length&&(this._bind(g,k,function(a){(this.rendered&&0<this.tooltip[0].offsetWidth?f:h).call(this,a)}),c=c.not(g),d=d.not(g)));this._bind(c,a,h);this._bind(d,b,f)};l._assignInitialEvents=function(a){function b(a){if(this.disabled||this.destroyed)return!1;this.cache.event=a&&e.event.fix(a);this.cache.target=a&&e(a.target);clearTimeout(this.timers.show);
this.timers.show=Q.call(this,function(){this.render("object"===typeof a||c.show.ready)},c.prerender?0:c.show.delay)}var c=this.options,d=c.show.target,h=c.hide.target,f=c.show.event?e.trim(""+c.show.event).split(" "):[],g=c.hide.event?e.trim(""+c.hide.event).split(" "):[];this._bind(this.elements.target,["remove","removeqtip"],function(){this.destroy(!0)},"destroy");/mouse(over|enter)/i.test(c.show.event)&&!/mouse(out|leave)/i.test(c.hide.event)&&g.push("mouseleave");this._bind(d,"mousemove",function(a){this._storeMouse(a);
this.cache.onTarget=!0});this._bindEvents(f,g,d,h,b,function(){if(!this.timers)return!1;clearTimeout(this.timers.show)});(c.show.ready||c.prerender)&&b.call(this,a)};l._assignEvents=function(){var a=this,b=this.options,c=b.position,d=this.tooltip,h=b.show.target,f=b.hide.target,g=c.container,k=c.viewport,m=e(w),n=e(z),v=b.show.event?e.trim(""+b.show.event).split(" "):[],p=b.hide.event?e.trim(""+b.hide.event).split(" "):[];e.each(b.events,function(b,c){a._bind(d,"toggle"===b?["tooltipshow","tooltiphide"]:
["tooltip"+b],c,null,d)});/mouse(out|leave)/i.test(b.hide.event)&&"window"===b.hide.leave&&this._bind(m,["mouseout","blur"],function(a){/select|option/.test(a.target.nodeName)||a.relatedTarget||this.hide(a)});b.hide.fixed?f=f.add(d.addClass("qtip-fixed")):/mouse(over|enter)/i.test(b.show.event)&&this._bind(f,"mouseleave",function(){clearTimeout(this.timers.show)});-1<(""+b.hide.event).indexOf("unfocus")&&this._bind(g.closest("html"),["mousedown","touchstart"],function(a){var b=e(a.target),c=this.rendered&&
!this.tooltip.hasClass(x)&&0<this.tooltip[0].offsetWidth,d=0<b.parents(".qtip").filter(this.tooltip[0]).length;b[0]===this.target[0]||b[0]===this.tooltip[0]||d||this.target.has(b[0]).length||!c||this.hide(a)});"number"===typeof b.hide.inactive&&(this._bind(h,"qtip-"+this.id+"-inactive",U,"inactive"),this._bind(f.add(d),t.inactiveEvents,U));this._bindEvents(v,p,h,f,ka,la);this._bind(h.add(d),"mousemove",function(a){if("number"===typeof b.hide.distance){var c=this.cache.origin||{},d=this.options.hide.distance,
f=Math.abs;(f(a.pageX-c.pageX)>=d||f(a.pageY-c.pageY)>=d)&&this.hide(a)}this._storeMouse(a)});"mouse"===c.target&&c.adjust.mouse&&(b.hide.event&&this._bind(h,["mouseenter","mouseleave"],function(a){if(!this.cache)return!1;this.cache.onTarget="mouseenter"===a.type}),this._bind(m,"mousemove",function(a){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(x)&&0<this.tooltip[0].offsetWidth&&this.reposition(a)}));(c.adjust.resize||k.length)&&this._bind(e.event.special.resize?k:n,"resize",Z);c.adjust.scroll&&
this._bind(n.add(c.container),"scroll",Z)};l._unassignEvents=function(){var a=this.options,b=a.show.target,c=a.hide.target;a=e.grep([this.elements.target[0],this.rendered&&this.tooltip[0],a.position.container[0],a.position.viewport[0],a.position.container.closest("html")[0],z,w],function(a){return"object"===typeof a});b&&b.toArray&&(a=a.concat(b.toArray()));c&&c.toArray&&(a=a.concat(c.toArray()));this._unbind(a)._unbind(a,"destroy")._unbind(a,"inactive")};e(function(){aa(".qtip",["mouseenter","mouseleave"],
function(a){var b="mouseenter"===a.type,c=e(a.currentTarget),d=e(a.relatedTarget||a.target),h=this.options;b?(this.focus(a),c.hasClass("qtip-fixed")&&!c.hasClass(x)&&clearTimeout(this.timers.hide)):"mouse"===h.position.target&&h.position.adjust.mouse&&h.hide.event&&h.show.target&&!d.closest(h.show.target[0]).length&&this.hide(a);c.toggleClass("qtip-hover",b)});aa("[data-qtip-id]",ea,U)});var t=e.fn.qtip=function(a,b,c){var d=(""+a).toLowerCase(),h=null,f=e.makeArray(arguments).slice(1),g=f[f.length-
1],k=this[0]?e.data(this[0],"qtip"):null;if(!arguments.length&&k||"api"===d)return k;if("string"===typeof a)return this.each(function(){var a=e.data(this,"qtip");if(!a)return!0;g&&g.timeStamp&&(a.cache.event=g);if(!b||"option"!==d&&"options"!==d)a[d]&&a[d].apply(a,f);else if(c!==I||e.isPlainObject(b))a.set(b,c);else return h=a.get(b),!1}),null!==h?h:this;if("object"===typeof a||!arguments.length)return k=O(e.extend(!0,{},a)),this.each(function(a){a=e.isArray(k.id)?k.id[a]:k.id;a=!a||!1===a||1>a.length||
t.api[a]?t.nextid++:a;var b=ma(e(this),a,k);if(!1===b)return!0;t.api[a]=b;e.each(u,function(){"initialize"===this.initialize&&this(b)});b._assignInitialEvents(g)})};e.qtip=T;t.api={};e.each({attr:function(a,b){if(this.length){var c=this[0],d=e.data(c,"qtip");if("title"===a&&d&&d.options&&"object"===typeof d&&"object"===typeof d.options&&d.options.suppress){if(2>arguments.length)return e.attr(c,"oldtitle");d&&"title"===d.options.content.attr&&d.cache.attr&&d.set("content.text",b);return this.attr("oldtitle",
b)}}return e.fn.attr_replacedByqTip.apply(this,arguments)},clone:function(a){var b=e.fn.clone_replacedByqTip.apply(this,arguments);a||b.filter("[oldtitle]").attr("title",function(){return e.attr(this,"oldtitle")}).removeAttr("oldtitle");return b}},function(a,b){if(!b||e.fn[a+"_replacedByqTip"])return!0;var c=e.fn[a+"_replacedByqTip"]=e.fn[a];e.fn[a]=function(){return b.apply(this,arguments)||c.apply(this,arguments)}});e.ui||(e.cleanData_replacedByqTip=e.cleanData,e.cleanData=function(a){for(var b=
0,c;(c=e(a[b])).length;b++)if(c.attr("data-hasqtip"))try{c.triggerHandler("removeqtip")}catch(d){}e.cleanData_replacedByqTip.apply(this,arguments)});t.version="3.0.3";t.nextid=0;t.inactiveEvents=ea;t.zindex=15E3;t.defaults={prerender:!1,id:!1,overwrite:!0,suppress:!0,content:{text:!0,attr:"title",title:!1,button:!1},position:{my:"top left",at:"bottom right",target:!1,container:!1,viewport:!1,adjust:{x:0,y:0,mouse:!0,scroll:!0,resize:!0,method:"flipinvert flipinvert"},effect:function(a,b){e(this).animate(b,
{duration:200,queue:!1})}},show:{target:!1,event:"mouseenter",effect:!0,delay:90,solo:!1,ready:!1,autofocus:!1},hide:{target:!1,event:"mouseleave",effect:!0,delay:0,fixed:!1,inactive:!1,leave:"window",distance:!1},style:{classes:"",widget:!1,width:!1,height:!1,def:!0},events:{render:null,move:null,show:null,hide:null,toggle:null,visible:null,hidden:null,focus:null,blur:null}};var S=!!w.createElement("canvas").getContext,fa=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,V={},oa=["Webkit","O","Moz",
"ms"];if(S){l=z.devicePixelRatio||1;L=function(){var a=w.createElement("canvas").getContext("2d");return a.backingStorePixelRatio||a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||1}();var M=l/L}else var ha=function(a,b,c){return"<qtipvml:"+a+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(b||"")+' style="behavior: url(#default#VML); '+(c||"")+'" />'};e.extend(ba.prototype,{init:function(a){var b=this.element=a.elements.tip=
e("<div />",{"class":"qtip-tip"}).prependTo(a.tooltip);if(S){var c=e("<canvas />").appendTo(this.element)[0].getContext("2d");c.lineJoin="miter";c.miterLimit=1E5;c.save()}else c=ha("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(c+c),a._bind(e("*",b).add(b),["click","mousedown"],function(a){a.stopPropagation()},this._ns);a._bind(a.tooltip,"tooltipmove",this.reposition,this._ns,this);this.create()},_swapDimensions:function(){this.size[0]=this.options.height;this.size[1]=this.options.width},
_resetDimensions:function(){this.size[0]=this.options.width;this.size[1]=this.options.height},_useTitle:function(a){var b=this.qtip.elements.titlebar;return b&&("top"===a.y||"center"===a.y&&this.element.position().top+this.size[1]/2+this.options.offset<b.outerHeight(!0))},_parseCorner:function(a){var b=this.qtip.options.position.my;!1===a||!1===b?a=!1:!0===a?a=new B(b.string()):a.string||(a=new B(a),a.fixed=!0);return a},_parseWidth:function(a,b,c){var d=this.qtip.elements;b="border"+N(b)+"Width";
return(c?J(c,b):J(d.content,b)||J(this._useTitle(a)&&d.titlebar||d.content,b)||J(d.tooltip,b))||0},_parseRadius:function(a){var b=this.qtip.elements,c="border"+N(a.y)+N(a.x)+"Radius";return 9>F?0:J(this._useTitle(a)&&b.titlebar||b.content,c)||J(b.tooltip,c)||0},_invalidColour:function(a,b,c){b=a.css(b);return!b||c&&b===a.css(c)||fa.test(b)?!1:b},_parseColours:function(a){var b=this.qtip.elements,c=this.element.css("cssText",""),d="border"+N(a[a.precedance])+N("color");a=this._useTitle(a)&&b.titlebar||
b.content;var h=this._invalidColour,f=[];f[0]=h(c,"background-color")||h(a,"background-color")||h(b.content,"background-color")||h(b.tooltip,"background-color")||c.css("background-color");f[1]=h(c,d,"color")||h(a,d,"color")||h(b.content,d,"color")||h(b.tooltip,d,"color")||b.tooltip.css(d);e("*",c).add(c).css("cssText","background-color:transparent !important;border:0 !important;");return f},_calculateSize:function(a){var b="y"===a.precedance,c=this.options.width,d=this.options.height,e="c"===a.abbrev(),
f=(b?c:d)*(e?.5:1),g=Math.pow;a=Math.round;var k=Math.sqrt(g(f,2)+g(d,2));f=[this.border/f*k,this.border/d*k];f[2]=Math.sqrt(g(f[0],2)-g(this.border,2));f[3]=Math.sqrt(g(f[1],2)-g(this.border,2));e=(k+f[2]+f[3]+(e?0:f[0]))/k;c=[a(e*c),a(e*d)];return b?c:c.reverse()},_calculateTip:function(a,b,c){c=c||1;b=b||this.size;var d=b[0]*c;b=b[1]*c;c=Math.ceil(d/2);var e=Math.ceil(b/2);d={br:[0,0,d,b,d,0],bl:[0,0,d,0,0,b],tr:[0,b,d,0,d,b],tl:[0,0,0,b,d,b],tc:[0,b,c,0,d,b],bc:[0,0,d,0,c,b],rc:[0,0,d,e,0,b],
lc:[d,0,d,b,0,e]};d.lt=d.br;d.rt=d.bl;d.lb=d.tr;d.rb=d.tl;return d[a.abbrev()]},_drawCoords:function(a,b){a.beginPath();a.moveTo(b[0],b[1]);a.lineTo(b[2],b[3]);a.lineTo(b[4],b[5]);a.closePath()},create:function(){var a=this.corner=(S||F)&&this._parseCorner(this.options.corner);if(this.enabled=!!this.corner&&"c"!==this.corner.abbrev())this.qtip.cache.corner=a.clone(),this.update();this.element.toggle(this.enabled);return this.corner},update:function(a,b){if(!this.enabled)return this;var c=this.qtip.elements,
d=this.element,h=d.children(),f=this.options,g=this.size,k=f.mimic,m=Math.round;a||(a=this.qtip.cache.corner||this.corner);!1===k?k=a:(k=new B(k),k.precedance=a.precedance,"inherit"===k.x?k.x=a.x:"inherit"===k.y?k.y=a.y:k.x===k.y&&(k[a.precedance]=a[a.precedance]));var n=k.precedance;"x"===a.precedance?this._swapDimensions():this._resetDimensions();var v=this.color=this._parseColours(a);if("transparent"!==v[1]){var p=this.border=this._parseWidth(a,a[a.precedance]);f.border&&1>p&&!fa.test(v[1])&&(v[0]=
v[1]);this.border=p=!0!==f.border?f.border:p}else this.border=p=0;var q=this.size=this._calculateSize(a);d.css({width:q[0],height:q[1],lineHeight:q[1]+"px"});d="y"===a.precedance?[m("left"===k.x?p:"right"===k.x?q[0]-g[0]-p:(q[0]-g[0])/2),m("top"===k.y?q[1]-g[1]:0)]:[m("left"===k.x?q[0]-g[0]:0),m("top"===k.y?p:"bottom"===k.y?q[1]-g[1]-p:(q[1]-g[1])/2)];if(S){n=h[0].getContext("2d");n.restore();n.save();n.clearRect(0,0,6E3,6E3);var l=this._calculateTip(k,g,M);g=this._calculateTip(k,this.size,M);h.attr("width",
q[0]*M).attr("height",q[1]*M);h.css("width",q[0]).css("height",q[1]);this._drawCoords(n,g);n.fillStyle=v[1];n.fill();n.translate(d[0]*M,d[1]*M);this._drawCoords(n,l);n.fillStyle=v[0];n.fill()}else l=this._calculateTip(k),l="m"+l[0]+","+l[1]+" l"+l[2]+","+l[3]+" "+l[4]+","+l[5]+" xe",d[2]=p&&/^(r|b)/i.test(a.string())?8===F?2:1:0,h.css({coordsize:q[0]+p+" "+q[1]+p,antialias:""+(-1<k.string().indexOf("center")),left:d[0]-d[2]*Number("x"===n),top:d[1]-d[2]*Number("y"===n),width:q[0]+p,height:q[1]+p}).each(function(a){var b=
e(this);b[b.prop?"prop":"attr"]({coordsize:q[0]+p+" "+q[1]+p,path:l,fillcolor:v[0],filled:!!a,stroked:!a}).toggle(!(!p&&!a));!a&&b.html(ha("stroke",'weight="'+2*p+'px" color="'+v[1]+'" miterlimit="1000" joinstyle="miter"'))});z.opera&&setTimeout(function(){c.tip.css({display:"inline-block",visibility:"visible"})},1);!1!==b&&this.calculate(a,q)},calculate:function(a,b){if(!this.enabled)return!1;var c=this,d=this.qtip.elements,h=this.element,f=this.options.offset,g={};a=a||this.corner;var k=a.precedance;
b=b||this._calculateSize(a);var m=[a.x,a.y];"x"===k&&m.reverse();e.each(m,function(e,h){if("center"===h){var m="y"===k?"left":"top";g[m]="50%";g["margin-"+m]=-Math.round(b["y"===k?0:1]/2)+f}else{m=c._parseWidth(a,h,d.tooltip);var n=c._parseWidth(a,h,d.content);var l=c._parseRadius(a);g[h]=Math.max(-c.border,e?n:f+(l>m?l:-m))}});g[a[k]]-=b["x"===k?0:1];h.css({margin:"",top:"",bottom:"",left:"",right:""}).css(g);return g},reposition:function(a,b,c){function d(a,b,c,d,e){"shift"===a&&f.precedance===
b&&g[d]&&"center"!==f[c]?f.precedance="x"===f.precedance?"y":"x":"shift"!==a&&g[d]&&(f[b]="center"===f[b]?0<g[d]?d:e:f[b]===d?e:d)}function e(a,b,d){"center"===f[a]?n["margin-"+b]=m[a]=p["margin-"+b]-g[b]:(l=p[d]!==I?[g[b],-p[b]]:[-g[b],p[b]],(m[a]=Math.max(l[0],l[1]))>l[0]&&(c[b]-=g[b],m[b]=!1),n[p[d]!==I?d:b]=m[a])}if(this.enabled){a=b.cache;var f=this.corner.clone(),g=c.adjusted,k=b.options.position.adjust.method.split(" ");b=k[0];k=k[1]||k[0];var m={left:!1,top:!1,x:0,y:0},n={},l;!0!==this.corner.fixed&&
(d(b,"x","y","left","right"),d(k,"y","x","top","bottom"),f.string()===a.corner.string()&&a.cornerTop===g.top&&a.cornerLeft===g.left||this.update(f,!1));var p=this.calculate(f);p.right!==I&&(p.left=-p.right);p.bottom!==I&&(p.top=-p.bottom);p.user=this.offset;m.left="shift"===b&&!!g.left;m.left&&e("x","left","right");m.top="shift"===k&&!!g.top;m.top&&e("y","top","bottom");this.element.css(n).toggle(!(m.x&&m.y||"center"===f.x&&m.y||"center"===f.y&&m.x));c.left-=p.left.charAt?p.user:"shift"!==b||m.top||
!m.left&&!m.top?p.left+this.border:0;c.top-=p.top.charAt?p.user:"shift"!==k||m.left||!m.left&&!m.top?p.top+this.border:0;a.cornerLeft=g.left;a.cornerTop=g.top;a.corner=f.clone()}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns);this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}});l=u.tip=function(a){return new ba(a,a.options.style.tip)};l.initialize="render";l.sanitize=function(a){if(a.style&&"tip"in a.style){var b=a.style.tip;"object"!==typeof b&&(b=
a.style.tip={corner:b});/string|boolean/i.test(typeof b.corner)||(b.corner=!0)}};W.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create();this.qtip.reposition()},"^style.tip.(height|width)$":function(a){this.size=[a.width,a.height];this.update();this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}};e.extend(!0,t.defaults,{style:{tip:{corner:!0,mimic:!1,width:6,height:6,border:!0,offset:0}}});var y=function(){function a(a){if(e.expr[":"].focusable)return e.expr[":"].focusable;
var b=!isNaN(e.attr(a,"tabindex")),c=a.nodeName&&a.nodeName.toLowerCase();if("area"===c){b=a.parentNode;c=b.name;if(!a.href||!c||"map"!==b.nodeName.toLowerCase())return!1;a=e("img[usemap=#"+c+"]")[0];return!!a&&a.is(":visible")}return/input|select|textarea|button|object/.test(c)?!a.disabled:"a"===c?a.href||b:b}function b(a){1>h.length&&a.length?a.not("body").blur():h.first().focus()}function c(a){if(k.is(":visible")){a=e(a.target);var c=f.tooltip,d=a.closest(".qtip");(1>d.length?0:parseInt(d[0].style.zIndex,
10)>parseInt(c[0].style.zIndex,10))||a.closest(".qtip")[0]===c[0]||b(a)}}var d=this,h={},f,g,k;e.extend(d,{init:function(){k=d.elem=e("<div />",{id:"qtip-overlay",html:"<div></div>"}).on("mousedown",!1).hide();e(w.body).on("focusin.qtip-modal",c);e(w).on("keydown.qtip-modal",function(a){f&&f.options.show.modal.escape&&27===a.keyCode&&f.hide(a)});k.on("click.qtip-modal",function(a){f&&f.options.show.modal.blur&&f.hide(a)});return d},update:function(b){f=b;h=!1!==b.options.show.modal.stealfocus?b.tooltip.find("*").filter(function(){return a(this)}):
[]},toggle:function(a,c,h){var m=a.tooltip,l=a.options.show.modal,n=l.effect,v=c?"show":"hide",u=k.is(":visible");m=e(".qtip-modal").filter(":visible:not(:animated)").not(m);d.update(a);c&&!1!==l.stealfocus&&b(e(":focus"));k.toggleClass("blurs",l.blur);c&&k.appendTo(w.body);if(k.is(":animated")&&u===c&&!1!==g||!c&&m.length)return d;k.stop(!0,!1);if(e.isFunction(n))n.call(k,c);else if(!1===n)k[v]();else k.fadeTo(parseInt(h,10)||90,c?1:0,function(){c||k.hide()});c||k.queue(function(a){k.css({left:"",
top:""});e(".qtip-modal").length||k.detach();a()});g=c;f.destroyed&&(f=null);return d}});d.init()};y=new y;e.extend(ca.prototype,{init:function(a){var b=a.tooltip;if(!this.options.on)return this;a.elements.overlay=y.elem;b.addClass("qtip-modal").css("z-index",t.modal_zindex+e(".qtip-modal").length);a._bind(b,["tooltipshow","tooltiphide"],function(a,d,h){d=a.originalEvent;if(a.target===b[0])if(d&&"tooltiphide"===a.type&&/mouse(leave|enter)/.test(d.type)&&e(d.relatedTarget).closest(y.elem[0]).length)try{a.preventDefault()}catch(f){}else(!d||
d&&"tooltipsolo"!==d.type)&&this.toggle(a,"tooltipshow"===a.type,h)},this._ns,this);a._bind(b,"tooltipfocus",function(a,d){if(!a.isDefaultPrevented()&&a.target===b[0]){var c=e(".qtip-modal"),f=t.modal_zindex+c.length,g=parseInt(b[0].style.zIndex,10);y.elem[0].style.zIndex=f-1;c.each(function(){this.style.zIndex>g&&--this.style.zIndex});c.filter(".qtip-focus").qtip("blur",a.originalEvent);b.addClass("qtip-focus")[0].style.zIndex=f;y.update(d);try{a.preventDefault()}catch(k){}}},this._ns,this);a._bind(b,
"tooltiphide",function(a){a.target===b[0]&&e(".qtip-modal").filter(":visible").not(b).last().qtip("focus",a)},this._ns,this)},toggle:function(a,b,c){if(a&&a.isDefaultPrevented())return this;y.toggle(this.qtip,!!b,c)},destroy:function(){this.qtip.tooltip.removeClass("qtip-modal");this.qtip._unbind(this.qtip.tooltip,this._ns);y.toggle(this.qtip,!1);delete this.qtip.elements.overlay}});l=u.modal=function(a){return new ca(a,a.options.show.modal)};l.sanitize=function(a){a.show&&("object"!==typeof a.show.modal?
a.show.modal={on:!!a.show.modal}:"undefined"===typeof a.show.modal.on&&(a.show.modal.on=!0))};t.modal_zindex=t.zindex-200;l.initialize="render";W.modal={"^show.modal.(on|blur)$":function(){this.destroy();this.init();this.qtip.elems.overlay.toggle(0<this.qtip.tooltip[0].offsetWidth)}};e.extend(!0,t.defaults,{show:{modal:{on:!1,effect:!0,blur:!0,stealfocus:!0,escape:!0}}});u.viewport=function(a,b,c,d,e,f,g){function h(a,c,d,e,f,h,g,k,m){var l=b[f],n=v[a],q=p[a],t=n===f?m:n===h?-m:-m/2,u=F[f]+D[f]-(r?
0:y[f]),w=u-l;m=l+m-("width"===g?A:B)-u;c=t-(v.precedance===a||n===v[c]?q===f?k:q===h?-k:-k/2:0)-("center"===q?k/2:0);"shift"===d?(c=(n===f?1:-1)*t,b[f]+=0<w?w:0<m?-m:0,b[f]=Math.max(-y[f]+D[f],l-c,Math.min(Math.max(-y[f]+D[f]+("width"===g?A:B),l+c),b[f],"center"===n?l-t:1E9))):(e*="flipinvert"===d?2:0,0<w&&(n!==f||0<m)?(b[f]-=c+e,E.invert(a,f)):0<m&&(n!==h||0<w)&&(b[f]-=("center"===n?-c:c)+e,E.invert(a,h)),b[f]<F[f]&&-b[f]>m&&(b[f]=l,E=v.clone()));return b[f]-l}var m=c.target,l=a.elements.tooltip,
v=c.my,p=c.at;a=c.adjust;var q=a.method.split(" "),u=q[0];q=q[1]||q[0];var t=c.viewport,x=c.container;c={left:0,top:0};if(!t.jquery||m[0]===z||m[0]===w.body||"none"===a.method)return c;var y=x.offset()||c;var r="static"===x.css("position");m=t[0]===z;l="fixed"===l.css("position");var A=m?t.width():t.outerWidth(!1);var B=m?t.height():t.outerHeight(!1);var F={left:l?0:t.scrollLeft(),top:l?0:t.scrollTop()};var D=!m&&t.offset()||c;if("shift"!==u||"shift"!==q)var E=v.clone();return c={left:"none"!==u?
h("x","y",u,a.x,"left","right","width",d,f):0,top:"none"!==q?h("y","x",q,a.y,"top","bottom","height",e,g):0,my:E}};u.polys={polygon:function(a,b){var c={width:0,height:0,position:{top:1E10,right:0,bottom:0,left:1E10},adjustable:!1},d,e=[],f=1,g=1;for(d=a.length;d--;){var k=[parseInt(a[--d],10),parseInt(a[d+1],10)];k[0]>c.position.right&&(c.position.right=k[0]);k[0]<c.position.left&&(c.position.left=k[0]);k[1]>c.position.bottom&&(c.position.bottom=k[1]);k[1]<c.position.top&&(c.position.top=k[1]);e.push(k)}var m=
c.width=Math.abs(c.position.right-c.position.left);var l=c.height=Math.abs(c.position.bottom-c.position.top);if("c"===b.abbrev())c.position={left:c.position.left+c.width/2,top:c.position.top+c.height/2};else{for(;0<m&&0<l&&0<f&&0<g;)for(m=Math.floor(m/2),l=Math.floor(l/2),f="left"===b.x?m:"right"===b.x?c.width-m:f+Math.floor(m/2),g="top"===b.y?l:"bottom"===b.y?c.height-l:g+Math.floor(l/2),d=e.length;d--&&!(2>e.length);)a=e[d][0]-c.position.left,k=e[d][1]-c.position.top,("left"===b.x&&a>=f||"right"===
b.x&&a<=f||"center"===b.x&&(a<f||a>c.width-f)||"top"===b.y&&k>=g||"bottom"===b.y&&k<=g||"center"===b.y&&(k<g||k>c.height-g))&&e.splice(d,1);c.position={left:e[0][0],top:e[0][1]}}return c},rect:function(a,b,c,d){return{width:Math.abs(c-a),height:Math.abs(d-b),position:{left:Math.min(a,c),top:Math.min(b,d)}}},_angles:{tc:1.5,tr:1.75,tl:1.25,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(a,b,c,d,e){var f=u.polys._angles[e.abbrev()];e=0===f?0:c*Math.cos(f*Math.PI);f=d*Math.sin(f*Math.PI);return{width:2*
c-Math.abs(e),height:2*d-Math.abs(f),position:{left:a+e,top:b+f},adjustable:!1}},circle:function(a,b,c,d){return u.polys.ellipse(a,b,c,c,d)}};u.svg=function(a,b,c){var d=b[0],h=e(d.ownerSVGElement),f=d.ownerDocument;b=(parseInt(b.css("stroke-width"),10)||0)/2;for(var g,k,m,l;!d.getBBox;)d=d.parentNode;if(!d.getBBox||!d.parentNode)return!1;switch(d.nodeName){case "ellipse":case "circle":b=u.polys.ellipse(d.cx.baseVal.value,d.cy.baseVal.value,(d.rx||d.r).baseVal.value+b,(d.ry||d.r).baseVal.value+b,
c);break;case "line":case "polygon":case "polyline":l=d.points||[{x:d.x1.baseVal.value,y:d.y1.baseVal.value},{x:d.x2.baseVal.value,y:d.y2.baseVal.value}];b=[];m=-1;for(g=l.numberOfItems||l.length;++m<g;)k=l.getItem?l.getItem(m):l[m],b.push.apply(b,[k.x,k.y]);b=u.polys.polygon(b,c);break;default:b=d.getBBox(),b={width:b.width,height:b.height,position:{left:b.x,top:b.y}}}c=b.position;h=h[0];h.createSVGPoint&&(d=d.getScreenCTM(),l=h.createSVGPoint(),l.x=c.left,l.y=c.top,h=l.matrixTransform(d),c.left=
h.x,c.top=h.y);f!==w&&"mouse"!==a.position.target&&(a=e((f.defaultView||f.parentWindow).frameElement).offset())&&(c.left+=a.left,c.top+=a.top);f=e(f);c.left+=f.scrollLeft();c.top+=f.scrollTop();return b};u.imagemap=function(a,b,c){b.jquery||(b=e(b));var d=(b.attr("shape")||"rect").toLowerCase().replace("poly","polygon");a=e('img[usemap="#'+b.parent("map").attr("name")+'"]');b=e.trim(b.attr("coords")).replace(/,$/,"").split(",");var h;if(!a.length)return!1;if("polygon"===d)d=u.polys.polygon(b,c);else if(u.polys[d]){var f=
-1;var g=b.length;for(h=[];++f<g;)h.push(parseInt(b[f],10));d=u.polys[d].apply(this,h.concat(c))}else return!1;c=a.offset();c.left+=Math.ceil((a.outerWidth(!1)-a.width())/2);c.top+=Math.ceil((a.outerHeight(!1)-a.height())/2);d.position.left+=c.left;d.position.top+=c.top;return d};e.extend(da.prototype,{_scroll:function(){var a=this.qtip.elements.overlay;a&&(a[0].style.top=e(z).scrollTop()+"px")},init:function(a){var b=a.tooltip;1>e("select, object").length&&(this.bgiframe=a.elements.bgiframe=e('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>').appendTo(b),
a._bind(b,"tooltipmove",this.adjustBGIFrame,this._ns,this));this.redrawContainer=e("<div/>",{id:"qtip-rcontainer"}).appendTo(w.body);a.elements.overlay&&a.elements.overlay.addClass("qtipmodal-ie6fix")&&(a._bind(z,["scroll","resize"],this._scroll,this._ns,this),a._bind(b,["tooltipshow"],this._scroll,this._ns,this));this.redraw()},adjustBGIFrame:function(){var a=this.qtip.tooltip,b={height:a.outerHeight(!1),width:a.outerWidth(!1)},c=this.qtip.plugins.tip,d=this.qtip.elements.tip;a=parseInt(a.css("borderLeftWidth"),
10)||0;a={left:-a,top:-a};c&&d&&(c="x"===c.corner.precedance?["width","left"]:["height","top"],a[c[1]]-=d[c[0]]());this.bgiframe.css(a).css(b)},redraw:function(){if(1>this.qtip.rendered||this.drawing)return this;var a=this.qtip.tooltip,b=this.qtip.options.style,c=this.qtip.options.position.container;this.qtip.drawing=1;b.height&&a.css("height",b.height);if(b.width)a.css("width",b.width);else{a.css("width","").appendTo(this.redrawContainer);var d=a.width();1>d%2&&(d+=1);var e=a.css("maxWidth")||"";
var f=a.css("minWidth")||"";b=-1<(e+f).indexOf("%")?c.width()/100:0;e=(-1<e.indexOf("%")?b:1*parseInt(e,10))||d;f=(-1<f.indexOf("%")?b:1*parseInt(f,10))||0;d=e+f?Math.min(Math.max(d,f),e):d;a.css("width",Math.round(d)).appendTo(c)}this.drawing=0;return this},destroy:function(){this.bgiframe&&this.bgiframe.remove();this.qtip._unbind([z,this.qtip.tooltip],this._ns)}});(u.ie6=function(a){return 6===F?new da(a):!1}).initialize="render";W.ie6={"^content|style$":function(){this.redraw()}}})})(window,document);
;

// ***************************
// js.compressed/qtip.js
// ***************************
vBulletin.precache(["no_preview_text_available","working_ellipsis"],["threadpreview"]);
vBulletin.qtip=function(b){function d(a,c,d){var g=["left","right"];vBulletin.isRtl()&&g.reverse();c={style:{classes:"qtip-shadow qtip-rounded "+c},position:{my:"top "+g[0],at:"bottom "+g[1],viewport:b(window)}};b.extend(c,d);a.qtip(c)}function h(a){d(b(".js-tooltip[title]",a))}(function(){function a(a,c){var e=c.elements.tooltip;window.setTimeout(function(){var a=parseInt(e.css("left"),10),c=b(window).scrollLeft();if(a<c)e.css("left",c+1);else{var f=e.outerWidth(),d=b(window).width();f=a+f;c+=d;
f>c&&e.css("left",a-(f-c)-1)}},0)}var c=b.fn.qtip;b.fn.qtip=function(){"object"==typeof arguments[0]&&("undefined"==typeof arguments[0].events&&(arguments[0].events={}),arguments[0].events.move="function"==typeof arguments[0].events.move?vBulletin.ajaxtools.runBeforeCallback(arguments[0].events.move,a):a);return c.apply(this,arguments)}})();h(b(document));b(document).on("vb-instrument",function(a){h(b(a.target))});(0<b(".channel-content-widget").length&&b(".channel-content-widget").eq(0).attr("data-canviewtopiccontent")||
0<b(".search-results-widget").length)&&b(document).offon("mouseover",".topic-list-container .topic-title, .conversation-list .post-title, .conversation-list .b-post__title",function(){if(0<vBulletin.options.get("threadpreview")){var a=b(this);if("1"!=a.data("vb-qtip-preview-initialized")){a.data("vb-qtip-preview-initialized","1");var c=parseInt(a.closest(".topic-item").attr("data-node-id")||a.closest(".js-post").attr("data-node-id"));vBulletin.isRtl();d(a,"qtip-topicpreview",{content:{text:function(a,
d){var e=function(a){var b=a?a:vBulletin.phrase.get("no_preview_text_available");d.set("content.text",b);return a};return c?(vBulletin.AJAX({call:"/ajax/fetch-node-preview",data:{nodeid:c},success:function(a){e(b.trim(a))},api_error:function(){e()},error:function(a,b,c){e(b+": "+c)}}),vBulletin.phrase.get("working_ellipsis")):e()}},show:{delay:500},hide:{event:"mouseleave click"}});a.trigger("mouseover")}}else b(document).off("mouseover",".topic-list-container .topic-title, .conversation-list .post-title, .conversation-list .b-post__title")});
return{apply:d}}(jQuery);
;

// ***************************
// js.compressed/jquery/jquery.jcarousel.custom.min.js
// ***************************
/*
 jCarousel - Riding carousels with jQuery
   http://sorgalla.com/jcarousel/

 Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

 Built on top of the jQuery library
   http://jquery.com

 Inspired by the "Carousel Component" by Bill Scott
   http://billwscott.com/carousel/

   Modified for vBulletin:
   - added destroy method
   - changed reset method by adding a flag to call setup method
   - added check for undefined instance in the main jcarousel function
*/
(function(g){var u={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",
buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},q=!1;g(window).on("load.jcarousel",function(){q=!0});g.jcarousel=function(a,b){this.options=g.extend({},u,b||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;b&&void 0!==b.rtl||(this.options.rtl="rtl"==(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase());this.wh=this.options.vertical?"height":"width";this.lt=this.options.vertical?
"top":this.options.rtl?"right":"left";for(var c="",e=a.className.split(" "),n=0;n<e.length;n++)if(-1!=e[n].indexOf("jcarousel-skin")){g(a).removeClass(e[n]);c=e[n];break}"UL"==a.nodeName.toUpperCase()||"OL"==a.nodeName.toUpperCase()?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));0===this.clip.length&&(this.clip=
this.list.wrap("<div></div>").parent());0===this.container.length&&(this.container=this.clip.wrap("<div></div>").parent());""!==c&&-1==this.container.parent()[0].className.indexOf("jcarousel-skin")&&this.container.wrap('<div class=" '+c+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);0===this.buttonPrev.length&&null!==this.options.buttonPrevHTML&&(this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container));this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext=
g(".jcarousel-next",this.container);0===this.buttonNext.length&&null!==this.options.buttonNextHTML&&(this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container));this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"});
!this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var l=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null;a=this.list.children("li");var d=this;if(0<a.length){var h=0,k=this.options.offset;a.each(function(){d.format(this,k++);h+=d.dimension(this,l)});this.list.css(this.wh,h+100+"px");b&&void 0!==b.size||(this.options.size=a.length)}this.container.css("display","block");this.buttonNext.css("display","block");
this.buttonPrev.css("display","block");this.funcNext=function(){d.next();return!1};this.funcPrev=function(){d.prev();return!1};this.funcResize=function(){d.resizeTimer&&clearTimeout(d.resizeTimer);d.resizeTimer=setTimeout(function(){d.reload()},100)};null!==this.options.initCallback&&this.options.initCallback(this,"init");!q&&f.isSafari()?(this.buttons(!1,!1),g(window).on("load.jcarousel",function(){d.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.10"};f.fn.extend=f.extend=
g.extend;f.fn.extend({setup:function(){this.prevLast=this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).off("resize.jcarousel",this.funcResize).on("resize.jcarousel",this.funcResize);null!==this.options.setupCallback&&this.options.setupCallback(this)}},reset:function(a){this.list.empty();
this.list.css(this.lt,"0px");this.list.css(this.wh,"10px");null!==this.options.initCallback&&this.options.initCallback(this,"reset");a&&this.setup()},reload:function(){null!==this.tail&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;null!==this.options.reloadCallback&&this.options.reloadCallback(this);if(null!==this.options.visible){var a=this,b=Math.ceil(this.clipping()/this.options.visible),c=0,e=0;this.list.children("li").each(function(f){c+=
a.dimension(this,b);f+1<a.first&&(e=c)});this.list.css(this.wh,c+"px");this.list.css(this.lt,-e+"px")}this.scroll(this.first,!1)},canmove(){return!(this.locked||this.animating)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){void 0!==a&&(this.options.size=a,this.locked||this.buttons());return this.options.size},has:function(a,b){void 0!==b&&b||(b=a);null!==this.options.size&&b>this.options.size&&(b=this.options.size);for(;a<=b;a++){var c=
this.get(a);if(!c.length||c.hasClass("jcarousel-item-placeholder"))return!1}return!0},get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,b){var c=this.get(a),e=0,n=g(b);if(0===c.length){var l=f.intval(a);for(c=this.create(a);;){var d=this.get(--l);if(0>=l||d.length){0>=l?this.list.prepend(c):d.after(c);break}}}else e=this.dimension(c);"LI"==n.get(0).nodeName.toUpperCase()?(c.replaceWith(n),c=n):c.empty().append(b);this.format(c.removeClass(this.className("jcarousel-item-placeholder")),
a);b=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null;e=this.dimension(c,b)-e;0<a&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-e+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+e+"px");return c},remove:function(a){var b=this.get(a);if(b.length&&!(a>=this.first&&a<=this.last)){var c=this.dimension(b);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+c+"px");b.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-
c+"px")}},next:function(){null===this.tail||this.inTail?this.scroll("both"!=this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||this.last!=this.options.size?this.first+this.options.scroll:1):this.scrollTail(!1)},prev:function(){null!==this.tail&&this.inTail?this.scrollTail(!0):this.scroll("both"!=this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||1!=this.first?this.first-this.options.scroll:this.options.size)},scrollTail:function(a){if(!this.locked&&!this.animating&&
this.tail){this.pauseAuto();var b=f.intval(this.list.css(this.lt));b=a?b+this.tail:b-this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(b)}},scroll:function(a,b){this.locked||this.animating||(this.pauseAuto(),this.animate(this.pos(a),b))},pos:function(a,b){var c=f.intval(this.list[0].style[this.lt]);if(this.locked||this.animating)return c;"circular"!=this.options.wrap&&(a=1>a?1:this.options.size&&a>this.options.size?this.options.size:a);for(var e=this.first>a,
g="circular"!=this.options.wrap&&1>=this.first?1:this.first,l=e?this.get(g):this.get(this.last),d=e?g:g-1,h,k=0,m,p;e?--d>=a:++d<a;)h=this.get(d),m=!h.length,0===h.length&&(h=this.create(d).addClass(this.className("jcarousel-item-placeholder")),l[e?"before":"after"](h),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=d||d>this.options.size)&&(l=this.get(this.index(d)),l.length&&(h=this.add(d,l.clone(!0))))),l=h,p=this.dimension(h),m&&(k+=p),null!==this.first&&("circular"==
this.options.wrap||1<=d&&(null===this.options.size||d<=this.options.size))&&(c=e?c+p:c-p);g=this.clipping();var q=[],t=0,r=0;l=this.get(a-1);for(d=a;++t;){h=this.get(d);m=!h.length;if(0===h.length){h=this.create(d).addClass(this.className("jcarousel-item-placeholder"));if(0===l.length)this.list.prepend(h);else l[e?"before":"after"](h);null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=d||d>this.options.size)&&(l=this.get(this.index(d)),l.length&&(h=this.add(d,l.clone(!0))))}l=
h;p=this.dimension(h);if(0===p)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");"circular"!=this.options.wrap&&null!==this.options.size&&d>this.options.size?q.push(h):m&&(k+=p);r+=p;if(r>=g)break;d++}for(h=0;h<q.length;h++)q[h].remove();0<k&&(this.list.css(this.wh,this.dimension(this.list)+k+"px"),e&&(c-=k,this.list.css(this.lt,f.intval(this.list.css(this.lt))-k+"px")));k=a+t-1;"circular"!=this.options.wrap&&this.options.size&&k>this.options.size&&
(k=this.options.size);if(d>k)for(t=0,d=k,r=0;++t;){h=this.get(d--);if(!h.length)break;r+=this.dimension(h);if(r>=g)break}d=k-t+1;"circular"!=this.options.wrap&&1>d&&(d=1);this.inTail&&e&&(c+=this.tail,this.inTail=!1);this.tail=null;"circular"!=this.options.wrap&&k==this.options.size&&1<=k-t+1&&(e=f.intval(this.get(k).css(this.options.vertical?"marginBottom":"marginRight")),r-e>g&&(this.tail=r-g-e));b&&a===this.options.size&&this.tail&&(c-=this.tail,this.inTail=!0);for(;a-- >d;)c+=this.dimension(this.get(a));
this.prevFirst=this.first;this.prevLast=this.last;this.first=d;this.last=k;return c},animate:function(a,b){if(!this.locked&&!this.animating){this.animating=!0;var c=this,e=function(){c.animating=!1;0===a&&c.list.css(c.lt,0);!c.autoStopped&&("circular"==c.options.wrap||"both"==c.options.wrap||"last"==c.options.wrap||null===c.options.size||c.last<c.options.size||c.last==c.options.size&&null!==c.tail&&!c.inTail)&&c.startAuto();c.buttons();c.notify("onAfterAnimation");if("circular"==c.options.wrap&&null!==
c.options.size)for(var b=c.prevFirst;b<=c.prevLast;b++)null===b||b>=c.first&&b<=c.last||!(1>b||b>c.options.size)||c.remove(b)};this.notify("onBeforeAnimation");this.options.animation&&!1!==b?(b=this.options.vertical?{top:a}:this.options.rtl?{right:a}:{left:a},e={duration:this.options.animation,easing:this.options.easing,complete:e},g.isFunction(this.options.animationStepCallback)&&(e.step=this.options.animationStepCallback),this.list.animate(b,e)):(this.list.css(this.lt,a+"px"),e())}},startAuto:function(a){void 0!==
a&&(this.options.auto=a);if(0===this.options.auto)return this.stopAuto();if(null===this.timer){this.autoStopped=!1;var b=this;this.timer=window.setTimeout(function(){b.next()},1E3*this.options.auto)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){null!==this.timer&&(window.clearTimeout(this.timer),this.timer=null)},buttons:function(a,b){null==a&&(a=!this.locked&&0!==this.options.size&&(this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||this.last<
this.options.size),!(this.locked||this.options.wrap&&"first"!=this.options.wrap)&&null!==this.options.size&&this.last>=this.options.size&&(a=null!==this.tail&&!this.inTail));null==b&&(b=!this.locked&&0!==this.options.size&&(this.options.wrap&&"last"!=this.options.wrap||1<this.first),this.locked||this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||1!=this.first||(b=null!==this.tail&&this.inTail));var c=this;if(0<this.buttonNext.length){this.buttonNext.off(this.options.buttonNextEvent+
".jcarousel",this.funcNext);if(a)this.buttonNext.on(this.options.buttonNextEvent+".jcarousel",this.funcNext);this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0);null!==this.options.buttonNextCallback&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){c.options.buttonNextCallback(c,this,a)}).data("jcarouselstate",a)}else null!==this.options.buttonNextCallback&&this.buttonNextState!=a&&this.options.buttonNextCallback(c,
null,a);if(0<this.buttonPrev.length){this.buttonPrev.off(this.options.buttonPrevEvent+".jcarousel",this.funcPrev);if(b)this.buttonPrev.on(this.options.buttonPrevEvent+".jcarousel",this.funcPrev);this.buttonPrev[b?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",b?!1:!0);null!==this.options.buttonPrevCallback&&this.buttonPrev.data("jcarouselstate")!=b&&this.buttonPrev.each(function(){c.options.buttonPrevCallback(c,this,b)}).data("jcarouselstate",b)}else null!==this.options.buttonPrevCallback&&
this.buttonPrevState!=b&&this.options.buttonPrevCallback(c,null,b);this.buttonNextState=a;this.buttonPrevState=b},notify:function(a){var b=null===this.prevFirst?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,b);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,b,this.first),this.callback("itemFirstOutCallback",a,b,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,b,this.last),this.callback("itemLastOutCallback",a,
b,this.prevLast));this.callback("itemVisibleInCallback",a,b,this.first,this.last,this.prevFirst,this.prevLast);this.callback("itemVisibleOutCallback",a,b,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,b,c,e,f,l,d){if(null!=this.options[a]&&("object"==typeof this.options[a]||"onAfterAnimation"==b)){var h="object"==typeof this.options[a]?this.options[a][b]:this.options[a];if(g.isFunction(h)){var k=this;if(void 0===e)h(k,c,b);else if(void 0===f)this.get(e).each(function(){h(k,
this,e,c,b)});else{a=function(a){k.get(a).each(function(){h(k,this,a,c,b)})};for(var m=e;m<=f;m++)null===m||m>=l&&m<=d||a(m)}}}},create:function(a){return this.format("<li></li>",a)},destroy:function(){this.reset();g(window).off(".jcarousel");this.list.removeData("jcarousel");this.container.removeData("jcarousel");this.buttonNext.removeData("jcarouselstate").remove();this.buttonPrev.removeData("jcarouselstate").remove();return this},format:function(a,b){a=g(a);for(var c=a.get(0).className.split(" "),
e=0;e<c.length;e++)-1!=c[e].indexOf("jcarousel-")&&a.removeClass(c[e]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+b)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",b);return a},className:function(a){return a+" "+a+(this.options.vertical?"-vertical":"-horizontal")},dimension:function(a,b){a=g(a);if(null==b)return this.options.vertical?a.innerHeight()+f.intval(a.css("margin-top"))+f.intval(a.css("margin-bottom"))+
f.intval(a.css("border-top-width"))+f.intval(a.css("border-bottom-width"))||f.intval(this.options.itemFallbackDimension):a.innerWidth()+f.intval(a.css("margin-left"))+f.intval(a.css("margin-right"))+f.intval(a.css("border-left-width"))+f.intval(a.css("border-right-width"))||f.intval(this.options.itemFallbackDimension);b=this.options.vertical?b-f.intval(a.css("marginTop"))-f.intval(a.css("marginBottom")):b-f.intval(a.css("marginLeft"))-f.intval(a.css("marginRight"));g(a).css(this.wh,b+"px");return this.dimension(a)},
clipping:function(){return this.options.vertical?this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth")):this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))-f.intval(this.clip.css("borderRightWidth"))},index:function(a,b){null==b&&(b=this.options.size);return Math.round(((a-1)/b-Math.floor((a-1)/b))*b)+1}});f.extend({defaults:function(a){return g.extend(u,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){q=
!0},isSafari:function(){var a=navigator.userAgent.toLowerCase();return"webkit"===((/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||[])[1]||"")}});g.fn.jcarousel=function(a){if("string"==typeof a){var b=g(this).data("jcarousel"),c=Array.prototype.slice.call(arguments,1);return"undefined"!=typeof b?b[a].apply(b,c):this}return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
;

// ***************************
// js.compressed/jquery/history.js
// ***************************
/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 *
 * ============ NOTE: This version contains patch from https://github.com/christanto/history.js/commit/b78af84fc2b6b5da573e5ee0bd72f4213e36bb18 ============
 */

(function(window,undefined){
	"use strict";

	// --------------------------------------------------------------------------
	// Initialise

	// Localise Globals
	var
		console = window.console||undefined, // Prevent a JSLint complain
		document = window.document, // Make sure we are using the correct document
		navigator = window.navigator, // Make sure we are using the correct navigator
		amplify = window.amplify||false, // Amplify.js
		setTimeout = window.setTimeout,
		clearTimeout = window.clearTimeout,
		setInterval = window.setInterval,
		clearInterval = window.clearInterval,
		JSON = window.JSON,
		History = window.History = window.History||{}, // Public History Object
		history = window.history; // Old History Object

	// MooTools Compatibility
	JSON.stringify = JSON.stringify||JSON.encode;
	JSON.parse = JSON.parse||JSON.decode;

	// Check Existence
	if ( typeof History.init !== 'undefined' ) {
		throw new Error('History.js Core has already been loaded...');
	}

	// Initialise History
	History.init = function(){
		// Check Load Status of Adapter
		if ( typeof History.Adapter === 'undefined' ) {
			return false;
		}

		// Check Load Status of Core
		if ( typeof History.initCore !== 'undefined' ) {
			History.initCore();
		}

		// Check Load Status of HTML4 Support
		if ( typeof History.initHtml4 !== 'undefined' ) {
			History.initHtml4();
		}

		// Return true
		return true;
	};

	// --------------------------------------------------------------------------
	// Initialise Core

	// Initialise Core
	History.initCore = function(){
		// Initialise
		if ( typeof History.initCore.initialized !== 'undefined' ) {
			// Already Loaded
			return false;
		}
		else {
			History.initCore.initialized = true;
		}

		// ----------------------------------------------------------------------
		// Options

		/**
		 * History.options
		 * Configurable options
		 */
		History.options = History.options||{};

		/**
		 * History.options.hashChangeInterval
		 * How long should the interval be before hashchange checks
		 */
		History.options.hashChangeInterval = History.options.hashChangeInterval || 100;

		/**
		 * History.options.safariPollInterval
		 * How long should the interval be before safari poll checks
		 */
		History.options.safariPollInterval = History.options.safariPollInterval || 500;

		/**
		 * History.options.doubleCheckInterval
		 * How long should the interval be before we perform a double check
		 */
		History.options.doubleCheckInterval = History.options.doubleCheckInterval || 500;

		/**
		 * History.options.storeInterval
		 * How long should we wait between store calls
		 */
		History.options.storeInterval = History.options.storeInterval || 1000;

		/**
		 * History.options.busyDelay
		 * How long should we wait between busy events
		 */
		History.options.busyDelay = History.options.busyDelay || 250;

		/**
		 * History.options.debug
		 * If true will enable debug messages to be logged
		 */
		History.options.debug = History.options.debug || false;

		/**
		 * History.options.initialTitle
		 * What is the title of the initial state
		 */
		History.options.initialTitle = History.options.initialTitle || document.title;

		/**
		* History.options.transformHash
		* If true will transform the HTML4 hash to HTML5 equivalence. Set to false if you want the hash to be just a plain string, no meaning whatsoever.
		*/
		History.options.transformHash = History.options.transformHash || true;

		// ----------------------------------------------------------------------
		// Interval record

		/**
		 * History.intervalList
		 * List of intervals set, to be cleared when document is unloaded.
		 */
		History.intervalList = [];

		/**
		 * History.clearAllIntervals
		 * Clears all setInterval instances.
		 */
		History.clearAllIntervals = function(){
			var i, il = History.intervalList;
			if (typeof il !== "undefined" && il !== null) {
				for (i = 0; i < il.length; i++) {
					clearInterval(il[i]);
				}
				History.intervalList = null;
			}
		};
		History.Adapter.bind(window,"beforeunload",History.clearAllIntervals);
		History.Adapter.bind(window,"unload",History.clearAllIntervals);


		// ----------------------------------------------------------------------
		// Debug

		/**
		 * History.debug(message,...)
		 * Logs the passed arguments if debug enabled
		 */
		History.debug = function(){
			if ( (History.options.debug||false) ) {
				History.log.apply(History,arguments);
			}
		};

		/**
		 * History.log(message,...)
		 * Logs the passed arguments
		 */
		History.log = function(){
			// Prepare
			var
				consoleExists = !(typeof console === 'undefined' || typeof console.log === 'undefined' || typeof console.log.apply === 'undefined'),
				textarea = document.getElementById('log'),
				message,
				i,n
				;

			// Write to Console
			if ( consoleExists ) {
				var args = Array.prototype.slice.call(arguments);
				message = args.shift();
				if ( typeof console.debug !== 'undefined' ) {
					console.debug.apply(console,[message,args]);
				}
				else {
					console.log.apply(console,[message,args]);
				}
			}
			else {
				message = ("\n"+arguments[0]+"\n");
			}

			// Write to log
			for ( i=1,n=arguments.length; i<n; ++i ) {
				var arg = arguments[i];
				if ( typeof arg === 'object' && typeof JSON !== 'undefined' ) {
					try {
						arg = JSON.stringify(arg);
					}
					catch ( Exception ) {
						// Recursive Object
					}
				}
				message += "\n"+arg+"\n";
			}

			// Textarea
			if ( textarea ) {
				textarea.value += message+"\n-----\n";
				textarea.scrollTop = textarea.scrollHeight - textarea.clientHeight;
			}
			// No Textarea, No Console
			else if ( !consoleExists ) {
				alert(message);
			}

			// Return true
			return true;
		};

		// ----------------------------------------------------------------------
		// Emulated Status

		/**
		 * History.getInternetExplorerMajorVersion()
		 * Get's the major version of Internet Explorer
		 * @return {integer}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 * @author James Padolsey <https://gist.github.com/527683>
		 */
		History.getInternetExplorerMajorVersion = function(){
			var result = History.getInternetExplorerMajorVersion.cached =
					(typeof History.getInternetExplorerMajorVersion.cached !== 'undefined')
				?	History.getInternetExplorerMajorVersion.cached
				:	(function(){
						var v = 3,
								div = document.createElement('div'),
								all = div.getElementsByTagName('i');
						while ( (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->') && all[0] ) {}
						return (v > 4) ? v : false;
					})()
				;
			return result;
		};

		/**
		 * History.isInternetExplorer()
		 * Are we using Internet Explorer?
		 * @return {boolean}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 */
		History.isInternetExplorer = function(){
			var result =
				History.isInternetExplorer.cached =
				(typeof History.isInternetExplorer.cached !== 'undefined')
					?	History.isInternetExplorer.cached
					:	Boolean(History.getInternetExplorerMajorVersion())
				;
			return result;
		};

		/**
		 * History.emulated
		 * Which features require emulating?
		 */
		History.emulated = {
			pushState: !Boolean(
				window.history && window.history.pushState && window.history.replaceState
				&& !(
					(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent) /* disable for versions of iOS before version 4.3 (8F190) */
					|| (/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent) /* disable for the mercury iOS browser, or at least older versions of the webkit engine */
				)
			),
			hashChange: Boolean(
				!(('onhashchange' in window) || ('onhashchange' in document))
				||
				(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8)
			)
		};

		/**
		 * History.enabled
		 * Is History enabled?
		 */
		History.enabled = !History.emulated.pushState;

		/**
		 * History.bugs
		 * Which bugs are present
		 */
		History.bugs = {
			/**
			 * Safari 5 and Safari iOS 4 fail to return to the correct state once a hash is replaced by a `replaceState` call
			 * https://bugs.webkit.org/show_bug.cgi?id=56249
			 */
			setHash: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),

			/**
			 * Safari 5 and Safari iOS 4 sometimes fail to apply the state change under busy conditions
			 * https://bugs.webkit.org/show_bug.cgi?id=42940
			 */
			safariPoll: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),

			/**
			 * MSIE 6 and 7 sometimes do not apply a hash even it was told to (requiring a second call to the apply function)
			 */
			ieDoubleCheck: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8),

			/**
			 * MSIE 6 requires the entire hash to be encoded for the hashes to trigger the onHashChange event
			 */
			hashEscape: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 7)
		};

		/**
		 * History.isEmptyObject(obj)
		 * Checks to see if the Object is Empty
		 * @param {Object} obj
		 * @return {boolean}
		 */
		History.isEmptyObject = function(obj) {
			for ( var name in obj ) {
				return false;
			}
			return true;
		};

		/**
		 * History.cloneObject(obj)
		 * Clones a object
		 * @param {Object} obj
		 * @return {Object}
		 */
		History.cloneObject = function(obj) {
			var hash,newObj;
			if ( obj ) {
				hash = JSON.stringify(obj);
				newObj = JSON.parse(hash);
			}
			else {
				newObj = {};
			}
			return newObj;
		};

		// ----------------------------------------------------------------------
		// URL Helpers

		/**
		 * History.getRootUrl()
		 * Turns "http://mysite.com/dir/page.html?asd" into "http://mysite.com"
		 * @return {String} rootUrl
		 */
		History.getRootUrl = function(){
			// Create
			var rootUrl = document.location.protocol+'//'+(document.location.hostname||document.location.host);
			if ( document.location.port||false ) {
				rootUrl += ':'+document.location.port;
			}
			rootUrl += '/';

			// Return
			return rootUrl;
		};

		/**
		 * History.getBaseHref()
		 * Fetches the `href` attribute of the `<base href="...">` element if it exists
		 * @return {String} baseHref
		 */
		History.getBaseHref = function(){
			// Create
			var
				baseElements = document.getElementsByTagName('base'),
				baseElement = null,
				baseHref = '';

			// Test for Base Element
			if ( baseElements.length === 1 ) {
				// Prepare for Base Element
				baseElement = baseElements[0];
				baseHref = baseElement.href.replace(/[^\/]+$/,'');
			}

			// Adjust trailing slash
			baseHref = baseHref.replace(/\/+$/,'');
			if ( baseHref ) baseHref += '/';

			// Return
			return baseHref;
		};

		/**
		 * History.getBaseUrl()
		 * Fetches the baseHref or basePageUrl or rootUrl (whichever one exists first)
		 * @return {String} baseUrl
		 */
		History.getBaseUrl = function(){
			// Create
			var baseUrl = History.getBaseHref()||History.getBasePageUrl()||History.getRootUrl();

			// Return
			return baseUrl;
		};

		/**
		 * History.getPageUrl()
		 * Fetches the URL of the current page
		 * @return {String} pageUrl
		 */
		History.getPageUrl = function(){
			// Fetch
			var
				State = History.getState(false,false),
				stateUrl = (State||{}).url||document.location.href;

			// Create
			var pageUrl = stateUrl.replace(/\/+$/,'').replace(/[^\/]+$/,function(part,index,string){
				return (/\./).test(part) ? part : part+'/';
			});

			// Return
			return pageUrl;
		};

		/**
		 * History.getBasePageUrl()
		 * Fetches the Url of the directory of the current page
		 * @return {String} basePageUrl
		 */
		History.getBasePageUrl = function(){
			// Create
			var basePageUrl = document.location.href.replace(/[#\?].*/,'').replace(/[^\/]+$/,function(part,index,string){
				return (/[^\/]$/).test(part) ? '' : part;
			}).replace(/\/+$/,'')+'/';

			// Return
			return basePageUrl;
		};

		/**
		 * History.getFullUrl(url)
		 * Ensures that we have an absolute URL and not a relative URL
		 * @param {string} url
		 * @param {Boolean} allowBaseHref
		 * @return {string} fullUrl
		 */
		History.getFullUrl = function(url,allowBaseHref){
			// Prepare
			var fullUrl = url, firstChar = url.substring(0,1);
			allowBaseHref = (typeof allowBaseHref === 'undefined') ? true : allowBaseHref;

			// Check
			if ( /[a-z]+\:\/\//.test(url) ) {
				// Full URL
			}
			else if ( firstChar === '/' ) {
				// Root URL
				fullUrl = History.getRootUrl()+url.replace(/^\/+/,'');
			}
			else if ( firstChar === '#' ) {
				// Anchor URL
				fullUrl = History.getPageUrl().replace(/#.*/,'')+url;
			}
			else if ( firstChar === '?' ) {
				// Query URL
				fullUrl = History.getPageUrl().replace(/[\?#].*/,'')+url;
			}
			else {
				// Relative URL
				if ( allowBaseHref ) {
					fullUrl = History.getBaseUrl()+url.replace(/^(\.\/)+/,'');
				} else {
					fullUrl = History.getBasePageUrl()+url.replace(/^(\.\/)+/,'');
				}
				// We have an if condition above as we do not want hashes
				// which are relative to the baseHref in our URLs
				// as if the baseHref changes, then all our bookmarks
				// would now point to different locations
				// whereas the basePageUrl will always stay the same
			}

			// Return
			return fullUrl.replace(/\#$/,'');
		};

		/**
		 * History.getShortUrl(url)
		 * Ensures that we have a relative URL and not a absolute URL
		 * @param {string} url
		 * @return {string} url
		 */
		History.getShortUrl = function(url){
			// Prepare
			var shortUrl = url, baseUrl = History.getBaseUrl(), rootUrl = History.getRootUrl();

			// Trim baseUrl
			if ( History.emulated.pushState ) {
				// We are in a if statement as when pushState is not emulated
				// The actual url these short urls are relative to can change
				// So within the same session, we the url may end up somewhere different
				shortUrl = shortUrl.replace(baseUrl,'');
			}

			// Trim rootUrl
			shortUrl = shortUrl.replace(rootUrl,'/');

			// Ensure we can still detect it as a state
			if ( History.isTraditionalAnchor(shortUrl) ) {
				shortUrl = './'+shortUrl;
			}

			// Clean It
			shortUrl = shortUrl.replace(/^(\.\/)+/g,'./').replace(/\#$/,'');

			// Return
			return shortUrl;
		};

		// ----------------------------------------------------------------------
		// State Storage

		/**
		 * History.store
		 * The store for all session specific data
		 */
		History.store = amplify ? (amplify.store('History.store')||{}) : {};
		History.store.idToState = History.store.idToState||{};
		History.store.urlToId = History.store.urlToId||{};
		History.store.stateToId = History.store.stateToId||{};

		/**
		 * History.idToState
		 * 1-1: State ID to State Object
		 */
		History.idToState = History.idToState||{};

		/**
		 * History.stateToId
		 * 1-1: State String to State ID
		 */
		History.stateToId = History.stateToId||{};

		/**
		 * History.urlToId
		 * 1-1: State URL to State ID
		 */
		History.urlToId = History.urlToId||{};

		/**
		 * History.storedStates
		 * Store the states in an array
		 */
		History.storedStates = History.storedStates||[];

		/**
		 * History.savedStates
		 * Saved the states in an array
		 */
		History.savedStates = History.savedStates||[];

		/**
		 * History.getState()
		 * Get an object containing the data, title and url of the current state
		 * @param {Boolean} friendly
		 * @param {Boolean} create
		 * @return {Object} State
		 */
		History.getState = function(friendly,create){
			// Prepare
			if ( typeof friendly === 'undefined' ) { friendly = true; }
			if ( typeof create === 'undefined' ) { create = true; }

			// Fetch
			var State = History.getLastSavedState();

			// Create
			if ( !State && create ) {
				State = History.createStateObject();
			}

			// Adjust
			if ( friendly ) {
				State = History.cloneObject(State);
				State.url = State.cleanUrl||State.url;
			}

			// Return
			return State;
		};

		/**
		 * History.getIdByState(State)
		 * Gets a ID for a State
		 * @param {State} newState
		 * @return {String} id
		 */
		History.getIdByState = function(newState){

			// Fetch ID
			var id = History.extractId(newState.url);
			if ( !id ) {
				// Find ID via State String
				var str = History.getStateString(newState);
				if ( typeof History.stateToId[str] !== 'undefined' ) {
					id = History.stateToId[str];
				}
				else if ( typeof History.store.stateToId[str] !== 'undefined' ) {
					id = History.store.stateToId[str];
				}
				else {
					// Generate a new ID
					while ( true ) {
						id = String(Math.floor(Math.random()*1000));
						if ( typeof History.idToState[id] === 'undefined' && typeof History.store.idToState[id] === 'undefined' ) {
							break;
						}
					}

					// Apply the new State to the ID
					History.stateToId[str] = id;
					History.idToState[id] = newState;
				}
			}

			// Return ID
			return id;
		};

		/**
		 * History.normalizeState(State)
		 * Expands a State Object
		 * @param {object} State
		 * @return {object}
		 */
		History.normalizeState = function(oldState){
			// Prepare
			if ( !oldState || (typeof oldState !== 'object') ) {
				oldState = {};
			}

			// Check
			if ( typeof oldState.normalized !== 'undefined' ) {
				return oldState;
			}

			// Adjust
			if ( !oldState.data || (typeof oldState.data !== 'object') ) {
				oldState.data = {};
			}

			// ----------------------------------------------------------------------

			// Create
			var newState = {};
			newState.normalized = true;
			newState.title = oldState.title||'';
			newState.url = History.getFullUrl(History.unescapeString(oldState.url||document.location.href));
			newState.hash = History.getShortUrl(newState.url);
			newState.data = History.cloneObject(oldState.data);

			// Fetch ID
			newState.id = History.getIdByState(newState);

			// ----------------------------------------------------------------------

			// Clean the URL
			newState.cleanUrl = newState.url.replace(/\??\&_suid.*/,'');
			newState.url = newState.cleanUrl;

			// Check to see if we have more than just a url
			var dataNotEmpty = !History.isEmptyObject(newState.data);

			// Apply
			if ( newState.title || dataNotEmpty ) {
				// Add ID to Hash
				newState.hash = History.getShortUrl(newState.url).replace(/\??\&_suid.*/,'');
				if ( !/\?/.test(newState.hash) ) {
					newState.hash += '?';
				}
				newState.hash += '&_suid='+newState.id;
			}

			// Create the Hashed URL
			newState.hashedUrl = History.getFullUrl(newState.hash);

			// ----------------------------------------------------------------------

			// Update the URL if we have a duplicate
			if ( (History.emulated.pushState || History.bugs.safariPoll) && History.hasUrlDuplicate(newState) ) {
				newState.url = newState.hashedUrl;
			}

			// ----------------------------------------------------------------------

			// Return
			return newState;
		};

		/**
		 * History.createStateObject(data,title,url)
		 * Creates a object based on the data, title and url state params
		 * @param {object} data
		 * @param {string} title
		 * @param {string} url
		 * @return {object}
		 */
		History.createStateObject = function(data,title,url){
			// Hashify
			var State = {
				'data': data,
				'title': title,
				'url': url
			};

			// Expand the State
			State = History.normalizeState(State);

			// Return object
			return State;
		};

		/**
		 * History.getStateById(id)
		 * Get a state by it's UID
		 * @param {String} id
		 */
		History.getStateById = function(id){
			// Prepare
			id = String(id);

			// Retrieve
			var State = History.idToState[id] || History.store.idToState[id] || undefined;

			// Return State
			return State;
		};

		/**
		 * Get a State's String
		 * @param {State} passedState
		 */
		History.getStateString = function(passedState){
			// Prepare
			var State = History.normalizeState(passedState);

			// Clean
			var cleanedState = {
				data: State.data,
				title: passedState.title,
				url: passedState.url
			};

			// Fetch
			var str = JSON.stringify(cleanedState);

			// Return
			return str;
		};

		/**
		 * Get a State's ID
		 * @param {State} passedState
		 * @return {String} id
		 */
		History.getStateId = function(passedState){
			// Prepare
			var State = History.normalizeState(passedState);

			// Fetch
			var id = State.id;

			// Return
			return id;
		};

		/**
		 * History.getHashByState(State)
		 * Creates a Hash for the State Object
		 * @param {State} passedState
		 * @return {String} hash
		 */
		History.getHashByState = function(passedState){
			// Prepare
			var hash, State = History.normalizeState(passedState);

			// Fetch
			hash = State.hash;

			// Return
			return hash;
		};

		/**
		 * History.extractId(url_or_hash)
		 * Get a State ID by it's URL or Hash
		 * @param {string} url_or_hash
		 * @return {string} id
		 */
		History.extractId = function ( url_or_hash ) {
			// Prepare
			var id;

			// Extract
			var parts,url;
			parts = /(.*)\&_suid=([0-9]+)$/.exec(url_or_hash);
			url = parts ? (parts[1]||url_or_hash) : url_or_hash;
			id = parts ? String(parts[2]||'') : '';

			// Return
			return id||false;
		};

		/**
		 * History.isTraditionalAnchor
		 * Checks to see if the url is a traditional anchor or not
		 * @param {String} url_or_hash
		 * @return {Boolean}
		 */
		History.isTraditionalAnchor = function(url_or_hash){
			// Check
			var isTraditional = !(/[\/\?\.]/.test(url_or_hash));

			// Return
			return isTraditional;
		};

		/**
		 * History.extractState
		 * Get a State by it's URL or Hash
		 * @param {String} url_or_hash
		 * @return {State|null}
		 */
		History.extractState = function(url_or_hash,create){
			// Prepare
			var State = null;
			create = create||false;

			// Fetch SUID
			var id = History.extractId(url_or_hash);
			if ( id ) {
				State = History.getStateById(id);
			}

			// Fetch SUID returned no State
			if ( !State ) {
				// Fetch URL
				var url = History.getFullUrl(url_or_hash);

				// Check URL
				id = History.getIdByUrl(url)||false;
				if ( id ) {
					State = History.getStateById(id);
				}

				// Create State
				if ( !State && create && !History.isTraditionalAnchor(url_or_hash) ) {
					State = History.createStateObject(null,null,url);
				}
			}

			// Return
			return State;
		};

		/**
		 * History.getIdByUrl()
		 * Get a State ID by a State URL
		 */
		History.getIdByUrl = function(url){
			// Fetch
			var id = History.urlToId[url] || History.store.urlToId[url] || undefined;

			// Return
			return id;
		};

		/**
		 * History.getLastSavedState()
		 * Get an object containing the data, title and url of the current state
		 * @return {Object} State
		 */
		History.getLastSavedState = function(){
			return History.savedStates[History.savedStates.length-1]||undefined;
		};

		/**
		 * History.getLastStoredState()
		 * Get an object containing the data, title and url of the current state
		 * @return {Object} State
		 */
		History.getLastStoredState = function(){
			return History.storedStates[History.storedStates.length-1]||undefined;
		};

		/**
		 * History.hasUrlDuplicate
		 * Checks if a Url will have a url conflict
		 * @param {Object} newState
		 * @return {Boolean} hasDuplicate
		 */
		History.hasUrlDuplicate = function(newState) {
			// Prepare
			var hasDuplicate = false;

			// Fetch
			var oldState = History.extractState(newState.url);

			// Check
			hasDuplicate = oldState && oldState.id !== newState.id;

			// Return
			return hasDuplicate;
		};

		/**
		 * History.storeState
		 * Store a State
		 * @param {Object} newState
		 * @return {Object} newState
		 */
		History.storeState = function(newState){
			// Store the State
			History.urlToId[newState.url] = newState.id;

			// Push the State
			History.storedStates.push(History.cloneObject(newState));

			// Return newState
			return newState;
		};

		/**
		 * History.isLastSavedState(newState)
		 * Tests to see if the state is the last state
		 * @param {Object} newState
		 * @return {boolean} isLast
		 */
		History.isLastSavedState = function(newState){
			// Prepare
			var isLast = false;

			// Check
			if ( History.savedStates.length ) {
				var
					newId = newState.id,
					oldState = History.getLastSavedState(),
					oldId = oldState.id;

				// Check
				isLast = (newId === oldId);
			}

			// Return
			return isLast;
		};

		/**
		 * History.saveState
		 * Push a State
		 * @param {Object} newState
		 * @return {boolean} changed
		 */
		History.saveState = function(newState){
			// Check Hash
			if ( History.isLastSavedState(newState) ) {
				return false;
			}

			// Push the State
			History.savedStates.push(History.cloneObject(newState));

			// Return true
			return true;
		};

		/**
		 * History.getStateByIndex()
		 * Gets a state by the index
		 * @param {integer} index
		 * @return {Object}
		 */
		History.getStateByIndex = function(index){
			// Prepare
			var State = null;

			// Handle
			if ( typeof index === 'undefined' ) {
				// Get the last inserted
				State = History.savedStates[History.savedStates.length-1];
			}
			else if ( index < 0 ) {
				// Get from the end
				State = History.savedStates[History.savedStates.length+index];
			}
			else {
				// Get from the beginning
				State = History.savedStates[index];
			}

			// Return State
			return State;
		};

		// ----------------------------------------------------------------------
		// Hash Helpers

		/**
		 * History.getHash()
		 * Gets the current document hash
		 * @return {string}
		 */
		History.getHash = function(){
			var hash = History.unescapeHash(document.location.hash);
			return hash;
		};

		/**
		 * History.unescapeString()
		 * Unescape a string
		 * @param {String} str
		 * @return {string}
		 */
		History.unescapeString = function(str){
			// Prepare
			var result = str;

			// Unescape hash
			var tmp;
			while ( true ) {
				tmp = window.unescape(result);
				if ( tmp === result ) {
					break;
				}
				result = tmp;
			}

			// Return result
			return result;
		};

		/**
		 * History.unescapeHash()
		 * normalize and Unescape a Hash
		 * @param {String} hash
		 * @return {string}
		 */
		History.unescapeHash = function(hash){
			// Prepare
			var result = History.normalizeHash(hash);

			// Unescape hash
			result = History.unescapeString(result);

			// Return result
			return result;
		};

		/**
		 * History.normalizeHash()
		 * normalize a hash across browsers
		 * @return {string}
		 */
		History.normalizeHash = function(hash){
			var result = hash.replace(/[^#]*#/,'').replace(/#.*/, '');

			// Return result
			return result;
		};

		/**
		 * History.setHash(hash)
		 * Sets the document hash
		 * @param {string} hash
		 * @return {History}
		 */
		History.setHash = function(hash,queue){
			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.setHash: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.setHash,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Log
			//History.debug('History.setHash: called',hash);

			// Prepare
			var adjustedHash = History.escapeHash(hash);

			// Make Busy + Continue
			History.busy(true);

			// Check if hash is a state
			var State = History.extractState(hash,true);
			if ( State && !History.emulated.pushState ) {
				// Hash is a state so skip the setHash
				//History.debug('History.setHash: Hash is a state so skipping the hash set with a direct pushState call',arguments);

				// PushState
				History.pushState(State.data,State.title,State.url,false);
			}
			else if ( document.location.hash !== adjustedHash ) {
				// Hash is a proper hash, so apply it

				// Handle browser bugs
				if ( History.bugs.setHash ) {
					// Fix Safari Bug https://bugs.webkit.org/show_bug.cgi?id=56249

					// Fetch the base page
					var pageUrl = History.getPageUrl();

					// Safari hash apply
					History.pushState(null,null,pageUrl+'#'+adjustedHash,false);
				}
				else {
					// Normal hash apply
					document.location.hash = adjustedHash;
				}
			}

			// Chain
			return History;
		};

		/**
		 * History.escape()
		 * normalize and Escape a Hash
		 * @return {string}
		 */
		History.escapeHash = function(hash){
			var result = History.normalizeHash(hash);

			// Escape hash
			result = window.escape(result);

			// IE6 Escape Bug
			if ( !History.bugs.hashEscape ) {
				// Restore common parts
				result = result
					.replace(/\%21/g,'!')
					.replace(/\%26/g,'&')
					.replace(/\%3D/g,'=')
					.replace(/\%3F/g,'?');
			}

			// Return result
			return result;
		};

		/**
		 * History.getHashByUrl(url)
		 * Extracts the Hash from a URL
		 * @param {string} url
		 * @return {string} url
		 */
		History.getHashByUrl = function(url){
			// Extract the hash
			var hash = String(url)
				.replace(/([^#]*)#?([^#]*)#?(.*)/, '$2')
				;

			// Unescape hash
			hash = History.unescapeHash(hash);

			// Return hash
			return hash;
		};

		/**
		 * History.setTitle(title)
		 * Applies the title to the document
		 * @param {State} newState
		 * @return {Boolean}
		 */
		History.setTitle = function(newState){
			// Prepare
			var title = newState.title;

			// Initial
			if ( !title ) {
				var firstState = History.getStateByIndex(0);
				if ( firstState && firstState.url === newState.url ) {
					title = firstState.title||History.options.initialTitle;
				}
			}

			// Apply
			try {
				document.getElementsByTagName('title')[0].innerHTML = title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');
			}
			catch ( Exception ) { }
			document.title = title;

			// Chain
			return History;
		};

		// ----------------------------------------------------------------------
		// Queueing

		/**
		 * History.queues
		 * The list of queues to use
		 * First In, First Out
		 */
		History.queues = [];

		/**
		 * History.busy(value)
		 * @param {boolean} value [optional]
		 * @return {boolean} busy
		 */
		History.busy = function(value){
			// Apply
			if ( typeof value !== 'undefined' ) {
				//History.debug('History.busy: changing ['+(History.busy.flag||false)+'] to ['+(value||false)+']', History.queues.length);
				History.busy.flag = value;
			}
			// Default
			else if ( typeof History.busy.flag === 'undefined' ) {
				History.busy.flag = false;
			}

			// Queue
			if ( !History.busy.flag ) {
				// Execute the next item in the queue
				clearTimeout(History.busy.timeout);
				var fireNext = function(){
					if ( History.busy.flag ) return;
					for ( var i=History.queues.length-1; i >= 0; --i ) {
						var queue = History.queues[i];
						if ( queue.length === 0 ) continue;
						var item = queue.shift();
						History.fireQueueItem(item);
						History.busy.timeout = setTimeout(fireNext,History.options.busyDelay);
					}
				};
				History.busy.timeout = setTimeout(fireNext,History.options.busyDelay);
			}

			// Return
			return History.busy.flag;
		};

		/**
		 * History.fireQueueItem(item)
		 * Fire a Queue Item
		 * @param {Object} item
		 * @return {Mixed} result
		 */
		History.fireQueueItem = function(item){
			return item.callback.apply(item.scope||History,item.args||[]);
		};

		/**
		 * History.pushQueue(callback,args)
		 * Add an item to the queue
		 * @param {Object} item [scope,callback,args,queue]
		 */
		History.pushQueue = function(item){
			// Prepare the queue
			History.queues[item.queue||0] = History.queues[item.queue||0]||[];

			// Add to the queue
			History.queues[item.queue||0].push(item);

			// Chain
			return History;
		};

		/**
		 * History.queue (item,queue), (func,queue), (func), (item)
		 * Either firs the item now if not busy, or adds it to the queue
		 */
		History.queue = function(item,queue){
			// Prepare
			if ( typeof item === 'function' ) {
				item = {
					callback: item
				};
			}
			if ( typeof queue !== 'undefined' ) {
				item.queue = queue;
			}

			// Handle
			if ( History.busy() ) {
				History.pushQueue(item);
			} else {
				History.fireQueueItem(item);
			}

			// Chain
			return History;
		};

		/**
		 * History.clearQueue()
		 * Clears the Queue
		 */
		History.clearQueue = function(){
			History.busy.flag = false;
			History.queues = [];
			return History;
		};


		// ----------------------------------------------------------------------
		// IE Bug Fix

		/**
		 * History.stateChanged
		 * States whether or not the state has changed since the last double check was initialised
		 */
		History.stateChanged = false;

		/**
		 * History.doubleChecker
		 * Contains the timeout used for the double checks
		 */
		History.doubleChecker = false;

		/**
		 * History.doubleCheckComplete()
		 * Complete a double check
		 * @return {History}
		 */
		History.doubleCheckComplete = function(){
			// Update
			History.stateChanged = true;

			// Clear
			History.doubleCheckClear();

			// Chain
			return History;
		};

		/**
		 * History.doubleCheckClear()
		 * Clear a double check
		 * @return {History}
		 */
		History.doubleCheckClear = function(){
			// Clear
			if ( History.doubleChecker ) {
				clearTimeout(History.doubleChecker);
				History.doubleChecker = false;
			}

			// Chain
			return History;
		};

		/**
		 * History.doubleCheck()
		 * Create a double check
		 * @return {History}
		 */
		History.doubleCheck = function(tryAgain){
			// Reset
			History.stateChanged = false;
			History.doubleCheckClear();

			// Fix IE6,IE7 bug where calling history.back or history.forward does not actually change the hash (whereas doing it manually does)
			// Fix Safari 5 bug where sometimes the state does not change: https://bugs.webkit.org/show_bug.cgi?id=42940
			if ( History.bugs.ieDoubleCheck ) {
				// Apply Check
				History.doubleChecker = setTimeout(
					function(){
						History.doubleCheckClear();
						if ( !History.stateChanged ) {
							//History.debug('History.doubleCheck: State has not yet changed, trying again', arguments);
							// Re-Attempt
							tryAgain();
						}
						return true;
					},
					History.options.doubleCheckInterval
				);
			}

			// Chain
			return History;
		};

		// ----------------------------------------------------------------------
		// Safari Bug Fix

		/**
		 * History.safariStatePoll()
		 * Poll the current state
		 * @return {History}
		 */
		History.safariStatePoll = function(){
			// Poll the URL

			// Get the Last State which has the new URL
			var
				urlState = History.extractState(document.location.href),
				newState;

			// Check for a difference
			if ( !History.isLastSavedState(urlState) ) {
				newState = urlState;
			}
			else {
				return;
			}

			// Check if we have a state with that url
			// If not create it
			if ( !newState ) {
				//History.debug('History.safariStatePoll: new');
				newState = History.createStateObject();
			}

			// Apply the New State
			//History.debug('History.safariStatePoll: trigger');
			History.Adapter.trigger(window,'popstate');

			// Chain
			return History;
		};

		// ----------------------------------------------------------------------
		// State Aliases

		/**
		 * History.back(queue)
		 * Send the browser history back one item
		 * @param {Integer} queue [optional]
		 */
		History.back = function(queue){
			//History.debug('History.back: called', arguments);

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.back: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.back,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Make Busy + Continue
			History.busy(true);

			// Fix certain browser bugs that prevent the state from changing
			History.doubleCheck(function(){
				History.back(false);
			});

			// Go back
			history.go(-1);

			// End back closure
			return true;
		};

		/**
		 * History.forward(queue)
		 * Send the browser history forward one item
		 * @param {Integer} queue [optional]
		 */
		History.forward = function(queue){
			//History.debug('History.forward: called', arguments);

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.forward: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.forward,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Make Busy + Continue
			History.busy(true);

			// Fix certain browser bugs that prevent the state from changing
			History.doubleCheck(function(){
				History.forward(false);
			});

			// Go forward
			history.go(1);

			// End forward closure
			return true;
		};

		/**
		 * History.go(index,queue)
		 * Send the browser history back or forward index times
		 * @param {Integer} queue [optional]
		 */
		History.go = function(index,queue){
			//History.debug('History.go: called', arguments);

			// Prepare
			var i;

			// Handle
			if ( index > 0 ) {
				// Forward
				for ( i=1; i<=index; ++i ) {
					History.forward(queue);
				}
			}
			else if ( index < 0 ) {
				// Backward
				for ( i=-1; i>=index; --i ) {
					History.back(queue);
				}
			}
			else {
				throw new Error('History.go: History.go requires a positive or negative integer passed.');
			}

			// Chain
			return History;
		};


		// ----------------------------------------------------------------------
		// Initialise

		/**
		 * Create the initial State
		 */
		History.saveState(History.storeState(History.extractState(document.location.href,true)));

		/**
		 * Bind for Saving Store
		 */
		if ( amplify ) {
			History.onUnload = function(){
				// Prepare
				var
					currentStore = amplify.store('History.store')||{},
					item;

				// Ensure
				currentStore.idToState = currentStore.idToState || {};
				currentStore.urlToId = currentStore.urlToId || {};
				currentStore.stateToId = currentStore.stateToId || {};

				// Sync
				for ( item in History.idToState ) {
					if ( !History.idToState.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.idToState[item] = History.idToState[item];
				}
				for ( item in History.urlToId ) {
					if ( !History.urlToId.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.urlToId[item] = History.urlToId[item];
				}
				for ( item in History.stateToId ) {
					if ( !History.stateToId.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.stateToId[item] = History.stateToId[item];
				}

				// Update
				History.store = currentStore;

				// Store
				amplify.store('History.store',currentStore);
			};
			// For Internet Explorer
			History.intervalList.push(setInterval(History.onUnload,History.options.storeInterval));
			// For Other Browsers
			History.Adapter.bind(window,'beforeunload',History.onUnload);
			History.Adapter.bind(window,'unload',History.onUnload);
			// Both are enabled for consistency
		}


		// ----------------------------------------------------------------------
		// HTML5 State Support

		if ( History.emulated.pushState ) {
			/*
			 * Provide Skeleton for HTML4 Browsers
			 */

			// Prepare
			var emptyFunction = function(){};
			History.pushState = History.pushState||emptyFunction;
			History.replaceState = History.replaceState||emptyFunction;
		}
		else {
			/*
			 * Use native HTML5 History API Implementation
			 */

			/**
			 * History.onPopState(event,extra)
			 * Refresh the Current State
			 */
			History.onPopState = function(event){
				// Reset the double check
				History.doubleCheckComplete();

				// Check for a Hash, and handle apporiatly
				var currentHash	= History.getHash();
				if ( currentHash ) {
					// Expand Hash
					var currentState = History.extractState(currentHash||document.location.href,true);
					if ( History.options.transformHash && currentState ) {
						// We were able to parse it, it must be a State!
						// Let's forward to replaceState
						//History.debug('History.onPopState: state anchor', currentHash, currentState);
						History.replaceState(currentState.data, currentState.title, currentState.url, false);
					}
					else {
						// Traditional Anchor
						//History.debug('History.onPopState: traditional anchor', currentHash);
						History.Adapter.trigger(window,'anchorchange');
						History.busy(false);
					}

					// We don't care for hashes
					History.expectedStateId = false;
					return false;
				}

				// Prepare
				var newState = false;

				// Prepare
				event = event||{};
				if ( typeof event.state === 'undefined' ) {
					// jQuery
					if ( typeof event.originalEvent !== 'undefined' && typeof event.originalEvent.state !== 'undefined' ) {
						event.state = event.originalEvent.state||false;
					}
					// MooTools
					else if ( typeof event.event !== 'undefined' && typeof event.event.state !== 'undefined' ) {
						event.state = event.event.state||false;
					}
				}

				// Ensure
				event.state = (event.state||false);

				// Fetch State
				if ( event.state ) {
					// Vanilla: Back/forward button was used
					newState = History.getStateById(event.state);
				}
				else if ( History.expectedStateId ) {
					// Vanilla: A new state was pushed, and popstate was called manually
					newState = History.getStateById(History.expectedStateId);
				}
				else {
					// Initial State
					newState = History.extractState(document.location.href);
				}

				// The State did not exist in our store
				if ( !newState ) {
					// Regenerate the State
					newState = History.createStateObject(null,null,document.location.href);
				}

				// Clean
				History.expectedStateId = false;

				// Check if we are the same state
				if ( History.isLastSavedState(newState) ) {
					// There has been no change (just the page's hash has finally propagated)
					//History.debug('History.onPopState: no change', newState, History.savedStates);
					History.busy(false);
					return false;
				}

				// Store the State
				History.storeState(newState);
				History.saveState(newState);

				// Force update of the title
				History.setTitle(newState);

				// Fire Our Event
				History.Adapter.trigger(window,'statechange');
				History.busy(false);

				// Return true
				return true;
			};
			History.Adapter.bind(window,'popstate',History.onPopState);

			/**
			 * History.pushState(data,title,url)
			 * Add a new State to the history object, become it, and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.pushState = function(data,title,url,queue){
				//History.debug('History.pushState: called', arguments);

				// Check the State
				if ( History.getHashByUrl(url) && History.emulated.pushState ) {
					throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.pushState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.pushState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy + Continue
				History.busy(true);

				// Create the newState
				var newState = History.createStateObject(data,title,url);

				// Check it
				if ( History.isLastSavedState(newState) ) {
					// Won't be a change
					History.busy(false);
				}
				else {
					// Store the newState
					History.storeState(newState);
					History.expectedStateId = newState.id;

					// Push the newState
					history.pushState(newState.id,newState.title,newState.url);

					// Fire HTML5 Event
					History.Adapter.trigger(window,'popstate');
				}

				// End pushState closure
				return true;
			};

			/**
			 * History.replaceState(data,title,url)
			 * Replace the State and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.replaceState = function(data,title,url,queue){
				//History.debug('History.replaceState: called', arguments);

				// Check the State
				if ( History.getHashByUrl(url) && History.emulated.pushState ) {
					throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.replaceState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.replaceState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy + Continue
				History.busy(true);

				// Create the newState
				var newState = History.createStateObject(data,title,url);

				// Check it
				if ( History.isLastSavedState(newState) ) {
					// Won't be a change
					History.busy(false);
				}
				else {
					// Store the newState
					History.storeState(newState);
					History.expectedStateId = newState.id;

					// Push the newState
					history.replaceState(newState.id,newState.title,newState.url);

					// Fire HTML5 Event
					History.Adapter.trigger(window,'popstate');
				}

				// End replaceState closure
				return true;
			};

			// Be aware, the following is only for native pushState implementations
			// If you are wanting to include something for all browsers
			// Then include it above this if block

			/**
			 * Setup Safari Fix
			 */
			if ( History.bugs.safariPoll ) {
				History.intervalList.push(setInterval(History.safariStatePoll, History.options.safariPollInterval));
			}

			/**
			 * Ensure Cross Browser Compatibility
			 */
			if ( navigator.vendor === 'Apple Computer, Inc.' || (navigator.appCodeName||'') === 'Mozilla' ) {
				/**
				 * Fix Safari HashChange Issue
				 */

				// Setup Alias
				History.Adapter.bind(window,'hashchange',function(){
					History.Adapter.trigger(window,'popstate');
				});

				// Initialise Alias
				if ( History.getHash() ) {
					History.Adapter.onDomLoad(function(){
						History.Adapter.trigger(window,'hashchange');
					});
				}
			}

		} // !History.emulated.pushState

	}; // History.initCore

	// Try and Initialise History
	History.init();

})(window);
;

// ***************************
// js.compressed/jquery/history.adapter.jquery.js
// ***************************
/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

// Closure
(function(window,undefined){
	// Localise Globals
	var
		History = window.History = window.History||{},
		jQuery = window.jQuery;

	// Check Existence
	if ( typeof History.Adapter !== 'undefined' ) {
		throw new Error('History.js Adapter has already been loaded...');
	}

	// Add the Adapter
	History.Adapter = {
		/**
		 * History.Adapter.bind(el,event,callback)
		 * @param {Element|Selector} el
		 * @param {String} event - custom and standard events
		 * @param {Function} callback
		 * @return
		 */
		bind: function(el,event,callback){
			jQuery(el).on(event,callback);
		},

		/**
		 * History.Adapter.trigger(el,event)
		 * @param {Element|Selector} el
		 * @param {String} event - custom and standard events
		 * @return
		 */
		trigger: function(el,event){
			jQuery(el).trigger(event);
		},

		/**
		 * History.Adapter.trigger(el,event,data)
		 * @param {Function} callback
		 * @return
		 */
		onDomLoad: function(callback) {
			jQuery(callback);
		}
	};

	// Try and Initialise History
	if ( typeof History.init !== 'undefined' ) {
		History.init();
	}

})(window);
;

// ***************************
// js.compressed/history.js
// ***************************
(function(h){vBulletin.ensureObj("history");var c=window.History,k=c&&!!c.enabled;c.options.transformHash=!1;vBulletin.history.instance=function(l){var g=!0,e=!!l&&k;this.isEnabled=function(){return e};this.setDefaultState=function(b,a,d){if(e){g=!1;var f=vBulletin.parseUrl(d);try{d=decodeURI(f.pathname)+decodeURIComponent(f.search)+decodeURIComponent(f.hash),c.replaceState(b,a,d),g=!0}catch(m){console.error("Unable to parse and decode URL "+d)}}};this.setStateChange=function(b,a){e&&
c.Adapter.bind(window,"statechange"+(a?"."+a:""),function(a){g&&b.apply(this,h.makeArray(arguments))})};this.pushState=function(b,a,d){if(e){g=!1;var f=vBulletin.parseUrl(d);try{d=decodeURI(f.pathname)+decodeURIComponent(f.search)+decodeURIComponent(f.hash),c.pushState(b,a,d),g=!0}catch(m){console.error("Unable to parse and decode URL "+d)}}};this.getState=function(){if(e)return c.getState()};this.log=function(){e&&c.log.call(window,arguments)};e&&(h(window).data("hashchange.history")||c.Adapter.bind(window,
"hashchange.history",function(b){var a=location.hash;g&&a&&((b=a.match(/#post(\d+)/))&&Number(b[1])+""===b[1]&&1<Number(b[1])&&0==h(a).length&&h(".conversation-content-widget").length?(a=vBulletin.parseUrl(location.href),location.replace([a.pathname,a.search,a.search?"&":"?","p=",b[1],b[0]].join(""))):(setTimeout(function(){history.back()},0),(b=vBulletin.scrollToAnchor(a))&&window.scrollTo(0,0)))}),h(window).data("hashchange.history",!0));return this};vBulletin.ready("history").resolve()})(jQuery);
;

// ***************************
// js.compressed/autocomplete.js
// ***************************
function vBulletin_Autocomplete(I,c){var b=$(I),r=c.apiClass||null,t=c.apiFunction||"getAutocomplete",J=c.delay||500,l=c.minLength||3,u=c.maxItems||!1,v=b.attr("name")||"autocompleteElements",K=c.containerClass||"entry-field",w=c.placeholderText,L="undefined"!=typeof c.autoFocus?c.autoFocus:!1,M="undefined"!=typeof c.appendTo?c.appendTo:"body",x=c.delimiter||",",f=[],g=b.parent(".autocomplete-container"),e=g.find(".autocompleteHelper"),m=!1,n=!1,h=b.siblings(".autocomplete-box"),y=c.beforeAdd||
!1,z=c.afterAdd||!1,A=c.beforeDelete||!1,B=c.afterDelete||!1,C=this,k=c.editorContext||null,F=function(a,b,d){if(""==a||"function"==typeof y&&!y.call(this,a,b))return!1;var D=!0;$(f).each(function(E,b){b.label==a&&(D=!1)});if(!D||u&&f.length>=u)return!1;var E=$("<div />").addClass("element-x b-icon b-icon__x-circle").text("X"),c=$("<div />").addClass("element-text").text(a);$("<div />").addClass("autocomplete").append(c).append(E).appendTo(h);f.push({label:a,value:b});p();"function"==typeof z&&z.call(this,
a,b,d);h.show();return!0},q=function(a){var b=a.length,d;for(d=0;d<b;++d)F(a[d])},G=function(){h.html("");e.val("");f=[];p()},p=function(){var a=[];$(f).each(function(b,d){a.push(d.label)});b.val(a.join(x))},H=function(a,b,d){if(k)switch(k.type){case "tags":k.context.addTag(a)}else C.addElement(a,a),e.val("");if("undefined"!==typeof b&&"undefined"!==typeof d)return d.preventDefault(),!1};(function(){0==g.length&&(b.wrap('<div class="autocomplete-container b-form-input__input" />'),g=b.parent(".autocomplete-container"),
g.addClass(K).on("mousedown",function(a){var b=this;setTimeout(function(){var a=$(".autocompleteHelper:visible",b);0<a.length&&a[0].focus()},10);return!1}));0==h.length&&(h=$("<div />").addClass("autocomplete-box").insertBefore(b));0==e.length&&(e=$('<input type="text" name="autocompleteHelper" />').addClass("autocompleteHelper b-form-input__input b-form-input__input--hide-clear-button").attr("placeholder",function(){return w?w:null}).attr("maxlength",function(){return b.attr("maxlength")?b.attr("maxlength"):
null}).insertAfter(h));e.attr("tabindex",b.attr("tabindex")||0);e.off("keydown").on("keydown",function(a){if(13==a.which){var b=$(a.target).val();b.length>=l&&H(b,!0,a)}});e.off("blur").on("blur",function(a){m=window.setTimeout(function(){if(!n){var b=e.val();b.length>=l&&H(b,!0,a)}m=n=!1},200)});e.off("focus").on("focus",function(a){n=m?!0:!1;return!1});var a="font-family font-size font-weight font-style color line-height height".split(" "),c;for(c=0;c<a.length;++c)g.css(a[c],b.css(a[c]));a='<input type="hidden" name="'+
v+'"';b.attr("id")&&(a+=' id="'+b.attr("id")+'"');b.attr("class")&&(a+=' class="'+b.attr("class")+'"');if(b.attr("data-value"))var d=b.attr("data-value").split(x);b.replaceWith(a+" />");b=g.find('[name="'+v+'"]');e.autocomplete({autoFocus:L,appendTo:M,delay:J,minLength:l,search:function(a,b){console.log("searching for "+this.value)},source:function(a,b){console.log("getting source for "+a.term);vBulletin.AJAX({call:"/ajax/api/"+r+"/"+t,data:{searchStr:a.term},success:function(c){console.log("got source for "+
a.term+":");if(c&&$.isArray(c.suggestions)){var d=[];$.each(c.suggestions,function(a,b){a={label:b.title};k&&"tags"==k.type?a.value=pageData.userid:(a.value=b.value,"id"in b&&b.id&&(a.id=b.id),b.hasOwnProperty("htmllabel")&&(a.htmllabel=b.htmllabel));d.push(a)});b(d)}else console.log("/ajax/api/"+r+"/"+t+" successful, but response was not an array"),vBulletin.error("error","error_getting_suggestions")},error_phrase:"error_getting_suggestions"})},select:function(a,b){C.addElement(b.item.label,b.item.value,
b.item);e.val("");a.preventDefault()},focus:function(a,b){e.val(b.item.label);a.preventDefault()},open:function(a){a=$(a.target).autocomplete("instance").menu.element;var b=parseInt($(".dialog-box").css("z-index"),10);a.css("z-index",b+1)}});if(a=e.data("ui-autocomplete"))a._renderItem=function(a,b){b=b.hasOwnProperty("htmllabel")?$("<div>").html(b.htmllabel):$("<div>").text(b.label);return $("<li>").append(b).appendTo(a)};h.on("click",".element-x",function(a){a=$(this).closest(".autocomplete");var b=
a.find(".element-text").text().toLowerCase(),c=[],d=!1;$(f).each(function(a,e){e.label.toLowerCase()==b?d=e:c.push(e)});if("function"==typeof A&&!A.call(this,d.label,d.data))return!1;f=c;a.remove();p();"function"==typeof B&&B.call(this,d.label,d.data)});g.off("click").on("click",function(a){$(a.target).hasClass("ui-autocomplete-input")||$(".ui-autocomplete-input",$(this)).trigger("focus");return!1});d&&q.call(this,d)}).call(this);this.addElement=function(a,b,c){return F.call(this,a,b,c)};this.addElements=
function(a){q.call(this,a)};this.setElements=function(a){G();q(a)};this.getElements=function(){return f};this.getLabels=function(){var a=[];$(f).each(function(b,c){a.push(c.label)});return a};this.getValues=function(){var a=[];$(f).each(function(b,c){a.push(c.value)});return a};this.getInputField=function(){return e};this.clearElements=function(){return G.call(this)};this.countElements=function(){return $(f).length};this.getMinLength=function(){return l};this.close=function(){e.val("");e.autocomplete("close")}}
;
;

// ***************************
// js.compressed/poll.js
// ***************************
vBulletin.precache("vote_failed vote_now vote_first vote_error_retrieving votes vote voters voter".split(" "),["maxpolloptions"]);
(function(d){d(function(){function k(c,e,a){c=d("<span />").addClass(e).text(vBulletin.phrase.get(c));m(c,a)}function m(c,e){e.html(c);e.fadeIn("slow");d("body").on("click.voterpopup",function(a){0==d(a.target).closest(".voter-icon").length&&(e.hide(),d("body").off("click.voterpopup"))})}function l(c,e){var a=c.parent(),b=e.options,g;for(g in b){var f=d(".pollresults-option-"+b[g].polloptionid);f.find(".title").html(JShtmlEncode(b[g].title));f.find(".bar-container .bar").css("width",b[g].percentage+
"%");f.find(".percentage").html(b[g].display_percentage+"%");f.find(".votes span").html(b[g].votes);var h=1==b[g].votes?"vote":"votes";f.find(".votes label").html(vBulletin.phrase.get(h))}d(".pollresults .pollvote-count span",a).html(e.poll_votes);h=1==e.poll_votes?"voter":"voters";d(".pollresults .pollvote-count label",a).html(vBulletin.phrase.get(h));c.hide();d("div.pollresults",a).removeClass("h-hide")}vBulletin.conversation.bindEditFormEventHandlers("poll");(function(c){var e=function(a){a.find(".js-remove-button").prop("disabled",
2>=a.find("li").length)};d(".b-poll-fieldset__poll-answers").each(function(){e(d(this))});c.off("click",".js-poll__view-results").on("click",".js-poll__view-results",function(a){a.preventDefault();a=d(this).attr("data-nodeid");var b=d(this).closest("form");d.post(vBulletin.getAjaxBaseurl()+"/poll/get",{nodeid:a},function(a){l(b,a)},"json")});c.off("click",".js-poll__back-to-poll").on("click",".js-poll__back-to-poll",function(a){a.preventDefault();a=d(this).closest(".js-poll__parent");a.find("div.pollresults").addClass("h-hide");
a.find("form.poll").show()});c.off("click",".b-poll-fieldset__add-more").on("click",".b-poll-fieldset__add-more",function(a){a=d(this);var b=a.prev(".b-poll-fieldset__poll-answers"),c=b.find("li").first().clone(!0),f=c.find(".b-form-input__input");f.val("").attr("name","polloptions[new][]");c.appendTo(b);f.trigger("focus");b.find("li").length==vBulletin.options.get("maxpolloptions")&&a.addClass("h-hide");e(b);return!1});c.off("click",".b-poll-fieldset__poll-answers .js-remove-button").on("click",
".b-poll-fieldset__poll-answers .js-remove-button",function(){var a=d(this),b=a.closest(".b-poll-fieldset__poll-answers");a.closest("li").remove();b.next(".b-poll-fieldset__add-more").removeClass("h-hide");e(b);return!1});c.off("click",".js-poll-timeout").on("click",".js-poll-timeout",function(a){a=d(this).closest(".b-poll-fieldset__poll-options").next(".b-poll-fieldset__datepicker-container");this.checked?a.removeClass("h-hide"):a.addClass("h-hide").find(".b-datepicker__input").val("")});c.off("submit.formpoll",
"form.poll").on("submit.formpoll","form.poll",function(a){a.preventDefault();var b=d(this);a=b.find('[name="polloptionid"]:checked').val();var c=[];b.find('[name="polloptionids[]"]:checked').each(function(){c.push(d(this).val())});d.post(vBulletin.normalizeAjaxUrl(b.attr("action")),{polloptionid:a,"polloptionids[]":c},function(a){0==a?vBulletin.warning("vote_now","vote_failed"):(l(b,a),a=b.parent(),d("div.pollresults",a).find(".js-poll__back-to-poll").remove())},"json")});c.offon("click",".pollresults-data .voter-icon",
a=>{a=d(a.currentTarget);var b=a.find(".voters");if(b.is(":visible"))return!1;d(".pollresults-data .voter-icon .voters").hide();var c=a.attr("data-node-id"),e=a.attr("data-polloption-id"),h=a.closest("form");vBulletin.AJAX({call:"/poll/get-voters",data:{nodeid:c,polloptionid:e},success:a=>{var {options:{[e]:c}={}}=a;if(c)if(l(h,a),a=c.votersinfo,d.isEmptyObject(a))k("vote_first","note",b);else{c=[];for(let b of Object.values(a))c.push('<a href="{0}" data-vbnamecard="{1}">{2}</a>'.format(b.profileurl,
b.userid,b.displayname_safe));m(c.join(", "),b)}else k("vote_error_retrieving","error",b)},api_error:a=>k(a[0],"error",b),error:()=>k("vote_error_retrieving","error",b)})});c.offon("click",".pollresults-data .voter-icon .voters",a=>{a.stopPropagation();return!0})})(d(document))})})(jQuery);
;

// ***************************
// js.compressed/vbSlideshow.js
// ***************************
vBulletin.precache(["gallery_slideshow","no_photos_found_or_post_deleted"],[]);
(function(e){function w(a,b,c,g){var f=a.find(".caption");f.html("").hide();b.links&&f.append(e("<div />").addClass("links ellipsis").html(b.links));b.title&&f.append(e("<div />").addClass("title ellipsis").html(b.title));b.caption&&f.append(e("<div />").addClass("title ellipsis").html(b.caption));b=b.links&&b.title?15:b.links||b.title?35:50;c=a.find(".slideshow-wrapper .jcarousel-item-"+c+" img");c.outerWidth();f.css({marginBottom:b+"px",width:"100%",textAlign:"center",marginLeft:"auto",marginRight:"auto"});
c.one("load",function(){var a=e(this).outerWidth();f.css("width",a+"px")});g?f.fadeIn("fast",function(){a.trigger("click")}):f.show()}function x(a){var b=vBulletin.isRtl();37==a.which?vBulletin.gallery.slideshow.jcarousel(b?"next":"prev"):39==a.which&&vBulletin.gallery.slideshow.jcarousel(b?"prev":"next");if(33<=a.which&&40>=a.which)return!1;27==a.which&&d.dialog("instance")&&d.dialog("close")}function y(a){0<(a.originalEvent.wheelDelta||-a.originalEvent.detail)?vBulletin.gallery.slideshow.jcarousel("prev"):
vBulletin.gallery.slideshow.jcarousel("next");return!1}function z(a){if(a){var b=function(a){d=!0;c(a,!0)||c("restore",!0)},c=function(a,b){if(vBulletin.gallery.slideshow.jcarousel("canmove")){var c=e(".slideshow-wrapper .jcarousel-list"),d=g?"right":"left",h=parseInt(c.css(d),10);if("restore"===a)a=h+-1*f,b?(b={},b[d]=a,c.animate(b,"fast","swing")):c.css(d,a),f=0,k=!1;else if("prev"===a||"next"===a){parseInt(c.css("width"),10);h=c.find(".jcarousel-item");b=h.length;h=h.first();h=parseInt(h.css("width"),
10);var m=Math.abs(k);a="prev"===a?m-h:m+h;var q=(a?a/h:0)+1;if(0<=a&&a<=(b-1)*h&&(b={},b[d]=-1*a,c.animate(b,"fast","swing",function(){f=0;!1!==k&&(c.css("visibility","hidden"),c.css(d,k),k=!1,vBulletin.gallery.slideshow.jcarousel("scroll",q,!1),c.css("visibility","visible"))}),!1!==k))return!0}else g&&(a*=-1),c.css(d,h+a),f+=a,!1===k&&(k=h)}},g=vBulletin.isRtl(),f=0,k=!1,d=!1;e(document).swipeable({swipeleft:function(a,c){b(g?"prev":"next")},swiperight:function(a,c){b(g?"next":"prev")},swiping:function(a,
b){c(b.moved.x)},swipeend:function(a,b){f&&!d&&c("restore",!0);d&&(d=!1)}})}else e(document).swipeable("disable")}function C(){var a=e("body"),b=a.css("overflow")||"auto";a.css("overflow","hidden");var c=e(window).innerWidth(),g=e(window).innerHeight();c=parseInt(c-0,10);g=parseInt(g-0,10);d.css({borderRadius:0,borderWidth:0});a.css("overflow",b);d.dialog("instance")&&(d.dialog("option","width",c),d.dialog("option","height",g))}function D(a){var b=a.closest(".js-slideshow__gallery-node"),c=0,g="",
f=null,d=null;0<b.length&&(c=parseInt(b.attr("data-node-id")||b.attr("data-nodeid"),10),g=b.data("sort")||"",b=b.closest(".ui-widget-content"),b=b.find(".toolbar-filter-overlay .filter-options"),b.length&&(f=e("input[name=filter_time]:checked",b).val(),d=e("input[name=filter_show]:checked",b).val()));0==c&&(b=a.closest(".js-post-sm"),0<b.length&&(c=parseInt(b.attr("data-nodeid"),10)));0==c&&(a=a.closest(".js-post"),0<a.length&&(c=parseInt(a.attr("data-node-id"),10)));return{nodeid:c,sort:g,filter_time:f,
filter_show:d}}function E(a){var b=a.closest(".js-post__content-text"),c={photos:[]},g=0;(b.length&&b.find(".js-lightbox, .js-lightbox-participant")||a).each(function(){var b=e(this),d=b.data("fullsize-url")||b.parent().attr("href")||b.attr("src")||"";let m=b.data("thumb-url")||d,h=b.data("title")||"";b=b.data("caption")||"";d&&(d={url:d,thumb:m,links:h,title:b},c.photos.push(d),this===a[0]&&(l=g),g++)});return c}async function F(a){if(a.hasClass("js-lightbox"))return E(a);var b=a.closest(".b-content-entry-panel__content--gallery").find(".js-photo-postdata input");
if(0<b.length){let a={photos:[]};b.filter('[name="filedataid[]"]').each(function(){var c=this.value;c={title:JShtmlEncode(b.filter('[name="title_'+c+'"]').val()),url:pageData.baseurl+"/filedata/fetch?filedataid="+c,thumb:pageData.baseurl+"/filedata/fetch?thumb=1&filedataid="+c};a.photos.push(c)});return new Promise((b,c)=>{setTimeout(()=>{b(a)},10)})}var c=a.attr("data-channelid"),g=a.attr("src")||a.attr("href"),f=D(a);a=f.nodeid;var d=f.sort,m=f.filter_time;f=f.filter_show;var h={nodeid:a},q=parseInt(e(".albumSlideShowPageNo").val(),
10),A=parseInt(e(".albumSlideShowPerPage").val(),10),n=e(".media-tab .media-filter-overlay .filter-options input:checked").val();vBulletin.media&&vBulletin.media.MEDIA_USERID&&(h.userid=vBulletin.media.MEDIA_USERID);c&&(h.channelid=c);isNaN(q)||(h.pageno=q);isNaN(A)||(h.perpage=A);n&&(h.dateFilter=n);isNaN(l)||(h.startIndex=l);d&&(h.sort=d);m&&(h.dateFilter=m);f&&(h.showFilter=f);0<a&&(h.startIndex="");var r=JSON.stringify(h);0<a&&(p[a]=p[a]||[],p[a].push(r));t[r]||await vBulletin.AJAX({call:"/filedata/gallery",
data:h}).always(a=>{!a&&g&&(a={photos:[{title:"",url:g,thumb:""}]});t[r]=a});return t[r]}function u(a,b,c){let g=a.jcarousel("size")||1,e=a.data("curIndex")||1,d;if(b!=e)return b==g?(2<g&&(d=a.jcarousel("scroll",b-1,!1)),a.jcarousel("next")):e==g&&b==g-1?a.jcarousel("prev"):d=a.jcarousel("scroll",b,c),d}function v(a){var b=e(this);n=this;if(1==b.closest("#preview-overlay").length)return!1;a&&a.preventDefault&&a.preventDefault();!1===l&&(l=b.index());e(document).offon("click",".thumbnails .image-wrapper",
function(a,b){"undefined"==typeof b&&(b=!0);e(".thumbnails .image-wrapper",d).addClass("dimmed");e(this).removeClass("dimmed");a=Number(e(this).parent().attr("jcarouselindex"));d.data("thumbclick",!0);u(vBulletin.gallery.slideshow,a,b);d.removeData("thumbclick")});a=d.find(".slideshow-wrapper");0==a.find(".slideshow-list").length&&a.append(e("<ul />").addClass("slideshow-list"));d.dialog("open");window.vBulletin.loadingIndicator.show();vBulletin.gallery.slideshow=a.jcarousel({wrap:null,animation:"fast",
easing:"swing",scroll:1,rtl:vBulletin.isRtl(),initCallback:function(a,e){"init"==e&&(window.vBulletin.loadingIndicator.show(),F(b).then(b=>{window.vBulletin.loadingIndicator.hide();G(b,a)}))},itemLoadCallback:{onBeforeAnimation:function(a,b,f){f=a.first;a.inTail&&(f=a.last);if("init"==b)return!1;if(b=d.data("image-data")){vBulletin.gallery.slideshow.data("curIndex",f);var c=b.photos.length;if(0<f)for(;f>c;)f-=c;else for(;0>=f;)f+=c;w(d,b.photos[f-1],f,!0);vBulletin.gallery.thumbnails&&(a=B(a),u(vBulletin.gallery.thumbnails,
Math.max(f-Math.floor(a.visibleCount/2),1),!0),d.data("thumbclick")||(e("#slideshow-dialog .thumbnails .image-wrapper").addClass("dimmed"),vBulletin.gallery.thumbnails.jcarousel("get",f).find(".image-wrapper").removeClass("dimmed")))}}}});"undefined"==typeof vBulletin.gallery.slideshow.data("curIndex")&&vBulletin.gallery.slideshow.data("curIndex",1);return!1}function G(a,b){if(a&&a.photos){d.data("image-data",a);H(b,a,d);d.find(".slideshow-wrapper").find(".jcarousel-prev-horizontal").addClass("b-icon b-icon__arrow-block-left").end().find(".jcarousel-next-horizontal").addClass("b-icon b-icon__arrow-block-right");
var c=d.find(".thumbnails");b=c.find(".jcarousel-prev-horizontal");c=c.find(".jcarousel-next-horizontal");b.addClass("b-icon b-icon__arrow-bar-left").toggleClass("b-icon--disabled",b.is(".jcarousel-prev-disabled"));c.addClass("b-icon b-icon__arrow-bar-right").toggleClass("b-icon--disabled",c.is(".jcarousel-next-disabled"));w(d,a.photos[0],1);1<a.photos.length&&vBulletin.gallery.thumbnails.jcarousel("get",1).find(".image-wrapper").removeClass("dimmed");var g=l;a=parseInt(e(".albumSlideShowPerPage").val(),
10);isNaN(a)||(g=l%a);0<g&&"undefined"!=typeof u(vBulletin.gallery.slideshow,g+1,!1)&&(d.find(".slideshow-wrapper").css("visibility","hidden"),window.setTimeout(function(){e(".thumbnails .image-wrapper",d).eq(g).trigger("click",[!1]);d.find(".slideshow-wrapper").css("visibility","")},0));window.vBulletin.loadingIndicator.hide()}else openAlertDialog({title:vBulletin.phrase.get("gallery_slideshow"),message:vBulletin.phrase.get("no_photos_found_or_post_deleted"),iconType:"warning"})}function H(a,b,c){let d=
b.photos.length;a.size(d);1<d?(e("#slideshow-dialog .thumbnails").show(),I(b)):e("#slideshow-dialog .thumbnails").hide();c.toggleClass("no-thumbnails",1>=d);var f=a.first||1;e.each(b.photos,function(b,c){let d=e("<a></a>").attr("href",c.url);c=e('<img alt="{0}" class="image" />'.format(c.htmltitle||"")).attr("src",c.url);let g=e('<div class="image-wrapper"></div>');d.append(c);g.append(d);a.add(f+b,g)});b=c.find(".slideshow-wrapper .slideshow-list");c=parseFloat(b.css("width"));var k=a.get(1);k=parseFloat(k.css("width"));
0<k&&c/k<d&&b.css("width",d*k+"px");a.reload()}function B(a){var b=e("#slideshow-dialog .thumbnails .jcarousel-clip"),c=b.find(".jcarousel-item").outerWidth(!0);a=a.size();b=parseInt(b.css("max-width"),10);b=Math.min(a,Math.max(1,Math.floor(b/c)));return{visibleCount:b,recommendedContainerWidth:b*c}}function I(a){function b(a){var b=e(a.buttonPrev[0]);a=e(a.buttonNext[0]);b.toggleClass("b-icon--disabled",b.is(".jcarousel-prev-disabled"));a.toggleClass("b-icon--disabled",a.is(".jcarousel-next-disabled"))}
var c=e("#slideshow-dialog .thumbnails .thumbnail-list");0==c.length&&(c=e("#slideshow-dialog .thumbnails").append(e("<ul />").addClass("thumbnail-list")));vBulletin.gallery.thumbnails=c.jcarousel({wrap:null,animation:"fast",easing:"swing",rtl:vBulletin.isRtl(),size:a.photos.length,initCallback:function(b,c){"init"==c&&(b.size(a.photos.length),e.each(a.photos,function(c,d){c=(b.first||1)+c;if(b.has(c))return!0;if(c>a.photos.length)return!1;d=e("<img />").addClass("thumbnail").on("load",function(){}).attr({src:d.thumb,
alt:""}).appendTo(e("<div />").addClass("image-wrapper dimmed"));b.add(c,d.parent().get(0))}),c=B(b),e("#slideshow-dialog .thumbnails .jcarousel-clip").css("width",c.recommendedContainerWidth+"px"),b.size()<=c.visibleCount&&(b.buttonNext.hide(),b.buttonPrev.hide()))},itemVisibleInCallback:{onBeforeAnimation:function(a,b,c,d){e("#slideshow-dialog .thumbnails").data("visible-range",{first:a.first,last:a.last})}},buttonNextCallback:b,buttonPrevCallback:b}).disableSelection()}function J(){if(n){var a=
n;var b=(vBulletin.gallery.slideshow&&vBulletin.gallery.slideshow.data("curIndex")||1)-1;d.dialog("close");l=b;v.call(a)}}vBulletin.ensureObj("gallery");var d=e("#slideshow-dialog"),l=!1,n=!1,t={},p={};vBulletin.gallery.clearCacheForNodeid=function(a){p.hasOwnProperty(a)&&p[a].forEach(a=>delete t[a]);p[a]=[]};e(function(){d.data("vb-lightbox-initialized")||(d.data("vb-lightbox-initialized",!0),e(document).offon("click","#slideshow-dialog .close-btn",function(){d.dialog("instance")&&d.dialog("close")}),
d.dialog({autoOpen:!1,resizable:!1,closeOnEscape:!0,showTitleBar:!1,modal:!0,dialogClass:"slideshow-dialog",open:function(){C();e("body").css("overflow","hidden");e(".ui-widget-overlay").on("click",function(){d.dialog("close")});e(document).offon("keydown",x);e(document).offon("mousewheel DOMMouseScroll",y);z(!0)},close:function(a,b){vBulletin.gallery.thumbnails&&vBulletin.gallery.thumbnails.jcarousel("destroy");vBulletin.gallery.slideshow&&(vBulletin.gallery.slideshow.removeData("curIndex"),vBulletin.gallery.slideshow.jcarousel("destroy"));
e("body").css("overflow","auto");e(document).off("keydown",x);e(document).off("mousewheel DOMMouseScroll",y);z(!1);l=n=!1}}))});e(function(){e(document).offon("click",".js-slideshow--item",v);e(document).offon("click",".js-lightbox",v);d.addClass("js-no-responsive-resize");e(window).on("resize",e.debounce(300,J))})})(jQuery);
;

// ***************************
// js.compressed/conversation_filter.js
// ***************************
vBulletin.precache(["invalid_request","invalid_search_syntax","invalid_server_response_please_try_again","unknown_error"],[]);vBulletin.ensureObj("conversation");
(function(a){vBulletin.conversation.filter=function(m){function n(a,c){vBulletin.conversation.displaySelectedFilterText(a,c,b.context)}var c=this,q=null,p=0,t=!1,r=!1,b={context:document,autoCheck:!1,checkInterval:15E3,scrollToTop:null,customFilter:null,onContentLoad:null,closeOverlayOnScroll:!1,pagination:null,allowHistory:!1,tabParamAsQueryString:!0,hash:"",beforeApplyFilters:null,afterResetFilters:null};m&&"object"==typeof m&&a.extend(b,m);var l=new vBulletin.history.instance(b.allowHistory);(function(){a(".toolbar-filter-overlay input[type=radio]",
b.context).off("change.conversation_filter").on("change.conversation_filter",function(d,f,g){d=a(this);var e=a(this.form);if(!l.isEnabled()&&b.allowHistory)return d=vBulletin.makePaginatedUrl(location.href,1),location.href=vBulletin.makeFilterUrl(d,this.name,this.value,b.context,b.hash),!0;t=!0;b.customFilter=null;d.data("bypass-filter-display")||n(this);d=d.closest(".conversation-toolbar-wrapper");1<a(".conversation-toolbar-wrapper",b.context).length&&$toolbarWrappers.filter("."+(d.hasClass("top")?
"bottom":"top")).find("input[name={0}][value={1}]".format(this.name,this.value)).prop("checked",!0);"conversations_on"==this.value?(r=b.autoCheck=!0,p=1):(clearTimeout(p),r="filter_show"==this.name);a(".new-conversations-strip",b.context).hide();c.updatePageNumber(g||1);g=a('.filtered-by .filter-text[data-filter-name="q"]',b.context);if(g.length){var h=c.getSelectedFilters(e);h.q=g.data("filter-value");c.setOption("customFilter",h);c.forceApplyFilters()}else c.applyFilters(!1);l.isEnabled()&&!f&&
(h=c.getSelectedFilters(e),e=this.name,g=this.value,f=a(".filtered-by",d),h={from:"filter",page:1,tab:b.tabParamAsQueryString?"#"+d.closest(".ui-tabs-panel").attr("id"):vBulletin.getSelectedTabHashOrPath(d.closest(".ui-tabs"),!1),filters:h,filtervalue:g,filtername:e},f.data("reset")?(d=location.pathname.replace(/\/page[0-9]+/,""),b.tabParamAsQueryString&&(e=vBulletin.parseQueryString(location.search),e.tab?d+="?tab="+e.tab:e.view&&(d+="?view="+e.view))):(d=vBulletin.makePaginatedUrl(location.href,
1),d=vBulletin.makeFilterUrl(d,e,g,b.context)),l.pushState(h,document.title,d),f.data("reset",null))});a(".new-conversations-strip",b.context).off("click.conversation_filter").on("click.conversation_filter",function(){a(this).hide();r=!0;c.updatePageNumber(1);c.applyFilters(!1,!0)});a(".toolbar-filter",b.context).off("click.conversation_filter").on("click.conversation_filter",function(d,c,g){d=a(this).closest(".conversation-toolbar-wrapper");var e=d.hasClass("bottom")?"bottom":"top";"undefined"==
typeof c&&(c="slow");a(".filter-wrapper",this).toggleClass("selected");a(".arrow .vb-icon",this).toggleClass("vb-icon-triangle-down-wide vb-icon-triangle-up-wide");a(".toolbar-filter-overlay",d).slideToggle(c,function(){var d="conversation_filter"+e;if(a(this).is(":visible")){a("body").off("click."+d).on("click."+d,function(c){0==a(c.target).closest(".toolbar-filter-overlay").length&&0==a(c.target).closest(".toolbar-filter").length&&(a("body").off("click."+d),a(window).off("scroll."+d),c=0<a(c.target).closest(".toolbar-filter").length?
"fast":"slow",a(".conversation-toolbar-wrapper.{0} .conversation-toolbar .toolbar-filter".format(e),b.context).triggerHandler("click.conversation_filter",[c]))});var c=!0;if("scroll"!=g){c=a(".filtered-by",b.context);if(0==c.length||c.is(":hidden"))c=this;var f={};(c=vBulletin.isScrolledIntoView(c,f))||a("html,body").animate({scrollTop:"+="+Math.abs(f.bottom)},"fast",function(){setTimeout(function(){if(b.closeOverlayOnScroll)a(window).off("scroll."+d).on("scroll."+d,function(){a(".conversation-toolbar-wrapper.{0} .conversation-toolbar .toolbar-filter".format(e),
b.context).triggerHandler("click.conversation_filter",[0,"scroll"])})},50)})}if(c&&b.closeOverlayOnScroll)a(window).off("scroll."+d).on("scroll."+d,function(){a(".conversation-toolbar-wrapper.{0} .conversation-toolbar .toolbar-filter".format(e),b.context).triggerHandler("click.conversation_filter",[0,"scroll"])})}else a("body").off("click."+d),a(window).off("scroll."+d)});d.hasClass("bottom")&&a(".arrow .vb-icon",this).hasClass("vb-icon-triangle-up-wide")&&(c=a(".conversation-toolbar-wrapper.bottom .toolbar-filter-overlay",
b.context),a("html, body").animate({scrollTop:c.offset().top+c.innerHeight()},500))});a(".filtered-by",b.context).offon("click.conversation_filter",".js-remove-filter",function(){var d=a(this),f=d.closest(".filtered-by"),g=d.closest(".filter-text"),e=g.data("filter-name");a();f.data("clicked",!0);if(!l.isEnabled()&&b.allowHistory)return"text"==g.data("filter-type")&&g.data("filter-js-selector")?(f=vBulletin.makePaginatedUrl(location.href,1),location.href=vBulletin.makeFilterUrl(f,"q","",b.context,
b.hash,!0)):(f=vBulletin.makePaginatedUrl(location.href,1),location.href=vBulletin.makeFilterUrl(f,e,g.data("filter-value"),b.context,b.hash,!0)),!1;var h=a(".toolbar-filter-overlay .filter-options input[name={0}]".format(e),b.context).prop("checked",!1).filter(".js-default-checked");c.updatePageNumber(1);if("text"==g.data("filter-type")&&g.data("filter-js-selector")){a(g.data("filter-js-selector")).val("");var k=c.getSelectedFilters(a("form.toolbar-filter-overlay",b.context));delete k[e];c.setOption("customFilter",
k)}g.remove();g=f.find(".filter-text").length;0==g?(f.addClass("h-hide"),f.data("reset",!0)):1==g&&f.find(".clear-all").addClass("h-hide");1==h.length?(h.data("bypass-filter-display",!0),h.trigger("click.conversation_filter"),h.data("bypass-filter-display",null)):(k&&(f=vBulletin.makePaginatedUrl(location.href,1),f=vBulletin.makeFilterUrl(f,"q","",b.context),l.pushState({from:"filter",page:1,tab:b.tabParamAsQueryString?"#"+d.closest(".ui-tabs-panel").attr("id"):vBulletin.getSelectedTabHashOrPath(d.closest(".ui-tabs"),
!1),filters:k},document.title,f)),c.forceApplyFilters(),k&&c.setOption("customFilter",null))});a(".filtered-by",b.context).offon("click.conversation_filter",".clear-all",function(b){var d=a(this).closest(".conversation-toolbar-wrapper");a(this).data("clicked",!0);c.setOption("customFilter",null);c.resetFilters(!1,!1,d);b.preventDefault()});a(".conversation-toolbar .filter-wrapper",b.context).data("object-instance",c);a(".js-conversation-showmore-button",b.context).off("click").on("click",function(){var d=
parseInt(a('form.toolbar-filter-overlay input[name="pagenum"]',b.context).val());r=!1;c.updatePageNumber(d+1);c.applyFilters(!1,!0,!0)});a(".conversation-toolbar .toolbar-search-form",b.context).off("submit.filtersearch").on("submit.filtersearch",function(){var d=a(this.elements.q),f=a.trim(d.val()),g=a(this).closest(".conversation-toolbar-wrapper");d.val(f);if(!l.isEnabled()&&b.allowHistory){var e=vBulletin.makePaginatedUrl(location.href,1);location.href=vBulletin.makeFilterUrl(e,"q",f,g);return!1}d=
b.tabParamAsQueryString?"#"+a(this).closest(".ui-tabs-panel").attr("id"):vBulletin.getSelectedTabHashOrPath(a(this).closest(".ui-tabs"),!1);if(f){var h=c.getSelectedFilters(g.find(".toolbar-filter-overlay"));e={};e.q=f;a.extend(h,e);c.setOption("customFilter",h);c.forceApplyFilters();c.displayCustomFilterText(this.elements.q);l.isEnabled()&&(e=vBulletin.makePaginatedUrl(location.href,1),e=vBulletin.makeFilterUrl(e,"q",f,g),l.pushState({from:"filter",page:1,tab:d,filters:h},document.title,e))}else e=
g.find('.filter-text[data-filter-name="{0}"]'.format("q")),e.length&&(h=c.getSelectedFilters(g.find(".toolbar-filter-overlay")),c.setOption("customFilter",h),a(".x",e).trigger("click"),l.isEnabled()&&(e=vBulletin.makePaginatedUrl(location.href,1),e=vBulletin.makeFilterUrl(e,"q",f,g),l.pushState({from:"filter",page:1,tab:d,filters:h},document.title,e)));return!1})})();this.isFilterSelected=function(d){return a('.toolbar-filter-overlay input[value="'+d+'"]',b.context).is(":checked")};this.getSelectedFilters=
function(a){return vBulletin.getSelectedFilters(a,!1)};this.resetFilterForms=function(d){if(!d||d instanceof a&&!d.length)d=b.context;a(".toolbar-filter-overlay .js-default-checked",d).prop("checked",!0);a(".toolbar-search-form .js-filter-search",d).val("")};a(".toolbar-filter-overlay, .toolbar-search-form",b.context).trigger("reset");if(l.isEnabled()){m=l.getState();if(!m||a.isEmptyObject(m.data)){a(b.context).hasClass("ui-tabs-panel")?a(b.context).attr("id"):a(".conversation-toolbar-wrapper",b.context).closest(".ui-tabs-panel").attr("id");
var u={from:"filter",page:Number(a(".pagenav-form .defaultpage",b.context).val())||1,tab:vBulletin.getSelectedTabHashOrPath(a(b.context).closest(".ui-tabs"),b.tabParamAsQueryString),filters:c.getSelectedFilters(a("form.toolbar-filter-overlay",b.context))};l.setDefaultState(u,document.title,location.href)}l.setStateChange(function(d,f,g){var e=l.getState();if("filter"==e.data.from||"pagination"==f||"tabs"==f){l.log(e.data,e.title,e.url);var h;e.data.tab&&(h=b.tabParamAsQueryString?a(e.data.tab):a('.ui-tabs .ui-tabs-panel[data-url-path="'+
e.data.tab+'"]'));d=h&&h.length&&h||b.context;if("pagination"==f){if(g){f=a(".filtered-by",d);var k=a(".toolbar-filter-overlay .filter-options-list",d),w=!1;a(".filter-text",f).filter('[data-filter-name!="q"]').remove();a(".clear-all",f).addClass("h-hide");k.find(".js-default-checked").prop("checked",!0);a.each(g,function(b,d){b=a('input[name="{0}"][value="{1}"]'.format(b,d),k);b.length&&(b.prop("checked",!0).trigger("change",[!0,e.data.page]),w=!0)});w||(k.first().data("bypass-filter-display",!0).trigger("change",
[!0,e.data.page]).data("bypass-filter-display",null),f.addClass("h-hide"))}}else g=a(d).closest(".ui-tabs"),f=b.tabParamAsQueryString?g.find('.ui-tabs-nav > li > a[href*="{0}"]'.format(e.data.tab)):g.find('.ui-tabs-nav > li > a[data-url-path="'+e.data.tab+'"]'),f.parent().hasClass("ui-tabs-active")?(g=c.getSelectedFilters(a(".toolbar-filter-overlay",d)),f=a(".conversation-toolbar .filter-wrapper",d).data("object-instance")||c,vBulletin.areJsonObjectsEqual(g,e.data.filters)||(f.setOption("context",
d),f.updatePageNumber(e.data.page),f.applyHistoryFilters(e.data))):(d=f.parent().index(),vBulletin.selectTabByIndex.call(g,d))}},"filter")}this.displayCustomFilterText=function(b,c){n(b,c||a(b).val())};this.isHistoryEnabled=function(){return l.isEnabled()};this.resetFilters=function(d,f,g){if(!g||g instanceof a&&!g.length)g=b.context;var e=a(".filtered-by",g).addClass("h-hide"),h=location.pathname.replace(/\/page[0-9]+/,"");if(b.tabParamAsQueryString){var k=vBulletin.parseQueryString(location.search);
k.tab?h+="?tab="+k.tab:k.view&&(h+="?view="+k.view)}a(".clear-all",e).addClass("h-hide");a(".filter-text",e).remove();c.resetFilterForms(g);if(!d)if(l.isEnabled()){e.data("reset",!0);c.updatePageNumber(1);k=c.getSelectedFilters(a("form.toolbar-filter-overlay",g));if(f){var w=a(".toolbar-search-form .js-filter-search",g).val("");delete k[w.attr("name")];c.setOption("customFilter",k)}c.forceApplyFilters();u={from:"filter",page:1,tab:b.tabParamAsQueryString?"#"+e.closest(".ui-tabs-panel").attr("id"):
vBulletin.getSelectedTabHashOrPath(e.closest(".ui-tabs"),!1),filters:k};l.pushState(u,document.title,h)}else b.allowHistory&&(location.href=h);"function"==typeof b.afterResetFilters&&b.afterResetFilters.apply(this,arguments);return c};this.applyHistoryFilters=function(d){if(d&&d.filters&&!a.isEmptyObject(d.filters)){var f=b.tabParamAsQueryString?a(d.tab):a('.ui-tabs .ui-tabs-panel[data-url-path="'+d.tab+'"]'),g=a(".toolbar-filter-overlay",f);"undefined"!=typeof c.lastFilters&&delete c.lastFilters;
c.resetFilters(!0,!1,f);a.each(d.filters,function(b,c){b=a('[name="'+b+'"]',g);"hidden"==b.attr("type")?b.val(c):"radio"==b.attr("type")&&c!=d.filtervalue&&b.filter('[value="'+c+'"]').prop("checked",!0)});var e=vBulletin.parseQueryString(location.href),h=!0,k=function(){a(".toolbar-search-form .js-filter-search",f).val("")};a.isEmptyObject(e)?k():a.each(e,function(b,c){var e=a('.filter-options-list input[name="{0}"][value="{1}"]'.format(b,c),g);e.length?d.filtername==b&&d.filtervalue==c?(h=!1,e.prop("checked",
!0).trigger("change",[!0])):n(e.get(0)):(e=a('.toolbar-search-form .js-toolbar-search-inner input[name="{0}"]'.format(b),f),e.length&&c?(n(e.get(0),c),e.val(c)):k())});h&&(c.setOption("customFilter",d.filters),c.forceApplyFilters(),c.setOption("customFilter",null))}return c};this.forceApplyFilters=function(){"undefined"!=typeof c.lastFilters&&delete c.lastFilters;r=!0;c.applyFilters(!1,!0);return c};this.applyFilters=function(d,f,g,e){if("function"==typeof b.beforeApplyFilters&&!1===b.beforeApplyFilters.apply(this,
arguments))return c;var h=a(".toolbar-filter-overlay",b.context);f&&clearTimeout(p);var k={filters:b.customFilter?b.customFilter:c.getSelectedFilters(h),isAjaxTemplateRender:!0,isAjaxTemplateRenderWithData:!0};if(a.isEmptyObject(k.filters))return c;d&&(k.filters.checkSince=q,k.filters.pagenum=1);e?r=!0:h.find('input[name="result-id"]').val(0).length&&(k.filters["result-id"]=0);if("undefined"!=typeof this.lastFilters&&vBulletin.areJsonObjectsEqual(this.lastFilters.filters,k.filters)&&!d)return c;this.lastFilters=
k;var l=a(".conversation-empty",b.context),m=a(".conversation-toolbar-wrapper",b.context);m.addClass("h-disabled");l.addClass("h-invisible");d&&window.vBulletin.loadingIndicator.suppressNextAjaxIndicator();var n=vBulletin.normalizeAjaxUrl(h.attr("action"))||vBulletin.getAjaxBaseurl()+"/activity/get",u=h.closest(".conversation-toolbar-wrapper").find('form.pagenav-form input[name="article_display_columns"]');1==u.length&&(k.article_display_columns=u.val());var v=a(".conversation-list",b.context);vBulletin.AJAX({url:n,
data:k,api_error:function(a){a=a[0];v.addClass("h-hide");a=vBulletin.phrase.get(a);l.html((a||"").replace(/<br\s*\/*>/g," ")).removeClass("h-hide h-invisible")},success:function(e){l.addClass("h-hide");if(d)!t&&0<e.total&&!a("body").hasClass("edit-mode")&&(a(".new-conversations-strip span",b.context).html(e.total),a(".new-conversations-strip",b.context).fadeIn("slow")),0==a(".conversation-list li.list-item",b.context).length&&l.removeClass("h-hide");else{var f=a(".js-conversation-showmore",b.context);
a(".new-conversations-strip",b.context).hide();if((0<e.total_with_sticky||0<e.total)&&e.template){e.resultId&&(a('input[name="result-id"]',h).val(e.resultId).length&&this.lastFilters&&(this.lastFilters.filters["result-id"]=e.resultId),b.pagination&&b.pagination.updateResultId(e.resultId));g?v.append(e.template):(l.addClass("h-hide"),v.html(e.template).removeClass("h-hide"));e.fixFlexGrid&&vBulletin.initFlexGridFixLastRowAll();var m=k.filters,n=parseInt(m.maxpages);m=parseInt(m.pagenum);var p=e.pageinfo;
n=n&&m>=n||p&&(m>=parseInt(p.totalpages)||!1===p.showseemore);f.toggleClass("h-hide",n)}else g||(l.removeClass("h-hide"),v.addClass("h-hide").empty());0==e.total_with_sticky&&f.addClass("h-hide");r&&b.scrollToTop&&(f=b.scrollToTop instanceof a?b.scrollToTop:a(b.scrollToTop),0<f.length&&a("body,html").animate({scrollTop:f.offset().top},"slow"));q=e.lastDate;"function"==typeof b.onContentLoad&&b.onContentLoad.apply(v.get(0),[e]);e.pageinfo&&(c.updatePageNumber(e.pageinfo.pagenumber||1),b.pagination&&
"function"==typeof b.pagination.updatePageInfo&&(b.pagination.setOption("context",b.context),b.pagination.updatePageInfo(e.pageinfo,!0)));vBulletin.inlinemod&&"function"==typeof vBulletin.inlinemod.init&&0<a(".moderationmenu_container",b.context).length&&vBulletin.inlinemod.init(b.context);a(document).trigger("vb-filterposts",{parentOfInsertedHtml:v})}t&&(t=!1)},error_phrase:"unable_to_contact_server_please_try_again",complete:function(){m.removeClass("h-disabled");l.removeClass("h-invisible");!t&&
b.autoCheck&&p&&(p=setTimeout(c.checkNewConversations,b.checkInterval))}});return c};this.updatePageNumber=function(d){d=Number(d);0<d&&a('form.toolbar-filter-overlay input[name="pagenum"]',b.context).val(d);return c};this.checkNewConversations=function(){a("body").hasClass("edit-mode")||(console.log("Checking for new activity since "+q),c.applyFilters(!0));return c};this.toggleNewConversations=function(a){a?(b.autoCheck=!0,p=setTimeout(c.checkNewConversations,b.checkInterval)):(b.autoCheck=!1,clearTimeout(p));
return c};this.hideFilterOverlay=function(){a(".conversation-toolbar-wrapper .toolbar-filter-overlay",b.context).filter(":visible").each(function(){a(this).prev(".conversation-toolbar").find(".toolbar-filter").triggerHandler("click.conversation_filter",[0])});return c};this.getOption=function(a){return b[a]};this.setOption=function(a,f){b[a]=f;return c};b.autoCheck&&(q=pageData.current_server_datetime,p=setTimeout(c.checkNewConversations,b.checkInterval))};vBulletin.conversation.displaySelectedFilterText=
function(m,n,c){var q=a(m);if(1!=q.data("bypass-filter-display")){c=c||q.closest(".conversation-toolbar-wrapper");var p=a(".filtered-by",c).removeClass("h-hide").find(".filter-text-wrapper").show(),t=a(".filter-text[data-filter-name={0}]".format(m.name),p);if("radio"==m.type){n=q.next("span").html();var r=a('<div class="filter-text" data-filter-name="{0}" data-filter-value="{1}"><span title="{2}">{3}</span><span class="js-remove-filter b-icon b-icon__x-circle"></span></div>'.format(m.name,vBulletin.htmlEntities(m.value),
q.closest(".filter-options").prev(".filter-header").html()+" - "+n,("filter_new_topics"==m.name||"filter_depth"==m.name||-1!=m.value.indexOf("_all")&&"time_all"!=m.value?(q.closest("li").find(".filter-header").html()||"")+" - ":"")+n))}else"text"==m.type&&(n="&quot;"+JShtmlEncode(n)+"&quot;",r=a('<div class="filter-text" data-filter-name="{0}" data-filter-value="{1}"><span title="{2}">{3}</span><span class="js-remove-filter b-icon b-icon__x-circle"></span></div>'.format(m.name,vBulletin.htmlEntities(m.value),
q.data("filter-name")+": "+n,n)).data("filter-type","text"),(q=q.attr("class").match(/js-.*/))&&r.data("filter-js-selector","."+q[0]));if(0<t.length)t.replaceWith(r);else{var b=[],l=!1;a(".toolbar-filter-overlay > ul > li",c).each(function(){b.push(a("input:first",this).attr("name"))});a(".filter-text",p).each(function(){var c=a(this);if(a.inArray(m.name,b)<a.inArray(c.attr("data-filter-name"),b))return c.before(r),l=!0,!1});l||p.append(r);1<a(".filter-text",p).length&&p.next(".clear-all").removeClass("h-hide")}}}})(jQuery);
;

// ***************************
// js.compressed/conversationcommon.js
// ***************************
vBulletin.precache("answer_must_be_approved_published compare_versions edit_conversation error_loading_post error_saving_vote flag_a_post no_one_voted onbeforeunload_message_while_editing_post people_who_liked please_enter_your_reason_why_you_want_to_flag_this_post send_report the_report_has_been_sent topic_answered you_have_a_pending_edit_unsaved".split(" "),[]);vBulletin.ensureObj("conversation");
$.extend(vBulletin.conversation,function(b,h){function r(a){var d=b(this),e,c=d.closest(".conversation-list");0<d.closest(".js-comments").length&&(e="comment");var f=b(".edit-conversation-container form",c);if(0<f.length)vBulletin.warning("edit_conversation","you_have_a_pending_edit_unsaved",function(){vBulletin.animateScrollTop(f.closest(".js-post").offset().top,{duration:"slow"})});else{vBulletin.loadingIndicator.show();a.preventDefault();var g=d.parent().attr("data-node-id"),k="comment"==e?d.closest(".js-comment"):
d.closest(".js-post__content-wrapper");var h=c.hasClass("thread-view")?"thread":c.hasClass("full-activity-view")?"full-activity-stream":c.hasClass("activity-view")?"activity-stream":"stream";e=e||k.attr("data-node-type")||"";a=b(".js-show-post-link",k).text()||"1";var l="comment"!=e||"thread"!=h&&1!=c.closest(".blog-conversation-content-widget").length?Number(a.replace("#",""))-1:Number(a.replace("#",""));var t=function(a,c,f,p){var q=b(".edit-conversation-container form",k).data("content-type");
!1===vBulletin.triggerHandler.apply(p.get(0),["afterSave",b(document),a])?(b("body").trigger(q+"_editform_onunload",[k]),window.vBulletin.loadingIndicator.hide()):(c=pageData,c["posts-perpage"]=vBulletin.conversation.POSTS_PER_PAGE,"thread"==h&&(c["comments-perpage"]=vBulletin.conversation.COMMENTS_PER_PAGE),a&&vBulletin.ajaxtools.hasError(a.warnings,"warning_spam_post")?vBulletin.ajaxtools.showApiError(a.warnings,a,{title_phrase:"warning",after_error:function(){a.warningReturnUrl?location.href=a.warningReturnUrl:
window.location.reload(!0)}}):b.post(vBulletin.getAjaxBaseurl()+"/create-content/loadnode",{nodeid:g,view:h,index:l,page:c,type:e,isAjaxTemplateRender:!0,isAjaxTemplateRenderWithData:!0},function(a){if(a.error)openAlertDialog({title:vBulletin.phrase.get("conversation"),message:vBulletin.phrase.get(a.error),iconType:"error"});else{var c=p.closest(".js-content-entry").data("current-channelid"),e=p.find('input[name="parentid"]:checked').val();if(0<c&&0<e&&c!=e)location.reload(!0);else{b("body").trigger(q+
"_editform_onunload",[k]);c=b(a.template);e=d.closest(".js-post");var f=e.parent();e.replaceWith(c);c=f.find(".js-post").filter((a,c)=>b(c).data("node-id")==g);a.hasOwnProperty("template_article_title_info")&&(e=b(".js-update-article-title-info"),f=b(a.template_article_title_info),0<e.length&&e.empty().append(f));b("body").trigger(q+"_newcontent_onload",[c]);b(document).trigger("vb-loadnode",{insertedHtml:c,context:"conversationcommon"});c.hasClass("js-conversation-starter")&&(e=b(".js-post-title",
c).first().text(),f=e+" - "+vBulletin.options.get("bbtitle"),"topic_url"in a&&(a=pageData.baseurl+a.topic_url,a!=location.href&&window.history.replaceState({},f,a)),document.title=f,b(".page-title-widget .js-main-title").text(e));b(".js-select-box",c).selectBox();vBulletin.animateScrollTop(c.offset().top,{duration:"slow"})}}},"json").error(function(){openAlertDialog({title:vBulletin.phrase.get("conversation"),message:vBulletin.phrase.get("error_loading_post"),iconType:"error"})}).complete(function(){window.vBulletin.loadingIndicator.hide()}))};
b.post(vBulletin.getAjaxBaseurl()+"/create-content/loadeditor",{nodeid:g,type:e,view:h,isAjaxTemplateRender:!0},function(a,c){if(c)vBulletin.error("edit_conversation",c[0]);else{var d=function(){if("undefined"==typeof vBulletin.upload||"undefined"==typeof vBulletin.tagEditor||"undefined"==typeof vBulletin.contentEntryBox.init)vBulletin.ckeditor.loadScripts("",{},d);else{k.addClass("b-post--edit");k.find(".js-post__content").first().addClass("b-post__content--edit");k.find(".b-post__footer").first().addClass("b-post__footer--edit");
$container=k.find(".edit-conversation-container").first();k.closest(".js-album-detail").find(".conversation-body, .profile-media-uploadphotos, .js-photo-preview").addClass("h-hide-imp");vBulletin.contentEntryBox.init();vBulletin.hv.init($container.find(".js-human-verification"));vBulletin.contentEntryBox.setDefaultTab($container.find(".js-content-entry").first());$container.show();vBulletin.loadingIndicator.hide();var a=$container.find(".js-attach-list");vBulletin.upload.initializePhotoUpload(k);
var c=".js-post[data-node-id={0}] .tag-editor-container .tag-input".format(g);$tagEditorBox=b(c);0<$tagEditorBox.length&&"undefined"!=typeof vBulletin.tagEditor&&new vBulletin.tagEditor.instance(c);0<a.data("attach-count")&&(a=$container.find(".b-toolbar__item").filter(function(){return"b-content-entry-panel__content--attachment"==b(this).data("panel")}),a.hasClass("b-toolbar__item--active")||a.trigger("click"));vBulletin.contentEntryBox.afterPanelChange(k);vBulletin.flatpickr&&vBulletin.flatpickr.initPickers()}};
console.log("Edit mode: Adding Content Entry UI to DOM (contains parsed post text in the .js-editor-parsed-text element)");b(".edit-conversation-container",k).first().hide().html(a);var e=b(".edit-conversation-container form",k).data("content-type");b(window).off("beforeunload.editPost").on("beforeunload.editPost",function(){return vBulletin.phrase.get("onbeforeunload_message_while_editing_post")});b("body").trigger(e+"_editform_onload",[k,d]);vBulletin.ajaxForm.apply(b("form.js-contententry-form",
k),[{dataType:"json",success:t,beforeSerialize:function(a){console.log("ajaxForm beforeSerialize (vBulletin.conversation.editPost)");a.trigger("beforeSave");return!1===b("body").triggerHandler(e+"_editform_onbeforeserialize",[a])?!1:!0},beforeSubmit:function(a,c,d){if(!1===vBulletin.contentEntryBox.validateForm.apply(c,[d]))return!1;b(window).off("beforeunload.editPost");window.vBulletin.loadingIndicator.show();return!0},complete:function(){window.vBulletin.loadingIndicator.hide();console.log("ajaxForm complete (vBulletin.conversation.editPost)")}}])}},
"json").error(function(a,b,c){openAlertDialog({title:vBulletin.phrase.get("edit_conversation"),message:"HTTP {0} - {1}".format(a.status,c),iconType:"error"})}).complete(function(a,b,c){window.vBulletin.loadingIndicator.hide()})}}function m(a,d=3){var e=0,c=b("ul.poll li",a),f=parseInt(c.css("line-height"),10);c.each(function(a){b(this).removeClass("h-hide");a=b(this).height();e+=a/f;e>d?b(this).addClass("h-hide"):b(this).css("display","")});c=e>d;b(".view-more-ctrl",a).toggleClass("h-hide",!c).next(".js-button-group").toggleClass("h-hide",
c).next(".view-less-ctrl").addClass("h-hide")}function l(a){return a.closest(".js-post").data("node-id")}function u(){var a=b(this),d=a.data("post-ip");a.data("post-host");g.register(["ip_info","ip_address_is","host_name_is","no_ip_found"]);d?(openAlertDialog({title:g.get("ip_info"),message:g.get("ip_address_is")+": "+d+"<br />"+g.get("host_name_is")+': <span class="ip-host-name loading">...</span>',iconType:"none"}),h.AJAX({call:"/ajax/api/node/getHostName",data:{ip:d},success:function(a){b(".ip-host-name").removeClass("loading").html(a)}})):
h.alert("ip_info","no_ip_found");return!1}function v(){var a=b(this).closest(".js-post"),d=a.data("node-id");b("body").css("cursor","wait");if(b(this).hasClass("voted")){var e="unvote";var c="vote_cap";var f=!1}else e="vote",c="unvote_cap",f=!0;h.AJAX({call:"/ajax/api/reputation/"+e,data:{nodeid:d},success:function(b){a.find(".votecount").html(b.votes);a.find(".js-post-control__vote").toggleClass("voted",f).find(".b-post-control__label").text(g.get(c))},complete:function(){b("body").css("cursor",
"default")},title_phrase:"error_saving_vote"})}function w(){var a=b(this),d=l(a);y.apply(a,"qtip-whovoted",{content:{title:{text:g.get("people_who_liked"),button:!0},text:function(a,c){h.AJAX({call:"/ajax/api/reputation/fetchWhovoted",data:{nodeid:d},success:function(a){if(1>a.length)var d=g.get("no_one_voted");else{d="<ul>";for(x in a){var e=pageData.baseurl+a[x].profileurl,f=pageData.baseurl_core+"/"+(a[x].avatarurl?a[x].avatarurl:"image.php?u="+a[x].userid+"&type=profile"),h=b("<img>").attr("src",
f).attr("alt",a[x].username),l=b("<a>").attr("href",e).addClass("avatar"),m=b("<a>").attr("href",e).addClass("username").html(a[x].musername);f=b("<li>").addClass("whovoteditem");var n=b("<div>").addClass("usertitle").html(a[x].usertitle);l.append(h);f.append(l);f.append(m);a[x].doshowdisplayname&&(e=b("<div>").addClass("usertitle").append(b("<a>").attr("href",e).html(a[x].username)),f.append(e));f.append(n);d+=b("<div>").append(f).html()}d+="</ul>"}console.log(d);c.set("content.text",d)}});return g.get("working_ellipsis")}},
show:{event:"click",ready:!0},hide:{event:"unfocus",fixed:!0}})}function z(){var a=l(b(this)),d=n({title:g.get("flag_a_post"),message:g.get("please_enter_your_reason_why_you_want_to_flag_this_post"),buttonLabel:{okLabel:g.get("send_report"),cancelLabel:g.get("cancel")},multiline:!0,validation:{callback:n.validationString,showError:!0},onClickOK:function(e){b("body").css("cursor","wait");h.AJAX({call:"/report/report",data:{reason:e,reportnodeid:a},success:function(a){d.dialog("close");h.alert("flag_a_post",
"the_report_has_been_sent")},complete:function(){b("body").css("cursor","default")},error_phrase:"unable_to_contact_server_please_try_again",title_phrase:"flag_a_post"});return!1}});return!1}function A(){var a=b(this).closest(".js-comment-entry__parent").find(".js-comment-entry");a.slideToggle("fast",function(){var a=b(this).find(".js-comment-entry__textbox");a.is(":visible")&&a.trigger("focus")});a.find(".js-comment-entry__cancel").offon("click.convocom",function(b){a.slideToggle();return!1});return!1}
function B(){function a(a,b,d){d.isAjaxTemplateRenderWithData=!0;h.AJAX({call:"/ajax/render/"+b,data:d,success:function(b){a.removeClass("loading").find(".dialog-content .message").html(b.template).end().dialog("option","position",{of:window})},after_error:function(){a.dialog("close")}})}var d=l(b(this)),e=openConfirmDialog({title:g.get("post_history"),message:g.get("loading")+"...",width:800,dialogClass:"post-history-dialog dialog-container dialog-box loading",buttonLabel:{yesLabel:g.get("compare_versions"),
noLabel:g.get("cancel")},onAfterClose:function(){if("btnConfirmDialogYes"==this.id){var c=e.find(".post-history-form");b("#btnConfirmDialogYes").hide();var f=openConfirmDialog({title:g.get("post_history"),message:g.get("loading")+"...",width:800,dialogClass:"post-history-comparison-dialog dialog-container dialog-box loading",buttonLabel:{yesLabel:g.get("compare_versions"),noLabel:g.get("close")},onAfterClose:function(){b("#btnConfirmDialogYes").show()}});c={oldpost:c.find("input:radio[name=old]:checked").val()||
1,newpost:c.find("input:radio[name=new]:checked").val()||1,nodeid:d};a(f,"post_history_form",c)}}});a(e,"post_history_form",{nodeid:d})}function C(){var a=b(this),d=l(a);a=!a.closest(".js-post").hasClass("isanswer");var e=vBulletin.getSelectedFilters(b(".toolbar-filter-overlay"));b("body").css("cursor","wait");h.AJAX({call:"/create-content/setExclusiveAnswer",data:{nodeid:d,set:a?1:0,searchFilters:e,isAjaxTemplateRender:!0,isAjaxTemplateRenderWithData:!0},success:function(a){b(".js-post.isanswer").toggleClass("isanswer",
!1);a.answers&&0<a.answers.length&&a.answers.forEach(a=>{b(".js-post[data-node-id="+parseInt(a,10)+"]").toggleClass("isanswer",!0)});let d=b(".js-post.pinned-answer");d.length&&d.hide("slow",()=>{d.remove()});if(a.template){var c=b(".js-conversation-starter");a=b(a.template);a.hide();a.insertAfter(c).show("slow")}},complete:function(){b("body").css("cursor","default")},error_phrase:"unable_to_contact_server_please_try_again",title_phrase:"setasanswer"});return!1}var g=h.phrase,y=h.qtip,n=h.openPromptDialog;
return{initContentEvents:function(a){a.offon("click.convocom",".js-post-control__ip-address",u);a.offon("click.convocom",".js-post-control__vote",function(a){v.apply(this,[a]);return!1});a.offon("click.convocom",".js-bubble-flyout",function(a){w.apply(a.target,[a]);a.stopPropagation();return!1});a.offon("click.convocom",".js-post-control__edit",r);a.offon("click.convocom",".js-post-control__flag",z);a.offon("click.convocom",".js-post-control__comment",A);a.offon("click.convocom",".js-post__history",
B);a.offon("click.convocom",".js-post-control__answer",C)},initPollEvents:function(a){a.offon("click.convocom",".list-item-poll .view-more-ctrl",function(a){var d=b(this).closest("form.poll");a=d.find("ul.poll");b(this).addClass("h-hide");a.css("max-height","none").find("li.h-hide").slideDown(100,function(){d.find(".js-button-group").removeClass("h-hide").next(".view-less-ctrl").removeClass("h-hide");h.animateScrollTop(d.offset().top,{duration:"fast"})});return!1});a.offon("click.convocom",".list-item-poll .view-less-ctrl",
function(a){a=b(this).closest("form.poll");m(a,3);a.find("ul.poll").css("max-height","").find("li.h-hide").slideUp(100);return!1})},limitVisiblePollOptionsInAPost:m}}(jQuery,vBulletin));
;

// ***************************
// js.compressed/channel_conversation.js
// ***************************
vBulletin.precache(["closed","this_topic_is_closed"],[]);
(function(c){if(!vBulletin.pageHasSelectors([".forum-channel-content-widget",".blog-channel-content-widget",".sg-channel-content-widget",".search-results-widget .topic-list-container"]))return!1;var h={};vBulletin.conversation.editTopicTitle=function(a){a=c(a.target).closest(".js-topic-item");var b=a.find(".js-topic-wrapper"),g=a.data("node-id");a.data("can-edit-title")&&!h[g]&&(h[g]="edit",0==b.find(".js-loading-icon").length&&c('<img class="loading-icon js-loading-icon" src="'+pageData.baseurl+
'/images/misc/progress.gif" />').appendTo(b),b.find(".js-loading-icon").show(),vBulletin.AJAX({call:"/create-content/loadtitleedit",data:{nodeid:g,isAjaxTemplateRender:!0},success:function(d){b.find(".js-topic-title").hide();b.find(".js-loading-icon").hide();b.find(".js-topic-title").after(d);d=b.find(".js-topic-title-edit");d.data("original-title",d.val());var a=30;b.find(".js-prefix, .js-post-icon, .js-topic-prefix, .js-go-to-first-unread").each(function(){a+=c(this).outerWidth(!0)});d.outerWidth(d.outerWidth()-
a);b.find(".js-topic-title-edit-form").on("submit",vBulletin.conversation.saveTopicTitle);d.on("blur",vBulletin.conversation.saveTopicTitle);d.trigger("select").trigger("focus")}}))};vBulletin.conversation.saveTopicTitle=function(a){a.preventDefault();var b=c(a.target).closest(".js-topic-wrapper");a=b.find(".js-topic-title-edit-form");var g=a.find(".js-node-id").val(),d=a.find(".js-topic-title-edit").val();"save"!=h[g]&&(h[g]="save",b.find(".js-topic-title-edit").data("original-title")==d?(b.find(".js-loading-icon").remove(),
b.find(".js-topic-title-edit-form").remove(),b.find(".js-topic-title").show(),h[g]=!1):(b.find(".js-loading-icon").appendTo(a).show(),vBulletin.AJAX({call:"/create-content/savetitleedit",data:{nodeid:g,title:d},success:function(c){b.find(".js-topic-title-edit-form").remove();b.find(".js-topic-title").html(c.title).show()},complete:function(){b.find(".js-loading-icon").remove();h[g]=!1}})))};vBulletin.conversation.openOrCloseTopic=function(a){a.stopPropagation();var b=c(this),g=b.closest(".js-topic-item"),
d=g.find(".js-topic-wrapper");a=g.data("node-id");var n=g.hasClass("closed");0==d.find(".js-loading-icon").length&&c('<img class="loading-icon js-loading-icon" src="'+pageData.baseurl+'/images/misc/progress.gif" />').appendTo(d);var k=d.find(".js-loading-icon");k.show();vBulletin.AJAX({call:"/ajax/api/node/"+(n?"openNode":"closeNode"),data:{nodeid:a},error_phrase:"error_open_close_topic",api_error:function(b){var c=vBulletin.ajaxtools;if(c.hasError(b,"inlinemodauth_required"))return!0;c.logApiError(b)},
complete:function(){k.hide()},success:function(a){g.toggleClass("closed",!n);a=b.attr("title")||"";var f=vBulletin.phrase.get("this_topic_is_closed");subStrIndex=a.indexOf(f);n&&0<=subStrIndex?(a=(a.slice(0,subStrIndex)+a.slice(subStrIndex+f.length)).trim(),b.attr("title",a)):!n&&0>subStrIndex&&b.attr("title",f+" "+a);a=d.find(".js-prefix");f=[];var k=vBulletin.phrase.get("closed");if(a.length){var e=a.text().trim();":"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1));0<e.length&&(f=e.split(", "));
if(!n)f.push(k);else if(0<f.length)for(e=f.length-1;0<=e;e--)f[e]==k&&f.splice(e,1)}else a=c('<span class="prefix js-prefix"></span>'),e=d.find(".js-go-to-first-unread"),e.length?a.insertAfter(e):a.prependTo(d),n||f.push(k);a.text(f.join(", ")+": ");a.toggle(0!=f.length)}})};c(function(){vBulletin.conversation=vBulletin.conversation||{};var a=vBulletin.tabtools,b=c(".channel-content-widget .channel-conversation-list-wrapper"),g=c("#media-tab",b),d,n,k,h,f,u,e,B,v=!0,w,p=b.find(".widget-tabs-nav .ui-tabs-nav > li"),
r=p.filter(".ui-tabs-active"),x=r.index(),t="1"==p.parent().data("allow-history"),D=new vBulletin.history.instance(t);-1==x&&(x=0,r=p.first());var y=r.find("> a").attr("href");var C=function(a){return b.offset().top+(b.outerHeight()-parseFloat(b.css("border-bottom-width")))-a.height()},z=function(a,b){var d=b.filter;b.pagination&&b.pagination.setOption("context",a);d.setOption("context",a);"undefined"!=typeof d.lastFilters&&0<c(".conversation-empty:not(.h-hide)",a).length&&delete d.lastFilters},A=
function(b,d,e,f,g,h,E){h=c(".conversation-list",b);return a.newTab(b,d,e,f,g,h,E,c.noop,t)};a.initTabs(b,D,p,t,x,y,[h,n,u],!0,function(a,p,r){var l=c(r),m="#"+l.prop("id");a=y==m;"#activity-stream-tab"!=m&&"#article-tab"!=m&&k&&h.toggleNewConversations(!1);"#topic-tab"!=m&&d&&n.toggleNewConversations(!1);if("#activity-stream-tab"==m||"#article-tab"==m)k?z(l,k):(k=A(l,b,!0,!0,a,null),h=k.filter),h.applyFilters(!1,!0);else if("#subscribed-tab"==m)f?z(l,f):(f=A(l,b,!0,!0,a,null),u=f.filter),u.applyFilters(!1,
!1);else if("#topic-tab"==m)d?z(l,d):(d=A(l,b,!0,!0,a,function(){vBulletin.markreadcheck()}),n=d.filter),n.applyFilters(!1,!0);else if("#media-tab"==m){if(e)v=!0;else{e=c(".conversation-toolbar-wrapper.scrolltofixed-floating",g);B=new vBulletin.scrollToFixed({element:e,limit:C(e)});var q=new vBulletin.history.instance(t);if(q.isEnabled()){a=q.getState();if(!a||c.isEmptyObject(a.data))a={from:"filter",page:1,tab:m,filters:vBulletin.getSelectedFilters(c("form.toolbar-filter-overlay",l))},q.setDefaultState(a,
document.title,location.href);q.setStateChange(function(a,b,d){a=q.getState();"filter"==a.data.from&&(q.log(a.data,a.title,a.url),m!=a.data.tab?vBulletin.selectTabByIndex.call(c(p).closest(".ui-tabs-nav"),p.index()):(a=c('.media-filter-overlay input[name="filter_time"][value="{0}"]'.format(a.data.filters.filter_time),l).prop("checked",!0),a.hasClass("js-default-checked")&&a.prop("defaultChecked")?c(".filtered-by .x",l).trigger("click"):a.trigger("change",[!0])))},"filter")}y==m&&(v=!1)}v&&0==c("#profileMediaDetailContainer .js-album-detail",
l).length&&(w||(w=vBulletin.media.calculatePhotosPerPage(vBulletin.media.TARGET_PHOTOS_PERPAGE)),vBulletin.media.loadGalleryById({nodeid:-2,channelid:pageData.channelid,pageno:1,dateFilter:c(".filter-options input[name=filter_time]:checked",l).val()||"time_lastweek",perpage:w},!0,{complete:function(){c(".profile-toolbar .media-toolbar-filter",g).removeClass("h-hide");B.updateLimit(C(e))}}))}});p=c(".conversation-list",b);vBulletin.conversation.initPollEvents(p);vBulletin.conversation.initContentEvents(p);
p.off("click",".js-comment-entry__post").on("click",".js-comment-entry__post",function(a){vBulletin.conversation.postComment.apply(this,[a,function(){h.updatePageNumber(1).applyFilters(!1,!0)}])});vBulletin.conversation.bindEditFormEventHandlers("all");c(document).off("dblclick",".js-cell-topic").on("dblclick",".js-cell-topic",vBulletin.conversation.editTopicTitle);c(document).off("dblclick",".js-open-close-topic").on("dblclick",".js-open-close-topic",vBulletin.conversation.openOrCloseTopic)})})(jQuery);
;

// ***************************
// js.compressed/tabs.js
// ***************************
/*/

/*
 This is intended to be self contained and should not refer to the
 vBulletin object, pageData or other framework.

 The filters for the toolbars are intimately connected to the tabs and are so included here.
 Not calling it tabfiltertools for brevity.

 This depends on the jquery ui tabs widget
*/
vBulletin.tabtools=function(n,p,w,x,y){function q(a){var b=$(".conversation-toolbar-wrapper",a);return"1"==(b.length?b:a).data("allow-history")}function r(a,b,f,h,l){var c=location.pathname.replace(/\/$/,"").replace(/\/page[0-9]+/,""),d=$(".toolbar-filter-overlay",a),g=z(d,!0);d=$(".pagenav-form .js-pagenum",a).val()||1;var m=$(".toolbar-search-form .js-filter-search",a).val()||"",k=$(a).closest(".canvas-widget"),e=q(a);e=new p.instance(e);k=k.data("widget-default-tab")||k.find(".ui-tabs-nav > li:first-child a").attr("href");
$.isEmptyObject(g)&&$(".conversation-toolbar .js-button-filters",a).each(function(){var a=$(".js-button-filter.js-checked:not(.js-default-checked)",this);a.length&&(g[a.data("filter-name")]=a.data("filter-name"))});f||(a=new RegExp("\\/("+h.join("|")+")/?$"),c=(a=c.match(a))?c.replace(new RegExp(a[0]),"/"+b):c+("/"+b));1<d&&e.isEnabled()&&(c+="/page"+d);f&&b&&k!="#"+b&&(g.tab=b,e.isEnabled()||(c+="?tab="+b));if(!e.isEnabled())return c+(l?"#"+l:"");m&&(g.q=m);b=$.param(g);return c+(b?"?"+b:"")+(l?
"#"+l:"")}function A(a,b,f,h,l,c){var d=$(this);if(d.length){var g=a instanceof p.instance;if(g&&a.isEnabled()){var m=c.create;c.create=function(b,c){var k=t(location.search,["_"]),e=Object.keys(k).length,g=B(d,h),l=a.getState();!(h&&1<e&&"undefined"!=typeof k.tab||!h&&0<e)||l&&!$.isEmptyObject(l.data)||a.setDefaultState({from:"tabs",tab:g},document.title,location.href);a.setStateChange(function(b){b=a.getState();if("tabs"==b.data.from){a.log(b.data,b.title,b.url);var k=f(b.data.tab),c=t(b.url,["tab",
"_"]);if(d.tabs("option","selected")!=k)C.call(d,k),$.isEmptyObject(c)||$(window).trigger("statechange.filter",["tabs",c]);else if($.isEmptyObject(c)){var e;b.data.tab&&(e=h?$(b.data.tab):$('.ui-tabs .ui-tabs-panel[data-url-path="'+b.data.tab+'"]'));e=e&&e.length&&e||$(d.closest(".canvas-widget").data("widget-default-tab"));b=$(".toolbar-filter-overlay .filter-options .js-default-checked",e);b.length?(b.prop("checked",!0).first().data("bypass-filter-display",!0).trigger("change",[!0]).data("bypass-filter-display",
null),$(".filtered-by",e).addClass("h-hide").find(".filter-text-wrapper").empty()):$(".conversation-toolbar .js-default-checked",e).first().trigger("click",[!0])}else $(window).trigger("statechange.filter",["tabs",c])}},"tabs");m.call(d[0],b,c)}}if(b&&g){var k=c.beforeActivate;c.beforeActivate=function(b,c){var e=c.newPanel,g=c.newTab;if(!1===k.call(this,b,c))return!1;c=h?e.attr("id"):g.find(".ui-tabs-anchor").data("url-path");var f=void 0;h||(f=[],d.find(".ui-tabs-nav > li > a, .widget-tabs-panel").each(function(a,
b){a=$(this).data("url-path");-1==$.inArray(a,f)&&f.push(a)}));if(!a.isEnabled())return e=r(e,c,h,f,l),location.href=e,!1;d.data("noPushState")?d.data("noPushState",null):(b={from:"tabs",tab:"#"+c},e=r(e,c,h,f),a.pushState(b,document.title,e))}}d.tabs(c)}return d}function u(a,b){return a.offset().top+(a.outerHeight()-parseFloat(a.css("border-bottom-width")))-b.height()}function D(a,b,f,h,l,c){h=$(".conversation-toolbar-wrapper.scrolltofixed-floating",a);var d=null,g=null,m=null;b&&0<h.length&&(d=
new y({element:h,limit:u(b,h)}));f&&(m=new x({context:a,allowHistory:l,onPageChanged:function(a,b){g.updatePageNumber(a);b||g.applyFilters(!1,!0,!1,!0)}}));g=new w({context:a,autoCheck:!1,scrollToTop:b,pagination:m,allowHistory:l,onContentLoad:c});return{$bar:h,$floating:d,pagination:m,filter:g}}function E(a){a.css("border-bottom","").filter(".stream-view.activity-view").find(".list-item-poll form.poll").each(function(a,f){$(this).is(":visible")&&$(".view-less-ctrl",this).hasClass("h-hide")&&F(this,
3)})}function v(a){a&&(G(a),E(a))}var t=n.parseQueryString,G=n.truncatePostContent,F=n.conversation.limitVisiblePollOptionsInAPost,B=n.getSelectedTabHashOrPath,z=n.getSelectedFilters,C=n.selectTabByIndex;ensureFun=n.ensureFun;return{initTabs:function(a,b,f,h,l,c,d,g,m){f.removeClass("ui-state-disabled");A.call(a,b,h,function(a){a=a||c;return f.filter('li:has(a[href*="'+a+'"])').first().index()},g,a.find(".js-module-top-anchor").prop("id"),{active:l,beforeActivate:function(a,b){for(var c;c<d.length;c++)d[c]&&
d[c].hideFilterOverlay()},create:function(a,b){m($(this),b.tab,b.panel)},activate:function(a,b){m($(this),b.newTab,b.newPanel)}})},newTab:function(a,b,f,h,l,c,d,g,m){var k=D(a,b,f,h,m,function(){k.$floating&&k.$floating.updateLimit(u(b,k.$bar));v(c);ensureFun(d)()});l&&(f=k.filter,v(c),ensureFun(g)(),f.lastFilters={filters:f.getSelectedFilters($(".toolbar-filter-overlay",a))});return k},tabAllowHistory:q}}(vBulletin,vBulletin.history,vBulletin.conversation.filter,vBulletin.pagination,vBulletin.scrollToFixed);
;

// ***************************
// js.compressed/link.js
// ***************************
vBulletin.precache(["attach_link","please_enter_link_url"],[]);(function(a){a(function(){vBulletin.conversation.bindEditFormEventHandlers("link");a(".b-content-entry .b-content-entry-panel__content--link").each(function(){a("body").trigger("link_editform_onload",[a(this)])})})})(jQuery);
;

// ***************************
// js.compressed/media.js
// ***************************
vBulletin.precache(["saving"],["commentminchars"]);vBulletin.ensureObj("media");
$.extend(vBulletin.media,function(b){function y(a){k&&k.length||(k=b("#mediaCurrentPage",a),m=b("#mediaPageCount",a),n=b("#mediaPreviousPage",a),t=b("#mediaNextPage",a))}function l(a){b("body").css("cursor","wait");var c=b(".js-profile-media-container",f);vBulletin.AJAX({call:"/ajax/render/profile_media_content",data:{userid:c.data("user-id"),pageno:a,perpage:c.data("perpage"),isAjaxTemplateRenderWithData:!0},success:function(c){b("#mediacontent").html(c.template);b("#profileMediaDetailContainer").empty();
b("#mediacontent").removeClass("h-hide");u(!1);d.currentMediaPage=a;p(b("#mediaList"),d.currentMediaPage);vBulletin.isScrolledIntoView(b("#profileTabs .profile-tabs-nav"))||b("html,body").animate({scrollTop:b("#profileTabs .profile-tabs-nav").offset().top},"slow")},complete:function(){b("body").css("cursor","auto")},title_phrase:"profile_media"})}function z(a){var c=a.currentTarget.id;if(b("#profileMediaDetailContainer").is(":visible"))return C(a),!1;"mediaCurrentPage"==c?(a=parseInt(k.val(),10),
0<a&&a<=parseInt(m.html(),10)?(l(a),v(a)):k.val(d.currentMediaPage)):"mediaPreviousPage"==c?1<d.currentMediaPage?(a=d.currentMediaPage-1,l(a),v(a)):n.addClass("h-disabled"):"mediaNextPage"==c&&(d.currentMediaPage<parseInt(m.html(),10)?(a=d.currentMediaPage+1,l(a),v(a)):t.addClass("h-disabled"));return!1}function v(a){var c=vBulletin.makePaginatedUrl(location.href,a);g.isEnabled()?(a={from:"media_filter",page:a||1,tab:f.data("url-path")?f.data("url-path"):"#"+f.attr("id")},g.pushState(a,document.title,
c)):q&&(location.href=c)}function C(a){if(!d.currentNodeId&&!d.currentUserId)return!1;a=a.currentTarget.id;var c=d.currentGalleryPage,b={pageno:null,perpage:vBulletin.media.calculatePhotosPerPage(vBulletin.media.TARGET_PHOTOS_PERPAGE)};if("mediaCurrentPage"==a){var h=parseInt(k.val(),10);if(0>=h||h>parseInt(m.html(),10))return k.val(c),!1}else if("mediaPreviousPage"==a)if(1<c)h=c-1;else return n.addClass("h-disabled"),!1;else if("mediaNextPage"==a)if(c<parseInt(m.html(),10))h=c+1;else return t.addClass("h-disabled"),
!1;b.pageno=h;r(b);return!1}function u(a){b("#profileMediaDetailContainer").toggleClass("h-hide",!a);b("#profileMediaContainer").toggleClass("h-hide",a);b(".media-tab .profile-toolbar .toolset-left > li").toggleClass("h-hide-imp",!a).has(".profile-media-upload, .profile-media-createvideo").toggleClass("h-hide-imp",a);n.closest("pagenav-controls").toggleClass("h-hide",a)}function p(a,c){a=Number(a.data("totalpages"))||Math.max(c,1);b(".media-tab .pagenav-controls-container");n.toggleClass("h-disabled",
1>=c);t.toggleClass("h-disabled",c>=a);k.val(c);m.text(a)}function r(a,c,e){var h=b("#profileMediaDetailContainer");c={nodeid:d.currentNodeId,userid:d.currentUserId,channelid:d.currentChannelid,pageno:1,dateFilter:f.find(".media-filter-overlay input[name=filter_time]:checked").val(),albumid:0};var w=b(".media-tab");a=b.extend({},c,a);if(!isNaN(a.nodeid)){let f;if(0!=a.nodeid){f=-1==a.nodeid?"profile_media_videolist":"profile_textphotodetail";b("body").css("cursor","wait");0==h.closest(".media-tab").length&&
w.append(d.profileMediaDetailContainer);b("#profileMediaContainer").closest(".tab").find("li.list-item-gallery").remove();var g=a.pageno;c={nodeid:a.nodeid,userid:a.userid,channelid:a.channelid,pageno:g,albumid:a.albumid,isAjaxTemplateRenderWithData:!0};a.dateFilter&&(c.dateFilter=a.dateFilter);a.perpage&&(c.perpage=a.perpage);vBulletin.AJAX({call:"/ajax/render/"+f,data:c,success:function(c){d.currentNodeId=a.nodeid;d.currentUserId=a.userid;d.currentGalleryPage=g;h.html(c.template);h.addClass("list-item").attr("data-nodeid",
a.nodeid);b(".profile-media-uploadphotos",h).on("click",D);u(!0);a.perpage&&(w.data("perpage",a.perpage),w.data("callbacks",e));vBulletin.initFlexGridFixLastRowAll();-1==a.nodeid?p(b(".media-video-list",h),g):p(b(".js-album-detail",h),g);b(".profile-toolbar .media-toolbar-filter").removeClass("h-hide");e&&"function"==typeof e.success&&e.success()},after_error:function(){e&&"function"==typeof e.error&&e.error()},complete:function(){b("body").css("cursor","auto");e&&"function"==typeof e.complete&&e.complete()},
title_phrase:"profile_media"})}}}function D(a){b(document).data("gallery-container",b(this).closest(".js-album-detail"));var c=vBulletin.upload.getUploadedPhotosDlg(!1);(a=c.data("nodeid"))&&!isNaN(parseInt(a))&&vBulletin.AJAX({call:"/ajax/render/media_addphotos",data:{nodeid:a,isAjaxTemplateRenderWithData:!0},success:function(a){c.html(a.template);vBulletin.upload.initializePhotoUpload(c.parent());a=c.find(".js-save-button");a.off("click").on("click",E);c.find(".js-cancel-button").off("click").on("click",
function(a){c.dialog("close")});vBulletin.upload.relocateLastInRowClass(c.find(".photo-item-wrapper"));0<b(".photo-display .photo-item-wrapper:not(.h-hide)",c).length?(vBulletin.upload.setUploadButtonText(c,"upload_more"),a.show()):a.hide();c.dialog("open");vBulletin.upload.adjustPhotoDialogForScrollbar(c)},after_error:function(){c.dialog("close")},title_phrase:"profile_media"})}function F(a){a=A(b(this));a.pageno=1;a.perpage=vBulletin.media.calculatePhotosPerPage(vBulletin.media.TARGET_PHOTOS_PERPAGE);
d.currentFilter=a;r(a)}function E(a){var c=b(a.target).closest(".profile-media-photoupload-dialog"),e=b(a.target).closest("form");if(0<e.length){b(a.target).closest(".photo-display-container").find(".photo-item-wrapper:not(.h-hide)").each(function(a,c){a=parseInt(b(c).find(".filedataid").val(),10);isNaN(a)||(e.append('<input type="hidden" name="filedataid[]" value="'+a+'"/>'),b('<input type="hidden" name="title_'+a+'" />').val(b(c).find("textarea").val()).appendTo(e))});var h=b("button",e).prop("disabled",
!0);vBulletin.AJAX({url:e.attr("action"),data:e.serializeArray(),success:function(){c.dialog("close");l(d.currentMediaPage)},complete:function(){h.prop("disabled",!1)},title_phrase:"profile_media"})}else c.dialog("close")}function A(a){var c;b("#profileMediaContainer").is(":visible")?c=b("#profileMediaContainer"):b("#profileMediaDetailContainer").is(":visible")&&(c=b("#profileMediaDetailContainer"));a={nodeid:parseInt(a.data("nodeid"),10)||parseInt(c.attr("data-nodeid"),10),userid:parseInt(c.data("userid"),
10),channelid:parseInt(c.data("channelid"),10),albumid:parseInt(a.data("albumid"),10)};isNaN(a.channelid)&&(a.channelid=0);isNaN(a.nodeid)&&(a.nodeid=0);0<a.nodeid?a.userid=0:isNaN(a.userid)&&(a.userid=0);isNaN(a.albumid)&&(a.albumid=0);return a}function G(){var a=b("#profileMediaDetailContainer");let c=parseInt(a.data("channelid"),10),e=parseInt(a.data("nodeid"),10),h=a.find(".js-album-detail");a=parseInt(a.find(".albumSlideShowPageNo").val()||1,10);c&&e&&(d.currentNodeId=e,d.currentChannelid=c,
p(h,a),B=!0)}if(!vBulletin.pageHasSelectors(["#media-tab",".album-widget"]))return!1;var f=b("#media-tab"),k,m,n,t,q,g,x,d={mediaTypeFilter:!1,currentMediaPage:1,currentGalleryPage:1,currentNodeId:0,currentUserId:0,currentChannelid:0,profileMediaDetailContainer:!1},B=!1;b(document).on("vb-instrument",a=>{y(b(a.target))});y(f);d.currentMediaPage=Number(k.val())||1;vBulletin.media.calculatePhotosPerPage=function(a){a=a||50;if(B)return a;var c=b("#profileMediaDetailContainer").is(":visible");c||b("#profileMediaDetailContainer").removeClass("h-hide");
var e=Math.floor(b("#profileMediaDetailContainer").width()/128);c||b("#profileMediaDetailContainer").addClass("h-hide");return 0==a%e||a<=e?a:a-a%e};vBulletin.media.setHistoryStateChange=function(){q="1"==f.find(".conversation-toolbar-wrapper").data("allow-history");g=new vBulletin.history.instance(q);g.isEnabled()&&g.setStateChange(function(a){var c=g.getState();if("media_filter"==c.data.from){g.log(c.data,c.title,c.url);a=f.closest(".ui-tabs");var b=a.find(".ui-tabs-nav > li").filter('li:has(a[href*="#{0}"])'.format(f.attr("id")));
b.hasClass("ui-tabs-active")?l(c.data.page):(c=b.index(),vBulletin.selectTabByIndex.call(a,c))}},"media_filter")};b(function(){b(document).off("click","#mediaList .albumLink").on("click","#mediaList .albumLink",F);var a=!1;f.off("click",".profile-media-createvideo, .profile-media-upload").on("click",".profile-media-createvideo, .profile-media-upload",function(c){var e=b(this).hasClass("profile-media-upload")?"gallery":"video";a||(a=b(c.target).closest(".ui-widget-content").find(".profileMediaEditContainer").dialog({modal:!0,
autoOpen:!1,width:800,title:vBulletin.phrase.get("profile_media"),resizable:!1,closeOnEscape:!1,showCloseButton:!1,dialogClass:"dialog-container dialog-box edit-media-upload-dialog js-profile-media",close:function(){b(document).data("gallery-container",null)}}),vBulletin.ckeditor.initEditor(a.find(".js-ckeditor-init-on-focus")),vBulletin.upload.initializePhotoUpload(a));a.off("dialogopen").on("dialogopen",function(c,d){a.find('.b-toolbar__item[data-panel="b-content-entry-panel__content--{0}"]:not(.b-toolbar__item--active)'.format(e)).trigger("click");
vBulletin.ckeditor.initEditorComponents(a);b(document).data("gallery-container",b(this).find(".b-content-entry-panel__content--"+e))}).dialog("open")});f.off("click",".profile-media-backbtn").on("click",".profile-media-backbtn",function(a){b(".profile-toolbar .media-toolbar-filter").addClass("h-hide");u(!1);b(this).closest(".conversation-toolbar-wrapper").find(".filtered-by").addClass("h-hide").find(".filter-text-wrapper").empty();p(b("#mediaList"),d.currentMediaPage)});f.offon("change","#mediaCurrentPage",
z);f.offon("click","#mediaPreviousPage, #mediaNextPage",z);d.profileMediaDetailContainer=b("#profileMediaDetailContainer").clone();b(document).off("afterSave",".js-album-detail .js-post__content-wrapper .js-content-entry form").on("afterSave",".js-album-detail .js-post__content-wrapper .js-content-entry form",function(a,b){r(d.currentFilter);return!1});b(document).off("afterCancel",".js-album-detail .js-post__content-wrapper .js-content-entry form").on("afterCancel",".js-album-detail .js-post__content-wrapper .js-content-entry form",
function(a){b(a.currentTarget).closest(".js-album-detail").find(".conversation-body, .profile-media-uploadphotos, .js-photo-preview").removeClass("h-hide-imp");return!0});b(document).off("afterSave",".js-profile-media .js-content-entry form").on("afterSave",".js-profile-media  .js-content-entry form",function(a,e){if("b-content-entry-panel__content--gallery"==b(".b-toolbar__item--active",this).data("panel")){a=b("#mediaList");var c=Number(a.data("totalpages"));a=0==Number(a.data("totalcount"))%vBulletin.media.ALBUMS_PERPAGE?
c+1:c;e.alert&&vBulletin.alert("media",e.alert,"alert");l(a)}else l(1);return!1});f.length&&(vBulletin.media.setHistoryStateChange(),x=f.closest(".canvas-widget").find(".js-module-top-anchor").attr("id"),f.off("click",".media-toolbar-filter").on("click",".media-toolbar-filter",function(a){b(".filter-wrapper",this).toggleClass("selected");b(".arrow .vb-icon",this).toggleClass("vb-icon-triangle-down-wide vb-icon-triangle-up-wide");b(a.target).closest(".conversation-toolbar-wrapper").find(".toolbar-filter-overlay").slideToggle("slow",
function(){if(b(this).is(":visible")){b("body").off("click.media_filter").on("click.media_filter",function(a){0==b(a.target).closest(".toolbar-filter-overlay").length&&0==b(a.target).closest(".toolbar-filter").length&&(b("body").off("click.media_filter"),b(".media-toolbar-filter").trigger("click"))});var a={};vBulletin.isScrolledIntoView(this,a)||b("html,body").animate({scrollTop:"+="+Math.abs(a.bottom)},"fast")}else b("body").off("click.media_filter")})}),b("form.media-filter-overlay",f).trigger("reset"),
f.offon("change",".media-filter-overlay input[type=radio]",function(a,e){if(!g.isEnabled()&&q){var c=vBulletin.makePaginatedUrl(location.href,1);location.href=vBulletin.makeFilterUrl(c,this.name,this.value,d,x);return!0}a=A(b(a.target));var d=b(".media-tab");d.data("perpage")&&(a.perpage=d.data("perpage"));r(a,!0,d.data("callbacks"));b(this).data("bypass-filter-display")||vBulletin.conversation.displaySelectedFilterText(this,this.value);if(g.isEnabled()&&!e){c=vBulletin.getSelectedFilters(b("form.toolbar-filter-overlay",
d));e=this.name;a=this.value;var f=b(".conversation-toolbar-wrapper .filtered-by",d),k={from:"filter",page:1,tab:d.data("url-path")?d.data("url-path"):"#"+d.attr("id"),filters:c,filtervalue:a,filtername:e};f.data("reset")?c=location.pathname.replace(/\/page[0-9]+/,""):(c=vBulletin.makePaginatedUrl(location.href,1),c=vBulletin.makeFilterUrl(c,e,a,d));g.pushState(k,document.title,c);f.data("reset",null)}}),f.offon("click",".filtered-by .js-remove-filter",function(a){a=b(this).closest(".filtered-by");
var c=b(this).closest(".filter-text"),d=c.data("filter-name");if(!g.isEnabled()&&q)return location.href=vBulletin.makeFilterUrl(location.href,d,c.data("filter-value"),f,x),!1;$defaultSelectedFilter=b(".toolbar-filter-overlay .filter-options input[name={0}]".format(d),f).prop("checked",!1).filter(".js-default-checked");c.remove();c=a.find(".filter-text").length;0==c?(a.addClass("h-hide"),a.data("reset",!0)):1==c&&a.find(".clear-all").addClass("h-hide");1==$defaultSelectedFilter.length&&($defaultSelectedFilter.data("bypass-filter-display",
!0),$defaultSelectedFilter.trigger("click"),$defaultSelectedFilter.data("bypass-filter-display",null))}),b("#profileMediaContainer").length||G());vBulletin.initFlexGridFixLastRowAll()});return{loadGalleryById:r}}(jQuery));
;

// ***************************
// js.compressed/sb_activity.js
// ***************************
vBulletin.precache(["blog_memberblogLabel","forum"],[]);
(function(b){if(!vBulletin.pageHasSelectors([".forum-activity-stream-widget",".bloghome-widget",".search-widget"]))return!1;b(function(){vBulletin.conversation=vBulletin.conversation||{};var t=vBulletin.tabtools,g=b(".activity-stream-widget"),u,n,v,l,k,y,z;if(g.hasClass("forum-activity-stream-widget")||g.hasClass("bloghome-widget")){var h=g.find(".widget-tabs-nav .ui-tabs-nav > li"),w=h.filter(".ui-tabs-active"),x=w.index(),q={},A="1"==h.parent().data("allow-history"),L=new vBulletin.history.instance(A),
B=!1,C=null,D=null;-1==x&&(x=0,w=h.first());var p=w.find("> a").attr("href");var E=function(d,a){var e=a.filter;a.pagination&&a.pagination.setOption("context",d);e.setOption("context",d);"undefined"!=typeof e.lastFilters&&0<b(".conversation-empty:not(.h-hide)",d).length&&delete e.lastFilters},F=function(d,a,e,c,f,m,g){var k=b(".conversation-list",d);return t.newTab(d,a,c,f,m,k,g,b.noop,e)},H=function(b,a){vBulletin.conversation.filter({context:a,autoCheck:!1,scrollToTop:b,pagination:!1,allowHistory:!1,
tabParamAsQueryString:!0,beforeApplyFilters:function(){G();return!1},afterResetFilters:function(){G()}})},I=function(d){var a=b(".toolbar-pagenav",d);0<a.length&&new vBulletin.pagination({context:d,allowHistory:void 0,onPageChanged:function(e,c){if(!c){c=b(".js-button-filter-my.js-checked",d).data("filter-value");var f=b(".js-button-filter-display-blogs.js-checked",d).data("filter-value"),g=a.closest(".activity-stream-widget");r(g,d,e,c,!1,!0,f)}}})},J=function(d,a){vBulletin.memberChannel.updateToolbarPagination(d);
vBulletin.memberChannel.updateToolbarButtonPressState(d);a&&H(b(".bloghome-widget"),b("#memberblog-tab"));a=d.find(".js-button-filter-display-blogs.js-checked").data("filter-value")||"display_grid";d.find(".js-flexgrid").toggleClass("b-groupgrid b-flexgrid","display_grid"==a);vBulletin.initFlexGridFixLastRowAll(!0);vBulletin.initFrameImagesWithColor()},G=function(){var d=b("#memberblog-tab .js-pagenum").val()||1,a=b(".js-button-filter-my.js-checked").data("filter-value"),e=b(".js-button-filter-display-blogs.js-checked").data("filter-value");
r(C,D,d,a,!1,!1,e)},r=function(d,a,e,c,f,g,h){e=e||1;c=c||"show_all";h=h||"display_grid";var m=vBulletin.makePaginatedUrl(location.href,e);!f&&k.isEnabled()&&(m=vBulletin.makeFilterUrl(m,"filter_blogs",c,a),f=k.getState(),k[f&&f.data&&f.data.from&&"filter_blogs"!=f.data.from?"setDefaultState":"pushState"]({from:"filter_blogs",page:e,filters:{filter_blogs:c}},document.title,m));m={tab:a.prop("id"),filter_blogs:"show_all"==c?void 0:c,display_blogs:"display_grid"==h?void 0:h};var l=b(".toolbar-filter-overlay",
a);f=l.find('input[name="filter_sort"]:checked').val();l=l.find('input[name="filter_order"]:checked').val();vBulletin.AJAX({call:"/ajax/render/blogmember_tab",data:{from:e,my:c,display_blogs:h,noToolbar:g,page:m,blogChannelId:d.data("blog-channel-id"),sort_field:f,sort_order:l},error_phrase:"unable_to_contact_server_please_try_again",success:function(f){var c=b(f);c.filter(".conversation-toolbar-wrapper").length?(a.html(f),I(a),f=vBulletin.Responsive.ChannelContent,f.cloneAndMoveToolbarButtons(),
f.initToolbarShrink()):(b(".blogmember-list",a).hide().replaceWith(c).show(),b(".conversation-toolbar-wrapper",a).removeClass("h-hide"));J(d,!B);B=!0}})};t.initTabs(g,L,h,A,x,p,[l,n],!0,function(d,a,e){C=d;D=e;var c=b(e);a="#"+c.prop("id");e=p==a;a in q||(q[a]=t.tabAllowHistory(c));l&&"#activity-stream-tab"!=a&&"#article-tab"!=a&&l.toggleNewConversations(!1);n&&"#subscribed-tab"==a&&n.toggleNewConversations(!1);if("#memberblog-tab"==a){c.off("click",".js-button-filter").on("click",".js-button-filter",
function(a,e){a=b(this);var f=b(".js-button-filter-my.js-checked").data("filter-value"),g=b(".js-button-filter-display-blogs.js-checked").data("filter-value");a.is(".js-button-filter-my")?(f=a.data("filter-value"),b(".js-button-filter-my").removeClass("js-checked")):(g=a.data("filter-value"),b(".js-button-filter-display-blogs").removeClass("js-checked"));a.addClass("js-checked");r(d,c,1,f,e,!0,g)});H(b(".bloghome-widget"),b("#memberblog-tab"));if(!k&&(k=vBulletin.history.instance(q[a]),k.isEnabled())){e=
k.getState();if(!e||b.isEmptyObject(e.data))e={from:"filter_blogs",page:Number(b(".pagenav-form .defaultpage",c).val())||1,tab:a,filters:{filter_blogs:b(".js-button-filter-my.js-checked",c).data("filter-value"),filter_display_blogs:b(".js-button-filter-display-blogs.js-checked",c).data("filter-value")}},k.setDefaultState(e,document.title,location.href);k.setStateChange(function(a){a=k.getState();if("filter_blogs"==a.data.from||"display_blogs"==a.data.from){k.log(a.data,a.title,a.url);var b=d.tabs("option",
"selected");d.find(".ui-tabs-nav > li").eq(b).find("a").attr("href")!=a.data.tab?(a=getTabIndexByHash(a.data.tab),vBulletin.selectTabByIndex.call(d,a)):r(d,c,a.data.page,a.data.filters.filter_blogs,!0,!0,a.data.filters.display_blogs)}},"filter")}p==a&&I(c);J(d,!1);if(!b(".conversation-list",c).hasClass("dataLoaded")){if(p==a&&!z)return z=!0,!1;b(".conversation-empty",c).addClass("h-hide");r(d,c)}}else if("#activity-stream-tab"==a||"#article-tab"==a)l?E(c,v):(v=F(c,g,q[a],!0,!0,e,null),l=v.filter),
l.applyFilters(!1,!0);else if("#subscribed-tab"==a)n?E(c,u):(u=F(c,g,q[a],!0,!0,e,null),n=u.filter),n.applyFilters(!1,!0);else if("#forum-tab"==a){if(c.hasClass("dataLoaded"))return p==a&&vBulletin.markreadcheck(),!1;if(p==a&&!y)return y=!0,!1;b(".conversation-empty",c).addClass("h-hide");vBulletin.AJAX({call:"/ajax/render/display_Forums_tab",data:{isAjaxTemplateRenderWithData:!0},success:function(a){c.html(a.template).addClass(function(){var a=b(".conversation-empty",this);if(0==a.length)return"dataLoaded";
a.removeClass("h-hide");return""})},complete:function(){vBulletin.markreadcheck()}})}});var K=0;g.find(".ui-tabs-nav li").each(function(){K+=b(this).width()});h=g.find(".ui-tabs-nav").width();K>h&&g.find(".widget-tabs-nav, .module-title").height(g.find(".ui-tabs-nav").height())}vBulletin.truncatePostContent(".search-widget");h=b(".conversation-list",g);vBulletin.conversation.initPollEvents(h);vBulletin.conversation.initContentEvents(h);h.off("click",".js-comment-entry__post").on("click",".js-comment-entry__post",
function(b){vBulletin.conversation.postComment.apply(this,[b,function(){l.updatePageNumber(1).applyFilters(!1,!0)}])});vBulletin.conversation.bindEditFormEventHandlers("all")})})(jQuery);
;

// ***************************
// js.compressed/hv.js
// ***************************
(function(c){function d(a){c(".humanverify_image",a).each(function(){var b=c(this),a=c(".refresh_imagereg",b);a.off("click").on("click",b,e);c(".imagereg",b).off("click").on("click",b,e);a.removeClass("h-hide")})}function e(a){var b=a.data;c(".progress_imagereg",b).removeClass("h-hide");vBulletin.AJAX({call:"/ajax/api/hv/generateToken",success:function(a){a=a.hash;c("input.hash",b).val(a);c(".imagereg",b).attr("src",pageData.baseurl+"/hv/image?hash="+a);c(".imageregt",b).val("")},api_error:function(){},
complete:function(){c(".progress_imagereg",b).addClass("h-hide")}});return!1}vBulletin.ensureObj("hv");vBulletin.hv.resetOnError=function(a,b,c){var f=vBulletin.ajaxtools;return f.hasError(a,/humanverify_.*_wronganswer/)?(c.after_error=vBulletin.ajaxtools.runBeforeCallback(c.after_error,function(){vBulletin.hv.reset(!0)}),f.showApiError(a,b,c),!1):!0};vBulletin.hv.reset=function(a){var b=c(".humanverify.humanverify_image");if(0<b.length)b.find(".refresh_imagereg").trigger("click"),a&&b.find(".imageregt").trigger("focus");
else if(0<c(".js-humanverify-recaptcha2").length&&"undefined"!=typeof grecaptcha&&"function"==typeof grecaptcha.reset)grecaptcha.reset();else{var d=c(".humanverify.humanverify_question");0<d.length&&vBulletin.AJAX({call:"/ajax/render/humanverify",data:{action:"register",isAjaxTemplateRenderWithData:!0},success:function(b){b=c(b.template);d.replaceWith(b);a&&b.find(".answer").trigger("focus")}})}};vBulletin.hv.show=function(a){var b=a.find(".imagereg");a.removeClass("h-hide");b.height()!=b.attr("height")&&
a.find(".refresh_imagereg").trigger("click")};vBulletin.hv.init=function(a){d(a)};window.recaptcha2callback=function(a){c(".js-humanverify-recaptcha2-response").val(a)};c(function(){d(c(document))})})(jQuery);
;

// ***************************
// js.compressed/css_b_comp_menu_horizontal.js
// ***************************
vBulletin.precache(["more_options","advanced_search","search","more"],[]);
vBulletin.CompMenuHorizontal=function(d){function e(a,c,b){a.each(function(){var a=d(this);d.each(c,function(c,b){a.is("."+b)&&(a.removeClass(b),c=a.data("removed-classes")||[],-1==d.inArray(b,c)&&c.push(b),a.data("removed-classes",c))});d.each(b,function(c,b){a.is("."+b)||(a.addClass(b),c=a.data("added-classes")||[],-1==d.inArray(b,c)&&c.push(b),a.data("added-classes",c))})})}function l(a){a.each(function(){var a=d(this),b=a.data("added-classes")||[],g=a.data("removed-classes")||[];b.length&&a.removeClass(b.join(" "));
g.length&&a.addClass(g.join(" "))})}function k(a){t.push(a)}function u(a,c,b){d.each(t,function(d,h){h(a,c,b)})}function w(a,c,b){a.is(".js-comp-menu-dropdown__content--main-menu")&&("dropdown"==b?(b=a.find(".current").addClass("b-comp-menu-dropdown__content-item--current"),c.addClass("b-comp-menu-dropdown--main-menu").find(".js-comp-menu-dropdown__trigger").addClass("b-comp-menu-dropdown__trigger--icon-trigger").html('<span class="b-icon b-icon__hamburger b-comp-menu-dropdown__trigger-icon"></span>'),
a.find("li").first().addClass("b-comp-menu-dropdown__content-item--divider"),c='<li class="js-search-item b-comp-menu-dropdown__content-item--no-hover js-comp-menu-dropdown__content-maintain-menu"><form action="'+d("#searchForm").attr("action")+'"><input type="text" autocomplete="off" class="b-form-input__input search-term" placeholder="'+vBulletin.phrase.get("search")+'..." name="q"><button title="'+vBulletin.phrase.get("search")+'" class="search-btn" type="submit"><span class="b-icon b-icon__search b-icon--show-on-xsmall"></span></button></form></li><li class="js-search-item"><a href="'+
pageData.baseurl+'/search">'+vBulletin.phrase.get("advanced_search")+"</a></li>",d(c).prependTo(a),d(".js-channel-subtabbar-list li").addClass("js-subtabbar-item b-comp-menu-dropdown__content-item--indent1").insertAfter(b),d(".js-channel-subtabbar").addClass("h-hide")):(a.find("li").removeClass("b-comp-menu-dropdown__content-item--divider b-comp-menu-dropdown__content-item--current b-comp-menu-dropdown__content-item--indent1"),a.find(".js-search-item").remove(),a.find(".js-subtabbar-item").appendTo(d(".js-channel-subtabbar-list")),
d(".js-channel-subtabbar").removeClass("h-hide")))}function x(a,c,b){a.is(".js-footer-nav-list")&&("dropdown"==b?(e(a,["h-right"],[]),e(c,[],["js-select-on-xsmall"]),c=d("<li></li>").append(c).appendTo(".js-footer-chooser-list"),a.data("vb-remove-li",c)):(a.insertAfter(".js-footer-chooser-list"),a.data("vb-remove-li").remove()))}function y(a,c,b){"dropdown"==b?(b=a.find(".js-comp-menu--exclude-from-dropdown"),0<b.length&&(c=d("<ul />").addClass(a.get(0).className).removeClass("js-comp-menu-horizontal js-comp-menu--dropdown-on-xsmall js-comp-menu--dropdown-on-small b-comp-menu-dropdown--inactive").insertAfter(c),
a.data("vb-exclude-item-container",c),b.each(function(a,b){a=d(this);d("<li />").addClass("js-excluded-item-marker h-hide-imp").data("vb-excluded-item",a).insertAfter(a)}),b.appendTo(c))):(c=a.data("vb-exclude-item-container"),b=a.find(".js-excluded-item-marker"),c&&c.length&&0<c.length&&0<b.length&&(b.each(function(a,b){a=d(this);a.data("vb-excluded-item").insertAfter(a)}),b.remove(),a.data("vb-exclude-item-container",!1),c.remove()))}function z(a,c,b){function g(a){a=d(this).closest("li");f.removeClass("b-comp-menu-dropdown__content-item--current ui-tabs-active ui-state-active ui-state-hover ui-state-default");
a.addClass("b-comp-menu-dropdown__content-item--current")}if(a.is(".js-module-tab-menu")){var h=a.closest(".widget-tabs-nav, .js-widget-tabs-nav"),m=h.find(".module-title, .js-module-title"),f=a.find("li"),n=f.filter(".ui-state-active"),k=a.find("a");h.addClass("js-widget-tabs-nav");m.addClass("js-module-title");"dropdown"==b?((a.is(".js-profile-tabs-nav")||a.is(".js-subscribe-tabs-nav"))&&d("<div />").addClass("js-profile-menu-wrapper widget-tabs-nav").insertAfter(a).append(c).append(a),e(a,["ui-tabs-nav",
"ui-helper-reset","ui-helper-clearfix","ui-widget-header","ui-corner-all"],[]),e(c,[],["js-select-when-dropdown"]),e(h,["widget-tabs-nav"],["widget-tabs-nav-background"]),e(m,["module-title"],[]),e(f,"ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all ui-corner-bottom ui-corner-top ui-corner-right ui-corner-left ui-corner-br ui-corner-bl ui-corner-tr ui-corner-tl".split(" "),[]),e(k,["ui-tabs-anchor","h-block"],[]),n.length?n.addClass("b-comp-menu-dropdown__content-item--current"):
setTimeout(function(){f.filter(".ui-state-active").addClass("b-comp-menu-dropdown__content-item--current");var b=a.next(".vb-select-el"),c=0;if(b&&b.length){f.each(function(a,b){c=a;if(d(b).is(".ui-state-active"))return!1});var h=b.is(".selectBox");h&&b.selectBox("destroy");b.find(".js-noop-label").remove();b.get(0).selectedIndex=c;h&&b.selectBox()}},0),f.removeClass("ui-state-default ui-tabs-active ui-state-active ui-state-hover"),k.off("click.vbmoduletabs").on("click.vbmoduletabs",g),c.data("add-classes-to-select-el",
"h-margin-vert-m h-margin-horiz-xl")):(f.filter(function(){return"true"==d(this).attr("aria-selected")}).removeClass("b-comp-menu-dropdown__content-item--current").addClass("ui-tabs-active ui-state-active"),k.off("click.vbmoduletabs"),l(h),l(m),b=a.parent(),b.is(".js-profile-menu-wrapper")&&(a.insertAfter(b),c.insertAfter(b),b.remove()))}}function A(a,c,b){if(a.is(".js-tabbed-pane__tabs")){var g=a.find("li"),h=g.filter(".b-tabbed-pane__tab--selected");a.find("a");"dropdown"==b?(d("<div />").addClass("js-tabbed-pane__tabs-wrapper b-tabbed-pane_tabs b-tabbed-pane__tabs--standard").insertAfter(a).append(c).append(a),
e(a.parent(),[],["js-comp-menu-dropdown__content"]),e(c,[],["js-select-when-dropdown"]),e(g,[],["b-comp-menu-dropdown__content-item"]),h.addClass("b-comp-menu-dropdown__content-item--current"),c.data("add-classes-to-select-el","h-margin-horiz-xl h-margin-vert-m")):(g.removeClass("b-comp-menu-dropdown__content-item--current"),b=a.parent(),b.is(".js-tabbed-pane__tabs-wrapper")&&(a.insertAfter(b),c.insertAfter(b),b.remove()))}}function B(a,c,b){a.is(".js-groupblog-admin-menu")&&(a.closest(".js-blog-admin-left"),
a=a.find("li").filter(".sgAdminActive, .blogAdminActive"),"dropdown"==b&&(e(c,[],["js-select-on-xsmall"]),a.addClass("b-comp-menu-dropdown__content-item--current")))}function C(a,c,b){if(a.is(".js-sharing-menu")){var d=a.find("li");"dropdown"==b?(b=a.prevAll(".userinfo"),1==b.length&&(c.appendTo(b),a.data("vb-moved-to-userinfo","1")),e(a,["b-sharing-menu--horizontal"],[]),e(c,[],["h-align-bottom"]),e(d,[],["b-comp-menu-dropdown__content-item--no-hover","js-comp-menu-dropdown__content-maintain-menu"])):
("1"==a.data("vb-moved-to-userinfo")&&(b=c.parent(".userinfo"),a.insertAfter(b).data("vb-moved-to-userinfo","0")),l(d))}}function q(a,c){if("dropdown"==c){var b=a.data("dropdown-icon-classes")||"",g=b?" b-comp-menu-dropdown__trigger--icon-trigger":"";g=(a.data("dropdown-trigger-classes")||"")+g;var h=a.data("dropdown-trigger-phrase")||"more_options",m=a.data("dropdown-menu-classes")||"",f=d('<div class="b-comp-menu-dropdown js-comp-menu-dropdown '+m+'"> <div class="b-comp-menu-dropdown__trigger js-comp-menu-dropdown__trigger js-button '+
g+'" tabindex="0"> <span class="'+b+' b-comp-menu-dropdown__trigger-icon"> '+vBulletin.phrase.get(h)+" </span>  </div> </div>");f.insertAfter(a);u(a,f,c);b=a.find("li");g=a.find("a");d.each(["h-right","h-left"],function(b,c){a.is("."+c)&&f.addClass(c)});c=a.data("dropdown-content-classes");var n=["b-comp-menu-dropdown__content","js-comp-menu-dropdown__content"];c=c?c.split(" "):[];d.each(c,function(a,b){n.push(b)});e(a,"h-margin-top-s h-right b-comp-menu-horizontal channel-tabbar-list h-hide-on-small nav-list".split(" "),
n);e(b,["h-margin-top-xs","b-post-control","b-post-control--responsive"],["b-comp-menu-dropdown__content-item"]);e(g,["h-left"],["h-block"]);a.appendTo(f);vBulletin.CompMenuDropdown.init()}else vBulletin.CompMenuDropdown.updateMenuAsSelectElement(),b=a.find("li"),g=a.find("a"),l(a),l(b),l(g),f=a.closest(".js-comp-menu-dropdown"),vBulletin.CompMenuDropdown.setMenuColumnCount(f,a,1),a.removeClass("b-comp-menu-dropdown__content--left b-comp-menu-dropdown__content--right"),a.insertAfter(f),u(a,f,c),(c=
a.next(".vb-select-el"))&&c.length&&c.selectBox("destroy").remove(),f.remove()}function v(a,c){p()}function D(a){var c=[a,a.parent()],b=!1;d.each(c,function(a,c){if(c.is(".js-shrink-event-parent")&&"need_shrink"==vBulletin.Responsive.Debounce.checkElementShrinkRequirement(c))return b=!0,!1});a.is(".js-comp-menu-dropdown__content--main-menu")&&!b&&"need_shrink"==vBulletin.Responsive.Debounce.checkElementShrinkRequirement(d(".js-channel-subtabbar-list"))&&(b=!0);return b}function p(){var a=d(".js-comp-menu-horizontal");
if(a.length){var c=d("body"),b=c.is(".l-small"),g=c.is(".l-xsmall");a.each(function(a){a=d(this);var c=a.find("li").not(".b-post-control--disabled").length,f=!0,e=!1;a.data("is-dropdown-menu")&&a.closest(".js-comp-menu-dropdown").is(".b-comp-menu-dropdown--open")&&(f=!1);f&&(a.data("is-dropdown-menu")&&(q(a,"horizontal"),a.data("is-dropdown-menu","")),e=D(a));(b&&a.is(".js-comp-menu--dropdown-on-small")||g&&a.is(".js-comp-menu--dropdown-on-xsmall")||e)&&0<c?a.data("is-dropdown-menu")||(q(a,"dropdown"),
a.data("is-dropdown-menu","1")):a.data("is-dropdown-menu")&&(q(a,"horizontal"),a.data("is-dropdown-menu",""))})}}var r=vBulletin.ensureObj("jsexec.css_b_comp_menu_horizontal",{exec:0,init:0});r.exec++;var t=[];d(function(){vBulletin.phrase.register(d("[data-dropdown-trigger-phrase]").map(function(a,c){return d(c).data("dropdown-trigger-phrase")}).get());k(w);k(x);k(y);k(z);k(A);k(B);k(C);p();1>r.init&&(vBulletin.Responsive.Debounce.registerCallback(p),d(document).on("vb-loadnewposts",v),d(document).on("vb-filterposts",
v));r.init++});return{registerMenuChangeFilter:k,checkHorizontalMenuState:p,convertDropdownProgressive:function(a){if(!(1>a.$children.length||1!=a.$parent.length)){a.needsShrink=a.needsShrink||function(){return"need_shrink"==vBulletin.Responsive.Debounce.checkElementShrinkRequirement(a.$parent)};a.copyChild=a.copyChild||function(a){var b=a.find("> a");a=d('<a href="#"></a>');a.html(b.html());a.attr("href",b.attr("href"));a.on("click",function(){b.trigger("click");return!1});return a};var c=a.$children.filter(function(){return""!=
d(this).text()});if(!(1>c.length)){var b=a.$parent.find(".js-progressive-dropdown-menu");if(1>b.length){b=d('<li class="b-top-menu__item js-shrink-event-child js-progressive-dropdown-menu h-hide-imp"> \t<div class="b-comp-menu-dropdown b-comp-menu-dropdown--sitebuilder js-comp-menu-dropdown">\t\t<div class="b-comp-menu-dropdown__trigger js-comp-menu-dropdown__trigger js-button" tabindex="0"> \t\t\t<span class="b-icon b-icon__ellipsis b-comp-menu-dropdown__trigger-icon">'+vBulletin.phrase.get("more")+
'</span> \t\t</div> \t\t<ul class="b-comp-menu-dropdown__content js-comp-menu-dropdown__content"> \t\t</ul> \t</div> </li>');b.insertAfter(c.last());var e=b.find(".js-comp-menu-dropdown__content");c.each(function(b,c){c=d(this);var f=a.copyChild(c);d('<li class="b-comp-menu-dropdown__content-item h-hide-imp"></li>').append(f).appendTo(e).data("vb-progressive-item-num",b);c.data("vb-progressive-item-num",b)});vBulletin.CompMenuDropdown.init()}var h=b.find(".b-comp-menu-dropdown__content-item");if(a.removeMenu||
!a.needsShrink())c.removeClass("h-hide-imp"),b.addClass("h-hide-imp"),h.addClass("h-hide-imp");!a.removeMenu&&a.needsShrink()&&c.reverse().each(function(){var c=d(this),f=c.data("vb-progressive-item-num"),e=h.filter(function(){return d(this).data("vb-progressive-item-num")==f});e.removeClass("h-hide-imp b-comp-menu-dropdown__content-item--first");c.addClass("h-hide-imp");b.removeClass("h-hide-imp");if(!a.needsShrink())return e.addClass("b-comp-menu-dropdown__content-item--first"),!1})}}}}}(jQuery);
;

// ***************************
// js.compressed/css_b_comp_menu_dropdown.js
// ***************************
vBulletin.CompMenuDropdown=function(c){function x(a){c(a.target).closest(".js-comp-menu-dropdown").length||w(c(".js-comp-menu-dropdown"))}function M(){function a(a){g=new Date;l=a.originalEvent.touches[0].pageX;h=a.originalEvent.touches[0].pageY;y=z=0}function b(a){z=l-a.originalEvent.touches[0].pageX;y=h-a.originalEvent.touches[0].pageY}function e(a){400>=new Date-g&&!z&&!y&&x.call(this,a)}var g=!1,l,h,z,y;c(document).off("touchstart",a).on("touchstart",a).off("touchmove",b).on("touchmove",
b).off("touchend",e).on("touchend",e)}function D(a){var b=c(a.target).closest(".js-comp-menu-dropdown");b.is(".b-comp-menu-dropdown--open")?w(b):N(b);a=c(".js-comp-menu-dropdown").filter(function(){return c(this).get(0)!=b.get(0)});w(a);return!1}function E(a){a=c(a.target).closest(".js-comp-menu-dropdown");a.length&&a.is(".b-comp-menu-dropdown--open")&&w(a)}function F(a){a=c(a.target);a.closest(".js-comp-menu-dropdown").find(".js-comp-menu-dropdown__trigger-text").text(a.text())}function A(a,b,e){var g=
b.find(".b-comp-menu-dropdown__content-item");e=Math.min(e,4);if(1<e){b.addClass("b-comp-menu-dropdown__content--"+e+"-column");b=!a.is(".b-comp-menu-dropdown--open");var l="",h="";g.removeClass("b-comp-menu-dropdown__content-item--column-first b-comp-menu-dropdown__content-item--column-trailing");b&&a.addClass("b-comp-menu-dropdown--open");g.each(function(){var a=c(this).position();a=parseInt(a.top,10);""===l&&(l=a);""===h&&(h=a);l=Math.min(l,a);h=Math.max(h,a)});g.each(function(){var a=c(this),
b=a.position();parseInt(b.top,10)<=l&&a.addClass("b-comp-menu-dropdown__content-item--column-first")});g=g.last();g.position().top<h&&g.addClass("b-comp-menu-dropdown__content-item--column-trailing");b&&a.removeClass("b-comp-menu-dropdown--open")}else{for(a=4;1<a;)b.removeClass("b-comp-menu-dropdown__content--"+a+"-column"),--a;g.removeClass("b-comp-menu-dropdown__content-item--column-first b-comp-menu-dropdown__content-item--column-trailing")}}function G(a,b){if(a.is(".b-comp-menu-dropdown--open")){var c=
b.outerHeight();b=b.outerWidth()}else a.addClass("b-comp-menu-dropdown--open"),c=b.outerHeight(),b=b.outerWidth(),a.removeClass("b-comp-menu-dropdown--open");return{width:b,height:c}}function H(a){var b=c(window),e=b.width(),g=b.height(),l=b.scrollLeft(),h=c(document).height();a.each(function(a,b){var f=c(b),p=f.offset(),r=f.find(".js-comp-menu-dropdown__trigger").outerHeight();a=f.find(".js-comp-menu-dropdown__trigger").outerWidth();b=f.find(".js-comp-menu-dropdown__content");var d=b.find(".b-comp-menu-dropdown__content-item");
b.css("width","auto");A(f,b,1);var k=G(f,b),m=k.height;k=k.width;d=Math.max(Math.min(Math.floor(d.length/15),4),1);m=Math.ceil(m/(g-100));k=Math.floor((e-0)/k);k=Math.max(k,1);d=Math.max(d,m);d=Math.min(d,4);d=Math.min(d,k);A(f,b,d);k=G(f,b);m=k.height;k=k.width;d=b.css("margin-top");var t=parseInt(d,10),n=p.top;d=n>=m;var q=h-n>=r+m+t;p=p.left-l+a;r=e-p+a;m=p>=k;t=r>=k;n=[];d&&!q?(f.addClass("b-comp-menu-dropdown--direction-up"),n.push("Forced up")):q&&!d&&(f.removeClass("b-comp-menu-dropdown--direction-up"),
n.push("Forced down"));d=f="";var u=q=0,v=0;m&&!t?(b.removeClass("b-comp-menu-dropdown__content--left").addClass("b-comp-menu-dropdown__content--right"),f="right",d="left",n.push("Forced right alignment (opens left)")):t&&!m?(b.removeClass("b-comp-menu-dropdown__content--right").addClass("b-comp-menu-dropdown__content--left"),f="left",d="right",n.push("Forced left alignment (opens right)")):t||m||(p>=r?(b.removeClass("b-comp-menu-dropdown__content--left").addClass("b-comp-menu-dropdown__content--right"),
f="right",d="left",u=k-p,v=r-a,q=Math.min(u,v),n.push("Forced right alignment (opens left) (More space on left)")):(b.removeClass("b-comp-menu-dropdown__content--right").addClass("b-comp-menu-dropdown__content--left"),f="left",d="right",u=k-r,v=p-a,q=Math.min(u,v),n.push("Forced left alignment (opens right) (More space on right)")));f&&d&&(0<q?b.css(f,"-"+q+"px"):b.css(f,"0"),b.css(d,"auto"));v<u&&b.css("width",e).find(".b-comp-menu-dropdown__content-item").addClass("ellipsis").find("> a").addClass("ellipsis")})}
function I(){var a=c(".js-comp-menu-dropdown").filter(function(){return c(this).is(".b-comp-menu-dropdown--open")});H(a)}function B(){var a=c(".js-select-on-xsmall, .js-select-on-small, .js-select-when-dropdown"),b=c("body").is(".l-small"),e=c("body").is(".l-xsmall");a.each(function(){var a=c(this),l=0<a.next(".vb-select-el").length,h=a.is(".js-select-when-dropdown")||a.is(".js-select-on-xsmall")&&e||a.is(".js-select-on-small")&&b;h&&!l?(J(a).removeClass("h-hide-imp").selectBox(),a.addClass("h-hide-imp")):
!h&&l&&(J(a).selectBox("destroy").addClass("h-hide-imp"),a.removeClass("h-hide-imp"))})}function J(a){var b=a.next(".vb-select-el");b.length||(b=c('<select class="vb-select-el"></select>'),1!=a.find(".b-comp-menu-dropdown__content-item.b-comp-menu-dropdown__content-item--current").length&&c("<option></option>").addClass("js-noop-label").text(a.find(".js-comp-menu-dropdown__trigger").text()).appendTo(b),a.find(".js-comp-menu-dropdown__content .b-comp-menu-dropdown__content-item").each(function(a,g){var e=
c(this);g=e.is(".b-comp-menu-dropdown__content-item--current");var h=e.find("> a");e=h.html()||e.html();c("<option></option>").html(e).data("vb-option-link",h).appendTo(b);g&&(b.get(0).selectedIndex=a)}),b.addClass("b-comp-menu-dropdown__select").on("change",function(a){a=a.target;idx=a.selectedIndex;opt=a.options[idx];(linkHref=($link=c(opt).data("vb-option-link"))?$link.attr("href"):null)&&"#"!=linkHref.substr(0,1)?window.location.href=linkHref:($link.one("click",function(a){var b=$link.data("href");
b&&(window.location.href=b,a.preventDefault())}),$link.trigger("click"))}).insertAfter(a),(a=a.data("add-classes-to-select-el"))&&b.addClass(a));return b}function K(){c(".js-select-on-xsmall, .js-select-on-small").each(function(){var a=c(this).data("vb-select-el");a&&(a=a.nextAll(".selectBox"),a=a.not(a.first()),a.remove())})}function N(a){a.each(function(a,e){a=c(this).closest(".conversation-toolbar");1==a.length&&a.height(a.height())});a.addClass("b-comp-menu-dropdown--open");H(a);a.find(".js-comp-menu-dropdown__trigger-arrow").removeClass("b-icon--disabled")}
function w(a){a.removeClass("b-comp-menu-dropdown--open");a.find(".js-comp-menu-dropdown__trigger-arrow").addClass("b-icon--disabled")}function L(){var a=c(".js-comp-menu-dropdown__trigger").filter(function(){return"1"!=c(this).data("comp-menu-dropdown-initialized")});a.off("click",D).on("click",D).attr("tabindex","0").addClass("js-button").data("comp-menu-dropdown-initialized","1");c(document).off("click",x).on("click",x);M();var b=c();a.each(function(a,g){a=c(g);a.is(".b-comp-menu-dropdown__trigger--arrow")&&
1>a.find(".js-comp-menu-dropdown__trigger-arrow").length&&c('<span class="vb-icon b-icon__arrow-down-s b-icon--disabled js-comp-menu-dropdown__trigger-arrow h-align-middle"></span>').appendTo(a);a=a.parents(".js-shrink-event-parent");a.length&&(b=b.add(a))});b.length&&vBulletin.Responsive.Debounce.checkShrinkEvent(b);c(".js-comp-menu-dropdown").removeClass("b-comp-menu-dropdown--open-on-hover");B();c(document).off("vb-filterposts",K).on("vb-filterposts",K);c(".b-comp-menu-dropdown__content-item:not(.js-comp-menu-dropdown__content-maintain-menu)").filter(function(){return"1"!=
c(this).data("comp-menu-dropdown__content-close-menu-initialized")}).off("click",E).on("click",E).attr("data-comp-menu-dropdown__content-close-menu-initialized","1");c(".js-comp-menu-dropdown--display-current").off("click",".b-comp-menu-dropdown__content-item",F).on("click",".b-comp-menu-dropdown__content-item",F);1>C.init&&(vBulletin.Responsive.Debounce.registerCallback(I),vBulletin.Responsive.Debounce.registerCallback(B));C.init++}var C=vBulletin.ensureObj("jsexec.css_b_comp_menu_dropdown",{exec:0,
init:0});C.exec++;c(L);return{init:L,updateMenuFormat:I,updateMenuAsSelectElement:B,setMenuColumnCount:A}}(jQuery);
;

// ***************************
// js.compressed/pmchat.js
// ***************************
vBulletin.precache(["error","pmchat_close_button_label","pmchat_idle_disconnected_message","pmchat_idle_disconnected_title","pmchat_reconnect_button_label"],["pmchat_enabled","pmchat_header_polling_interval","pmchat_chat_polling_idle_timeout","pmchat_chat_polling_min_interval","pmchat_chat_polling_max_interval"]);
(function(a){function G(a){a=a.hasOwnProperty("messageid")?"?messageid="+encodeURIComponent(a.messageid):"?aboutNodeid="+encodeURIComponent(a.aboutNodeid)+"&toUserid="+encodeURIComponent(a.toUserid);return""==a?"#":U+a}function H(a){var r;a=a.hasOwnProperty("url")?a.url:G(a);"#"!=a&&((r=window.open(a,"_blank","width=600,height=700,resizable=yes,scrollbars=yes,status=yes"))&&!r.closed&&"undefined"!=typeof r.closed||window.open(a+queryString))}function V(){function h(a){var k=a[Object.keys(a)[0]];k=
k&&k.orderListForJs||[];var b=k.length,g=!1,h={};if(0<b)c.find(".js-pmchat__submenu__ephemeral").remove();else return!1;for(var m=0;m<b;m++){var l=k[m];if(a.hasOwnProperty(l)){var e=a[l];var q=I.clone(!0);var p=q.find(".js-pmchat__submenu__link"),v="js-pmchat__messagefinder__"+l;q.removeClass("h-hide-imp");p.attr("data-starter",l).prop("title",e.previewtext).attr("href",G({messageid:l}));q.find(".js-pmchat__submenu__title").html(e.title);0==e.msgread&&q.addClass("b-comp-menu-dropdown__content-item--unread");
q.addClass(v);q.insertBefore(w);(q=0<y&&(!n.hasOwnProperty(l)||n[l].publishdate!=e.publishdate||n[l].userid!=e.userid)&&0==e.msgread&&e.userid!=pageData.userid)&&(g=!0);h[l]={publishdate:e.publishdate,userid:e.userid,title:e.title,previewtext:e.previewtext,findmehelper:v,isNew:q}}}n=h;y=z;0<w.prev(".b-comp-menu-dropdown__content-item").length?w.next(".b-comp-menu-dropdown__content-item").addClass("b-comp-menu-dropdown__content-item--divider").removeClass("b-comp-menu-dropdown__content-item--first"):
w.next(".b-comp-menu-dropdown__content-item").removeClass("b-comp-menu-dropdown__content-item--divider").addClass("b-comp-menu-dropdown__content-item--first");g&&r()}function r(){console.log("New Messages found in polling! Notifying user");if(p.find(".js-comp-menu-dropdown").hasClass("b-comp-menu-dropdown--open")){var k=[];for(b in n)n.hasOwnProperty(b)&&n[b].isNew&&k.push("."+n[b].findmehelper);if(0<k.length){var b=k.join(", ");var c=a(b),g=setInterval(function(){c.toggleClass("b-comp-menu-dropdown__content-item--unread-alert")},
100);setTimeout(function(){clearInterval(g);c.removeClass("b-comp-menu-dropdown__content-item--unread-alert")},3E3)}}else p.find(".js-comp-menu-dropdown").addClass("b-comp-menu-dropdown--alert")}function P(){m+=60;m>=A&&B()}function B(){clearTimeout(D);m>=A?console.log("Header polling stopped due to idle timeout. (idle time: "+m+"s)"):D=setTimeout(Q,1E3*g)}function Q(){B();console.log("Polled for header data!"+Date.now());K()}function L(a,b,c){a.length&&(a.text()!=b&&(a.text(b),a.toggleClass("h-hide-imp",
0>=b)),c&&a.parents().eq(1).toggleClass("h-hide-imp",0>=b))}function K(c){E?"function"==typeof c&&M&&M.always(c):(E=!0,b.removeClass("h-hide-imp"),vBulletin.loadingIndicator.suppressNextAjaxIndicator(),M=vBulletin.AJAX({call:"/chat/loadheaderdata",success:function(b){var c=b.headerCounts;L(R,c.messages);L(W,c.totalcount);S.each(function(){var b=a(this),k=b.data("folderid")||0;L(b,c.details&&c.details[k]&&c.details[k].count||0,!0)});a.isEmptyObject(b.messages)||h(b.messages)},api_error:vBulletin.ajaxtools.logApiError,
error:vBulletin.ajaxtools.logAjaxError,complete:[function(){E=!1;b.addClass("h-hide-imp");z=Date.now()},c]}))}var p=a(".js-pmchat__dropdown"),R=p.find(".js-pmchat__messages-count"),W=a(".notifications-count").not(".js-pmchat__messages-count").not("[data-folderid]"),S=a(".notifications-count[data-folderid]").not(".js-pmchat__messages-count"),c=p.find(".js-pmchat__dropdown-submenu"),I=c.find(".js-pmchat__dropdown__single-pm-template").removeClass("js-pmchat__dropdown__single-pm-template"),w=c.find(".js-pmchat__insert-marker"),
b=a(".js-pmchat__dropdown-submenu").find(".js-pmchat__submenu__loading-icon");p.find(".js-pmchat__header-data");var g=vBulletin.options.get("pmchat_header_polling_interval")||30,m=0,A=vBulletin.options.get("pmchat_chat_polling_idle_timeout")||300,z=0,n={},y=0,E=!1,M=null,X=a.debounce(100,function(){"function"==typeof vBulletin.CompMenuDropdown.updateMenuFormat&&vBulletin.CompMenuDropdown.updateMenuFormat()});c.off("click").on("click",".js-pmchat__submenu__link",function(){var b={},c=a(this).attr("href");
"#"!=c?b.url=c:b.messageid=a(this).data("starter");H(b);a(this).parent().removeClass("b-comp-menu-dropdown__content-item--unread");return!1});a(".js-pmchat-reload-header").on("click",function(a){p.find(".js-comp-menu-dropdown").removeClass("b-comp-menu-dropdown--alert");m=0;Date.now()-z<1E3*g?console.log("PM Load aborted: less than "+g+" seconds since last load."):(B(),K(X))});(function(){console.log("Idle detection enabled");setInterval(P,6E4);a(document).on("click keypress scroll",function(a){m=
0})})();var D=setTimeout(Q,1E3*g)}function da(){function h(){var b=a(".js-pmchat__insert-marker").offset().top,d=a(".js-pm-content-entry-container"),ea=d.outerHeight();d="fixed"==d.css("position");var f=a(window).outerHeight();(!d||b>f-ea)&&vBulletin.animateScrollTop(b)}function r(b){if(k)console.log("Nothing to load, awaiting first message.");else if(t.messagesLoading)console.log("loadNewMessages() rejected: Still awaiting messages from a previous call.");else{console.log("loadNewMessages() executing.");
var d=[];w.find(".js-pmchat__post-wrapper").each(function(b,f){b=parseInt(a(f).data("publishdate")||0,10);var Y=parseInt(a(f).data("nodeid")||0,10);b>y&&(y=b,E=Y);0<Y&&d.push(Y);y>b&&a(f).removeClass("js-pmchat__post-wrapper")});t.messagesLoading=!0;vBulletin.loadingIndicator.suppressNextAjaxIndicator();vBulletin.AJAX({call:"/chat/loadnewmessages",data:{parentid:m,newreplyid:b,lastpublishdate:y,lastnodeid:E,loadednodes:d},success:function(b){v=(v+1)%10;b.html&&""!==b.html?(N[v]=1,J=Date.now(),console.log("loadNewMessages(): Inserting new messages."),
a(b.html).insertBefore(M),h()):(N[v]=-1,console.log("loadNewMessages(): No new messages."))},error:function(a){console.log("loadNewMessages(): Error loading new PMs. Ajax result:");console.log(a)},complete:function(a){window.vBulletin.loadingIndicator.hide();t.messagesLoading=!1;t.queued&&(t.queued=!1,window.vBulletin.loadingIndicator.show(),setTimeout(r,0));P()}})}}function P(){clearTimeout(H);var a=Date.now(),b=a-J,c=a-G,f=0<N[v],g=N.reduce(function(a,b){return a+b})/10;0<J?f?(e>O&&(e=O),--e,J>
u&&(u=J)):e-=1*g:e+=1;e<C?e=C:e>l&&(e=l);G=a;T&&(T=!1,u=a);f=(a-u)/1E3;console.log("Idle time: "+f+"s. (timeout: "+q+"s)");f>=q?(console.log("Polling for messages stopped due to idle timeout. Idle start time: "+u+" time now: "+a),Q(),u=a):(H=setTimeout(B,1E3*e),console.log("Polling for messages complete. Next poll in "+e+"seconds. Time since last poll: "+c/1E3+"s, since last hit: "+b/1E3+"s."))}function B(){P();r()}function Q(){if(null==D){var a={title:vBulletin.phrase.get("pmchat_idle_disconnected_title"),
message:vBulletin.phrase.get("pmchat_idle_disconnected_message"),width:"50%",buttonLabel:{yesLabel:vBulletin.phrase.get("pmchat_reconnect_button_label"),noLabel:vBulletin.phrase.get("pmchat_close_button_label")},onClickYes:function(){u=Date.now();e=O;B()},onClickNo:function(){window.close()}};D=openConfirmDialog(a)}else D.dialog("open")}function L(a){a?(U.remove(),aa.remove(),b.attr("data-message-type","pm-reply"),History.replaceState({},n,pageData.baseurl_pmchat+"?messageid="+a),K(a)):console.log("Missing nodeid for loadParticipants()")}
function K(b,d){vBulletin.AJAX({call:"/chat/loadparticipants",data:{nodeid:b},success:function(b){var f=a(".js-pmchat__participants-insert-marker");b.participants_html&&""!=b.participants_html&&f.length&&(f.html(b.participants_html),F.trigger("event-js-content-change"));I.hasClass("h-hide")&&(I.removeClass("h-hide"),ba.trigger("click"),Z.removeClass("h-hide"));b.phrase&&""!=b.phrase&&a(".js-participants-count-phrase").text(b.phrase);b.title&&""!=b.title&&a(document).find("title").html(b.title);if(d&&
d.success&&"function"==typeof d.success)return d.success.apply(this,[b])},complete:function(a,b,c){if(d&&d.complete&&"function"==typeof d.complete)return d.complete.apply(this,[a,b,c])},error:function(a,b,d){console.log("/ajax/chat/loadparticipants failed!");console.log("----------------");console.log("jqXHR:");console.dir(a);console.log("text status:");console.dir(b);console.log("error thrown:");console.dir(d);console.log("----------------")}})}function p(b){var d=a(this).attr("href");d.startsWith("#")||
(b.preventDefault(),(b=window.open(d,"_blank"))&&!b.closed&&"undefined"!=typeof b.closed||window.open(d))}function R(a){Z.animate({height:"toggle"},{duration:"fast",start:function(){F.trigger("event-js-element-resize-start")},progress:function(a,b,f){F.trigger("event-js-element-resize")},complete:function(){F.trigger("event-js-element-resize")}});a.preventDefault()}function W(){var b=function(a){var b=0<F.height();if(a.data&&a.data.command)switch(a.data.command){case "open":x.removeClass("h-hide");
break;case "close":x.addClass("h-hide");break;default:b?x.toggleClass("h-hide"):x.removeClass("h-hide")}else x.toggleClass("h-hide");b?F.trigger("event-js-element-resize"):R(a);a.preventDefault()},d={},c=a(".js-participants-add-recipients-input"),f=new vBulletin_Autocomplete(c,{apiClass:"user",afterAdd:function(a,b,f){"undefined"!=typeof f&&"undefined"!=typeof f.id&&f.id&&(d[b]=f.id)},delimiter:" ; "}),e=function(a){f.clearElements();a.data?a.data.command="close":a.data={command:"close"};b(a)};console.log({addRecipientsAutoComplete:f});
ca.off("click").on("click",{command:"toggle"},b);x.find(".js-add-recipients-cancel").off("click").on("click",{command:"close"},e);x.find(".js-add-recipients-submit").off("click").on("click",function(a){var b=f.getInputField(),c=b.val();c&&(b.val(""),f.addElement(c,c));b=f.getValues();vBulletin.AJAX({call:"/ajax/api/content_privatemessage/addPMRecipientsByUsernames",data:{pmid:m,usernames:b,usernamesToIds:d},success:function(b){K(m,{success:function(){e(a);t.messagesLoading?t.queued=!0:r()},complete:function(){window.vBulletin.loadingIndicator.hide()}})}})})}
function S(b){function d(){if("fixed"==f.css("position")){e.removeClass("h-hide");var a=f.outerHeight()-30;e.css("height",a+"px")}else e.addClass("h-hide")}var c=b+"-replacement",f=a("."+b),e=a("."+c);0==e.length&&(e=a("<div />").addClass(c).insertAfter(f));a(d);a(document).off("click",d).on("click",d);vBulletin.Responsive.Debounce.registerCallback(d);CKEDITOR.on("instanceReady",function(a){d();a.editor.on("focus",function(){setTimeout(function(){d()},0)})});f.on("event-js-element-resize",d)}var c=
a(".js-pmchat__container"),I=a(".js-pmchat__participants"),w=c.find(".js-pmchat__thread-container"),b=c.find("form"),g=c.find(".js-pmchat__data");c=parseInt(g.data("pmchannelid"),10);var m=parseInt(g.data("parentid"),10),A=parseInt(g.data("pm_messageid"),10),z=parseInt(g.data("to_userid"),10),n=g.data("pm_title"),y=0,E=0,M=a(".js-pmchat__insert-marker"),X=w.find(".js-pmchat__thread-placeholder"),D,k=!1;c!=m&&0<A||(k=!0);var G=0,H,u=Date.now(),O,C=vBulletin.options.get("pmchat_chat_polling_min_interval")||
1,l=vBulletin.options.get("pmchat_chat_polling_max_interval")||30;l<C&&(c=l,l=C,C=c);var e=O=(10*C+1*l)/11;var q=vBulletin.options.get("pmchat_chat_polling_idle_timeout")||300,J=0,v=9,N=[];for(c=0;10>c;++c)N[c]=0;var t={messagesLoading:!1,queued:!1},T=!1,ba=a(".js-participants-collapser-ui"),Z=a(".js-participants-collapsible"),F=Z.find(".js-vbscroller-wrapper"),ca=a(".js-participants-show-add-recipients-ui"),x=a(".js-participants-add-recipients-wrapper"),U=b.find(".js-wrapper-contententry_title"),
aa=b.find(".js-wrapper-contententry__msgRecipients");new vBulletin_Autocomplete(a(".privatemessage_author"),{apiClass:"user",delimiter:" ; "});a(".js-pm-content-entry-container .js-pmchat-submit").off("click").on("click",function(c){function d(b,c,d){a("<input>").attr({type:"hidden",name:c,value:d}).appendTo(b)}var e=a(this);e.prop("disabled",!0);u=Date.now();k?(0==b.find('input[name="msgRecipients"]').length&&z?(console.log({msg:"sentto input added with prefill:",to_userid:z}),d(b,"sentto[]",z)):
console.log({msg:'User editable input[name="msgRecipients"] was found. Prefilled sentto skipped.'}),0==b.find('input[name="title"]').length?(console.log({msg:"title input added with prefill:",pm_title:n}),d(b,"title",n)):console.log({msg:'User editable input[name="title"] was found. Prefilled title skipped.'})):(c=b.find('input[name="respondto"]'),0<c.length?c.val(A):d(b,"respondto",A),0==b.find('input[name="msgtype"]').length&&d(b,"msgtype","message"));k&&X.addClass("h-hide");vBulletin.loadingIndicator.show();
vBulletin.AJAX({url:b.attr("action"),data:b.serialize(),success:function(c){c.nodeId&&(c=parseInt(c.nodeId,10),k&&(b.find('input[name="parentid"]').val(c),g.data("parentid",c),g.data("pm_messageid",c),g.attr("data-parentid",c),g.attr("data-pm_messageid",c),m=A=c,k=!1,L(c)),console.log("==================NEW MESSAGE POSTED, LOADING NEW MESSAGES!"),t.messagesLoading?t.queued=!0:r(c),vBulletin.contentEntryBox.resetForm(b,!1,function(){var c=b.attr("ck-editorid")||a(".js-editor",b).attr("id");c=vBulletin.ckeditor.getEditor(c);
vBulletin.hv.reset();c.focus()}))},api_error:vBulletin.hv.resetOnError,complete:function(a){vBulletin.loadingIndicator.hide();e.prop("disabled",!1)}});return!1});c="a:not('.js-pmchat-ignoreanchor')";var V=`.js-namecard-html ${c}`;vBulletin.options.get("usenamecard")&&(c+=":not([data-vbnamecard])",a("body").on("click",V,p));w.on("click",c,p);I.on("click",c,p);a("body").on("click","a.js-pmchat-ignoreanchor",function(a){a.preventDefault()});ba.off("click").on("click",R);0<ca.length&&0<x.length&&W();
a(".js-pm-content-entry-container .js-button").enable();h();B();(function(){a(document).on("click keypress scroll",function(a){T=!0});var c=b.attr("ck-editorid")||a(".js-editor",b).attr("id");a("#"+c).on("afterInit",function(){var a=vBulletin.ckeditor.getEditor(c);a.on("contentDom",function(){function b(){T=!0}var c=a.editable();null!=c&&(c.attachListener(c,"keypress",b),c.attachListener(c,"click",b),c.attachListener(c,"focus",b))})})})();window.setTimeout(function(){var c=b.attr("ck-editorid")||
a(".js-editor",b).attr("id");a("#"+c).on("afterInit",function(){var a=vBulletin.ckeditor.getEditor(c);if(a){console.log("Setting predefined starter PM text: "+g.data("pm_textprefill"));var b=g.data("pm_textprefill");b&&(b+="&nbsp;");a.setData(b,function(){vBulletin.ckeditor.fixTableFunctionality.call(vBulletin.ckeditor,{},a);var c=aa.find(".autocompleteHelper");0<c.length?c.trigger("focus"):a.focus();b&&(c=a.createRange(),c.moveToPosition(c.root,CKEDITOR.POSITION_BEFORE_END),a.getSelection().selectRanges([c]));
h()})}else console.log("Editor not found, cannot set predefined starter PM text")})},0);S("js-pm-content-entry-container");S("js-pmchat__header");(function(){var b=a("#debug-information");if(1==b.length){var c=function(){a("body").is(".l-xsmall")?b.appendTo("body"):b.insertBefore(".js-pm-content-entry-container")};c();vBulletin.Responsive.Debounce.registerCallback(c)}})()}var U=pageData.baseurl_pmchat;(function(){a(function(){a("body").off("click",".js-pmchat-link").on("click",".js-pmchat-link",function(h){h.preventDefault();
h={url:a(this).attr("href")};H(h);return!1});var h=a(".js-pmchat__dropdown");0<h.length?h.attr("data-initialized")?console.log("PM Dropdown already initialized. Skipping re-init."):(console.log("Initializing PM Dropdown!"),h.attr("data-initialized",!0),V()):console.log("PM Dropdown not detected, skipping init.");h=a(".js-pmchat__container");0<h.length?h.attr("data-initialized")?console.log("PM Chat window already initialized. Skipping re-init."):(console.log("Initializing PM Chat window!"),h.attr("data-initialized",
!0),da()):console.log("PM Chat window not detected, skipping init.")})})()})(jQuery);
;

// ***************************
// js.compressed/module-search2.js
// ***************************
(function(e){function q(a){var c=a.find(".js-widget-search2-nodelist-item"),b=0,d=a.find(".js-fixed-event-year-header"),l=a.find(".js-year-header");0==d.length&&(d=e("<li />").addClass("js-fixed-event-year-header b-event__listyear b-event__listyear--fixed h-hide").prependTo(a));e.each(l,function(a,b){a=e(b);a.next().hasClass("js-widget-search2-nodelist-item")||a.remove()});e.each(c,function(a,c){a=e(c);c=parseInt(a.data("start-year"),10);var d=a.prev(".js-year-header");c>b&&(d.length||
e("<li />").addClass("js-year-header b-event__listyear").text(c).data("start-year",c).insertBefore(a),b=c)})}function t(a){var c=a.find(".js-widget-search2-nodelist-item"),b=a.data("search-max-page")||!1,d=a.data("loaded-pages")||{};c.removeClass("b-event--lastchild h-hide");q(a);a.find(".js-loading").appendTo(a);a.find(".js-no-more-items").appendTo(a);b&&d.hasOwnProperty(b)&&a.find(".js-no-more-items").removeClass("h-hide");c=a.height();b=a.scrollTop();a.height("auto");d=a.height();a.height(c);a.scrollTop(b);
a.data("full-height",d)}function y(a,c){var b=c.$anchorItem&&c.$anchorItem.offset().top||0;c=c.anchorItemPreviousTop-b;a.scrollTop();a.scrollTop(a.scrollTop()-c)}function z(a){var c=a.find(".js-widget-search2-nodelist-item"),b={},d=a.offset().top,l=d+a.height(),h=!1,g=!1,k,p=Number.POSITIVE_INFINITY,m,u=0;e.each(c,function(a,c){a=e(c);c=a.hasClass("h-hide");var f=a.offset().top,A=f+a.height(),r=a.data("nodeid");b["nodeid"+r]=!0;h=!c&&!(A<=d||l<=f);g=d<=f;"undefined"==typeof k&&h&&g&&(k=a,p=k.data("page"));
h&&(m=a,u=m.data("page"))});return{$items:c,haveNodeids:b,$firstVisibleItem:k,firstVisiblePage:p,$lastVisibleItem:m,lastVisiblePage:u,$anchorItem:m,anchorItemPreviousTop:m&&m.offset().top||0}}function v(a){a=e(a.target);var c=a.scrollTop();a.data("full-height");var b=a.position().top,d=a.height(),f=a.find(".js-widget-search2-nodelist-item");d=f.slice(-5).first().position().top-b<d;var h=f.slice(0,5).last();h=h.position().top-b+h.height()>b;var g=a.find(".js-fixed-event-year-header");if(0<c){var k=
0;e.each(f,function(a,c){a=e(c);c=a.position().top-b;var d=a.height();if(0<c+d)return k=a.data("start-year"),!1});g.css({top:b,width:f.first().width()}).text(k).removeClass("h-hide")}else g.addClass("h-hide");d?w(a,"bottom"):h&&w(a,"top")}function x(){e(".js-widget-search2").each(function(a,c){c=e(c);a=c.find(".js-fixed-event-year-header");c=c.find(".js-widget-search2-nodelist-item").first();a.css("width",c.width())})}function w(a,c){if(!f){f=!0;var b=a.closest(".js-widget-search2"),d=b.data("widget-id"),
l=b.data("widget-instance-id"),h=a.data("search-max-page")||Number.POSITIVE_INFINITY,g=a.data("loaded-pages")||{};e.isEmptyObject(g)&&(b=b.data("current-page"),g={},g[b]=b,a.data("loaded-pages",g));var k=Object.keys(g).sort(function(a,c){return parseInt(a,10)-parseInt(c,10)});if("bottom"==c){if(b=g[k[k.length-1]]+1,h<b){f=!1;return}}else if("top"==c){if(b=g[k[0]]-1,1>b){f=!1;return}}else{f=!1;return}a.find(".js-loading").removeClass("h-hide");vBulletin.AJAX({call:"/ajax/render/widget_search2",data:{widgetinstanceid:l,
widgetid:d,currentPage:b},success:function(b){var d=e(b).filter(".js-widget-search2"),f=d.find(".js-widget-search2-nodelist"),h=f.find(".js-widget-search2-nodelist-item");b=z(a);var l=b.$items,q=l.first(),p=l.length,r=b.haveNodeids;f=f.data("search-has-more");d=d.data("current-page");g[d]=d;a.data("loaded-pages",g);f||a.data("search-max-page",d);e.each(h,function(b,d){b=e(d);d=b.data("nodeid");"undefined"==typeof r["nodeid"+d]&&("bottom"==c?a.append(b):"top"==c&&q.before(b),p++)});if(200<p){var n;
h=a.find(".js-widget-search2-nodelist-item");"bottom"==c?n=g[k[0]]:"top"==c&&(n=g[k[k.length-1]]);h=h.filter("[data-page='"+n+"']");if(n<=b.firstVisiblePage||n>=b.lastVisiblePage)h.remove(),delete g[n],a.data("loaded-pages",g)}t(a);y(a,b)},complete:function(){a.find(".js-loading").addClass("h-hide");f=!1}})}}var f=!1;e(function(){var a=e(".js-widget-search2");a.length&&e.each(a,function(a,b){a=e(b);if("1"!=a.data("vb-continuous-scroll-initialized")){b=a.find(".js-widget-search2-nodelist");if(b.data("search-has-more")||
b.find(".js-widget-search2-nodelist-item.h-hide").length){q(b);var c=b.parents(".js-show-on-tabs-create.h-hide");c.length&&c.removeClass("h-hide");b.css({height:b.height(),overflowY:"scroll"});c.length&&c.addClass("h-hide")}t(b);b.off("scroll",v).on("scroll",v);e(window).off("resize",x).on("resize",x);a.attr("vb-continuous-scroll-initialized","1")}})})})(jQuery);
;

// ***************************
// js.compressed/module-tabbedcontainer.js
// ***************************
(function(b){function d(a){if("1"!=a.data("vb-tabbedcontainer-tabs-initialized")){var b=a.data("default-tab")||0;a.tabs({create:function(c,e){a.find(".js-tabs-loading-placeholder").remove();a.find(".js-show-on-tabs-create").removeClass("h-hide");a.tabs("option","active",b)},activate:function(a,b){b.newPanel.find(".js-parent-tab-render-listener").trigger("parent-tab-render")}});a.attr("data-vb-tabbedcontainer-tabs-initialized","1")}}b(function(){var a=b(".js-tabbedcontainer-widget-tab-wrapper");
a.length&&b.each(a,function(a,c){d(b(c))})})})(jQuery);
;

