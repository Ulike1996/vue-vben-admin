var _=(a,n,r)=>new Promise((m,p)=>{var e=t=>{try{i(r.next(t))}catch(o){p(o)}},l=t=>{try{i(r.throw(t))}catch(o){p(o)}},i=t=>t.done?m(t.value):Promise.resolve(t.value).then(e,l);i((r=r.apply(a,n)).next())});import{B}from"./BasicForm-65c72413.js";import"./componentMap-303f7643.js";import{u as k}from"./useForm-2fd0e143.js";import"./RadioButtonGroup-7007e75e.js";import{C as h}from"./index-1a54703a.js";import{P as F}from"./index-2838de3a.js";import{B as I,_ as g}from"./index.js";import{$ as v}from"./antd-5cc557c7.js";import{d as y,k as q,a8 as d,_ as c,a9 as f,aa as u,f as $,E as b,ac as C}from"./vue-05cc5022.js";import"./FormItem.vue_vue_type_script_lang-34714c02.js";import"./helper-58c0d5a5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-dcd32d20.js";import"./uniqBy-341b68e5.js";import"./index-df264b01.js";import"./useWindowSizeFn-b3f3cabb.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-cc3ed5ef.js";import"./IconPicker.vue_vue_type_style_index_0_lang-982a85c1.js";import"./useCopyToClipboard-bc39c4ee.js";import"./index-1101cf23.js";import"./index-b33b97e7.js";import"./useContentViewHeight-8fd03a41.js";import"./onMountedOrActivated-7a6feff1.js";const S=y({components:{BasicForm:B,CollapseContainer:h,PageWrapper:F,[v.name]:v,Button:I},setup(){const[a,{appendSchemaByField:n,removeSchemaByField:r,validate:m}]=k({schemas:[{field:"field0a",component:"Input",label:"字段0",required:!0},{field:"field0b",component:"Input",label:"字段0",required:!0},{field:"0",component:"Input",label:" ",slot:"add"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function p(){return _(this,null,function*(){try{const o=yield m();console.log(o)}catch(o){console.log(o)}})}const e=q(1);function l(){n({field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},""),n({field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},""),n({field:`${e.value}`,component:"Input",label:" ",slot:"add"},""),e.value++}function i(){n([{field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},{field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},{field:`${e.value}`,component:"Input",label:" ",slot:"add"}],""),e.value++}function t(o){r([`field${o}a`,`field${o}b`,`${o}`]),e.value--}return{register:a,handleSubmit:p,add:l,del:t,batchAdd:i}}});function A(a,n,r,m,p,e){const l=d("Button"),i=d("BasicForm"),t=d("CollapseContainer"),o=d("PageWrapper");return c(),f(o,{title:"表单增删示例"},{default:u(()=>[$(t,{title:"表单增删"},{default:u(()=>[$(i,{onRegister:a.register,onSubmit:a.handleSubmit},{add:u(({field:s})=>[Number(s)===0?(c(),f(l,{key:0,onClick:a.add},{default:u(()=>[b("+")]),_:1},8,["onClick"])):C("",!0),Number(s)===0?(c(),f(l,{key:1,class:"ml-2",onClick:a.batchAdd},{default:u(()=>[b(" 批量添加表单配置 ")]),_:1},8,["onClick"])):C("",!0),s>0?(c(),f(l,{key:2,onClick:N=>a.del(s)},{default:u(()=>[b("-")]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}const ne=g(S,[["render",A]]);export{ne as default};
