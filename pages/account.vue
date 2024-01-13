<template>
  <div class="app-container">
    <div class="flex gap-[24px] flex-col sm:gap-[25px] md:flex-row">
      <div class="w-full md:w-[290px] lg:w-[400px] xl:w-[490px]">
        <div>
          <Info />
        </div>
        <div class="mt-[24px]">
          <QrCode />
        </div>
      </div>
      <div class="w-full">
        <ProductSec />
      </div>
    </div>
  </div>
</template>

<script setup>
import Info from "../components/DesignTask/Info.vue";
import QrCode from "../components/DesignTask/QrCode.vue";
import ProductSec from "../components/DesignTask/Products/ProductSec.vue";
</script>

<style></style>
