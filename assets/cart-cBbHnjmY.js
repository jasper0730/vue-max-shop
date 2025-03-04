import{G as m,r as f}from"./index-n62W8uT2.js";import{S as c}from"./sweetalert2.esm.all-B0Dix5B2.js";import{a as l}from"./index-DW_MHI2K.js";const n="https://vue3-course-api.hexschool.io/v2",u="jasper07301",I=m("cart",()=>{const a=f(!1),d=f({total:0,final_total:0,carts:[]}),p=f(!1),i=async()=>{try{const e=`${n}/api/${u}/cart`;a.value=!0;const t=await l.get(e);if(t.data.success)d.value=t.data.data;else throw new Error(t.data.message||"購物車資料獲取失敗")}catch(e){console.error("購物車資料獲取失敗",e)}finally{a.value=!1}};return{cartData:d,getCarts:i,isLoading:a,addToCart:async(e,t=1)=>{try{a.value=!0;const r=`${n}/api/${u}/cart`,s={data:{product_id:e,qty:t}},o=await l.post(r,s);if(o.data.success)c.fire({title:o.data.data.product.title,text:"加入購物車",icon:"success",timer:3e3}),i();else throw new Error(o.data.message||"加入購物車失敗")}catch(r){c.fire({title:"失敗",text:"加入購物車",icon:"error",timer:3e3}),console.error("加入購物車失敗",r)}finally{a.value=!1}},removeItem:async e=>{try{a.value=!0;const t=`${n}/api/${u}/cart/${e.id}`,r=await l.delete(t);if(r.data.success)c.fire({title:e.product.title||"成功",text:"移除",icon:"success",timer:3e3}),i();else throw new Error(r.data.message||"移除失敗")}catch(t){c.fire({title:"失敗",text:"移除",icon:"error",timer:3e3}),console.error("移除失敗",t)}finally{a.value=!1}},updateItem:async(e,t)=>{let r=0;if(e.qty>0){switch(a.value=!0,t){case"increase":r=e.qty+1;break;case"decrease":r=e.qty-1;break}try{a.value=!0;const s=`${n}/api/${u}/cart/${e.id}`,o={data:{product_id:e.id,qty:r}},y=await l.put(s,o);if(y.data.success)i();else throw new Error(y.data.message||"數量更新失敗")}catch(s){console.error("數量更新失敗",s)}finally{a.value=!1}}},createOrder:async(e,t)=>{try{a.value=!0;const r=`${n}/api/${u}/order`,s={data:e},o=await l.post(r,s);if(o.data.success)c.fire({title:"成功",text:"訂單已成立，感謝您的購買",icon:"success",timer:3e3}),t(),i(),d.value={total:0,final_total:0,carts:[]};else throw new Error(o.data.message||"訂單成立失敗")}catch(r){console.error(r),c.fire({title:"失敗",text:"訂單未成立",icon:"error",timer:3e3})}finally{a.value=!1}},addCoupon:async e=>{try{a.value=!0;const t=`${n}/api/${u}/coupon`,r={data:{code:e}},s=await l.post(t,r);if(s.data.success)p.value=!0,c.fire({title:"成功",text:"套用優惠券",icon:"success",timer:3e3}),i();else throw new Error(s.data.message||"優惠券無法使用")}catch(t){console.error(t),c.fire({title:"失敗",text:"套用優惠券",icon:"error",timer:3e3})}finally{a.value=!1}},useCoupon:p}});export{I as u};
