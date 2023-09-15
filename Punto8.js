//-----> FUNCIÓN TRADICIONAL <-----

const planetas = [
    {
      nombrePlaneta: "Tatooine",
      latitud: 23.456,
      longitud: -78.901,
      nivelOxigeno: 12,
      volumenAgua: 500000,
    },
    {
        nombrePlaneta:"Alderaan",
        latitud:80.5,
        longitud:109.10,
        nivelOxigeno:0.21,
        volumenAgua:0.75
    },
    {
        nombrePlaneta:"Death Star",
        latitud:180.5,
        longitud:19.10,
        nivelOxigeno:0.8,
        volumenAgua:0.09
    },
    {
        nombrePlaneta:"Yavin 4",
        latitud:10.5,
        longitud:1.10,
        nivelOxigeno:0.88,
        volumenAgua:0.109
    },
    {
        nombrePlaneta:"Hoth",
        latitud:70.5,
        longitud:9.10,
        nivelOxigeno:0.98,
        volumenAgua:0.9
    }
    ,{
        nombrePlaneta:"Dagobah",
        latitud:0.5,
        longitud:29.10,
        nivelOxigeno:10.8,
        volumenAgua:80.09
    },
    {
        nombrePlaneta:"Cloud City of Bespin",
        latitud:1.5,
        longitud:1.10,
        nivelOxigeno:90.8,
        volumenAgua:20.09
    },
    {
        nombrePlaneta:"Forest Moon of Endor",
        latitud:18.5,
        longitud:19.10,
        nivelOxigeno:0.81,
        volumenAgua:0.92
    },
    {
        nombrePlaneta:"Jakku",
        latitud:600.5,
        longitud:190.10,
        nivelOxigeno:200.8,
        volumenAgua:90.09
    },
    {
        nombrePlaneta:"Starkiller Base",
        latitud:180.5,
        longitud:190.10,
        nivelOxigeno:10.8,
        volumenAgua:90.09
    },
    {
        nombrePlaneta:"Naboo",
        latitud:380.5,
        longitud:199.10,
        nivelOxigeno:50.8,
        volumenAgua:70.09
    },
    {
        nombrePlaneta:"Coruscant",
        latitud:109.5,
        longitud:193.10,
        nivelOxigeno:0.84,
        volumenAgua:0.52
    },
    {
        nombrePlaneta:"Kamino",
        latitud:101.5,
        longitud:1.10,
        nivelOxigeno:3.8,
        volumenAgua:7.09
    },
    {
        nombrePlaneta:"Geonosis",
        latitud:300.5,
        longitud:19.10,
        nivelOxigeno:0.77,
        volumenAgua:0
    },
    {
        nombrePlaneta:"Utapau",
        latitud:200.5,
        longitud:100.10,
        nivelOxigeno:-0.8,
        volumenAgua:0.06
    }
    
    // Agrega los datos de los otros 14 planetas aquí
  ];
  
  // Función para sumar el total de agua de los planetas
  function sumarTotalAgua(planetas) {
    let totalAgua = 0;
    for (const planeta of planetas) {
      totalAgua += planeta.volumenAgua;
    }
    return totalAgua;
  }
  
  // Función para sumar y multiplicar por 100 el total de oxígeno de los planetas
  function calcularTotalOxigeno(planetas) {
    let totalOxigeno = 0;
    for (const planeta of planetas) {
      totalOxigeno += planeta.nivelOxigeno;
    }
    return totalOxigeno * 100;
  }
  
  // Función para encontrar planetas con nivel de oxígeno negativo
  function encontrarPlanetasConOxigenoNegativo(planetas) {
    return planetas.filter((planeta) => planeta.nivelOxigeno < 0);
  }
  
  // Función para encontrar planetas sin agua
  function encontrarPlanetasSinAgua(planetas) {
    return planetas.filter((planeta) => planeta.volumenAgua === 0);
  }
  
  const totalAgua = sumarTotalAgua(planetas);
  const totalOxigeno = calcularTotalOxigeno(planetas);
  const planetasConOxigenoNegativo = encontrarPlanetasConOxigenoNegativo(planetas);
  const planetasSinAgua = encontrarPlanetasSinAgua(planetas);
  
  console.log(`Total de agua en los 15 planetas: ${totalAgua}`);
  console.log(`Total de oxígeno en los 15 planetas multiplicado por 100: ${totalOxigeno}`);
  
  if (planetasConOxigenoNegativo.length > 0) {
    console.log("Planetas con nivel de oxígeno negativo:");
    console.log(planetasConOxigenoNegativo);
  }
  
  if (planetasSinAgua.length > 0) {
    console.log("Planetas sin agua:");
    console.log(planetasSinAgua);
  }

// -----> FUNCIÓN TIPO FLECHA <-----

/* const planetas = [
    {
      nombrePlaneta: "Tatooine",
      latitud: 23.456,
      longitud: -78.901,
      nivelOxigeno: 12,
      volumenAgua: 500000,
    },
    {
        nombrePlaneta:"Alderaan",
        latitud:80.5,
        longitud:109.10,
        nivelOxigeno:0.21,
        volumenAgua:0.75
    },
    {
        nombrePlaneta:"Death Star",
        latitud:180.5,
        longitud:19.10,
        nivelOxigeno:0.8,
        volumenAgua:0.09
    },
    {
        nombrePlaneta:"Yavin 4",
        latitud:10.5,
        longitud:1.10,
        nivelOxigeno:0.88,
        volumenAgua:0.109
    },
    {
        nombrePlaneta:"Hoth",
        latitud:70.5,
        longitud:9.10,
        nivelOxigeno:0.98,
        volumenAgua:0.9
    },
    {
        nombrePlaneta:"Dagobah",
        latitud:0.5,
        longitud:29.10,
        nivelOxigeno:10.8,
        volumenAgua:80.09
    },
    {
        nombrePlaneta:"Cloud City of Bespin",
        latitud:1.5,
        longitud:1.10,
        nivelOxigeno:90.8,
        volumenAgua:20.09
    },
    {
        nombrePlaneta:"Forest Moon of Endor",
        latitud:18.5,
        longitud:19.10,
        nivelOxigeno:0.81,
        volumenAgua:0.92
    },
    {
        nombrePlaneta:"Jakku",
        latitud:600.5,
        longitud:190.10,
        nivelOxigeno:200.8,
        volumenAgua:90.09
    },
    {
        nombrePlaneta:"Starkiller Base",
        latitud:180.5,
        longitud:190.10,
        nivelOxigeno:10.8,
        volumenAgua:90.09
    },
    {
        nombrePlaneta:"Naboo",
        latitud:380.5,
        longitud:199.10,
        nivelOxigeno:50.8,
        volumenAgua:70.09
    },
    {
        nombrePlaneta:"Coruscant",
        latitud:109.5,
        longitud:193.10,
        nivelOxigeno:0.84,
        volumenAgua:0.52
    },
    {
        nombrePlaneta:"Kamino",
        latitud:101.5,
        longitud:1.10,
        nivelOxigeno:3.8,
        volumenAgua:7.09
    },
    {
        nombrePlaneta:"Geonosis",
        latitud:300.5,
        longitud:19.10,
        nivelOxigeno:0.77,
        volumenAgua:0
    },
    {
        nombrePlaneta:"Utapau",
        latitud:200.5,
        longitud:100.10,
        nivelOxigeno:-0.8,
        volumenAgua:0.06
    }
    // Agrega los datos de los otros 14 planetas aquí
  ];

// Función de flecha para sumar el total de agua de los planetas
const sumarTotalAgua = (planetas) => planetas.reduce((total, planeta) => total + planeta.volumenAgua, 0);

// Función de flecha para sumar y multiplicar por 100 el total de oxígeno de los planetas
const calcularTotalOxigeno = (planetas) => planetas.reduce((total, planeta) => total + planeta.nivelOxigeno, 0) * 100;

// Función de flecha para encontrar planetas con nivel de oxígeno negativo
const encontrarPlanetasConOxigenoNegativo = (planetas) => planetas.filter((planeta) => planeta.nivelOxigeno < 0);

// Función de flecha para encontrar planetas sin agua
const encontrarPlanetasSinAgua = (planetas) => planetas.filter((planeta) => planeta.volumenAgua === 0);

const totalAgua = sumarTotalAgua(planetas);
const totalOxigeno = calcularTotalOxigeno(planetas);
const planetasConOxigenoNegativo = encontrarPlanetasConOxigenoNegativo(planetas);
const planetasSinAgua = encontrarPlanetasSinAgua(planetas);

console.log(`Total de agua en los 15 planetas: ${totalAgua}`);
console.log(`Total de oxígeno en los 15 planetas multiplicado por 100: ${totalOxigeno}`);

if (planetasConOxigenoNegativo.length > 0) {
  console.log("Planetas con nivel de oxígeno negativo:");
  console.log(planetasConOxigenoNegativo);
}

if (planetasSinAgua.length > 0) {
  console.log("Planetas sin agua:");
  console.log(planetasSinAgua);
} */
