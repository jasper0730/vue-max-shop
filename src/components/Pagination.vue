<script setup lang="ts">
const props = defineProps({
  pages: Object,
});
const emit = defineEmits(['update-page']);
const updatePage = (page: number) => {
  if (props.pages && page > 0 && page <= props.pages.total_pages) {
    emit('update-page', page);
  }
};
</script>
<template>
  <nav>
    <ul class="pagination pagination-sm justify-content-center mt-3">
      <li class="page-item" :class="{ disabled: !pages?.has_pre }">
        <a class="page-link" href="#" @click.prevent="updatePage(pages?.current_page - 1)">
          <span>&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages?.total_pages"
        :key="page"
        :class="{ active: pages?.current_page === page }"
      >
        <span class="page-link" v-if="pages?.current_page === page">{{ page }}</span>
        <a class="page-link" href="#" v-else @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages?.has_next }">
        <a class="page-link" href="#" @click.prevent="updatePage(pages?.current_page + 1)">
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
  opacity: 0.3;
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
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.page-link {
  position: relative;
  display: block;
  color: #212529;
  text-decoration: none;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  transition:
    color 0.15sease-in-out,
    background-color 0.15sease-in-out,
    border-color 0.15sease-in-out,
    box-shadow 0.15sease-in-out;
}
</style>
