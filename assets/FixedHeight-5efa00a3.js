import{B as c,H as d}from"./BasicTable-1a4cb64b.js";import"./componentMap-303f7643.js";import"./TableImg.vue_vue_type_style_index_0_lang-639fe91a.js";import{u as _}from"./useTable-8e032348.js";import{getCustomHeaderColumns as u}from"./tableData-b676f216.js";import{d as f}from"./table-9286518d.js";import{a as B}from"./index-1a54703a.js";import{d as H,a8 as e,_ as o,$ as s,f as a,aa as C,E as i,F as g,a9 as k}from"./vue-05cc5022.js";import{aW as F}from"./antd-5cc557c7.js";import{_ as h}from"./index.js";import"./BasicForm-65c72413.js";import"./FormItem.vue_vue_type_script_lang-34714c02.js";import"./helper-58c0d5a5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-dcd32d20.js";import"./uniqBy-341b68e5.js";import"./index-df264b01.js";import"./useWindowSizeFn-b3f3cabb.js";import"./useForm-2fd0e143.js";import"./RadioButtonGroup-7007e75e.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-7a6feff1.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-cc3ed5ef.js";import"./IconPicker.vue_vue_type_style_index_0_lang-982a85c1.js";import"./useCopyToClipboard-bc39c4ee.js";import"./index-1101cf23.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";import"./index-b33b97e7.js";const T=H({components:{BasicTable:c,FormOutlined:F,BasicHelp:B,HeaderCell:d},setup(){const[t]=_({title:"定高/头部自定义",api:f,columns:u(),canResize:!1,scroll:{y:100}});return{registerTable:t}}}),b={class:"p-4"},x={key:0};function y(t,$,O,R,v,D){const m=e("BasicHelp"),p=e("FormOutlined"),n=e("HeaderCell"),l=e("BasicTable");return o(),s("div",b,[a(l,{onRegister:t.registerTable},{headerCell:C(({column:r})=>[r.key==="name"?(o(),s("span",x,[i(" 姓名 "),a(m,{class:"ml-2",text:"headerHelpMessage方式2"})])):r.key==="address"?(o(),s(g,{key:1},[i(" 地址 "),a(p,{class:"ml-2"})],64)):(o(),k(n,{key:2,column:r},null,8,["column"]))]),_:1},8,["onRegister"])])}const ne=h(T,[["render",y]]);export{ne as default};
