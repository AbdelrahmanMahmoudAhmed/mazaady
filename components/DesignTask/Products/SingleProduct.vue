<template>
  <div class="relative flex flex-col gap-[8px] items-start mb-[34px] xs:flex-row md:gap-[16px]">
    <!-- xs:w-[87px] xs:h-[72.204px] md:w-[145px] md:h-[127px] flex-1  -->
    <div class="relative">
      <div
      @click="()=>changeLikeState(product?.id)"
        class="absolute cursor-pointer flex justify-center items-center w-[24px] h-[24px] rounded-full bg-white left-[6px] top-[6px] lg:hidden"
      >
        <img v-if="product?.isLiked" class="w-[14.4px] h-[14.4px]" src="../../../assets/imgs/pics/heart.svg" alt="">
        <img
        v-else
          class="w-[14.4px] h-[14.4px]"
          src="../../../assets/imgs/pics/white-heart.svg"
          alt=""
        />
      </div>
      <img :src="`/products/${product?.img}.png`" alt="" />
      <div
      v-if="product?.state == 'live'"
        class="absolute right-0 bottom-0 w-[66px] h-[20px] bg-[#D20653] rounded-br-[15px] rounded-tl-[15px] flex justify-center items-center font-[400] text-white text-[8px] md:text-[12px] md:w-[100px] md:h-[37px] md:rounded-br-[33.804px] md:rounded-tl-[33.804px] lg:w-[114px] lg:text-[12px]"
      >
        live Auction
      </div>
      <div  v-if="product?.state == 'hot'" class=" absolute right-0 bottom-0 w-[66px] h-[20px] bg-[#FF951D] rounded-br-[15px] rounded-tl-[15px] flex justify-center items-center font-[400] text-white text-[8px]  md:text-[12px] md:w-[100px] md:h-[37px] md:rounded-br-[33.804px] md:rounded-tl-[33.804px] lg:w-[114px] lg:text-[12px] "> Hot Sale</div>
    </div>

    <div class=" lg:mr-[24px]">
      <h5 class="font-[400] text-[12px] mb-[8px] md:text-[16px] lg:text-[18px]">
     {{ product?.title }}
      </h5>
      <div class="text-[12px] mb-[8px] md:text-[18px]">
        <span class="text-[--second-color] font-[400]">starting price </span>
        <span class="font-[700] lg:text-[24px]">{{ product?.price }} EGP</span>
      </div>
      <div class="flex flex-col gap-[8px] 2xl:flex-row 2xl:items-center">
        <span class="text-[12px] text-[--second-color] font-[400] md:text-[18px]"
          >Lot starts in</span
        >
        <ul class="flex flex-wrap gap-[8px] lg:gap-[16px]">
          <li
            class="min-w-fit px-1 text-[--identity-color] font-[700] text-[12px] bg-[--card-color] rounded-[14px] flex items-center justify-center gap-1 w-[57px] h-[28px] lg:text-[14px] lg:w-[105px] lg:h-[40px]"
          >
            <span>{{ product?.days }}</span>
            <span>Days</span>
          </li>
          <li
            class="min-w-fit px-1 text-[--identity-color] font-[700] text-[12px] bg-[--card-color] rounded-[14px] flex items-center justify-center gap-1 w-[57px] h-[28px] lg:text-[14px] lg:w-[105px] lg:h-[40px]"
          >
            <span>{{ product?.hours }}</span>
            <span>Hours</span>
          </li>
          <li
            class=" min-w-fit px-1 text-[--identity-color] font-[700] text-[12px] bg-[--card-color] rounded-[14px] flex items-center justify-center gap-1 w-[57px] h-[28px] lg:text-[14px] lg:w-[105px] lg:h-[40px]"
          >
            <span>{{ product?.min }}</span>
            <span>Minutes</span>
          </li>
        </ul>
      </div>

 
    </div>

    <div 
    @click="()=>changeLikeState(product?.id)"
        class=" hidden absolute top-0 right-0 cursor-pointer lg:block">
        <img v-if="product?.isLiked" src="../../../assets/imgs/pics/heart.svg" alt="">
        <img
            v-else
          src="../../../assets/imgs/pics/white-heart.svg"
          alt=""
        />
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
    product:Object
})
const emit = defineEmits(['changeLikeState'])

const changeLikeState = ( id ) => {
    emit('changeLikeState' , id);
}
</script>

<style></style>
