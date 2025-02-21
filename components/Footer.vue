<script setup lang="ts">
const year = new Date().getFullYear();
</script>
<template>
  <div class="bg-dark p-5">
    <div class="container">
      <a class="text-white h1 logo text-decoration-none" href="#">Max</a>
      <div class="
          d-flex
          align-items-center
          justify-content-between
          text-white
          
        ">
        <div>
          <p class="text-white mt-3">
            <i class="bi bi-telephone"></i> +886-4-25612345
          </p>
        </div>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-md-3 mx-2"><i class="bi bi-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="text-white mx-md-3 mx-2"><i class="bi bi-instagram"></i></a>
          </li>
          <li>
            <a href="#" class="text-white ms-md-3 ms-2"><i class="bi bi-line"></i></a>
          </li>
        </ul>
      </div>
      <div class="
          flex-column flex-md-row
          text-center
          align-items-md-end align-items-start
          text-white
        ">
        <p class="mb-0 text-secondary">
          Copyright © {{ year }} Jasper. All rights reserved.
        </p>
        <p class="mb-0 text-secondary">( 僅個人作品練習,無商業用途 ) / <router-link class="text-secondary text-decoration-none"
            to="/login">登入後台</router-link></p>
      </div>
    </div>
  </div>
</template>