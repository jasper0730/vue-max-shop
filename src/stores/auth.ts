import axios from 'axios';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API;

export const useAuthStore = defineStore('auth', () => {
  const isLoading = ref(false);
  const router = useRouter();
  const status = ref(false);

  const logOut = async () => {
    try {
      const url = `${API_URL}/logout`;
      const res = await axios.post(url);
      Cookies.remove('myToken');

      if (res.data.success) {
        Swal.fire({
          title: "",
          text: "已登出",
          icon: "success",
          timer: 3000,
        });
        status.value = false;
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const logIn = async (values: { email: string, password: string; }, resetForm: () => void) => {
    try {
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
    }
  };

  const checkAuth = async () => {
    try {
      isLoading.value = true;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      const url = `${API_URL}/api/user/check`;
      if (!token) {
        throw new Error('token is undefined');
      }
      axios.defaults.headers.common.Authorization = `${token}`;
      const res = await axios.post(url);

      if (res.data.success) {
        status.value = true;
      } else {
        throw new Error("faild auth");
      }
    } catch (error) {
      if (error) {
        router.push('/');
      }
    } finally {
      isLoading.value = false;
    }
  };
  return {
    logOut,
    logIn,
    checkAuth,
    isLoading,
    status
  };
});
