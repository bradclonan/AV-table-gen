<template>
<div >
   <p v-if="!isEditing" @click="editThis"> {{truncatedText ? truncatedText : cellValue}}</p>
   <input v-else type="text" :value="cellValue" @input="updateValue($event)">
   <button v-show="isEditing" @click.prevent="editValue">Save</button>
</div>
</template>

<script>
export default {
   name: "colLongtext",
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
      columnObj: {
         type: Object,
         default: function () {
            return {}
         }
      },
      title: {
         type: String,
         default: null,
      },
      field: {
         type: String,
         default: null
      },
      scope: {
         type: String,
         default: null
      }
   },
   data() {
      return {
         isEditing: false,
         newValue: null
      }
   },
   methods: {
      editThis() {
         console.log("this")
         this.isEditing = !this.isEditing
      },
      updateValue(e) {
         this.newValue = e.target.value;
      },
      editValue() {
         console.log("this")

         var r = confirm("Press a button!");
         if (r == true) {
            this.isEditing = !this.isEditing
            this.$emit('saveDataChange', this.newValue)
         } else {
            this.isEditing = !this.isEditing
         }
      }
   },
   computed: {
      truncatedText() {
         const {
            formatterParams,
            cellValue
         } = this;
         return !formatterParams.maxLength ?
            false :
            cellValue.substring(0, formatterParams.maxLength);

      },
   }
}
</script>
