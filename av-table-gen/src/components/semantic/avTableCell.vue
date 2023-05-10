<template>
<td v-on="inputListeners" :colspan="isColSpan" :rowspan="isRowSpan" :headers="headers.toString()">

 <slot >
      &nbsp;
   </slot>
   <slot name="tbodyContent">
      &nbsp;
   </slot>
</td>
</template>

<script>
export default {
   name: "avTableCell",
   props: {

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
      },
          inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
         //  click: function (event) {
         //    vm.$emit('clickedTC', event.target.value)
         //  },
         //  mouseover: function(event){
         //     vm.$emit('focusedTC', event.target.value)
         //  }
        }
      )
    }
   }
}
</script>
