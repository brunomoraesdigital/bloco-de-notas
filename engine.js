// recebe a data
function obterData() {
  let dataSelecionada = document.getElementById('dataInput').value;
  let partesData = dataSelecionada.split('-');
  let data = {
    ano: parseInt(partesData[0], 10),
    mes: parseInt(partesData[1], 10),
    dia: parseInt(partesData[2], 10)
  };
  return data;
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
// passa o número do mes para o seu respectivo nome
function converteNomeMes(mes) {
  let nomeDoMes =
    mes === 1 ? 'janeiro' :
      mes === 2 ? 'fevereiro' :
        mes === 3 ? 'março' :
          mes === 4 ? 'abril' :
            mes === 5 ? 'maio' :
              mes === 6 ? 'junho' :
                mes === 7 ? 'julho' :
                  mes === 8 ? 'agosto' :
                    mes === 9 ? 'setembro' :
                      mes === 10 ? 'outubro' :
                        mes === 11 ? 'novembro' :
                          mes === 12 ? 'dezembro' :
                            'Número inválido';
  return nomeDoMes;
}


// data atual
function mostraData () {
  let data = obterData();
  mostrarResultados(data);
}
// atualiza diminuindo a data
function diminuiData () { 
  let data = obterData();
  let dia = data.dia; 
  let mes = data.mes; 
  let ano = data.ano; 
  

  dia -= 1; 
  if (dia < 1) {
    mes -= 1; 
    dia = verificaQuantidadeDiasMes(mes); 
    if (mes < 1) {
      mes = 12;
      dia = verificaQuantidadeDiasMes(mes);
      ano -= 1
    }
  }
  data.dia = dia;
  data.mes = mes;
  data.ano = ano;
  //return data;
  mostrarResultados(data);
}
// atualiza aumentando a data
function aumentaData () { 
  let data = obterData();
  let dia = data.dia; 
  let mes = data.mes; 
  let ano = data.ano; 

  dia += 1; 
  if (dia > verificaQuantidadeDiasMes(mes)) {
    mes += 1; 
    dia = 1;
    if (mes > 12) {
      mes = 1;
      dia = 1
      ano += 1
    }
  }
  data.dia = dia;
  data.mes = mes;
  data.ano = ano;

  mostrarResultados(data);
  //return data;
}



function mostrarResultados(data) {
  //let data = obterData();
  //let data = aumentaData();
  //let data = diminuiData();
  let nomeDoMes = converteNomeMes(data.mes);
  // Obtém a quantidade de dias no mês
  let quantidadeDias = verificaQuantidadeDiasMes(data.mes, data.ano);
  // Obtém o dia da semana para a data específica
  let diaSemana = verificaDiaSemanaQualquerData(data.dia, data.mes, data.ano);
  // Exibe a saída com ambas as informações

  const outputTextA = document.getElementById('qualSemana');
  const outputTextB = document.getElementById('quantosDias');
  const outputTextC = document.getElementById('anoBisexto');

  if (data.ano) {
    outputTextA.innerHTML = `O dia <span class="destaque">${data.dia}/${data.mes}/${data.ano}</span> caiu numa ${diaSemana}.`;
    outputTextB.innerHTML = `O mês de <span class="destaque">${nomeDoMes}</span> tem ${quantidadeDias} dias.`;
    outputTextC.innerHTML = `O ano <span class="destaque">${data.ano}</span>  ${verificaSeAnoBissexto(data.ano) ? 'é bisexto' : 'não é bisexto'}`;
  }

}



