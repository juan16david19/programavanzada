//-----> FUNCIÓN TRADICIONAL <-----
function generarAlimento() {
    const nombres = ["Manzana", "Zanahoria", "Pescado", "Pollo", "Plátano", "Gusano"];
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const tipo = ["vegetal", "animal", "insecto"][Math.floor(Math.random() * 3)];
    const nivelEnergia = Math.floor(Math.random() * 401) + 100; // Números entre 100 y 500
    return { nombre, tipo, nivelEnergia };
}

const alimentos = [];

for (let i = 0; i < 300; i++) {
    alimentos.push(generarAlimento());
}

function filtrarAlimentosVegetales() {
    return alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.nivelEnergia > 200);
}

function sumarEnergiaVegetal(alimentosVegetales) {
    return alimentosVegetales.reduce((total, alimento) => total + alimento.nivelEnergia, 0);
}

setTimeout(() => {
    const alimentosVegetales = filtrarAlimentosVegetales();

    const totalEnergiaVegetal = sumarEnergiaVegetal(alimentosVegetales);

    console.log("Alimentos vegetales con más de 200 unidades de energía:");
    alimentosVegetales.forEach(alimento => {
        console.log(`Nombre: ${alimento.nombre}, Energía: ${alimento.nivelEnergia}`);
    });

    console.log(`Total de energía de alimentos vegetales: ${totalEnergiaVegetal}`);
}, 5000);

// -----> FUNCIÓN TIPO FLECHA <-----
// Función para generar alimentos aleatorios
/* const generarAlimento = () => {
    const nombres = ["Manzana", "Zanahoria", "Pescado", "Pollo", "Plátano", "Gusano"];
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const tipo = ["vegetal", "animal", "insecto"][Math.floor(Math.random() * 3)];
    const nivelEnergia = Math.floor(Math.random() * 401) + 100; // Números entre 100 y 500
    return { nombre, tipo, nivelEnergia };
};

// Lista para almacenar los alimentos
const alimentos = [];

// Generar 300 alimentos aleatorios y almacenarlos en la lista
for (let i = 0; i < 300; i++) {
    alimentos.push(generarAlimento());
}

// Función para filtrar alimentos vegetales con más de 200 unidades de energía
const filtrarAlimentosVegetales = () => {
    return alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.nivelEnergia > 200);
};

// Función callback para calcular la sumatoria de niveles de energía de alimentos vegetales
const sumarEnergiaVegetal = (alimentosVegetales) => {
    return alimentosVegetales.reduce((total, alimento) => total + alimento.nivelEnergia, 0);
};

// Llamamos a la función para filtrar alimentos vegetales después de 5 segundos
setTimeout(() => {
    const alimentosVegetales = filtrarAlimentosVegetales();

    // Llamamos a la función callback para obtener la sumatoria de niveles de energía de alimentos vegetales
    const totalEnergiaVegetal = sumarEnergiaVegetal(alimentosVegetales);

    // Imprimimos los resultados
    console.log("Alimentos vegetales con más de 200 unidades de energía:");
    alimentosVegetales.forEach(alimento => {
        console.log(`Nombre: ${alimento.nombre}, Energía: ${alimento.nivelEnergia}`);
    });

    console.log(`Total de energía de alimentos vegetales: ${totalEnergiaVegetal}`);
}, 5000); // Esperamos 5 segundos antes de ejecutar la función */
