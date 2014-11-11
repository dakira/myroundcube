(function(c,E,P){function Z(a){var b=this,f=a.elements,e=f.tooltip,g=".bgiframe-"+a.id;c.extend(b,{init:function(){f.bgiframe=c('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>');f.bgiframe.appendTo(e);e.bind("tooltipmove"+g,b.adjust)},adjust:function(){var b=a.get("dimensions"),c=a.plugins.tip,h=f.tip,g,
j;j=parseInt(e.css("border-left-width"),10)||0;j={left:-j,top:-j};c&&h&&(g="x"===c.corner.precedance?["width","left"]:["height","top"],j[g[1]]-=h[g[0]]());f.bgiframe.css(j).css(b)},destroy:function(){f.bgiframe.remove();e.unbind(g)}});b.init()}function $(a){var b=this,f=a.options.show.modal,e=a.elements,t=e.tooltip,q=".qtipmodal"+a.id,n;a.checks.modal={"^show.modal.(on|blur)$":function(){b.init();e.overlay.toggle(t.is(":visible"))}};c.extend(b,{init:function(){if(!f.on)return b;n=b.create();t.attr("is-modal-qtip",
r).unbind(".qtipmodal").unbind(q).bind("tooltipshow.qtipmodal tooltiphide.qtipmodal",function(a,c,f){b[a.type.replace("tooltip","")](a,f)}).bind("tooltipfocus.qtipmodal",function(a,c,b){n[0].style.zIndex=b-1}).bind("tooltipblur.qtipmodal",function(a){c("[is-modal-qtip]:visible").not(t).last().qtip("focus",a)});f.escape&&c(E).unbind(q).bind("keydown"+q,function(c){27===c.keyCode&&t.hasClass(R)&&a.hide(c)});f.blur&&e.overlay.unbind(q).bind("click"+q,function(c){t.hasClass(R)&&a.hide(c)});return b},
create:function(){var a=c("#qtip-overlay");if(a.length)return e.overlay=a;n=e.overlay=c("<div />",{id:"qtip-overlay",css:{position:"absolute",top:0,left:0,display:"none"},mousedown:function(){return g}}).appendTo(document.body);c(E).unbind(".qtipmodal").bind("resize.qtipmodal",function(){n.css({height:Math.max(c(E).height(),c(document).height()),width:Math.max(c(E).width(),c(document).width())})}).trigger("resize");return n},toggle:function(a,s,j){if(a&&a.isDefaultPrevented())return b;a=f.effect;
var q=s?"show":"hide",v=c("[is-modal-qtip]:visible").not(t);n||(n=b.create());if(n.is(":animated")&&!s||!s&&v.length)return b;s&&e.overlay.css("cursor",f.blur?"pointer":"");n.stop(r,g);c.isFunction(a)?a.call(n,s):a===g?n[q]():n.fadeTo(parseInt(j,10)||90,s?0.7:0,function(){s||c(this).hide()});return b},show:function(a,c){return b.toggle(a,r,c)},hide:function(a,c){return b.toggle(a,g,c)},destroy:function(){var b=n;b&&(b=1>c("[is-modal-qtip]").not(t).length,b?(e.overlay.remove(),c(E).unbind(".qtipmodal")):
e.overlay.unbind(".qtipmodal"+a.id));return t.removeAttr("is-modal-qtip").unbind(".qtipmodal")}});b.init()}function aa(a){function b(a){var c="y"===a.precedance,b=C[c?"width":"height"],d=C[c?"height":"width"],f=-1<a.string().indexOf("center"),l=b*(f?0.5:1),w=Math.pow;a=Math.round;var H=Math.sqrt(w(l,2)+w(d,2)),l=[x/l*H,x/d*H];l[2]=Math.sqrt(w(l[0],2)-w(x,2));l[3]=Math.sqrt(w(l[1],2)-w(x,2));f=(H+l[2]+l[3]+(f?0:l[0]))/H;b=[a(f*d),a(f*b)];return{height:b[c?0:1],width:b[c?1:0]}}function f(a,c,b){c=c?
c:a[a.precedance];c="border-"+c+"-width";a=parseInt((j.titlebar&&"top"===a.y?j.titlebar:j.content).css(c),10);return(b?a||parseInt(p.css(c),10):a)||0}function e(b,d,f){if(j.tip){b=c.extend({},h.corner);d=f.adjusted;var e=a.options.position.adjust.method.split(" "),x=e[0],e=e[1]||e[0],l=g,w=g,H=0,M=0,m,F={},O;h.corner.fixed!==r&&("shift"===x&&"x"===b.precedance&&d.left&&"center"!==b.y?b.precedance="x"===b.precedance?"y":"x":"flip"===x&&d.left&&(b.x="center"===b.x?0<d.left?"left":"right":"left"===b.x?
"right":"left"),"shift"===e&&"y"===b.precedance&&d.top&&"center"!==b.x?b.precedance="y"===b.precedance?"x":"y":"flip"===e&&d.top&&(b.y="center"===b.y?0<d.top?"top":"bottom":"top"===b.y?"bottom":"top"),b.string()!==t&&(q!==d.top||n!==d.left)&&h.update(b,g));m=h.position(b,d);m.right!==P&&(m.left=-m.right);m.bottom!==P&&(m.top=-m.bottom);m.user=Math.max(0,s.offset);if(l="shift"===x&&!!d.left)"center"===b.x?F["margin-left"]=H=m["margin-left"]-d.left:(O=m.right!==P?[d.left,-m.left]:[-d.left,m.left],(H=
Math.max(O[0],O[1]))>O[0]&&(f.left-=d.left,l=g),F[m.right!==P?"right":"left"]=H);if(w="shift"===e&&!!d.top)"center"===b.y?F["margin-top"]=M=m["margin-top"]-d.top:(O=m.bottom!==P?[d.top,-m.top]:[-d.top,m.top],(M=Math.max(O[0],O[1]))>O[0]&&(f.top-=d.top,w=g),F[m.bottom!==P?"bottom":"top"]=M);j.tip.css(F).toggle(!(H&&M||"center"===b.x&&M||"center"===b.y&&H));f.left-=m.left.charAt?m.user:"shift"!==x||w||!l&&!w?m.left:0;f.top-=m.top.charAt?m.user:"shift"!==e||l||!l&&!w?m.top:0;n=d.left;q=d.top;t=b.string()}}
var t,q,n,h=this,s=a.options.style.tip,j=a.elements,p=j.tooltip;n=q=0;t="";var C={width:s.width,height:s.height},A,d,x=s.border||0,I=c("<canvas />")[0].getContext;h.corner=z;h.mimic=z;h.position={};a.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){h.init()||h.destroy();a.reposition()},"^style.tip.(height|width)$":function(){C={width:s.width,height:s.height};h.create();h.update();a.reposition()},"^content.title.text|style.(classes|widget)$":function(){j.tip&&h.update()}};c.extend(h,
{init:function(){var a=h.detectCorner()&&(I||c.browser.msie);a&&(h.create(),h.update(),p.unbind(".qtip-tip").bind("tooltipmove.qtip-tip",e));return a},detectCorner:function(){var b=s.corner,c=a.options.position,d=c.at,c=c.my.string?c.my.string():c.my;if(b===g||c===g&&d===g)return g;b===r?h.corner=new v.Corner(c):b.string||(h.corner=new v.Corner(b),h.corner.fixed=r);return"centercenter"!==h.corner.string()},detectColours:function(){var b,f,k=j.tip.css({backgroundColor:"",border:""});b=h.corner;var e=
b[b.precedance],g="border-"+e+"-color";f="border"+e.charAt(0)+e.substr(1)+"Color";var e=/rgba?\(0, 0, 0(, 0)?\)|transparent/i,l=c(document.body).css("color"),w=a.elements.content.css("color"),H=j.titlebar&&("top"===b.y||"center"===b.y&&k.position().top+C.height/2+s.offset<j.titlebar.outerHeight(1))?j.titlebar:j.content;p.addClass("ui-tooltip-fluid");b=k.css("background-color")||"transparent";f=k[0].style[f];if(!b||e.test(b))A=H.css("background-color"),e.test(A)&&(A=p.css("background-color")||b);if(!f||
e.test(f))if(d=p.css(g),e.test(d)||d===l)d=H.css(g),d===w&&(d=f);c("*",k).add(k).css("background-color","transparent").css("border","");p.removeClass("ui-tooltip-fluid")},create:function(){var a=C.width,b=C.height;j.tip&&j.tip.remove();j.tip=c("<div />",{"class":"ui-tooltip-tip"}).css({width:a,height:b}).prependTo(p);I?c("<canvas />").appendTo(j.tip)[0].getContext("2d").save():j.tip.html(x?'<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape><vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>':
'<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>')},update:function(a,e){var k=j.tip,t=k.children(),q=C.width,l=C.height,w=s.mimic,H=Math.round,M,m,F,n,p;a||(a=h.corner);w===g?w=a:(w=new v.Corner(w),w.precedance=a.precedance,"inherit"===w.x?w.x=a.x:"inherit"===w.y?w.y=a.y:w.x===w.y&&(w[a.precedance]=a[a.precedance]));M=w.precedance;h.detectColours();x="transparent"===d||"#123456"===d?0:s.border===r?f(a,z,r):s.border;p=w;var D=
q,U=Math.ceil(D/2),Y=Math.ceil(l/2),D={bottomright:[[0,0],[D,l],[D,0]],bottomleft:[[0,0],[D,0],[0,l]],topright:[[0,l],[D,0],[D,l]],topleft:[[0,0],[0,l],[D,l]],topcenter:[[0,l],[U,0],[D,l]],bottomcenter:[[0,0],[D,0],[U,l]],rightcenter:[[0,0],[D,Y],[0,l]],leftcenter:[[D,0],[D,l],[0,Y]]};D.lefttop=D.bottomright;D.righttop=D.bottomleft;D.leftbottom=D.topright;D.rightbottom=D.topleft;F=D[p.string()];p=b(a);k.css(p);"y"===a.precedance?n=[H("left"===w.x?x:"right"===w.x?p.width-q-x:(p.width-q)/2),H("top"===
w.y?p.height-l:0)]:n=[H("left"===w.x?p.width-q:0),H("top"===w.y?x:"bottom"===w.y?p.height-l-x:(p.height-l)/2)];I?(t.attr(p),m=t[0].getContext("2d"),m.restore(),m.save(),m.clearRect(0,0,3E3,3E3),m.translate(n[0],n[1]),m.beginPath(),m.moveTo(F[0][0],F[0][1]),m.lineTo(F[1][0],F[1][1]),m.lineTo(F[2][0],F[2][1]),m.closePath(),m.fillStyle=A,m.strokeStyle=d,m.lineWidth=2*x,m.lineJoin="miter",m.miterLimit=100,m.stroke(),m.fill()):(F="m"+F[0][0]+","+F[0][1]+" l"+F[1][0]+","+F[1][1]+" "+F[2][0]+","+F[2][1]+
" xe",n[2]=x&&/^(r|b)/i.test(a.string())?8===parseFloat(c.browser.version,10)?2:1:0,t.css({antialias:""+(-1<w.string().indexOf("center")),left:n[0]-n[2]*Number("x"===M),top:n[1]-n[2]*Number("y"===M),width:q+x,height:l+x}).each(function(a){var b=c(this);b.attr({coordsize:q+x+" "+(l+x),path:F,fillcolor:A,filled:!!a,stroked:!a}).css({display:x||a?"block":"none"});!a&&0<x&&""===b.html()&&b.html('<vml:stroke weight="'+2*x+'px" color="'+d+'" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:inline-block;" />')}));
e!==g&&h.position(a)},position:function(a){var d=j.tip,e={},t=Math.max(0,s.offset),n,l,w;if(s.corner===g||!d)return g;a=a||h.corner;n=a.precedance;l=b(a);w=[a.x,a.y];"x"===n&&w.reverse();c.each(w,function(b,d){var w;if("center"===d)w="y"===n?"left":"top",e[w]="50%",e["margin-"+w]=-Math.round(l["y"===n?"width":"height"]/2)+t;else{w=f(a,d,r);var g;g=c.browser.mozilla;var h=a.y+(g?"":"-")+a.x;g=(g?"-moz-":c.browser.webkit?"-webkit-":"")+(g?"border-radius-"+h:"border-"+h+"-radius");g=parseInt((j.titlebar&&
"top"===a.y?j.titlebar:j.content).css(g),10)||parseInt(p.css(g),10)||0;e[d]=b?f(a,d):t+(g>w?g:0)}});e[a[n]]-=l["x"===n?"width":"height"];d.css({top:"",bottom:"",left:"",right:"",margin:""}).css(e);return e},destroy:function(){j.tip&&j.tip.remove();p.unbind(".qtip-tip")}});h.init()}function ba(a){var b=this,f=a.elements.tooltip,e=a.options.content.ajax,t=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;a.checks.ajax={"^content.ajax":function(a,c,g){"ajax"===c&&(e=g);"once"===c?b.init():e&&e.url?
b.load():f.unbind(".qtip-ajax")}};c.extend(b,{init:function(){e&&e.url&&f.unbind(".qtip-ajax")[e.once?"one":"bind"]("tooltipshow.qtip-ajax",b.load);return b},load:function(q,n){function h(){r&&(f.css("visibility",""),n=g)}if(q&&q.isDefaultPrevented())return b;var s=e.url.indexOf(" "),j=e.url,p,r=e.once&&!e.loading&&n;r&&f.css("visibility","hidden");-1<s&&(p=j.substr(s),j=j.substr(0,s));c.ajax(c.extend({success:function(b){p&&(b=c("<div/>").append(b.replace(t,"")).find(p));a.set("content.text",b);
h()},error:function(b,c,f){a.set("content.text",c+": "+f);h()},context:a},e,{url:j}));return b}});b.init()}function ca(a,b,f,e){function t(a,w,e,g){g=0!==parseInt(g,10);var m=".qtip-"+f,k=a&&b.show.target[0];w=w&&b.hide.target[0];var h=e&&d.rendered&&y.tooltip[0];e=e&&d.rendered&&y.content[0];var j=g&&b.position.container[0]===x?document:b.position.container[0];g=g&&E;d.rendered?c([]).pushStack(c.grep([k,w,h,j,e,g],function(a){return"object"===typeof a})).unbind(m):a&&b.show.target.unbind(m+"-create")}
function q(l,w,e,h){function m(a){k.is(":visible")&&d.reposition(a)}function j(a){if(k.hasClass(N))return g;clearTimeout(d.timers.inactive);d.timers.inactive=setTimeout(function(){d.hide(a)},b.hide.inactive)}function t(a){if(k.hasClass(N))return g;var l=c(a.relatedTarget||a.target),f=l.closest(V)[0]===k[0],l=l[0]===s[0];clearTimeout(d.timers.show);clearTimeout(d.timers.hide);if("mouse"===v.target&&f||b.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(f||l))return a.stopPropagation(),a.preventDefault(),
g;0<b.hide.delay?d.timers.hide=setTimeout(function(){d.hide(a)},b.hide.delay):d.hide(a)}function n(a){if(k.hasClass(N))return g;s.trigger("qtip-"+f+"-inactive");clearTimeout(d.timers.show);clearTimeout(d.timers.hide);var c=function(){d.show(a)};0<b.show.delay?d.timers.show=setTimeout(c,b.show.delay):c()}var s,q,r,p=".qtip-"+f,v=b.position;s=b.show.target;q=b.hide.target;v.container[0]===x&&c(document);r=c(document);var A=c.trim(""+b.show.event).split(" "),B=c.trim(""+b.hide.event).split(" "),u=c.browser.msie&&
6===parseInt(c.browser.version,10);e&&(b.hide.fixed&&(q=q.add(k),k.bind("mouseover"+p,function(){k.hasClass(N)||clearTimeout(d.timers.hide)})),"mouse"===v.target&&v.adjust.mouse&&b.hide.event&&k.bind("mouseleave"+p,function(a){(a.relatedTarget||a.target)!==s[0]&&d.hide(a)}),k.bind("mouseenter"+p,function(a){d["mouseenter"===a.type?"focus":"blur"](a)}),k.bind("mouseenter"+p+" mouseleave"+p,function(a){k.toggleClass(da,"mouseenter"===a.type)}));w&&("number"===typeof b.hide.inactive&&(s.bind("qtip-"+
f+"-inactive",j),c.each(J.inactiveEvents,function(a,b){q.add(y.tooltip).bind(b+p+"-inactive",j)})),/mouse(over|enter)/i.test(b.show.event)&&!/mouse(out|leave)/i.test(b.hide.event)&&q.bind("mouseleave"+p,function(){clearTimeout(d.timers.show)}),c.each(B,function(a,b){var l=c.inArray(b,A),d=c(q);-1<l&&d.add(s).length===d.length||"unfocus"===b?(s.bind(b+p,function(a){k.is(":visible")?t(a):n(a)}),delete A[l]):q.bind(b+p,t)}));l&&(c.each(A,function(a,b){s.bind(b+p,n)}),"number"===typeof b.hide.distance&&
s.bind("mousemove"+p,function(a){var c=G.origin||{},l=b.hide.distance,f=Math.abs;c&&(f(a.pageX-c.pageX)>=l||f(a.pageY-c.pageY)>=l)&&d.hide(a)}));h&&((v.adjust.resize||v.viewport)&&c(c.event.special.resize?v.viewport:E).bind("resize"+p,m),(v.viewport||u&&"fixed"===k.css("position"))&&c(v.viewport).bind("scroll"+p,m),/unfocus/i.test(b.hide.event)&&r.bind("mousedown"+p,function(b){var l=c(b.target);0===l.parents(V).length&&1<l.add(a).length&&k.is(":visible")&&!k.hasClass(N)&&d.hide(b)}),b.hide.leave&&
/mouseleave|mouseout/i.test(b.hide.event)&&c(E).bind("blur"+p+" mouse"+(-1<b.hide.leave.indexOf("frame")?"out":"leave")+p,function(a){a.relatedTarget||d.hide(a)}),"mouse"===v.target&&r.bind("mousemove"+p,function(a){v.adjust.mouse&&!k.hasClass(N)&&k.is(":visible")&&d.reposition(a||S)}))}function n(l){function f(a){function b(){0===(c=c.not(this)).length&&(d.redraw(),d.reposition(G.event),a())}var c;if(0===(c=e.find("img:not([height]):not([width])")).length)return b.call(c);c.each(function(a,c){(function U(){var l=
d.timers.img;if(c.height&&c.width)return clearTimeout(l[a]),b.call(c);l[a]=setTimeout(U,20)})()})}var e=y.content;l=l||b.content.text;if(!d.rendered||!l)return g;c.isFunction(l)&&(l=l.call(a,d)||"");l.jquery&&0<l.length?e.empty().append(l.css({display:"block"})):e.html(l);0>d.rendered?k.queue("fx",f):(L=0,f(c.noop));return d}function h(b){var f=y.title;if(!d.rendered||!b)return g;c.isFunction(b)&&(b=b.call(a,d)||"");b.jquery&&0<b.length?f.empty().append(b.css({display:"block"})):f.html(b);d.redraw();
d.rendered&&k.is(":visible")&&d.reposition(G.event)}function s(){var a=I+"-title";y.titlebar&&p();y.titlebar=c("<div />",{"class":K+"-titlebar "+(b.style.widget?"ui-widget-header":"")}).append(y.title=c("<div />",{id:a,"class":K+"-title","aria-atomic":r})).insertBefore(y.content);b.content.title.button?j():d.rendered&&d.redraw()}function j(){var a=b.content.title.button,f="string"===typeof a?a:"Close tooltip";y.button&&y.button.remove();a.jquery?y.button=a:y.button=c("<a />",{"class":"ui-state-default "+
(b.style.widget?"":K+"-icon"),title:f,"aria-label":f}).prepend(c("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"}));y.button.appendTo(y.titlebar).attr("role","button").hover(function(a){c(this).toggleClass("ui-state-hover","mouseenter"===a.type)}).click(function(a){k.hasClass(N)||d.hide(a);return g}).bind("mousedown keydown mouseup keyup mouseout",function(a){c(this).toggleClass("ui-state-active ui-state-focus","down"===a.type.substr(-4))});d.redraw()}function p(){y.title&&(y.titlebar.remove(),
y.titlebar=y.title=y.button=z,d.reposition())}function C(){var a=b.style.widget;k.toggleClass(X,a);y.content.toggleClass(X+"-content",a);y.titlebar&&y.titlebar.toggleClass(X+"-header",a);y.button&&y.button.toggleClass(K+"-icon",!a)}function A(a){var c=0,d,f=b;for(a=a.split(".");f=f[a[c++]];)c<a.length&&(d=f);return[d||b,a.pop()]}var d=this,x=document.body,I=K+"-"+f,T=0,L=0,k=c(),y,G;d.id=f;d.rendered=g;d.elements=y={target:a};d.timers={img:[]};d.options=b;d.checks={};d.plugins={};d.cache=G={event:{},
target:z,disabled:g,attr:e};d.checks.builtin={"^id$":function(a,b,d){a=d===r?J.nextid:d;b=K+"-"+a;a!==g&&0<a.length&&!c("#"+b).length&&(k[0].id=b,y.content[0].id=b+"-content",y.title[0].id=b+"-title")},"^content.text$":function(a,b,c){n(c)},"^content.title.text$":function(a,b,c){if(!c)return p();!y.title&&c&&s();h(c)},"^content.title.button$":function(a,b,c){a=y.button;b=y.title;d.rendered&&(c?(b||s(),j()):a.remove())},"^position.(my|at)$":function(a,b,c){"string"===typeof c&&(a[b]=new v.Corner(c))},
"^position.container$":function(a,b,c){d.rendered&&k.appendTo(c)},"^(show|hide).(event|target|fixed|delay|inactive)$":function(a,b,c,f,e){a=[1,0,0];a["show"===e[1]?"push":"unshift"](0);t.apply(d,a);q.apply(d,[1,1,0,0])},"^show.ready$":function(){d.rendered?d.show():d.render(1)},"^style.classes$":function(a,b,d){c.attr(k[0],"class",K+" qtip ui-helper-reset "+d)},"^style.widget|content.title":C,"^events.(render|show|move|hide|focus|blur)$":function(a,b,d){k[(c.isFunction(d)?"":"un")+"bind"]("tooltip"+
b,d)}};c.extend(d,{render:function(l){if(d.rendered)return d;var f=b.content.title.text,e=c.Event("tooltiprender");c.attr(a[0],"aria-describedby",I);k=y.tooltip=c("<div/>",{id:I,"class":K+" qtip ui-helper-reset "+b.style.classes,width:b.style.width||"",role:"alert","aria-live":"polite","aria-atomic":g,"aria-describedby":I+"-content","aria-hidden":r}).toggleClass(N,G.disabled).data("qtip",d).appendTo(b.position.container).append(y.content=c("<div />",{"class":K+"-content",id:I+"-content","aria-atomic":r}));
d.rendered=-1;L=1;f&&(s(),h(f));n();d.rendered=r;C();c.each(b.events,function(a,b){c.isFunction(b)&&k.bind("toggle"===a?"tooltipshow tooltiphide":"tooltip"+a,b)});c.each(v,function(){"render"===this.initialize&&this(d)});q(1,1,1,1);k.queue("fx",function(a){e.originalEvent=G.event;k.trigger(e,[d]);L=0;d.redraw();(b.show.ready||l)&&d.show(G.event);a()});return d},get:function(a){switch(a.toLowerCase()){case "dimensions":a={height:k.outerHeight(),width:k.outerWidth()};break;case "offset":a=v.offset(k,
b.position.container);break;default:a=A(a.toLowerCase()),a=a[0][a[1]],a=a.precedance?a.string():a}return a},set:function(a,f){var e=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,h=/^content\.(title|attr)|style/i,m=g,j=g,t=d.checks,s;"string"===typeof a?(s=a,a={},a[s]=f):a=c.extend(r,{},a);c.each(a,function(b,d){var f=A(b.toLowerCase()),g;g=f[0][f[1]];f[0][f[1]]="object"===typeof d&&d.nodeType?c(d):d;a[b]=[f[0],f[1],d,g];m=e.test(b)||m;j=h.test(b)||j});W(b);T=L=1;c.each(a,
function(a,b){var c,f,l;for(c in t)for(f in t[c])if(l=RegExp(f,"i").exec(a))b.push(l),t[c][f].apply(d,b)});T=L=0;k.is(":visible")&&d.rendered&&(m&&d.reposition("mouse"===b.position.target?z:G.event),j&&d.redraw());return d},toggle:function(a,e){function h(){a?(c.browser.msie&&k[0].style.removeAttribute("filter"),k.css("overflow","")):k.css({display:"",visibility:"",width:"",opacity:"",left:"",top:""})}if(!d.rendered)if(a)d.render(1);else return d;var j=a?"show":"hide",m=b[j],t=k.is(":visible");(typeof a).search("boolean|number")&&
(a=!t);if(t===a)return d;if(e){if(/over|enter/.test(e.type)&&/out|leave/.test(G.event.type)&&e.target===b.show.target[0]&&k.has(e.relatedTarget).length)return d;G.event=c.extend({},e)}t=c.Event("tooltip"+j);t.originalEvent=e?G.event:z;k.trigger(t,[d,90]);if(t.isDefaultPrevented())return d;c.attr(k[0],"aria-hidden",!a);a?(G.origin=c.extend({},S),d.focus(e),c.isFunction(b.content.text)&&n(),d.reposition(e),m.solo&&c(V,m.solo).not(k).qtip("hide",t)):(clearTimeout(d.timers.show),delete G.origin,d.blur(e));
k.stop(0,1);c.isFunction(m.effect)?(m.effect.call(k,d),k.queue("fx",function(a){h();a()})):m.effect===g?(k[j](),h.call(k)):k.fadeTo(90,a?1:0,h);a&&m.target.trigger("qtip-"+f+"-inactive");return d},show:function(a){return d.toggle(r,a)},hide:function(a){return d.toggle(g,a)},focus:function(a){if(!d.rendered)return d;var b=c(V),f=parseInt(k[0].style.zIndex,10),e=J.zindex+b.length;a=c.extend({},a);var g;k.hasClass(R)||(g=c.Event("tooltipfocus"),g.originalEvent=a,k.trigger(g,[d,e]),g.isDefaultPrevented()||
(f!==e&&(b.each(function(){this.style.zIndex>f&&(this.style.zIndex-=1)}),b.filter("."+R).qtip("blur",a)),k.addClass(R)[0].style.zIndex=e));return d},blur:function(a){a=c.extend({},a);var b;k.removeClass(R);b=c.Event("tooltipblur");b.originalEvent=a;k.trigger(b,[d]);return d},reposition:function(a,f){if(!d.rendered||T)return d;T=1;var e=b.position.target,h=b.position,m=h.my,j=h.at,t=h.adjust,s=t.method.split(" "),n=k.outerWidth(),p=k.outerHeight(),q=0,r=0,A=c.Event("tooltipmove"),y="fixed"===k.css("position"),
B=h.viewport,u={left:0,top:0},C=(d.plugins.tip||{}).corner,z={horizontal:s[0],vertical:s[1]||s[0],tip:b.style.tip||{},left:function(a){var b="shift"===z.horizontal,c=B.offset.left+B.scrollLeft,d="left"===m.x?n:"right"===m.x?-n:-n/2,f="left"===j.x?q:"right"===j.x?-q:-q/2,e=z.tip.width+2*z.tip.border||0,g=C&&"x"===C.precedance&&!b?e:0,h=c-a-g,l=a+n-B.width-c+g,f=d-("x"===m.precedance||m.x===m.y?f:0),k="center"===m.x;b?(g=C&&"y"===C.precedance?e:0,f=("left"===m.x?1:-1)*d-g,u.left+=0<h?h:0<l?-l:0,u.left=
Math.max(B.offset.left+(g&&"center"===C.x?z.tip.offset:0),a-f,Math.min(Math.max(B.offset.left+B.width,a+f),u.left))):(0<h&&("left"!==m.x||0<l)?u.left-=f+(k?0:2*t.x):0<l&&("right"!==m.x||0<h)&&(u.left-=k?-f:f+2*t.x),u.left!==a&&k&&(u.left-=t.x),u.left<c&&-u.left>l&&(u.left=a));return u.left-a},top:function(a){var b="shift"===z.vertical,c=B.offset.top+B.scrollTop,d="top"===m.y?p:"bottom"===m.y?-p:-p/2,f="top"===j.y?r:"bottom"===j.y?-r:-r/2,e=z.tip.height+2*z.tip.border||0,g=C&&"y"===C.precedance&&!b?
e:0,h=c-a-g,c=a+p-B.height-c+g,f=d-("y"===m.precedance||m.x===m.y?f:0),l="center"===m.y;b?(g=C&&"x"===C.precedance?e:0,f=("top"===m.y?1:-1)*d-g,u.top+=0<h?h:0<c?-c:0,u.top=Math.max(B.offset.top+(g&&"center"===C.x?z.tip.offset:0),a-f,Math.min(Math.max(B.offset.top+B.height,a+f),u.top))):(0<h&&("top"!==m.y||0<c)?u.top-=f+(l?0:2*t.y):0<c&&("bottom"!==m.y||0<h)&&(u.top-=l?-f:f+2*t.y),u.top!==a&&l&&(u.top-=t.y),0>u.top&&-u.top>c&&(u.top=a));return u.top-a}};if("mouse"===e)j={x:"left",y:"top"},a=a&&("resize"===
a.type||"scroll"===a.type)?G.event:!t.mouse&&G.origin?G.origin:S&&(t.mouse||!a||!a.pageX)?{pageX:S.pageX,pageY:S.pageY}:a,u={top:a.pageY,left:a.pageX};else{"event"===e&&(a&&a.target&&"scroll"!==a.type&&"resize"!==a.type?e=G.target=c(a.target):e=G.target);e=c(e).eq(0);if(0===e.length)return d;e[0]===document||e[0]===E?(q=v.iOS?E.innerWidth:e.width(),r=v.iOS?E.innerHeight:e.height(),e[0]===E&&(u={top:!y||v.iOS?B.scrollTop():0,left:!y||v.iOS?B.scrollLeft():0})):e.is("area")&&v.imagemap?u=v.imagemap(e,
j):"http://www.w3.org/2000/svg"===e[0].namespaceURI&&v.svg?u=v.svg(e,j):(q=e.outerWidth(),r=e.outerHeight(),u=v.offset(e,h.container,y));u.offset&&(q=u.width,r=u.height,u=u.offset);u.left+="right"===j.x?q:"center"===j.x?q/2:0;u.top+="bottom"===j.y?r:"center"===j.y?r/2:0}u.left+=t.x+("right"===m.x?-n:"center"===m.x?-n/2:0);u.top+=t.y+("bottom"===m.y?-p:"center"===m.y?-p/2:0);B.jquery&&e[0]!==E&&e[0]!==x&&"nonenone"!==z.vertical+z.horizontal?(B={elem:B,height:B[(B[0]===E?"h":"outerH")+"eight"](),width:B[(B[0]===
E?"w":"outerW")+"idth"](),scrollLeft:B.scrollLeft(),scrollTop:B.scrollTop(),offset:B.offset()||{left:0,top:0}},u.adjusted={left:"none"!==z.horizontal?z.left(u.left):0,top:"none"!==z.vertical?z.top(u.top):0}):u.adjusted={left:0,top:0};k.attr("class",function(){return c.attr(this,"class").replace(/ui-tooltip-pos-\w+/i,"")}).addClass(K+"-pos-"+m.abbreviation());A.originalEvent=c.extend({},a);k.trigger(A,[d,u,B.elem||B]);if(A.isDefaultPrevented())return d;delete u.adjusted;f===g||isNaN(u.left)||isNaN(u.top)||
!c.isFunction(h.effect)?k.css(u):c.isFunction(h.effect)&&(h.effect.call(k,d,c.extend({},u)),k.queue(function(a){c(this).css({opacity:"",height:""});c.browser.msie&&this.style.removeAttribute("filter");a()}));T=0;return d},redraw:function(){if(1>d.rendered||b.style.width||L)return d;var a=K+"-fluid",f=b.position.container,e,g,h;L=1;k.css("width","").addClass(a);e=k.width()+(c.browser.mozilla?1:0);g=k.css("max-width")||"";h=k.css("min-width")||"";f=-1<(g+h).indexOf("%")?f.width()/100:0;g=(-1<g.indexOf("%")?
f:1)*parseInt(g,10)||e;h=(-1<h.indexOf("%")?f:1)*parseInt(h,10)||0;e=g+h?Math.min(Math.max(e,h),g):e;k.css("width",Math.round(e)).removeClass(a);L=0;return d},disable:function(a){var b=N;"boolean"!==typeof a&&(a=!k.hasClass(b)&&!G.disabled);d.rendered?(k.toggleClass(b,a),c.attr(k[0],"aria-disabled",a)):G.disabled=!!a;return d},enable:function(){return d.disable(g)},destroy:function(){var b=a[0],f=c.attr(b,Q);d.rendered&&(k.remove(),c.each(d.plugins,function(){this.destroy&&this.destroy()}));clearTimeout(d.timers.show);
clearTimeout(d.timers.hide);t(1,1,1,1);c.removeData(b,"qtip");f&&(c.attr(b,"title",f),a.removeAttr(Q));a.removeAttr("aria-describedby").unbind(".qtip");return a}})}function W(a){var b;if(!a||"object"!==typeof a)return g;"object"!==typeof a.metadata&&(a.metadata={type:a.metadata});if("content"in a){if("object"!==typeof a.content||a.content.jquery)a.content={text:a.content};b=a.content.text||g;!c.isFunction(b)&&(!b&&!b.attr||1>b.length||"object"===typeof b&&!b.jquery)&&(a.content.text=g);"title"in a.content&&
("object"!==typeof a.content.title&&(a.content.title={text:a.content.title}),b=a.content.title.text||g,!c.isFunction(b)&&(!b&&!b.attr||1>b.length||"object"===typeof b&&!b.jquery)&&(a.content.title.text=g))}"position"in a&&"object"!==typeof a.position&&(a.position={my:a.position,at:a.position});"show"in a&&"object"!==typeof a.show&&(a.show.jquery?a.show={target:a.show}:a.show={event:a.show});"hide"in a&&"object"!==typeof a.hide&&(a.hide.jquery?a.hide={target:a.hide}:a.hide={event:a.hide});"style"in
a&&"object"!==typeof a.style&&(a.style={classes:a.style});c.each(v,function(){this.sanitize&&this.sanitize(a)});return a}function ea(){var a=E.console;return a&&(a.error||a.log||c.noop).apply(a,arguments)}var r=!0,g=!1,z=null,J,v,S,K="ui-tooltip",X="ui-widget",N="ui-state-disabled",V="div.qtip."+K,R=K+"-focus",da=K+"-hover",Q="oldtitle";J=c.fn.qtip=function(a,b,f){var e=(""+a).toLowerCase(),t=z,q="disable"===e?[r]:c.makeArray(arguments).slice(1,10),n=q[q.length-1],h=this[0]?c.data(this[0],"qtip"):
z;if(!arguments.length&&h||"api"===e)return h;if("string"===typeof a)return this.each(function(){var a=c.data(this,"qtip");if(!a)return r;n&&n.timeStamp&&(a.cache.event=n);if("option"!==e&&"options"!==e||!b)a[e]&&a[e].apply(a[e],q);else if(c.isPlainObject(b)||f!==P)a.set(b,f);else return t=a.get(b),g}),t!==z?t:this;if("object"===typeof a||!arguments.length)return h=W(c.extend(r,{},a)),J.bind.call(this,h,n)};J.bind=function(a,b){return this.each(function(){function f(a){function b(){p.render("object"===
typeof a||h.show.ready);q.unbind(e);n.unbind(t)}if(p.cache.disabled)return g;p.cache.event=c.extend({},a);0<h.show.delay?(clearTimeout(p.timers.show),p.timers.show=setTimeout(b,h.show.delay),e!==t&&n.bind(t,function(){clearTimeout(p.timers.show)})):b()}var e,t,q,n,h,s=!a.id||a.id===g||1>a.id.length||c("#"+K+"-"+a.id).length?J.nextid++:a.id,j=".qtip-"+s+"-create",p;a:{var C,A,d,x,I=c(this),E=c(document.body),L=this===document?E:I;A=I.metadata?I.metadata(a.metadata):z;x="html5"===a.metadata.type&&A?
A[a.metadata.name]:z;var k=I.data(a.metadata.name||"qtipopts");try{k="string"===typeof k?(new Function("return "+k))():k}catch(y){ea("Unable to parse HTML5 attribute data: "+k)}x=c.extend(r,{},J.defaults,a,"object"===typeof k?W(k):z,W(x||A));A&&c.removeData(this,"metadata");A=x.position;x.id=s;if("boolean"===typeof x.content.text)if(d=I.attr(x.content.attr),x.content.attr!==g&&d)x.content.text=d;else{p=g;break a}A.container===g&&(A.container=E);A.target===g&&(A.target=L);x.show.target===g&&(x.show.target=
L);x.show.solo===r&&(x.show.solo=E);x.hide.target===g&&(x.hide.target=L);x.position.viewport===r&&(x.position.viewport=A.container);A.at=new v.Corner(A.at);A.my=new v.Corner(A.my);if(c.data(this,"qtip"))if(x.overwrite)I.qtip("destroy");else if(x.overwrite===g){p=g;break a}c.attr(this,"title")&&(c.attr(this,Q,c.attr(this,"title")),this.removeAttribute("title"));C=new ca(I,x,s,!!d);c.data(this,"qtip",C);I.bind("remove.qtip",function(){C.destroy()});p=C}if(p===g)return r;h=p.options;c.each(v,function(){"initialize"===
this.initialize&&this(p)});q=h.show.target;n=h.hide.target;e=c.trim(""+h.show.event).replace(/ /g,j+" ")+j;t=c.trim(""+h.hide.event).replace(/ /g,j+" ")+j;/mouse(over|enter)/i.test(e)&&!/mouse(out|leave)/i.test(t)&&(t+=" mouseleave"+j);q.bind(e,f);(h.show.ready||h.prerender)&&f(b)})};v=J.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,"center").toLowerCase();this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase();this.y=(a.match(/top|bottom|center/i)||
["inherit"])[0].toLowerCase();this.precedance=-1<a.charAt(0).search(/^(t|b)/)?"y":"x";this.string=function(){return"y"===this.precedance?this.y+this.x:this.x+this.y};this.abbreviation=function(){var a=this.x.substr(0,1),c=this.y.substr(0,1);return a===c?a:"c"===a||"c"!==a&&"c"!==c?c+a:a+c}},offset:function(a,b,f){a=a.offset();var e=b,g=0,q=document.body,n;if(e){do{if(e[0]===q)break;"static"!==e.css("position")&&(n=e.position(),a.left-=n.left+(parseInt(e.css("borderLeftWidth"),10)||0),a.top-=n.top+
(parseInt(e.css("borderTopWidth"),10)||0),g++)}while(e=e.offsetParent());if(b[0]!==q||1<g)a.left+=1*b.scrollLeft(),a.top+=1*b.scrollTop();if(4.1>v.iOS&&3.1<v.iOS||!v.iOS&&f)b=c(E),a.left+=-1*b.scrollLeft(),a.top+=-1*b.scrollTop()}return a},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_","."))||g,fn:{attr:function(a,b){if(this.length){var f=this[0],e=c.data(f,"qtip");if("title"===a){if(2>arguments.length)return c.attr(f,
Q);if("object"===typeof e)return e&&e.rendered&&"title"===e.options.content.attr&&e.cache.attr&&e.set("content.text",b),c.fn.attr_replacedByqTip.apply(this,arguments),c.attr(f,Q,c.attr(f,"title")),this.removeAttr("title")}}},clone:function(a){c([]);return c.fn.clone_replacedByqTip.apply(this,arguments).filter("[oldtitle]").each(function(){c.attr(this,"title",c.attr(this,Q));this.removeAttribute(Q)}).end()},remove:c.ui?z:function(a,b){c(this).each(function(){b||(!a||c.filter(a,[this]).length)&&c("*",
this).add(this).each(function(){c(this).triggerHandler("remove")})})}}};c.each(v.fn,function(a,b){if(!b)return r;var f=c.fn[a+"_replacedByqTip"]=c.fn[a];c.fn[a]=function(){return b.apply(this,arguments)||f.apply(this,arguments)}});c(document).bind("mousemove.qtip",function(a){S={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}});J.version="nightly";J.nextid=0;J.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" ");J.zindex=15E3;J.defaults={prerender:g,id:g,overwrite:r,
content:{text:r,attr:"title",title:{text:g,button:g}},position:{my:"top left",at:"bottom right",target:g,container:g,viewport:g,adjust:{x:0,y:0,mouse:r,resize:r,method:"flip flip"},effect:r},show:{target:g,event:"mouseenter",effect:r,delay:90,solo:g,ready:g},hide:{target:g,event:"mouseleave",effect:r,delay:0,fixed:g,inactive:g,leave:"window",distance:g},style:{classes:"",widget:g,width:g},events:{render:z,move:z,show:z,hide:z,toggle:z,focus:z,blur:z}};v.ajax=function(a){var b=a.plugins.ajax;return"object"===
typeof b?b:a.plugins.ajax=new ba(a)};v.ajax.initialize="render";v.ajax.sanitize=function(a){var b=a.content,c;b&&"ajax"in b&&(c=b.ajax,"object"!==typeof c&&(c=a.content.ajax={url:c}),"boolean"!==typeof c.once&&c.once&&(c.once=!!c.once))};c.extend(r,J.defaults,{content:{ajax:{loading:r,once:r}}});v.imagemap=function(a,b){var f=a.attr("shape").toLowerCase(),e=a.attr("coords").split(","),g=[],q=c('img[usemap="#'+a.parent("map").attr("name")+'"]'),n=q.offset(),h={width:0,height:0,offset:{top:1E10,right:0,
bottom:0,left:1E10}},s=0,j=0;n.left+=Math.ceil((q.outerWidth()-q.width())/2);n.top+=Math.ceil((q.outerHeight()-q.height())/2);if("poly"===f)for(s=e.length;s--;)j=[parseInt(e[--s],10),parseInt(e[s+1],10)],j[0]>h.offset.right&&(h.offset.right=j[0]),j[0]<h.offset.left&&(h.offset.left=j[0]),j[1]>h.offset.bottom&&(h.offset.bottom=j[1]),j[1]<h.offset.top&&(h.offset.top=j[1]),g.push(j);else g=c.map(e,function(a){return parseInt(a,10)});switch(f){case "rect":h={width:Math.abs(g[2]-g[0]),height:Math.abs(g[3]-
g[1]),offset:{left:g[0],top:g[1]}};break;case "circle":h={width:g[2]+2,height:g[2]+2,offset:{left:g[0],top:g[1]}};break;case "poly":c.extend(h,{width:Math.abs(h.offset.right-h.offset.left),height:Math.abs(h.offset.bottom-h.offset.top)});if("centercenter"===b.string())h.offset={left:h.offset.left+h.width/2,top:h.offset.top+h.height/2};else{for(var e=f=h,g=g.slice(),q=0,j=s=1,p=0,r=0,v=e.width,d=e.height;0<v&&0<d&&0<s&&0<j;){v=Math.floor(v/2);d=Math.floor(d/2);"left"===b.x?s=v:"right"===b.x?s=e.width-
v:s+=Math.floor(v/2);"top"===b.y?j=d:"bottom"===b.y?j=e.height-d:j+=Math.floor(d/2);for(q=g.length;q--&&!(2>g.length);)p=g[q][0]-e.offset.left,r=g[q][1]-e.offset.top,("left"===b.x&&p>=s||"right"===b.x&&p<=s||"center"===b.x&&(p<s||p>e.width-s)||"top"===b.y&&r>=j||"bottom"===b.y&&r<=j||"center"===b.y&&(r<j||r>e.height-j))&&g.splice(q,1)}f.offset={left:g[0][0],top:g[0][1]}}h.width=h.height=0}h.offset.left+=n.left;h.offset.top+=n.top;return h};v.tip=function(a){var b=a.plugins.tip;return"object"===typeof b?
b:a.plugins.tip=new aa(a)};v.tip.initialize="render";v.tip.sanitize=function(a){var b=a.style,c;b&&"tip"in b&&(c=a.style.tip,"object"!==typeof c&&(a.style.tip={corner:c}),/string|boolean/i.test(typeof c.corner)||(c.corner=r),"number"!==typeof c.width&&delete c.width,"number"!==typeof c.height&&delete c.height,"number"!==typeof c.border&&c.border!==r&&delete c.border,"number"!==typeof c.offset&&delete c.offset)};c.extend(r,J.defaults,{style:{tip:{corner:r,mimic:g,width:6,height:6,border:r,offset:0}}});
v.svg=function(a){var b=c(document),f=a[0];a={width:0,height:0,offset:{top:1E10,left:1E10}};var e,g,q;if(f.getBBox&&f.parentNode){e=f.getBBox();g=f.getScreenCTM();f=f.farthestViewportElement||f;if(!f.createSVGPoint)return a;f=f.createSVGPoint();f.x=e.x;f.y=e.y;q=f.matrixTransform(g);a.offset.left=q.x;a.offset.top=q.y;f.x+=e.width;f.y+=e.height;q=f.matrixTransform(g);a.width=q.x-a.offset.left;a.height=q.y-a.offset.top;a.offset.left+=b.scrollLeft();a.offset.top+=b.scrollTop()}return a};v.modal=function(a){var b=
a.plugins.modal;return"object"===typeof b?b:a.plugins.modal=new $(a)};v.modal.initialize="render";v.modal.sanitize=function(a){a.show&&("object"!==typeof a.show.modal?a.show.modal={on:!!a.show.modal}:"undefined"===typeof a.show.modal.on&&(a.show.modal.on=r))};c.extend(r,J.defaults,{show:{modal:{on:g,effect:r,blur:r,escape:r}}});v.bgiframe=function(a){var b=c.browser,f=a.plugins.bgiframe;return 1>c("select, object").length||!b.msie||"6"!==b.version.charAt(0)?g:"object"===typeof f?f:a.plugins.bgiframe=
new Z(a)};v.bgiframe.initialize="render"})(jQuery,window);