<template>
   <div>
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: "colLocation",
         props: {
      formatterParams: {
         type: Object,
         default: function () {
            return {}
         }
      },
      cellValue: {
         type: [String, Object, Array]
      },
      columnObj : {
         type : Object,
         default: function () {
            return {}
         }
      },
      title: {
         type: String,
         default : null,
      },
      field : {
         type : String,
         default : null
      },
      scope : {
         type : String,
         default : null
      }
   },
   }
</script>