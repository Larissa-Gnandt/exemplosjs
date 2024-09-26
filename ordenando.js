const swap = (vetor, posicao1, posicao2) => {
  let temporario = vetor[posicao1];
  vetor[posicao1] = vetor[posicao2];
  vetor[posicao2] = temporario;
};

const shuffle = (vetor, quantidadeDeTrocas) => {
  for (
    let contagemTrocas = 0;
    contagemTrocas < quantidadeDeTrocas;
    contagemTrocas++
  ) {
    let posicaoAleatoria1 = Math.floor(Math.random() * vetor.length);
    let posicaoAleatoria2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, posicaoAleatoria1, posicaoAleatoria2);
  }
};

const bubble_sort = (vetor) => {
  let quantidadeElementos = vetor.length;
  for (
    let iteracaoAtual = 0;
    iteracaoAtual < quantidadeElementos - 1;
    iteracaoAtual++
  ) {
    for (
      let indiceComparacao = 0;
      indiceComparacao < quantidadeElementos - iteracaoAtual - 1;
      indiceComparacao++
    ) {
      if (vetor[indiceComparacao] > vetor[indiceComparacao + 1]) {
        swap(vetor, indiceComparacao, indiceComparacao + 1);
      }
    }
  }
};

const selection_sort = (vetor) => {
  let quantidadeElementos = vetor.length;
  for (
    let posicaoAtual = 0;
    posicaoAtual < quantidadeElementos - 1;
    posicaoAtual++
  ) {
    let indiceMenorElemento = posicaoAtual;
    for (
      let proximoIndice = posicaoAtual + 1;
      proximoIndice < quantidadeElementos;
      proximoIndice++
    ) {
      if (vetor[proximoIndice] < vetor[indiceMenorElemento]) {
        indiceMenorElemento = proximoIndice;
      }
    }
    swap(vetor, posicaoAtual, indiceMenorElemento);
  }
};

const particionamento = (vetor, posicaoInicial, posicaoFinal) => {
  let pivo = vetor[posicaoFinal];
  let indiceMenor = posicaoInicial - 1;

  for (
    let indiceAtual = posicaoInicial;
    indiceAtual < posicaoFinal;
    indiceAtual++
  ) {
    if (vetor[indiceAtual] < pivo) {
      indiceMenor++;
      swap(vetor, indiceMenor, indiceAtual);
    }
  }
  swap(vetor, indiceMenor + 1, posicaoFinal);
  return indiceMenor + 1;
};

const quick_sort = (vetor, posicaoInicial, posicaoFinal) => {
  if (posicaoInicial < posicaoFinal) {
    let indicePivo = particionamento(vetor, posicaoInicial, posicaoFinal);
    quick_sort(vetor, posicaoInicial, indicePivo - 1);
    quick_sort(vetor, indicePivo + 1, posicaoFinal);
  }
};
