var VueScores = (function () {

    var pageScores = document.getElementById("page-scores").innerHTML;

    return function () {

        this.afficher = function (tableauGagnants) {

            console.log("affichageVueScore()");
       
            document.getElementById("contenu").innerHTML = pageScores;
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [tableauGagnants[1].pseudo, tableauGagnants[0].pseudo, tableauGagnants[2].pseudo],
                    datasets: [{
                        label: 'Nombre de victoires',
                        data: [tableauGagnants[1].nb_victoire, tableauGagnants[0].nb_victoire, tableauGagnants[2].nb_victoire],
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