<script setup lang="ts">
const props = defineProps({
  pages: Object,
});
const emit = defineEmits(['update-page']);
const updatePage = (page: number) => {
  if (page > 0 && page <= props.pages.total_pages) {
    emit('update-page', page);
  }
};
</script>
<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-sm justify-content-center mt-3">
      <!-- 如果沒有上一頁則禁用=:class="{ disabled: !pages.has_pre }" -->
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <!-- 點擊回到上一頁=@click="updatePages(pages.current_page - 1)-->
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">
          <span >&laquo;</span>
        </a>
      </li>
      <!-- 顯示當前頁數=:class="{active: pages.current_page === page}" -->
      <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{ active: pages.current_page === page }">
        <span class="page-link" v-if="pages.current_page === page">{{
          page
        }}</span>
        <a class="page-link" href="#" v-else @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <!-- 如果沒有下一頁則禁用=:class="{ disabled: !pages.has_next }" -->
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <!-- 點擊進入下一頁=@click.prevent="updatePage(pages.current_page + 1) -->
        <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.page-item.active .page-link {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.page-item.disabled {
  opacity: .3;
}

.page-link:focus,
.page-link:hover {
  color: #212529;
  background-color: #e9ecef;
}

.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: none;
}

.pagination-sm .page-link {
  padding: .25rem .5rem;
  font-size: .875rem;
}

.page-link {
  position: relative;
  display: block;
  color: #212529;
  text-decoration: none;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  transition: color .15sease-in-out, background-color .15sease-in-out, border-color .15sease-in-out, box-shadow .15sease-in-out;
}
</style>