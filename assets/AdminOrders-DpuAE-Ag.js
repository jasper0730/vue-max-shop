import{e as V,r as _,w as B,a as A,f as n,g as t,t as a,j as h,F as C,l as E,y as I,S,m as o,i as x,I as M,C as U,B as D}from"./index-ioYnAnfa.js";import{d as P,c as L}from"./format-DIAi3n-z.js";import{L as N}from"./index-BHRmrraG.js";import{M as j,P as q}from"./modal-CfQt8UhM.js";import{_ as z}from"./DeleteModal.vue_vue_type_script_setup_true_lang-DEAFqiqi.js";const F={class:"modal-dialog modal-xl"},H={class:"modal-content border-0"},R={class:"modal-body"},T={class:"row"},G={class:"col-md-4"},J={class:"table"},K={class:"col-md-8"},Q={class:"table"},W={key:0},X={key:1,class:"text-muted"},Y={key:0,class:"text-success"},Z={key:1,class:"text-muted"},tt={class:"table"},et={class:"text-end"},lt={class:"d-flex justify-content-end"},st={class:"form-check"},at={class:"form-check-label"},nt={key:0},ot={key:1},dt=V({__name:"AdminOrderModal",props:{order:{}},emits:["update-paid"],setup(O,{expose:b,emit:y}){const u=O,k=y,m=_(null);let i=null;const s=_({...u.order});B(()=>u.order,w=>{s.value={...w}},{deep:!0,immediate:!0}),A(()=>{m.value&&(i=new j(m.value))});const v=()=>{i==null||i.show()},p=()=>{i==null||i.hide()},f=()=>{k("update-paid",{...s.value}),p()};return b({showModal:v,hideModal:p}),(w,e)=>{var $,g,d,r;return o(),n("div",{class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel",ref_key:"modalElement",ref:m},[t("div",F,[t("div",H,[e[14]||(e[14]=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"orderModalLabel"},"訂單細節"),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal"})],-1)),t("div",R,[t("div",T,[t("div",G,[e[5]||(e[5]=t("h3",null,"用戶資料",-1)),t("table",J,[t("tbody",null,[t("tr",null,[e[1]||(e[1]=t("th",null,"姓名",-1)),t("td",null,a((($=s.value.user)==null?void 0:$.name)||"無"),1)]),t("tr",null,[e[2]||(e[2]=t("th",null,"Email",-1)),t("td",null,a((g=s.value.user)==null?void 0:g.email),1)]),t("tr",null,[e[3]||(e[3]=t("th",null,"電話",-1)),t("td",null,a(((d=s.value.user)==null?void 0:d.tel)||"無"),1)]),t("tr",null,[e[4]||(e[4]=t("th",null,"地址",-1)),t("td",null,a(((r=s.value.user)==null?void 0:r.address)||"無"),1)])])])]),t("div",K,[e[11]||(e[11]=t("h3",null,"訂單細節",-1)),t("table",Q,[t("tbody",null,[t("tr",null,[e[6]||(e[6]=t("th",null,"訂單編號",-1)),t("td",null,a(s.value.id),1)]),t("tr",null,[e[7]||(e[7]=t("th",null,"下單時間",-1)),t("td",null,a(h(P)(s.value.create_at)),1)]),t("tr",null,[e[8]||(e[8]=t("th",null,"付款時間",-1)),t("td",null,[s.value.paid_date?(o(),n("span",W,a(h(P)(s.value.paid_date)),1)):(o(),n("span",X,"尚未付款"))])]),t("tr",null,[e[9]||(e[9]=t("th",null,"付款狀態",-1)),t("td",null,[s.value.is_paid?(o(),n("strong",Y,"已付款")):(o(),n("span",Z,"尚未付款"))])]),t("tr",null,[e[10]||(e[10]=t("th",null,"總金額",-1)),t("td",null,a(h(L)(s.value.total)),1)])])]),e[12]||(e[12]=t("h3",null,"選購商品",-1)),t("table",tt,[t("tbody",null,[(o(!0),n(C,null,E(s.value.products,l=>(o(),n("tr",{key:l.id},[t("th",null,a(l.product.title),1),t("td",null,a(l.qty)+" / "+a(l.product.unit),1),t("td",et,a(h(L)(l.final_total)),1)]))),128))])]),t("div",lt,[t("div",st,[I(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=l=>s.value.is_paid=l)},null,512),[[S,s.value.is_paid]]),t("label",at,[s.value.is_paid?(o(),n("span",nt,"已付款")):(o(),n("span",ot,"未付款"))])])])])])]),t("div",{class:"modal-footer"},[e[13]||(e[13]=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),t("button",{type:"button",class:"btn btn-dark",onClick:f},"修改付款狀態")])])])],512)}}}),rt={class:"pb-5"},it={class:"d-flex justify-content-center"},ut={class:"table"},ct=["textContent"],pt={class:"list-unstyled"},_t={class:"text-right"},ht={class:"form-check form-switch"},mt=["id","onUpdate:modelValue","onChange"],vt=["for"],ft={key:0},bt={key:1},yt=["onClick"],kt=["onClick"],Mt=V({__name:"AdminOrders",setup(O){const b="https://vue3-course-api.hexschool.io/v2",y="jasper07301",u=_(!1),k=_([]),m=_({}),i=_(null),s=_(null),v=_({id:"",is_paid:!1,create_at:0,user:{name:"",email:"",tel:"",address:""},products:[],total:0,paid_date:null});let p=null;const f=async(d=1)=>{try{u.value=!0;const r=`${b}/api/${y}/admin/orders?page=${d}`,l=await M.get(r);if(l.data.success)k.value=l.data.orders,m.value=l.data.pagination;else throw new Error(l.data.message||"獲取資料失敗")}catch(r){console.error("獲取資料失敗",r)}finally{u.value=!1}},w=async d=>{try{u.value=!0;const r=`${b}/api/${y}/admin/order/${d.id}`,l={is_paid:d.is_paid},c=await M.put(r,{data:l});if(c.data.success)f();else throw new Error(c.data.message||"付款更新失敗")}catch(r){console.error("付款更新失敗",r)}finally{u.value=!1}},e=d=>{v.value={...d},i.value&&(p=new j(i.value.$el),p.show())},$=d=>{v.value={...d},s.value&&s.value.showModal()},g=async()=>{try{u.value=!0;const d=`${b}/api/${y}/admin/order/${v.value.id}`,r=await M.delete(d);if(r.data.success)f();else throw new Error(r.data.message||"訂單刪除失敗")}catch(d){console.error("訂單刪除失敗",d)}finally{u.value=!1}p==null||p.hide()};return A(()=>{f()}),(d,r)=>(o(),n("div",rt,[x(h(N),{active:u.value,"z-index":1060},null,8,["active"]),t("div",it,[t("table",ut,[r[0]||(r[0]=t("thead",null,[t("tr",null,[t("th",{width:"10%"},"購買時間"),t("th",{width:"25%"},"Email"),t("th",{width:"25%"},"購買款項"),t("th",{width:"15%"},"應付金額"),t("th",{width:"15%"},"是否付款"),t("th",{width:"10%"},"編輯")])],-1)),t("tbody",null,[(o(!0),n(C,null,E(k.value,l=>(o(),n(C,{key:l.id},[k.value.length?(o(),n("tr",{key:0,class:D({"text-secondary":!l.is_paid})},[t("td",null,a(h(P)(l.create_at)),1),t("td",null,[l.user?(o(),n("span",{key:0,textContent:a(l.user.email)},null,8,ct)):U("",!0)]),t("td",null,[t("ul",pt,[(o(!0),n(C,null,E(l.products,c=>(o(),n("li",{key:c.id},a(c.product.title)+"數量："+a(c.qty)+" "+a(c.product.unit),1))),128))])]),t("td",_t,a(h(L)(Math.round(l.total))),1),t("td",null,[t("div",ht,[I(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${l.id}`,"onUpdate:modelValue":c=>l.is_paid=c,onChange:c=>w(l)},null,40,mt),[[S,l.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${l.id}`},[l.is_paid?(o(),n("span",ft,"已付款")):(o(),n("span",bt,"未付款"))],8,vt)])]),t("td",null,[t("button",{class:"btn btn-outline-dark rounded btn-sm ms-1",style:{"white-space":"nowrap"},onClick:()=>$(l)}," 檢視 ",8,yt),t("button",{class:"btn btn-outline-dark rounded btn-sm ms-1",type:"button",onClick:()=>e(l)}," 刪除 ",8,kt)])],2)):U("",!0)],64))),128))])])]),x(q,{pages:m.value,onUpdatePage:f},null,8,["pages"]),x(z,{ref_key:"deleteModalElement",ref:i,onDeleteItem:g},null,512),x(dt,{ref_key:"orderModalElement",ref:s,order:v.value,onUpdatePaid:w},null,8,["order"])]))}});export{Mt as default};
