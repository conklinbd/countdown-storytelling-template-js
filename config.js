define([],
	function ()
	{
		_configOptions = {
			
			//Enter a title, if no title is specified, the webmap's title is used.
			//title should be readable from ArcGIS.com viewer TOC
			//title: "Your title here",
			
			//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used
			//subtitle: "Your subtitle here",
			
			//id for satellite (or intended large scale) web map
			webmap_largescale: "86de95d4e0244cba80f0fa2c9403a7b2", 
			
			//id for overview web map; this is the map that contains the content point layer
			webmap_overview: "91e2bd1ecfb943c8af893f5eb67d6ff7",
			
			//layer in overview webmap which provides the countdown content
			contentLayer: "25 Busiest Airports", 
			fieldName_Rank: "rank",
			fieldName_Name: "airport",
			//NOTE: if level field doesn't exist, app will use defaultLargeScaleZoomLevel
			fieldName_Level: "level",

			//Initial zoom level for overview map
			initialZoomLevel: 2,
			
			//Initial overview map zoom level for wider map aspect ratios
			initialZoomLevelWide: 3,
			
			//If no zoom level is encoded for the feature, use this zoom 
			//level for the large scale map
			defaultLargeScaleZoomLevel: 15,
			
			showIntro: false,
			popupHeight: 300,
			popupLeftMargin: 30
			
		}
	}
);