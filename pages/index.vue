<template>
  <div class="app-container">
    <div class="my-4">
      <NuxtLink class="border p-2 rounded-lg" to="/account"> To The Design Task</NuxtLink>
    </div>
    <form class="border border-[#d1d5db] rounded-md my-10 p-3" action="" @submit.prevent="getData">
      <div>
        <span class="">All categories</span>
        <MultiSelectComp :options="AllCategories" @changeVal="getSubs" placeholder="Choose Category" />
      </div>
      <div>
        <span class="">Sub category</span>
        <MultiSelectComp :options="subCategory" @changeVal="getProps" placeholder="Choose Sub Category" />
      </div>

      <div v-if="allProps.length">
        <div v-for="(item, i) in allProps" :key="i">
          <PropsComp :initialProp="item" @changeCollectedData="changeCollectedData" :trigger="triggerGetData" />
        </div>
      </div>

      <div>
        <input :disabled="!allProps.length"
          class="mt-6 border cursor-pointer border-[#d1d5db] bg-[#ededed75] rounded-md my-10 p-3 text-[#585d67] hover:text-[#BCAD9A] hover:bg-[#EFDFCA] disabled:cursor-not-allowed disabled:bg-[#eee] disabled:text-[#fff] "
          type="submit" value="Get Data" />
      </div>
    </form>

    <div v-if="collectedData.length">
      <Table :mainCategory="sellectedMainCategory" :subCategory="sellectedSubCategory" :collectedData="collectedData" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "logic",
});
import MultiSelectComp from "../components/LogicTask/MultiSelect.vue";
import PropsComp from "../components/LogicTask/PropsComp.vue";
import requist from "../composables/requist";
import Table from "../components/LogicTask/Table.vue";
import { useGlobalStore } from "../stores/global";


const global = useGlobalStore()
const { Axios } = requist();
const AllCategories = ref([]);
const subCategory = ref([]);
const allProps = ref([]);
const collectedData = ref([]);
const triggerGetData = ref(false);
const sellectedMainCategory = ref("");
const sellectedSubCategory = ref("");

const changeCollectedData = (data) => {
  const sellectedData = data?.filter((item) => item?.chosenOption);
  collectedData.value = [...collectedData.value, ...sellectedData];
};

const getCategories = () => {
  global.turnLoaderOn()
  collectedData.value = []
  Axios.get("get_all_cats")
    .then((res) => {
      global.turnLoaderOff()

      if (res.data?.code == 200) {
        const allCategories = res.data?.data?.categories?.map((item) => {
          let value = item?.id;
          return { ...item, value };
        });
        AllCategories.value = allCategories;
      }
    })
    .catch((err) => {
      global.turnLoaderOff()

      console.error(err);
    });
};

const getSubs = (id, name) => {
  const filterdCategory = AllCategories.value.filter((item) => item?.id == id);
  const currentSubs = filterdCategory[0]?.children?.map((item) => {
    const value = item?.id;
    return { ...item, value };
  });
  sellectedMainCategory.value = name;
  subCategory.value = currentSubs;
};

const getProps = (id, name) => {
  global.turnLoaderOn();

  sellectedSubCategory.value = name;
  allProps.value = [];
  collectedData.value = []
  Axios.get(`properties?cat=${id}`)
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
          return { ...item, value, from: "base" };
        });
        console.log("allOfProps", allOfProps);
        allProps.value = allOfProps;
      }
    })
    .catch((err) => {
      global.turnLoaderOff()

      console.error(err);
    });
};

const getData = () => {
  triggerGetData.value = !triggerGetData.value;
};

onBeforeMount(() => {
  getCategories();
});
</script>

<style></style>
