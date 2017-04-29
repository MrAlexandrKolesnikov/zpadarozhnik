
function onLoad()
{
    var viewer = new Cesium.Viewer('cesiumContainer', {
        //Use standard Cesium terrain

        //Hide the base layer picker
        baseLayerPicker : false,
        timeLine:false,
        navigationInstructionsInitiallyVisible:false,
        fullscreenButton:false,
        baseLayerPicker:false,
        sceneModePicker:false,
        animation : false,
        homeButton:false,
        geocoder:false,
        scene3DOnly:true,
        shadows:false,
        skyBox : new Cesium.SkyBox({
            sources : {
                positiveX : '/img/bg/4.png',
                negativeX : '/img/bg/1.png',
                positiveY : '/img/bg/5.png',
                negativeY : '/img/bg/2.png',
                positiveZ : '/img/bg/6.png',
                negativeZ : '/img/bg/3.png'
            }
        }),
        skyAtmosphere:false,
        mapProjection : new Cesium.WebMercatorProjection(),
    });

    //Add basic drag and drop functionality
    var tms = new Cesium.UrlTemplateImageryProvider({
        url : '/img/map/{z}/{x}/{y}.png',
        maximumLevel : 4
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
    viewer.scene.sun.destroy();
    viewer.scene.moon.destroy();
    viewer.infoBox.frame.removeAttribute('sandbox');
}

