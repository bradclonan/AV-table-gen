import {
    table_base
} from '../src/schemas/table_generator'
const shortid = require('shortid');
const faker = require('faker');


function createFakeBaseTable() {


    const mockdata = table_base({
        avTableID: shortid.generate(),
        name: null
    });



    return mockdata;

}



function createTableData(dataCount) {



    var mockData = [];
    var i;
    for (i = 0; i < dataCount; i++) {


        var ranpeoples = faker.name.findName()
        var ranstatus = faker.random.number(5);
        var rantext = faker.lorem.words();
        var randate = faker.date.between('2018-01-01', '2022-12-31');
        var rannumbers = faker.random.number();
        var rantimeline = faker.date.between();
        var rantags = faker.random.arrayElement();
        var ranrating = faker.random.number(5);
        var ranworldClock = faker.date.recent(15);
        var rancheckbox = faker.random.boolean();
        var ranlink = faker.internet.url();
        var ranlog = faker.lorem.sentence();
        //var ranautoInt = faker.
        var rancountryCol = faker.address.country();
        var ranvote = faker.random.number(55);
        var ranteamCol = faker.image.business();
        var ranlocationCol = faker.address.country();
        var ranweekCol = faker.date.weekday();
        var ranprogressTrack = faker.random.number(100);
        var ranlongTextCol = faker.random.words(30);
        var ranphoneCol = faker.phone.phoneNumber();
        var ranitemIdCol = faker.random.uuid();
        var ranformulaCol = null;
        var rancolorPicker = faker.random.alphaNumeric(5);
        var ranlastUpdated = faker.date.weekday();
        var rantimeTrackingCol = faker.date.future();
        var ranfileCol = faker.image.imageUrl();
        var ranemailCol = faker.internet.email();


        mockData.push({
            peoples: "https://source.unsplash.com/random",
            status: ranstatus, // Accepts string, 100, 1- 5
            text: rantext,
            date: randate,
            numbers: rannumbers,
            timeline: rantimeline,
            tags: rantags,
            rating: ranrating,
            worldClock: ranworldClock,
            checkbox: rancheckbox,
            link: ranlink,
            log: ranlog,
            autoInt: i,
            countryCol: rancountryCol,
            vote: ranvote,
            teamCol: ranteamCol,
            locationCol: ranlocationCol,
            weekCol: ranweekCol,
            progressTrack: ranprogressTrack,
            longTextCol: ranlongTextCol,
            phoneCol: ranphoneCol,
            itemIdCol: ranitemIdCol,
            formulaCol: ranformulaCol,
            colorPicker: rancolorPicker,
            lastUpdated: ranlastUpdated,
            timeTrackingCol: rantimeTrackingCol,
            fileCol: ranfileCol,
            emailCol: ranemailCol
        })
    }

    return mockData;
}

function createFakeTableWithAllColOptionsData() {


    const mockColOpts = [{
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
    ];

    const mockColumns = [ //define the table columns
        {
            title: "Owner",
            field: "peoples",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-peoples",
            formatterParams: {}
        },
        {
            title: "Status",
            field: "status",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-status",
            formatterParams: { showText: true, statusTags: [{ value: "Done", color: 'green', text: "complete" }] }
        },
        {
            title: "Text",
            field: "text",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-text",
            formatterParams: {}
        },
        {
            title: "Date",
            field: "date",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-date",
            formatterParams: {}
        },
        {
            title: "Numbers",
            field: "numbers",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-numbers",
            formatterParams: {}
        },
        {
            title: "Timeline",
            field: "timeline",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-timeline",
            formatterParams: {}
        },
        {
            title: "Tags",
            field: "tags",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-tags",
            formatterParams: {}
        },
        {
            title: "Rating",
            field: "rating",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-rating",
            formatterParams: {}
        },
        {
            title: "World Clock",
            field: "worldClock",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-worldclock",
            formatterParams: {}
        },
        {
            title: "Checkbox",
            field: "checkbox",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-checkbox",
            formatterParams: {}
        },
        {
            title: "Link",
            field: "link",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-link",
            formatterParams: {}
        },
        {
            title: "Log",
            field: "log",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-log",
            formatterParams: {}
        },
        {
            title: "Auto incriment",
            field: "autoInt",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-autoint",
            formatterParams: {}
        },
        {
            title: "Country",
            field: "countryCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-country",
            formatterParams: {}
        },
        {
            title: "Vote",
            field: "vote",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-vote",
            formatterParams: {}
        },
        {
            title: "Team",
            field: "teamCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-team",
            formatterParams: {}
        }, {
            title: "Location",
            field: "locationCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-location",
            formatterParams: {}
        },
        {
            title: "Week",
            field: "weekCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-week",
            formatterParams: {}
        },
        {
            title: "Progress",
            field: "progressTrack",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-progress",
            formatterParams: {}
        },
        {
            title: "Long Text",
            field: "longTextCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-longtext",
            formatterParams: { maxLength: 10 }
        },
        {
            title: "Phone",
            field: "phoneCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-phone",
            formatterParams: {}
        },
        {
            title: "Item ID",
            field: "itemIdCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-item-id",
            formatterParams: {}
        },
        {
            title: "Formula",
            field: "formulaCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-formula",
            formatterParams: {}
        },
        {
            title: "Color Picker",
            field: "colorPicker",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-color-picker",
            formatterParams: {}
        },
        {
            title: "Last Updated",
            field: "lastUpdated",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-last-updated",
            formatterParams: {}
        },
        {
            title: "Time Tracking",
            field: "timeTrackingCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-time-tracking",
            formatterParams: {}
        },
        {
            title: "File",
            field: "fileCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-file",
            formatterParams: {}
        }, {
            title: "Email",
            field: "emailCol",
            type: "th",
            scope: null,
            headers: [],
            rowSpan: null,
            colSpan: null,
            formatter: "col-email",
            formatterParams: {}
        },
    ];


    let mockdata = table_base({

        name: "full Fake Table",
        hasCaption: true,
        caption: "All Table Columns",
        hasHead: true,
        headerRows: [],
        headOpts: null,
        columns: mockColumns,
        colOpts: mockColOpts
    });



    return mockdata;



}


// function createFakeTableWithAllColOptionsData() {


//     const mockColOpts = [{
//             isGroup: false,
//             colSpan: null,
//             colStyle: null,
//             colClass: null
//         }, {
//             isGroup: true, //required
//             colSpan: null,
//             colStyle: null,
//             colClass: null
//         },
//         {
//             isGroup: true,
//             colSpan: null,
//             colStyle: null,
//             colClass: null,
//             colChildren: [{ // for nested cols inside colgroup
//                 colSpan: 2,
//                 style: null,
//                 colClass: null
//             }]
//         }
//     ];

//     const mockColumns = [ //define the table columns
//         {
//             title: "Owner",
//             field: "peoples",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-peoples",
//             formatterParams: {}
//         },
//         {
//             title: "Status",
//             field: "status",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-status",
//             formatterParams: { showText: true, statusTags: [{ value: "Done", color: 'green', text: "complete" }] }
//         },
//         {
//             title: "Text",
//             field: "text",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-text",
//             formatterParams: {}
//         },
//         {
//             title: "Date",
//             field: "date",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-date",
//             formatterParams: {}
//         },
//         {
//             title: "Numbers",
//             field: "numbers",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-numbers",
//             formatterParams: {}
//         },
//         {
//             title: "Timeline",
//             field: "timeline",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-timeline",
//             formatterParams: {}
//         },
//         {
//             title: "Tags",
//             field: "tags",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-tags",
//             formatterParams: {}
//         },
//         {
//             title: "Rating",
//             field: "rating",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-rating",
//             formatterParams: {}
//         },
//         {
//             title: "World Clock",
//             field: "worldClock",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-worldclock",
//             formatterParams: {}
//         },
//         {
//             title: "Checkbox",
//             field: "checkbox",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-checkbox",
//             formatterParams: {}
//         },
//         {
//             title: "Link",
//             field: "link",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-link",
//             formatterParams: {}
//         },
//         {
//             title: "Log",
//             field: "log",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-log",
//             formatterParams: {}
//         },
//         {
//             title: "Auto incriment",
//             field: "autoInt",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-autoint",
//             formatterParams: {}
//         },
//         {
//             title: "Country",
//             field: "countryCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-country",
//             formatterParams: {}
//         },
//         {
//             title: "Vote",
//             field: "vote",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-vote",
//             formatterParams: {}
//         },
//         {
//             title: "Team",
//             field: "teamCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-team",
//             formatterParams: {}
//         }, {
//             title: "Location",
//             field: "locationCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-location",
//             formatterParams: {}
//         },
//         {
//             title: "Week",
//             field: "weekCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-week",
//             formatterParams: {}
//         },
//         {
//             title: "Progress",
//             field: "progressTrack",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-progress",
//             formatterParams: {}
//         },
//         {
//             title: "Long Text",
//             field: "longTextCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-longtext",
//             formatterParams: {}
//         },
//         {
//             title: "Phone",
//             field: "phoneCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-phone",
//             formatterParams: {}
//         },
//         {
//             title: "Item ID",
//             field: "itemIdCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-item-id",
//             formatterParams: {}
//         },
//         {
//             title: "Formula",
//             field: "formulaCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-formula",
//             formatterParams: {}
//         },
//         {
//             title: "Color Picker",
//             field: "colorPicker",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-color-picker",
//             formatterParams: {}
//         },
//         {
//             title: "Last Updated",
//             field: "lastUpdated",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-last-updated",
//             formatterParams: {}
//         },
//         {
//             title: "Time Tracking",
//             field: "timeTrackingCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-time-tracking",
//             formatterParams: {}
//         },
//         {
//             title: "File",
//             field: "fileCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-file",
//             formatterParams: {}
//         }, {
//             title: "Email",
//             field: "emailCol",
//             type: "th",
//             scope: null,
//             headers: [],
//             rowSpan: null,
//             colSpan: null,
//             formatter: "col-email",
//             formatterParams: {}
//         },
//     ];


//     let mockdata = table_base({

//         name: "full Fake Table",
//         hasCaption: true,
//         caption: "All Table Columns",
//         hasHead: true,
//         headerRows: [],
//         headOpts: null,
//         columns: mockColumns,
//         colOpts: mockColOpts
//     });



//     return mockdata;



// }


export {
    createFakeTableWithAllColOptionsData,
    createTableData
}