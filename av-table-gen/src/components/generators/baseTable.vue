<template>
<div class="table-wrapper">

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
      <!-- <tbody v-for="(item, key, index) in tableDataMock" :key="index">
         <tr v-for="(row, index) in item" :key="row.id" :>
            <th v-if="row.type === 'td'">{{row.data}}</th>
            <td v-else>{{row.data}}</td>

         </tr>
      </tbody> -->
      <tfoot>
         <tr>
            <th scope="row" colspan="2">Total albums</th>
            <td colspan="2">77</td>
         </tr>
      </tfoot>
   </table>

   <hr>
   {{avTableDef}}
   <hr>

   <!-- <av-table v-for="(avTable, index) in avTableDef" :key="avTable.id" @clickedMe="sampleFunction" @focusedMe="hoverFunction">
      -->
   <av-table v-for="(avTable, index) in avTableDef" :key="avTable.id" >

      <template v-if="avTable.hasCaption" #tblCaption>
         <av-table-caption :class="[hoveredTable ? 'red' : 'blue']">
            {{avTable.caption}}
         </av-table-caption>
      </template>
      <template v-if="avTable.colOpts" #tblCols>

         <template v-for="(c, index) in avTable.colOpts">

            <av-table-column-group v-if="c.isGroup" :key="c.id">
               <template v-for="(cChild, index) in c.colChildren" :colChildren="cChild" #childCol>
                  <av-table-column :key="cChild.id" />

               </template>
            </av-table-column-group>

            <av-table-column v-else :key="c.id" />

         </template>

      </template>
      <template v-if="avTable.hasHead" #tblHead>
         <av-table-head>
            <av-table-row #rowContent>
               <template v-for="(tblColumns, index) in avTable.columns">

                  <av-table-cell-header :key="index" v-if="tblColumns.type === 'th'" v-bind="tblColumns">
                     {{tblColumns.title}}
                  </av-table-cell-header>

                  <av-table-cell v-else :key="index" v-bind="tblColumns">

                  </av-table-cell>

               </template>
            </av-table-row>
         </av-table-head>
      </template>

      <template v-if="avTable.hasHead" #tblHead>
         <av-table-head>
            <av-table-row #rowContent>
               <template v-for="(tblColumns, index) in avTable.columns">

                  <av-table-cell-header :key="tblColumns.id" v-if="tblColumns.type === 'th'" v-bind="tblColumns">
                     {{tblColumns.title}}
                  </av-table-cell-header>

                  <av-table-cell v-else :key="tblColumns.id" v-bind="tblColumns">

                  </av-table-cell>

               </template>
            </av-table-row>
         </av-table-head>
      </template>

      <template v-if="avTableData.length >= 1" #tableBody>
         <av-table-body>
            <template v-for="(item, index) in avTableData">
               <av-table-row :key="index" #rowContent>

                  <template v-for="(column, indexColumn) in avTable.columns">

                     <av-table-cell-header :key="indexColumn" v-if="column.type === 'th'" :cellValue="item[column.field]" :cellIndex="index" @clickedTCH="clickedTCHListener($event)" >
                        {{item[column.field]}}
                     </av-table-cell-header>

                     <av-table-cell v-else :key="indexColumn" v-bind="item" @clickedTC="clickedTCListener($event)"  :cellValue="item[column.field]" :cellIndex="index">
                        {{item[column.field]}}
                     </av-table-cell>

                  </template>

               </av-table-row>
            </template>
         </av-table-body>
      </template>

   </av-table>

</div>
</template>

<script>
import avTable from "@/components/semantic/avTable"
import avTableBody from "@/components/semantic/avTableBody"
import avTableCaption from "@/components/semantic/avTableCaption"
import avTableCellHeader from "@/components/semantic/avTableCellHeader"
import avTableCell from "@/components/semantic/avTableCell"
import avTableColumn from "@/components/semantic/avTableColumn"
import avTableColumnGroup from "@/components/semantic/avTableColumnGroup"
import avTableFoot from "@/components/semantic/avTableFoot"
import avTableHead from "@/components/semantic/avTableHead"
import avTableRow from "@/components/semantic/avTableRow"

export default {
   name: 'baseTable',
   data() {
      return {
         hoveredTable: false,
         //json for a defining a table
         avTableDef: [{
            hasCaption: true,
            caption: "Poster availability",
            colOpts: [{
                  isGroup: false,
                  colSpan: null,
                  colStyle: null,
                  colClass: null
               }, {
                  isGroup: true, //required
                  colSpan: null,
                  colStyle: null,
                  colClass: null
               },
               {
                  isGroup: true,
                  colSpan: null,
                  colStyle: null,
                  colClass: null,
                  colChildren: [{ // for nested cols inside colgroup
                     colSpan: 2,
                     style: null,
                     colClass: null
                  }]
               }
            ],
            hasHead: true,
            headerRows: [{
                  title: "Name",
                  field: "name",
                  editor: "input"
               },
               {
                  title: "Email",
                  field: "email",
                  align: "left",
                  formatter: "progress",
                  editor: true
               },
               {
                  title: "Rating",
                  field: "rating",
                  formatter: "star",
                  align: "center",
                  width: 100,
                  editor: true
               },
               {
                  title: "Mobile",
                  field: "mobile",
                  width: 130,
                  editor: "input"
               },
               {
                  title: "Date Of Birth",
                  field: "dob",
                  width: 130,
                  sorter: "date",
                  align: "center"
               },
               {
                  title: "Driver",
                  field: "car",
                  width: 90,
                  align: "center",
                  formatter: "tickCross",
                  sorter: "boolean",
                  editor: true
               }
            ],
            headOpts: [{

            }],
            columns: [ //define the table columns
               {
                  title: "Name",
                  field: "name",
                  editor: "input",
                  type: "td",
                  scope: null,
                  headers: [],
                  rowSpan: null,
                  colSpan: null
               },
               {
                  title: "Email",
                  field: "email",
                  align: "left",
                  formatter: "progress",
                  editor: true,
                  type: "th",
                  headers: [],
                  rowSpan: null,
                  colSpan: null
               },
               {
                  title: "Rating",
                  field: "rating",
                  formatter: "star",
                  align: "center",
                  width: 100,
                  type: "th",
                  headers: [],
                  rowSpan: null,
                  colSpan: null
               },
               {
                  title: "Mobile",
                  field: "mobile",
                  width: 130,
                  editor: "input",
                  type: "th",
                  scope: "col",
                  headers: [],
                  rowSpan: null,
                  colSpan: null
               },
               {
                  title: "Date Of Birth",
                  field: "dob",
                  width: 130,
                  sorter: "date",
                  align: "center",
                  type: "th",
                  scope: "col",
                  headers: [],
                  rowSpan: null,
                  colSpan: null
               }
            ],
            //data : this.avTableData

         }],
         avTableData: [{
               "name": "Parvez Ansari",
               "email": "ansariparvez@gmai.com",
               "rating": 5,
               "mobile": "9998979695"
            },
            {
               "name": "Tayyeb Shaikh",
               "email": "tshaikh1981@gmai.com",

               "rating": 55,
               "mobile": "9091929394"
            },
            {
               "name": "Ashfaque Shaikh",
               "email": "ashly786@gmai.com",

               "rating": 125,
               "mobile": "8081828384"
            }
         ]

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
      avTableRow,
      avTableCellHeader
   },
   methods: {
      sampleFunction() {
         console.log("You have clicked emited from basic.vue")
      },
      hoverFunction() {
         this.hoveredTable = !this.hoveredTable
         console.log("hovered me")
      },
      clickedTCHListener(th){
         console.log("clicked tch", th)
      },
      focusedTCHListener(th){
          console.log("focused tch", th)
      },
      clickedTCListener(tc){
         console.log("clicked tc", tc)
      },
      focusedTCListener(tc){
          console.log("focused tc", tc)
      }
   }
}
</script>

<style>
table {
   width: 100%;
}

table,
td,
th {
   border: 1px solid black;
}

/* caption {
   caption-side: bottom;
} */

.red {
   color: red;
}
</style>
