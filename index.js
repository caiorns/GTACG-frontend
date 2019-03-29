!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var i in r)("object"==typeof exports?exports:t)[i]=r[i]}}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){t(this,"createTree",function(t,e){var r=t.apply(void 0,n(e)),i=s(e,2),o=i[1],a=void 0===o?{}:o;return r.exportSVG=new p(r,a.exportSVG),r}),this.ExportSVG=p}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var r=[],i=!0,n=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);i=!0);}catch(l){n=!0,o=l}finally{try{!i&&s["return"]&&s["return"]()}finally{if(n)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}();e["default"]=a;var h=r(1),c=i(h),p=function(){function t(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];o(this,t),this.tree=e,this.canvas=e.canvas.canvas,Object.assign(this,r)}return l(t,[{key:"exportSVG",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],r=this.tree.canvas,i=this.tree.canvas.canvas,n=i.width,o=i.height,a=new c["default"](n,o);this.tree.canvas=a,this.tree.draw();var s=a[t].apply(a,e);return this.tree.canvas=r,this.tree.draw(),s}},{key:"getSVG",value:function(){return this.exportSVG("getSvg")}},{key:"getSerialisedSVG",value:function(){var t=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];return this.exportSVG("getSerializedSvg",[t])}}]),t}()},function(t,e,r){(function(t){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(){function r(t,e){var r,i=Object.keys(e);for(r=0;r<i.length;r++)t=t.replace(new RegExp("\\{"+i[r]+"\\}","gi"),e[i[r]]);return t}function i(t){var e,r,i;if(!t)throw new Error("cannot create a random attribute name for an undefined object");e="ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",r="";do for(r="",i=0;i<12;i++)r+=e[Math.floor(Math.random()*e.length)];while(t[r]);return r}function n(t,e){var r,i,n,o={};for(t=t.split(","),e=e||10,r=0;r<t.length;r+=2)i="&"+t[r+1]+";",n=parseInt(t[r],e),o[i]="&#"+n+";";return o["\\xa0"]="&#160;",o}function o(t){var e={left:"start",right:"end",center:"middle",start:"start",end:"end"};return e[t]||e.start}function a(t){var e={alphabetic:"alphabetic",hanging:"hanging",top:"text-before-edge",bottom:"text-after-edge",middle:"central"};return e[t]||e.alphabetic}var s,l,h,c,p;p=n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),s={strokeStyle:{svgAttr:"stroke",canvas:"#000000",svg:"none",apply:"stroke"},fillStyle:{svgAttr:"fill",canvas:"#000000",svg:null,apply:"fill"},lineCap:{svgAttr:"stroke-linecap",canvas:"butt",svg:"butt",apply:"stroke"},lineJoin:{svgAttr:"stroke-linejoin",canvas:"miter",svg:"miter",apply:"stroke"},miterLimit:{svgAttr:"stroke-miterlimit",canvas:10,svg:4,apply:"stroke"},lineWidth:{svgAttr:"stroke-width",canvas:1,svg:1,apply:"stroke"},globalAlpha:{svgAttr:"opacity",canvas:1,svg:1,apply:"fill stroke"},font:{canvas:"10px sans-serif"},shadowColor:{canvas:"#000000"},shadowOffsetX:{canvas:0},shadowOffsetY:{canvas:0},shadowBlur:{canvas:0},textAlign:{canvas:"start"},textBaseline:{canvas:"alphabetic"}},h=function(t,e){this.__root=t,this.__ctx=e},h.prototype.addColorStop=function(t,e){var i,n,o=this.__ctx.__createElement("stop");o.setAttribute("offset",t),e.indexOf("rgba")!==-1?(i=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi,n=i.exec(e),o.setAttribute("stop-color",r("rgb({r},{g},{b})",{r:n[1],g:n[2],b:n[3]})),o.setAttribute("stop-opacity",n[4])):o.setAttribute("stop-color",e),this.__root.appendChild(o)},c=function(t,e){this.__root=t,this.__ctx=e},l=function(t){var e,r={width:500,height:500,enableMirroring:!1};return arguments.length>1?(e=r,e.width=arguments[0],e.height=arguments[1]):e=t?t:r,this instanceof l?(this.width=e.width||r.width,this.height=e.height||r.height,this.enableMirroring=void 0!==e.enableMirroring?e.enableMirroring:r.enableMirroring,this.canvas=this,this.__document=e.document||document,this.__canvas=this.__document.createElement("canvas"),this.__ctx=this.__canvas.getContext("2d"),this.__setDefaultStyles(),this.__stack=[this.__getStyleState()],this.__groupStack=[],this.__root=this.__document.createElementNS("http://www.w3.org/2000/svg","svg"),this.__root.setAttribute("version",1.1),this.__root.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),this.__root.setAttribute("width",this.width),this.__root.setAttribute("height",this.height),this.__ids={},this.__defs=this.__document.createElementNS("http://www.w3.org/2000/svg","defs"),this.__root.appendChild(this.__defs),this.__currentElement=this.__document.createElementNS("http://www.w3.org/2000/svg","g"),void this.__root.appendChild(this.__currentElement)):new l(e)},l.prototype.__createElement=function(t,e,r){"undefined"==typeof e&&(e={});var i,n,o=this.__document.createElementNS("http://www.w3.org/2000/svg",t),a=Object.keys(e);for(r&&(o.setAttribute("fill","none"),o.setAttribute("stroke","none")),i=0;i<a.length;i++)n=a[i],o.setAttribute(n,e[n]);return o},l.prototype.__setDefaultStyles=function(){var t,e,r=Object.keys(s);for(t=0;t<r.length;t++)e=r[t],this[e]=s[e].canvas},l.prototype.__applyStyleState=function(t){var e,r,i=Object.keys(t);for(e=0;e<i.length;e++)r=i[e],this[r]=t[r]},l.prototype.__getStyleState=function(){var t,e,r={},i=Object.keys(s);for(t=0;t<i.length;t++)e=i[t],r[e]=this[e];return r},l.prototype.__applyStyleToCurrentElement=function(t){var e,i,n,o,a,l,p=Object.keys(s);for(e=0;e<p.length;e++)if(i=s[p[e]],n=this[p[e]],i.apply)if(i.apply.indexOf("fill")!==-1&&n instanceof c){if(n.__ctx)for(;n.__ctx.__defs.childNodes.length;)o=n.__ctx.__defs.childNodes[0].getAttribute("id"),this.__ids[o]=o,this.__defs.appendChild(n.__ctx.__defs.childNodes[0]);this.__currentElement.setAttribute("fill",r("url(#{id})",{id:n.__root.getAttribute("id")}))}else i.apply.indexOf("fill")!==-1&&n instanceof h?this.__currentElement.setAttribute("fill",r("url(#{id})",{id:n.__root.getAttribute("id")})):i.apply.indexOf(t)!==-1&&i.svg!==n&&("stroke"!==i.svgAttr&&"fill"!==i.svgAttr||n.indexOf("rgba")===-1?this.__currentElement.setAttribute(i.svgAttr,n):(a=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi,l=a.exec(n),this.__currentElement.setAttribute(i.svgAttr,r("rgb({r},{g},{b})",{r:l[1],g:l[2],b:l[3]})),this.__currentElement.setAttribute(i.svgAttr+"-opacity",l[4])))},l.prototype.__closestGroupOrSvg=function(t){return t=t||this.__currentElement,"g"===t.nodeName||"svg"===t.nodeName?t:this.__closestGroupOrSvg(t.parentNode)},l.prototype.getSerializedSvg=function(t){var e,r,i,n,o,a,s=(new XMLSerializer).serializeToString(this.__root);if(a=/xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi,a.test(s)&&(s=s.replace('xmlns="http://www.w3.org/2000/svg','xmlns:xlink="http://www.w3.org/1999/xlink')),t)for(e=Object.keys(p),r=0;r<e.length;r++)i=e[r],n=p[i],o=new RegExp(i,"gi"),o.test(s)&&(s=s.replace(o,n));return s},l.prototype.getSvg=function(){return this.__root},l.prototype.save=function(){var t=this.__createElement("g"),e=this.__closestGroupOrSvg();this.__groupStack.push(e),e.appendChild(t),this.__currentElement=t,this.__stack.push(this.__getStyleState())},l.prototype.restore=function(){this.__currentElement=this.__groupStack.pop();var t=this.__stack.pop();this.__applyStyleState(t)},l.prototype.__addTransform=function(t){var e=this.__closestGroupOrSvg();if(e.childNodes.length>0){var r=this.__createElement("g");e.appendChild(r),this.__currentElement=r}var i=this.__currentElement.getAttribute("transform");i?i+=" ":i="",i+=t,this.__currentElement.setAttribute("transform",i)},l.prototype.scale=function(t,e){void 0===e&&(e=t),this.__addTransform(r("scale({x},{y})",{x:t,y:e}))},l.prototype.rotate=function(t){var e=180*t/Math.PI;this.__addTransform(r("rotate({angle},{cx},{cy})",{angle:e,cx:0,cy:0}))},l.prototype.translate=function(t,e){this.__addTransform(r("translate({x},{y})",{x:t,y:e}))},l.prototype.transform=function(t,e,i,n,o,a){this.__addTransform(r("matrix({a},{b},{c},{d},{e},{f})",{a:t,b:e,c:i,d:n,e:o,f:a}))},l.prototype.beginPath=function(){var t,e;this.__currentDefaultPath="",this.__currentPosition={},t=this.__createElement("path",{},!0),e=this.__closestGroupOrSvg(),e.appendChild(t),this.__currentElement=t},l.prototype.__applyCurrentDefaultPath=function(){if("path"!==this.__currentElement.nodeName)throw new Error("Attempted to apply path command to node "+this.__currentElement.nodeName);var t=this.__currentDefaultPath;this.__currentElement.setAttribute("d",t)},l.prototype.__addPathCommand=function(t){this.__currentDefaultPath+=" ",this.__currentDefaultPath+=t},l.prototype.moveTo=function(t,e){"path"!==this.__currentElement.nodeName&&this.beginPath(),this.__currentPosition={x:t,y:e},this.__addPathCommand(r("M {x} {y}",{x:t,y:e}))},l.prototype.closePath=function(){this.__addPathCommand("Z")},l.prototype.lineTo=function(t,e){this.__currentPosition={x:t,y:e},this.__currentDefaultPath.indexOf("M")>-1?this.__addPathCommand(r("L {x} {y}",{x:t,y:e})):this.__addPathCommand(r("M {x} {y}",{x:t,y:e}))},l.prototype.bezierCurveTo=function(t,e,i,n,o,a){this.__currentPosition={x:o,y:a},this.__addPathCommand(r("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}",{cp1x:t,cp1y:e,cp2x:i,cp2y:n,x:o,y:a}))},l.prototype.quadraticCurveTo=function(t,e,i,n){this.__currentPosition={x:i,y:n},this.__addPathCommand(r("Q {cpx} {cpy} {x} {y}",{cpx:t,cpy:e,x:i,y:n}))};var u=function(t){var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);return[t[0]/e,t[1]/e]};l.prototype.arcTo=function(t,e,r,i,n){var o=this.__currentPosition&&this.__currentPosition.x,a=this.__currentPosition&&this.__currentPosition.y;if("undefined"!=typeof o&&"undefined"!=typeof a){if(n<0)throw new Error("IndexSizeError: The radius provided ("+n+") is negative.");if(o===t&&a===e||t===r&&e===i||0===n)return void this.lineTo(t,e);var s=u([o-t,a-e]),l=u([r-t,i-e]);if(s[0]*l[1]===s[1]*l[0])return void this.lineTo(t,e);var h=s[0]*l[0]+s[1]*l[1],c=Math.acos(Math.abs(h)),p=u([s[0]+l[0],s[1]+l[1]]),d=n/Math.sin(c/2),_=t+d*p[0],f=e+d*p[1],g=[-s[1],s[0]],m=[l[1],-l[0]],y=function(t){var e=t[0],r=t[1];return r>=0?Math.acos(e):-Math.acos(e)},v=y(g),x=y(m);this.lineTo(_+g[0]*n,f+g[1]*n),this.arc(_,f,n,v,x)}},l.prototype.stroke=function(){"path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","fill stroke markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("stroke")},l.prototype.fill=function(){"path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","stroke fill markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("fill")},l.prototype.rect=function(t,e,r,i){"path"!==this.__currentElement.nodeName&&this.beginPath(),this.moveTo(t,e),this.lineTo(t+r,e),this.lineTo(t+r,e+i),this.lineTo(t,e+i),this.lineTo(t,e),this.closePath()},l.prototype.fillRect=function(t,e,r,i){var n,o;n=this.__createElement("rect",{x:t,y:e,width:r,height:i},!0),o=this.__closestGroupOrSvg(),o.appendChild(n),this.__currentElement=n,this.__applyStyleToCurrentElement("fill")},l.prototype.strokeRect=function(t,e,r,i){var n,o;n=this.__createElement("rect",{x:t,y:e,width:r,height:i},!0),o=this.__closestGroupOrSvg(),o.appendChild(n),this.__currentElement=n,this.__applyStyleToCurrentElement("stroke")},l.prototype.clearRect=function(t,e,r,i){var n,o=this.__closestGroupOrSvg();n=this.__createElement("rect",{x:t,y:e,width:r,height:i,fill:"#FFFFFF"},!0),o.appendChild(n)},l.prototype.createLinearGradient=function(t,e,r,n){var o=this.__createElement("linearGradient",{id:i(this.__ids),x1:t+"px",x2:r+"px",y1:e+"px",y2:n+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(o),new h(o,this)},l.prototype.createRadialGradient=function(t,e,r,n,o,a){var s=this.__createElement("radialGradient",{id:i(this.__ids),cx:n+"px",cy:o+"px",r:a+"px",fx:t+"px",fy:e+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(s),new h(s,this)},l.prototype.__parseFont=function(){var t=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\"\sa-z]+?)\s*$/i,e=t.exec(this.font),r={style:e[1]||"normal",size:e[4]||"10px",family:e[6]||"sans-serif",weight:e[3]||"normal",decoration:e[2]||"normal",href:null};return"underline"===this.__fontUnderline&&(r.decoration="underline"),this.__fontHref&&(r.href=this.__fontHref),r},l.prototype.__wrapTextLink=function(t,e){if(t.href){var r=this.__createElement("a");return r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t.href),r.appendChild(e),r}return e},l.prototype.__applyText=function(t,e,r,i){var n=this.__parseFont(),s=this.__closestGroupOrSvg(),l=this.__createElement("text",{"font-family":n.family,"font-size":n.size,"font-style":n.style,"font-weight":n.weight,"text-decoration":n.decoration,x:e,y:r,"text-anchor":o(this.textAlign),"dominant-baseline":a(this.textBaseline)},!0);l.appendChild(this.__document.createTextNode(t)),this.__currentElement=l,this.__applyStyleToCurrentElement(i),s.appendChild(this.__wrapTextLink(n,l))},l.prototype.fillText=function(t,e,r){this.__applyText(t,e,r,"fill")},l.prototype.strokeText=function(t,e,r){this.__applyText(t,e,r,"stroke")},l.prototype.measureText=function(t){return this.__ctx.font=this.font,this.__ctx.measureText(t)},l.prototype.arc=function(t,e,i,n,o,a){if(n!==o){n%=2*Math.PI,o%=2*Math.PI,n===o&&(o=(o+2*Math.PI-.001*(a?-1:1))%(2*Math.PI));var s=t+i*Math.cos(o),l=e+i*Math.sin(o),h=t+i*Math.cos(n),c=e+i*Math.sin(n),p=a?0:1,u=0,d=o-n;d<0&&(d+=2*Math.PI),u=a?d>Math.PI?0:1:d>Math.PI?1:0,this.lineTo(h,c),this.__addPathCommand(r("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",{rx:i,ry:i,xAxisRotation:0,largeArcFlag:u,sweepFlag:p,endX:s,endY:l})),this.__currentPosition={x:s,y:l}}},l.prototype.clip=function(){var t=this.__closestGroupOrSvg(),e=this.__createElement("clipPath"),n=i(this.__ids),o=this.__createElement("g");t.removeChild(this.__currentElement),e.setAttribute("id",n),e.appendChild(this.__currentElement),this.__defs.appendChild(e),t.setAttribute("clip-path",r("url(#{id})",{id:n})),t.appendChild(o),this.__currentElement=o},l.prototype.drawImage=function(){var t,e,r,i,n,o,a,s,h,c,p,u,d,_,f,g=Array.prototype.slice.call(arguments),m=g[0],y=0,v=0;if(3===g.length)t=g[1],e=g[2],n=m.width,o=m.height,r=n,i=o;else if(5===g.length)t=g[1],e=g[2],r=g[3],i=g[4],n=m.width,o=m.height;else{if(9!==g.length)throw new Error("Inavlid number of arguments passed to drawImage: "+arguments.length);y=g[1],v=g[2],n=g[3],o=g[4],t=g[5],e=g[6],r=g[7],i=g[8]}if(a=this.__closestGroupOrSvg(),p=this.__currentElement,m instanceof l){for(s=m.getSvg(),h=s.childNodes[0];h.childNodes.length;)f=h.childNodes[0].getAttribute("id"),this.__ids[f]=f,this.__defs.appendChild(h.childNodes[0]);c=s.childNodes[1],a.appendChild(c),this.__currentElement=c,this.translate(t,e),this.__currentElement=p}else"CANVAS"!==m.nodeName&&"IMG"!==m.nodeName||(u=this.__createElement("image"),u.setAttribute("width",r),u.setAttribute("height",i),u.setAttribute("preserveAspectRatio","none"),(y||v||n!==m.width||o!==m.height)&&(d=this.__document.createElement("canvas"),d.width=r,d.height=i,_=d.getContext("2d"),_.drawImage(m,y,v,n,o,0,0,r,i),m=d),u.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===m.nodeName?m.toDataURL():m.getAttribute("src")),a.appendChild(u),this.__currentElement=u,this.translate(t,e),this.__currentElement=p)},l.prototype.createPattern=function(t,e){var r,n=this.__document.createElementNS("http://www.w3.org/2000/svg","pattern"),o=i(this.__ids);return n.setAttribute("id",o),n.setAttribute("width",t.width),n.setAttribute("height",t.height),"CANVAS"===t.nodeName||"IMG"===t.nodeName?(r=this.__document.createElementNS("http://www.w3.org/2000/svg","image"),r.setAttribute("width",t.width),r.setAttribute("height",t.height),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===t.nodeName?t.toDataURL():t.getAttribute("src")),n.appendChild(r),this.__defs.appendChild(n)):t instanceof l&&(n.appendChild(t.__root.childNodes[1]),this.__defs.appendChild(n)),new c(n,this)},l.prototype.drawFocusRing=function(){},l.prototype.createImageData=function(){},l.prototype.getImageData=function(){},l.prototype.putImageData=function(){},l.prototype.globalCompositeOperation=function(){},l.prototype.setTransform=function(){},"object"===("undefined"==typeof window?"undefined":e(window))&&(window.C2S=l),"object"===e(t)&&"object"===e(t.exports)&&(t.exports=l)}()}).call(e,r(2)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}}])});