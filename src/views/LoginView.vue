<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useForm } from 'vee-validate';
import { string, object } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';

const API_URL = import.meta.env.VITE_API;
const router = useRouter();
const isLoading = ref(false);

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: toTypedSchema(
    object({
      email: string().required('*Email為必填').email('*Email格式錯誤').default(''),
      password: string().required('*密碼為必填').default(''),
    }),
  ),
});
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');


const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    isLoading.value = true;
    const url = `${API_URL}/admin/signin`;
    const user = {
      username: values.email,
      password: values.password,
    };
    const res = await axios.post(url, user);
    const { token, expired } = res.data;
    if (res.data.success) {
      Cookies.set('myToken', token, { expires: new Date(expired) });
      router.push('/admin/products');
    } else {
      throw new Error(res.data.message || "登入失敗");
    }
  } catch (error) {
    resetForm();
    Swal.fire({
      title: "失敗",
      text: "登入",
      icon: "error",
      timer: 3000,
    });
    console.error('登入失敗', error);
  } finally {
    isLoading.value = false;
  }

});
</script>
<template>
  <div class="bg-light" style="height: 100vh">
    <div class="container">
      <Loading :active="isLoading"></Loading>
      <!-- 點擊按鈕觸發submit -->
      <form class="row justify-content-center pt-7" @submit.prevent="onSubmit">
        <div class="col-10 col-sm-6 col-md-4">
          <h1 class="h3 text-center">請先登入</h1>
          <div class="mb-3">
            <label for="email" class="col-form-label">Email Address</label>
            <input type="text" class="form-control bg-light" id="email" placeholder="Email Address" v-model="email"
              v-bind="emailAttrs" />
            <div class="text-danger py-1">{{ errors.email }}</div>
          </div>
          <div class="mb-4">
            <label for="password" class="col-form-label">Password</label>
            <input type="password" class="form-control bg-light" id="password" placeholder="Password" v-model="password"
              v-bind="passwordAttrs" />
            <div class="text-danger py-1">{{ errors.password }}</div>
          </div>
          <div class="mb-3 text-end">
            <button type="submit" class="btn btn-dark btn-lg rounded w-100 mb-2">
              登入
            </button>
            <router-link to="/">
              <button type="button" class="btn btn-outline-dark btn-lg rounded w-100">
                回首頁
              </button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
