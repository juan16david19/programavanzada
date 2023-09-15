//-----> FUNCIÓN TRADICIONAL <-----

function crearPadawan(nombre,planeta,edad,estatura,clasificarPadawan){
    setTimeout(function(){
        
        let padawan={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarPadawan(padawan)
    },2000)
}

// Llamar a la función principal
crearPadawan("Grogu","Coruscant",53,36,function(padawan){
    if(padawan.edadEstudiante<15){
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase de manejo de la fuerza`)
    }else{
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase de manejo manejo de sable`)
    }
})

// -----> FUNCIÓN TIPO FLECHA <-----

/* const crearPadawan = (nombre, planeta, edad, estatura, clasificarPadawan) => {
    setTimeout(() => {
      const padawan = {
        nombreEstudiante: nombre,
        planetaEstudiante: planeta,
        edadEstudiante: edad,
        estaturaEstudiante: estatura,
      };
      clasificarPadawan(padawan);
    }, 2000);
  };
  
  // Llamar a la función principal
  crearPadawan("Grogu", "Coruscant", 53, 36, (padawan) => {
    if (padawan.edadEstudiante < 15) {
      console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase de manejo de la fuerza`);
    } else {
      console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase de manejo manejo de sable`);
    }
  }); */
  