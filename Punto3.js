//-----> FUNCIÓN TRADICIONAL <-----

function calcularTemperatura(tempMax, tempMin){
    const tempMedia = (tempMax + tempMin)/2;

    return tempMedia;
};

const tempMax = 19;
const tempMin = 16;

const tempMedia = calcularTemperatura(tempMax, tempMin);
console.log(`La temperatura media de la luna de Endor es de °${tempMedia}`)

// -----> FUNCIÓN TIPO FLECHA <-----

/* const calcularTemperatura = (tempMax, tempMin) => (tempMax + tempMin) / 2;

const tempMax = 19;
const tempMin = 16;

const tempMedia = calcularTemperatura(tempMax, tempMin);
console.log(`La temperatura media de la luna de Endor es de ${tempMedia} °C`); */
