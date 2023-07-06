import{_ as d}from"./index-f1ce8a1f.js";import{t as E,a as g,b as B}from"./data-1ad4e56f.js";import{P as C}from"./index-2838de3a.js";import{aa as h,ab as _,bg as A,bh as b}from"./antd-5cc557c7.js";import{d as k,n as p,a8 as n,_ as L,a9 as R,aa as a,f as t,E as F,a1 as D}from"./vue-05cc5022.js";import{_ as M}from"./index.js";import"./index-1a54703a.js";import"./index-b33b97e7.js";import"./useContextMenu-146e6e09.js";import"./useContentViewHeight-8fd03a41.js";import"./useWindowSizeFn-b3f3cabb.js";import"./onMountedOrActivated-7a6feff1.js";const N=k({components:{BasicTree:d,PageWrapper:C,Row:h,Col:_},setup(){function e(u){console.log(u)}function s(u){return[{label:"新增",handler:()=>{console.log("点击了新增",u)},icon:"bi:plus"},{label:"删除",handler:()=>{console.log("点击了删除",u)},icon:"bx:bxs-folder-open"}]}const l=[{render:u=>p(A,{class:"ml-2",onClick:()=>{e(u)}})},{render:()=>p(b)}];function c({level:u}){return u===1?"ion:git-compare-outline":u===2?"ion:home":u===3?"ion:airplane":""}return{treeData:E,treeData2:g,treeData3:B,actionList:l,getRightMenuList:s,createIcon:c}}});function P(e,s,l,c,u,T){const r=n("BasicTree"),o=n("Col"),f=n("Row"),m=n("PageWrapper");return L(),R(m,{title:"Tree函数操作示例"},{default:a(()=>[t(f,{gutter:[16,16]},{default:a(()=>[t(o,{span:8},{default:a(()=>[t(r,{title:"右侧操作按钮/自定义图标",helpMessage:"帮助信息",treeData:e.treeData,actionList:e.actionList,renderIcon:e.createIcon},null,8,["treeData","actionList","renderIcon"])]),_:1}),t(o,{span:8},{default:a(()=>[t(r,{title:"右键菜单",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),t(o,{span:8},{default:a(()=>[t(r,{title:"工具栏使用",toolbar:"",checkable:"",search:"",treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),t(o,{span:8},{default:a(()=>[t(r,{title:"没有fieldNames，插槽有效",helpMessage:"正确的示例",treeData:e.treeData3},{title:a(i=>[F(" 插槽："+D(i.name),1)]),_:1},8,["treeData"])]),_:1}),t(o,{span:8},{default:a(()=>[t(r,{title:"有fieldNames后，插槽失效",helpMessage:"错误的示例, 应该显示插槽的内容才对",fieldNames:{key:"id",title:"name"},treeData:e.treeData2},{title:a(i=>[F(" 插槽："+D(i.title),1)]),_:1},8,["treeData"])]),_:1}),t(o,{span:8},{default:a(()=>[t(r,{title:"有fieldNames后，actionList失效",helpMessage:"错误的示例，应该在鼠标移上去时，显示新增和删除按钮才对",treeData:e.treeData3,actionList:e.actionList,fieldNames:{key:"key",title:"name"}},null,8,["treeData","actionList"])]),_:1})]),_:1})]),_:1})}const H=M(N,[["render",P]]);export{H as default};
