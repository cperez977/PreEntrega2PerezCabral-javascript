class TarjetaDeCredito {
    constructor(nombre, interes, cuotas) {
      this.nombre = nombre;
      this.interes = interes;
      this.cuotas = cuotas;
    }
  }
  
  function calcularCuotas() {
    let datosIngresados = [];
  
    let nombre = prompt("Ingrese su nombre:");
    while (nombre === "") {
      nombre = prompt("Por favor, ingrese su nombre:");
    }
    datosIngresados.push(nombre);
  
    let apellido = prompt("Ingrese su apellido:");
    while (apellido === "") {
      apellido = prompt("Por favor, ingrese su apellido:");
    }
    datosIngresados.push(apellido);
  
    let monto = prompt("Ingrese el monto:");
    while (monto === "" || isNaN(monto)) {
      monto = prompt("Por favor, ingrese un monto válido:");
    }
    datosIngresados.push(parseFloat(monto));
  
    let cuotas = prompt("Ingrese la cantidad de cuotas (1, 3, 6, 9, 12, 18):");
    while (cuotas !== "1" && cuotas !== "3" && cuotas !== "6" && cuotas !== "9" && cuotas !== "12" && cuotas !== "18") {
      cuotas = prompt("Por favor, ingrese una cantidad de cuotas válida (1, 3, 6, 9, 12, 18):");
    }
    datosIngresados.push(parseInt(cuotas));
  
    let tarjetas = [
      new TarjetaDeCredito("Orange", 0, [1, 3]),
      new TarjetaDeCredito("Citron", 50, [6, 9]),
      new TarjetaDeCredito("Tangerine", 100, [12, 18])
    ];
  
    let tarjetaElegida;
  
    for (let i = 0; i < tarjetas.length; i++) {
      if (tarjetas[i].cuotas.includes(datosIngresados[3])) {
        tarjetaElegida = tarjetas[i];
        break;
      }
    }
  
    let cuotaMensual = (datosIngresados[2] * (1 + tarjetaElegida.interes / 100)) / datosIngresados[3];
  
    alert("Estimado/a " + datosIngresados[0] + " " + datosIngresados[1] + ", deberá abonar " + datosIngresados[3] +" cuotas de $" + cuotaMensual + " por mes con la tarjeta " + tarjetaElegida.nombre + " con un " + tarjetaElegida.interes + "% de interés.");
  }
  
  calcularCuotas();
  