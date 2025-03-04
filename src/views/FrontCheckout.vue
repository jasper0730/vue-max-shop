<script setup lang="ts">
import { onMounted, computed } from 'vue';
import Loading from 'vue-loading-overlay';
import { useCartStore } from '@/stores/cart.ts';
import { useForm } from 'vee-validate';
import { string, object } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import OrderList from '@/components/OrderList.vue';

const store = useCartStore();
const cartData = computed(() => store.cartData);
const isLoading = computed(() => store.isLoading);

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: toTypedSchema(
    object({
      email: string().required('*Email為必填').email('*請輸入有效的 Email').default(''),
      tel: string().required('*電話為必填').matches(/^\d+$/, '*電話號碼格式錯誤').default(''),
      name: string().required('*姓名為必填').default(''),
      address: string().required('*地址為必填').default(''),
      message: string().default(''),
    }),
  ),
});

const [email, emailAttrs] = defineField('email');
const [tel, telAttrs] = defineField('tel');
const [name, nameAttrs] = defineField('name');
const [address, addressAttrs] = defineField('address');
const [message, messageAttrs] = defineField('message');
const onSubmit = handleSubmit((values, { resetForm }) => {
  const formData = {
    user: {
      name: values.name || '',
      email: values.email || '',
      tel: values.tel || '',
      address: values.address || '',
    },
    message: values.message || '',
  };
  store.createOrder(formData, resetForm);
});
onMounted(() => {
  store.getCarts();
});
</script>
<template>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="mt-3 pb-5">
      <h3 v-intersect="{ animation: 'slide-left' }" class="mt-3 mb-4 animated slide-left-start">
        訂購資訊
      </h3>
      <div class="row">
        <div v-intersect="{ animation: 'slide-left' }" class="col-md-8 animated slide-left-start">
          <div class="justify-content-center">
            <form class="g-3" @submit="onSubmit" ref="form">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  v-model="email"
                  v-bind="emailAttrs"
                  type="text"
                  name="email"
                  class="form-control"
                  id="email"
                  placeholder="請輸入Email"
                />
                <div class="text-danger py-1">{{ errors.email }}</div>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">訂購人姓名</label>
                <input
                  v-model="name"
                  v-bind="nameAttrs"
                  type="text"
                  name="姓名"
                  class="form-control"
                  id="name"
                  placeholder="請輸入姓名"
                />
                <div class="text-danger py-1">{{ errors.name }}</div>
              </div>
              <div>
                <div class="mb-3">
                  <label for="tel" class="form-label">訂購人電話</label>
                  <input
                    v-model="tel"
                    v-bind="telAttrs"
                    class="form-control"
                    type="text"
                    name="電話"
                    id="tel"
                    placeholder="請輸入電話"
                  />
                  <div class="text-danger py-1">{{ errors.tel }}</div>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">訂購人地址</label>
                  <input
                    v-model="address"
                    v-bind="addressAttrs"
                    class="form-control"
                    type="text"
                    name="地址"
                    id="address"
                    placeholder="請輸入地址"
                  />
                  <div class="text-danger py-1">{{ errors.address }}</div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">備註</label>
                  <textarea
                    v-model="message"
                    v-bind="messageAttrs"
                    class="form-control"
                    type="text"
                    id="message"
                    cols="30"
                    rows="3"
                  >
                  </textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="rounded btn btn-dark mb-3">訂單送出</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-intersect="{ animation: 'slide-right' }" class="col-md-4 animated slide-right-start">
          <div class="border p-4 mb-4">
            <OrderList :cart-data="cartData" />
            <router-link to="/cart"
              ><button type="button" class="btn btn-dark w-100 mt-4 rounded">回上一頁</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
