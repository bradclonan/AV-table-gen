<template>
<div class="table-wrapper">
   Data on created
   <hr>
   <div class="fixedTable">

      <div id="table-scroll" class="table-scroll">

         <av-table v-for="(avTable, index) in avTableDef" :key="avTable.id" id="main-table" class="main-table">

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

            <template v-if="avTableMData.length >= 1" #tableBody>
               <av-table-body>
                  <template v-for="(item, index) in avTableMData">
                     <av-table-row :key="index" #rowContent>

                        <template v-for="(column, indexColumn) in avTable.columns">

                           <av-table-cell-header :key="indexColumn" v-if="column.type === 'th'" :cellValue="item[column.field]" :cellIndex="index">

                              <template #tbodyContent>

                                 <component :is="column.formatter" :formatterParams="column.formatterParams" :cellValue="item[column.field]" v-bind="column" @saveDataChange="avChangeData($event, index, column.field)">
                                    {{item[column.field]}}
                                    <div>{{`index:${index}`}}
                                       <hr>
                                       {{`indexColumn:${indexColumn}`}}
                                       <hr>
                                       {{`column Field:${column.field}`}}
                                    </div>
                                    <!-- <template #cellContent>
                                       {{}}
                                    </template> -->
                                 </component>

                              </template>

                           </av-table-cell-header>

                           <av-table-cell v-else :key="indexColumn" v-bind="item" :cellValue="item[column.field]" :cellIndex="index">

                              <template #tbodyContent>

                                 <component :is="column.formatter" :formatterOptions="column.formatterParams">

                                    {{item[column.field]}}
                                    {{column.formatter}}
                                 </component>

                              </template>

                           </av-table-cell>

                        </template>

                     </av-table-row>
                  </template>
               </av-table-body>
            </template>

         </av-table>
      </div>
   </div>

   <hr />

</div>
</template>

<script>
import baseTable from '@/components/generators/baseTable'

// DEV MODe
import {
   createTableData
} from '../../mockData/baseTable'

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

// Format components
import formatHolder from "@/components/formatters/v1/formatHolder" // remove likely

import colAutoint from "@/components/formatters/v1/colAutoint"
import colCheckbox from "@/components/formatters/v1/colCheckbox"
import colColorPicker from "@/components/formatters/v1/colColorPicker"
import colCountry from "@/components/formatters/v1/colCountry"
import colDate from "@/components/formatters/v1/colDate"
import colFile from "@/components/formatters/v1/colFile"
import colFormula from "@/components/formatters/v1/colFormula"
import colItemId from "@/components/formatters/v1/colItemId"
import colLastUpdated from "@/components/formatters/v1/colLastUpdated"
import colLink from "@/components/formatters/v1/colLink"
import colLocation from "@/components/formatters/v1/colLocation"
import colLog from "@/components/formatters/v1/colLog"
import colLongtext from "@/components/formatters/v1/colLongtext"
import colNumbers from "@/components/formatters/v1/colNumbers"
import colPeoples from "@/components/formatters/v1/colPeoples"
import colPhone from "@/components/formatters/v1/colPhone"
import colProgress from "@/components/formatters/v1/colProgress"
import colRating from "@/components/formatters/v1/colRating"
import colStatus from "@/components/formatters/v1/colStatus"
import colTags from "@/components/formatters/v1/colTags"
import colTeam from "@/components/formatters/v1/colTeam"
import colText from "@/components/formatters/v1/colText"
import colTimeline from "@/components/formatters/v1/colTimeline"
import colTimeTracking from "@/components/formatters/v1/colTimeTracking"
import colVote from "@/components/formatters/v1/colVote"
import colWeek from "@/components/formatters/v1/colWeek"
import colWorldclock from "@/components/formatters/v1/colWorldclock"
import colEmail from "@/components/formatters/v1/colEmail"

//Behavior components
import HighlightOnHover from "@/components/behaviors/v1/HighlightOnHover"

export default {
   name: 'AVTableSample',

   created() {
      this.avTableDef = this.$fakeTable,
         this.avTableMData = createTableData(599);
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
      avTableCellHeader,
      formatHolder,
      colAutoint,
      colCheckbox,
      colColorPicker,
      colCountry,
      colDate,
      colFile,
      colFormula,
      colItemId,
      colLastUpdated,
      colLink,
      colLocation,
      colLog,
      colLongtext,
      colNumbers,
      colPeoples,
      colPhone,
      colProgress,
      colRating,
      colStatus,
      colTags,
      colTeam,
      colText,
      colTimeline,
      colTimeTracking,
      colVote,
      colWeek,
      colWorldclock,
      HighlightOnHover,
      colEmail

   },
   data() {
      return {
         hoveredTable: false,
         avTableDef: [],
         avTableMData: []
         //json for a defining a table

      }
   },
   methods: {
      sampleFunction() {
         console.log("You have clicked emited from basic.vue")
      },
      hoverFunction() {
         this.hoveredTable = !this.hoveredTable
         console.log("hovered me")
      },
      clickedTCHListener(th) {
         console.log("clicked tch", th)
      },
      focusedTCHListener(th) {
         console.log("focused tch", th)
      },
      clickedTCListener(tc) {
         console.log("clicked tc", tc)
      },
      focusedTCListener(tc) {
         console.log("focused tc", tc)
      },
      avChangeData(newValue, dataIndex, objectField) {
         // console.log(newValue, dataIndex, objectField)
         // this.avTableMData[dataIndex][objectField] = data;

         this.$set(this.avTableMData[dataIndex], objectField, newValue);
      }
   }
}
</script>

<style lang="scss">
.fixedTable {
   html {
      box-sizing: border-box;
   }

   *,
   *:before,
   *:after {
      box-sizing: inherit;
   }

   .intro {
      max-width: 1280px;
      margin: 1em auto;
   }

   .table-scroll {
      position: relative;
      width: 100%;
      z-index: 1;
      margin: auto;
      overflow: auto;
      height: 350px;
   }

   .table-scroll table {
      width: 100%;
      min-width: 1280px;
      margin: auto;
      border-collapse: separate;
      border-spacing: 0;
   }

   .table-wrap {
      position: relative;
   }

   .table-scroll th,
   .table-scroll td {
      padding: 5px 10px;
      border: 1px solid #000;
      background: #fff;
      vertical-align: top;
   }

   .table-scroll thead th {
      background: #333;
      color: #fff;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
   }

   /* safari and ios need the tfoot itself to be position:sticky also */
   .table-scroll tfoot,
   .table-scroll tfoot th,
   .table-scroll tfoot td {
      position: -webkit-sticky;
      position: sticky;
      bottom: 0;
      background: #666;
      color: #fff;
      z-index: 4;
   }

   a:focus {
      background: red;
   }

   /* testing links*/

   th:first-child {
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      z-index: 2;
      background: #ccc;
   }

      th:last-child {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 2;
      background: #ccc;
   }

   thead th:first-child,
   tfoot th:first-child {
      z-index: 5;
   }
}
</style>
