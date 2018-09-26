if(typeof(dojo) != "undefined") {
	require(["dojo/domReady!"], function(){
        try {
            var bottone = dojo.query("#createPlaceButton").style("visibility", "hidden");
                } catch(e) {
          alert("Exception occurred in helloWorld: " + e);
      }
   });
}
