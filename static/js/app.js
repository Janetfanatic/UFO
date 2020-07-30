// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear any existing data
    tbody.html("");

    // Loop through array in data.js file, ready data for rows
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row of data to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // Append each value to a cell in the table
            let cell = row.append("td");
            cell.text(val);
            
        });

	});

}