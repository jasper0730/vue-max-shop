import{d as N}from"./format-DIAi3n-z.js";import{e as U,r,w as P,a as L,f as y,g as e,t as k,y as w,D as C,S as A,m as h,i as x,j as D,F as B,l as S,I as M}from"./index-DNZD8snS.js";import{L as T}from"./index-B9k0qQA8.js";import{M as V,P as j}from"./modal-CQlb2z62.js";import{_ as F}from"./DeleteModal.vue_vue_type_script_setup_true_lang-D3kR1wZH.js";const z={class:"modal-dialog"},H={class:"modal-content border-0"},O={class:"modal-header bg-dark text-white"},R={class:"modal-title",id:"couponModalLabel"},q={class:"modal-body"},G={class:"mb-3"},J={class:"mb-3"},K={class:"mb-3"},Q={class:"mb-3"},W={class:"form-check"},X={class:"modal-footer"},Y=U({__name:"AdminCouponModal",props:{isNew:{type:Boolean},coupon:{}},emits:["update-coupon"],setup(E,{expose:v,emit:b}){const u=E,g=b,f=r(null);let i=null;const l=r({...u.coupon}),c=r(new Date(l.value.due_date).toISOString().split("T")[0]);P(()=>u.coupon,_=>{l.value={..._}},{deep:!0,immediate:!0});const d=()=>{l.value.due_date=new Date(c.value).getTime(),g("update-coupon",l.value),m()},p=()=>{i==null||i.show()},m=()=>{i==null||i.hide()};return L(()=>{f.value&&(i=new V(f.value))}),v({showModal:p,hideModal:m}),(_,t)=>(h(),y("div",{class:"modal fade",id:"couponModal",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true",ref_key:"modalElement",ref:f},[e("div",z,[e("div",H,[e("div",O,[e("h5",R,k(_.isNew?"新增優惠券":"編輯優惠券"),1),t[5]||(t[5]=e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1))]),e("div",q,[e("div",G,[t[6]||(t[6]=e("label",{for:"title"},"標題",-1)),w(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=s=>l.value.title=s),placeholder:"請輸入標題"},null,512),[[C,l.value.title]])]),e("div",J,[t[7]||(t[7]=e("label",{for:"coupon_code"},"優惠碼",-1)),w(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=s=>l.value.code=s),placeholder:"請輸入優惠碼"},null,512),[[C,l.value.code]])]),e("div",K,[t[8]||(t[8]=e("label",{for:"due_date"},"到期日",-1)),w(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=s=>c.value=s)},null,512),[[C,c.value]])]),e("div",Q,[t[9]||(t[9]=e("label",{for:"percent"},"折扣百分比",-1)),w(e("input",{type:"number",class:"form-control",id:"percent",min:"0",max:"100","onUpdate:modelValue":t[3]||(t[3]=s=>l.value.percent=s),placeholder:"請輸入折扣百分比"},null,512),[[C,l.value.percent,void 0,{number:!0}]])]),e("div",W,[w(e("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=s=>l.value.is_enabled=s),"true-value":1,"false-value":0},null,512),[[A,l.value.is_enabled]]),t[10]||(t[10]=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1))])]),e("div",X,[t[11]||(t[11]=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 關閉 ",-1)),e("button",{type:"button",class:"btn btn-dark",onClick:d},k(_.isNew?"新增優惠券":"更新優惠券"),1)])])])],512))}}),Z={class:"text-end mt-3"},ee={class:"table mt-4"},te={key:0,class:"text-success"},oe={key:1,class:"text-muted"},le=["onClick"],ne=["onClick"],re=U({__name:"AdminCoupons",setup(E){const v="https://vue3-course-api.hexschool.io/v2",b="jasper07301",u=r(!1),g=r(!1),f=r([]),i=r({}),l=r(null),c=r(null),d=r({code:"",due_date:0,id:"string",is_enabled:0,num:0,percent:0,title:""});let p=null;const m=async(n=1)=>{try{u.value=!0;const o=`${v}/api/${b}/admin/coupons?page=${n}`,a=await M.get(o);if(a.data.success)f.value=a.data.coupons,i.value=a.data.pagination;else throw new Error(a.data.message||"獲取資料失敗")}catch(o){console.error("獲取資料失敗",o)}finally{u.value=!1}},_=async n=>{try{u.value=!0;const o=d.value.id?`${v}/api/${b}/admin/coupon/${d.value.id}`:`${v}/api/${b}/admin/coupon`,a=d.value.id?"put":"post",$=await M[a](o,{data:n});if($.data.success)m();else throw new Error($.data.message||"儲存優惠券失敗")}catch(o){console.error("儲存優惠券失敗",o)}finally{u.value=!1}},t=n=>{d.value={...n},l.value&&(p=new V(l.value.$el),p.show())},s=(n,o)=>{g.value=n,!n&&o?d.value={...o}:d.value={code:"",due_date:0,id:"",is_enabled:0,num:0,percent:0,title:""},c.value&&c.value.showModal()},I=async()=>{try{u.value=!0;const n=`${v}/api/${b}/admin/coupon/${d.value.id}`,o=await M.delete(n);if(o.data.success)m();else throw new Error(o.data.message||"優惠券刪除失敗")}catch(n){console.error("優惠券刪除失敗",n)}finally{u.value=!1}p==null||p.hide()};return L(()=>{m()}),(n,o)=>(h(),y("div",null,[x(D(T),{active:u.value,"z-index":1060},null,8,["active"]),e("div",Z,[e("button",{class:"btn btn-dark rounded",type:"button",onClick:o[0]||(o[0]=()=>s(!0))}," 建立新的優惠券 ")]),e("table",ee,[o[1]||(o[1]=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1)),e("tbody",null,[(h(!0),y(B,null,S(f.value,(a,$)=>(h(),y("tr",{key:$},[e("td",null,k(a.title),1),e("td",null,k(a.percent)+"%",1),e("td",null,k(D(N)(a.due_date)),1),e("td",null,[a.is_enabled===1?(h(),y("span",te,"啟用")):(h(),y("span",oe,"未啟用"))]),e("td",null,[e("button",{class:"btn btn-outline-dark rounded btn-sm ms-1",onClick:()=>s(!1,a)}," 編輯 ",8,le),e("button",{class:"btn btn-outline-dark rounded btn-sm ms-1",onClick:()=>t(a)}," 刪除 ",8,ne)])]))),128))])]),x(Y,{ref_key:"couponModalElement",ref:c,isNew:g.value,coupon:d.value,onUpdateCoupon:_},null,8,["isNew","coupon"]),x(F,{ref_key:"deleteModalElement",ref:l,onDeleteItem:I,title:d.value.title},null,8,["title"]),x(j,{pages:i.value,onUpdatePage:m},null,8,["pages"])]))}});export{re as default};
