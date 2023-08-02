import{a as f,a5 as p,u as x,r as m,j as s,L as C,b as w,F as v,B as S,k as P}from"./index-e4dd56a7.js";import{D as T,M as I,g as N,T as F}from"./table-wrapper-0b4bcc3b.js";import{C as k,Q as W}from"./download-2920f429.js";const q=async t=>{let a;return t.id?a=await f.put(`parameter/${t.id}`,t):a=await f.post("parameter",t),a.data},b=p.object({id:p.number().optional(),code:p.string().min(1,"The code is required").max(50,"Code must not exceed 50 characters.").regex(/^[a-zA-Z0-9_]+$/,"Invalid Code"),description:p.string().min(1,"The description is required").max(250,"Description must not exceed 250 characters."),value:p.string().min(1,"The value is required"),category:p.string().min(1,"The category is required").max(50,"Category must not exceed 50 characters.")}).refine(t=>{if(t.value.startsWith("[")||t.value.startsWith("{"))try{JSON.parse(t.value)}catch{return!1}return!0},{path:["value"],message:"The value is not a valid JSON."}),D=async t=>{const a=await f.get(`parameter/${t}`),{data:{content:o}}=a;return b.parse(o)},J=({selectedItemId:t,mode:a})=>{const{reset:o,setValue:r,getValues:u}=x(),[n,l]=m.useState(!1),c=a==="edit",[i,d]=m.useState(""),y=async()=>{try{if(l(!0),o(),c){const e=await D(t);o(e),d(e.value)}else r("code",""),r("id",0),r("description",""),r("value",""),r("category","")}catch(e){console.error(e)}finally{l(!1)}};m.useEffect(()=>{y()},[t]);const h=()=>{const e=u("value"),g=JSON.stringify(JSON.parse(e),null,2);d(g),r("value",g)};return n?s(C,{minHeight:"10vh"}):w("div",{className:"row",children:[s(v,{label:"Code",name:"code",type:"text",disabled:c,col:6}),s(v,{label:"Category",name:"category",type:"text",col:6}),s(v,{label:"Description",name:"description",type:"text",col:12}),s(v,{label:"Value",name:"value",type:"text",multiline:!0,col:12,rows:i.split(`
`).length>1?i.split(`
`).length:1,handleChange:()=>d(u("value"))}),(i.startsWith("{")||i.startsWith("["))&&s("div",{children:w(S,{variant:"primary",className:"btn-sm mt-1",onClick:()=>h(),children:[" ",s("i",{className:"bi bi-text-left",children:" "})," Format Json"]})})]})},B=async t=>(await f.delete(`parameter/${t}`)).data,O=()=>{const[t,a]=m.useState(0),[o,r]=m.useState(!1),[u,n]=m.useState("new"),[l,c]=m.useState(!1),i=e=>{if(l){c(!1);return}a(e),r(!0),n("edit")},d=(e,g)=>{i(e==null?void 0:e.id)},y=e=>{e==null||e.stopPropagation(),c(!l)};return{selectedItemId:t,setSelectedItemId:a,show:o,setShow:r,columns:[{id:1,data:"category",label:"Category",align:"left",width:"15%"},{id:2,data:"code",label:"Code",align:"left",width:"15%"},{id:3,data:"description",label:"Description",align:"left",width:"30%"},{id:4,data:"value",label:"Value",align:"left",width:"25%"},{id:5,data:"actions",width:"15%",render:e=>s(P,{children:s(T,{bodyText:`Do you want to remove the parameter ${e.code} - ${e.description}?`,cancelText:"No",confirmText:"Yes",data:e.id,onDelete:B,queryKey:"parameters",title:"Delete Parameter",handleOnClick:y})})}],mode:u,setMode:n,onRowClick:d}},M=()=>{const{show:t,setShow:a,selectedItemId:o,setSelectedItemId:r,columns:u,mode:n,setMode:l,onRowClick:c}=O(),i="parameters",d=()=>{a(!0),l("new")};return w("div",{className:"card-container",children:[s(k,{show:!0,children:s(I,{onSubmit:async h=>{const e=await q(h);return e.statusCode===200&&(r(e.content),l("edit")),e},schema:b,modalSize:"lg",title:n==="edit"?"Edit Parameter":"New Parameter",show:t,setShow:a,mode:n,queryKey:i,icon:"bi bi-wrench",submitCloseTextButton:n==="view"?void 0:"Save & Close",submitTextButton:n==="view"?void 0:"Save",children:s(J,{selectedItemId:o,mode:n})})}),s(W,{queryFn:()=>N("Parameter/GetParametersWithPagination"),queryKey:i,children:(h,e,g)=>s(F,{title:"Parameter",columns:u,data:h,isLoading:g,refetch:e,icon:"bi bi-wrench",actions:{new:d},row:{onRowClick:c}})})]})};export{M as default};
