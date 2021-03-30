let labels1 = ['Yes', 'Maybe Yes', 'Maybe No', 'No'];
let data1 = [50, 25, 12.5, 12.5];
let colors1 = ['#3399FF', '#663399', '#33FF99', '#FFCC00'];

let mychart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(mychart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "How many students answered Yes, Maybe Yes, Maybe No and No",
            display: true
        }
    }
});

let labels2 = ['The question was too easy', 'The questions were moderate', 'The allocated time was not sufficient', 'The questions were difficult'];
let data2 = [25, 50, 100, 65];
let colors2 = ['#FF8833', '#6666FF', '#00FF66', '#999900']

let mychart2 = document.getElementById('myChart2').getContext('2d');

let chart2 = new Chart(mychart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "A bar chart showing frequency distribution of explanations",
            display: true
        },
        legend: {
            display: false
        }
    }
})

let labels3 = ['Understanding', 'Memory', 'Speed', 'Problem Solving']
let mychart3 = document.getElementById('myChart3').getContext('2d');


let chart3 = new Chart(mychart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [{
            label: 'Maths Question/MATH#1778',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: '#fff',
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [33, 25, 40, 70] 
        },
        {
            label: 'English Question/ENG#1123',
            fill: true,
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [60, 40, 32, 45]
        }
        ],
        options: {
            title: {
                text: "Radar chart analysis of English Question/ENG#1123 and Maths Question/MATH#1778",
                display: true
            }
        }
    }
})



let label4 = ['Progressing', 'Okay', 'Not okay', 'Retrogressing'];
let colors4 = ['#63bcf4', '#BFF0E2', '#CD84DA', '#E0F463'];
let data4 = [50, 20, 15, 10]

let mychart4 = document.getElementById('myChart4').getContext('2d');

let chart4 = new Chart(mychart4, {
    type: 'pie',
    data: {
        labels: label4,
        datasets: [{
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Pie chart showing overall student performance",
            display: true
        }
    }
})