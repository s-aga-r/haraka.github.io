import m from"./ContentSlot.251d39fb.js";import{k as d,r as l,o as _,e as f,f as a,h as o,t as c,u as r,a1 as v,a2 as h,v as g,b as y}from"./entry.75cac790.js";/* empty css                                                                                 */const C={class:"summary"},V={class:"content"},k=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),i=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const n=m,p=g;return _(),f("div",{class:c(["callout",[s.type]])},[a("span",{class:"preview",onClick:i},[a("span",C,[o(n,{use:t.$slots.summary},null,8,["use"])]),o(p,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(a("div",V,[o(n,{use:t.$slots.content},null,8,["use"])],512),[[h,r(e)]])],2)}}}),x=y(k,[["__scopeId","data-v-a5eb5219"]]);export{x as default};