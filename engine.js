// [Função] para obter a data do input e chamar a função para mostrar resultados
function recebeData() {
  // Obtém a data do input
  let dataSelecionada = document.getElementById('dataInput').value;
  // Divide a data em partes (ano, mês, dia)
  let partesData = dataSelecionada.split('-');
  // Cria um objeto 'data' com as partes convertidas para números
  let data = {
      ano: parseInt(partesData[0], 10),
      mes: parseInt(partesData[1], 10),
      dia: parseInt(partesData[2], 10)
  };
  // Chama a função para mostrar os resultados com a data obtida
  mostrarResultados(data);
  // Retorna o objeto 'data'
  return data;
}

// [Função] para diminuir a data e atualizar o input e o DOM
function diminuiData() {
  // Obtém a data atual
  let data = recebeData();
  let dia = data.dia;
  let mes = data.mes;
  let ano = data.ano;

  // Lógica para diminuir a data
  dia -= 1; 
  if (dia < 1) {
      mes -= 1; 
      dia = verificaQuantidadeDiasMes(mes); 
      if (mes < 1) {
          mes = 12;
          dia = verificaQuantidadeDiasMes(mes);
          ano -= 1;
      }
  }

  // Atualiza o objeto 'data'
  data.dia = dia;
  data.mes = mes;
  data.ano = ano;

  // Atualiza o input com a nova data formatada
  let novaDataFormatada = `${data.ano}-${String(data.mes).padStart(2, '0')}-${String(data.dia).padStart(2, '0')}`;
  document.getElementById('dataInput').value = novaDataFormatada;

  // Chama a função para mostrar os resultados atualizados no DOM
  mostrarResultados(data);
}

// [Função] para aumentar a data e atualizar o input e o DOM
function aumentaData() {
  // Obtém a data atual
  let data = recebeData();
  let dia = data.dia;
  let mes = data.mes;
  let ano = data.ano;

  // Lógica para aumentar a data
  dia += 1;
  if (dia > verificaQuantidadeDiasMes(mes)) {
      mes += 1;
      dia = 1;
      if (mes > 12) {
          mes = 1;
          dia = 1;
          ano += 1;
      }
  }

  // Atualiza o objeto 'data'
  data.dia = dia;
  data.mes = mes;
  data.ano = ano;

  // Atualiza o input com a nova data formatada
  let novaDataFormatada = `${data.ano}-${String(data.mes).padStart(2, '0')}-${String(data.dia).padStart(2, '0')}`;
  document.getElementById('dataInput').value = novaDataFormatada;

  // Chama a função para mostrar os resultados atualizados no DOM
  mostrarResultados(data);
}

// [Função] para verificar se um ano é bissexto
function verificaSeAnoBissexto(ano) {
  return ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0);
}

// [Função] para verificar a quantidade de dias em um mês
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

// [Função] para verificar o dia da semana para qualquer data
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

// [Função] para converter o número do mês para o nome do mês
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

// [Função] para mostrar os resultados no DOM
function mostrarResultados(data) {
  // Obtém o nome do mês
  let nomeDoMes = converteNomeMes(data.mes);
  // Obtém a quantidade de dias no mês
  let quantidadeDias = verificaQuantidadeDiasMes(data.mes, data.ano);
  // Obtém o dia da semana para a data específica
  let diaSemana = verificaDiaSemanaQualquerData(data.dia, data.mes, data.ano);

  // Seleciona os elementos no DOM
  const outputTextA = document.getElementById('qualSemana');
  const outputTextB = document.getElementById('quantosDias');
  const outputTextC = document.getElementById('anoBisexto');

  // Atualiza os elementos no DOM com as informações obtidas
  if (data.ano) {
      outputTextA.innerHTML = `O dia <span class="destaque">${data.dia}/${data.mes}/${data.ano}</span> caiu numa ${diaSemana}.`;
      outputTextB.innerHTML = `O mês de <span class="destaque">${nomeDoMes}</span> tem ${quantidadeDias} dias.`;
      outputTextC.innerHTML = `O ano <span class="destaque">${data.ano}</span>  ${verificaSeAnoBissexto(data.ano) ? 'é bissexto' : 'não é bissexto'}`;
  }
}
