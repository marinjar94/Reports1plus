import React from 'react';
 
export default class Graph extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    var chart = $("#chart").data("kendoChart");
    chart.options.categoryAxis.categories = nextProps.categories;
    chart.options.series[0].data = nextProps.series[0].data;
    chart.options.series[0].name = nextProps.series[0].name;
    chart.refresh();
  }

  componentDidMount() {
    var series = this.props.series;
    var categories= this.props.categories;
    var title=this.props.object;

    $("#chart").kendoChart({
        title: {
            text: "Comparative graph - "+title
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "column",
            stack: false
        },
        series: series,
        valueAxis: {
            line: {
                visible: false
            }
        },
        categoryAxis: {
            categories:categories ,
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0}"
        }
    });

  }
  render() {
    return <div id="chart" />;
  }
}
