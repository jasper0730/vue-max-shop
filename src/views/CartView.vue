<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { currency } from '../utils/format.ts';
import Loading from 'vue-loading-overlay';
import { useCartStore } from '../stores/cart.ts';

const store = useCartStore();
const cartData = computed(() => store.cartData);
const isLoading = computed(() => store.isLoading);
const couponCode = ref('helloworld520');
onMounted(() => {
  store.getCarts();
});
watch(() => store.cartData, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
</script>
<template>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="pt-3 pb-5">
      <h3 v-intersect="{ animation: 'slide-left' }" class="mt-3 mb-4 fw-bold animated slide-left-start">購物車</h3>
      <div class="row">
        <div v-intersect="{ animation: 'slide-left' }" class="col-md-8 animated slide-left-start">
          <table class="table">
            <thead>
              <tr>
                <th width="40%" class="border-0 w-100">品項</th>
                <th width="20%" class="border-0 w-100">數量</th>
                <th width="20%" class="border-0 w-100">金額</th>
                <th width="20%" class="border-0 w-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom border-top" v-for="item in cartData.carts" :key="item.id">
                <td class="border-0 px-0 py-4">
                  <div class="d-flex align-items-center">
                    <div>
                      <img :src="item.product.imageUrl" alt="產品圖片" style="width: 72px; height: 72px"
                        class="object-fit" />
                    </div>
                    <div>
                      <p class="my-0 ms-2">
                        {{ item.product.title }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="d-flex flex-nowrap align-items-center">
                    <button type="button" class="btn btn-outline-dark border-0 btn-sm rounded me-1"
                      @click="store.updateItem(item, 'decrease')">
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    {{ item.qty }}
                    <button type="button" class="btn btn-outline-dark border-0 btn-sm rounded ms-1"
                      @click="store.updateItem(item, 'increase')">
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">
                    NT$ {{ currency(item.total) }}
                  </p>
                </td>
                <td class="border-0 align-middle">
                  <button type="button" class="btn btn-outline-dark border-0 py-2 rounded"
                    @click.prevent="store.removeItem(item)">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="my-5 text-center fs-5" v-if="!cartData || !cartData.carts?.length">
            目前沒有商品，請加入購物車，謝謝您
          </p>
          <div class="input-group w-100 mb-3">
            <input default="1" type="text" class="form-control rounded shadow-none bg-light" placeholder="Coupon Code"
              aria-label="Recipient's username" aria-describedby="button-addon2" v-model="couponCode" :disabled="cartData.final_total !== cartData.total ||
                !cartData.carts
                " />
            <div class="input-group-append">
              <button class="btn btn-dark rounded" type="button" id="button-addon2"
                @click.prevent="() => store.addCoupon(couponCode)" :disabled="store.useCoupon ||
                  !couponCode ||
                  cartData.final_total !== cartData.total ||
                  !cartData.carts?.length
                  ">
                <span v-if="store.useCoupon || cartData.final_total !== cartData.total">已套用優惠券</span>
                <span v-else>套用優惠券</span>
              </button>
            </div>
          </div>
        </div>
        <div v-intersect="{ animation: 'slide-right' }" class="col-md-4 animated slide-right-start">
          <div class=" border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂購明細</h4>
            <div class="pt-4">
              <div class="pb-4 border-bottom">
                <div v-for="item in cartData.carts" :key="item.id">
                  <div class="d-flex justify-content-between text-muted">
                <p class="w-50">{{item.product.title}} x {{  item.qty}}</p>
                <p>NT$ {{ currency(item.total) }}</p>
              </div>
                </div>
              </div>
              <div class="pt-4 d-flex justify-content-between text-muted">
                <p>費用</p>
                <p>NT$ {{ currency(cartData.total) }}</p>
              </div>
              <div class="d-flex justify-content-between text-muted">
                <p>折扣</p>
                <p>
                  -{{
                    currency(cartData.total - cartData.final_total)
                  }}
                </p>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總金額</p>
              <p class="mb-0 h4 fw-bold">
                NT$ {{ currency(Math.round(cartData.final_total)) }}
              </p>
            </div>
            <router-link to="/check"><button type="button" class="btn btn-dark w-100 mt-4 rounded"
                :disabled="!cartData.carts || !cartData.carts?.length">
                結帳
              </button>
            </router-link>
            <router-link to="/products"><button type="button" class="btn btn-dark w-100 mt-2 rounded">
                繼續購物
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
