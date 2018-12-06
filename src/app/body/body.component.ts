import { Component, OnInit,} from '@angular/core';
import * as $ from 'jquery';

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
    }

    recognition.onspeechend = function () {
      recognition.stop();
    }
    recognition.onerror = function (event) {
      message.textContent = 'error in recognition: ' + event.console.error();
    }
    document.querySelector('#botones').addEventListener('click', function () {
      console.log("Estoy escuchando");
      recognition.start()
      
    });
    

  }
  escuchar2() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message2');
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
      document.getElementById("message2").value = res;
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
    document.querySelector('#botones2').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  escuchar3() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message3');
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
      document.getElementById("message3").value = res;
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
    document.querySelector('#botones3').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  escuchar4() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message4');
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
      document.getElementById("message4").value = res;
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
    document.querySelector('#botones4').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  escuchar5() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message5');
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
      document.getElementById("message5").value = res;
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
    document.querySelector('#botones5').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  escuchar6() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message6');
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
      document.getElementById("message6").value = res;
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
    document.querySelector('#botones6').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  escuchar7() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message7');
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
      document.getElementById("message7").value = res;
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
    document.querySelector('#botones7').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  escuchar8() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message8');
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
      document.getElementById("message8").value = res;
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
    document.querySelector('#botones8').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  escuchar11() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message11');
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
      document.getElementById("message11").value = res;
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
    document.querySelector('#botones11').addEventListener('click', function () {
      recognition.start()
    });
    

  }

  escuchar12() {

    console.log("Estoy dentro");
    var message = document.querySelector('#message12');
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
      document.getElementById("message12").value = res;
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
    document.querySelector('#botones12').addEventListener('click', function () {
      recognition.start()
    });
    

  }
  modificar(){
    confirm("¿Estas seguro de modificar?");
  }
  eliminar(){
    confirm("¿Estas seguro de eliminar este producto?");
  }




  
  


}
