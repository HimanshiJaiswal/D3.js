var dataset1 = [
    [1, 1],
    [12, 20],
    [24, 36],
    [32, 50],
    [40, 70],
    [50, 100],
    [55, 106],
    [65, 123],
    [73, 130],
    [78, 134],
    [83, 136],
    [89, 138],
    [100, 140],
  ];

  // Step 3
  var svg = d3.select("#svg1"),
    margin = 200,
    width = svg.attr("width") - margin, //300
    height = svg.attr("height") - margin; //200

  // Step 4
  var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
    yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

  var g = svg
    .append("g")
    .attr("transform", "translate(" + 40 + "," + 40 + ")");

  // Step 5
  // Title


  // X label
  svg
    .append("text")
    .attr("x", width / 2 + 30)
    .attr("y", height - 15 + 90)
    .attr("text-anchor", "middle")
    .style("font-family", "Helvetica")
    .style("font-size", 12)
    .text("Independant");

  // Y label
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(10," +( height-40) + ")rotate(-90)")
    .style("font-family", "Helvetica")
    .style("font-size", 12)
    .text("Dependant");

  // Step 6
  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  g.append("g").call(d3.axisLeft(yScale));

  // Step 7
  svg
    .append("g")
    .selectAll("dot")
    .data(dataset1)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return xScale(d[0]);
    })
    .attr("cy", function (d) {
      return yScale(d[1]);
    })
    .attr("r", 3)
    .attr("transform", "translate(" + 40 + "," + 40 + ")")
    .style("fill", "#CC0000");

  // Step 8
  var line = d3
    .line()
    .x(function (d) {
      return xScale(d[0]);
    })
    .y(function (d) {
      return yScale(d[1]);
    })
    .curve(d3.curveMonotoneX);

  svg
    .append("path")
    .datum(dataset1)
    .attr("class", "line")
    .attr("transform", "translate(" + 40 + "," + 40 + ")")
    .attr("d", line)
    .style("fill", "none")
    .style("stroke", "#CC0000")
    .style("stroke-width", "2");