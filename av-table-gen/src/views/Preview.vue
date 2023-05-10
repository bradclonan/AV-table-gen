<template>
<main>

   <preview-table />
</main>
</template>

<script>
// @ is an alias to /src
import PreviewTable from '@/components/preview/PreviewTable.vue'

export default {
   name: 'Preview',
   components: {
      "preview-table": PreviewTable
   }
}
</script>

<style>
table,
th,
td {
   border: 1px solid black;
   border-collapse: collapse;
}

th,
td {
   padding: 5px;
   text-align: left;
}
</style>
