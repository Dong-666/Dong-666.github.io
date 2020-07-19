    require([
        //require写什么，后面require必须按require的顺序写
        "esri/WebMap",
        // "esri/Map", //地图模块
        "esri/views/MapView", //地图查看器模块
        "esri/layers/FeatureLayer", //要素图层
        // "dojo/domReady!"
        "esri/layers/TileLayer"
    ], function(WebMap,MapView, FeatureLayer,TileLayer) {
        
        //基础底图
        // var map = new Map({
        //     basemap: "streets-night-vector" //底图样式
        // });

        //id号获取底图
        var map = new WebMap({
            portalItem: {
                // id:"00f90f3f3c9141e4bea329679b257142"  //portal
                id: "bf024b8d0b4b48f5a486070214e87c5f" //ArcGIS Online
            }
        });

        // //url获取底图
        // var mapTileLayer = new TileLayer({
        //     url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
        // });
        // // 创建地图Map
        // var map = new Map({
        //     layers: [mapTileLayer]
        //     // basemap: "streets-night-vector" //底图样式
        // });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [116.26, 24.2], // longitude, latitude 地理坐标
            zoom: 3 //缩放程度s
        });

        //添加Traiheads要素图层
        var china = new FeatureLayer({
            url: "http://localhost:6080/arcgis/rest/services/Text/text/MapServer", //url:....../1:行政区图层索引号
            //数组存放标题和内容
            outFields: ["Name", "性别比"],

            //显示路径名称和弹出窗口的字段
            popupTemplate: { // 启动弹出模板
                "title": "{Name}", // 标题名
                "content": "<p>该省性别比为</p> <p>{性别比}。</p>" // 弹出框文本内容
            },
            opacity: .4 //透明程度
        });
        map.add(china);

        // var jiuduanxian = new FeatureLayer({
        //     url: "http://localhost:6080/arcgis/rest/services/Text/text/MapServer/0", //url:....../0:九段线图层索引号
        //     //渲染器（符号样式）
        //     renderer: {
        //         type: "simple",
        //         //符号样式
        //         symbol: {
        //             type: "simple-line", //简单线样式
        //             color: "skyblue", //颜色
        //             width: "2px" //宽度
        //         }
        //     }
        // })
        // map.add(jiuduanxian);

    })