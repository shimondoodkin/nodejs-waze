require.paths.unshift(__dirname+'/../'); //my moduls path
var jsdom  = require("jsdom/lib/jsdom"),
    xhrCompat  = require("node-XMLHttpRequest/XMLHttpRequest.js"),
    window = jsdom.jsdom('<html><head>'+
    '<script src="'+"file://"+__dirname+"/jquery-1.4.2.min.js"+'">jstext</script>' +
//    '<script src="'+"file://"+__dirname+"/wazeconfig.js"+'">jstext</script>' +
//    '<script src="'+"file://"+__dirname+"/WazeEmbeddedMapNoJQuery.js"+'">jstext</script>' +
//    '<script src="'+"file://"+__dirname+"/runinit.js"+'">jstext</script>' +
    '<script src="'+"file://"+__dirname+"/all.js"+'">jstext</script>' +
    '</head><body><div id="map" style="height:231px;width:217px">mapa</div></body></html>').createWindow();
    window.XMLHttpRequest=xhrCompat.XMLHttpRequest;
    window.Function=Function;
    window.console=console;
    window.onload2=function (){
    
     //console.log(window.jQuery.fn.jquery);

     console.log(window.jQuery("#map")[0].innerHTML);
     // console.log(window.g_waze_map)
    };
    
    window.waze_found=function (address){
     //console.log(address);
     // console.log(window.g_waze_map)
    };
    
    //jsdom.jQueryify(window, "file://"+__dirname+"/jquery-1.4.2.min.js", function()
    //{
    // console.log(window.jQuery.fn.jquery);
    // window.jQuery('script').each( function (k,item){ item.load(); } );
     //window.jQuery.ready();
     //console.log(require('sys').inspect(window.jQuery('script')[1]));
     //window.jQuery('body').append("<div class='testing'>Hello World, It works!</div>");
     //sys.puts(window.jQuery(".testing").text());
    //});
 
    //console.log(window.jQuery.fn.jquery);
    // outputs: 1.4.2
    //console.log(window).jQuery("#map").text());
    //window.jQuery.ready();
    
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(7200);
console.log('Server running at http://127.0.0.1:8124/');
*/