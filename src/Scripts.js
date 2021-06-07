// var Nombre = document.getElementById('Nombre');
// var Email = document.getElementById('Email');
// var Teléfono = document.getElementById('Teléfono');
// var Textarea = document.getElementById('Textarea');

// function validateForm() {
//     console.log('Enviar Formulario');

//     if ((Nombre.value.length >= 1 && Email.value.length && Teléfono.value.length >= 1 && Textarea.value.length >= 1)) {
//         swal({
//             title: "¡Gracias!",
//             text: "Te responderemos en el menor tiempo posible",
//             icon: "success",
//             button: "¡Genial!"
//         });
//     } else {
//         swal("¡Espera!", "Necesitamos tus datos para responderte y/o contactarte.");
//     }
// }
// // Quería poder completar la validacdión sin que la página se refrescara, esta fue la solución que encontré:
// function noRefresh() {
//     var status = document.getElementById("button").value;

//     return (false);
// }