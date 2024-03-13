let totalsales_data = []
const cooking_data = [1500, 2200, 1800, 2500, 200, 1500, 2200, 1800, 2500, 200, 1500, 1000];
const cleaning_data = [5500, 3200, 4000, 2100, 380, 5500, 3200, 4000, 2100, 380, 4500, 2700];
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const date = new Date()
const day = date.getDay()
const month = date.getMonth()

function create_new_chart(el, name, type, data, labels) {
    // console.log(labels)
    // let org=labels
    el.width = 400; // Set the width to your desired value
    el.height = 200;
    const colors_for_graph = [
        'rgba(75, 192, 192, 0.9)',
        'rgba(255, 99, 132, 0.9)',
        'rgba(255, 205, 86, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 159, 64, 0.9)',
        'rgba(153, 102, 255, 0.9)'
    ];

    const ordersChart = new Chart(el, {
        type: type,
        data: {
            labels: labels.slice(0, month+1),
            datasets: [{
                label: name,
                data: data,
                backgroundColor: colors_for_graph,
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function charts() {

    for (let i = 0; i < cooking_data.length; i++) {
        totalsales_data.push(cooking_data[i] + cleaning_data[i])
    }


    //for total sales
    const totalSales = document.getElementById('TotalSales');
    let existingChart = Chart.getChart(totalSales);
    if (existingChart) {
        existingChart.destroy();
    }
    create_new_chart(totalSales, 'Total Sales', 'bar', totalsales_data, labels)

    //for cooking 
    const totalcooking = document.getElementById('CookingData');
    existingChart = Chart.getChart(totalcooking);
    if (existingChart) {
        existingChart.destroy();
    }
    create_new_chart(totalcooking, 'Cooking', 'bar', cooking_data, labels)

    //for cleaning

    const totalcleaning = document.getElementById('CleaningData');
    existingChart = Chart.getChart(totalcleaning);
    if (existingChart) {
        existingChart.destroy();
    }
    create_new_chart(totalcleaning, 'Cleaning', 'bar', cleaning_data, labels)

}

function change_chart(name, type) {
    console.log(name, type)
    // if (totalsales_data.length > cooking_data.length)
    //     totalsales_data = totalsales_data.slice(0, cooking_data.length)
    // console.log(totalsales_data)
    const mychart = document.getElementById(name);
    let existingChart = Chart.getChart(mychart);
    if (existingChart) {
        existingChart.destroy();
    }
    if (name === 'TotalSales')
        create_new_chart(mychart, 'Total Sales', type, totalsales_data.slice(0,month+1), labels)
    else if (name === 'CookingData')
        create_new_chart(mychart, 'Cooking Data', type, cooking_data.slice(0,month+1), labels)
    else
        create_new_chart(mychart, 'Cleaning Data', type, cleaning_data.slice(0,month+1), labels)
}

function targetChart() {

    const ctx = document.getElementById('TargetData');
    let existingChart = Chart.getChart(ctx);
    if (existingChart) {
        existingChart.destroy();
    }
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].splice(0, day + 1),
            datasets: [
                {
                    label: 'Cleaning Service',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                    hoverBorderColor: 'rgba(75, 192, 192, 1)',
                    data: [20, 40, 15, 35, 45, 50, 60].splice(0, day + 1),
                },
                {
                    label: 'Cooking Service',
                    backgroundColor: 'rgba(153, 102, 255, 1)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(153, 102, 255, 0.4)',
                    hoverBorderColor: 'rgba(153, 102, 255, 1)',
                    data: [30, 50, 20, 40, 55, 65, 75].splice(0, day + 1),
                },
                {
                    label: 'Target',
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                    hoverBorderColor: 'rgba(255, 99, 132, 1)',
                    data: [50, 80, 40, 70, 85, 100, 110].splice(0, day + 1),
                    type: 'line',
                },
            ],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        },
    });
}

export default { Charts: charts, Change_chart: change_chart, targetChart: targetChart }