var d=(e,u,r)=>new Promise((c,l)=>{var m=t=>{try{o(r.next(t))}catch(p){l(p)}},a=t=>{try{o(r.throw(t))}catch(p){l(p)}},o=t=>t.done?c(t.value):Promise.resolve(t.value).then(m,a);o((r=r.apply(e,u)).next())});import{B as v}from"./BasicForm-65c72413.js";import"./componentMap-303f7643.js";import{u as _}from"./useForm-2fd0e143.js";import"./RadioButtonGroup-7007e75e.js";import A from"./PersonTable-b6d0d95f.js";import{P as h}from"./index-2838de3a.js";import{a9 as b}from"./antd-5cc557c7.js";import{d as B,k as E,a8 as i,_ as k,a9 as q,aa as s,f as n,E as C}from"./vue-05cc5022.js";import{_ as F}from"./index.js";import"./FormItem.vue_vue_type_script_lang-34714c02.js";import"./index-1a54703a.js";import"./index-b33b97e7.js";import"./helper-58c0d5a5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-dcd32d20.js";import"./uniqBy-341b68e5.js";import"./index-df264b01.js";import"./useWindowSizeFn-b3f3cabb.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-cc3ed5ef.js";import"./IconPicker.vue_vue_type_style_index_0_lang-982a85c1.js";import"./useCopyToClipboard-bc39c4ee.js";import"./index-1101cf23.js";import"./BasicTable-1a4cb64b.js";import"./TableImg.vue_vue_type_style_index_0_lang-639fe91a.js";import"./sortable.esm-4ae27e0b.js";import"./onMountedOrActivated-7a6feff1.js";import"./useTable-8e032348.js";import"./useContentViewHeight-8fd03a41.js";const f=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],P=[{label:"私密",value:"1"},{label:"公开",value:"2"}],y=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:P},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:P},required:!0,colProps:{offset:2}}],S=B({name:"FormHightPage",components:{BasicForm:v,PersonTable:A,PageWrapper:h,[b.name]:b},setup(){const e=E(null),[u,{validate:r}]=_({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1}),[c,{validate:l}]=_({layout:"vertical",baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});function m(){return d(this,null,function*(){try{e.value&&console.log("table data:",e.value.getDataSource());const[a,o]=yield Promise.all([r(),l()]);console.log("form data:",a,o)}catch(a){}})}return{register:u,registerTask:c,submitAll:m,tableRef:e}}});function R(e,u,r,c,l,m){const a=i("BasicForm"),o=i("a-card"),t=i("PersonTable"),p=i("a-button"),g=i("PageWrapper");return k(),q(g,{class:"high-form",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:s(()=>[n(p,{type:"primary",onClick:e.submitAll},{default:s(()=>[C(" 提交 ")]),_:1},8,["onClick"])]),default:s(()=>[n(o,{title:"仓库管理",bordered:!1},{default:s(()=>[n(a,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(o,{title:"任务管理",bordered:!1,class:"!mt-5"},{default:s(()=>[n(a,{onRegister:e.registerTask},null,8,["onRegister"])]),_:1}),n(o,{title:"成员管理",bordered:!1,class:"!mt-5"},{default:s(()=>[n(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}const ue=F(S,[["render",R],["__scopeId","data-v-17dbda48"]]);export{ue as default};
