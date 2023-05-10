<template>
   <colgroup :span="colSpan" :class="colClass" :style="colStyle">
      <slot name="childCol" ></slot>
   </colgroup>
</template>

<script>
   export default {
      name: "avTableColumnGroup",
      props : {
         colSpan : {
            type : Number,
            default : null
         },
         colStyle : {
            type : String,
             default: null
         },
         colClass : {
            type : Array,
            default: function () {
            return []
         }
         },
         colChildren : {
            type : Array,
             default: function () {
            return []
            }
         }
      }
   }
</script>