
<template>
  <CompWrapper>
    <div class=" relative">
      <div>
        <Header />
      </div>
      <div>
        <slot  />
      </div>
    </div>
  </CompWrapper>
</template>


<script setup>
import Header from "~/components/Generic/header.vue";
import CompWrapper from "~/components/Generic/CompWrapper.vue";
import { useGlobalStore } from "~/stores/global";



const global = useGlobalStore();

</script>

<style>
/* width */
::-webkit-scrollbar {
	width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
	background: #f1f1f1;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
	background: #FF951D;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
	background: #555;
  }
</style>