

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
    document.getElementById("resultStartup").style.display = "none";
    document.getElementById("tableResult").style.display = "block";

    let waterCustomerType = document.getElementById("waterCustomerType").value;
    let waterSize1 = document.getElementById("waterSize").value;
    let waterUsage1 = document.getElementById("waterUsage").value;
    let sewerCustomerType1 = document.getElementById("sewerCustomerType").value;
    let sewerUsage1 = document.getElementById("sewerUsage").value;

    let currentRate = 0;
    let fy22rate = 0;
    let fy23rate = 0;
    let fy24rate = 0;
    let fy25rate = 0;
    let fy26rate = 0;
    if (waterCustomerType == 0) {
        alert("pleace enter Water Customer Type");
        return false;
    }
    else if (waterCustomerType == 1) {

        if (waterSize1 == 1) {
            currentRate = 30.28;
            fy22rate = 34.11;
            fy23rate = 37.52;
            fy24rate = 41.28;
            fy25rate = 45.40;
            fy26rate = 49.04;
        }
        else if (waterSize1 == 2) {
            currentRate = 30.28;
            fy22rate = 34.11;
            fy23rate = 37.52;
            fy24rate = 41.28;
            fy25rate = 45.40;
            fy26rate = 49.04;
        }
        else if (waterSize1 == 3) {
            currentRate = 72.26;
            fy22rate = 81.59;
            fy23rate = 89.75;
            fy24rate = 98.72;
            fy25rate = 108.59;
            fy26rate = 117.28;
        }
        else if (waterSize1 == 4) {
            currentRate = 226.16;
            fy22rate = 160.71;
            fy23rate = 176.78;
            fy24rate = 194.46;
            fy25rate = 213.91;
            fy26rate = 231.02;
        }
        else if (waterSize1 == 5) {
            currentRate = 450.03;
            fy22rate = 255.66;
            fy23rate = 281.23;
            fy24rate = 309.35;
            fy25rate = 340.29;
            fy26rate = 367.51;
        }
        else {
            currentRate = 0;
            fy22rate = 0;
            fy23rate = 0;
            fy24rate = 0;
            fy25rate = 0;
            fy26rate = 0;

        }
    }
    else if (waterCustomerType == 2) {
        if (waterSize1 == 1) {
            currentRate = 45.42;
            fy22rate = 51.17;
            fy23rate = 56.28;
            fy24rate = 61.91;
            fy25rate = 68.10;
            fy26rate = 73.55;
        }
        else if (waterSize1 == 2) {
            currentRate = 45.42;
            fy22rate = 51.17;
            fy23rate = 56.28;
            fy24rate = 61.91;
            fy25rate = 68.10;
            fy26rate = 73.55;
        }
        else if (waterSize1 == 3) {
            currentRate = 108.39;
            fy22rate = 122.38;
            fy23rate = 134.62;
            fy24rate = 148.08;
            fy25rate = 162.89;
            fy26rate = 175.92;
        }
        else {
            currentRate = 0;
            fy22rate = 0;
            fy23rate = 0;
            fy24rate = 0;
            fy25rate = 0;
            fy26rate = 0;

        }

    }
    else if (waterCustomerType == 3) {

        if (waterSize1 == 1) {
            currentRate = 39.85;
            fy22rate = 44.40;
            fy23rate = 48.84;
            fy24rate = 53.73;
            fy25rate = 53.73;
            fy26rate = 63.83;
        }
        else if (waterSize1 == 2) {
            currentRate = 39.85;
            fy22rate = 44.40;
            fy23rate = 48.84;
            fy24rate = 53.73;
            fy25rate = 53.73;
            fy26rate = 63.83;
        }
        else if (waterSize1 == 3) {
            currentRate = 96.17;
            fy22rate = 107.40;
            fy23rate = 118.14;
            fy24rate = 129.96;
            fy25rate = 142.95;
            fy26rate = 154.39;
        }
        else if (waterSize1 == 4) {
            currentRate = 190.05;
            fy22rate = 212.40;
            fy23rate = 212.40;
            fy24rate = 233.64;
            fy25rate = 282.70;
            fy26rate = 305.32;
        }
        else if (waterSize1 == 5) {
            currentRate = 302.70;
            fy22rate = 338.40;
            fy23rate = 372.24;
            fy24rate = 409.46;
            fy25rate = 450.41;
            fy26rate = 486.44;
        }
        else if (waterSize1 == 6) {
            currentRate = 603.09;
            fy22rate = 674.39;
            fy23rate = 741.83;
            fy24rate = 816.01;
            fy25rate = 897.61;
            fy26rate = 969.42;
        }
        else if (waterSize1 == 7) {
            currentRate = 941.04;
            fy22rate = 1052.32;
            fy23rate = 1157.62;
            fy24rate = 1273.38;
            fy25rate = 1400.72;
            fy26rate = 1512.77;
        }
        else {
            currentRate = 0;
            fy22rate = 0;
            fy23rate = 0;
            fy24rate = 0;
            fy25rate = 0;
            fy26rate = 0;

        }

    }
    else if (waterCustomerType == 4) {

        if (waterSize1 == 1) {
            currentRate = 39.85;
            fy22rate = 44.40;
            fy23rate = 48.84;
            fy24rate = 53.73;
            fy25rate = 53.73;
            fy26rate = 63.83;
        }
        else if (waterSize1 == 2) {
            currentRate = 39.85;
            fy22rate = 44.40;
            fy23rate = 48.84;
            fy24rate = 53.73;
            fy25rate = 53.73;
            fy26rate = 63.83;
        }
        else if (waterSize1 == 3) {
            currentRate = 96.17;
            fy22rate = 107.40;
            fy23rate = 118.14;
            fy24rate = 129.96;
            fy25rate = 142.95;
            fy26rate = 154.39;
        }
        else if (waterSize1 == 4) {
            currentRate = 190.05;
            fy22rate = 212.40;
            fy23rate = 212.40;
            fy24rate = 233.64;
            fy25rate = 282.70;
            fy26rate = 305.32;
        }
        else if (waterSize1 == 5) {
            currentRate = 302.70;
            fy22rate = 338.40;
            fy23rate = 372.24;
            fy24rate = 409.46;
            fy25rate = 450.41;
            fy26rate = 486.44;
        }
        else if (waterSize1 == 6) {
            currentRate = 603.09;
            fy22rate = 674.39;
            fy23rate = 741.83;
            fy24rate = 816.01;
            fy25rate = 897.61;
            fy26rate = 969.42;
        }
        else if (waterSize1 == 7) {
            currentRate = 941.04;
            fy22rate = 1052.32;
            fy23rate = 1157.62;
            fy24rate = 1273.38;
            fy25rate = 1400.72;
            fy26rate = 1512.77;
        }
        else {
            currentRate = 0;
            fy22rate = 0;
            fy23rate = 0;
            fy24rate = 0;
            fy25rate = 0;
            fy26rate = 0;

        }

    }
    else if (waterCustomerType == 5) {

        if (waterSize1 == 1) {
            currentRate = 57.05;
            fy22rate = 59.40;
            fy23rate = 65.34;
            fy24rate = 71.87;
            fy25rate = 79.06;
            fy26rate = 85.39;
        }
        else if (waterSize1 == 2) {
            currentRate = 57.05;
            fy22rate = 59.40;
            fy23rate = 65.34;
            fy24rate = 71.87;
            fy25rate = 79.06;
            fy26rate = 85.39;
        }
        else if (waterSize1 == 3) {
            currentRate = 139.18;
            fy22rate = 144.89;
            fy23rate = 159.38;
            fy24rate = 175.32;
            fy25rate = 192.85;
            fy26rate = 208.28;
        }
        else if (waterSize1 == 4) {
            currentRate = 276.05;
            fy22rate = 287.38;
            fy23rate = 316.12;
            fy24rate = 347.73;
            fy25rate = 382.50;
            fy26rate = 413.10;
        }
        else if (waterSize1 == 5) {
            currentRate = 440.31;
            fy22rate = 458.36;
            fy23rate = 504.20;
            fy24rate = 554.62;
            fy25rate = 610.08;
            fy26rate = 658.89;
        }
        else if (waterSize1 == 6) {
            currentRate = 1371.07
                ;
            fy22rate = 1427.28;
            fy23rate = 1570.00;
            fy24rate = 1727.01;
            fy25rate = 1899.71;
            fy26rate = 2051.68;
        }
        else if (waterSize1 == 7) {
            currentRate = 2739.84;
            fy22rate = 2852.15;
            fy23rate = 3137.36;
            fy24rate = 3451.10;
            fy25rate = 3796.21;
            fy26rate = 4099.91;
        }
        else if (waterSize1 == 8) {
            currentRate = 4382.36;
            fy22rate = 4561.99;
            fy23rate = 5018.19;
            fy25rate = 6072.02;
            fy26rate = 6557.78;
        }
        else {
            currentRate = 0;
            fy22rate = 0;
            fy23rate = 0;
            fy24rate = 0;
            fy25rate = 0;
            fy26rate = 0;

        }

    }
    else if (waterCustomerType == 6) {

        if (waterSize1 == 1) {
            currentRate = 57.05;
            fy22rate = 59.40;
            fy23rate = 65.34;
            fy24rate = 71.87;
            fy25rate = 79.06;
            fy26rate = 85.39;
        }
        else if (waterSize1 == 2) {
            currentRate = 57.05;
            fy22rate = 59.40;
            fy23rate = 65.34;
            fy24rate = 71.87;
            fy25rate = 79.06;
            fy26rate = 85.39;
        }
        else if (waterSize1 == 3) {
            currentRate = 139.18;
            fy22rate = 144.89;
            fy23rate = 159.38;
            fy24rate = 175.32;
            fy25rate = 192.85;
            fy26rate = 208.28;
        }
        else if (waterSize1 == 4) {
            currentRate = 276.05;
            fy22rate = 287.38;
            fy23rate = 316.12;
            fy24rate = 347.73;
            fy25rate = 382.50;
            fy26rate = 413.10;
        }
        else if (waterSize1 == 5) {
            currentRate = 440.31;
            fy22rate = 458.36;
            fy23rate = 504.20;
            fy24rate = 554.62;
            fy25rate = 610.08;
            fy26rate = 658.89;
        }
        else if (waterSize1 == 6) {
            currentRate = 878.31;
            fy22rate = 914.32;
            fy23rate = 1005.76;
            fy24rate = 1106.33;
            fy25rate = 1216.96;
            fy26rate = 1314.32;
        }
        else if (waterSize1 == 7) {
            currentRate = 1371.07;
            fy22rate = 1427.28;
            fy23rate = 1570.00;
            fy24rate = 1727.01;
            fy25rate = 1899.71;
            fy26rate = 2051.68;
        }
        else if (waterSize1 == 8) {
            currentRate = 2739.84;
            fy22rate = 2852.15;
            fy23rate = 3137.36;
            fy24rate = 3451.10;
            fy25rate = 3796.21;
            fy26rate = 4099.91;
        }
        else if (waterSize1 == 9) {
            currentRate = 4382.36;
            fy22rate = 4561.99;
            fy23rate = 5018.19;
            fy24rate = 5520.01;
            fy25rate = 6072.02;
            fy26rate = 6557.78;
        }
        else {
            currentRate = 0;
            fy22rate = 0;
            fy23rate = 0;
            fy24rate = 0;
            fy25rate = 0;
            fy26rate = 0;

        }

    }
    else {
        return;
    }


    console.log(currentRate);
    console.log(fy22rate);
    console.log(fy23rate);
    console.log(fy24rate);
    console.log(fy25rate);
    console.log(fy26rate);

    let currentWaterUnitRate = 0;
    let fy22WaterUnitRate = 0;
    let fy23WaterUnitRate = 0;
    let fy24WaterUnitRate = 0;
    let fy25WaterUnitRate = 0;
    let fy26WaterUnitRate = 0;

    if (waterUsage1.length == 0) {
        alert("Enter Water Usage");
        return false;
    }
    else if ((waterCustomerType == 1) || (waterCustomerType == 3) || (waterCustomerType == 5)) {
        currentWaterUnitRate = 2.64;
        fy22WaterUnitRate = 2.75;
        fy23WaterUnitRate = 3.03;
        fy24WaterUnitRate = 3.33;
        fy25WaterUnitRate = 3.66;
        fy26WaterUnitRate = 3.95;
    }
    else if ((waterCustomerType == 2) || (waterCustomerType == 4) || (waterCustomerType == 6)) {
        currentWaterUnitRate = 3.88;
        fy22WaterUnitRate = 4.13;
        fy23WaterUnitRate = 4.54;
        fy24WaterUnitRate = 4.99;
        fy25WaterUnitRate = 5.49;
        fy26WaterUnitRate = 5.93;
    }
    else {
        currentWaterUnitRate = 0;
        fy22WaterUnitRate = 0;
        fy23WaterUnitRate = 0;
        fy24WaterUnitRate = 0;
        fy25WaterUnitRate = 0;
        fy26WaterUnitRate = 0;
    }

    let currentRateSewer = 0;
    let fy22RateSewer = 0;
    let fy23RateSewer = 0;
    let fy24RateSewer = 0;
    let fy25RateSewer = 0;
    let fy26RateSewer = 0;


    if (sewerCustomerType1 == 0) {
        alert("Enter Sewer Customer Type");
        return false;

    }
    else if (sewerCustomerType1 == 1) {

        currentRateSewer = 24.34;
        fy22RateSewer = 27.60;
        fy23RateSewer = 29.81;
        fy24RateSewer = 31.00;
        fy25RateSewer = 32.24;
        fy26RateSewer = 33.53;

    }
    else if (sewerCustomerType1 == 2) {
        currentRateSewer = 19.46;
        fy22RateSewer = 18.53;
        fy23RateSewer = 20.01;
        fy24RateSewer = 20.81;
        fy25RateSewer = 21.64;
        fy26RateSewer = 22.51;
    }
    else {

        currentRateSewer = 24.33;
        fy22RateSewer = 27.60;
        fy23RateSewer = 29.81;
        fy24RateSewer = 31.00;
        fy25RateSewer = 32.24;
        fy26RateSewer = 33.53;

    }

    console.log(currentRateSewer);
    console.log(fy22RateSewer);
    console.log(fy23RateSewer);
    console.log(fy24RateSewer);
    console.log(fy25RateSewer);
    console.log(fy26RateSewer);

    let currentUnitRateSewer = 0;
    let fy22UnitRateSewer = 0;
    let fy23UnitRateSewer = 0;
    let fy24UnitRateSewer = 0;
    let fy25UnitRateSewer = 0;
    let fy26UnitRateSewer = 0;


    if (sewerUsage1.length == 0) {
        alert("Enter Sewer Usage");
        return false;
    }
    else if ((sewerCustomerType1 == 1) || (sewerCustomerType1 == 2)) {

        currentUnitRateSewer = 9.15;
        fy22UnitRateSewer = 6.47;
        fy23UnitRateSewer = 6.99;
        fy24UnitRateSewer = 7.27;
        fy25UnitRateSewer = 7.56;
        fy26UnitRateSewer = 7.86;



    }
    else if (sewerCustomerType1 == 3) {
        currentUnitRateSewer = 9.47
        fy22UnitRateSewer = 8.70
        fy23UnitRateSewer = 9.40
        fy24UnitRateSewer = 9.77
        fy25UnitRateSewer = 10.17
        fy26UnitRateSewer = 10.57
    }
    else if (sewerCustomerType1 == 4) {

        currentUnitRateSewer = 13.72;
        fy22UnitRateSewer = 15.85;
        fy23UnitRateSewer = 17.12;
        fy24UnitRateSewer = 17.81;
        fy25UnitRateSewer = 18.52;
        fy26UnitRateSewer = 19.26;

    }
    else if (sewerCustomerType1 == 5) {


        currentUnitRateSewer = 20.18;
        fy22UnitRateSewer = 25.97;
        fy23UnitRateSewer = 28.05;
        fy24UnitRateSewer = 29.17;
        fy25UnitRateSewer = 30.34;
        fy26UnitRateSewer = 31.55;



    }
    else {

        currentRateSewer = 24.33;
        fy22rateSewer = 27.60;
        fy23rateSewer = 29.81;
        fy24rateSewer = 31.00;
        fy25rateSewer = 32.24;
        fy26rateSewer = 33.53;

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
