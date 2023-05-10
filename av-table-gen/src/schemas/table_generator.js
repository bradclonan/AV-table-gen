const shortid = require('shortid');

//import { clean } from "@/utility/DataManipulation.js";

// Timestamp
const currentDate = new Date();
const timestamp = currentDate.getTime();
console.log(shortid.generate());

function table_base(options = {}) {
    const {
        avTableID = null,
            name = null,
            hasCaption = false,
            caption = null,
            hasHead = false,
            headerRows = [],
            headOpts = [],
            columns = [],
            colOpts = []

    } = options; // Default options
    return {
        avTableID: avTableID,
        name: name,
        hasCaption: hasCaption,
        caption: caption,
        hasHead: hasHead,
        headerRows: headerRows,
        headOpts: headOpts,
        columns: columns,
        colOpts: colOpts
    };
}

function table_headerRow_generator(options = {}) {
    const {
        hrID = shortid.generate(),
            id = null,
            title = null,
            field = null,
            formatter = null,
    } = options; // Default options
    return {
        hrID: hrID,
        id: id,
        title: title,
        field: field,
        formatter: formatter
    };
}

function table_headerOpts_generator(options = {}) {
    const {
        hOptID = shortid.generate(),
            id = null
    } = options; // Default options
    return {
        hOptID: hOptID,
        id: id
    };
}

function table_columns_generator(options = {}) {
    const {
        tblColID = shortid.generate(),
            id = null,
            title = null,
            field = null,
            type = "td",
            scope = null,
            headers = [],
            rowSpan = null,
            colSpan = null,
            formatter = null,
            formatterParams = {}
    } = options; // Default options
    return {
        tblColID: tblColID,
        id: id,
        title: title,
        field: field,
        type: type,
        scope: scope,
        headers: headers,
        rowSpan: rowSpan,
        colSpan: colSpan,
        formatter: formatter,
        formatterParams: formatterParams
    };
}

let TABLE = table_base({});

function library_repository(command, identifier, ...theObject) {

    return command === 'newTable' ? newTable(tableObject) :
        command === 'toggleCaption' ? toggleCaption(tableID) :
        command === 'changeCaption' ? changeCaption(tableID, newCaption) :
        command === 'addCol' ? addCol(tableID, index, colObj) :
        command === 'addColGroup' ? addColGroup(tableID, colObj) :
        command === 'addColGroupChild' ? addColGroupChild(tableID, colGroupIndex, colObj) :
        command === 'toggleHead' ? toggleHead(tableID) :
        command === 'addHeaderRow' ? addHeaderRow(tableID, index, hrObject) :
        command === 'addHeaderOptions' ? addHeaderOptions(tableID, index, theObject) :
        command === 'addColumn' ? addColumn(tableID, index, columnObj) : null;
}

function newTable(tableObject) {
    OBJECT = library_base({
        id: object['id'] || shortid.generate(),
        title: object['title'] || null,
        summary: object['summary'] || null,
        description: object['description'] || null,
        link: object['link'] || null,
        thumb: object['thumb'] || null,
        cost: Number(object['cost']) || null,
        category: object['category'] || null,
        topic: object['topic'] || null,
        created: object['created'] || timestamp,
        platforms: object['platforms'] || null,
        tags: object['tags'] || null,
        usecase: object['usecase'] || null,
        modified: timestamp
    });

}

function fireCreate(collection, identifier, object) {
    OBJECT = library_base({
        id: object['id'] || shortid.generate(),
        title: object['title'] || null,
        summary: object['summary'] || null,
        description: object['description'] || null,
        link: object['link'] || null,
        thumb: object['thumb'] || null,
        cost: Number(object['cost']) || null,
        category: object['category'] || null,
        topic: object['topic'] || null,
        created: object['created'] || timestamp,
        platforms: object['platforms'] || null,
        tags: object['tags'] || null,
        usecase: object['usecase'] || null,
        modified: timestamp
    });
    let formatted = clean(OBJECT);
    console.log(formatted)
    let firREF = fb.db.doc(`/${collection}/${identifier}/${object['category']}/${object['id']}`);
    return firREF.set(formatted).then(function() {
        console.log("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
}







export {
    table_base
}