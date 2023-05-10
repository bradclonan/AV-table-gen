let tabledata = [{
        name: "Oli Bob",
        location: "United Kingdom",
        gender: "male",
        col: "red",
        dob: "14/04/1984",
        _children: [
            { name: "Mary May", location: "Germany", gender: "female", col: "blue", dob: "14/05/1982" },
            { name: "Christine Lobowski", location: "France", gender: "female", col: "green", dob: "22/05/1982" },
            {
                name: "Brendon Philips",
                location: "USA",
                gender: "male",
                col: "orange",
                dob: "01/08/1980",
                _children: [
                    { name: "Margret Marmajuke", location: "Canada", gender: "female", col: "yellow", dob: "31/01/1999" },
                    { name: "Frank Harbours", location: "Russia", gender: "male", col: "red", dob: "12/05/1966" },
                ]
            },
        ]
    },
    { name: "Jamie Newhart", location: "India", gender: "male", col: "green", dob: "14/05/1985" }, {
        name: "Gemma Jane",
        location: "China",
        gender: "female",
        col: "red",
        dob: "22/05/1982",
        _children: [
            { name: "Emily Sykes", location: "South Korea", gender: "female", col: "maroon", dob: "11/11/1970" },
        ]
    }, { name: "James Newman", location: "Japan", gender: "male", col: "red", dob: "22/03/1998" }
];




const tableDataMock = {
    "tblID": [{
            type: "td",
            data: "hello"
        },
        {
            type: "th",
            data: "hello"
        }
    ],
    "tbltwo": [{
            type: "th",
            data: "atb"
        },
        {
            type: "th",
            data: "hello"
        }
    ],
}







//define table
var table = new Tabulator("#example-table", {
    height: "311px",
    layout: "fitColumns",
    resizableColumns: false,
    data: nestedData,
    columns: [
        { title: "Make", field: "make" },
        { title: "Model", field: "model" },
        { title: "Registration", field: "reg" },
        { title: "Color", field: "color" },
    ],
    rowFormatter: function(row) {
        //create and style holder elements
        var holderEl = document.createElement("div");
        var tableEl = document.createElement("div");

        holderEl.style.boxSizing = "border-box";
        holderEl.style.padding = "10px 30px 10px 10px";
        holderEl.style.borderTop = "1px solid #333";
        holderEl.style.borderBotom = "1px solid #333";
        holderEl.style.background = "#ddd";

        tableEl.style.border = "1px solid #333";

        holderEl.appendChild(tableEl);

        row.getElement().appendChild(holderEl);

        var subTable = new Tabulator(tableEl, {
            layout: "fitColumns",
            data: row.getData().serviceHistory,
            columns: [
                { title: "Date", field: "date", sorter: "date" },
                { title: "Engineer", field: "engineer" },
                { title: "Action", field: "actions" },
            ]
        })
    },
});