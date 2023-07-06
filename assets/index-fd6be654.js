import k from"./CollapseItem-bf4a4816.js";import G from"./FormComponentPanel-715bdab8.js";import V from"./JsonModal-be196f38.js";import j from"./index-00083fc6.js";import{_ as N}from"./useForm.vue_vue_type_script_setup_true_lang-64556ce0.js";import q from"./Toolbar-cf514243.js";import Q from"./PropsPanel-b8b3ef21.js";import U from"./ImportJsonModal-40bbce9d.js";import X from"./CodeModal-bf283017.js";import"./index-9d93ea43.js";import{g as P,f as Y}from"./index-13afcbd1.js";import{b as Z,c as ee,l as oe}from"./formItemConfig-5d6ae5bb.js";import{f as te,aR as re,_ as ne}from"./index.js";import{g as se}from"./formItemPropsConfig-de4aaa7a.js";import{C as b}from"./index-1a54703a.js";import{bw as J,bx as le,a0 as ae,M as c}from"./antd-5cc557c7.js";import{d as ie,k as a,p as f,_ as me,$ as pe,f as n,aa as i,u as s,a2 as R,af as ue,ab as de,R as ce,ae as fe,ah as ve,F as he}from"./vue-05cc5022.js";import"./vuedraggable.umd-843241ae.js";import"./LayoutItem-56fb76ec.js";import"./FormNode-055f3a6d.js";import"./FormNodeOperate-84c3636d.js";import"./useFormDesignState-9522adb2.js";import"./index-d984d683.js";import"./PreviewCode-3292b2a4.js";import"./useCopyToClipboard-bc39c4ee.js";import"./index-b08c5966.js";import"./FormRender-c883282a.js";import"./BasicForm-65c72413.js";import"./FormItem.vue_vue_type_script_lang-34714c02.js";import"./componentMap-303f7643.js";import"./useFormItem-dd0166b2.js";import"./RadioButtonGroup-7007e75e.js";import"./index-df264b01.js";import"./useWindowSizeFn-b3f3cabb.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-cc3ed5ef.js";import"./IconPicker.vue_vue_type_style_index_0_lang-982a85c1.js";import"./index-1101cf23.js";import"./helper-58c0d5a5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-dcd32d20.js";import"./uniqBy-341b68e5.js";import"./useForm-2fd0e143.js";import"./FormProps-d821d6b5.js";import"./FormItemProps-5eb5d60b.js";import"./RuleProps-47656418.js";import"./ComponentProps-584d9ce1.js";import"./FormOptions-36d0b198.js";import"./FormItemColumnProps-689c5475.js";import"./index-b33b97e7.js";const ye=ie({__name:"index",props:{title:{type:String,default:"v-form-antd表单设计器"}},setup(Pe){const{prefixCls:F}=te("form-design"),z=a(null),M=a(null),w=a(null),I=a(null),L=a(null),S=a(null),$=a({}),t=a({schemas:[],layout:"horizontal",labelLayout:"flex",labelWidth:100,labelCol:{},wrapperCol:{},currentItem:{component:"",componentProps:{}},activeKey:1}),D=o=>{o.schemas=o.schemas||[],o.schemas.forEach(e=>{e.colProps=e.colProps||{span:24},e.componentProps=e.componentProps||{},e.itemProps=e.itemProps||{}}),t.value=o},T=re(t,{deep:!0,capacity:20,parse:o=>{const e=c(o),{currentItem:r,schemas:l}=e,d=l&&l.find(m=>m.key===(r==null?void 0:r.key));return d&&(e.currentItem=d),e}}),p=o=>{t.value.currentItem=o,E(o.key?t.value.activeKey===1?2:t.value.activeKey:1)},x=o=>{o.colProps=o.colProps||{},o.colProps.span=se.span},v=(o,e)=>{},g=o=>{const e=c(o);return x(e),P(e),e},h=o=>{var r;const e=c(o);if(x(e),P(e),!((r=t.value.currentItem)!=null&&r.key)){p(e),t.value.schemas&&t.value.schemas.push(e);return}H(e,!1)},W=o=>{const e=c(o);return e.component==="Grid"&&Y([o],r=>{P(r)}),e},H=(o=t.value.currentItem,e=!0)=>{var d;const r=(d=t.value.currentItem)==null?void 0:d.key,l=m=>{m.some((y,C)=>{var K;if(y.key===r){e?m.splice(C,0,W(y)):m.splice(C+1,0,o);const _={newIndex:C+1};return A(_,m,e),!0}["Grid","Tabs"].includes(y.component)&&((K=y.columns)==null||K.forEach(_=>{l(_.children)}))})};t.value.schemas&&l(t.value.schemas)},A=({newIndex:o},e,r=!1)=>{const l=e[o];r&&P(l),p(l)},u=o=>{const e=c(t.value);o==null||o.showModal(e)},E=o=>{t.value.activeKey=o},O=()=>{t.value.schemas=[],p({component:""})},B=(o,e)=>$.value[o]=e;return f("formModel",$),f("setFormModelMethod",B),f("formConfig",t),f("historyReturn",T),f("formDesignMethods",{handleBeforeColAdd:A,handleCopy:H,handleListPush:h,handleSetSelectItem:p,handleAddAttrs:v,setFormConfig:D}),(o,e)=>(me(),pe(he,null,[n(s(ae),null,{default:i(()=>[n(s(J),{class:R(`left ${s(F)}-sider`),collapsible:"",collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"md"},{default:i(()=>[n(s(b),{title:"基础控件"},{default:i(()=>[n(k,{list:s(Z),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"自定义控件"},{default:i(()=>[n(k,{list:s(ee),onAddAttrs:v,handleListPush:g,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"布局控件"},{default:i(()=>[n(k,{list:s(oe),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1})]),_:1},8,["class"]),n(s(le),null,{default:i(()=>[n(q,{onHandleOpenJsonModal:e[0]||(e[0]=r=>u(M.value)),onHandleOpenImportJsonModal:e[1]||(e[1]=r=>u(w.value)),onHandlePreview:e[2]||(e[2]=r=>u(I.value)),onHandlePreview2:e[3]||(e[3]=r=>u(L.value)),onHandleOpenCodeModal:e[4]||(e[4]=r=>u(S.value)),onHandleClearFormItems:O}),n(G,{"current-item":t.value.currentItem,data:t.value,onHandleSetSelectItem:p},null,8,["current-item","data"])]),_:1}),n(s(J),{class:R(`right ${s(F)}-sider`),collapsible:"",reverseArrow:!0,collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"lg"},{default:i(()=>[n(Q,{ref_key:"propsPanel",ref:z,activeKey:t.value.activeKey},ue({_:2},[de(t.value.schemas,r=>({name:`${r.component}Props`,fn:i(l=>[ce(o.$slots,`${r.component}Props`,fe(ve({formItem:l,props:l.componentProps})),void 0,!0)])}))]),1032,["activeKey"])]),_:3},8,["class"])]),_:3}),n(V,{ref_key:"jsonModal",ref:M},null,512),n(X,{ref_key:"codeModal",ref:S},null,512),n(U,{ref_key:"importJsonModal",ref:w},null,512),n(j,{ref_key:"eFormPreview",ref:I,formConfig:t.value},null,8,["formConfig"]),n(N,{ref_key:"eFormPreview2",ref:L,formConfig:t.value},null,8,["formConfig"])],64))}});const yo=ne(ye,[["__scopeId","data-v-e6f85346"]]);export{yo as default};
