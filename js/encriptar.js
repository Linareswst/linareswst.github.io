const btnecriptar = document.getElementById("btnencript");
const inputtext = document.getElementById("txtinput");
const showtext = document.getElementById("txtshow");
const btndesencriptar = document.getElementById("btnuncript");
const btncopiar = document.getElementById("btncopiar");
const btnlimpiar = document.getElementById("btnlimpiar");
var mensaje;
var encriptado;
var copiar;

function encriptar(){
    document.getElementById("divshowmuneco").style.display = "none";
    mensaje = inputtext.value;
    encriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    showtext.value = encriptado;

}

function desencriptar(){
    encriptado = inputtext.value;
    mensaje = encriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    showtext.value = mensaje;

}

function copiartexto(){
    showtext.select();
    copiar = showtext.value;
    navigator.clipboard.writeText(copiar);
}

function limpiar(){
    showtext.value = "";
    inputtext.value = "";
    document.getElementById("divshowmuneco").style.display = "inline";
}

btnecriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.onclick = copiartexto;
btnlimpiar.onclick = limpiar;
