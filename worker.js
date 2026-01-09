const missatgesCO2 = [
    "El CO₂ és un dels principals gasos d'efecte hivernacle.",
    "L'activitat humana ha incrementat els nivells de CO₂.",
    "Una bona ventilació redueix l'acumulació de CO₂ en interiors.",
    "La reducció d'emissions ajuda a combatre el canvi climàtic."
];

let index = 0;

setInterval(() => {
    if (index < missatgesCO2.length) {
        postMessage(missatgesCO2[index]);
        index++;
    }
}, 3000);
