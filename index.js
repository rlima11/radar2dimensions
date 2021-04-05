const dscc = require('@google/dscc');
const viz = require('@google/dscc-scripts/viz/initialViz.js');
const local = require('./localMessage.js');
var d3 = require("d3")
const rc = require('./radarchart.js');


			////////////////////////////////////////////////////////////// 
			//////////////////////// Set-Up ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

				width_child = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
        height_child = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
        
        var color = d3.scaleOrdinal().range(["#CC333F","#00A0B0"]);


        var divElement = document.createElement('div');
        divElement.className = 'graph';
        document.body.appendChild(divElement);


// write viz code here
const drawViz = (data) => {
  var msg = local.message.fields.dimID[0].name + " by " + local.message.fields.metricID[0].name
  console.log(data)
  var radarChartOptionsGeneral = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    legend: { title: msg, translateX: 100, translateY: 40 },
    color: color
  };
  rc.RadarChart(".graph", local.dataGeneral, radarChartOptionsGeneral);
};

// renders locally
if (DSCC_IS_LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
