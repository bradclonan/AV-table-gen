<template>
<div class="table-wrapper">

   <!--

   <slot name="avTableCaption">

   </slot>

   <av-table-column-group>
      <av-table-column></av-table-column>
   </av-table-column-group>
   <av-table-column></av-table-column>

   <av-table-head>
      <av-table-row>
         <av-table-head></av-table-head>
      </av-table-row>
   </av-table-head>

   <av-table-body>

      <av-table-row>
         <av-table-head>
            <av-table-cell></av-table-cell>
         </av-table-head>
      </av-table-row>

   </av-table-body>

   <av-table-foot>
      <av-table-row>

      </av-table-row>
   </av-table-foot>

       -->
   <!-- note : switch table types/views here to charts etc 
      https://www.trysmudford.com/blog/dynamic-scoped-slots-in-vue-js/
      -->

   <table>
      <caption>A summary of the UK's most famous punk bands</caption>
      <thead>
         <tr>
            <th scope="col">Band</th>
            <th scope="col">Year formed</th>
            <th scope="col">No. of Albums</th>
            <th scope="col">Most famous song</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th scope="row">Buzzcocks</th>
            <td>1976</td>
            <td>9</td>
            <td>Ever fallen in love (with someone you shouldn't've)</td>
         </tr>
         <tr>
            <th scope="row">The Clash</th>
            <td>1976</td>
            <td>6</td>
            <td>London Calling</td>
         </tr>

         ... some rows removed for brevity

         <tr>
            <th scope="row">The Stranglers</th>
            <td>1974</td>
            <td>17</td>
            <td>No More Heroes</td>
         </tr>
      </tbody>
      <tfoot>
         <tr>
            <th scope="row" colspan="2">Total albums</th>
            <td colspan="2">77</td>
         </tr>
      </tfoot>
   </table>

   <hr />
   <!-- :onClick="sampleFunction" -->
   <av-table @clickedMe="sampleFunction" @focusedMe="hoverFunction">
      <template #caption>
         <av-table-caption :class="[hoveredTable ? 'red' : 'blue']">
            A summary of the UK's most famous punk bands
         </av-table-caption>
      </template>
      <template #colgroup>
         <av-table-column-group>
            <template #groupcol>
               <av-table-column :colSpan="3" :colClass="['red','blue']"></av-table-column>
            </template>
         </av-table-column-group>
      </template>

   </av-table>
</div>
</template>

<script>
import avTable from "@/components/semantic/avTable"
import avTableBody from "@/components/semantic/avTableBody"
import avTableCaption from "@/components/semantic/avTableCaption"
import avTableCell from "@/components/semantic/avTableCell"
import avTableColumn from "@/components/semantic/avTableColumn"
import avTableColumnGroup from "@/components/semantic/avTableColumnGroup"
import avTableFoot from "@/components/semantic/avTableFoot"
import avTableHead from "@/components/semantic/avTableHead"
import avTableRow from "@/components/semantic/avTableRow"
export default {
   name: 'basic',
   data() {
      return {
         hoveredTable: false
      }
   },
   components: {
      avTable,
      avTableBody,
      avTableCaption,
      avTableCell,
      avTableColumn,
      avTableColumnGroup,
      avTableFoot,
      avTableHead,
      avTableRow
   },
   methods: {
      sampleFunction() {
         console.log("You have clicked emited from basic.vue")
      },
      hoverFunction() {
         this.hoveredTable = !this.hoveredTable
         console.log("hovered me")
      }
   }
}
</script>

<style>
table,
td,
th {
   border: 1px solid black;
}

caption {
   caption-side: bottom;
}

.red {
   color: red;
}
</style>
