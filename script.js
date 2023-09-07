// Agrega en pantalla el valor del botón 
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// Vaciar la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}

// Calcular lo que aparece en pantala
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}