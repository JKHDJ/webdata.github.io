// 立即执行函数，防止变量污染 (function() {})();
function loginorloginout() {
    var indexusername = localStorage.getItem('username');
    if (indexusername == null) {
        location.href = './html/regdetlogin.html'
    } else {

        location.href = './html/regdetlogin.html'
        localStorage.removeItem('username');
    }


    localStorage.getItem('username');
    document.getElementById('welcome').innerHTML = '请登录'

}

// 柱状图模块1
(function() {
    var indexusername = localStorage.getItem('username')

    if (indexusername == null) {
        document.getElementById('welcome').innerHTML = '请登录'
    } else {
        document.getElementById('welcome').innerHTML = '欢迎' + indexusername + '登录'
    }
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项和数据
    var option = {
        title: {
            text: '2023年计算机专业毕业生各个就业方向占比',
            left: 'center',
            top: '0%'
        },
        tooltip: {
            trigger: 'item'
        },

        series: [{
            name: '所占比例',
            type: 'pie',
            radius: '70%',
            top: '40%',
            data: [
                { value: 27.9, name: 'IT软件行业' },
                { value: 10.43, name: '互联网电商行业' },
                { value: 6.8, name: '系统集成行业' },
                { value: 6.4, name: '电信设备行业' },
                { value: 48.47, name: '其他' }
            ],


            itemStyle: {
                normal: {
                    color: function(colors) {
                        var colorList = [
                            '#FFDEAD',
                            '#00FFFF',
                            '#4EEE94',
                            '#FF8080',
                            '#CAF2D7',

                        ];
                        return colorList[colors.dataIndex];
                    }
                },
            }
        }]
    };
    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();

// 柱状图模块2
(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));

    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 2.指定配置项和数据
    var option = {
        title: {
            text: '编程语言热门排行'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: '14%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['PHP', 'Shell', 'R', 'HTML', 'TypeScript', 'Go', 'SQL', 'C#', 'JavaScript', 'C', 'C++', 'Java', 'Python']
        },
        series: [{
                name: '受欢迎程度(ranking)',
                type: 'bar',
                data: [0.1186, 0.1286, 0.1316, 0.139, 0.1794, 0.2157, 0.3397, 0.3973, 0.4638, 0.4641, 0.538, 0.588, 1],
                itemStyle: {
                    normal: {
                        color: '#03A89E'
                    }
                },
            },

        ]
    };
    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();

// 折线图模块1
(function() {
    // 年份对应数据
    var yearData = [{
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];

    var myChart = echarts.init(document.querySelector(".line .chart"));

    var option = {
        title: {
            text: '计算机产业知识产权增长分析'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: '12%',
            data: ['发明专利', '商标', '作品著作权', '软件著作权']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: true,
                interval: 0,
                rotate: -64,
            },

            data: ['2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12', '2024-01']
        },
        yAxis: {
            min: 0,
            max: 15000,
            type: 'value'
        },
        series: [{
                name: '发明专利',
                type: 'line',
                data: [6010, 12587, 12007, 11455, 8799, 8780, 9000, 7549, 13000, 12400, 9099, 1000]
            },
            {
                name: '商标',
                type: 'line',
                data: [6000, 4500, 6000, 7623, 6666, 6510, 6000, 1487, 6111, 6799, 543, 0]
            },
            {
                name: '作品著作权',
                type: 'line',
                data: [8000, 9999, 6000, 4899, 12789, 6230, 7666, 10000, 11899, 12699, 13500, 0]
            },
            {
                name: '软件著作权',
                type: 'line',

                data: [1299, 6500, 3100, 5200, 5100, 2500, 5800, 899, 1100, 4500, 456, 0]
            }
        ]
    };
    myChart.setOption(option);
    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    })

    // 5.点击切换2020 和 2021 的数据
    $('.line h2 a').on('click', function() {
        // console.log($(this).index());
        // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 选中年份高亮
        $('.line h2 a').removeClass('a-active');
        $(this).addClass('a-active');

        // 需要重新渲染
        myChart.setOption(option);
    })
})();

// 折线图模块2
(function() {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));

    var option = {
        title: {
            text: '计算机专业城镇单位就业人员(万人)',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'black',
                width: 5,
                type: 'solid',
                opacity: 1
            }
        },
        xAxis: [{
            type: 'category',
            data: ['2016年', '2017年', '2018年', '2019年', '2020年'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            min: 360.31,
            max: 488.31,
            interval: 25.60,
            type: 'value'
        }],
        series: [{
            name: '人数(万人)',
            type: 'bar',
            barWidth: '60%',
            data: [363.88, 390.32, 420.56, 458.32, 486.9],
            itemStyle: {
                normal: {
                    color: '#F5DEB3'
                }
            }
        }, ]
    };
    myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();

// 饼形图1
(function() {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        title: {
            text: '计算机相关资质企业统计',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '88%',
            left: '0',
        },
        series: [{
            name: '所占比例',
            type: 'pie',
            radius: ['0%', '70%'],
            avoidLabelOverlap: false,

            itemStyle: {

                borderColor: '#fff',
                borderWidth: 2,
                color: function(colors) {
                    var colorList = [
                        '#FFDEAD',
                        '#00FFFF',
                        '#4EEE94',
                        '#FF8080',
                        '#CAF2D7',
                        '#9370DB',
                        '#00BFFF',
                        '#54FF9F',
                        '#ffeb9e'
                    ];
                    return colorList[colors.dataIndex];
                }
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 15,
                    fontWeight: 'bold',

                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 46, name: '高新技术企业认定' },
                { value: 15, name: '创新型中小企业' },
                { value: 8, name: '专精特新' },
                { value: 7, name: '专精特新中小企业' },
                { value: 6, name: '瞪羚企业' },
                { value: 4, name: '团体标准指定企业' },
                { value: 2, name: '国家标准制定企业' },
                { value: 2, name: '民营科技企业' },
                { value: 10, name: '其他' }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();

// 饼形图2
(function() {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {
        color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 0,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 10
            }
        },
        series: [{
            name: '地区分布',
            type: 'pie',
            radius: ["10%", "60%"],
            center: ['50%', '40%'],
            // 半径模式  area面积模式
            roseType: 'radius',
            // 图形的文字标签
            label: {
                fontsize: 10
            },
            // 引导线调整
            labelLine: {
                // 连接扇形图线长(斜线)
                length: 6,
                // 连接文字线长(横线)
                length2: 8
            },
            data: [{
                    value: 26,
                    name: '北京'
                },
                {
                    value: 24,
                    name: '山东'
                },
                {
                    value: 25,
                    name: '河北'
                },
                {
                    value: 20,
                    name: '江苏'
                },
                {
                    value: 25,
                    name: '浙江'
                },
                {
                    value: 30,
                    name: '四川'
                },
                {
                    value: 42,
                    name: '湖北'
                }
            ]
        }]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() {

        myChart.resize();
    })
})();


// 模拟飞行路线地图
(function() {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var data = [
        { name: '广东', value: 232287 },
        { name: '北京', value: 196739 },
        { name: '四川', value: 85422 },
        { name: '江苏', value: 70836 },
        { name: '山东', value: 57747 },
        { name: '浙江', value: 57413 },
        { name: '河南', value: 56286 },
        { name: '上海', value: 43616 },
        { name: '河北', value: 43066 },
        { name: '山西', value: 42099 },
        { name: '湖北', value: 41009 },
        { name: '福建', value: 40009 },
        { name: '陕西', value: 39932 },
        { name: '湖南', value: 35455 },
        { name: '重庆', value: 35000 },
        { name: '安徽', value: 34523 },
        { name: '辽宁', value: 34009 },
        { name: '广西', value: 33999 },
        { name: '云南', value: 33333 },
        { name: '海南', value: 33300 },
        { name: '贵州', value: 28999 },
        { name: '江西', value: 27432 },
        { name: '吉林', value: 27000 },
        { name: '天津', value: 26554 },
        { name: '黑龙江', value: 22347 },
        { name: '内蒙古', value: 22300 },
        { name: '甘肃', value: 21008 },
        { name: '新疆', value: 10000 },
        { name: '宁夏', value: 8504 },
        { name: '青海', value: 6844 },
        { name: '西藏', value: 5300 },
        { name: '香港', value: 3200 },
        { name: '澳门', value: 2500 },
        { name: '台湾', value: 1200 },
        { name: '南海诸岛', value: 10 },
    ];
    var option = {
        title: {
            text: '中国各省份计算机相关企业分布',
            x: 'center',
            top: '4%',
            textStyle: {
                fontSize: 24
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var toolTiphtml = ''
                if (isNaN(params.value)) {
                    toolTiphtml = params.name + '有0家企业'
                } else {
                    toolTiphtml = params.name + '有' + params.value + '家企业'
                }
                return toolTiphtml;
            }
        },
        visualMap: {
            min: 0,
            max: 232287,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#e5f3ff', ' #83aad9', '#003fa3']
            }
        },
        series: [{
            type: 'map',
            map: 'china',
            geoIndex: 0,
            animation: false,
            show: true,
            data: data
        }]
    }
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();