(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{7814:function(i,e,b){"use strict";b.d(e,{G:function(){return d}});var j=b(3636),f=b(5697),a=b.n(f),c=b(7294);function k(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function l(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?k(Object(b),!0).forEach(function(a){n(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function m(a){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return p(a)||q(a)||r(a)||t()}function p(a){if(Array.isArray(a))return s(a)}function q(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function r(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function t(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(a){var b;return(b=a,(b-=0)==b)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(b,a){return a?a.toUpperCase():""})).substr(0,1).toLowerCase()+a.substr(1)}var v=["style"];function g(e,a){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var f=(a.children||[]).map(function(a){return g(e,a)}),b=Object.keys(a.attributes||{}).reduce(function(c,b){var e,d=a.attributes[b];switch(b){case"class":c.attrs.className=d,delete a.attributes.class;break;case"style":c.attrs.style=(e=d).split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,b){var d,e=b.indexOf(":"),c=u(b.slice(0,e)),f=b.slice(e+1).trim();return c.startsWith("webkit")?a[(d=c).charAt(0).toUpperCase()+d.slice(1)]=f:a[c]=f,a},{});break;default:0===b.indexOf("aria-")||0===b.indexOf("data-")?c.attrs[b.toLowerCase()]=d:c.attrs[u(b)]=d}return c},{attrs:{}}),d=c.style,h=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,v);return b.attrs.style=l(l({},b.attrs.style),void 0===d?{}:d),e.apply(void 0,[a.tag,l(l({},b.attrs),h)].concat(o(f)))}var h=!1;try{h=!0}catch(w){}function x(a){return a&&"object"===m(a)&&a.prefix&&a.iconName&&a.icon?a:j.Qc.icon?j.Qc.icon(a):null===a?null:a&&"object"===m(a)&&a.prefix&&a.iconName?a:Array.isArray(a)&&2===a.length?{prefix:a[0],iconName:a[1]}:"string"==typeof a?{prefix:"fas",iconName:a}:void 0}function y(b,a){return Array.isArray(a)&&a.length>0|| !Array.isArray(a)&&a?n({},b,a):{}}var z={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},d=c.forwardRef(function(H,I){var a,c,i,k,m,p,q,r,s,t,u,v,w,B,C,D,d,f,e,g,E,b=l(l({},z),H),J=b.icon,K=b.mask,L=b.symbol,M=b.className,N=b.title,O=b.titleId,P=b.maskId,F=x(J),Q=y("classes",[].concat(o((i=(a=b).beat,k=a.fade,m=a.beatFade,p=a.bounce,q=a.shake,r=a.flash,s=a.spin,t=a.spinPulse,u=a.spinReverse,v=a.pulse,w=a.fixedWidth,B=a.inverse,C=a.border,D=a.listItem,d=a.flip,f=a.size,e=a.rotation,g=a.pull,E=(c={"fa-beat":i,"fa-fade":k,"fa-beat-fade":m,"fa-bounce":p,"fa-shake":q,"fa-flash":r,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":t,"fa-pulse":v,"fa-fw":w,"fa-inverse":B,"fa-border":C,"fa-li":D,"fa-flip":!0===d,"fa-flip-horizontal":"horizontal"===d||"both"===d,"fa-flip-vertical":"vertical"===d||"both"===d},n(c,"fa-".concat(f),null!=f),n(c,"fa-rotate-".concat(e),null!=e&&0!==e),n(c,"fa-pull-".concat(g),null!=g),n(c,"fa-swap-opacity",a.swapOpacity),c),Object.keys(E).map(function(a){return E[a]?a:null}).filter(function(a){return a}))),o((M||"").split(" ")))),R=y("transform","string"==typeof b.transform?j.Qc.transform(b.transform):b.transform),S=y("mask",x(K)),G=(0,j.qv)(F,l(l(l(l({},Q),R),S),{},{symbol:L,title:N,titleId:O,maskId:P}));if(!G)return!function(){if(!h&&console&&"function"==typeof console.error){var a;(a=console).error.apply(a,arguments)}}("Could not find icon",F),null;var T=G.abstract,U={ref:I};return Object.keys(b).forEach(function(a){z.hasOwnProperty(a)||(U[a]=b[a])}),A(T[0],U)});d.displayName="FontAwesomeIcon",d.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool};var A=g.bind(null,c.createElement)},2036:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return c(4292)}])},4292:function(e,b,a){"use strict";a.r(b),a.d(b,{default:function(){return u}});var f=a(5893),g=a(7294),h=a(7568),c=a(4051),i=a.n(c),j=a(1163),k=a(5678),l=a(9808),m=a(7528),n=a(1311),o=a(2664),d=a(5675),p=a.n(d),q=a(9473),r=a(9363);function s(){var F,M=(0,j.useRouter)(),G=(0,q.v9)(function(a){return a.websiteSetup}).websiteSetup,c=(0,g.useState)(""),d=c[0],N=c[1],e=(0,g.useState)(!1),s=e[0],O=e[1],t=(0,g.useState)(!1),H=t[0],P=t[1],u=(0,g.useState)(""),v=u[0],Q=u[1],w=(0,g.useState)(!0),I=w[0],R=w[1],x=(0,g.useState)(""),y=x[0],S=x[1],z=(0,g.useState)(""),A=z[0],T=z[1],B=(0,g.useState)(null),b=B[0],U=B[1],C=(0,g.useState)(null),D=C[0],V=C[1];(0,g.useEffect)(function(){G&&V(G.payload.login_page_image)},[G]);var J,K=(F=(0,h.Z)(i().mark(function a(){return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return O(!0),a.next=3,l.Z.forgotPass({email:d}).then(function(a){P(!0),R(!1),O(!1),U(null)}).catch(function(a){if(console.log(a),O(!1),U(a.response),!a.response||!a.response.data.notification)return!1;k.Am.error(a.response.data.notification)});case 3:case"end":return a.stop()}},a)})),function(){return F.apply(this,arguments)}),L=(J=(0,h.Z)(i().mark(function a(){return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return O(!0),a.next=3,l.Z.resetPass({email:d,password:y,password_confirmation:A},v).then(function(a){O(!1),M.push("login"),k.Am.success(a.data.notification)}).catch(function(a){if(console.log(a),O(!1),U(a.response),!a.response||!a.response.data.notification)return!1;k.Am.error(a.response.data.notification)});case 3:case"end":return a.stop()}},a)})),function(){return J.apply(this,arguments)}),E=(0,g.useState)(null),a=E[0],W=E[1];return(0,g.useEffect)(function(){W((0,r.Z)())},[]),(0,f.jsx)(o.Z,{childrenClasses:"pt-0 pb-0 min-h-0",children:(0,f.jsxs)("div",{className:"login-page-wrapper w-full relative",children:[(0,f.jsx)("div",{className:"w-full h-full h-screen absolute left-0 top-0",children:(0,f.jsxs)("div",{className:"w-full h-full relative z-10",children:[D&&(0,f.jsx)(p(),{layout:"fill",src:"".concat("https://adminglow.labandallied.co.ke/public"+D.image),alt:"login"}),(0,f.jsx)("div",{className:"bg-[#232532] bg-opacity-50 relative w-full h-full absolute left-0 top-0"})]})}),(0,f.jsx)("div",{className:"container-x mx-auto",children:(0,f.jsx)("div",{className:"lg:flex items-center justify-center relative py-[60px]",children:(0,f.jsx)("div",{className:"lg:w-[572px] w-full h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0] rounded-lg relative z-20",children:I?(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsx)("div",{className:"title-area flex flex-col justify-center items-center relative text-center mb-7",children:(0,f.jsx)("h1",{className:"text-[34px] font-bold leading-[74px] text-qblack",children:a&&a.Forgot_password})}),(0,f.jsxs)("div",{className:"input-area",children:[(0,f.jsx)("div",{className:"input-item mb-5",children:(0,f.jsx)(m.Z,{placeholder:a&&a.email,label:a&&a.Email_Address+"*",name:"email",type:"email",inputClasses:"h-[50px]",inputHandler:function(a){return N(a.target.value.trim())},value:d})}),(0,f.jsx)("div",{className:"signin-area mb-3.5",children:(0,f.jsx)("div",{className:"flex justify-center",children:(0,f.jsxs)("button",{onClick:K,type:"button",disabled:!d,className:"bg-qpurple rounded disabled:bg-opacity-60 disabled:cursor-not-allowed mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center",children:[(0,f.jsx)("span",{children:a&&a.Send}),s&&(0,f.jsx)("span",{className:"w-5 ",style:{transform:"scale(0.3)"},children:(0,f.jsx)(n.Z,{})})]})})})]})]}):H?(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsxs)("div",{className:"title-area flex flex-col justify-center items-center relative text-center mb-7",children:[(0,f.jsx)("h1",{className:"text-[34px] font-bold leading-[74px] text-qblack",children:a&&a.Reset_Password}),(0,f.jsx)("div",{className:"shape -mt-6",children:(0,f.jsx)("svg",{width:"354",height:"30",viewBox:"0 0 354 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",stroke:"#27AE60",strokeWidth:"2",strokeLinecap:"round"})})})]}),(0,f.jsxs)("div",{className:"input-area",children:[(0,f.jsx)("div",{className:"input-item mb-5",children:(0,f.jsx)(m.Z,{placeholder:"\u25CF \u25CF \u25CF \u25CF \u25CF \u25CF",label:a&&a.OTP+"*",name:"otp",type:"text",inputClasses:"h-[50px]",value:v,error:b,inputHandler:function(a){return Q(a.target.value.trim())}})}),(0,f.jsxs)("div",{className:"input-item mb-5",children:[(0,f.jsx)(m.Z,{placeholder:"\u25CF \u25CF \u25CF \u25CF \u25CF \u25CF",label:a&&a.New_Password+"*",name:"new_password",type:"password",inputClasses:"h-[50px]",value:y,error:!!(b&&b.data.errors&&Object.hasOwn(b.data.errors,"password")),inputHandler:function(a){return S(a.target.value.trim())}}),b&&b.data.errors&&Object.hasOwn(b.data.errors,"password")?(0,f.jsx)("span",{className:"text-sm mt-1 text-qred",children:b.data.errors.password[0]}):""]}),(0,f.jsxs)("div",{className:"input-item mb-5",children:[(0,f.jsx)(m.Z,{placeholder:"\u25CF \u25CF \u25CF \u25CF \u25CF \u25CF",label:a&&a.Confirm_Password+"*",name:"Confirm Password",type:"password",inputClasses:"h-[50px]",value:A,error:!!(b&&b.data.errors&&Object.hasOwn(b.data.errors,"password")),inputHandler:function(a){return T(a.target.value.trim())}}),b&&b.data.errors&&Object.hasOwn(b.data.errors,"password")?(0,f.jsx)("span",{className:"text-sm mt-1 text-qred",children:b.data.errors.password[0]}):""]}),(0,f.jsx)("div",{className:"signin-area mb-3.5",children:(0,f.jsx)("div",{className:"flex justify-center",children:(0,f.jsxs)("button",{onClick:L,type:"button",disabled:!v||!A||!y,className:"bg-qpurple rounded disabled:bg-opacity-60 disabled:cursor-not-allowed mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center",children:[(0,f.jsx)("span",{children:a&&a.Reset}),s&&(0,f.jsx)("span",{className:"w-5 ",style:{transform:"scale(0.3)"},children:(0,f.jsx)(n.Z,{})})]})})})]})]}):""})})})]})})}var t=a(4987);function u(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.Z,{title:"forgot password"}),(0,f.jsx)(s,{})]})}},4987:function(d,b,a){"use strict";var e=a(5893),c=a(9008),f=a.n(c);a(7294);var g=a(8522);b.Z=function(b){var c=b.title,a=(0,g.Z)().favicon;return(0,e.jsxs)(f(),{children:[(0,e.jsx)("title",{children:c}),(0,e.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,e.jsx)("link",{rel:"icon",href:"".concat(a?"https://adminglow.labandallied.co.ke/public"+a:"/favico.svg")})]})}},9008:function(a,c,b){a.exports=b(5443)},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(a){a.O(0,[664,774,888,179],function(){var b;return a(a.s=2036)}),_N_E=a.O()}])