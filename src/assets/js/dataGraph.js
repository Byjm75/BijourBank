// <block:setup:1>
const datapoints = [1200, 750, 775, 760, 2560];
const DATA_COUNT = datapoints.length;
const labels = [];
for (let i = 1; i < DATA_COUNT + 1; ++i) {
  labels.push(i.toString());
}
const data = {
  labels: labels,
  datasets: [
    {
      label: "Solde",
      data: datapoints,
      borderColor: "purple",
      fill: false,
      cubicInterpolationMode: "monotone",
    }
  ],
};
// </block:setup>

// <block:config:0>
const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: false,
        text: "Courbe de vos opérations",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};

/*Le contexte du canevas HTML */
const context = document.getElementById("myChart").getContext("2d"); // ajout du const
/* Création du graphique */
const chart = new Chart(context, config); // ajout du const

/* Générer des données aléatoires */
function generateData() {
  let randomSold = (Math.random() * Math.floor(3000)).toFixed(2); // Deux chiffres après la virgule
  let lastDataLabel = data.labels[data.labels.length - 1];
  let operationNumber = (parseInt(lastDataLabel) + 1).toString();
  addOperation(operationNumber, randomSold);
}

function addOperation(operationNumber, newSold) {
  /* Ajoute la valeur en X */
  config.data.labels.push(operationNumber);
  console.log(data.labels)
  /* Ajoute le numéro de l'opération

  /* Ajoute la valeur */
  config.data.datasets[0].data.push(newSold);
  /* Ajoute le nouveau solde dans le tableau */

  /* Rafraichir le graphique */
  chart.update();
}

generateData();
generateData();
generateData();
generateData();

