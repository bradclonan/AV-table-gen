<template>
   <th v-on="inputListeners" :scope="isScope" :colspan="isColSpan" :rowspan="isRowSpan" :headers="headers.toString()">
      <slot></slot>
      <slot name="tbodyContent"  >
    
   </slot>
   </th>
</template>

<script>
   export default {
      name: "avTableCellHeader",
      props :{
         // row, col, rowgroup, colgroup, auto
         scope : {
            type : String,
            default : 'auto'
         },
         colSpan : {
            type : Number,
            default : null
         },
         rowSpan : {
            type : Number,
            default : null
         },
         headers : {
            type : Array,
           default: function () {
        return []
      }
         },
         cellValue : {
             type: [String, Object, Number, Array, Date, Boolean ]
         },
         cellIndex : {
            type : Number
         }
      },
      computed : {
         isColSpan () {
            const {colSpan} = this;
            return !colSpan ?
            1
            : 
            colSpan >= 1000 ?
            1000
            : typeof colSpan == 'number' ?
            colSpan
            : null;
         },
         isRowSpan () {
            const {rowSpan} = this;
            return !rowSpan ?
            1
            : 
            rowSpan >= 65534 ?
            65534
            : typeof rowSpan == 'number' ?
            rowSpan
            : null;


         },
         isScope () {
            const {scope} = this;
            return !scope ?
            'auto'
            : scope.includes('row', 'col', 'rowgroup', 'colgroup') ?
            scope
            : null;

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
         //     if(vm.cellIndex) {
         //        vm.$emit('clickedTCH', vm.cellIndex)
         //     }
         //    vm.$emit('clickedTCH', event.target)
         //  },
         //  mouseover: function(event){
         //     vm.$emit('focusedTCH', event.target)
         //  }
        }
      )
    }
      }
   }
</script>