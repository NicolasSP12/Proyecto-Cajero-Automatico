var cuentas = [
  {nombre: "Mali", saldo: 200, password: 123},
  {nombre: "Gera", saldo: 290, password: 789},
  {nombre:"Maui", saldo: 67, password: 521}
]

var usuario = ""

function login(form){ 
  usuario = document.getElementById("usuario").value
  var contraseña = document.getElementById("contraseña").value
    for(var i = 0; i<cuentas.length; i++){
      if(cuentas[i].nombre==usuario && cuentas[i].password==contraseña){
        location.href ="Main.html?usuario="+usuario
      }else{
        alert("Usuario no encontrado")
        
      }
    } 
}

window.onload = function(){
  mostrar(usuario)
  // const params = new URLSearchParams(window.location.search)
  // console.log(params)
  
}

function mostrar(usuario){
  for( var i = 0; i < cuentas.length; i++ ){
    if(cuentas[i].nombre==usuario){
      document.getElementById("montos").value = cuentas[i].saldo
    }
  }
}

var limite_max = 990
var limite_min = 10

function formula1() {
  var CantidadTotal = parseInt(document.getElementById("cantidad").value)
  var CantidadInput = parseInt(document.getElementById("montos").value)
  document.getElementById("montos").value=(CantidadTotal+CantidadInput)
  
}
function formula2() {
  var CantidadTotal = parseInt(document.getElementById("cantidad").value)
  var CantidadInput = parseInt(document.getElementById("montos").value)
  document.getElementById("montos").value=(CantidadInput-CantidadTotal)
  
}
