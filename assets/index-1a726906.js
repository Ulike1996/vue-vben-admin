var B=Object.defineProperty;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var F=(e,o,a)=>o in e?B(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,L=(e,o)=>{for(var a in o||(o={}))E.call(o,a)&&F(e,a,o[a]);if(f)for(var a of f(o))h.call(o,a)&&F(e,a,o[a]);return e};import{aB as T,aC as D,_ as W}from"./index.js";import{u as A,d as R,k as C,r as w,H as P,a8 as l,v as $,t as N,_ as V,a9 as H,aa as u,a0 as S,f as t,E as r}from"./vue-05cc5022.js";import{P as j}from"./index-2838de3a.js";import{ah as _}from"./antd-5cc557c7.js";import"./useContentViewHeight-8fd03a41.js";import"./useWindowSizeFn-b3f3cabb.js";import"./onMountedOrActivated-7a6feff1.js";function k(e){let o,a=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const n=e;o=n.props||{},a=n.target||document.body}else o=e;const s=T(o,void 0,!0);return[()=>{const n=A(a);n&&s.open(n)},()=>{s.close()},n=>{s.setTip(n)}]}const q=R({components:{Loading:D,PageWrapper:j,[_.name]:_},setup(){const e=C(null),o=C(!1),a=w({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"加载中..."}),[s,p]=k({tip:"加载中..."}),[c,i]=k({target:e,props:{tip:"加载中...",absolute:!0}});function n(v){a.absolute=v,a.loading=!0,setTimeout(()=>{a.loading=!1},2e3)}function d(){n(!1)}function m(){n(!0)}function g(){s(),setTimeout(()=>{p()},2e3)}function b(){c(),setTimeout(()=>{i()},2e3)}function y(){o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return L({openCompFullLoading:d,openFnFullLoading:g,openFnWrapLoading:b,openCompAbsolute:m,wrapEl:e,loadingRef:o,openDirectiveLoading:y},P(a))}}),z={ref:"wrapEl"};function G(e,o,a,s,p,c){const i=l("a-alert"),n=l("a-button"),d=l("Loading"),m=l("PageWrapper"),g=$("loading");return N((V(),H(m,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:u(()=>[S("div",z,[t(i,{message:"组件方式"}),t(n,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:u(()=>[r(" 全屏 Loading ")]),_:1},8,["onClick"]),t(n,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:u(()=>[r(" 容器内 Loading ")]),_:1},8,["onClick"]),t(d,{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(i,{message:"函数方式"}),t(n,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:u(()=>[r(" 全屏 Loading ")]),_:1},8,["onClick"]),t(n,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:u(()=>[r(" 容器内 Loading ")]),_:1},8,["onClick"]),t(i,{message:"指令方式"}),t(n,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:u(()=>[r(" 打开指令Loading ")]),_:1},8,["onClick"])],512)]),_:1})),[[g,e.loadingRef]])}const Y=W(q,[["render",G]]);export{Y as default};
