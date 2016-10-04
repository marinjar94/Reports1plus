import React from 'react';
 
export default class Graph extends React.Component {
   constructor() {
        super();
        
    }

     

    render() {
        var series = [{
            name: "Total Visits",
            data: [56000, 63000, 74000, 91000, 117000, 138000],

            // Line chart marker type
            markers: { type: "square" }
        }, {
            name: "Unique visitors",
            data: [52000, 34000, 23000, 48000, 67000, 83000]
        }];

        function createChart() {
            $("#chart").kendoChart({
                title: {
                    text: "This should be a title"
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
                    categories: ["Pepsi", "Los Andes", "Sevenup", "Apr", "May", "Jun","Pepsi", "Los Andes", "Sevenup", "Apr", "May", "Jun","Pepsi", "Los Andes", "Sevenup", "Apr", "May", "Jun","Pepsi", "Los Andes", "Sevenup", "Apr", "May", "Jun","Pepsi", "Los Andes", "Sevenup", "Apr", "May", "Jun","Pepsi", "Los Andes", "Sevenup", "Apr", "May", "Jun"],
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

        $(document).ready(function() {
            createChart();
            $(document).bind("kendo:skinChange", createChart);
            $(".options").bind("change", refresh);
        });

        function refresh() {
            var chart = $("#chart").data("kendoChart"),
                type = $("input[name=seriesType]:checked").val(),
                stack = $("#stack").prop("checked");

            for (var i = 0, length = series.length; i < length; i++) {
                series[i].stack = stack;
                series[i].type = type;
            };

            chart.setOptions({
                series: series
            });
        }
    
        return <div id="chart"></div>;
    }
}
