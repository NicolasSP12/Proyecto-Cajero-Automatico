var cuentas = [
  {nombre: "Mali", saldo: 200, password: 123},
  {nombre: "Gera", saldo: 290, password: 789},
  {nombre:"Maui", saldo: 67, password: 521}
]


function login(form){ 
    document.getElementById("usuario").innerHTML
    for(var i = 0; i<cuentas.length; i++){
      if(cuentas[i].nombre==="Mali" && cuentas[i].password===123){
        location="Main.html"
      }else if(cuentas[i].nombre==="Gera"&&cuentas[i].password===789){
        location="Main.html"
      } else if(cuentas[i].nombre==="Maui"&&cuentas[i].password===521){
        location="Main.html"
      }else{
        alert("Usuarios y contraseñas no encontrados")
      }
    }
}
