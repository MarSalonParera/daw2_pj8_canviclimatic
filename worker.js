<<<<<<< HEAD
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
=======

/* ==========================================================================
           API 6: WEB WORKER (Segon pla)
========================================================================== */
self.onmessage = function(e) {
    console.log("Worker: Processant imatge...");
    
    const dadesImatge = e.data;
    const pixels = dadesImatge.data;
    const amplada = dadesImatge.width;
    const alcada = dadesImatge.height;
    
    // Recorrem píxels (R, G, B, A)
    for (let i = 0; i < pixels.length; i += 4) {
        const vermell = pixels[i];
        const verd = pixels[i + 1];
        const blau = pixels[i + 2];

        // ALGORITME BOIRA TÒXICA
        
        // 1. Brillantor: Més boira en zones clares (cel)
        const brillantor = (vermell + verd + blau) / 3;
        let factor = 0.2 + (brillantor / 255) * 0.65;
        
        // 2. Posició: Menys boira a la part inferior (primer pla)
        const y = Math.floor((i / 4) / amplada);
        const posicioVertical = y / alcada;

        factor = factor * (1 - (posicioVertical * 0.6));
        
        // Apliquem color groc pàl·lid (225, 215, 160)
        pixels[i]     = (vermell * (1 - factor)) + (225 * factor);
        pixels[i + 1] = (verd * (1 - factor)) + (215 * factor);
        pixels[i + 2] = (blau * (1 - factor)) + (160 * factor);
    }

    self.postMessage(dadesImatge);
};
>>>>>>> 59dc9f95b80755676dafd37a258be021e11505dc
