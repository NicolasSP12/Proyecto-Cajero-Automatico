var cuentas = [
  {nombre: "Mali", saldo: 200, password: 123},
  {nombre: "Gera", saldo: 290, password: 789},
  {nombre:"Maui", saldo: 67, password: 521}
]


function login(form){ 
  var usuario = document.getElementById("usuario").value
  var contraseña = document.getElementById("contraseña").value
  var miStorage = window.localStorage
  miStorage.setItem("usuario", usuario)
  for( var i = 0 ; i < cuentas.length ; i++ ){
    if ( cuentas[i].nombre == usuario && cuentas[i].password == contraseña ){
      location.href = "Main.html?usuario="+usuario
    }else {
      alert("Usuario no encontrado")
      // console.log("Usuario no encontrado")
    }
  } 
}


window.onload = function(){
  mostrar(localStorage.getItem("usuario"))
}
function limpiar(){
  localStorage.clear()
}

function mostrar(usuario){
  for( var i = 0; i < cuentas.length; i++ ){
    if( cuentas[i].nombre == usuario ){
      document.getElementById("montos").value = cuentas[i].saldo
    }
  }
}

var limite_max = 990
var limite_min = 10

function formula1() {
  var CantidadTotal = parseInt(document.getElementById("cantidad").value)
  var CantidadInput = parseInt(document.getElementById("montos").value)
  if(CantidadTotal <= limite_max && CantidadInput <= limite_max){
    if((CantidadTotal+CantidadInput) <= 990){
      document.getElementById("montos").value=(CantidadTotal+CantidadInput)
    }else{
      alert("El limite maximo de la cuenta es de: $" + limite_max)
    }
  }else{
    alert("El limite maximo de la cuenta es de: $" + limite_max)
  }
}

function formula2() {
  var CantidadTotal = parseInt(document.getElementById("cantidad").value)
  var CantidadInput = parseInt(document.getElementById("montos").value)
  if(CantidadTotal >= limite_min){
    if((CantidadInput-CantidadTotal) >= 10){
      document.getElementById("montos").value= (CantidadInput-CantidadTotal)
    }else{
      alert("El limite minimo de las cuentas son de: $" + limite_min)
    }
  }
}
