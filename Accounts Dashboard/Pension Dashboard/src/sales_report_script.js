// Initial selected year
var initialSelectedYear = "2014";

// Render the initial plot
updateSalesPlot(initialSelectedYear);

// Function to update the plot based on selected year
function updateSalesPlot(selectedYear) {
  // Data for different years
  var salesDataArray = {
    "2013": {
      trace1: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
      trace2: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16]
    },
    "2014": {
      trace1: [22, 15, 28, 18, 20, 24, 21, 17, 14, 18, 16, 19],
      trace2: [18, 15, 24, 16, 19, 21, 17, 16, 12, 14, 15, 18]
    }
    // Add data for more years if needed
  };

  var primaryTrace = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: salesDataArray[selectedYear].trace1,
    type: 'bar',
    name: 'Primary Product',
    marker: {
      color: 'rgb(49,130,189)',
      opacity: 0.7,
    }
  };

  var secondaryTrace = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: salesDataArray[selectedYear].trace2,
    type: 'bar',
    name: 'Secondary Product',
    marker: {
      color: 'rgb(204,204,204)',
      opacity: 0.5
    }
  };

  var data = [primaryTrace, secondaryTrace];

  var layout = {
    title: selectedYear + ' Sales Report',
    xaxis: {
      tickangle: -45
    },
    barmode: 'group'
  };

  Plotly.newPlot('myDiv', data, layout);
}

// Add event listener to the year selector
document.getElementById("yearSelector").addEventListener("change", function() {
  var selectBox = document.getElementById("yearSelector");
  var selectedYear = selectBox.options[selectBox.selectedIndex].value;
  updateSalesPlot(selectedYear);
});