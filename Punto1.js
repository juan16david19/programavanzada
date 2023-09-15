//-----> FUNCIÓN TRADICIONAL <-----

function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
  }
  
  // Coordenadas del planeta NABOO
  const xNaboo = 7;
  const yNaboo = 9;
  
  // Coordenadas del planeta en la ruta N-14 
  const xPlaneta = 5;
  const yPlaneta = 8;
  
  const distancia = calcularDistancia(xNaboo, yNaboo, xPlaneta, yPlaneta);
  
  console.log(`La distancia entre NABOO y el planeta en la ruta N-14 es: ${distancia} UA`);

// -----> FUNCIÓN TIPO FLECHA <-----

/* const calcularDistancia = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));


const xNaboo = 7; 
const yNaboo = 9;


const xPlaneta = 5; 
const yPlaneta = 8;


const distancia = calcularDistancia(xNaboo, yNaboo, xPlaneta, yPlaneta);

console.log(`La distancia entre NABOO y el planeta en la ruta N-14 es: ${distancia} UA`); */

// -----> EJEMPLO DE CLASE <-----

//ENTRADAS
let coordenadaxPlanetaUno=10
let coordenadayPlanetaUno=-50

let coordenadaxPlanetaDos=80
let coordenadayPlanetaDos=0

//PROCESO
let restasCoordenadasx=coordenadaxPlanetaDos-coordenadaxPlanetaUno
let restasCoordenadasy=coordenadayPlanetaDos-coordenadayPlanetaUno

let potenciasX=Math.pow(restasCoordenadasx,2)
let potenciasY=Math.pow(restasCoordenadasy,2)

let sumatoria=potenciasX+potenciasY

//SALIDAS
let distanciaCalculada=Math.sqrt(sumatoria)

console.log("La distancia calculada es: "+distanciaCalculada)
console.log(`La distancia calculada es ${distanciaCalculada}`)
  