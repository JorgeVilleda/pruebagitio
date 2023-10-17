/* Funciones para el index */
/* Muestra los cards de integrantes */
const mostrarintegrantes = document.getElementById('sobrenosotros'); 
const tarjetas = document.querySelectorAll('.cardintegrantes'); 

mostrarintegrantes.addEventListener('click', function(event){ 
    event.preventDefault(); 

    tarjetas.forEach(function(tarjeta){ 
        tarjeta.style.display = 'block';       
    });
});
/* Funciones para las paginas de conjuntos */ 
/*Muestra alerta para recordar que se deben insertar comas en cada elemento del conjunto */ 
var conjuntoAinput = document.getElementById('conjuntoAinput');
var agregarcomas = document.getElementById('agregarcomas');

conjuntoAinput.addEventListener('click', function() {
    agregarcomas.style.display = 'block';
    setTimeout(function() {
        agregarcomas.style.display = 'none';
        }, 5000);
});

/* Union de conjuntos */
var conjuntoA, conjuntoB; 

function calcularUnion(){ 
    conjuntoA = document.getElementById('conjuntoA').value.split(', ').map(element => element.trim()); 
    conjuntoB = document.getElementById('conjuntoB').value.split(', ').map(element => element.trim()); 
    var union = [...new Set([...conjuntoA, ...conjuntoB])]; 

    document.getElementById('resultado').textContent = 'A U B {' + union.join(',') + '}';
}
/* Intersección de conjuntos */ 

var conjuntoIA, conjuntoIB;

function calcularInterseccion() {
    conjuntoIA = new Set(document.getElementById('conjuntoIA').value.split(', ').map(element => element.trim()));
    conjuntoIB = new Set(document.getElementById('conjuntoIB').value.split(', ').map(element => element.trim()));

    var interseccionAB = new Set([...conjuntoIA].filter(x => conjuntoIB.has(x)));
    var interseccionBA = new Set([...conjuntoIB].filter(x => conjuntoIA.has(x)));

    document.getElementById('resultadoA∩B').textContent = 'A ∩ B {' + [...interseccionAB].join(', ') + '}';
    document.getElementById('resultadoB∩A').textContent = 'B ∩ A {' + [...interseccionBA].join(', ') + '}';
}
/* Diferencia de conjuntos */ 
var conjuntoDA, conjuntoDB;

function calcularDiferencia() {
    conjuntoDA = new Set(document.getElementById('conjuntoDA').value.split(', ').map(element => element.trim()));
    conjuntoDB = new Set(document.getElementById('conjuntoDB').value.split(', ').map(element => element.trim()));

    // Calcula la diferencia A - B (elementos en conjuntoIA pero no en conjuntoIB)
    var diferenciaAB = new Set([...conjuntoDA].filter(x => !conjuntoDB.has(x)));
    var diferenciaBA = new Set([...conjuntoDB].filter(x => !conjuntoDA.has(x)));

    document.getElementById('resultadoA-B').textContent = 'A - B {' + [...diferenciaAB].join(', ') + '}';
    document.getElementById('resultadoB-A').textContent = 'B - A {'+ [...diferenciaBA].join(', ') + '}';
}
/* Complemento de conjuntos */ 

var conjuntoCA, conjuntoCB, conjuntoUniverso;

function calcularComplemento() {
    conjuntoCA = new Set(document.getElementById('conjuntoCA').value.split(', ').map(element => element.trim()));
    conjuntoCB = new Set(document.getElementById('conjuntoCB').value.split(', ').map(element => element.trim()));
    conjuntoUniverso = new Set(document.getElementById('conjuntoU').value.split(', ').map(element => element.trim()));

    // Calcula el complemento de A en relación con el conjunto universo U (U - A)
    var complementoA = new Set([...conjuntoUniverso].filter(x => !conjuntoCA.has(x)));
    var complementoB = new Set([...conjuntoUniverso].filter(x => !conjuntoCB.has(x)));

    document.getElementById('resultadoA↑C').textContent = 'A∁ {' + [...complementoA].join(', ') + '}';
    document.getElementById('resultadoB↑C').textContent = 'B∁ {' + [...complementoB].join(', ') + '}';

}



