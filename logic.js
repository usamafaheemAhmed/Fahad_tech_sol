

$('[data-toggle="tooltip"]').tooltip();

function format(input) {
    var nStr = input.value + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    input.value = x1 + x2;
}
var options = {

    series: [{
        name: 'Investment Value',
        data: []
    }],
    colors: ["#ffb500",],
    chart: {
        height: 600,
        type: 'bar',
        fontFamily: 'Montserrat'
    },
    plotOptions: {
        bar: {
            borderRadius: 0,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: false,
        formatter: function (val) {
            return toComma(val);
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: [],

        tooltip: {
            enabled: true,
        }
    },
    yaxis: {

        labels: {
            show: true,
            formatter: function (value) {
                return toComma(value);

            }
        }

    },
};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();


function calculate() {

    let waterCustomerType = document.getElementById("waterCustomerType").value;
    let waterSize1 = document.getElementById("waterSize").value;
    let waterUsage1 = document.getElementById("waterUsage").value;
    let sewerCustomerType1 = document.getElementById("sewerCustomerType").value;
    let sewerUsage1 = document.getElementById("sewerUsage").value;


    if (waterCustomerType == 0) {
        alert("pleace enter Water Customer Type");
        return false;
    }
    else if(waterCustomerType == 1){
            alert(waterCustomerType);
    }
    else if(waterCustomerType == 2){
        alert(waterCustomerType);
    }
    else if(waterCustomerType == 3){
        alert(waterCustomerType);
    }
    else if(waterCustomerType == 4){
        alert(waterCustomerType);
    }
    else if(waterCustomerType == 5){
        alert(waterCustomerType);
    }
    else if(waterCustomerType == 6){
        alert(waterCustomerType);
    }

    if (waterSize1 == 0) {
        alert("Enter size");
        return false;
    }
    else if (waterSize1==1){
        alert(waterSize1);
    }
    else if (waterSize1==2){
        alert(waterSize1);
    }
    else if (waterSize1==3){
        alert(waterSize1);
    }
    else if (waterSize1==4){
        alert(waterSize1);
    }
    else if (waterSize1==5){
        alert(waterSize1);
    }
    else if (waterSize1==6){
        alert(waterSize1);
    }
    else if (waterSize1==7){
        alert(waterSize1);
    }
    else if (waterSize1==8){
        alert(waterSize1);
    }
    else if (waterSize1==9){
        alert(waterSize1);
    }

    if (waterUsage1.length == 0) {
        alert("Enter Water Usage");
        return false;
    }

    if (sewerCustomerType1 == 0) {
        alert("Enter Sewer Customer Type");
        return false;
    }
    else if (sewerCustomerType1==1){
        alert(sewerCustomerType1);
    }
    else if (sewerCustomerType1==2){
        alert(sewerCustomerType1);
    }
    else if (sewerCustomerType1==3){
        alert(sewerCustomerType1);
    }
    else if (sewerCustomerType1==4){
        alert(sewerCustomerType1);
    }
    else if (sewerCustomerType1==5){
        alert(sewerCustomerType1);
    }
    
    if (sewerUsage1.length == 0) {
        alert("Enter Sewer Usage");
        return false;
    }

    // if ((waterCustomerType1 == '1') && (waterSize1 == '1')) {
    //     let table2Row = document.getElementById("table1").rows[2].cells; 
    //     table2Row[1].innerHTML = 30.28;
    //     table2Row[2].innerHTML = 30.28;
    //     table2Row[3].innerHTML = 34.11;
    //     table2Row[4].innerHTML = 34.11;
    //     table2Row[5].innerHTML = 37.52;
    //     table2Row[6].innerHTML = 37.52;
    //     table2Row[7].innerHTML = 41.28;
    //     table2Row[8].innerHTML = 41.28;
    //     table2Row[9].innerHTML = 45.4;
    //     table2Row[10].innerHTML = 45.4;
    //     table2Row[11].innerHTML = 49.04;
    //     table2Row[12].innerHTML = 49.04;
    //     alert(waterUsage1);
    //     let table3Row = document.getElementById("table1").rows[3].cells;
    //     // let waterUsagerate = waterUsage1 * 2.64;
    //     alert("ok=" + waterUsagerate + 'table value=' + table3Row);
    //     table3Row[1].innerHTML = '2.64';
    //     table3Row[2].innerHTML = waterUsage1;
    //     table3Row[1].innerHTML = '2.64';
    //     table3Row[2].innerHTML = waterUsagerate.toFixed(2);
    //     let total=table2Row[2].val+table3Row[2].value;
    //     alert('total'+total);
    //     let table7Row = document.getElementById("table1").rows[7].cells;
    //     table7Row[1].innerHTML=total;

    // }





}
$("#clear").click(function () {
    document.getElementById('waterCustomerType').value = 0;
    document.getElementById('waterSize').value = 0;
    document.getElementById('waterUsage').value = '';
    document.getElementById('sewerCustomerType').value = 0;
    document.getElementById('sewerUsage').value = '';
});

// var xyValues = [
//     {x:50, y:7},
//     {x:60, y:8},
//     {x:70, y:8},
//     {x:80, y:9},
//     {x:90, y:9},
//     {x:100, y:9},
//     {x:110, y:10},
//     {x:120, y:11},
//     {x:130, y:14},
//     {x:140, y:14},
//     {x:150, y:15}
//   ];

//   new Chart("myChart", {
//     type: "scatter",
//     data: {
//       datasets: [{
//         pointRadius: 4,
//         pointBackgroundColor: "rgb(0,0,255)",
//         data: xyValues
//       }]
//     },
//     options: {
//       legend: {display: false},
//       scales: {
//         xAxes: [{ticks: {min: 40, max:160}}],
//         yAxes: [{ticks: {min: 6, max:16}}],
//       }
//     }
//   });

let toComma = (x) => "$ " + x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
