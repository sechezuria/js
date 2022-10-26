
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

let userName;
let password;
let antiguedad;
let diasTomados;
let i = parseInt(antiguedad);

const nombre = document.getElementById('user');

nombre.addEventListener('input', (event) => {
    if (nombre.value.length > 0) {
        document.getElementById("boton").textContent = "Ingresar";
    }
    else {
        document.getElementById("boton").textContent = "Registro";
    }
}, true);

function pulsaciones() {
    window.alert("El numero total de pulsaciones es: " + users)
}
const submit = () => {
    userName = document.getElementById('user').value
    password = document.getElementById('password').value
    test.innerHTML = userName



    for (let i = 0; i <= users.length; i++) {
        if (userName === users[i].name) {
            if (password === users[i].password) {
                var retrievedObject = localStorage.getItem('testObject');
                window.alert(retrievedObject['lastlogin']);
                users[i].lastlogin = Date.now();
                antiguedad = users[i].monthsInCharge
                diasTomados = users[i].daysOfVacationsUsed
                let resultado = (antiguedad * 1.25) - diasTomados;
                form.style.display = 'none';
                loggedIn.style.display = 'flex';
                vacationLeft.innerHTML = "Tienes disponibles" + " " + resultado + " " + "días de vacaciones"
                var testObject = { 'nombre': userName, 'lastlogin': Date.now()};
                localStorage.setItem('testObject', testObject);
                break
            } else {
                alert('La contrasena es incorrecta')
                break
            }
        } else if (i + 1 === users.length && userName !== users[i].name) {
            alert('No se encontro el usuario')
        }
    }
}






