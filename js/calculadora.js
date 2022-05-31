"use strict";
var num1;
var num2;
var op;
function init() {
  var resultado = document.getElementById("resultado");
  var suma = document.getElementById("+");
  var resta = document.getElementById("-");
  var division = document.getElementById("/");
  var multiplicacion = document.getElementById("*");
  var reset = document.getElementById("C");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var cero = document.getElementById("0");
  var igual = document.getElementById("=");

  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
  };
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  };
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  };
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  };
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  };
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  };
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  };
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  };
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  };
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  };
  reset.onclick = function (e) {
    resetear();
  };
  suma.onclick = function (e) {
    num1 = resultado.textContent;
    op = "+";
    limpiar();
  };
  resta.onclick = function (e) {
    num1 = resultado.textContent;
    op = "-";
    limpiar();
  };
  multiplicacion.onclick = function (e) {
    num1 = resultado.textContent;
    op = "*";
    limpiar();
  };
  division.onclick = function (e) {
    num1 = resultado.textContent;
    op = "/";
    limpiar();
  };
  igual.onclick = function (e) {
    num2 = resultado.textContent;
    resolver();
  };
  function limpiar() {
    resultado.textContent = "";
  }
  function resetear() {
    resultado.textContent = " ";
    num1 = 0;
    num2 = 0;
    op = " ";
  }
  function resolver() {
    var res = 0;
    switch (op) {
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
    }
    resetear();
    resultado.textContent = res;
  }
}
