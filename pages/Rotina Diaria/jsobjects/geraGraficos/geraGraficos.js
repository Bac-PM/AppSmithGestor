export default {
	getPesoTempo () {
		
		
		const data = get_peso_cao.data.data;
		
		const xAxisData = data.map(item => item.peso);
		const yAxisData = data.map(item => {
  const date = new Date(item.updatedAt);
  return date.toLocaleDateString('pt-BR'); // Formato dd/mm/yyyy
});
		
		
		const graficoPeso = {
			
					 title: {
				text: 'Gráfico do Peso pelo Tempo'
			},
			tooltip: {
					trigger: 'axis',
					axisPointer: { type: 'cross' }
				},
				legend: {},
			xAxis: {
				type: 'category',
				data: yAxisData
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: xAxisData,
					type: 'line'
				}
			]
		}
		return graficoPeso
		
	},
	getRacao () {
		
		
		const data = get_racao_cao.data.data;
		
		const xAxisData = data.map(item => item.quantidade);
		const yAxisData = data.map(item => {
  const date = new Date(item.data);
  return date.toLocaleDateString('pt-BR'); // Formato dd/mm/yyyy
});
		
		
		const graficoPeso = {
			
					 title: {
				text: 'Quantidade de ração pelo Tempo'
			},
			tooltip: {
					trigger: 'axis',
					axisPointer: { type: 'cross' }
				},
				legend: {},
			xAxis: {
				type: 'category',
				data: yAxisData
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: xAxisData,
					type: 'line'
				}
			]
		}
		return graficoPeso
		
	},
	getRacaoMediaPorDia () {

		
		const data = get_racao_cao.data.data;
		
		const mediasPorDiaUltimasDuasSemanas = funcoesAuxliarGraficos.calcularMediaPorDiaUltimasDuasSemanas(data);
		const dias = Object.keys(mediasPorDiaUltimasDuasSemanas);
    const medias = Object.values(mediasPorDiaUltimasDuasSemanas);
		
		
		
 	const graficoPeso = {
      title: {
        text: 'Média de Ração Consumida (Últimas 2 Semanas) por Dia da Semana'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: dias,
        name: 'Dia da Semana'
      },
      yAxis: {
        type: 'value',
        name: 'Média de Ração (g)'
      },
      series: [{
        data: medias,
        type: 'bar',
        barWidth: '50%',
        itemStyle: {
          color: '#83bff6'
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{c} g'
        }
      }]
    }		
	
		
		return graficoPeso
		
	},
	getRacaoPorDia () {
		
		const data = get_racao_cao.data.data;
	
		const totalPorDiaUltimasDuasSemanas = funcoesAuxliarGraficos.calcularTotalPorDiaUltimasDuasSemanas(data);
	
		const dias = Object.keys(totalPorDiaUltimasDuasSemanas); // ['Segunda', 'Quarta', 'Sexta']
		const totais = Object.values(totalPorDiaUltimasDuasSemanas).map(item => item.totalQuantidade); // [250, 300, 300]

		const graficoPeso = {
		title: {
			text: 'Total de Ração Consumida (Últimas 2 Semanas) por Dia da Semana'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: {
			type: 'category',
			data: dias,  // Dias da semana
			name: 'Dia da Semana'
		},
		yAxis: {
			type: 'value',
			name: 'Total de Ração (g)'
		},
		series: [{
			data: totais,  // Total por dia da semana nas últimas 2 semanas
			type: 'bar',
			barWidth: '50%',
			itemStyle: {
				color: '#83bff6'
			},
			label: {
				show: true,
				position: 'top',
				formatter: '{c} g'
			}
		}]
	}		
	
		return graficoPeso
		
	},
	
	RacaoUltimos2Meses(){
		
	
		//const data = get_racao_cao.data.data;
		const data = funcoesAuxliarGraficos.gerarRegistrosRealistas();
		const dadosAgrupados = funcoesAuxliarGraficos.agruparPorDiaETipo(data);
		const datas = Object.keys(dadosAgrupados).sort(); 
		const datasFormatadas = datas.map(data => funcoesAuxliarGraficos.formatarDataParaExibicao(data));
		const tiposDeRacao = [...new Set(data.map(item => item.tipo_racao))];  // Tipos de ração
		const totalPorDia = datas.map(data => {
      return Object.values(dadosAgrupados[data]).reduce((total, quantidade) => total + quantidade, 0);
    });

		// Preparamos as séries (dados por tipo de ração)
		const series = tiposDeRacao.map(tipo => {
			return {
				name: tipo,
				type: 'line',
				stack: 'total',
				//areaStyle: {},
				data: datas.map(data => dadosAgrupados[data][tipo] || 0)   // Valor de cada tipo em cada dia
			};
		});
		// Adicionar a série do total de ração
    series.push({
      name: 'Total',
      type: 'line',
      stack: 'total',  // Mantém o stack, mas pode remover se não quiser empilhar com os outros tipos
      data: totalPorDia,  // Dados do total de ração por dia
      lineStyle: {
        type: 'dashed',  // Deixa a linha do total diferente (opcional)
        width: 3
      }
    });

		const graficoUltimo2Meses = {
		title: {
			text: 'Consumo de Ração nos Últimos 2 Meses'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
        data: [...tiposDeRacao, 'Total']  // Adiciona o "Total" na legenda
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: datasFormatadas,  // Datas formatadas para exibição (dd/mm/yyyy)
			name: 'Data'
		},
		yAxis: {
			type: 'value',
			name: 'Quantidade de Ração (g)'
		},
		series: series
	}
	return graficoUltimo2Meses;
		
},
	
	
	
}