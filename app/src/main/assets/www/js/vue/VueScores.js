var VueScores = (function () {

    var pageScores = document.getElementById("page-scores").innerHTML;

    return function () {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageScores;
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Second", "Premier", "Troisième"],
                    datasets: [{
                        label: 'Nombre de victoires',
                        data: [12, 19, 9],
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