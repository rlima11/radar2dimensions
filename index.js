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

        var titleElement = document.createElement('div');
        titleElement.id = 'Title';
        document.body.appendChild(titleElement);


        var divElement = document.createElement('div');
        divElement.className = 'graph';
        document.body.appendChild(divElement);
////////////////////////////////////////////////////////////// 
			////////////////////////// Data - General ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var dataGeneral = [
        { 
          name: "Current State",
          axes: [
            {axis:"Governance",value:0.22},
            {axis:"Design",value:0.28},
            {axis:"Implementation",value:0.29},
            {axis:"Verification",value:0.17},
            {axis:"Operations",value:0.22}	
          ]
        }, 
        {
          name: "Desired State",
          axes: [
            {axis:"Governance",value:0.52},
            {axis:"Design",value:0.43},
            {axis:"Implementation",value:0.29},
            {axis:"Verification",value:0.37},
            {axis:"Operations",value:0.29}
          ]
        }
      ];

var radarChartOptionsGeneral = {
              w: width,
              h: height,
              margin: margin,
              maxValue: 0.5,
              levels: 5,
              roundStrokes: true,
              legend: { title: 'Security SDLC Functions', translateX: 100, translateY: 40 },
              color: color
            };

// write viz code here
const drawViz = (data) => {
  //viz.readmeViz();
  //viz.firstViz(data);
  rc.RadarChart(".graph", dataGeneral, radarChartOptionsGeneral);
  var msg = local.message.fields.dimID[0].name + " by " + local.message.fields.metricID[0].name
  titleElement.innerText = msg
};

// renders locally
if (DSCC_IS_LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
