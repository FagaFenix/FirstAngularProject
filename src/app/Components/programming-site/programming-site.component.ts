import { Component, OnInit } from '@angular/core';
const swal = require('sweetalert');

@Component({
  selector: 'app-programming-site',
  templateUrl: './programming-site.component.html',
  styleUrls: ['./programming-site.component.css']
})
export class ProgrammingSiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

preguntaNumero(){
let numero;
let input;
numero = 9;

    input = prompt("Dime uno de los dos números que te dio (no importa el orden) y al darle Enter, te diré el segundo número")

    if (input != 0 && input != 1 && input != 2 && input != 3 && input != 4 && input != 5 && input != 6 && input != 7 && input != 8 && input != 9) {
        swal("¡Espera!", "Necesitamos un número de una cifra para jugar.");
    } else {
        swal({
            title: numero - input,
            text: "¿Es este el otro número?",
            icon: "success",
            button: "¡Genial, ¿no?!"
        });
    }

  }
}