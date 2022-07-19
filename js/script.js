// Tienes 3 intentos para constreseña
// 
// Si la coloca bien = Saluda y pide nuevos datos
// Ingresar meses de antiguedad de la empresa
// 1.5 dias por mes de trabajo

// Ingresar dias de vacaciones ya tomados
// Si no se ha tomado dias de vacaciones - hace el calculo total
// Si tiene, se hace el calculo restando los dias tomados


let savedPass = "1"


for (let i = 0; i <= 2; i++) {
    let password = prompt("ingresa tu contraseña");
    console.log(i, password, i === 2)
    if (i === 2 && savedPass !== password) {
        alert("Ha ingresado incorrectamente su contraseña demasiadas veces");
    }
    if (savedPass === password) {
        alert("Contraseña Ingresada Correctamente");
        saludarConNombre();
        break;
    } else if (i < 2 && savedPass !== password) {
        alert("Contraseña invalida");
        continue;
    }
}

function saludarConNombre () {
    let nombreUsuario = prompt("Ingresa tu nombre");
    alert("Bienvenido" + " " + nombreUsuario);
    if (nombreUsuario) {
        ingresarDatos();
    }
}

function ingresarDatos () {
    let antiguedad = prompt("Ingresa número de meses en la empresa");
    let i = parseInt(antiguedad);
    let anosLaborales = i / 12;
    var conDecimal = anosLaborales.toFixed(1);
    alert('LLevas' + " " + conDecimal + " " + "años de antiguedad laboral");
    let diasTomados = prompt("Ingresa dias de vacaciones ya tomados");
    let resultado = (antiguedad * 1.5) - diasTomados;
    alert("Tienes disponibles" + " "  + resultado + " " + "días de vacaciones");
    alert("Recuerda que cada mes acumulas 1.5 dias de vacaciones, en caso de hacer otra consulta presiona F5");
   
   
   
   
/*    Revisiones futuras para validar datos */
    // if (isNaN(resultado)) {
    //     alert("no ingreso un numero");
    //     ingresarDatos()
    // }
    // if (!isNaN(resultado)) {
    //     alert("Tienes disponibles" + " " + resultado + " " + "días de vacaciones");
   // }
}


