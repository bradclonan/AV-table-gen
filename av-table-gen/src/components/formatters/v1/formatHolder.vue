<template>
  <component :is="wrapperType" :colspan="isColSpan" :rowspan="isRowSpan" :headers="headers.toString()">
    <slot/>
  </component>
</template>
    
<script>
  export default {
     name: "formatHolder",
    props: {
      type: {
        type: String,
        default: null
      },
      colSpan: {
         type: Number,
         default: 1
      },
      rowSpan: {
         type: Number,
         default: 1
      },
      headers: {
         type: Array,
         default: function () {
            return []
         }
      }
    },
    computed: {
      wrapperType() {
         const {type} = this;
         return !type ?
          "td"
         : "tr";
        
      },
       isColSpan() {
         const {
            colSpan
         } = this;
         return !colSpan ?
            1 :
            colSpan >= 1000 ?
            1000 :
            typeof colSpan == 'number' ?
            colSpan :
            null;
      },
      isRowSpan() {
         const {
            rowSpan
         } = this;
         return !rowSpan ?
            1 :
            rowSpan >= 65534 ?
            65534 :
            typeof rowSpan == 'number' ?
            rowSpan :
            null;
      }
    }
  }
</script>