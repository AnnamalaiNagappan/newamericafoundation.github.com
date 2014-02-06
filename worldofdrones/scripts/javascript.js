var width = 945

var height = 550

var svg = d3.select('#content').append('svg').attr('width', width).attr('height', height);

var projection = d3.geo.mercator().scale(175);

var path = d3.geo.path().projection(projection);

var all_data = {};

var tierById = d3.map();

var quantize = d3.scale.quantize()
    .domain([0, 1])
    .range(d3.range(2).map(function(i) { return "tier" + i; }));

queue()
  .defer(d3.json, "data/world.json")
  .defer(d3.csv, "data/wod.csv")
  .await(setUpChoropleth);

function setUpChoropleth(error, json) {

  svg.append("g")
     .attr("class", "countries")
  .selectAll("path")
    .data(topojson.feature(json, json.objects.countries).features)
  .enter().append("svg:path")
    // .attr("class", function(d) { 
    //   console.log(all_data)
    //   // return "tier1-" + all_data[d.tier_i] + " tier2-" + all_data[d.tier_ii]
    //   // console.log(d["id"])
    //   // if(choropleth_data[d.id] = all_data)
    //   // return "tier" + choropleth_data[d.id] 
    // })
    .attr("d", path);

} // setUpChoropleth function

// function drawTierI() {

//   // console.log(all_data[840])

//   function resetChoropleth(choropleth) {
//     choropleth_data = choropleth;
//     choropleth_data.forEach(function(d) {
//       all_data[d.id] = d;
//       choropleth_data[d.id] = +d.tier_ii;
//     });

//     svg.select("g.countries").selectAll("path")
//       .transition().duration(600)
//       .style("class", function(d) {
//         console.log(choropleth_data[d.id])
//     });

//   } // setUpChoropleth function

//   resetChoropleth();

// }

function drawTierI() {
  queue()
      .defer(d3.json, "data/world.json")
      .defer(d3.csv, "data/wod.csv", function(d) { tierById.set(d.id, +d.tier_i); })
      .await(ready);

  function ready(error, json) {
    svg.append("g")
        .attr("class", "countries")
      .selectAll("path")
        .data(topojson.feature(json, json.objects.countries).features)
      .enter().append("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path);

  }
}

function drawTierII() {
  queue()
      .defer(d3.json, "data/world.json")
      .defer(d3.csv, "data/wod.csv", function(d) { tierById.set(d.id, +d.tier_ii); })
      .await(ready);

  function ready(error, json) {
    svg.append("g")
        .attr("class", "countries")
      .selectAll("path")
        .data(topojson.feature(json, json.objects.countries).features)
      .enter().append("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path);

  }
}

function drawTierIIPlus() {
  queue()
      .defer(d3.json, "data/world.json")
      .defer(d3.csv, "data/wod.csv", function(d) { tierById.set(d.id, +d.tier_ii_plus); })
      .await(ready);

  function ready(error, json) {
    svg.append("g")
        .attr("class", "countries")
      .selectAll("path")
        .data(topojson.feature(json, json.objects.countries).features)
      .enter().append("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path);

  }
}

$('button#tier_i').click(function (e) {
  $( "svg" ).empty();
  drawTierI();
});

$('button#tier_ii').click(function (e) {
  $( "svg" ).empty();
  drawTierII();
});

$('button#tier_ii_plus').click(function (e) {
  $( "svg" ).empty();
  drawTierIIPlus();
});