var VueScores = (function () {

    var pageScores = document.getElementById("page-scores").innerHTML;

    return function (tableauGagnants) {

        this.afficher = function () {
            document.getElementsById("contenu").innerHTML = pageScores;
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [tableauGagnants[1].pseudo, tableauGagnants[0].pseudo, tableauGagnts[2].pseudo],
                    datasets: [{
                        label: 'Nombre de victoires',
                        data: [tableauGagnants[1].nbVictoires, tableauGagnants[0].nbVictoires, tableauGagnants[2].nbVictoires],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }
    }
})();