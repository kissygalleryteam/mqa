/*!build time : 2014-07-30 6:00:11 PM*/
KISSY.add("kg/mqa/2.0.0/mqa",function(){window.matchMedia=window.matchMedia||function(a){"use strict";var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(window.document);var a={},b=function(a,b){var c=function(){b.apply(this,arguments)};return a.addListener(c),c},c={add:function(b,c){if(b in a)throw new Error(b+" has already been added!");return a[b]={media:c,mql:null,handlers:[],wraps:[]},this},remove:function(b){return this.off(b)?delete a[b]:!1},on:function(c,d,e){c in a||(a[c]={media:c,mql:window.matchMedia(c),handlers:[],wraps:[]});var f,g=a[c],h=g.mql||(g.mql=window.matchMedia(g.media)),i=g.handlers;return i.indexOf(d)>-1?(e&&d(h),this):(f=b(h,d),i.push(d),g.wraps.push(f),e&&d(h),this)},off:function(b,c){if(!(b in a))return!1;var d,e,f,g=a[b];if(d=g.mql,e=g.wraps,f=g.handlers,"function"!=typeof c)return e.forEach(function(a){d.removeListener(a)}),!0;var h=f.indexOf(c);return h>-1?(d.removeListener(e[h]),f.splice(h,1),e.splice(h,1),!0):!1},match:function(b){return b in a&&a[b].mql.matches||window.matchMedia(b).matches}};return c}),KISSY.add("kg/mqa/2.0.0/index",function(a,b){return b},{requires:["./mqa"]});