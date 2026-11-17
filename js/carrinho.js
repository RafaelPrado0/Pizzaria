// ABRIR E FECHAR O CARRINHO

const carrinho = document.getElementById("carrinho");

const abrirCarrinho = document.getElementById("abrir-carrinho");

const fecharCarrinho = document.getElementById("fechar-carrinho");

const listaCarrinho = document.getElementById("lista-carrinho");


// Abrir carrinho

abrirCarrinho.addEventListener("click", function () {

  carrinho.classList.add("aberto");

});


// Fechar carrinho

fecharCarrinho.addEventListener("click", function () {

  carrinho.classList.remove("aberto");

});

// PRODUTOS DO CARRINHO

export const carrinhoProdutos = [];

const botoesComprar = document.querySelectorAll(".btn-comprar");


// BOTÃO COMPRAR

botoesComprar.forEach(function (botao) {

  botao.addEventListener("click", function () {

    const produto = botao.dataset.produto;

    const preco = Number(botao.dataset.preco);

    const produtoExistente = carrinhoProdutos.find(function (item) {

      return item.produto === produto;

    });

    if (produtoExistente) {

      produtoExistente.quantidade++;

    }

    else {

      carrinhoProdutos.push({

        produto: produto,

        preco: preco,

        quantidade: 1

      });

    }

    mostrarCarrinho();

  });

});


// MOSTRAR CARRINHO

function mostrarCarrinho() {

  listaCarrinho.innerHTML = "";


  carrinhoProdutos.forEach(function (item, indice) {

    const subtotal = item.preco * item.quantidade;


    listaCarrinho.innerHTML += `

      <div class="item-carrinho">

        <h3>
          ${item.produto}
        </h3>

        <p>
          R$ ${item.preco.toFixed(2).replace(".", ",")}
        </p>

        <div class="quantidade">

          <button
            class="btn-menos"
            data-indice="${indice}"
          >
            −
          </button>

          <span>
            ${item.quantidade}
          </span>

          <button
            class="btn-mais"
            data-indice="${indice}"
          >
            +
          </button>

        </div>

        <p>
          Subtotal:
          R$ ${subtotal.toFixed(2).replace(".", ",")}
        </p>

        <button
          class="btn-remover"
          data-indice="${indice}"
        >
          Remover
        </button>

      </div>

    `;

  });


  atualizarTotal();

  configurarBotoesQuantidade();

}


// BOTÕES + E -

function configurarBotoesQuantidade() {


  // BOTÃO +

  const botoesMais = document.querySelectorAll(".btn-mais");


  botoesMais.forEach(function (botao) {

    botao.addEventListener("click", function () {

      const indice = Number(botao.dataset.indice);

      carrinhoProdutos[indice].quantidade++;

      mostrarCarrinho();

    });

  });


  // BOTÃO -

  const botoesMenos = document.querySelectorAll(".btn-menos");


  botoesMenos.forEach(function (botao) {

    botao.addEventListener("click", function () {

      const indice = Number(botao.dataset.indice);


      if (carrinhoProdutos[indice].quantidade > 1) {

        carrinhoProdutos[indice].quantidade--;

      }

      else {

        carrinhoProdutos.splice(indice, 1);

      }


      mostrarCarrinho();

    });

  });


  // BOTÃO REMOVER

  const botoesRemover = document.querySelectorAll(".btn-remover");


  botoesRemover.forEach(function (botao) {

    botao.addEventListener("click", function () {

      const indice = Number(botao.dataset.indice);

      carrinhoProdutos.splice(indice, 1);

      mostrarCarrinho();

    });

  });

}


// CALCULAR TOTAL

function atualizarTotal() {

  let total = 0;


  carrinhoProdutos.forEach(function (item) {

    total += item.preco * item.quantidade;

  });


  document.getElementById("total-carrinho").textContent =

    `R$ ${total.toFixed(2).replace(".", ",")}`;

}
