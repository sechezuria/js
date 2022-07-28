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
let password = prompt("ingresa tu contrasena");
let antiguedad;
let diasTomados;
let i = parseInt(antiguedad);

for (let i = 0; i <= users.length; i++) {
    if (userName === users[i].name && password === users[i].password) {
        antiguedad = users[i].monthsInCharge
        diasTomados = users[i].daysOfVacationsUsed
        saludarConNombre()

        function saludarConNombre() {
            alert("Bienvenido" + " " + userName);
            if (userName) {
                ingresarDatos();
            }
        }

        function ingresarDatos() {
            console.log(antiguedad, diasTomados, userName)
            let anosLaborales = i / 12;
            var conDecimal = anosLaborales.toFixed(1);
            let resultado = (antiguedad * 1.25) - diasTomados;
            alert(userName + ", " + "tienes disponibles" + " " + resultado + " " + "días de vacaciones");
            alert("Recuerda que cada mes acumulas 1.25 dias de vacaciones, en caso de hacer otra consulta presiona F5");
        }

    } else {
        alert('El usuario o la constraseña son incorrectos')
        break;
    }
}