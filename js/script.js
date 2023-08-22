function aumentaZoom() {
    var elementos = document.querySelectorAll('body *'); // Seleciona todos os elementos de texto na página
    for (let c = 0; c < elementos.length; c++) {
      const elemento = elementos[c];
      const fontSize = parseInt(window.getComputedStyle(elemento)['font-size']);
      elemento.style.fontSize = (fontSize + 1) + 'px';
    }
  }

  function diminuiZoom() {
    var elementos = document.querySelectorAll('body *'); // Mesma seleção de elementos
    for (let c = 0; c < elementos.length; c++) {
      const elemento = elementos[c];
      const fontSize = parseInt(window.getComputedStyle(elemento)['font-size']);
      elemento.style.fontSize = (fontSize - 1) + 'px';
    }
  }

  function resetZoom() {
    var elementos = document.querySelectorAll('body *'); // Mesma seleção de elementos
    for (let c = 0; c < elementos.length; c++) {
      const elemento = elementos[c];
      elemento.style.fontSize = ''; // Volta ao tamanho padrão
    }
  }

  function modoNoturno() {
    const elemento = document.querySelector("body");
    const bodyCS = window.getComputedStyle(elemento);
    const botoes = document.querySelectorAll("button");

    if (bodyCS.backgroundColor === "rgb(33, 37, 41)") {
      elemento.style.backgroundColor = "white";
      elemento.style.color = "#212529";
      for (const botao of botoes) {
        botao.style.color = "#212529";
      }
    } else {
      elemento.style.backgroundColor = "#212529";
      elemento.style.color = "white";
      for (const botao of botoes) {
        botao.style.color = "white";
      }
    }
  }

  window.onload = function () {
    var botoes = document.querySelectorAll("i");
    for (let i = 0; i < botoes.length; i++) {
      botoes[0].addEventListener("click", aumentaZoom);
      botoes[1].addEventListener("click", diminuiZoom);
      botoes[2].addEventListener("click", resetZoom);
      botoes[3].addEventListener("click", modoNoturno);
    }
  }
