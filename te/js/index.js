//左上模块
(function() {
    //初识化ECharts
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //指定配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true //是否将文字标注也算进去
        },
        // X轴
        xAxis: [{
            type: "category", //X轴类型
            data: [
                "湖北",
                "广东",
                "江西",
                "北京",
                "上海",
                "河北",
                "浙江"
            ],
            //刻度
            axisTick: {
                alignWithLabel: true
            },
            //刻度标签
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12'
                }
            },
            //刻度线
            axisLine: {
                show: false
            }
        }],
        // y轴
        yAxis: [{
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12'
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                    // width: 1,
                    // type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        //图表中心内容
        series: [{
            name: "直接访问",
            type: "bar",
            barWidth: "35%",
            // fontSize: '8',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };
    //配置项设置给ECarts实例对象
    myChart.setOption(option);
    //图表跟随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 学习进度柱状图模块
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    var data = [70, 34, 60, 78, 69];
    var titlename = ["中国", "美国", "日本", "伊朗", "意大利"];
    var valdata = [702, 350, 610, 793, 664];
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    option = {
        //图表位置（网格）
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        //X轴
        xAxis: {
            show: false //取消显示x轴（包括竖线）
        },
        //y轴
        yAxis: [{
                show: true, //显示y轴
                data: titlename, //类目数据
                inverse: true, //反向坐标轴
                axisLine: { //坐标轴线
                    show: false
                },
                splitLine: { //分割线
                    show: false
                },
                axisTick: { //坐标轴刻度
                    show: false
                },
                axisLabel: {
                    color: "#fff", //标注字体颜色    
                    rich: { //富文本样式
                        lg: {
                            backgroundColor: "#391",
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 15
                        }
                    }
                }
            },
            //定义右侧y坐标轴
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [{
                name: "条",
                type: "bar", //类型
                yAxisIndex: 0, //使用的 y 轴的 index，bar的基部位置
                data: data,
                barCategoryGap: 50,
                barWidth: 10, //bar宽度
                itemStyle: { //图形样式
                    normal: {
                        barBorderRadius: 20, //数据条圆角
                        //定义函数分配每个数据值的颜色，不知道%num啥意思
                        color: function(params) {
                            // var num = myColor.length;
                            // console.log(params);
                            // return myColor[params.dataIndex % num]
                            return myColor[params.dataIndex]
                        }
                    }
                },
                label: { //标签
                    normal: {
                        show: true,
                        position: "inside", //标签位置
                        formatter: "{c}%" //数值
                    }
                }
            },
            //第二个图形
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: "none", //去掉填充颜色
                        borderColor: "#00c1de",
                        borderWidth: 3, //边框宽度
                        barBorderRadius: 15
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
//折线图模块
(function() {
    var myChart = echarts.init(document.querySelector('.line .chart'))
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        //图例模块
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //去除刻度
            axisTick: {
                show: false
            },
            //修改刻度标签颜色
            axisLabel: {
                color: "white"
            },
            //去除x坐标轴
            axisLine: {
                show: false
            },
            boundaryGap: false // 去除轴内间距

        },
        yAxis: {
            type: 'value',
            //去除y轴刻度
            axisTick: {
                show: false
            },
            //修改刻度标签颜色
            axisLabel: {
                color: "white"
            },
            //修改y轴分割线颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        // 图表数据
        series: [{
                name: '现存确诊',
                type: 'line',
                stack: '总量',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                smooth: true

            },
            {
                name: '累计确诊',
                type: 'line',
                stack: '总量',
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
                smooth: true

            }
        ]
    };
    // 把配置和数据给实例对象
    myChart.setOption(option);


    window.addEventListener('resize', function() {
        myChart.resize()
    })
})();
//折线图2模块
(function() {
    var myChart = echarts.init(document.querySelector(".line1 .chart"))
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        //图例
        legend: {
            top: "0%",
            //图例字体样式
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        // 坐标系
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            //文字标注算入
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
            // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            },
        }],
        yAxis: [{
            type: 'value',
            //隐藏坐标轴刻度
            axisTick: { show: false },
            //标注y轴线样式
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            //标注文本
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            // 修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        //主题样式设计
        series: [{
                name: '新增确诊',
                type: 'line',
                // stack: '总量', //数据堆叠
                data: [220, 182, 191, 234, 290, 330, 310],
                //线圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充区域
                areaStyle: {
                    // 渐变色
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)" //阴影颜色
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                //开始不显示坐标圆点
                showSymbol: false,
            },
            {
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                name: "新增死亡",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [120, 132, 101, 134, 90, 230, 210],
                // stack: '总量',
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
//饼状图1模块
(function() {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [{
            name: '确诊病例',
            type: 'pie',
            //设置饼状图在容器中的位置，这里和带有坐标系的图不一样
            center: ["50%", "50%"],
            //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    // show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            //不显示连接线
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: '广东' },
                { value: 310, name: '武汉' },
                { value: 234, name: '北京' },
                { value: 135, name: '浙江' },
                { value: 1548, name: '江苏' }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
//饼状图2模块
(function() {
    var myChart = echarts.init(document.querySelector(".pie1 .chart"))
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        series: [{
            name: '面积模式',
            type: 'pie',
            //饼图大小
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            //饼图显示模式area面积模式radius半径模式
            roseType: 'radius',
            // 文本标签控制饼形图文字的相关样式
            label: {
                fontSize: 10
            },
            // 引导线调整
            labelLine: {
                // 连接扇形图线长
                length: 6,
                // 连接文字线长
                length2: 8
            },
            data: [
                { value: 10, name: '广东' },
                { value: 5, name: '北京' },
                { value: 15, name: '武汉' },
                { value: 25, name: '浙江' },
                { value: 20, name: '上海' },
                { value: 35, name: '江苏' },
                { value: 30, name: '云南' },
                { value: 40, name: '河北' }
            ]
        }]
    };

    myChart.setOption(option)
    window.addEventListener('resize', function() {
        myChart.resize()
    })
})();