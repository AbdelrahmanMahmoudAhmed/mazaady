<template>
    <table class="w-full border-separate border-spacing-y-3">
        <thead class="text-[#BCAD9A] rounded-[20px] overflow-hidden w-full">
            <th class="pb-1 px-0 bg-[#EFDFCA]">Title</th>
            <th class="pb-1 px-0 bg-[#EFDFCA]">Value</th>
        </thead>
        <tbody>
            <tr>
                <td class="px-6 py-6 font-medium align-top bg-[#f1ede9] min-w-[150px] text-center">
                    Main Category
                </td>
                <td class="px-6 py-6 font-medium align-top bg-[#f1ede9] min-w-[150px] text-center">
                    {{ mainCategory }}
                </td>
            </tr>
            <tr>
                <td class="px-6 py-6 font-medium align-top bg-[#f1ede9] min-w-[150px] text-center">
                    Sub Category
                </td>
                <td class="px-6 py-6 font-medium align-top bg-[#f1ede9] min-w-[150px] text-center">
                    {{ subCategory }}
                </td>
            </tr>
            <tr v-for="(item, idx) in collectedData" :key="idx">
                <td class="px-6 py-6 font-medium align-top bg-[#f1ede9] min-w-[150px] text-center">
                    {{ item?.propName }}
                </td>
                <td class="px-6 py-6 font-medium align-top bg-[#f1ede9] min-w-[150px] text-center">
                    {{ item?.chosenOption }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps({
    mainCategory: String,
    subCategory: String,
    collectedData: Array,
});


onUpdated(()=>{
    console.log("collectedData" , props.collectedData)
})
</script>

<style></style>
