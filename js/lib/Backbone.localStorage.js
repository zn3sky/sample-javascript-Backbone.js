module.exports=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,r){"use strict";(function(e){function n(){var e=65536*(1+Math.random());return(0|e).toString(16).substring(1)}function i(){return""+n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}function o(e){return(0,u.result)(e,"localStorage")||(0,u.result)(e.collection,"localStorage")}function a(){return(0,u.isUndefined)(window)?e:window}Object.defineProperty(t,"__esModule",{value:!0}),t.guid=i,t.getLocalStorage=o,t.getWindow=a;var u=r(1)}).call(t,r(6))},function(e,t){e.exports=require("underscore")},function(e,t){e.exports=require("backbone")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.ajaxSync,n=(0,c.getLocalStorage)(e);return!r&&n?s.sync:l}Object.defineProperty(t,"__esModule",{value:!0}),t.LocalStorage=void 0;var o=r(2),a=n(o),u=r(4),s=r(5),c=r(0);a.default.LocalStorage=u.LocalStorage;var l=a.default.sync;a.default.sync=function(e,t,r){return i(t,r).apply(this,[e,t,r])},t.LocalStorage=u.LocalStorage},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.LocalStorage=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1),a=r(0),u={serialize:function(e){return(0,o.isObject)(e)?JSON.stringify(e):e},deserialize:function(e){return e&&JSON.parse(e)}};t.LocalStorage=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;if(n(this,e),this.name=t,this.serializer=r,!this.localStorage)throw"Backbone.localStorage: Environment does not support localStorage.";var i=this._getItem(this.name);this.records=i&&i.split(",")||[]}return i(e,[{key:"localStorage",value:function(){return(0,a.getWindow)().localStorage}},{key:"save",value:function(){this._setItem(this.name,this.records.join(","))}},{key:"create",value:function(e){return e.id||0===e.id||(e.id=(0,a.guid)(),e.set(e.idAttribute,e.id)),this._setItem(this._itemName(e.id),this.serializer.serialize(e)),this.records.push(e.id.toString()),this.save(),this.find(e)}},{key:"update",value:function(e){this._setItem(this._itemName(e.id),this.serializer.serialize(e));var t=e.id.toString();return(0,o.contains)(this.records,t)||(this.records.push(t),this.save()),this.find(e)}},{key:"find",value:function(e){return this.serializer.deserialize(this._getItem(this._itemName(e.id)))}},{key:"findAll",value:function(){var e=this;return(0,o.chain)(this.records).map(function(t){return e.serializer.deserialize(e._getItem(e._itemName(t)))}).filter(function(e){return null!=e}).value()}},{key:"destroy",value:function(e){this._removeItem(this._itemName(e.id));var t=(0,o.without)(this.records,e);return this.records=t,this.save(),e}},{key:"_clear",value:function(){var e=this.localStorage(),t=new RegExp("^"+this.name+"-");e.removeItem(this.name);for(var r in e)t.test(r)&&e.removeItem(r);this.records.length=0}},{key:"_storageSize",value:function(){return this.localStorage().length}},{key:"_getItem",value:function(e){return this.localStorage().getItem(e)}},{key:"_itemName",value:function(e){return this.name+"-"+e}},{key:"_setItem",value:function(e,t){this.localStorage().setItem(e,t)}},{key:"_removeItem",value:function(e){this.localStorage().removeItem(e)}}]),e}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(){return u.default.$?(0,s.result)(u.default.$,"Deferred",!1):(0,s.result)(u.default,"Deferred",!1)}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(0,c.getLocalStorage)(t),o=void 0,a=void 0,l=i();try{switch(e){case"read":o=(0,s.isUndefined)(t.id)?n.findAll():n.find(t);break;case"create":o=n.create(t);break;case"patch":case"update":o=n.update(t);break;case"delete":o=n.destroy(t)}}catch(e){a=22===e.code&&0===n._storageSize()?"Private browsing is unsupported":e.message}return o?(r&&r.success&&("0.9.10"===u.default.VERSION?r.success(t,o,r):r.success(o)),l&&l.resolve(o)):(a=a?a:"Record Not Found",r&&r.error&&("0.9.10"===u.default.VERSION?r.error(t,a,r):r.error(a)),l&&l.reject(a)),r&&r.complete&&r.complete(o),l&&l.promise()}Object.defineProperty(t,"__esModule",{value:!0}),t.sync=o;var a=r(2),u=n(a),s=r(1),c=r(0)},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){e.exports=r(3)}]);