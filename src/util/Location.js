export const getLocation=(box,callback)=>{
    var map = new AMap.Map(box, {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 13
    });
    //实例化城市查询类
        var citysearch = new AMap.CitySearch();
    //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;  //地位到的城市
                    var citybounds = result.bounds;  //地图
                    callback(cityinfo);
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                callback(result.info);
            }
        });
}