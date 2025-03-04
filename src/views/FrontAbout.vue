<template>
  <div class="container text-center pb-5">
    <h2 v-intersect="{ animation: 'slide-up' }"
      class="py-3 fw-bold d-flex justify-content-center align-items-center animated slide-up-start">關於<div class="logo">
        Max</div>
    </h2>
    <div v-intersect="{ animation: 'slide-up' }" class="text-muted animated slide-up-start">
      <p class="lh-lg ">
        <span class="fst-italic fw-bold">" 我有故事，你有蠟燭嗎? "</span>
        <br />
        是的，我們賣的不只是一個有香味的蠟燭，我們希望透過各種不同的香味，
        <br />
        讓您感受到每個蠟燭想表達的含意，將感官結合情境帶您進入夢幻的場景之中。
      </p>
    </div>
    <img v-intersect="{ animation: 'slide-up' }" class="img-fluid w-100 object-fit animated slide-up-start"
      src="https://images.pexels.com/photos/5761124/pexels-photo-5761124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="製作蠟燭圖片" style="height: 300px; object-position: bottom" />
    <div v-intersect="{ animation: 'slide-up' }" class="mt-3 mb-7 animated slide-up-start">
      <div class="text-muted">
        <p class="lh-lg">
          香氛令人上癮，
          <br />
          一旦接觸過香氛的美好就容易養成習慣，喜歡待在各種舒服香氣的空間裡，沉浸在其中無法割捨。
          <br />
          在繁忙生活中，適度休息、放縱享受是很重要的，
          <br />
          點上喜歡的香氛蠟燭，再配一杯葡萄酒，就是一種享受。
        </p>
      </div>
      <div class="mt-3 text-muted">
        <p class="lh-lg">
          喜歡香氛蠟燭往往是品味細緻、喜歡享受生活的人。
          <br />
          味道具有影響力，它代表個人品味、空間風格，讓重要時刻顯得更與眾不同。
          <br />
          對香調著迷的人，常常也是對生活充滿期待的。
          <br />
          網羅世界美的品牌，有香氛、蠟燭及葡萄酒，相信這些精緻的商品可以讓生活更享受、有質感，也更溫暖。
        </p>
      </div>
      <div class="mt-3 text-muted">
        <p class="lh-lg">
          我們的想法簡單又單純，即是以最好的天然成分搭配簡約的設計風格，創作出有美麗香味的產品。
          <br />
          我們相信芳療可以帶給人身心靈處在快樂、健康、自信、怡然自得的美好狀態，
          <br />
          而我們的蠟燭，除了有美麗香氣以外，也證實對身心靈有良好益處；
          <br />
          所有香氣為香水及精油精心依比例調配，剛好的濃度除可使房間充滿香氣以外，也有放鬆、平靜舒緩，或幫自己充電的效果。
          <br />
          希望可以透過簡單的芳療蠟燭，讓自己的房間即成為最好的充電能量空間，在吸入香氣時即被療育。
        </p>
      </div>
    </div>
  </div>
</template>