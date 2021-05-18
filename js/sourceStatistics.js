// 分类统计1
var pieOne = echarts.init(document.getElementById('type_one'));
// 分类统计1
var typeOne = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        right:'0',
        top:'80%',
        orient:'vertical',
        padding: [5, 8]
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: true,
            position: 'inner',
            formatter: '{c}',
            color:'#fff'
        },
        // emphasis: {
        // 	label: {
        // 		show: true,
        // 		fontSize: '40',
        // 		fontWeight: 'bold'
        // 	}
        // },
        labelLine: {
            show: false
        },
        data: [{
                value: 190,
                name: '类目01'
            },
            {
                value: 339,
                name: '类目02'
            },
            {
                value: 256,
                name: '类目03'
            },
            {
                value: 971,
                name: '类目04'
            },
            {
                value: 765,
                name: '类目05'
            }
        ]
    }]
};
// 分类统计2
var pieTwo = echarts.init(document.getElementById('type_two'));
// 分类统计2
var typeTwo = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        right:'0',
        top:'80%',
        orient:'vertical',
        padding: [5, 8]
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: true,
            position: 'inner',
            formatter: '{c}',
            color:'#fff'
        },
        // emphasis: {
        // 	label: {
        // 		show: true,
        // 		fontSize: '40',
        // 		fontWeight: 'bold'
        // 	}
        // },
        labelLine: {
            show: false
        },
        data: [{
                value: 190,
                name: '类目01'
            },
            {
                value: 339,
                name: '类目02'
            },
            {
                value: 256,
                name: '类目03'
            },
            {
                value: 971,
                name: '类目04'
            },
            {
                value: 765,
                name: '类目05'
            }
        ]
    }]
};
// 阶段统计1
var levelOne = echarts.init(document.getElementById('level_one'));
// 阶段统计1
var pieThree = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        right:'0',
        top:'80%',
        orient:'vertical',
        padding: [5, 8]
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: true,
            position: 'inner',
            formatter: '{c}',
            color:'#fff'
        },
        // emphasis: {
        // 	label: {
        // 		show: true,
        // 		fontSize: '40',
        // 		fontWeight: 'bold'
        // 	}
        // },
        labelLine: {
            show: false
        },
        data: [{
                value: 190,
                name: '类目01'
            },
            {
                value: 339,
                name: '类目02'
            },
            {
                value: 256,
                name: '类目03'
            },
            {
                value: 971,
                name: '类目04'
            },
            {
                 value: 765,
                name: '类目05'
            }
        ]
    }]
};
// 阶段统计2
var levelTwo = echarts.init(document.getElementById('level_two'));
// 阶段统计2
var pieFour = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        right:'0',
        top:'80%',
        orient:'vertical',
        padding: [5, 8]
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: true,
            position: 'inner',
            formatter: '{c}',
            color:'#fff'
        },
        // emphasis: {
        // 	label: {
        // 		show: true,
        // 		fontSize: '40',
        // 		fontWeight: 'bold'
        // 	}
        // },
        labelLine: {
            show: false
        },
        data: [{
                value: 190,
                name: '类目01'
            },
            {
                value: 339,
                name: '类目02'
            },
            {
                value: 256,
                name: '类目03'
            },
            {
                value: 971,
                name: '类目04'
            },
            {
                value: 765,
                name: '类目05'
            }
        ]
    }]
};
// 使用刚指定的配置项和数据显示图表。
pieOne.setOption(typeOne);
pieTwo.setOption(typeTwo);
levelOne.setOption(pieThree);
levelTwo.setOption(pieFour);
// 学科统计图表
var subject = [
    {'name': '语文','num': 970},
    {'name': '数学','num': 370},
    {'name': '英语','num': 505},
    {'name': '物理','num': 362},
    {'name': '化学','num': 125},
    {'name': '生物','num': 413},
    {'name': '品德','num': 102},
    {'name': '劳动','num': 189},
    {'name': '美学','num': 91},
    {'name': '艺术','num': 688},
    {'name': '天文','num': 217},
    {'name': '体育','num': 545},
    {'name': '心理','num': 541},
    {'name': '劳动','num': 242},
    {'name': '政治','num': 88},
    {'name': '俄语','num': 500},
    {'name': '拉丁语','num': 156},
]
// 获取数组中的最大值 (以最大值为标准 计算百分比)
var maxNum = Math.max.apply(Math, subject.map(function(o) {return o.num}))
$(document).ready(function() { 
    for (let i of subject) { 
      $('.subject_main_left_legend').append('<div class="subject_main_left_legend_data"><div class="left_legend_data_text">'+ i.name +'</div><div class="left_legend_data_info"><div class="left_legend_data_info_color" style="width:'+ i.num/maxNum*100 +'%"></div></div><div class="left_legend_data_num">'+ i.num +'</div></div>'); 
    } 
}); 
// 编组统计图表
// 学科统计图表
var subject = [
    {'name': '语文','num': 970},
    {'name': '数学','num': 370},
    {'name': '英语','num': 505},
    {'name': '物理','num': 362},
    {'name': '化学','num': 125},
    {'name': '生物','num': 413},
    {'name': '品德','num': 102},
    {'name': '劳动','num': 189},
    {'name': '美学','num': 91},
    {'name': '艺术','num': 688},
    {'name': '天文','num': 217},
    {'name': '体育','num': 545},
    {'name': '心理','num': 541},
    {'name': '劳动','num': 242},
    {'name': '政治','num': 88},
    {'name': '俄语','num': 500},
    {'name': '拉丁语','num': 156},
]
// 获取数组中的最大值
var maxNum = Math.max.apply(Math, subject.map(function(o) {return o.num}))
$(document).ready(function() { 
    for (let i of subject) { 
      $('.subject_main_right_legend').append('<div class="subject_main_left_legend_data"><div class="left_legend_data_text">'+ i.name +'</div><div class="left_legend_data_info"><div class="left_legend_data_info_color" style="width:'+ i.num/maxNum*100 +'%"></div></div><div class="left_legend_data_num">'+ i.num +'</div></div>'); 
    } 
}); 