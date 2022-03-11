// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("https://raw.githubusercontent.com/ShaynaBee/Challenge-12/main/samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", [barData], barLayout);

    // 1. Create the trace for the bubble chart.
    // Create the trace for the bubble chart.
 var bubbleData = {
  x: otuIDs,
  y: sampleVals,
  text: otuLabs,
  mode: 'markers',
  marker: {
    size: sampleVals,
    color: otuIDs
  }
};

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID"},
      showlegend: false
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", [bubbleData], bubbleLayout);   
  });
}
