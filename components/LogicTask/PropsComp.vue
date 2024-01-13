<template>
  <div v-if="totalProps?.length" class=" my-10 p-3 border border-[#d1d5db] rounded-md bg-[#eeeeee29] ">
    <div v-for="(item, idx) in totalProps" :key="idx">
      <span class="">{{ item?.name }}</span>
      <MultiSelectVue
        :options="item?.options"
        @changeVal="getOptions"
        :from="item?.id"
        inputType="options"
        :placeholder="`choose ${ item?.name}`"
      />
    </div>
    <div v-if="showInput" class=" pt-2">
        <input class=" outline-none border border-[#d1d5db] w-full rounded-[4px] px-3 py-2 "  type="text" placeholder="From User" @keyup="changeLastVal">
    </div>
  </div>
</template>

<script setup>
import MultiSelectVue from "./MultiSelect.vue";
import requist from "../../composables/requist";
import { useGlobalStore } from "../../stores/global";

const props = defineProps({
  initialProp: Object,
  trigger:Boolean
});
const emit = defineEmits(['changeCollectedData'])
const global = useGlobalStore()

const showInput = ref(false)
const totalProps = ref([]);
const { Axios } = requist();

const getOptions = (id, from , name) => {
  const index = totalProps.value.findIndex((obj) => obj.id === from);
 
  if (index != -1) {
    totalProps.value = totalProps.value?.slice(0, index + 1);
  }
  if (id != "other") {
    showInput.value = false

    totalProps.value = totalProps.value.map((obj) =>{
    if( obj.id === from) {
        obj.selected_option_name = name
    }    
    return obj
    });
  global.turnLoaderOn()

    Axios.get(`get-options-child/${id}`)
      .then((res) => {
  global.turnLoaderOff()

        if (res.data?.code == 200) {
          const allOfProps = res.data?.data?.map((item) => {
            item?.options?.map((option) => {
              option.value = option?.id;
              return option;
            });
            item?.options?.unshift({ value: "other", name: "other", id: "other" });

            let value = item?.id;

            return { ...item, value, from };
          });
          totalProps.value = [...totalProps.value, ...allOfProps];
        }
      })
      .catch((err) => {
  global.turnLoaderOff()

        console.error(err);
      });
  }else{
    showInput.value = true
  }



  console.log(" totalProps.value" ,  totalProps.value)
};


const changeLastVal = ( e ) => {
    if(e.target?.value){
        const updatedLastObject = Object.assign({},  totalProps.value[ totalProps.value.length - 1], { selected_option_name: e.target?.value });
        totalProps.value[ totalProps.value.length - 1] = updatedLastObject
    }

}


const collectData = ( ) => {
    const getData = totalProps.value.map((item) => {
        return { propName : item?.name , chosenOption : item?.selected_option_name}
    })

    emit('changeCollectedData' , getData)
}

//hooks
onMounted(() => {
  totalProps.value = [props.initialProp];
});


watch(
  () => props.trigger,
  () => {
    collectData()
  }
);
</script>

<style></style>
