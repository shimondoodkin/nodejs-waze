
//var last_searched_address

    
		function map_on_init(g_waze_map) 			//called when map loads
		{
		  console.log('map_on_init done');
	  	g_waze_map.find('יד חרוצים 12','map_find_callback'); //g_waze_map global variable
    }

 function printMap() {
    // fetch the extent and image size
    var mapview = document.getElementById('map').contentWindow.map;
    var layers  = document.getElementById('map').contentWindow.layers;
    var extent  = mapview.getExtent();
        extent  = [extent.left,extent.bottom,extent.right,extent.top].join('+');
    var width   = mapview.getSize().w;
    var height  = mapview.getSize().h;
    // build a comma-joined list of layers
    var activelayers = [];
    for (i in layers) {
      if (!layers[i].getVisibility()) continue;
      if (!layers[i].calculateInRange()) continue;
      activelayers[activelayers.length] = layers[i].params['LAYERS'];
    }
    activelayers = activelayers.join('+');
    // open a window to our pure-Mapserver version
    var url = '/cgi-bin/mapserv?map=/maps/spraywatch2/wms/mapfile.map';
        url += '&mode=map';
        url += '&mapext=' + extent;
        url += '&mapsize=' + width+'+'+height;
        url += '&layers=' + activelayers;
    return url;
  }
  
    function map_find_callback(response)
		{
		  console.log('map_find_callback done');
		 //formatResults(json, $(".search_wrapper:first").eq(0), $("#form_find :input[name=q]").eq(0));
		 if (response!=null&&response.length>0)
     {
        //if (response.length == 1)
        if (response.length >0)
        {
         var location = response[0].location;
         var raw_bounds = response[0].bounds;         
         set_map_location(location, raw_bounds);
         //set_marker(location, response[0].name);
         //save_position(location);
         //inviteMod.invitation.data.t101_map_address = last_searched_address;
        }
        //else
        // formatResults(...)..
		 }
		}
		
		function set_map_location(location, raw_bounds) //markLocation
    {
     var center = null;
     var bounds = new OpenLayers.Bounds();
     if (raw_bounds)
     {
         var bounds = new OpenLayers.Bounds();
         if (g_waze_map.map_info.base_layer_type == "OSM" || g_waze_map.map.getProjection() == "EPSG:900913")
         {
             center = OpenLayers.Layer.SphericalMercator.forwardMercator(lon = location.lon, lat = location.lat);
             bounds.extend(OpenLayers.Layer.SphericalMercator.forwardMercator(raw_bounds.left, raw_bounds.top));
             bounds.extend(OpenLayers.Layer.SphericalMercator.forwardMercator(raw_bounds.right, raw_bounds.bottom));
         }
         else
         {
             center = new OpenLayers.LonLat(lon = location.lon, lat = location.lat);
             bounds.extend(new OpenLayers.LonLat(raw_bounds.left, raw_bounds.top));
             bounds.extend(new OpenLayers.LonLat(raw_bounds.right, raw_bounds.bottom));
         }
         g_waze_map.map.zoomToExtent(bounds, true);
     }
     else
     {
         center = location;
         g_waze_map.map.setCenter(center);
     }
    }
    				
			g_waze_config = {
				div_id:"map",
				locale : "israel",
				center_lon:34.7898,
				center_lat:32.08676,
				zoom:8,
				token:"c80333b2-ea71-4c33-a985-dffb40960a41",
				alt_base_layer:"israel_colors",
				callback:map_on_init,
				init_on_page_load:true
				//framed_cloud_image_url:"http://www.waze.co.il/test_api/cloud.png"
			};
			
			console.log('g_waze_config done');