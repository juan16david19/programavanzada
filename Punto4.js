//-----> FUNCIÓN TRADICIONAL <-----

function contarSablesNegativos(sables) {
    let contador = 0;
  
    
    for (let i = 0; i < sables.length; i++) {
      if (sables[i] < 0) {
        contador++; 
      }
    }
  
    return contador;
  }
  
  const sables = [2, 4, -8, 5, -6];
  const cantidadSablesNegativos = contarSablesNegativos(sables);
  
  console.log(`La cantidad de sables defectuosos con energía negativa es ${cantidadSablesNegativos}.`);

  // -----> FUNCIÓN TIPO FLECHA <-----

  /* const contarSablesNegativos = (sables) => {
    let contador = 0;
  
    for (let i = 0; i < sables.length; i++) {
      if (sables[i] < 0) {
        contador++;
      }
    }
  
    return contador;
  };
  
  const sables = [2, 4, -8, 5, -6];
  const cantidadSablesNegativos = contarSablesNegativos(sables);
  
  console.log(`La cantidad de sables defectuosos con energía negativa es ${cantidadSablesNegativos}.`); */
  
  
  