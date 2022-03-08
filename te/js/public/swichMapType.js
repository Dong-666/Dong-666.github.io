import {
  centerMap,
  centerMapOption,
  worldVirus,
  chinaVirus,
} from '../chartsInitData/centerMapInit.js';

let btn = document.querySelector('#switchMapType');
let mapType = 'world';
btn.addEventListener('click', () => {
  if (mapType == 'world') {
    centerMapOption.series[0]['mapType'] = 'china';
    resetMapOption(centerMap, centerMapOption, chinaVirus, 10000);
    mapType = 'china';
  } else if (mapType == 'china') {
    centerMapOption.series[0]['mapType'] = 'world';
    resetMapOption(centerMap, centerMapOption, worldVirus, 500000);
    mapType = 'world';
  }
});

function resetMapOption(chart, option, data, visualMapMax) {
  option['visualMap']['max'] = visualMapMax;
  data.length == 0 && alert('数据加载失败');
  option.series[0]['data'] = data;
  chart.clear();
  chart.setOption(centerMapOption);
}
