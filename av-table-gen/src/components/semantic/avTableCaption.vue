<template>
   <caption >

      <slot>Click to change the Caption Text</slot>
   </caption>
</template>

<script>
   export default {
      name : "avTableCaption",
      props : {

      },
      computed: {
         // captionClass(){
         //    return !this.captionSide ? 
         //    'captionTop'
         //    : 'captionBottom'
         // },
         
         // isCaptionSide() {
         //    return !this.captionSide ?
         //    'captionTop'
         //    : 'captionBottom'
         // }
      },
   }
</script>

<style>
   .captionTop {
  caption-side: top;
}

.captionBottom {
     caption-side: bottom;
}
</style>