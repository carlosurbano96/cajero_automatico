let formulario = document.getElementById("Formulario")
let nombre = document.getElementById("nombre")
let clave = document.getElementById("clave")
let saldototal = 300;
let saldototal1 = 302;
let saldototal2 = 304;
var remplaza = /\+/gi;
var url = window.location.href;

const parrafo = document.getElementById("saldos")

url = unescape(url);
url = url.replace(remplaza, " ");
url = url.toUpperCase();

function obtener_valor(variable)
{
var variable_may = variable.toUpperCase();
var variable_pos = url.indexOf(variable_may);

if (variable_pos != -1)
{
var pos_separador = url.indexOf("&", variable_pos);

if (pos_separador != -1)
{
return url.substring(variable_pos + variable_may.length + 1, pos_separador);
} else
{
return url.substring(variable_pos + variable_may.length + 1, url.length);
}
} else
{
return "NO_ENCONTRADO";
}
}



function login(){
    if(nombre.value == "Carlos Urbano"){
        if (clave.value== "1234") {
            location="principal.html?nombre=carlosurbano"
        } else {
            alert("Contraseña incorrecto")
        }
    }
    else if(nombre.value == "Alexander Urbano"){
        if (clave.value== "1234") {
            location="principal.html?vnombre=alexanderurbano"
        } else {
            alert("Contraseña incorrecto")
        }
    }
    else if(nombre.value == "Angie Urbano"){
        if (clave.value== "1234") {
            location="principal.html?vnombre=angieurbano"
        } else {
            alert("Contraseña incorrecto")
        }
    }else{
        alert("Usuario incorrecto")
    }
}


let usuario = obtener_valor("nombre");



function consultar_saldo(){
    
    
    if (usuario == "CARLOSURBANO") {
        parrafo.innerHTML = "Tu saldo actual es " + saldototal;
    } else if (usuario == "ALEXANDERURBANO") {
        parrafo.innerHTML = "Tu saldo actual es " + saldototal1;
    } else{
        parrafo.innerHTML = "Tu saldo actual es " + saldototal2;
    }
}

function ingresar_monto(){
    if (usuario == "CARLOSURBANO") {
        let dinero = Number(window.prompt("Digite el valor a consignar", ""))
        let suma = saldototal + dinero;
            if (suma > 990) {
                alert ("Su cuenta no puede tener mas de 990 pesos, ingrese un monto menor")
            } else {
            alert ("Usted acaba de ingresar " + dinero)
            parrafo.innerHTML = "Tu saldo actual es " + suma;
            saldototal = suma;
            }
    } else if(usuario == "ALEXANDERURBANO"){
        let dinero = Number(window.prompt("Digite el valor a consignar", ""))
        let suma = saldototal1 + dinero;
            if (suma > 990) {
                alert ("Su cuenta no puede tener mas de 990 pesos, ingrese un monto menor")
            } else {
            alert ("Usted acaba de ingresar " + dinero)
            parrafo.innerHTML = "Tu saldo actual es " + suma;
            saldototal1 = suma;
            }
    }else{
        let dinero = Number(window.prompt("Digite el valor a consignar", ""))
        let suma = saldototal2 + dinero;
            if (suma > 990) {
                alert ("Su cuenta no puede tener mas de 990 pesos, ingrese un monto menor")
            } else {
            alert ("Usted acaba de ingresar " + dinero)
            parrafo.innerHTML = "Tu saldo actual es " + suma;
            saldototal2 = suma;
            }
    }
    
}

function retirar_monto(){
    if (usuario == "CARLOSURBANO") {
        let dinero = Number(window.prompt("Digite el valor a retirar", ""))
        let resta = saldototal - dinero;
            if (resta < 10) {
                alert ("Su cuenta no puede tener menos de 10 pesos, retire un monto menor")
            } else {
            alert ("Usted acaba de retirar " + dinero)
            parrafo.innerHTML = "Tu saldo actual es " + resta;
            saldototal = resta;
            }
    } else if(usuario == "ALEXANDERURBANO"){
        let dinero = Number(window.prompt("Digite el valor a retirar", ""))
        let resta = saldototal1 - dinero;
            if (resta < 10) {
                alert ("Su cuenta no puede tener menos de 10 pesos, retire un monto menor")
            } else {
            alert ("Usted acaba de retirar " + dinero)
            parrafo.innerHTML = "Tu saldo actual es " + resta;
            saldototal1 = resta;
            }
    }else{
        let dinero = Number(window.prompt("Digite el valor a retirar", ""))
        let resta = saldototal2 - dinero;
            if (resta < 10) {
                alert ("Su cuenta no puede tener menos de 10 pesos, retire un monto menor")
            } else {
            alert ("Usted acaba de retirar " + dinero)
            parrafo.innerHTML = "Tu saldo actual es " + resta;
            saldototal2 = resta;
            }
    }
}



function volver(){
    location="index.html"
}