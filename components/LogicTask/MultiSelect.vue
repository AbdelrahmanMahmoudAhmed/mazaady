<template>
  <div>
    <Multiselect
      v-model="value"
      :options="options"
      label="name"
      :placeholder="placeholder"
      :close-on-select="close"
      :clearOnSelect="false"
      @change="changeVal"
      :show-labels="true"
      :multiple="true"
      :hideSelected="false"
    >
  
    </Multiselect>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    Multiselect,
  },

  props: ["options", "inputType", "placeholder", "mode", "locale", "close" , "from"],
  emit: ["changeVal" ],

  data() {
    const value = ref(null);

    return {
      value,
    };
  },

  beforeMount() {},

  methods: {
    
    changeVal(id) {

      if(this.$props?.inputType == 'options'){

        const lastVal = this.$props.options?.filter((item)=> item?.id == id)
        this.$emit("changeVal", id , this.$props.from , lastVal[0]?.name );


      }else{
        const lastVal = this.$props.options?.filter((item)=> item?.id == id)

        this.$emit("changeVal", id , lastVal[0]?.name);

      }
    },
  },


  
watch: {
  options(newValue, oldValue) {
      console.log(newValue);
      // You can perform additional actions when the prop changes
      this.value = null
    }
  }
};

</script>



<style src="@vueform/multiselect/themes/default.css"></style>
