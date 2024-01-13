<template>
  <div class="mb-16">
    <div class="flex gap-[8px] items-center mb-[13px] justify-center xs:justify-start">
      <h2 class="font-[800] text-[24px] md:text-[28px] lg:text-[32px]">Products</h2>
      <span class="text-[--second-color] text-[14px] font-[400]">(12)</span>
    </div>
    <div v-for="(product, idx) in products" :key="idx">
      <SingleProduct :product="product" @changeLikeState="changeLikeState" />
    </div>
  </div>
</template>

<script setup>
import SingleProduct from "./SingleProduct.vue";

const products = ref([
  {
    id: 1,
    img: "product1",
    state: "live",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000",
    days: "2",
    hours: "10",
    min: "50",
    isLiked: false,
  },
  {
    id: 2,

    img: "product2",
    state: "live",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000",
    days: "2",
    hours: "10",
    min: "50",
    isLiked: false,
  },
  {
    id: 3,

    img: "product3",
    state: "hot",
    title: "Jeep Car, new, used for only one time",
    price: "1000",
    days: "2",
    hours: "10",
    min: "50",
    isLiked: true,
  },
  {
    id: 4,

    img: "product4",
    state: "live",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000",
    days: "2",
    hours: "10",
    min: "50",
    isLiked: false,
  },
  {
    id: 5,

    img: "product5",
    state: "hot",
    title: "Jeep Car, new, used for only one time",
    price: "1000",
    days: "2",
    hours: "10",
    min: "50",
    isLiked: true,
  },
  {
    id: 6,

    img: "product6",
    state: "live",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000",
    days: "2",
    hours: "10",
    min: "50",
    isLiked: false,
  },
  {
    id: 7,

    img: "product7",
    state: "hot",
    title: "Jeep Car, new, used for only one time",
    price: "1000",
    days: "2",
    hours: "10",
    min: "50",
    isLiked: true,
  },
]);


const changeLikeState = ( id ) => {
    const afterChange =  products.value.map((item)=>{
        if(item.id == id){
            item.isLiked = !item.isLiked
        }
        return item
    })
    products.value = afterChange
}
</script>

<style></style>
