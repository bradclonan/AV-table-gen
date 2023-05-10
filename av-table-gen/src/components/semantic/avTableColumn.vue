<template>
   <col :span="colSpan" :class="colClass" :style="colStyle">
</template>

<script>
   export default {
      name : "avTableColumn",
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
         }
      }
   }
</script> 
        