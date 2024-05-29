/**
 * Descripción
 * @method convertirunidades la función
 * @param {string}nombre
 * @param {number}valor
 * @return Valor que retorna
 */
let convertirunidades=(nombre, valor)=>{
    let metro,yarda,pie,pulgada;
    if (isNaN(valor)) {
        alert("el valor ingresado no es correcto ")
        metro="";
        pie="";
        yarda="";
        pulgada="";
    } else if (nombre === "metro") {
        metro=valor;
        pulgada=valor * 39.3701;
        pie = valor * 3.28084;
        yarda= valor * 1.09361;
    } else if (nombre === "pulgada") {
        pulgada=valor;
        metro= valor * 0.0254;
        pie= valor * 0.0833;
       yarda= valor * 0.027777777777778;
    } else if (nombre === "pie") {
        pie=valor;
        metro=valor * 0.3048;
       pulgada= valor * 12;
        yarda = valor * 0.333333333;
    } else if (nombre === "yarda") {
        yarda= valor;
        metro= valor * 0.9144;
       pulgada = valor * 36;
       pie= valor * 3;
    }

        document.getElementById("metro").valor = metro;
        document.getElementById("pulgada").valor = pulgada;
        document.getElementById("pie").valor = pie;
        document.getElementById("yarda").valor=yarda;

}
function convertirgradosradianes(id){
    let grad,rad;
    if(id==="grados"){
        let grad=document.getElementById("grados").value;
        let rad=grad*Math.PI/180;
        document.getElementById("radianes").value=rad;
    }else if(id==="radianes"){
        let rad=document.getElementById("radianes").value;
        let grad= rad*180/Math.PI;
        document.getElementById("grados").value= grad;
    }
}
let mostrarocultar=(valor)=>{
    if(valor==="val_mostrar"){
        document.getElementById("unDiv").style.display='block';
    }else if (valor==="val_ocultar"){
        document.getElementById("unDiv").style.display='none';
    }
}