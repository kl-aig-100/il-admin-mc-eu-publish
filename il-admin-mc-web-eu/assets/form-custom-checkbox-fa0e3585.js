import{u as g,j as e,aj as C,b as d,a3 as a}from"./index-52fe08f6.js";const x=s=>{const{label:r,name:l,type:c,defaultValue:i=!1,disabled:t=!1,col:u=3,classes:f="",handleChange:n=void 0}=s,{control:b,register:m}=g();return e("div",{className:`col-md-${u} ${f} d-flex align-items-end`,children:e(C,{control:b,name:l,defaultValue:!0,render:({field:h})=>s.isLoading?e(a.Group,{controlId:`form-basic-${l}`,className:"form-group",children:d("div",{className:"d-flex align-items-center",children:[e(a.Check,{checked:i,disabled:t,className:"mb-2",...m(l),...h,onChange:o=>{n&&n(o.target.value)},type:c,id:`default-${c}`,inline:!1}),e(a.Label,{className:"ms-2",children:r})]})}):d(a.Group,{controlId:`form-basic-${l}`,className:"form-group",children:[s.labelTop&&e(a.Label,{children:r}),d("div",{className:"d-flex align-items-center",children:[e(a.Check,{checked:i,disabled:t,className:"mb-2",...m(l),...h,onChange:o=>{n&&n(o.target.value)},type:c,id:`default-${c}`,inline:!1}),!s.labelTop&&e(a.Label,{className:"ms-2",children:r})]})]})})})};export{x as F};
