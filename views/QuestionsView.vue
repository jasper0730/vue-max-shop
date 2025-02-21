<script setup lang="ts">
const faqList = [
  {
    id: 'one',
    question: 'Q1.【蠟燭】蠟燭高度不一樣？燭芯位置也會有點傾斜？',
    answer: '這是正常的，因為手工倒入導致水平面稍有差異。',
  },
  {
    id: 'two',
    question: 'Q2.【蠟燭】我們蠟燭是人工香精還是天然香精？',
    answer: '我們的蠟燭成分為純天然植物，採用大豆蠟與天然精油。',
  },
  {
    id: 'three',
    question: 'Q3.【蠟燭】為什麼第一次燒蠟燭時，燭芯的火焰會忽大忽小？',
    answer: '這是正常現象，因為蠟燭表面的蠟尚未完全融化，影響火焰穩定度。',
  },
  {
    id: 'four',
    question: 'Q4.【蠟燭】燭芯燒黑變短，該怎麼辦？',
    answer: '建議修剪燭芯至約 5mm，避免燭火過大或產生黑煙。',
  },
  {
    id: 'five',
    question: 'Q5.【蠟燭】為什麼蠟燭燃燒時，蠟面會有凹陷或不均勻？',
    answer: '這可能與環境溫度、空氣流動有關，建議確保蠟燭燃燒時不受風吹。',
  },
  {
    id: 'six',
    question: 'Q6.【擴香】擴香瓶使用多久需要更換？',
    answer: '一般來說，擴香瓶可使用 2-3 個月，具體取決於環境濕度與空間大小。',
  },
  {
    id: 'seven',
    question: 'Q7.【擴香】擴香棒需要怎麼保養？',
    answer: '建議每 1-2 週翻轉一次擴香棒，使香氣持續釋放。',
  },
  {
    id: 'eight',
    question: 'Q8.【擴香】為什麼我的擴香瓶香味變淡了？',
    answer: '這可能是因為空氣流通較快，建議放置於較封閉的空間，或更換新的擴香棒。',
  },
  {
    id: 'nine',
    question: 'Q9.【使用】為什麼我點燃蠟燭後，香味不明顯？',
    answer: '初次使用時，請讓蠟燭燃燒至少 1-2 小時，讓表層蠟均勻融化以釋放香氣。',
  },
  {
    id: 'ten',
    question: 'Q10.【安全】如何確保使用蠟燭與擴香的安全性？',
    answer: '請避免蠟燭與擴香靠近可燃物，確保放置於通風良好的空間，且不要長時間無人看管。',
  },
];
import { ref } from 'vue';

const activeId = ref<string | null>(null);


const toggleCollapse = (id: string) => {
  activeId.value = activeId.value === id ? null : id;
};
</script>

<template>
  <div class="container">
    <div class="pt-3 pb-5">
      <h3 v-intersect="{ animation: 'slide-right' }" class="text-center mb-3 fw-bold animated slide-right-start">常見問題
      </h3>
      <img v-intersect="{ animation: 'slide-left' }"
        src="https://images.pexels.com/photos/5467496/pexels-photo-5467496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="蠟燭圖片" class="img-fluid w-100 object-fit animated slide-left-start" style="height: 300px" />
      <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div v-intersect="{ animation: 'slide-up' }" class="accordion-item animated slide-up-start"
            v-for="(item) in faqList" :key="item.id">
            <h2 class="accordion-header" :id="'flush-heading-' + item.id">
              <button class="accordion-button" :class="{ collapsed: activeId !== item.id }" type="button"
                @click="toggleCollapse(item.id)">
                {{ item.question }}
              </button>
            </h2>

            <transition name="collapse">
              <div v-if="activeId === item.id" class="accordion-collapse" :id="'collapse-' + item.id">
                <div class="accordion-body">
                  {{ item.answer }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>