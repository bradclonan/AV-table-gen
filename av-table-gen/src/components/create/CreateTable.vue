<template>
   <main>
      <baseTable/>
   </main>
</template>

<script>
import baseTable from '@/components/generators/baseTable'
   
   export default {
      name : "CreateTable",
      components: {
         baseTable,
      },
   }
</script>