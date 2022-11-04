

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

    let waterCustomerType1 = document.getElementById("waterCustomerType").value;
    let waterSize1 = document.getElementById("waterSize").value;
    let waterUsage1 = document.getElementById("waterUsage").value;
    let sewerCustomerType1 = document.getElementById("sewerCustomerType").value;
    let sewerUsage1 = document.getElementById("sewerUsage").value;

    if (waterCustomerType1 == '0') {
        alert("pleace enter Water Customer Type");
        return false;
    }
    if (waterSize1 == '0') {
        alert("Enter size");
        return false;
    }
    if (waterUsage1.length == 0) {
        alert("Enter Water Usage");
        return false;   }
    if (sewerCustomerType1 == '0') {
        alert("Enter Sewer Customer Type");
        return false;}
    if (sewerUsage1.length == 0) {
        alert("Enter Sewer Usage");
        return false; }


}

let toComma = (x) => "$ " + x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
