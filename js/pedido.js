
// ========================================
// FINALIZAR PEDIDO
// ========================================
import { carrinhoProdutos } from "./carrinho.js";

const finalizarPedido =
  document.getElementById("finalizar-pedido");


finalizarPedido.addEventListener("click", function () {


  // Pegar dados do cliente

  const nome =
    document.getElementById("nome").value;

  const endereco =
    document.getElementById("endereco").value;

  const telefone =
    document.getElementById("telefone").value;

  const pagamento =
    document.getElementById("pagamento").value;

  const observacoes =
    document.getElementById("observacoes").value;


  // Verificar se o carrinho está vazio

  if (carrinhoProdutos.length === 0) {

    alert("Seu carrinho está vazio.");

    return;

  }


  // Verificar dados obrigatórios

  if (
    nome === "" ||
    endereco === "" ||
    telefone === "" ||
    pagamento === ""
  ) {

    alert("Preencha todos os dados do pedido.");

    return;

  }


  // Calcular total

  let total = 0;


  carrinhoProdutos.forEach(function (item) {

    total += item.preco * item.quantidade;

  });


  // Montar mensagem

  let mensagem =
    "Olá! Gostaria de fazer um pedido.%0A%0A";


  mensagem +=
    `Nome: ${nome}%0A`;

  mensagem +=
    `Endereço: ${endereco}%0A`;

  mensagem +=
    `Telefone: ${telefone}%0A`;

  mensagem +=
    `Pagamento: ${pagamento}%0A%0A`;


  mensagem +=
    "PEDIDO:%0A";


  carrinhoProdutos.forEach(function (item) {

    mensagem +=
      `${item.produto} - Quantidade: ${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2)}%0A`;

  });


  mensagem +=
    `%0ATotal: R$ ${total.toFixed(2)}`;


  if (observacoes !== "") {

    mensagem +=
      `%0A%0AObservações: ${observacoes}`;

  }


  // Abrir WhatsApp

  const numeroWhatsApp = "";

  const url =
    `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

if(numeroWhatsApp == null || numeroWhatsApp == ""){
  alert('Numero da pizzaria esta invalido!');
  return;
}

  window.open(url, "_blank");

});
