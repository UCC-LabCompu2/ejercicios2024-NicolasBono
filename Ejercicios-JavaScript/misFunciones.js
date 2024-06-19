/**
 * Descripción
 * @method convertirunidades la función
 * @param {string}nombre
 * @param {number}valor
 * @return Valor que retorna
 */
let convertirunidades = (nombre, valor) => {
    let metro, yarda, pie, pulgada;
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("el valor ingresado no es correcto ")
        metro = "";
        pie = "";
        yarda = "";
        pulgada = "";
    } else if (nombre === "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    } else if (nombre === "pulgada") {
        pulgada = valor;
        metro = valor * 0.0254;
        pie = valor * 0.0833;
        yarda = valor * 0.027777777777778;
    } else if (nombre === "pie") {
        pie = valor;
        metro = valor * 0.3048;
        pulgada = valor * 12;
        yarda = valor * 0.333333333;
    } else if (nombre === "yarda") {
        yarda = valor;
        metro = valor * 0.9144;
        pulgada = valor * 36;
        pie = valor * 3;
    }
    {
        document.getElementById("metro").value = Math.round(metro * 100) / 100;
        document.getElementById("pulgada").value = Math.round(pulgada * 100) / 100;
        document.getElementById("yarda").value = yarda.toFixed(2);
        document.getElementById("pie").value = pie.toFixed(2);
    }
}

function convertirgradosradianes(id) {
    let grad, rad;
    if (id === "grados") {
        let grad = document.getElementById("grados").value;
        let rad = grad * Math.PI / 180;
        document.getElementById("radianes").value = rad;
    } else if (id === "radianes") {
        let rad = document.getElementById("radianes").value;
        let grad = rad * 180 / Math.PI;
        document.getElementById("grados").value = grad;
    }
}

let mostrarocultar = (valor) => {
    if (valor === "val_mostrar") {
        document.getElementById("unDiv").style.display = 'block';
    } else if (valor === "val_ocultar") {
        document.getElementById("unDiv").style.display = 'none';
    }
}
let suma = () => {
    const s1 = Number(document.getElementById("nums1").value);
    const s2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerHTML = s1 + Number(s2);
}
let resta = () => {
    const s1 = Number(document.getElementById("numr1").value);
    const s2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = s1 - s2;
}
let multiplicar = () => {
    const s1 = Number(document.getElementById("numm1").value);
    const s2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = s1 * s2;
}

let division = () => {
    const s1 = Number(document.getElementById("numd1").value);
    const s2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = s1 / s2;
}

function dibujarcirculocuadrado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const tamnio=200;
    const alturamax=canvas.height;
    const anchomax=canvas.width;
    const margen=10;
    ctx.fillStyle = "yellow";
    ctx.fillRect(margen, alturamax-tamnio-margen, tamnio, tamnio);
    ctx.fillStyle="blue";
    ctx.arc(anchomax/2,alturamax/2,tamnio/2,0,2*Math.PI );
    ctx.stroke();
    ctx.fill();
}
function cargarEventlistener(){
    document.getElementById("myCanvas").addEventListener("mousemove",dibujar);

}
function dibujar(event){
    const canvas=document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d");
    let posx=event.clientX;
    let posy=event.clientY;
    console.log(posx,posy);
    canvas.onmousedown= function (){bandera=true};
    canvas.onmouseup= function (){bandera=false};
    if(bandera){
        ctx.fillRect(posx,posy,5,5);
    }
}
function borrarcanvas(){
    const canvas=document.getElementById("myCanvas");
    canvas.width=canvas.width;
}
function dibujarcuadirculado(){
    const canvas=document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d");
    const paso=20;
    const anchomax=canvas.width;
    const alturamax=canvas.height;
    ctx.strokeStyle="green"
    for(let i=paso;i<alturamax;){
    ctx.beginPath();
    ctx.moveTo(0,i);
    ctx.lineTo(anchomax,i);
    ctx.stroke();
    ctx.closePath();
    i+=paso;
    }
    for(let i=paso;i<anchomax;){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturamax);
        ctx.stroke();
        ctx.closePath();
        i+=paso;
    }
    ctx.strokeStyle="red"
    ctx.beginPath();
    ctx.moveTo(0,alturamax/2);
    ctx.lineTo(anchomax,alturamax/2);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle="red"
    ctx.beginPath();
    ctx.moveTo(anchomax/2,0);
    ctx.lineTo(anchomax/2,alturamax);
    ctx.stroke();
}
function dibujarImagen(posX, posY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    const img = new Image();
    img.src = "images/auto.png";
    if(posX<0 || posY<0||posX>canvas.width||posY>canvas.height){
        mostrardialog();
    }
    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, posX,posY);
    }
    let mostrardialog=()=>{
const dialog=document.getElementById("mensajedeerror");
mostrardialog();
    }
    let cierredialog=()=>{
        const dialog=document.getElementById("mensajedeerror");
        cierredialog();
    }

}
