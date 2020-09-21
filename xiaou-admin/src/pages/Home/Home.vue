<template>
<!-- 具备宽高的容器 -->
  <div ref="main" style="width: 600px;height:400px;">
  </div>
</template>

<script>
// 引入的echarts
import echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(this.$refs.main);
    console.log("hello")
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 90, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>

<style lang="stylus" scoped></style>