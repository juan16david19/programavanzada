//-----> FUNCIÓN TRADICIONAL <-----

function calcularSalarioMensual(licenciasVendidas) {
    const salarioBase = 3500000;
    const comisionPorLicencia = 1500000;
    const deducciones = 0.05;
  
    const comisionTotal = comisionPorLicencia * licenciasVendidas;
  
    const salarioMensual = salarioBase + comisionTotal - (salarioBase + comisionTotal) * deducciones;
  
    return salarioMensual;
  }
  
  const licenciasVendidas = 5;
  const salarioMensual = calcularSalarioMensual(licenciasVendidas);
  
  console.log(`El salario mensual del vendedor es: $${salarioMensual}`);

// -----> FUNCIÓN TIPO FLECHA <-----

/*   const calcularSalarioMensual = (licenciasVendidas) => {
    const salarioBase = 3500000;
    const comisionPorLicencia = 1500000;
    const deducciones = 0.05;
  
    const comisionTotal = comisionPorLicencia * licenciasVendidas;
  
    const salarioMensual = salarioBase + comisionTotal - (salarioBase + comisionTotal) * deducciones;
  
    return salarioMensual;
  };
  
  const licenciasVendidas = 5;
  const salarioMensual = calcularSalarioMensual(licenciasVendidas);
  
  console.log(`El salario mensual del vendedor es: $${salarioMensual}`); */
  
  