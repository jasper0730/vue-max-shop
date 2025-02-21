<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { currency } from '../utils/format.ts';
import Loading from 'vue-loading-overlay';
import { useCartStore } from '../stores/cart.ts';
import { useForm } from 'vee-validate';
import { string, object } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

const store = useCartStore();
const cartData = computed(() => store.cartData);
const isLoading = computed(() => store.isLoading);

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: toTypedSchema(
    object({
      email: string().required('請輸入 Email').email('請輸入有效的 Email').default(''),
      tel: string().required('請輸入電話').matches(/^\d+$/, '請輸入有效的電話號碼').default(''),
      name: string().required('請輸入姓名').default(''),
      address: string().required('請輸入地址').default(''),
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
      <h3 v-intersect="{ animation: 'slide-left' }" class="mt-3 mb-4 animated slide-left-start">訂購資訊</h3>
      <div class="row">
        <div v-intersect="{ animation: 'slide-left' }" class="col-md-8 animated slide-left-start">
          <div class="justify-content-center">
            <Form class="g-3" @submit="onSubmit" ref="form">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" v-bind="emailAttrs" type="text" name="email" class="form-control" id="email"
                  placeholder="請輸入Email" />
                <div class="text-danger py-1">{{ errors.email }}</div>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">訂購人姓名</label>
                <input v-model="name" v-bind="nameAttrs" type="text" name="姓名" class="form-control" id="name"
                  placeholder="請輸入姓名" />
                <div class="text-danger py-1">{{ errors.name }}</div>
              </div>
              <div>
                <div class="mb-3">
                  <label for="tel" class="form-label">訂購人電話</label>
                  <input v-model="tel" v-bind="telAttrs" class="form-control" type="text" name="電話" id="tel"
                    placeholder="請輸入電話" />
                  <div class="text-danger py-1">{{ errors.tel }}</div>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">訂購人地址</label>
                  <input v-model="address" v-bind="addressAttrs" class="form-control" type="text" name="地址" id="address"
                    placeholder="請輸入地址" />
                  <div class="text-danger py-1">{{ errors.address }}</div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">備註</label>
                  <textarea v-model="message" v-bind="messageAttrs" class="form-control" type="text" id="message"
                    cols="30" rows="3">
                  </textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="rounded btn btn-dark mb-3">
                    訂單送出
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div v-intersect="{ animation: 'slide-right' }" class="col-md-4 animated slide-right-start">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂購明細</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    費用
                  </th>
                  <td class="text-end border-0 px-0 pt-4">
                    NT {{ currency(cartData.total) }}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">
                    折扣
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">
                    {{
                      currency(cartData.final_total - cartData.total)
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總金額</p>
              <p class="mb-0 h4 fw-bold">
                NT$ {{ currency(Math.round(cartData.final_total)) }}
              </p>
            </div>
            <router-link to="/cart"><button type="button" class="btn btn-dark w-100 mt-4 rounded">
                回上一頁
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>