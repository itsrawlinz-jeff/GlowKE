(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{7814:function(i,e,b){"use strict";b.d(e,{G:function(){return d}});var j=b(3636),f=b(5697),a=b.n(f),c=b(7294);function k(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function l(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?k(Object(b),!0).forEach(function(a){n(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function m(a){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return p(a)||q(a)||r(a)||t()}function p(a){if(Array.isArray(a))return s(a)}function q(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function r(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function t(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(a){var b;return(b=a,(b-=0)==b)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(b,a){return a?a.toUpperCase():""})).substr(0,1).toLowerCase()+a.substr(1)}var v=["style"];function g(e,a){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var f=(a.children||[]).map(function(a){return g(e,a)}),b=Object.keys(a.attributes||{}).reduce(function(c,b){var e,d=a.attributes[b];switch(b){case"class":c.attrs.className=d,delete a.attributes.class;break;case"style":c.attrs.style=(e=d).split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,b){var d,e=b.indexOf(":"),c=u(b.slice(0,e)),f=b.slice(e+1).trim();return c.startsWith("webkit")?a[(d=c).charAt(0).toUpperCase()+d.slice(1)]=f:a[c]=f,a},{});break;default:0===b.indexOf("aria-")||0===b.indexOf("data-")?c.attrs[b.toLowerCase()]=d:c.attrs[u(b)]=d}return c},{attrs:{}}),d=c.style,h=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,v);return b.attrs.style=l(l({},b.attrs.style),void 0===d?{}:d),e.apply(void 0,[a.tag,l(l({},b.attrs),h)].concat(o(f)))}var h=!1;try{h=!0}catch(w){}function x(a){return a&&"object"===m(a)&&a.prefix&&a.iconName&&a.icon?a:j.Qc.icon?j.Qc.icon(a):null===a?null:a&&"object"===m(a)&&a.prefix&&a.iconName?a:Array.isArray(a)&&2===a.length?{prefix:a[0],iconName:a[1]}:"string"==typeof a?{prefix:"fas",iconName:a}:void 0}function y(b,a){return Array.isArray(a)&&a.length>0|| !Array.isArray(a)&&a?n({},b,a):{}}var z={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},d=c.forwardRef(function(H,I){var a,c,i,k,m,p,q,r,s,t,u,v,w,B,C,D,d,f,e,g,E,b=l(l({},z),H),J=b.icon,K=b.mask,L=b.symbol,M=b.className,N=b.title,O=b.titleId,P=b.maskId,F=x(J),Q=y("classes",[].concat(o((i=(a=b).beat,k=a.fade,m=a.beatFade,p=a.bounce,q=a.shake,r=a.flash,s=a.spin,t=a.spinPulse,u=a.spinReverse,v=a.pulse,w=a.fixedWidth,B=a.inverse,C=a.border,D=a.listItem,d=a.flip,f=a.size,e=a.rotation,g=a.pull,E=(c={"fa-beat":i,"fa-fade":k,"fa-beat-fade":m,"fa-bounce":p,"fa-shake":q,"fa-flash":r,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":t,"fa-pulse":v,"fa-fw":w,"fa-inverse":B,"fa-border":C,"fa-li":D,"fa-flip":!0===d,"fa-flip-horizontal":"horizontal"===d||"both"===d,"fa-flip-vertical":"vertical"===d||"both"===d},n(c,"fa-".concat(f),null!=f),n(c,"fa-rotate-".concat(e),null!=e&&0!==e),n(c,"fa-pull-".concat(g),null!=g),n(c,"fa-swap-opacity",a.swapOpacity),c),Object.keys(E).map(function(a){return E[a]?a:null}).filter(function(a){return a}))),o((M||"").split(" ")))),R=y("transform","string"==typeof b.transform?j.Qc.transform(b.transform):b.transform),S=y("mask",x(K)),G=(0,j.qv)(F,l(l(l(l({},Q),R),S),{},{symbol:L,title:N,titleId:O,maskId:P}));if(!G)return!function(){if(!h&&console&&"function"==typeof console.error){var a;(a=console).error.apply(a,arguments)}}("Could not find icon",F),null;var T=G.abstract,U={ref:I};return Object.keys(b).forEach(function(a){z.hasOwnProperty(a)||(U[a]=b[a])}),A(T[0],U)});d.displayName="FontAwesomeIcon",d.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool};var A=g.bind(null,c.createElement)},9316:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/[id]",function(){return c(5710)}])},6173:function(c,b,a){"use strict";var d=a(6042),e=a(5893),f=a(1163),g=a(7294),h=a(5564);b.Z=function(a){return function(c){var i=(0,f.useRouter)(),b=(0,g.useState)(!1),j=b[0],k=b[1];return((0,g.useEffect)(function(){var a=(0,h.Z)().access_token;a||"/login"===i.pathname?a&&"/login"===i.pathname?i.replace("/"):k(!0):i.replace("/login")},[i]),j)?(0,e.jsx)(a,(0,d.Z)({},c)):null}}},5710:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return u}});var e=a(5893),f=a(7294),g=a(6154),h=a(1163),i=a(5678),c=a(6173),j=a(9808),k=a(5564),l=a(8522),m=a(1546),n=a(7528),o=a(1311),p=function(a){var b=a.rating,c=a.ratingHandler,d=a.hoverRating,f=a.hoverHandler;return(0,e.jsx)("div",{className:"star-rating flex",children:[0,0,0,0,0].map(function(g,a){return a+=1,(0,e.jsx)("button",{type:"button",className:a<=(d||b)?"text-qpurple":"text-[#D2D8E1]",onClick:function(){return c(a)},onMouseEnter:function(){return f(a)},onMouseLeave:function(){return f(b)},children:(0,e.jsx)("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",className:"fill-current",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"})})},a)})})},q=a(9363),r=a(2664),s=a(4259),t=(0,c.Z)(function(){var F=(0,h.useRouter)(),t=(0,f.useState)(!0),G=t[0],P=t[1],H=F.query.id,u=(0,f.useState)(null),b=u[0],Q=u[1],v=(0,f.useState)(null),c=v[0],R=v[1],w=(0,f.useState)(null),a=w[0],S=w[1];(0,f.useEffect)(function(){S((0,q.Z)())},[]),(0,f.useEffect)(function(){(0,k.Z)()?b||g.Z.get("".concat("https://adminglow.labandallied.co.ke/public","api/user/order-show/").concat(H,"?token=").concat((0,k.Z)().access_token)).then(function(a){Q(a.data&&a.data.order),P(!1),R(function(){switch(a.data&&a.data.order&&parseInt(a.data.order.order_status)){case 0:default:return"Pending";case 1:return"Progress";case 2:return"Delivered";case 3:return"Completed";case 4:return"Declined"}})}).catch(function(a){P(!1),console.log(a)}):F.push("/login")});var d=(0,l.Z)().currency_icon,x=(0,f.useState)(!1),I=x[0],T=x[1],y=(0,f.useState)(0),z=y[0],J=y[1],A=(0,f.useState)(0),K=A[0],L=A[1],B=(0,f.useState)(""),M=B[0],U=B[1],C=(0,f.useState)(""),N=C[0],V=C[1],D=(0,f.useState)(!1),O=D[0],W=D[1],E=(0,f.useState)(null),X=E[0],Y=E[1],Z=function(a){T(!I),Y(a)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.Z,{childrenClasses:"pt-0 pb-0",children:(0,e.jsx)("div",{className:"order-tracking-wrapper w-full pt-[60px] pb-[114px]",children:(0,e.jsxs)("div",{className:"container-x mx-auto",children:[(0,e.jsx)(m.Z,{paths:[{name:a&&a.home,path:"/"},{name:a&&a.Order,path:"/order/".concat(H)},]}),G?(0,e.jsx)("div",{className:"w-full min-h-screen",children:(0,e.jsx)("div",{className:"mt-20",children:(0,e.jsx)(s.Z,{})})}):(0,e.jsx)(e.Fragment,{children:b&&(0,e.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"1000",className:"w-full h-[168px] bg-qpurplelow/10 rounded-2xl mb-10 relative print:hidden",children:[(0,e.jsxs)("div",{className:"w-full px-10 flex justify-between pt-3 mb-7",children:[(0,e.jsx)("div",{children:b.order_delivered_date&&(0,e.jsxs)("p",{className:"text-base font-400",children:[a&&a.Delivered_on," ",b.order_delivered_date]})}),(0,e.jsx)("div",{children:"Declined"===c&&(0,e.jsxs)("p",{className:"text-base font-bold text-qred mr-10",children:[a&&a.Your_order_is_declined,"!"]})})]}),(0,e.jsxs)("div",{className:"flex lg:space-x-[373px] space-x-[90px] w-full h-full justify-center",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("div",{className:"w-[30px] h-[30px] border-[8px] rounded-full border-qpurple bg-white relative z-20"}),(0,e.jsx)("p",{className:"absolute -left-4 top-10 sm:text-base text-sm font-400",children:a&&a.Pending})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("div",{className:"w-[30px] h-[30px] border-[8px] rounded-full  bg-white relative z-20 ".concat("Progress"===c||"Delivered"===c||"Completed"===c?"border-qpurple":"border-qgray")}),(0,e.jsx)("div",{className:"lg:w-[400px] w-[100px] h-[8px] absolute lg:-left-[390px] -left-[92px] top-[10px] z-10  ".concat("Progress"===c||"Delivered"===c||"Completed"===c?"bg-qpurple":"bg-white")}),(0,e.jsx)("p",{className:"absolute -left-4 top-10 sm:text-base text-sm font-400",children:a&&a.Progress})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("div",{className:"w-[30px] h-[30px] border-[8px] rounded-full bg-white  relative z-20 ".concat("Delivered"===c||"Completed"===c?"border-qpurple":"border-qgray")}),(0,e.jsx)("div",{className:"lg:w-[400px] w-[100px] h-[8px] absolute lg:-left-[390px] -left-[92px] top-[10px] z-10 ".concat("Delivered"===c||"Completed"===c?"bg-qpurple":"bg-white")}),(0,e.jsx)("p",{className:"absolute -left-4 top-10 sm:text-base text-sm font-400",children:a&&a.Delivered})]})]})]})}),(0,e.jsx)("div",{className:"bg-white lg:p-10 p-3 rounded-xl",children:b&&(0,e.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"100",id:"printSection",children:[(0,e.jsxs)("div",{className:"sm:flex justify-between items-center mb-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-[26px] font-semibold text-qblack mb-2.5",children:b.order_address&&b.order_address.billing_name}),(0,e.jsxs)("ul",{className:"flex flex-col space-y-2",children:[(0,e.jsxs)("li",{className:"text-[22px]n text-qgray",children:[a&&a.Order_ID,":"," ",(0,e.jsx)("span",{className:"text-qpurple",children:b.order_id})]}),(0,e.jsxs)("li",{className:"text-[22px]n text-qgray",children:[a&&a.Billing_Address,":"," ",(0,e.jsx)("span",{className:"text-qpurple",children:"".concat(b.order_address&&b.order_address.billing_address,",").concat(b.order_address&&b.order_address.billing_city,",").concat(b.order_address&&b.order_address.billing_state)})]}),(0,e.jsxs)("li",{className:"text-[22px]n text-qgray",children:[a&&a.Shipping_Address,":"," ",(0,e.jsx)("span",{className:"text-qpurple",children:"".concat(b.order_address&&b.order_address.shipping_address,",").concat(b.order_address&&b.order_address.shipping_city,",").concat(b.order_address&&b.order_address.shipping_state)})]}),(0,e.jsxs)("li",{className:"text-[22px]n text-qgray",children:[a&&a.Type,":"," ",(0,e.jsx)("span",{className:"text-qpurple",children:b.order_address&&1===parseInt(b.order_address.shipping_address_type)?a&&a.Office:a&&a.home})]})]})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("button",{onClick:function(){window.print()},type:"button",className:"w-[161px] h-[52px] rounded flex space-x-2.5 items-center justify-center transition-common bg-qpurple hover:bg-qpurplelow/30 hover:text-qpurple text-white print:hidden mt-5 sm:mt-0",children:[(0,e.jsx)("span",{children:(0,e.jsx)("svg",{width:"27",height:"26",viewBox:"0 0 27 26",fill:"none",className:"fill-current",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M24.9 6.10885H22.0364V0.900017C22.0364 0.402996 21.6334 0 21.1364 0H5.86364C5.36662 0 4.96362 0.402943 4.96362 0.900017V6.10885H2.09999C0.942047 6.10885 0 7.05095 0 8.2089V17.2635C0 18.4214 0.942047 19.3635 2.09999 19.3635H4.96378V24.1947C4.96378 24.6917 5.36672 25.0947 5.8638 25.0947H21.1362C21.6332 25.0947 22.0362 24.6918 22.0362 24.1947V19.3635H24.9C26.058 19.3635 27 18.4214 27 17.2635V8.2089C27 7.05101 26.058 6.10885 24.9 6.10885ZM6.76361 1.80004H20.2363V6.10885H6.76361V1.80004ZM20.2362 23.2947H6.76382C6.76382 23.1188 6.76382 16.149 6.76382 15.9315H20.2362C20.2362 16.1545 20.2362 23.1256 20.2362 23.2947ZM21.1364 11.3936H18.8454C18.3484 11.3936 17.9454 10.9907 17.9454 10.4936C17.9454 9.99654 18.3483 9.5936 18.8454 9.5936H21.1364C21.6334 9.5936 22.0364 9.99654 22.0364 10.4936C22.0364 10.9907 21.6334 11.3936 21.1364 11.3936Z"})})}),(0,e.jsx)("span",{className:"text-sm",children:a&&a.Print_PDF})]})})]}),(0,e.jsx)("div",{className:"relative w-full overflow-x-auto overflow-style-none overflow-hidden rounded border border-qpurplelow/30 box-border mb-10",children:(0,e.jsx)("table",{className:"w-full text-sm text-left text-qgray dark:text-gray-400",children:(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{className:"text-[13px] font-medium text-qblack bg-qpurplelow/20 whitespace-nowrap px-2 border-b border-qpurplelow/30 uppercase",children:[(0,e.jsx)("td",{className:" py-4 pl-10 block whitespace-nowrap w-[380px]",children:a&&a.Product}),(0,e.jsx)("td",{className:"py-4 whitespace-nowrap text-center",children:a&&a.quantity}),(0,e.jsx)("td",{className:"py-4 whitespace-nowrap text-center",children:a&&a.Price}),(0,e.jsx)("td",{className:"py-4 whitespace-nowrap text-center",children:a&&a.SUBTOTAL}),(0,e.jsx)("td",{className:"py-4 whitespace-nowrap text-center print:hidden",children:a&&a.review})]}),b.order_products.length>0&&b.order_products.map(function(b,c){return(0,e.jsxs)("tr",{className:"bg-white border-b border-qpurplelow/30 hover:bg-qpurplelow/10 last:border-none",children:[(0,e.jsx)("td",{className:"pl-10 w-[400px] py-4 ",children:(0,e.jsx)("div",{className:"flex space-x-6 items-center",children:(0,e.jsx)("div",{className:"flex-1 flex flex-col",children:(0,e.jsx)("h1",{className:"font-medium text-[15px] text-qblack",children:b.product_name})})})}),(0,e.jsx)("td",{className:" py-4",children:(0,e.jsx)("div",{className:"flex justify-center items-center",children:(0,e.jsx)("div",{className:"w-[54px] h-[40px] rounded justify-center flex items-center border border-qpurplelow/30",children:(0,e.jsx)("span",{children:b.qty})})})}),(0,e.jsx)("td",{className:"text-center py-4 px-2",children:(0,e.jsx)("div",{className:"flex space-x-1 items-center justify-center",children:(0,e.jsxs)("span",{className:"text-[15px] font-medium text-qblack",children:[(0,e.jsx)("span",{children:d}),(0,e.jsx)("span",{children:b.unit_price})]})})}),(0,e.jsx)("td",{className:"text-center py-4 px-2",children:(0,e.jsx)("div",{className:"flex space-x-1 items-center justify-center",children:(0,e.jsxs)("span",{className:"text-[15px] font-medium text-qblack",children:[(0,e.jsx)("span",{children:d}),(0,e.jsx)("span",{children:(b.unit_price*b.qty).toFixed(2)})]})})}),(0,e.jsx)("td",{className:"text-center py-4 px-2 print:hidden",children:(0,e.jsx)("button",{onClick:function(){return Z(b.product_id)},type:"button",className:"text-qpurple text-sm font-semibold capitalize",children:a&&a.review})})]},c)})]})})}),(0,e.jsx)("div",{className:"flex sm:justify-end print:justify-end justify-center sm:mr-10",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex justify-between font-semibold w-[200px] mb-2",children:[(0,e.jsx)("p",{className:"text-sm text-qblack",children:a&&a.SUBTOTAL}),(0,e.jsxs)("p",{className:"text-sm text-qblack",children:[(0,e.jsx)("span",{children:d}),(0,e.jsx)("span",{children:parseInt(b.total_amount)-parseInt(b.shipping_cost)+parseInt(b.coupon_coast)})]})]}),(0,e.jsxs)("div",{className:"flex justify-between font-semibold w-[200px] mb-2",children:[(0,e.jsxs)("p",{className:"text-sm text-qred",children:["(-) ",a&&a.Discount_coupon]}),(0,e.jsxs)("p",{className:"text-sm text-qred",children:["-",(0,e.jsx)("span",{children:d}),(0,e.jsx)("span",{children:b.coupon_coast})]})]}),(0,e.jsxs)("div",{className:"flex justify-between font-semibold w-[200px]",children:[(0,e.jsxs)("p",{className:"text-sm text-qblack",children:["(+) ",a&&a.Shipping_Cost]}),(0,e.jsxs)("p",{className:"text-sm text-qblack",children:["+",(0,e.jsx)("span",{children:d}),(0,e.jsx)("span",{children:b.shipping_cost})]})]}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-qpurplelow mt-4"}),(0,e.jsxs)("div",{className:"flex justify-between font-semibold w-[200px] mt-4",children:[(0,e.jsx)("p",{className:"text-lg text-qblack",children:a&&a.Total_Paid}),(0,e.jsxs)("p",{className:"text-lg text-qblack",children:[(0,e.jsx)("span",{children:d}),(0,e.jsx)("span",{children:parseInt(b.total_amount)})]})]})]})})]})})]})})}),I&&(0,e.jsxs)("div",{className:"w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center",children:[(0,e.jsx)("div",{onClick:function(){return T(!I)},className:"w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"}),(0,e.jsxs)("div",{"data-aos":"fade-up",className:"sm:w-1/2 w-full rounded bg-white relative py-[40px] px-[38px]",style:{zIndex:"999"},children:[(0,e.jsxs)("div",{className:"title-bar flex items-center justify-between mb-3",children:[(0,e.jsx)("h1",{className:"text-2xl font-medium text-qblack mb-5",children:a&&a.Write_Your_Reviews}),(0,e.jsx)("span",{className:"cursor-pointer",onClick:function(){return T(!I)},children:(0,e.jsx)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M26.9399 54.0001C12.0678 53.9832 -0.0210736 41.827 2.75822e-05 26.9125C0.0211287 12.0507 12.1965 -0.0315946 27.115 6.20658e-05C41.9703 0.0317188 54.0401 12.2153 54 27.1404C53.9599 41.9452 41.7972 54.0191 26.9399 54.0001ZM18.8476 16.4088C17.6765 16.4404 16.9844 16.871 16.6151 17.7194C16.1952 18.6881 16.3893 19.5745 17.1363 20.3258C19.0966 22.2906 21.0252 24.2913 23.0425 26.197C23.7599 26.8745 23.6397 27.2206 23.0045 27.8305C21.078 29.6793 19.2148 31.5956 17.3241 33.4802C16.9211 33.8812 16.5581 34.3012 16.4505 34.8857C16.269 35.884 16.6953 36.8337 17.5456 37.3106C18.4382 37.8129 19.5038 37.6631 20.3394 36.8421C22.3673 34.8435 24.3866 32.8365 26.3723 30.7999C26.8513 30.3082 27.1298 30.2871 27.6193 30.7915C29.529 32.7584 31.4851 34.6789 33.4201 36.6184C33.8463 37.0447 34.2831 37.4436 34.9098 37.5491C35.9184 37.7201 36.849 37.2895 37.3196 36.4264C37.7964 35.5548 37.6677 34.508 36.8912 33.7144C34.9731 31.756 33.0677 29.7806 31.0631 27.9149C30.238 27.1467 30.3688 26.7479 31.1031 26.0535C32.9896 24.266 34.8022 22.3982 36.6338 20.5516C37.7922 19.3845 37.8914 17.9832 36.9081 17.0293C35.9501 16.1007 34.5975 16.2146 33.4623 17.3416C31.5188 19.2748 29.5649 21.1995 27.6594 23.1664C27.1446 23.6983 26.8492 23.6962 26.3343 23.1664C24.4267 21.1974 22.4664 19.2811 20.5336 17.3374C19.9997 16.7971 19.4258 16.3666 18.8476 16.4088Z",fill:"#F34336"})})})]}),(0,e.jsxs)("div",{className:"write-review w-full",children:[(0,e.jsxs)("div",{className:"flex space-x-1 items-center mb-[30px]",children:[(0,e.jsx)(p,{hoverRating:K,hoverHandler:L,rating:z,ratingHandler:J}),(0,e.jsxs)("span",{className:"text-qblack text-[15px] font-normal mt-1",children:["(",z,".0)"]})]}),(0,e.jsxs)("div",{className:"w-full review-form ",children:[(0,e.jsx)("div",{className:" w-full mb-[30px]",children:(0,e.jsx)(n.Z,{label:"name",placeholder:"",type:"text",name:"name",inputClasses:"h-[50px]",value:M,inputHandler:function(a){return U(a.target.value)}})}),(0,e.jsxs)("div",{className:"w-full mb-[30px]",children:[(0,e.jsxs)("h6",{className:"input-label text-qgray capitalize text-[13px] font-normal block mb-2 ",children:[a&&a.Message,"*"]}),(0,e.jsx)("textarea",{value:N,onChange:function(a){return V(a.target.value)},name:"",id:"",cols:"30",rows:"3",className:"w-full placeholder:text-sm focus:ring-0 rounded border border-qpurplelow focus:outline-none p-6"})]}),(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{onClick:function(){W(!0),(0,k.Z)()?j.Z.productReview({rating:z,product_id:X,review:N},(0,k.Z)().access_token).then(function(a){i.Am.success(a.data&&a.data.message),W(!0),U(""),V(""),J(0),L(0),Y(null),T(!1)}).catch(function(b){W(!1),console.log(b),b.response&&b.response.data.errors&&i.Am.error(a&&a.Invalid_data),b.response&&b.response.data.message&&i.Am.error(b.response.data.message)}):W(!0)},type:"button",className:"bg-qpurple rounded text-white w-[300px] h-[50px] flex justify-center",children:(0,e.jsxs)("span",{className:"flex space-x-1 items-center h-full",children:[(0,e.jsx)("span",{className:"text-sm font-semibold",children:a&&a.Submit_Review}),O&&(0,e.jsx)("span",{className:"w-5 ",style:{transform:"scale(0.3)"},children:(0,e.jsx)(o.Z,{})})]})})})]})]})]})]})]})}),u=function(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(t,{})})}},1546:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(c){var b=c.paths,a=void 0===b?[{name:"home",path:"/"}]:b;return(0,d.jsx)(d.Fragment,{children:a&&a.length>0&&(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:a.map(function(a){return(0,d.jsxs)("span",{children:[(0,d.jsx)("a",{href:a.path,children:(0,d.jsx)("span",{className:"mx-1 capitalize",children:a.name})}),(0,d.jsx)("span",{className:"sperator",children:"/"})]},Math.random())})})},Math.random())})}},4259:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto",display:"block",shapeRendering:"auto"},width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[(0,d.jsx)("g",{transform:"rotate(0 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(30 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(60 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(90 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(120 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(150 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(180 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(210 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(240 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(270 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(300 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})})}),(0,d.jsx)("g",{transform:"rotate(330 50 50)",children:(0,d.jsx)("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#AE1C9A",children:(0,d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})]})})}a(7294)},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(a){a.O(0,[664,774,888,179],function(){var b;return a(a.s=9316)}),_N_E=a.O()}])