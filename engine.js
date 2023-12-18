// Definição da data

let data = {

    dia: 1,

    mes: 12,

    ano: 2023

  }

  

  // Verifica se o ano é bissexto.

  function verificaSeAnoBissexto(ano) {

    return ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0);

  }
  // Verifica a quantidade de dias no mês.
  function verificaQuantidadeDiasMes(mes, ano) {
    switch (mes) {
      case 1:
      case 3:

      case 5:

      case 7:

      case 8:

      case 10:

      case 12:

        return 31;

  

      case 4:

      case 6:

      case 9:

      case 11:

        return 30;

  

      case 2:

        return verificaSeAnoBissexto(ano) ? 29 : 28;

    default:

      return false;

  }

}

// Congruência de Zeller - verifica o dia da semana para qualquer data

function verificaDiaSemanaQualquerData(dia, mes, ano) {

  if (mes < 3) {

    mes += 12;

    ano -= 1;

  }

  let q = dia;

  let m = mes;

  let k = ano % 100;

  let j = Math.floor(ano / 100);

  let h = (q + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - 2 * j) % 7;

  switch (h) {

    case 0:

      return 'sábado';

    case 1:

      return 'domingo';

    case 2:

      return 'segunda-feira';

    case 3:

      return 'terça-feira';

    case 4:

      return 'quarta-feira';

    case 5:

      return 'quinta-feira';

    case 6:

      return 'sexta-feira';

    default:

      return 'algo deu errado: 1';

  }

}

// Obtém a quantidade de dias no mês

let quantidadeDias = verificaQuantidadeDiasMes(data.mes, data.ano);

// Obtém o dia da semana para a data específica

let diaSemana = verificaDiaSemanaQualquerData(data.dia, data.mes, data.ano);

// Exibe a saída com ambas as informações

const outputTextA = document.getElementById ('qualSemana');

const outputTextB = document.getElementById('quantosDias');

const outputTextC = document.getElementById('anoBisexto');

outputTextA.textContent = `O dia ${data.dia} do mês ${data.mes} do ano ${data.ano} caiu numa ${diaSemana}.`;

outputTextB.textContent = `O mês ${data.mes} do ano ${data.ano} tem ${quantidadeDias} dias.`;

outputTextC.textContent = `O ano ${data.ano}  ${verificaSeAnoBissexto(data.ano) ? 'é bisexto' : 'não é bisexto'}`;