// Parent
<template>
<table v-on="inputListeners">
<slot name="tblCaption"></slot>
<slot name="tblCols"></slot>
<slot name="tblHead"></slot>
<slot name="tableBody"></slot>
<slot name="tfoot"></slot>
</table>
</template>

<script>

export default {
   name: 'avTable',
   props: {
      //onClick : Function,
      //someEvent: this.onClick ? "click" : "dblclick"
   },
   methods: {
    sampleFunction(){
      console.log("You have clicked emited from avtable")
    }
  },
  computed: {
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
          // click: function (event) {
          //   vm.$emit('clickedMe', event.target.value)
          // },
          // mouseover: function(event){
          //    vm.$emit('focusedMe', event.target.value)
          // }
        }
      )
    }
  }
}
</script>
