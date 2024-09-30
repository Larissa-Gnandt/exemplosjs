function getListaIngredientes(receita) {
  let listaNaoOrdenadaDeIngredientes = "<ul>";
  listaNaoOrdenadaDeIngredientes += receita.ingredientes
    .map((ingrediente) => `<li>${ingrediente}</li>`)
    .join("");
  listaNaoOrdenadaDeIngredientes += "</ul>";
  return listaNaoOrdenadaDeIngredientes;
}

function getCard(receita) {
  return `
        <div class="card" style="width: 250px;">
            <img src="${receita.imagem}" class="card-img-top" alt="Imagem de ${
    receita.titulo
  }">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    ${receita.preparo}
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
  const receitas = [
    {
      titulo: "Arroz de Couve-Flor",
      imagem: "assets/images/arroz-de-couve-flor.jpeg",
      preparo:
        "Deixe a couve-flor picada. Adicione mos ingredientes e refogue bem. Adicinoe sal, tampe a panela e deixe cozinhar.",
      ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Alho", "Azeite"],
    },
    {
      titulo: "Bolo de Café",
      imagem: "assets/images/bolo-de-cafe.png",
      preparo:
        "Bata o açúcar, as gemas e o café. Adicone farinha e o chocolate e mexa bem. Batas as claras e junte à mistura.",
      ingredientes: [
        "Farinha de Trigo",
        "Açúcar",
        "Café Coado",
        "Chocolate em Pó",
        "Ovos",
      ],
    },
    {
      titulo: "Coxinha de Brigadeiro",
      imagem: "assets/images/coxinha-brigadeiro.jpg",
      preparo:
        "Deixe a couve-flor picada. Adicione mos ingredientes e refogue bem. Adicinoe sal, tampe a panela e deixe cozinhar.",
      ingredientes: [
        "Leite Condensado",
        "Chocolate em Pó",
        "Manteiga",
        "Morango",
        "Chocolate Granulado",
      ],
    },
  ];

  const pnlCatalogo = document.getElementById("pnlCatalogo");

  const cardsHTML = receitas.map(getCard).join("");
  pnlCatalogo.innerHTML = cardsHTML;
}
