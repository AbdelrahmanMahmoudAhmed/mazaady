<template>
    <div id="qr-holder" class=" transition-all h-[490px] overflow-hidden bg-white p-[16px] rounded-[21px] md:p-[24px] duration-1000 md:!h-fit md:w-[290px] lg:w-[400px] xl:w-[490px]">
        <div class="flex justify-between items-center">
            <span class="font-[700] text-[18px] lg:text-[24px]">QR Code</span>
            <ul class="flex items-center gap-[24px]">
                <li class="cursor-pointer">
                    <img src="../../assets/imgs/pics/eye.svg" alt="" />
                </li>
                <li class="cursor-pointer">
                    <img src="../../assets/imgs/pics/send-square.svg" alt="" />
                </li>
                <li class="cursor-pointer">
                    <img src="../../assets/imgs/pics/document-download.svg" alt="" />
                </li>
                <li
                v-if="toggleButton"

                @click="toggleQrSection"
                    class="cursor-pointer w-[24px] h-[24px] bg-[#F7F4F5] rounded-full flex items-center justify-center md:hidden">
                    <img src="../../assets/imgs/pics/arrow-up.svg" alt="" />
                </li>
    
                <li 
                v-else

                @click="toggleQrSection"
                class=" cursor-pointer w-[24px] h-[24px] bg-[#FBE7EE] rounded-full flex items-center justify-center md:hidden"><img src="../../assets/imgs/pics/arrow-down.svg" alt="">
                </li>
           
            </ul>
        </div>
        <div
            class="font-[400] bg-[--card-color] text-[--identity-color] rounded-[18px] w-full py-[18px] px-[16px] mt-[16px] mb-[8px] flex items-center gap-[8px] md:mb-[16px]">
            <img src="../../assets/imgs/pics/document-download2.svg" alt="" />
            <span class="text-[12px]">Download the QR code or share it with your friends.</span>
        </div>
        <div class="identity-bg min-h-[270px] rounded-[20px] p-[17px] xl:min-h-[313px] xl:p[20px]">
            <div class="h-full rounded-[20px] bg-white p-[20px]">
                <div>
                    <img class="w-[200px] m-auto" src="../../assets//imgs/pics/mazaady-logo.svg" alt="" />
                </div>
                <h5 class="font-[700] text-[18px] text-center text-[--main-color] md:text-[24px]">
                    Hala Ahmed
                </h5>
                <div>
                    <img class="m-auto w-[150px]" src="../../assets/imgs/pics/qr-code.png" alt="" />
                </div>
                <div class="text-center text-[--second-color] text-[14px]">
                    Follow us on mazaady
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const toggleButton = ref(true)
const toggleQrSection = ( ) => {
    const qr = document.getElementById('qr-holder');
if(toggleButton.value){
    qr.classList.add('h-[55px]')
    qr.classList.remove('h-[490px]')
    toggleButton.value = false
}else{
    qr.classList.add('h-[490px]')
    qr.classList.remove('h-[55px]')

    toggleButton.value = true

}

}

</script>

<style>



</style>
