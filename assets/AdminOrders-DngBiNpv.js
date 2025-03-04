import{d as U,r as p,m as S,o as V,i as o,b as t,t as a,u as m,F as M,x as E,y as B,P as D,h as n,e as x,B as O,A as N}from"./index-n62W8uT2.js";import{d as P,c as L}from"./format-DIAi3n-z.js";import{a as C}from"./index-DW_MHI2K.js";import{L as j}from"./index-3zDf_1eA.js";import{M as I,P as q}from"./modal-h-oxxpaG.js";import{_ as z}from"./DeleteModal.vue_vue_type_script_setup_true_lang-Bb9TtG59.js";import"./_commonjsHelpers-C932wzq6.js";import"./selector-engine-C4SBvMeJ.js";const F={class:"modal-dialog modal-xl"},H={class:"modal-content border-0"},R={class:"modal-body"},T={class:"row"},G={class:"col-md-4"},J={class:"table"},K={class:"col-md-8"},Q={class:"table"},W={key:0},X={key:1,class:"text-muted"},Y={key:0,class:"text-success"},Z={key:1,class:"text-muted"},tt={class:"table"},et={class:"text-end"},lt={class:"d-flex justify-content-end"},st={class:"form-check"},at={class:"form-check-label"},ot={key:0},nt={key:1},dt=U({__name:"AdminOrderModal",props:{order:{}},emits:["update-paid"],setup(A,{expose:f,emit:y}){const u=A,k=y,v=p(null);let i=null;const s=p({...u.order});S(()=>u.order,w=>{s.value={...w}},{deep:!0,immediate:!0}),V(()=>{v.value&&(i=new I(v.value))});const _=()=>{i==null||i.show()},h=()=>{i==null||i.hide()},b=()=>{k("update-paid",{...s.value}),h()};return f({showModal:_,hideModal:h}),(w,e)=>{var $,g,d,r;return n(),o("div",{class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref_key:"modalElement",ref:v},[t("div",F,[t("div",H,[e[14]||(e[14]=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"orderModalLabel"},"訂單細節"),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal"})],-1)),t("div",R,[t("div",T,[t("div",G,[e[5]||(e[5]=t("h3",null,"用戶資料",-1)),t("table",J,[t("tbody",null,[t("tr",null,[e[1]||(e[1]=t("th",null,"姓名",-1)),t("td",null,a((($=s.value.user)==null?void 0:$.name)||"無"),1)]),t("tr",null,[e[2]||(e[2]=t("th",null,"Email",-1)),t("td",null,a((g=s.value.user)==null?void 0:g.email),1)]),t("tr",null,[e[3]||(e[3]=t("th",null,"電話",-1)),t("td",null,a(((d=s.value.user)==null?void 0:d.tel)||"無"),1)]),t("tr",null,[e[4]||(e[4]=t("th",null,"地址",-1)),t("td",null,a(((r=s.value.user)==null?void 0:r.address)||"無"),1)])])])]),t("div",K,[e[11]||(e[11]=t("h3",null,"訂單細節",-1)),t("table",Q,[t("tbody",null,[t("tr",null,[e[6]||(e[6]=t("th",null,"訂單編號",-1)),t("td",null,a(s.value.id),1)]),t("tr",null,[e[7]||(e[7]=t("th",null,"下單時間",-1)),t("td",null,a(m(P)(s.value.create_at)),1)]),t("tr",null,[e[8]||(e[8]=t("th",null,"付款時間",-1)),t("td",null,[s.value.paid_date?(n(),o("span",W,a(m(P)(s.value.paid_date)),1)):(n(),o("span",X,"尚未付款"))])]),t("tr",null,[e[9]||(e[9]=t("th",null,"付款狀態",-1)),t("td",null,[s.value.is_paid?(n(),o("strong",Y,"已付款")):(n(),o("span",Z,"尚未付款"))])]),t("tr",null,[e[10]||(e[10]=t("th",null,"總金額",-1)),t("td",null,a(m(L)(s.value.total)),1)])])]),e[12]||(e[12]=t("h3",null,"選購商品",-1)),t("table",tt,[t("tbody",null,[(n(!0),o(M,null,E(s.value.products,l=>(n(),o("tr",{key:l.id},[t("th",null,a(l.product.title),1),t("td",null,a(l.qty)+" / "+a(l.product.unit),1),t("td",et,a(m(L)(l.final_total)),1)]))),128))])]),t("div",lt,[t("div",st,[B(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=l=>s.value.is_paid=l)},null,512),[[D,s.value.is_paid]]),t("label",at,[s.value.is_paid?(n(),o("span",ot,"已付款")):(n(),o("span",nt,"未付款"))])])])])])]),t("div",{class:"modal-footer"},[e[13]||(e[13]=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),t("button",{type:"button",class:"btn btn-dark",onClick:b},"修改付款狀態")])])])],512)}}}),rt={class:"pb-5"},it={class:"table"},ut=["textContent"],ct={class:"list-unstyled"},pt={class:"text-right"},_t={class:"form-check form-switch"},ht=["id","onUpdate:modelValue","onChange"],mt=["for"],vt={key:0},bt={key:1},ft=["onClick"],yt=["onClick"],Pt=U({__name:"AdminOrders",setup(A){const f="https://vue3-course-api.hexschool.io/v2",y="jasper07301",u=p(!1),k=p([]),v=p({}),i=p(null),s=p(null);let _=null;const h=p({id:"",is_paid:!1,create_at:0,user:{name:"",email:"",tel:"",address:""},products:[],total:0,paid_date:null}),b=async(d=1)=>{try{u.value=!0;const r=`${f}/api/${y}/admin/orders?page=${d}`,l=await C.get(r);if(l.data.success)k.value=l.data.orders,v.value=l.data.pagination;else throw new Error(l.data.message||"獲取資料失敗")}catch(r){console.error("獲取資料失敗",r)}finally{u.value=!1}},w=async d=>{try{u.value=!0;const r=`${f}/api/${y}/admin/order/${d.id}`,l={is_paid:d.is_paid},c=await C.put(r,{data:l});if(c.data.success)b();else throw new Error(c.data.message||"付款更新失敗")}catch(r){console.error("付款更新失敗",r)}finally{u.value=!1}},e=d=>{h.value={...d},i.value&&(_=new I(i.value.$el),_.show())},$=d=>{h.value={...d},s.value&&s.value.showModal()},g=async()=>{try{u.value=!0;const d=`${f}/api/${y}/admin/order/${h.value.id}`,r=await C.delete(d);if(r.data.success)b();else throw new Error(r.data.message||"訂單刪除失敗")}catch(d){console.error("訂單刪除失敗",d)}finally{u.value=!1}_==null||_.hide()};return V(()=>{b()}),(d,r)=>(n(),o("div",rt,[x(m(j),{active:u.value,"z-index":1060},null,8,["active"]),t("table",it,[r[0]||(r[0]=t("thead",null,[t("tr",null,[t("th",{width:"10%"},"購買時間"),t("th",{width:"25%"},"Email"),t("th",{width:"25%"},"購買款項"),t("th",{width:"15%"},"應付金額"),t("th",{width:"15%"},"是否付款"),t("th",{width:"10%"},"編輯")])],-1)),t("tbody",null,[(n(!0),o(M,null,E(k.value,l=>(n(),o(M,{key:l.id},[k.value.length?(n(),o("tr",{key:0,class:N({"text-secondary":!l.is_paid})},[t("td",null,a(m(P)(l.create_at)),1),t("td",null,[l.user?(n(),o("span",{key:0,textContent:a(l.user.email)},null,8,ut)):O("",!0)]),t("td",null,[t("ul",ct,[(n(!0),o(M,null,E(l.products,c=>(n(),o("li",{key:c.id},a(c.product.title)+"數量："+a(c.qty)+" "+a(c.product.unit),1))),128))])]),t("td",pt,a(m(L)(Math.round(l.total))),1),t("td",null,[t("div",_t,[B(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${l.id}`,"onUpdate:modelValue":c=>l.is_paid=c,onChange:c=>w(l)},null,40,ht),[[D,l.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${l.id}`},[l.is_paid?(n(),o("span",vt,"已付款")):(n(),o("span",bt,"未付款"))],8,mt)])]),t("td",null,[t("button",{class:"btn btn-outline-dark rounded btn-sm ms-1",style:{"white-space":"nowrap"},onClick:()=>$(l)}," 檢視 ",8,ft),t("button",{class:"btn btn-outline-dark rounded btn-sm ms-1",type:"button",onClick:()=>e(l)}," 刪除 ",8,yt)])],2)):O("",!0)],64))),128))])]),x(q,{pages:v.value,onUpdatePage:b},null,8,["pages"]),x(z,{ref_key:"deleteModalElement",ref:i,onDeleteItem:g},null,512),x(dt,{ref_key:"orderModalElement",ref:s,order:h.value,onUpdatePaid:w},null,8,["order"])]))}});export{Pt as default};
