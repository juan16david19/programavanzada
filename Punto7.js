//-----> FUNCIÓN TRADICIONAL <-----

function encontrarMasCercanoACero(numeros) {
    let numeroMasCercano = numeros[0]; 
    let distanciaMasCercana = Math.abs(numeros[0]); 
  
    for (let i = 1; i < numeros.length; i++) {
      const distanciaActual = Math.abs(numeros[i]);
  
      if (distanciaActual < distanciaMasCercana) {
        distanciaMasCercana = distanciaActual;
        numeroMasCercano = numeros[i];
      } else if (distanciaActual === distanciaMasCercana && numeros[i] > 0) {
        
        numeroMasCercano = numeros[i];
      }
    }
  
    return numeroMasCercano;
  }
  
  const numeros = [5, -3, 7, -2, 1, -9, 8, -1, 4, -6, 0, 3, -5, 2, -4, 6, 9, -8, 10, -7];
  const numeroMasCercano = encontrarMasCercanoACero(numeros);
  
  console.log(`El número más cercano a cero es ${numeroMasCercano}`);
  
// -----> FUNCIÓN TIPO FLECHA <-----

/* const encontrarMasCercanoACero = (numeros) => {
    let numeroMasCercano = numeros[0]; 
    let distanciaMasCercana = Math.abs(numeros[0]); 
  
    for (let i = 1; i < numeros.length; i++) {
      const distanciaActual = Math.abs(numeros[i]);
  
      if (distanciaActual < distanciaMasCercana) {
        distanciaMasCercana = distanciaActual;
        numeroMasCercano = numeros[i];
      } else if (distanciaActual === distanciaMasCercana && numeros[i] > 0) {
        numeroMasCercano = numeros[i];
      }
    }
  
    return numeroMasCercano;
  };
  
  const numeros = [5, -3, 7, -2, 1, -9, 8, -1, 4, -6, 0, 3, -5, 2, -4, 6, 9, -8, 10, -7];
  const numeroMasCercano = encontrarMasCercanoACero(numeros);
  
  console.log(`El número más cercano a cero es ${numeroMasCercano}`); */
  