/**
 * Used to define the formatter name
 * @param {*} name 
 * Accepts 
 * - 
 */
function chooseFormat(name) {
    console.log(name)
}

/**
 * Example Data
 * {
                  title: "Email", // Text tiel of column
                  field: "email", // field name for data
                  type: "th", // type of header row
                  headers: [], // headers if needed
                  rowSpan: null, // span of row
                  colSpan: null, // col span of row
                  formatter: "progress", // USE : Used to define column type \/ Accepts : People, Status, Text, Data, Numbers, Timeline, Tags, Ratings, World Clock, Column, Checkbox, Link, Creation Log, Auto Number, Country, Vote, Team, Location, Week, Progress Trackings, Long text, phone, item id, formula, color picker, last updated, time tracking, file, pivot,
                   formatterParams : {} //that should contain an object with additional information for configuring the formatter.
               },
 */