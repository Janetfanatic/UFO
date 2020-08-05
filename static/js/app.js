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
// function handleClick() {
    // Filter date and time values
    // Show filtered data in the table
    // let date = d3.select("#datetime").property("value");
    // let filteredData = tableData;

// Keep track of all filters
// NOTE: this variable exists OUTSIDE any function
var filters = {};

// This function will replace your handleClick function
function updateFilters() {
    let date = d3.select("#datetime").property("value");
    filters.date = date
    let city = d3.select("#city").property("value");
    filters.city = city
    let state = d3.select ("#state").property("value");
    filters.state = state
    let country = d3.select("#country").property("value");
    filters.country = country
    let shape = d3.select("#shape").property("value");
    filters.shape = shape
    console.log("1. update filters")
    filterTable()
}



    // Check to see if a date was entered and filter the
    // data using that date.
    // if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
    //     filteredData = filteredData.filter(row => row.datetime === date);
    // };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
//     

 // Call function to apply all filters and rebuild the table
 // Set the filteredData to the tableData
 function filterTable() {
    let filterData = tableData;

  
    // Loop through all of the filters and keep any data that
    // matches the filter values
  if (filters.date) {
    filterData = filterData.filter(row => row.datetime === filters.date);
  } 
  if (filters.city) {    
    filterData = filterData.filter(row => row.city == filters.city);
  }
 if (filters.state) {
    filterData = filterData.filter(row => row.state === filters.state); 
  }
  if (filters.country) {
    filterData = filterData.filter(row => row.country === filters.country);
  }
  if (filters.shape) {
    filterData = filterData.filter(row => row.shape === filters.shape);
  }
  // Finally, rebuild the table using the filtered Data
    buildTable(filterData);
  }


// // Attach an event to listen for the form button
// d3.selectAll("#filter-btn").on("click", handleClick);

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);