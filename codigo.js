function validar(){

    let usuario=document.getElementById("usuario").value;
    let clave=document.getElementById("clave").value;


    if (usuario=="joaquin" && clave=="123") {

        window.location.href="agenda.html";
        
    }else{

        alert("USUARIO O CLAVE INCORRECTO")
    }

}

window.onload = function () {
    mostrarResumen();
};

function guardarIngreso() {
    let ingreso = parseFloat(document.getElementById("ingresoMensual").value);
    if (isNaN(ingreso)) {
        alert("Ingrese un ingreso válido.");
        return;
    }
    localStorage.setItem("ingreso", ingreso);
    mostrarResumen(); 
}

function agregarGasto() {
    let monto = parseFloat(document.getElementById("monto").value);
    let categoria = document.getElementById("categoria").value;

    if (isNaN(monto)) {
        alert("Ingrese un monto válido.");
        return;
    }

    let gastoAnterior = parseFloat(localStorage.getItem(categoria)) || 0;
    let nuevoTotal = gastoAnterior + monto;
    localStorage.setItem(categoria, nuevoTotal);

    let totalGastos = parseFloat(localStorage.getItem("totalGastos")) || 0;
    localStorage.setItem("totalGastos", totalGastos + monto);

    document.getElementById("monto").value = "";
    document.getElementById("descripcion").value = "";

    mostrarResumen();
}

function mostrarResumen() {
    let ingreso = parseFloat(localStorage.getItem("ingreso")) || 0;
    let totalGastos = parseFloat(localStorage.getItem("totalGastos")) || 0;
    let saldo = ingreso - totalGastos;

    let comida = localStorage.getItem("comida") || 0;
    let transporte = localStorage.getItem("transporte") || 0;
    let ocio = localStorage.getItem("ocio") || 0;
    let otros = localStorage.getItem("otros") || 0;

    let resultado = `
        <h3>💸 Resumen del mes</h3>
        <p><strong>💼 Sueldo ingresado:</strong> $${ingreso}</p>
        <p><strong>💸 Total gastado:</strong> $${totalGastos}</p>
        <p><strong>💵 Saldo restante:</strong> $${saldo}</p>
        <hr>
        <p><strong>🍔 Gasto en comida:</strong> $${comida}</p>
        <p><strong>🚌 Gasto en transporte:</strong> $${transporte}</p>
        <p><strong>🎮 Gasto en ocio:</strong> $${ocio}</p>
        <p><strong>📦 Gasto en otros:</strong> $${otros}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}

function limpiarDatos() {
    localStorage.clear();
    alert("Todos los datos fueron borrados.");
    document.getElementById("resultado").innerHTML = "";
}

function verResumen() {
    let resumen = document.getElementById("resultado");

    if (resumen.style.display === "none" || resumen.style.display === "") {
        mostrarResumen(); 
        resumen.style.display = "block";
    } else {
        resumen.style.display = "none";
    }
}













