var cuentas = [
    {nombre= "Mali", saldo= 200},
    {nombre= "Gera", saldo= 290},
    {nombre="Maui", saldo= 67}
]

function login(){
    if (form.usuario.value == "Maui") {
      if(form.contraseña.value="123"){
        location="Main.html"
      } else{
        alert("No es la contraseña correcta")
      }
    } if (form.usuario.value == "Mali") {
        if(form.contraseña.value="123"){
          location="Main.html"
      } else{
          alert("No es la contraseña correcta")
        }
    } if (form.usuario.value == "Gera") {
        if(form.contraseña.value="123"){
          location="Main.html"
      } else{
          alert("No es la contraseña correcta")
      }
    }
  }



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
