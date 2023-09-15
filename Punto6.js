//-----> FUNCIÓN TRADICIONAL <-----

function encontrarEdadMayor(edades) {
    let edadMayor = edades[0];
    let contador = 1;
  
    for (let i = 1; i < edades.length; i++) {
      if (edades[i] > edadMayor) {
        edadMayor = edades[i];
        contador = 1;
      } else if (edades[i] === edadMayor) {
        contador++;
      }
    }
  
    return { edadMayor, contador };
  }
  
  const edades = [];
  const codigos = [];
  
  for (let i = 0; i < 20; i++) {
    edades.push(Math.floor(Math.random() * 100) + 1); 
    codigos.push(Math.random().toString(36).substring(7)); 
  }
  
  const resultado = encontrarEdadMayor(edades);
  
  console.log(`La edad mayor es ${resultado.edadMayor} y se repite ${resultado.contador} veces.`);

  // -----> FUNCIÓN TIPO FLECHA <-----
  
 /*  const encontrarEdadMayor = (edades) => {
    let edadMayor = edades[0];
    let contador = 1;
  
    for (let i = 1; i < edades.length; i++) {
      if (edades[i] > edadMayor) {
        edadMayor = edades[i];
        contador = 1;
      } else if (edades[i] === edadMayor) {
        contador++;
      }
    }
  
    return { edadMayor, contador };
  };
  
  const edades = [];
  const codigos = [];
  
  for (let i = 0; i < 20; i++) {
    edades.push(Math.floor(Math.random() * 100) + 1); 
    codigos.push(Math.random().toString(36).substring(7)); 
  }
  
  const resultado = encontrarEdadMayor(edades);
  
  console.log(`La edad mayor es ${resultado.edadMayor} y se repite ${resultado.contador} veces.`); */
  