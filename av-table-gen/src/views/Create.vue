<template>
  <div>
     <create-table/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTable from '@/components/create/CreateTable.vue'

export default {
  name: 'Create',
  components: {
    "create-table" : CreateTable
  }
}
</script>
