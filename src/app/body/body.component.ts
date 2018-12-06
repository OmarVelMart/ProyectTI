import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  escuchar() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message');
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGramarList = SpeechGramarList || webkitSpeechGrammarList;

    var grammer = '#JSGF V1.0;';

    var recognition = new SpeechRecognition();
    var SpeechRecognitionGrammarList = new SpeechGramarList();
    SpeechRecognitionGrammarList.addFromString(grammer, 1);

    recognition.grammers = SpeechRecognitionGrammarList;
    recognition.lang = 'es-MX';
    recognition.interimResults = false;

    //onresult
    //onspeechend
    //onerror

    recognition.onresult = function (event) {
      var last = event.results.length - 1;
      var command = event.results[last][0].transcript;
      var res = message.textContent = command;
      //alert(res);
      document.getElementById("message").value = res;
/*
      if (res == "insertar zapato") {
        var codigo = prompt("Diga el codigo", '');
        if (codigo == '' || codigo == null) {
          alert("intentelo nuevamente");
        } else {
          codigo = prompt("Diga el tipo", '');
          if (codigo == '' || codigo == null) {
            alert("intentelo nuevamente");
          } else {
            codigo = prompt("Diga el tamaño", '');
            if (codigo == '' || codigo == null) {
              alert("intentelo nuevamente");
            } else {
              codigo = prompt("Diga la cantidad", '');
              if (codigo == '' || codigo == null) {
                alert("intentelo nuevamente");
              } else {
                codigo = prompt("Diga la marca", '');
                if (codigo == '' || codigo == null) {
                  alert("intentelo nuevamente");
                } else {
                  codigo = prompt("Diga el color", '');
                  if (codigo == '' || codigo == null) {
                    alert("intentelo nuevamente");
                  } else {
                    codigo = prompt("Diga el precio", '');
                    if (codigo == '' || codigo == null) {
                      alert("intentelo nuevamente");
                    } else {
                      codigo = prompt("Diga el modelo", '');
                      if (codigo == '' || codigo == null) {
                        alert("intentelo nuevamente");
                      } else {
                        codigo = prompt("Diga la descripcion", '');
                        if (codigo == '' || codigo == null) {
                          alert("intentelo nuevamente");
                        } else {
                          var confirmar = confirm("¿esta seguro de insertar los datos?");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      */

      if (res == "eliminar zapato") {
        confirm("¿Estas seguro de eliminarlo?");
        alert("cambios");
      }



    }

    recognition.onspeechend = function () {
      recognition.stop();
    }
    recognition.onerror = function (event) {
      message.textContent = 'error in recognition: ' + event.console.error();
    }
    document.querySelector('#botones').addEventListener('click', function () {
      recognition.start()
    });

  }

  
  


}
