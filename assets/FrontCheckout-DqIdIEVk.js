import{e as B,u as F,d as C,a as N,f as p,i as D,g as t,j as s,y as l,s as T,J as d,K as r,D as i,t as f,k as j,x as z,z as M,m as b}from"./index-DNZD8snS.js";import{L as J}from"./index-B9k0qQA8.js";import{u as K,t as O,c as P,a as m}from"./vee-validate-yup-DSYGb2M5.js";import{_ as R}from"./OrderList.vue_vue_type_script_setup_true_lang-CzE9eafg.js";import"./format-DIAi3n-z.js";const G={class:"container"},H={class:"mt-3 pb-5"},I={class:"mt-3 mb-4 animated slide-left-start"},Q={class:"row"},W={class:"col-md-8 animated slide-left-start"},X={class:"justify-content-center"},Y={class:"mb-3"},Z={class:"text-danger py-1"},ee={class:"mb-3"},te={class:"text-danger py-1"},se={class:"mb-3"},ae={class:"text-danger py-1"},le={class:"mb-3"},oe={class:"text-danger py-1"},ne={class:"mb-3"},de={class:"col-md-4 animated slide-right-start"},re={class:"border p-4 mb-4"},be=B({__name:"FrontCheckout",setup(ie){const u=F(),w=C(()=>u.cartData),A=C(()=>u.isLoading),{handleSubmit:E,defineField:n,errors:c}=K({validationSchema:O(P({email:m().required("*Email為必填").email("*請輸入有效的 Email").default(""),tel:m().required("*電話為必填").matches(/^\d+$/,"*電話號碼格式錯誤").default(""),name:m().required("*姓名為必填").default(""),address:m().required("*地址為必填").default(""),message:m().default("")}))}),[v,U]=n("email"),[_,h]=n("tel"),[g,q]=n("name"),[x,L]=n("address"),[y,$]=n("message"),S=E((o,{resetForm:e})=>{const k={user:{name:o.name||"",email:o.email||"",tel:o.tel||"",address:o.address||""},message:o.message||""};u.createOrder(k,e)});return N(()=>{u.getCarts()}),(o,e)=>{const k=z("router-link"),V=M("intersect");return b(),p("div",G,[D(s(J),{active:A.value,"z-index":1060},null,8,["active"]),t("div",H,[l((b(),p("h3",I,e[6]||(e[6]=[T(" 訂購資訊 ")]))),[[V,{animation:"slide-left"}]]),t("div",Q,[l((b(),p("div",W,[t("div",X,[t("form",{class:"g-3",onSubmit:e[5]||(e[5]=(...a)=>s(S)&&s(S)(...a)),ref:"form"},[t("div",Y,[e[7]||(e[7]=t("label",{for:"email",class:"form-label"},"Email",-1)),l(t("input",d({"onUpdate:modelValue":e[0]||(e[0]=a=>r(v)?v.value=a:null)},s(U),{type:"text",name:"email",class:"form-control",id:"email",placeholder:"請輸入Email"}),null,16),[[i,s(v)]]),t("div",Z,f(s(c).email),1)]),t("div",ee,[e[8]||(e[8]=t("label",{for:"name",class:"form-label"},"訂購人姓名",-1)),l(t("input",d({"onUpdate:modelValue":e[1]||(e[1]=a=>r(g)?g.value=a:null)},s(q),{type:"text",name:"姓名",class:"form-control",id:"name",placeholder:"請輸入姓名"}),null,16),[[i,s(g)]]),t("div",te,f(s(c).name),1)]),t("div",null,[t("div",se,[e[9]||(e[9]=t("label",{for:"tel",class:"form-label"},"訂購人電話",-1)),l(t("input",d({"onUpdate:modelValue":e[2]||(e[2]=a=>r(_)?_.value=a:null)},s(h),{class:"form-control",type:"text",name:"電話",id:"tel",placeholder:"請輸入電話"}),null,16),[[i,s(_)]]),t("div",ae,f(s(c).tel),1)]),t("div",le,[e[10]||(e[10]=t("label",{for:"address",class:"form-label"},"訂購人地址",-1)),l(t("input",d({"onUpdate:modelValue":e[3]||(e[3]=a=>r(x)?x.value=a:null)},s(L),{class:"form-control",type:"text",name:"地址",id:"address",placeholder:"請輸入地址"}),null,16),[[i,s(x)]]),t("div",oe,f(s(c).address),1)]),t("div",ne,[e[11]||(e[11]=t("label",{for:"message",class:"form-label"},"備註",-1)),l(t("textarea",d({"onUpdate:modelValue":e[4]||(e[4]=a=>r(y)?y.value=a:null)},s($),{class:"form-control",type:"text",id:"message",cols:"30",rows:"3"}),"                  ",16),[[i,s(y)]])]),e[12]||(e[12]=t("div",{class:"text-end"},[t("button",{type:"submit",class:"rounded btn btn-dark mb-3"},"訂單送出")],-1))])],544)])])),[[V,{animation:"slide-left"}]]),l((b(),p("div",de,[t("div",re,[D(R,{"cart-data":w.value},null,8,["cart-data"]),D(k,{to:"/cart"},{default:j(()=>e[13]||(e[13]=[t("button",{type:"button",class:"btn btn-dark w-100 mt-4 rounded"},"回上一頁",-1)])),_:1})])])),[[V,{animation:"slide-right"}]])])])])}}});export{be as default};
