<template>
  <div class=" bg-white mb-[10px] md:mb-[48px]">
    <div class="app-container flex justify-between">
      <div class="text-[--second-color] text-[14px] font-[400] flex items-center gap-[8px] h-[44px] md:gap-[32px] md:h-[68px] lg:text-[18px]">
        <div><img class=" md:hidden cursor-pointer" src="../../assets/imgs/pics/menu.svg" alt=""></div>
        <div><img class="h-[32px] md:h-[43px] cursor-pointer" src="../../assets/imgs/pics/mazaady-logo.svg" alt=""></div>
        <ul class=" hidden gap-[20px] md:flex xl:gap-[40px]">
          <li class=" relative"><span class="text-[--active-color] cursor-pointer">Home</span> <span class=" absolute w-full h-[6px] left-0 bottom-[-24px] rounded-tl-[8px] rounded-tr-[8px] bg-[--active-color] lg:bottom-[-21px] "></span></li>
          <li><span class="cursor-pointer">Blog</span></li>
          <li><span class="cursor-pointer">Gifts</span></li>
        </ul>
      </div>
      <div class="flex items-center">
        <ul class="h-[38px] flex items-center gap-[12px] mr-[12px] xl:gap-[24px] xl:ml-[24px]">
          <li><img src="../../assets/imgs/pics/search-normal.svg" alt=""></li>
          <li class=" hidden md:block"><span class="inline-block h-[38px] w-[1px] bg-[#FFEAD2]"></span></li>
          <li><img src="../../assets/imgs/pics/notification.svg" alt=""></li>
          <li class=" hidden md:block"><span class=" inline-block h-[38px] w-[1px] bg-[#FFEAD2]"></span></li>
          <li><img class="md:w-[38px]" src="../../assets/imgs/profile/Ellipse1.svg" alt=""></li>
        </ul>
        <button class=" hidden identity-bg items-center gap-[4px] px-[10.5px] h-[40px] w-[172px] rounded-[10px] ml-0 mr-[12px] md:flex xl:mr-[32px] xl:ml-[24px]"> <img src="../../assets/imgs/pics/add-circle.svg" alt=""> <span class="font-[700] text-white text-[14px] ">Add new product</span></button>
        <ul class="h-[22px] gap-[9px] hidden md:flex">
          <li><img src="../../assets/imgs/pics/global.svg" alt=""></li>
          <li><span class=" inline-block h-[22px] w-[1px] bg-[#333]"></span></li>
          <li><span class="text-[18px] font-[700]">EN</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>