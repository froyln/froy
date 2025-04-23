const botones = document.getElementsByClassName("botones-clase");
const pantalla = document.getElementById("resultado-pantalla_id");

var num1 = "";
var numtemp = "";
var operacion = "";
var res = "";

const boton_num1 = document.getElementById('button_num_1'); 

boton_num1.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "1";
    }
    else {
    num1 = num1 + "1";
    }
    pantalla.innerHTML = num1;
});

const boton_num2 = document.getElementById('button_num_2'); 

boton_num2.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "2";
    }
    else {
    num1 = num1 + "2";
    }
    pantalla.innerHTML = num1;
});

const boton_num3 = document.getElementById('button_num_3'); 

boton_num3.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "3";
    }
    else {
    num1 = num1 + "3";
    }
    pantalla.innerHTML = num1;
});

const boton_num4 = document.getElementById('button_num_4'); 

boton_num4.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "4";
    }
    else {
    num1 = num1 + "4";
    }
    pantalla.innerHTML = num1;
});

const boton_num5 = document.getElementById('button_num_5');

boton_num5.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "5";
    }
    else {
    num1 = num1 + "5";
    }
    pantalla.innerHTML = num1;
});

const boton_num6 = document.getElementById('button_num_6'); 

boton_num6.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "6";
    }
    else {
    num1 = num1 + "6";
    }
    pantalla.innerHTML = num1;
});

const boton_num7 = document.getElementById('button_num_7'); 

boton_num7.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "7";
    }
    else {
    num1 = num1 + "7";
    }
    pantalla.innerHTML = num1;
});

const boton_num8 = document.getElementById('button_num_8'); 

boton_num8.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "8";
    }
    else {
    num1 = num1 + "8";
    }
    pantalla.innerHTML = num1;
});

const boton_num9 = document.getElementById('button_num_9'); 

boton_num9.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "9";
    }
    else {
    num1 = num1 + "9";
    }
    pantalla.innerHTML = num1;
});

const boton_num0 = document.getElementById('button_num_0'); 

boton_num0.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "0";
    }
    else {
    num1 = num1 + "0";
    }
    pantalla.innerHTML = num1;
});

const boton_cero_cero = document.getElementById('button_cero_cero'); 

boton_cero_cero.addEventListener('click', function(event) {
    if (num1 == 0) {
        num1 = "00";
    }
    else {
    num1 = num1 + "00";
    }
    pantalla.innerHTML = num1;
});

const boton_c = document.getElementById('button_c'); 

boton_c.addEventListener('click', function(event){
    num1 = "";
    numtemp = "";
    pantalla.innerHTML = num1;
});

const boton_puntito = document.getElementById('button_puntito'); 

boton_puntito.addEventListener('click', function(event){
    if (num1 == ""){
        num1 = "0.";
    }
    else if (num1 == "0"){
        num1 = "0.";
    }
    else{
        num1 = num1 + ".";
    }
    pantalla.innerHTML = num1;
});

const boton_suma = document.getElementById('button_sumar'); 

boton_suma.addEventListener('click', function(event){
    numtemp = num1;
    num1 = "";
    operacion = "suma";
    pantalla.innerHTML = "+";
});

const boton_resta = document.getElementById('button_restar'); 

boton_resta.addEventListener('click', function(event){
    numtemp = num1;
    num1 = "";
    operacion = "resta";
    pantalla.innerHTML = "-";
});

const boton_multiplicacion = document.getElementById('button_multiplicar'); 

boton_multiplicacion.addEventListener('click', function(event){
    numtemp = num1;
    num1 = "";
    operacion = "multi";
    pantalla.innerHTML = "x";
});

const boton_dividir = document.getElementById('button_dividir'); 

boton_dividir.addEventListener('click', function(event){
    numtemp = num1;
    num1 = "";
    operacion = "dividir";
    pantalla.innerHTML = "&#247;";
});

const button_tamal = document.getElementById('button_tamal'); 

button_tamal.addEventListener('click', function(event){
    num1 = "";
    numtemp = "";
    pantalla.innerHTML = "<img src='https://media0.giphy.com/media/V6wNnrYJAYVMEtI5tH/giphy.gif?cid=6c09b9521df2k3sja2j042yqhje740l5vblz5lu3j0znj45i&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s'>";
});

const boton_igual = document.getElementById('button_resultado'); 

button_resultado.addEventListener('click', function(event) {

    if (operacion == ""){
        res = parseFloat(num1);
        if (num1 == ""){
            pantalla.innerHTML = "0";
            res = 0;
        }
        pantalla.innerHTML = res;
    }

    if (operacion == "suma"){
        if (num1 != ""){
            res = parseFloat(numtemp) + parseFloat(num1);
        }
        else {
            res = parseFloat(numtemp)
        }
        pantalla.innerHTML = res;
    }

    if (operacion == "resta"){
        if (num1 != ""){
            res = parseFloat(numtemp) - parseFloat(num1);
        }
        else {
            res = parseFloat(numtemp)
        }
        pantalla.innerHTML = res;   
    }

    if (operacion == "multi"){
        if (num1 != ""){
            res = parseFloat(numtemp) * parseFloat(num1);
        }
        else {
            res = parseFloat(numtemp)
        }
        pantalla.innerHTML = res;
    }

    if (operacion == "dividir"){
        if (num1 != ""){
            res = parseFloat(numtemp) / parseFloat(num1);
        }
        else {
            res = parseFloat(numtemp)
        }
        pantalla.innerHTML = res;
    }

    if (num1 == ""){
        if (numtemp == ""){
            pantalla.innerHTML = "0";
        }
        else {
            pantalla.innerHTML = numtemp;
        }
    }
    
    if (numtemp == ""){
        if (num1 == ""){
            pantalla.innerHTML = "0";
        }
        else {
            pantalla.innerHTML = num1;
            res = num1;
        }
    }

    numtemp = "";
    operacion = "";
    if (res == ""){
        num1 = 0;
    }
    else if (res != 0){
        num1 = res;
    }
    else {
        num1 = 0;
    }

    // https://media0.giphy.com/media/V6wNnrYJAYVMEtI5tH/giphy.gif?cid=6c09b9521df2k3sja2j042yqhje740l5vblz5lu3j0znj45i&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s
});


