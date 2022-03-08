import { WorldData } from '../public/netSource.js';
import initRightData from '../charts/right.js';
import initChart from '../charts/initChart.js';

WorldData.then(data => {
  // 全球疫情确诊图模块
  // 数据初始化
  let virus = [['Country', 'Confirmed']];
  let num = data.data.WomAboard;
  for (let i = 0; i < 15; i++) {
    virus.push([num[i].name, num[i].confirm]);
  }

  let rightChart = initRightData(virus);
  initChart('.bar1 .chart', rightChart);
});
