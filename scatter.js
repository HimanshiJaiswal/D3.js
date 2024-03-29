var dataset1 = [
    [90, 20], [20, 100], [66, 44],
    [53, 80], [24, 182], [80, 72],
    [10, 76], [33, 150], [100, 15]
    ];

    // Step 3
    var svg = d3.select("#svg4"),
        margin = 200,
        width = svg.attr("width") - margin, //300
        height = svg.attr("height") - margin //200

    // Step 4 
    var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
        yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);
        
    var g = svg.append("g")
        .attr("transform", "translate(" + 50 + "," + 50 + ")");

    // Step 5
    // Title
    // svg.append('text')
    // .attr('x', width/2 + 100)
    // .attr('y', 100)
    // .attr('text-anchor', 'middle')
    // .style('font-family', 'Helvetica')
    // .style('font-size', 20)
    // .text('Scatter Plot');
    
    // X label
    svg.append('text')
    .attr('x', width/2 + 40)
    .attr('y', height - 15 + 100)
    .attr('text-anchor', 'middle')
    .style('font-family', 'Helvetica')
    .style('font-size', 12)
    .text('Men');
    
    // Y label
    svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(20,' + (height - 30 ) + ')rotate(-90)')
    .style('font-family', 'Helvetica')
    .style('font-size', 12)
    .text('Woman');

    // Step 6
    g.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(xScale));
    
    g.append("g")
     .call(d3.axisLeft(yScale));
    
    // Step 7
    svg.append('g')
    .selectAll("dot")
    .data(dataset1)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d[0]); } )
    .attr("cy", function (d) { return yScale(d[1]); } )
    .attr("r", 2)
    .attr("transform", "translate(" + 50 + "," + 50 + ")")
    .style("fill", "#CC0000");