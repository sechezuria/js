const array = [
    []
]

const users = [{
    name: 'Saul',
    lastName: 'Echezuria',
    password: '1',
    monthsInCharge: 24,
    daysOfVacationsUsed: 2
},
{
    name: 'Daniela',
    lastName: 'Garcia',
    password: '2',
    monthsInCharge: 7,
    daysOfVacationsUsed: 0
},
{
    name: 'Pedro',
    lastName: 'Perez',
    password: '2',
    monthsInCharge: 7,
    daysOfVacationsUsed: 0
},
{
    name: 'Viviana',
    lastName: 'Peña',
    password: '2',
    monthsInCharge: 36,
    daysOfVacationsUsed: 10
}
]


let userName = prompt("ingresa tu nombre");

let antiguedad;
let diasTomados;
let i = parseInt(antiguedad);

for (let i = 0; i <= users.length; i++) {
    if (userName === users[i].name) {
        let password = prompt("ingresa tu contrasena");
        if (password === users[i].password) {
            antiguedad = users[i].monthsInCharge
            diasTomados = users[i].daysOfVacationsUsed
            saludarConNombre()
            break
        } else {
            alert('La contrasena es incorrecta')
            break
        }
    } else if (i + 1 === users.length && userName !== users[i].name) {
        alert('No se encontro el usuario')
    }
}



function ingresarDatos () {
    let anosLaborales = i / 12;
    var conDecimal = anosLaborales.toFixed(1);
    let resultado = (antiguedad * 1.25) - diasTomados;
    alert(userName + ", " + "tienes disponibles" + " " + resultado + " " + "días de vacaciones");
    alert("Recuerda que cada mes acumulas 1.25 dias de vacaciones, en caso de hacer otra consulta presiona F5");
}


function saludarConNombre () {
    alert("Bienvenido" + " " + userName);
    if (userName) {
        ingresarDatos();
    }
}