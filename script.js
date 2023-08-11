
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});




var dataset1 = [33, 57, 84, 21, 60]

var svg = d3.select("#myPlot"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin


var xScale = d3.scaleBand().range([0, width]).padding(0.5),
            yScale = d3.scaleLinear().range([height, 0]);

var g = svg.append("g")
            .attr("transform", "translate(" + 20 + "," + 40 + ")");

    
        xScale.domain(dataset1);
        yScale.domain([0, 100]);

        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale).tickFormat(function(d){
           return "sale: " + d;
         })
         );

        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return "$" + d;
         }).ticks(4));


       g.selectAll(".bar")
         .data(dataset1)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d); })
         .attr("y", function(d) { return yScale(d); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d); });