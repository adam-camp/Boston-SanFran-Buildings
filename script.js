require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Legend, LayerList, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
          -71.045, // lon
          42.350, // lat
          14000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
  
    view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = scene.layers.getItemAt(1);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "Major project buildings"
          }]
         }); 
       
   view.ui.add(legend, "bottom-right");
      
      var layerList = new LayerList({
  view: view
});
      view.ui.add(layerList, "bottom-left");
      
   });
   
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-right");
    
    [v1, v2, v3, v4].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    v1.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -70.95,
          y: 42.25,
          z: 5000
        },
        tilt: 70,
        heading: 320
      });
    });
      
     v2.addEventListener('click', function() {
            view.goTo({
        position: {
          x: -71.23,
          y: 42.342,
          z: 1500
        },
        tilt: 80,
        heading: 90
      });
    });
   

    
     v3.addEventListener('click', function() {
            view.goTo({
        position: {
          x: -70.955,
          y: 42.345,
          z: 1500
        },
        tilt: 80,
        heading: 270
      });
    });
  
       v4.addEventListener('click', function() {
           view.goTo({
        position: {
          x: -122.45,
          y: 37.75,
          z: 40000
        },
        tilt: 0,
        heading: 0
      });
    });
      
     });
