/*
This contains the basic functions for initializing a Wax map. 
Data sources are tilestream urls.

url = the url of the tileset to be rendered
mapContainer = the div that will hold the map
startLat = latitude of the starting center point for the map
startLng = longtitude of the starting cetner point for the map
minZoom = minimum zoom level for the map
maxZoom = maximum zoom level for the map

Last Updated 01/19/12 by Andy Hull
*/

function newWaxMap(url, mapContainer, startLat, startLng, minZoom, maxZoom){
	var options = {
	    xaxis: {
	        font: { "family": "Georgia" },
	        tickColor: '#f4f4f4',
	        tickSize: 1,
	        tickDecimals: 0,
			show: false
	    },
	    yaxis: {
			font: { "family": "Georgia" },
	        tickColor: '#f4f4f4',
	        autoscaleMargin: 0.1,
			show:true,
			position: "right"
	    },
	    series: {
	        lines: {
	            show: false,
	            lineWidth: 0.5,
	            fillColor: '#000000'
	        },
	        points: {
	            show: false,
	            fillColor: '#f69680',
	            radius: 4,
	            lineWidth: 2
	        },
			bars: {
	            show: true,
	            lineWidth: 0,
	            fillColor: '#cccccc'
	        },
	        shadowSize: 0
	    },
	    colors: ["#0064CD"],
	    grid: {
	        show: true,
	        borderWidth: 0,
	        hoverable: true,
	        clickable: true
	     }
	};
			var mobileArray = [[0,1.24],[1,1.77],[2,3.53],[3,5.57],[4,6.95],[5,7.03],[6,8.26],[7,8.91],[8,10.05],[9,13.72],[10,17.92],[11,18.64],[12,20.38],[13,22.25],[14,22.49],[15,23.83],[16,24.53],[17,24.78],[18,25.44],[19,27.84],[20,30.69],[21,30.88],[22,33.4],[23,34.09],[24,34.66],[25,37.23],[26,38.38],[27,38.46],[28,39.21],[29,39.34],[30,40.03],[31,40.07],[32,40.54],[33,40.69],[34,41.39],[35,41.62],[36,44.07],[37,45.48],[38,46.09],[39,46.17],[40,46.69],[41,46.8],[42,48.41],[43,52.18],[44,53.42],[45,54.32],[46,55.1],[47,57.01],[48,57.14],[49,57.65],[50,57.81],[51,61.25],[52,61.42],[53,61.63],[54,61.78],[55,61.97],[56,62.32],[57,63.42],[58,64.04],[59,64.56],[60,65.14],[61,65.14],[62,67.11],[63,67.21],[64,68],[65,70.66],[66,70.78],[67,70.89],[68,71.49],[69,72.3],[70,73.61],[71,74.31],[72,74.97],[73,75.78],[74,76.11],[75,76.13],[76,76.34],[77,77.18],[78,78.26],[79,79.34],[80,79.73],[81,79.94],[82,80.55],[83,81.09],[84,82.72],[85,83.22],[86,84.9],[87,85.53],[88,85.67],[89,86.37],[90,87.11],[91,88.02],[92,88.59],[93,89.58],[94,89.86],[95,91.09],[96,91.25],[97,91.43],[98,91.45],[99,91.67],[100,91.72],[101,91.73],[102,92.42],[103,93.7],[104,93.96],[105,95.39],[106,96.07],[107,96.2],[108,98.52],[109,98.9],[110,99.05],[111,100.09],[112,100.1],[113,100.13],[114,100.48],[115,100.66],[116,101.04],[117,102.18],[118,102.4],[119,102.59],[120,103.62],[121,104.1],[122,104.51],[123,104.55],[124,105.18],[125,105.36],[126,105.4],[127,106.04],[128,106.54],[129,106.94],[130,106.99],[131,107.69],[132,107.86],[133,108.22],[134,108.47],[135,109.07],[136,109.34],[137,111.99],[138,113.46],[139,114.19],[140,114.68],[141,114.92],[142,115.45],[143,115.68],[144,116],[145,116.05],[146,116.09],[147,116.71],[148,117.76],[149,118.64],[150,119.05],[151,119.22],[152,119.91],[153,120.32],[154,120.54],[155,121.07],[156,122.05],[157,122.62],[158,122.67],[159,123.24],[160,124.18],[161,124.3],[162,124.34],[163,124.73],[164,124.94],[165,125.01],[166,125.06],[167,125.57],[168,127.04],[169,128.07],[170,129.19],[171,130.76],[172,131.71],[173,132.43],[174,133.11],[175,135.82],[176,135.91],[177,136.1],[178,137.17],[179,141.21],[180,141.79],[181,141.93],[182,142.33],[183,143.27],[184,144.48],[185,145.18],[186,145.45],[187,145.84],[188,147.16],[189,149.63],[190,152.67],[191,155.8],[192,156.27],[193,156.4],[194,156.5],[195,160.78],[196,165.54],[197,166.26],[198,169.64],[199,171.52],[200,175.3],[201,177.65],[202,184.72],[203,185.28],[204,187.86],[205,189.35],[206,195.57],[207,206.43],[208,0]];

			var countryNames =[[0,'Myanmar'],[1,'D.P.R. Korea'],[2,'Eritrea'],[3,'Solomon Islands'],[4,'Somalia'],[5,'Marshall Islands'],[6,'Ethiopia'],[7,'Cuba'],[8,'Kiribati'],[9,'Burundi'],[10,'Congo (Dem. Rep.)'],[11,'Djibouti'],[12,'Malawi'],[13,'Central African Rep.'],[14,'Comoros'],[15,'Chad'],[16,'Niger'],[17,'Micronesia'],[18,'Tuvalu'],[19,'Papua New Guinea'],[20,'Nepal'],[21,'Mozambique'],[22,'Rwanda'],[23,'Sierra Leone'],[24,'Burkina Faso'],[25,'Madagascar'],[26,'Uganda'],[27,'Cook Islands'],[28,'Guinea-Bissau'],[29,'Liberia'],[30,'Haiti'],[31,'Guinea'],[32,'Sudan'],[33,'Togo'],[34,'Afghanistan'],[35,'Zambia'],[36,'Cameroon'],[37,'Lesotho'],[38,'Yemen'],[39,'Bangladesh'],[40,'Angola'],[41,'Tanzania'],[42,'Mali'],[43,'Tonga'],[44,'Timor-Leste'],[45,'Bhutan'],[46,'Nigeria'],[47,'Equatorial Guinea'],[48,'Pakistan'],[49,'Cambodia'],[50,'Syria'],[51,'Zimbabwe'],[52,'India'],[53,'Kenya'],[54,'Swaziland'],[55,'S. Tomé & Principe'],[56,'Belize'],[57,'Turkmenistan'],[58,'China'],[59,'Lao P.D.R.'],[60,'Nicaragua'],[61,'Costa Rica'],[62,'Senegal'],[63,'Namibia'],[64,'Lebanon'],[65,'Canada'],[66,'Montserrat'],[67,'Palau'],[68,'Ghana'],[69,'Bolivia'],[70,'Guyana'],[71,'Monaco'],[72,'Cape Verde'],[73,'Iraq'],[74,'San Marino'],[75,'Côte dIvoire'],[76,'Uzbekistan'],[77,'Andorra'],[78,'Puerto Rico'],[79,'Mauritania'],[80,'French Polynesia'],[81,'Benin'],[82,'Mexico'],[83,'Fiji'],[84,'Bosnia and Herzegovina'],[85,'Sri Lanka'],[86,'Turkey'],[87,'Gambia'],[88,'Philippines'],[89,'Tajikistan'],[90,'Egypt'],[91,'New Caledonia'],[92,'Moldova'],[93,'Dominican Rep.'],[94,'United States'],[95,'Mongolia'],[96,'Iran (I.R.)'],[97,'Samoa'],[98,'Georgia'],[99,'Mauritius'],[100,'Indonesia'],[101,'Paraguay'],[102,'Algeria'],[103,'Cyprus'],[104,'Congo'],[105,'Japan'],[106,'Colombia'],[107,'Venezuela'],[108,'Liechtenstein'],[109,'Kyrgyzstan'],[110,'Azerbaijan'],[111,'Greenland'],[112,'Morocco'],[113,'Peru'],[114,'South Africa'],[115,'France'],[116,'Australia'],[117,'Ecuador'],[118,'Latvia'],[119,'Gibraltar'],[120,'Thailand'],[121,'Brazil'],[122,'TFYR Macedonia'],[123,'Slovenia'],[124,'Ireland'],[125,'Korea (Rep.)'],[126,'British Virgin Islands'],[127,'Tunisia'],[128,'Iceland'],[129,'Gabon'],[130,'Jordan'],[131,'Belarus'],[132,'Falkland (Malvinas) Is.'],[133,'Greece'],[134,'Slovak Republic'],[135,'Brunei Darussalam'],[136,'Malta'],[137,'Spain'],[138,'Belgium'],[139,'St. Lucia'],[140,'Romania'],[141,'New Zealand'],[142,'Netherlands'],[143,'Norway'],[144,'Chile'],[145,'Sweden'],[146,'Jamaica'],[147,'Grenada'],[148,'Botswana'],[149,'Ukraine'],[150,'Vanuatu'],[151,'Malaysia'],[152,'Taiwan, Province of China'],[153,'Hungary'],[154,'St. Vincent and the Grenadines'],[155,'Kazakhstan'],[156,'Faroe Islands'],[157,'Aruba'],[158,'Poland'],[159,'Estonia'],[160,'Bahrain'],[161,'Switzerland'],[162,'El Salvador'],[163,'Denmark'],[164,'Bahamas'],[165,'Armenia'],[166,'Honduras'],[167,'Guatemala'],[168,'Germany'],[169,'Barbados'],[170,'Serbia'],[171,'United Kingdom'],[172,'Uruguay'],[173,'Qatar'],[174,'Israel'],[175,'Bermuda'],[176,'Seychelles'],[177,'Bulgaria'],[178,'Czech Republic'],[179,'Trinidad & Tobago'],[180,'Argentina'],[181,'Albania'],[182,'Portugal'],[183,'Luxembourg'],[184,'Croatia'],[185,'Singapore'],[186,'United Arab Emirates'],[187,'Austria'],[188,'Lithuania'],[189,'Italy'],[190,'St. Kitts and Nevis'],[191,'Dominica'],[192,'Anguilla'],[193,'Finland'],[194,'Maldives'],[195,'Kuwait'],[196,'Oman'],[197,'Russia'],[198,'Suriname'],[199,'Libya'],[200,'Viet Nam'],[201,'Cayman Islands'],[202,'Panama'],[203,'Montenegro'],[204,'Saudi Arabia'],[205,'Antigua & Barbuda'],[206,'Hong Kong, China'],[207,'Macao, China'],[208,'Palestinian Authority (Ratio is w/ 2009 data)']]

				var e = $('#container1');
				var plot = $.plot(e, [mobileArray], options);
				 var previousPoint = null;
				    $('#container1').bind("plothover", function (event, pos, item) {
				        $("#x").text(pos.x.toFixed(2));
				        $("#y").text(pos.y.toFixed(2));

				            if (item) {
				                if (previousPoint != item.dataIndex) {
				                    previousPoint = item.dataIndex;

				                    $("#tooltip").remove();
				                    var x = item.datapoint[0].toFixed(0),
				                        y = item.datapoint[1].toFixed(2);

				                    showTooltip(countryNames[x][1] +" "+ y);
				                }
				            }
				    });

				function showTooltip(contents) {
				        $('<div id="tooltip">' + contents + '</div>').css( {
							position: 'relative',
				            display: 'none',
				            border: '1px solid #ccc',
				            padding: '2px',
				            'background-color': '#eee',
				            opacity: 0.80
				        }).appendTo("#graphTooltip").fadeIn(200);
				    }
	
	minZoom = minZoom || 2;
	maxZoom = maxZoom || 10;
	startLat = startLat || 0;
	startLng = startLng || 0;
	var m;	
	wax.tilejson(url, function(tilejson) {
		tilejson.minzoom = minZoom;
		tilejson.maxzoom = maxZoom;
		var mm = com.modestmaps;
		m = new mm.Map(mapContainer,
			new wax.mm.connector(tilejson));
	
	wax.mm.interaction(m, tilejson, {
	  callbacks:
				{	// Show a tooltip.
					over: function(feature, context) {
						if(feature){
						var jFeature = $(feature)[0]
						for(country in countryNames){
							if($(jFeature).text() == countryNames[country][1]){
								plot.highlight(0, countryNames[country][0]);
								$("#tooltip").remove();
								showTooltip(countryNames[country][1]+" "+mobileArray[country][1]);
								break;
								}
							}
						}
					},
					out: function(context) {
						plot.unhighlight();
						$("#tooltip").remove();
					}
				}
			});
			
    wax.mm.interaction(m, tilejson);
	wax.mm.legend(m, tilejson).appendTo(m.parent);
	wax.mm.zoomer(m, tilejson).appendTo(m.parent);	
	m.setCenterZoom(new mm.Location(startLat, startLng), minZoom);
	});
}; //end newWaxMap