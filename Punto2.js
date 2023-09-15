//-----> FUNCIÓN TRADICIONAL <-----

function obtenerNombre(codigo){
    return codigo.split(":")[1]
}

console.log(obtenerNombre("ARQ2555: Sara Bel-Sun"))
console.log(obtenerNombre("ARQ2556: Nodin Chavdri"))
console.log(obtenerNombre("ARQ2557: Finn"))

// -----> FUNCIÓN TIPO FLECHA <-----

/* let obtenerNombreFlecha = (codigo)=>codigo.split(":")[1]
console.log(obtenerNombreFlecha("ARQ2555: Sara Bel-Sun"))
console.log(obtenerNombreFlecha("ARQ2556: Nodin Chavdri"))
console.log(obtenerNombreFlecha("ARQ2557: Finn")) */