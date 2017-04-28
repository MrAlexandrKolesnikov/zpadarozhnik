
function onLoad()
{
    var viewer = new Cesium.Viewer('cesiumContainer', {
        //Use standard Cesium terrain

        //Hide the base layer picker
        baseLayerPicker : false,
        timeline:false,
        navigationInstructionsInitiallyVisible:false,
        fullscreenButton:false,
        baseLayerPicker:false,
        sceneModePicker:false,
        animation : false,
        homeButton:false,
        navigationHelpButton:false,
        geocoder:false,
        scene3DOnly:true,
        skyBox : new Cesium.SkyBox({
            sources : {
                positiveX : '/img/bg/bg.jpg',
                negativeX : '/img/bg/bg.jpg',
                positiveY : '/img/bg/bg.jpg',
                negativeY : '/img/bg/bg.jpg',
                positiveZ : '/img/bg/bg.jpg',
                negativeZ : '/img/bg/bg.jpg'
                /*positiveX : '/img/bg/bg.png',
                 negativeX : '/img/bg/bg.png',
                 positiveY : '/img/bg/bg.png',
                 negativeY : '/img/bg/bg.png',
                 positiveZ : '/img/bg/bg.png',
                 negativeZ : '/img/bg/bg.png'*/
            }
        }),
        skyAtmosphere:false,
        // Show Columbus View map with Web Mercator projection
        mapProjection : new Cesium.WebMercatorProjection()
    });

    //Add basic drag and drop functionality
    var tms = new Cesium.UrlTemplateImageryProvider({
        url : '/img/map/{z}/{x}/{y}.png',
        credit : '© Analytical Graphics, Inc.',
        maximumLevel : 5
    });
    viewer.imageryLayers.addImageryProvider(tms);
    viewer.extend(Cesium.viewerDragDropMixin);
    viewer.dataSources.add(Cesium.CzmlDataSource.load('/Cesium/sample9.czml'));
    viewer.dataSources.add(Cesium.CzmlDataSource.load('/Cesium/sample8.czml'));
    //Show a pop-up alert if we encounter an error when processing a dropped file
    viewer.dropError.addEventListener(function(dropHandler, name, error) {
        console.log(error);
        window.alert(error);
    });
}

