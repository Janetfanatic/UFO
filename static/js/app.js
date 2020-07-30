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

// Use D# to handle the action of a button click
function handleClick() {
    // Filter date and time values
    // Show filtered data in the table
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData); 
};

// // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);