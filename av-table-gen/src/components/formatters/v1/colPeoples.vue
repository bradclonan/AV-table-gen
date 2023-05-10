<template>
<div>
   
<slot></slot>
   <div @click="expandNode(cellValue)">
      click me
   </div>
</div>
</template>

<script>
export default {
   name: 'colPeoples',
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
   methods: {
      expandNode(node) {
         console.log("exmpandnode", node)
      }
   },
   computed: {

   },
}
</script>
