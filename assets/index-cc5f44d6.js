import{p as Q,f as Z,m as ee,_ as T,aw as te}from"./index.js";import{d as b,e as w,a8 as _,_ as $,$ as N,f as o,aa as C,R as ne,F as oe,ab as se,a9 as X,ae,ad as F,af as re,a2 as ie,r as le,k as O,s as ce,u as g,E as Y,m as ue}from"./vue-05cc5022.js";import{aF as W,aU as me,aX as de,aY as ge}from"./antd-5cc557c7.js";import{P as fe}from"./index-2838de3a.js";import"./useContentViewHeight-8fd03a41.js";import"./useWindowSizeFn-b3f3cabb.js";import"./onMountedOrActivated-7a6feff1.js";const pe=b({name:"ImagePreview",components:{Image:W,PreviewGroup:W.PreviewGroup},props:{functional:Q.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),l=w(()=>{const{imageList:r}=n;return r?r.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:l}}});function ve(n,u,l,r,t,h){const d=_("Image"),p=_("PreviewGroup");return $(),N("div",{class:ie(n.prefixCls)},[o(p,null,{default:C(()=>[!n.imageList||n.$slots.default?ne(n.$slots,"default",{key:0}):($(!0),N(oe,{key:1},se(n.getImageList,c=>($(),X(d,ae(F({key:c.src},c)),re({_:2},[c.placeholder?{name:"placeholder",fn:C(()=>[o(d,F(c,{src:c.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}const _e=T(pe,[["render",ve]]),he="/assets/resume-8f27866b.svg",Ie="/assets/p-rotate-cb8bbfc3.svg",Le="/assets/scale-44abde22.svg",we="/assets/unscale-c552f416.svg",$e="/assets/unrotate-ef6a2daf.svg";var f=function(n){return n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL",n}(f||{});const Ce={show:{type:Boolean,default:!1},imageList:{type:Array,default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},a="img-preview",Se=b({name:"ImagePreview",props:Ce,emits:["img-load","img-error"],setup(n,{expose:u,emit:l}){const r=new Map,t=le({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:f.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=O(null),d=O(null);function p(){U();const{index:e,imageList:s}=n;if(!s||!s.length)throw new Error("imageList is undefined");t.currentIndex=e,P(s[e])}function c(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function U(){const e=g(h);e&&(e.onmousewheel=S,document.body.addEventListener("DOMMouseScroll",S),document.ondragstart=function(){return!1})}const I=w(()=>{var s;const e=(s=n==null?void 0:n.scaleStep)!=null?s:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function S(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&L(I.value),e.delta<0&&L(-I.value)}function L(e){t.imgScale<=.2&&e<0||(t.imgScale+=e*.1,t.imgScale<0&&(t.imgScale=.02))}function k(e){t.imgRotate+=e}function B(){const e=g(d);e&&(e.onmousemove=null)}function P(e){t.status=f.LOADING;const s=new Image;s.src=e,s.onload=i=>{if(t.currentUrl!==e){const m=i.composedPath();if(n.rememberState){r.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=r.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(c(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&l("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=f.DONE},s.onerror=i=>{const m=i.composedPath();m&&l("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=f.FAIL}}function A(e){e&&e.stopPropagation(),E()}function E(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",S),document.ondragstart=null}function R(){c()}u({resume:R,close:E,prev:x.bind(null,"left"),next:x.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function x(e){const{currentIndex:s}=t,{imageList:i}=n;e==="left"&&(t.currentIndex--,s<=0&&(t.currentIndex=i.length-1)),e==="right"&&(t.currentIndex++,s>=i.length-1&&(t.currentIndex=0)),P(i[t.currentIndex])}function z(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const s=g(d);s&&(s.onmousemove=V)}function V(e){e=e||window.event,e.preventDefault();const s=e.clientX-t.moveX,i=e.clientY-t.moveY;t.imgLeft+=s,t.imgTop+=i,t.moveX=e.clientX,t.moveY=e.clientY}const j=w(()=>{const{imgScale:e,imgRotate:s,imgTop:i,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${s}deg)`,marginTop:`${i}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),D=w(()=>{const{imageList:e}=n;return e.length>1});ce(()=>{n.show&&p(),n.imageList&&c()});const q=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${a}-content`)&&A(e)},H=()=>o("div",{class:`${a}__close`,onClick:A},[o(me,{class:`${a}__close-icon`},null)]),J=()=>{if(!g(D))return null;const{currentIndex:e}=t,{imageList:s}=n;return o("div",{class:`${a}__index`},[e+1,Y(" / "),s.length])},K=()=>o("div",{class:`${a}__controller`},[o("div",{class:`${a}__controller-item`,onClick:()=>L(-I.value)},[o("img",{src:we},null)]),o("div",{class:`${a}__controller-item`,onClick:()=>L(I.value)},[o("img",{src:Le},null)]),o("div",{class:`${a}__controller-item`,onClick:R},[o("img",{src:he},null)]),o("div",{class:`${a}__controller-item`,onClick:()=>k(-90)},[o("img",{src:$e},null)]),o("div",{class:`${a}__controller-item`,onClick:()=>k(90)},[o("img",{src:Ie},null)])]),M=e=>g(D)?o("div",{class:[`${a}__arrow`,e],onClick:()=>x(e)},[e==="left"?o(de,null,null):o(ge,null,null)]):null;return()=>t.show&&o("div",{class:a,ref:h,onMouseup:B,onClick:q},[o("div",{class:`${a}-content`},[o("img",{style:g(j),class:[`${a}-image`,t.status===f.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:z},null),H(),J(),K(),M("left"),M("right")])])}});let y=null;function xe(n){var r;if(!te)return;const u={},l=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),y=o(Se,u),ue(y,l),document.body.appendChild(l),(r=y.component)==null?void 0:r.exposed}const G=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],ye=b({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){xe({imageList:G,defaultWidth:700,rememberState:!0,onImgLoad:({index:l,url:r,dom:t})=>{console.log(`第${l+1}张图片已加载，URL为：${r}`,t)}})}return{imgList:G,openImg:n}}});function be(n,u,l,r,t,h){const d=_("ImagePreview"),p=_("a-button"),c=_("PageWrapper");return $(),X(c,{title:"图片预览示例"},{default:C(()=>[o(d,{imageList:n.imgList},null,8,["imageList"]),o(p,{onClick:n.openImg,type:"primary"},{default:C(()=>[Y("无预览图")]),_:1},8,["onClick"])]),_:1})}const Ne=T(ye,[["render",be]]);export{Ne as default};
