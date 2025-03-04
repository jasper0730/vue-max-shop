<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
});
defineEmits(['delete-item'])
</script>
<template>
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ title }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary rounded" data-bs-dismiss="modal">
            取消
          </button>
          <!-- 使用外層的函式=@click="$emit('delete-item')" -->
          <!-- 點擊確認刪除後,透過emit使用外層函式deleteItem -->
          <button type="button" class="btn btn-danger rounded" @click="$emit('delete-item')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
