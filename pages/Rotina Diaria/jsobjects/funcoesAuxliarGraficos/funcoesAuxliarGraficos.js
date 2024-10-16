export default {
// Função para obter o dia da semana de uma data
 getDiaSemana(data) {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const dataObj = new Date(data);
  return dias[dataObj.getDay()];
},

// Função para agrupar os dados por dia da semana e calcular a média
calcularMediaPorDia(dados) {
  const diasSemana = {};
  
  dados.forEach(item => {
    const dia = this.getDiaSemana(item.data);
    if (!diasSemana[dia]) {
      diasSemana[dia] = { totalQuantidade: 0, contador: 0 };
    }
    diasSemana[dia].totalQuantidade += item.quantidade;
    diasSemana[dia].contador += 1;
  });

  // Calcula a média de ração por dia da semana
  const medias = {};
  for (const dia in diasSemana) {
    medias[dia] = (diasSemana[dia].totalQuantidade / diasSemana[dia].contador).toFixed(2);
  }
  
  return medias;
},
	
	


// Função para verificar se a data está dentro das últimas 2 semanas
isWithinLastTwoWeeks(data) {
  const hoje = new Date();
  const dataRegistro = new Date(data);
  const duasSemanasAtras = new Date(hoje);
  duasSemanasAtras.setDate(hoje.getDate() - 14);
  return dataRegistro >= duasSemanasAtras && dataRegistro <= hoje;
},

// Função para agrupar os dados por dia da semana e calcular a média (somente das últimas 2 semanas)
calcularMediaPorDiaUltimasDuasSemanas(dados) {
  const diasSemana = {};
  
  dados.forEach(item => {
    if (funcoesAuxliarGraficos.isWithinLastTwoWeeks(item.data)) {  // Filtra os registros das últimas 2 semanas
      const dia = funcoesAuxliarGraficos.getDiaSemana(item.data);
      if (!diasSemana[dia]) {
        diasSemana[dia] = { totalQuantidade: 0, contador: 0 };
      }
      diasSemana[dia].totalQuantidade += item.quantidade;
      diasSemana[dia].contador += 1;
    }
  });

  // Calcula a média de ração por dia da semana
  const medias = {};
  for (const dia in diasSemana) {
    medias[dia] = (diasSemana[dia].totalQuantidade / diasSemana[dia].contador).toFixed(2);
  }
  
  return medias;
},
	
// Função para agrupar os dados por dia da semana e calcular o total de ração (somente das últimas 2 semanas)
calcularTotalPorDiaUltimasDuasSemanas(dados) {
  const diasSemana = {};
  
  dados.forEach(item => {
    if (funcoesAuxliarGraficos.isWithinLastTwoWeeks(item.data)) {  // Filtra os registros das últimas 2 semanas
      const dia = funcoesAuxliarGraficos.getDiaSemana(item.data);
      if (!diasSemana[dia]) {
        diasSemana[dia] = { totalQuantidade: 0 };
      }
      diasSemana[dia].totalQuantidade += item.quantidade;
    }
  });

  return diasSemana;
},
	
formatarData(data) {
  const dataObj = new Date(data);
  return dataObj.toISOString().split('T')[0];
},
	
agruparPorDiaETipo(dados) {
  const consumoPorDiaETipo = {};

  dados.forEach(item => {
    const dataFormatada = funcoesAuxliarGraficos.formatarData(item.data);
    
    if (!consumoPorDiaETipo[dataFormatada]) {
      consumoPorDiaETipo[dataFormatada] = {};
    }
    
    if (!consumoPorDiaETipo[dataFormatada][item.tipo_racao]) {
      consumoPorDiaETipo[dataFormatada][item.tipo_racao] = 0;
    }
    
    consumoPorDiaETipo[dataFormatada][item.tipo_racao] += item.quantidade;
  });

  return consumoPorDiaETipo;
},

	formatarDataParaExibicao(data) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, '0');
  const mes = String(dataObj.getMonth() + 1).padStart(2, '0');  // Mês é zero-indexado
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
},

	
gerarRegistrosRealistas() {
    const tiposDeRacao = ['Ração Competition', 'Premium', 'Ração Light'];
    const quantidadePorRefeicao = { 
        "Ração Competition": 250, 
        "Premium": 300, 
        "Ração Light": 200 
    };
    const horariosDeAlimentacao = ['08:00:00', '18:00:00'];
    const numeroDeDias = 15; // Últimos 60 dias
    const registros = [];

    // Gerar dados para os últimos 60 dias
    for (let i = 0; i < numeroDeDias; i++) {
        const data = new Date();
        data.setDate(data.getDate() - i); // Diminuir o dia conforme o loop

        // Definir o tipo de ração baseado na semana (troca a cada 2 semanas)
        const tipoRacaoAtual = tiposDeRacao[Math.floor(i / 14) % tiposDeRacao.length];

        // Para cada dia, criar dois registros de alimentação
        horariosDeAlimentacao.forEach(horario => {
            const dataComHorario = new Date(data);
            const [hora, minuto, segundo] = horario.split(':');
            dataComHorario.setUTCHours(hora, minuto, segundo);

            // Simular ocasionalmente um evento de alimentação diferente (mais ou menos ração)
            const variacao = Math.random() > 0.9 ? Math.floor(Math.random() * 100) - 50 : 0; 

            registros.push({
                id: registros.length + 1,
                data: dataComHorario.toISOString(),
                quantidade: quantidadePorRefeicao[tipoRacaoAtual] + variacao,  // Quantidade ajustada com variação
                tipo_racao: tipoRacaoAtual,
                animal: {
                    id: 123,
                    Nome: "musashi"
                },
                users_permissions_user: {
                    id: 55,
                    username: "dev"
                }
            });
        });
    }

    return registros;
},

	
}