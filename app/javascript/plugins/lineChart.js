// Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#858796';

const initChartLine = () => {
  var ctx = document.getElementById('myChart');
  if (ctx) {
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2005", "2007", "2009", "2011", "2013", "2015", "2017", "2019"],
        datasets: [{
            label: "Data",
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [378.21, 382.67, 386.63, 391.03, 395.40, 399.73, 405.75, 411.84]
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
                        return value + " " + 'ppm';
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

export { initChartLine }
