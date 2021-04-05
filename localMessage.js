/**
 * This file provides the mock "data" received
 * by your visualization code when you develop
 * locally.
 *
 */
export const message = {
  tables: {
    DEFAULT: [
      {
        dimID: ['25-54'],
        metricID: [128863172],
      },
      {
        dimID: ['0-14'],
        metricID: [61175933],
      },
      {
        dimID: ['65+'],
        metricID: [51055052],
      },
      {
        dimID: ['15-24'],
        metricID: [43351778],
      },
      {
        dimID: ['55-64'],
        metricID: [42179856],
      },
    ],
  },
  fields: {
    dimID: [
      {
        id: 'qt_nzqx6a0xvb',
        name: 'Age Group',
        type: 'TEXT',
        concept: 'DIMENSION',
      },
    ],
    metricID: [
      {
        id: 'qt_8isx6a0xvb',
        name: 'Population',
        type: 'NUMBER',
        concept: 'METRIC',
      },
    ],
  },
  style: {},
};


////////////////////////////////////////////////////////////// 
			////////////////////////// Data - General ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

		export const dataGeneral = [
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
