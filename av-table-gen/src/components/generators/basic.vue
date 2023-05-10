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
      <tbody v-for="(item, key, index) in tableDataMock" :key="index">
         <tr v-for="(row, index) in item" :key="row.id" :>
            <th v-if="row.type === 'td'">{{row.data}}</th>
            <td v-else>{{row.data}}</td>

         </tr>
      </tbody>
      <tfoot>
         <tr>
            <th scope="row" colspan="2">Total albums</th>
            <td colspan="2">77</td>
         </tr>
      </tfoot>
   </table>

   {{tableData}}
   <hr />
   {{tbData}}

   <ul v-for="(item, key, index) in tableDataMock" :key="index">
      <li v-for="(row, index) in item" :key="row.id">
         <span v-if="row.type === 'td'">i am a td (data cell)</span>
         <span v-else>i am a th (header cell)</span>
      </li>
   </ul>

   <hr>
   {{tblColumnMock}}

   <hr>

   <!-- :onClick="sampleFunction" -->
   <av-table @clickedMe="sampleFunction" @focusedMe="hoverFunction">
      <template #caption>
         <av-table-caption :class="[hoveredTable ? 'red' : 'blue']">
            A summary of the UK's most famous punk bands
         </av-table-caption>
      </template>
      <template v-for="(tblColOpt, index) in avTableDef" #tblCols>

         <component :key="tblColOpt.id" :is="tblColOpt.isGroup ? 'av-table-column-group' : 'av-table-column'" v-bind="tblColOpt">
            <template v-if="tblColOpt.isGroup && tblColOpt.colChildren.length >= 1" #childCol>

               <av-table-column v-for="(tblColChild, index) in tblColOpt.children" :key="tblColChild.id" v-bind="tblColChild" />
            </template>

         </component>

      </template>

      <template #thead>
         <av-table-head>
            <tr>
               <th scope="col">Items</th>
               <th scope="col">Expenditure</th>
            </tr>
         </av-table-head>
      </template>

      <template #tbody>
         <av-table-body>
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
         </av-table-body>
      </template>
      <template #tfoot>
         <av-table-foot>
            <tr>
               <th scope="row" style="color:red;width:50%;">Totals</th>
               <td>21,000</td>
            </tr>
         </av-table-foot>
      </template>

   </av-table>

   <av-table @clickedMe="sampleFunction" @focusedMe="hoverFunction">
      <!-- SECTION 1 : Caption (optional) -> can contain  text etc.-->
      <template #caption>
         <av-table-caption :class="[hoveredTable ? 'red' : 'blue']">
            A summary of the UK's most famous punk bands
         </av-table-caption>
      </template>
      <!-- END SECTION 1 -->
      <!-- SECTION 2 : COLGROUP OR COL (optional) -> if COLGROUP : CAN CONTAIN COL ? else COL -->
      <template #colgroup>
         <av-table-column-group>
            <template #groupcol>

               <av-table-column :colSpan="3" :colClass="['red','blue']"></av-table-column>
            </template>
         </av-table-column-group>
      </template>

      <template #col>
         <av-table-column :colSpan="3" :colClass="['red','blue']"></av-table-column>
      </template>
      <!-- END SECTION 2 -->
      <!-- SECTION 3 : Table Head (optional) -> can contain Table Rows-->
      <template #thead>
         <av-table-head>
            <tr>
               <th scope="col">Items</th>
               <th scope="col">Expenditure</th>
            </tr>
         </av-table-head>
      </template>
      <!-- END SECTION 3 -->
      <!-- SECTION 4 : 
         Either 
         TABLE Body <tbody> : zero or more
         OR
         Table Rows <tr> : one or more
      -->
      <!-- section 4A : with table body -->

      <!-- <template v-for="(item, key, index) in tableDataMock" #tableBody>
         <av-table-body :key="tbody.id">
            <template v-for="(tblrow, index) in tbody.tblrow" #tbodyRow>
               <av-table-row :key="tblrow.id" v-bind="tblrow.children">

               </av-table-row>
            </template>
         </av-table-body>
      </template> -->
      <!-- section 4a attempt 1 end-->

      <!-- <template v-for="(tbody, index) in tableDataMock.TableRows" #tableBody>
         <av-table-body :key="tbody.id">
            <template v-for="(tbodyRow, index) in tbody.rows" #tbodyRow>
               <av-table-row :key="tbodyRow.id">
                  <template v-for="(tbodyRowChild, index) in tbodyRow.children" #tableBody>
                     mix of <td> (data cell) and <th> (header cell) elements. -->

      <!-- <component :key="tbodyRowChild.id" :is="tbodyRowChild.type" v-bind="tbodyRowChild" />
                  </template>
               </av-table-row>
            </template>
         </av-table-body>
      </template> -->

      <!-- section 4A : without table body -->
      <!-- SECTION 5 : Table Footer (optional) -> can contain Zero or more Table row <tr> elements.-->
      <template #tfoot>
         <av-table-foot>
            <tr>
               <th scope="row" style="color:red;width:50%;">Totals</th>
               <td>21,000</td>
            </tr>
         </av-table-foot>
      </template>

      <!--END SECTION 5 -->

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
         hoveredTable: false,
         tableData: [{
            type: "caption",
            children: []
         }, {
            type: "colgroup",
            children: []
         }, {
            type: "col",
            children: []
         }, {
            type: "thead",
            children: []
         }, {
            type: "thead",
            children: []
         }],
         tbData: [
            ["thead", "tr", "td"],
            ["theadclass", "trclass", "tdclass"],
            ["abc", "2"]
         ],
         tableDataMock: {},
         tblColumnMock: [ //define the table columns
            {
               title: "Name",
               field: "name",
               editor: "input"
            },
            {
               title: "Task Progress",
               field: "progress",
               align: "left",
               formatter: "progress",
               editor: true
            },
            {
               title: "Gender",
               field: "gender",
               width: 95,
               editor: "select",
               editorParams: {
                  values: ["male", "female"]
               }
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
               title: "Color",
               field: "col",
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
            },
         ],

         tblColumns: [{
               title: "Name",
               field: "name"
            },
            {
               title: "Email",
               field: "email"
            },
            {
               title: "Cell",
               field: "mobile"
            }
         ],
         //json for a defining a table
         avTableDef: {
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
            headOpts: [{

            }],
            columns: [ //define the table columns
               {
                  title: "Name",
                  field: "name",
                  editor: "input"
               },
               {
                  title: "Task Progress",
                  field: "progress",
                  align: "left",
                  formatter: "progress",
                  editor: true
               },
               {
                  title: "Gender",
                  field: "gender",
                  width: 95,
                  editor: "select",
                  editorParams: {
                     values: ["male", "female"]
                  }
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
                  title: "Color",
                  field: "col",
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
               },
            ],
            //data : this.avTableData

         },
         avTableData: [{
               "name": "Parvez Ansari",
               "email": "ansariparvez@gmai.com",
               "mobile": "9998979695"
            },
            {
               "name": "Tayyeb Shaikh",
               "email": "tshaikh1981@gmai.com",
               "mobile": "9091929394"
            },
            {
               "name": "Ashfaque Shaikh",
               "email": "ashly786@gmai.com",
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
