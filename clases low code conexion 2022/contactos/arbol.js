
function lacuenta() {

    var datoarroz = document.getElementById('dearroz').value;
    var datomaiz = document.getElementById('demaiz').value;
    var datogaseosas = document.getElementById('lasgaseosas').value;

    var arroz = Number(datoarroz);
    var maiz = Number(datomaiz);
    var gaseosas = Number(datogaseosas);
    
    var valorarroz = 40;
    var valormaiz = 35; 
    var valorgaseosa = 60;
    
    var totalarroz = (arroz * valorarroz);
    var totalmaiz = (maiz * valormaiz);
    var totalgaseosa = (gaseosas * valorgaseosa);
    
    var grantotal = ( totalarroz + totalgaseosa + totalmaiz);
    
    var resultado1 = (grantotal / 100);
    var resultado = Number(resultado1);

    var mensaje = "Su total de la cuenta es : $" + resultado;
    
    document.getElementById("cajarespuesta").innerHTML = mensaje;
    alert(mensaje)

}



