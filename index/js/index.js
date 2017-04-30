
var viewer;

function onLoad()
{
    viewer = new Cesium.Viewer('cesiumContainer', {
        //Use standard Cesium terrain

        //Hide the base layer picker
        baseLayerPicker : false,
        timeLine:false,
        navigationInstructionsInitiallyVisible:false,
        fullscreenButton:false,
        baseLayerPicker:false,
        sceneModePicker:false,
        //animation : false,
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
    //viewer.dataSources.add(Cesium.CzmlDataSource.load('/Cesium/sample1.czml'));
    //viewer.dataSources.add(Cesium.CzmlDataSource.load('/Cesium/sample1_1.czml'));
<<<<<<< Updated upstream
    viewer.dataSources.add(Cesium.CzmlDataSource.load('/Cesium/sample8.czml'));
    //viewer.dataSources.add(Cesium.CzmlDataSource.load('/Cesium/json.czml'));
=======
>>>>>>> Stashed changes
    //Show a pop-up alert if we encounter an error when processing a dropped file
    viewer.dropError.addEventListener(function(dropHandler, name, error) {
        console.log(error);
        window.alert(error);
<<<<<<< Updated upstream
    });

    // var pinBuilder = new Cesium.PinBuilder();
    //
    // var bluePin = viewer.entities.add({
    //     description: '<iframe width="400" height="300" src="https://www.youtube.com/embed/ACJJi5re5NU" frameborder="0" allowfullscreen></iframe>',
    //     position : Cesium.Cartesian3.fromDegrees(-75.170726, 39.9208667),
    //     billboard : {
    //         image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
    //         verticalOrigin : Cesium.VerticalOrigin.BOTTOM
    //     }
    // });
    // cos
    //viewer.zoomTo(bluePin);

    viewer.scene.sun.destroy();
    viewer.scene.moon.destroy();
    viewer.infoBox.frame.removeAttribute('sandbox');
=======
    })
    viewer.scene.sun.destroy();
    viewer.scene.moon.destroy();
    var data = Cesium.CzmlDataSource.load('/Cesium/json5.czml');
    viewer.dataSources.add(data);
    viewer.Clock= new Cesium.Clock({
        startTime : Cesium.JulianDate.fromIso8601("1957-01-01"),
        stopTime : Cesium.JulianDate.fromIso8601("2017-01-01"),
        clockRange : Cesium.ClockRange.LOOP_STOP,
        clockStep : Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER
    });
>>>>>>> Stashed changes
}


/*var checkTime = setInterval(function() {
    console.log(viewer.clock.currentTime);
}, 1000);*/

