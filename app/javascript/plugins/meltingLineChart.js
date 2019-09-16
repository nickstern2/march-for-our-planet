const initChartLine2 = () => {
  var ctx = document.getElementById('myChart2');
  if (ctx) {
  var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2005", "2007", "2009", "2011", "2013", "2015", "2017", "2019"],
        datasets: [{
            label: "mm",
            borderColor: "red",
            pointBorderColor: "red",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [40.6, 42, 50.8, 55.4, 65.2, 82, 85.3, 94.4]
        }]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: 0,
                    maxTicksLimit: 5,
                    padding: 20,
                    callback: function(value, index, values) {
                        return value + " " + 'mm';
                    }
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 1,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",

                }
            }]
        }
      }
    });
  }
}

export { initChartLine2 }
