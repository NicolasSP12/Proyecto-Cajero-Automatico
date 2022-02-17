var cuentas = [
  {nombre: "Mali", saldo: 200, password: 123},
  {nombre: "Gera", saldo: 290, password: 789},
  {nombre:"Maui", saldo: 67, password: 521}
]


function login(form){ 
    document.getElementById("usuario").innerHTML
    for(var i = 0; i<cuentas.length; i++){
      if(cuentas[i].nombre==="Mali" && cuentas[i].password==="123"){
        location="Main.html"
      }else if(cuentas[i].nombre==="Gera"&&cuentas[i].password==="789"){
        location="Main.html"
      } else if(cuentas[i].nombre==="Maui"&&cuentas[i].password==="521"){
        location="Main.html"
      }else{
        alert("Usuarios y contraseñas no encontrados")
      }
    }
}


  //   if (form.usuario.value == cuentas["nombre"]) {
  //     if(form.contraseña.value="123"){
  //       location="Main.html"
  //     } else{
  //       alert("No es la contraseña correcta")
  //     }
  //   } if (form.usuario.value == "Mali") {
  //       if(form.contraseña.value="123"){
  //         location="Main.html"
  //     } else{
  //         alert("No es la contraseña correcta")
  //       }
  //   } if (form.usuario.value == "Gera") {
  //       if(form.contraseña.value="123"){
  //         location="Main.html"
  //     } else{
  //         alert("No es la contraseña correcta")
  //     }
  //   }
  // }



    // function login(form){
    //     if (form.usuario.value == "Maui", "Gera", "Mali") {
    //         if(form.contraseña.value="123"){
    //             if (form.contraseña_2.value=="123" ) {
    //                 location="Main.html"
    //             } else {
    //                 alert("La contraseña no es la misma")
    //             }
    //         }else{
    //             alert("No es la contraseña correcta")
    //         }
    //     } else{alert("Este usuario no existe")
    //     } if (form.usuario.value == "Mali") {
    //         if(form.contraseña.value="123"){
    //             if (form.contraseña_2.value=="123" ) {
    //                 location="Main.html"
    //             } else {
    //                 alert("La contraseña no es la misma")
    //             }
    //         }else{
    //             alert("No es la contraseña correcta")
    //         }
    //     } else {alert("Este usuario no existe")
    //   } if (form.usuario.value == "Gera") {
    //         if(form.contraseña.value="123"){
    //             if (form.contraseña_2.value=="123" ) {
    //                 location= "Main.html"
    //             } else {
    //                 alert("La contraseña no es la misma")
    //             }
    //         }else{
    //             alert("No es la contraseña correcta")
    //         }
    //     } else{ alert("Este usuario no existe")
    //   }
    // }
