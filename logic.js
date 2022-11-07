

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
        name: 'future value',
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
    else if ( waterCustomerType == 2 || waterCustomerType == 4 || waterCustomerType == 6) {
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
    else if (sewerCustomerType1 == 1 || sewerCustomerType1 == 2) {

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

        currentUnitRateSewer = 0;
        fy22UnitRateSewer = 0;
        fy23UnitRateSewer = 0;
        fy24UnitRateSewer = 0;
        fy25UnitRateSewer = 0;
        fy26UnitRateSewer = 0;

    }

   
    document.getElementById("resultStartup").style.display = "none";
    document.getElementById("tableResult").style.display = "block";
    let element = document.getElementById("tableResult");
    element.scrollIntoView(1500);

// WaterfixedRow
document.getElementById('waterFixedCurrent').innerHTML = toComma(currentRate);
document.getElementById('waterFixedCurrentTotal').innerHTML = toComma(currentRate);
document.getElementById('waterFixedYear1').innerHTML = toComma(fy22rate);
document.getElementById('waterFixedYear1Total').innerHTML = toComma(fy22rate);
document.getElementById('waterFixedYear2').innerHTML = toComma(fy23rate);
document.getElementById('waterFixedYear2Total').innerHTML = toComma(fy23rate);
document.getElementById('waterFixedYear3').innerHTML = toComma(fy24rate);
document.getElementById('waterFixedYear3Total').innerHTML = toComma(fy24rate);
document.getElementById('waterFixedYear4').innerHTML = toComma(fy25rate);
document.getElementById('waterFixedYear4Total').innerHTML = toComma(fy25rate);
document.getElementById('waterFixedYear5').innerHTML = toComma(fy26rate);
document.getElementById('waterFixedYear5Total').innerHTML = toComma(fy26rate);
// WaterVolumeRow
document.getElementById('waterVolumeCurrent').innerHTML = toComma(currentWaterUnitRate);
document.getElementById('waterVolumeCurrentTotal').innerHTML = toComma(currentWaterUnitRate * waterUsage1);
document.getElementById('waterVolumeYear1').innerHTML = toComma(fy22WaterUnitRate);
document.getElementById('waterVolumeYear1Total').innerHTML = toComma(fy22WaterUnitRate * waterUsage1);
document.getElementById('waterVolumeYear2').innerHTML = toComma(fy23WaterUnitRate);
document.getElementById('waterVolumeYear2Total').innerHTML = toComma(waterUsage1 * fy23WaterUnitRate);
document.getElementById('waterVolumeYear3').innerHTML = toComma(fy24WaterUnitRate);
document.getElementById('waterVolumeYear3Total').innerHTML = toComma(waterUsage1 * fy24WaterUnitRate);
document.getElementById('waterVolumeYear4').innerHTML = toComma(fy25WaterUnitRate);
document.getElementById('waterVolumeYear4Total').innerHTML = toComma(waterUsage1 * fy25WaterUnitRate);
document.getElementById('waterVolumeYear5').innerHTML = toComma(fy26WaterUnitRate);
document.getElementById('waterVolumeYear5Total').innerHTML = toComma(waterUsage1 * fy26WaterUnitRate);
//sewer Customer Fixed row
document.getElementById('sewerFixedCurrent').innerHTML = toComma(currentRateSewer);
document.getElementById('sewerFixedCurrentTotal').innerHTML = toComma(currentRateSewer);
document.getElementById('sewerFixedYear1').innerHTML = toComma(fy22RateSewer);
document.getElementById('sewerFixedYear1Total').innerHTML = toComma(fy22RateSewer);
document.getElementById('sewerFixedYear2').innerHTML = toComma(fy23RateSewer);
document.getElementById('sewerFixedYear2Total').innerHTML = toComma(fy23RateSewer);
document.getElementById('sewerFixedYear3').innerHTML = toComma(fy24RateSewer);
document.getElementById('sewerFixedYear3Total').innerHTML = toComma(fy24RateSewer);
document.getElementById('sewerFixedYear4').innerHTML = toComma(fy25RateSewer);
document.getElementById('sewerFixedYear4Total').innerHTML = toComma(fy25RateSewer);
document.getElementById('sewerFixedYear5').innerHTML = toComma(fy26RateSewer);
document.getElementById('sewerFixedYear5Total').innerHTML = toComma(fy26RateSewer);
//sewer monthly charger
document.getElementById('sewerMonthlyCurrent').innerHTML = toComma(2.87);
document.getElementById('sewerMonthlyCurrentTotal').innerHTML = toComma(2.87);
document.getElementById('sewerMonthlyYear1').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear1Total').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear2').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear2Total').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear3').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear3Total').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear4').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear4Total').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear5').innerHTML = toComma(0.00);
document.getElementById('sewerMonthlyYear5Total').innerHTML = toComma(0.00);

//sewer unit Price
document.getElementById('sewerVolumCurrent').innerHTML = toComma(currentUnitRateSewer);
document.getElementById('sewerVolumCurrentTotal').innerHTML = toComma(currentUnitRateSewer * sewerUsage1);
document.getElementById('sewerVolumYear1').innerHTML = toComma(fy22UnitRateSewer );
document.getElementById('sewerVolumYear1Total').innerHTML = toComma(fy22UnitRateSewer * sewerUsage1);
document.getElementById('sewerVolumYear2').innerHTML = toComma(fy23UnitRateSewer);
document.getElementById('sewerVolumYear2Total').innerHTML = toComma(fy23UnitRateSewer * sewerUsage1);
document.getElementById('sewerVolumYear3').innerHTML = toComma(fy24UnitRateSewer);
document.getElementById('sewerVolumYear3Total').innerHTML = toComma(fy24UnitRateSewer * sewerUsage1);
document.getElementById('sewerVolumYear4').innerHTML = toComma(fy25UnitRateSewer);
document.getElementById('sewerVolumYear4Total').innerHTML = toComma(fy25UnitRateSewer * sewerUsage1);
document.getElementById('sewerVolumYear5').innerHTML = toComma(fy26UnitRateSewer);
document.getElementById('sewerVolumYear5Total').innerHTML = toComma(fy26UnitRateSewer * sewerUsage1);

//Billing total row
let totalCurrent = currentRate + (currentWaterUnitRate * waterUsage1) + currentRateSewer + 2.87 + (currentUnitRateSewer * sewerUsage1);
let totalfy22rate = fy22rate + ( fy22WaterUnitRate* waterUsage1) + fy22RateSewer + (fy22UnitRateSewer * sewerUsage1);
let totalfy23rate = fy23rate + ( fy23WaterUnitRate* waterUsage1) + fy23RateSewer + (fy23UnitRateSewer * sewerUsage1);
let totalfy24rate = fy24rate + ( fy24WaterUnitRate* waterUsage1) + fy24RateSewer + (fy24UnitRateSewer * sewerUsage1);
let totalfy25rate = fy25rate + ( fy25WaterUnitRate* waterUsage1) + fy25RateSewer + (fy25UnitRateSewer * sewerUsage1);
let totalfy26rate = fy26rate + ( fy26WaterUnitRate* waterUsage1) + fy26RateSewer + (fy26UnitRateSewer * sewerUsage1);


document.getElementById('currentBillTotal').innerHTML = toComma(totalCurrent);
document.getElementById('year1BillTotal').innerHTML = toComma(totalfy22rate);
document.getElementById('year2BillTotal').innerHTML = toComma(totalfy23rate);
document.getElementById('year3BillTotal').innerHTML = toComma(totalfy24rate);
document.getElementById('year5BillTotal').innerHTML = toComma(totalfy25rate);
document.getElementById('year4BillTotal').innerHTML = toComma(totalfy26rate);

let totalBillarray = [totalCurrent,totalfy22rate,totalfy23rate,totalfy24rate,totalfy25rate,totalfy26rate]
let yeararray = [1,2,3,4,5];
chart.updateOptions({
    series : [
        { data : [...totalBillarray]
        }
    ],
    xaxis: {
        categories: [...yeararray],
        tickAmount: 6,
    }
});

}
$("#clear").click(function () {
    document.getElementById('waterCustomerType').value = 0;
    document.getElementById('waterSize').value = 0;
    document.getElementById('waterUsage').value = '';
    document.getElementById('sewerCustomerType').value = 0;
    document.getElementById('sewerUsage').value = '';
});

// let waterSizeValueArray =[0,1,2,3,4,5,6,7,8,9];

function createOption() {
let waterCustomerType = document.getElementById("waterCustomerType").value;
    if (waterCustomerType==1){
        document.getElementById("waterSize").innerHTML = "";
        var newOptions = document.getElementById("waterSize");

        var option = document.createElement("option");
        option.text = "Select size";
        option.value="0";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "5/8";
        option.value="1";
        newOptions.add(option);
        

        var option = document.createElement("option");
        option.text = "3/4";
        option.value="2";
        newOptions.add(option);
        

        var option = document.createElement("option");
        option.text = "1";
        option.value="3";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "1 1/2";
        option.value="4";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "TWO";
        option.value="5";
        newOptions.add(option);

    }
    else if (waterCustomerType==2){       
         document.getElementById("waterSize").innerHTML = "";
        var newOptions = document.getElementById("waterSize");
        
        var option = document.createElement("option");
        option.text = "Select size";
        option.value="0";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "5/8";
        option.value="1";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "3/4";
        option.value="2";
        newOptions.add(option);

    }
    else if (waterCustomerType== 3 || waterCustomerType==4 )
    {
        document.getElementById("waterSize").innerHTML = "";
        var newOptions = document.getElementById("waterSize");

        var option = document.createElement("option");
        option.text = "Select size";
        option.value="0";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "5/8";
        option.value="1";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "3/4";
        option.value="2";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "1";
        option.value = "3";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "1 1/2";
        option.value = "4";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "TWO";
        option.value = "5";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "Three";
        option.value = "6";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "Four";
        option.value = "7";
        newOptions.add(option);
    }
    else if (waterCustomerType==5 || waterCustomerType==6){
        document.getElementById("waterSize").innerHTML = "";
        var newOptions = document.getElementById("waterSize");
        
        var option = document.createElement("option");
        option.text = "Select size";
        option.value = "0";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "5/8";
        option.value = "1";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "3/4";
        option.value = "2";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "1";
        option.value = "3";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "1 1/2";
        option.value = "4";
        newOptions.add(option);

        var option = document.createElement("option");
        option.text = "TWO";
        option.value = "5";
        newOptions.add(option);
        
        var option = document.createElement("option");
        option.text = "Three";
        option.value = "6";
        newOptions.add(option);
        
        var option = document.createElement("option");
        option.text = "Four";
        option.value = "7";
        newOptions.add(option);
        
        var option = document.createElement("option");
        option.text = "Six";
        option.value = "8";
        newOptions.add(option);
        
        var option = document.createElement("option");
        option.text = "Eight";
        option.value = "9";
        newOptions.add(option);

    }
    else if (waterCustomerType==0)
    {
        document.getElementById("waterSize").innerHTML = "";
        var option = document.createElement("option");
        option.text = "Select size";
        option.value = "0";
        newOptions.add(option);
    }
  }











let toComma = (x) => "$ " + x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
