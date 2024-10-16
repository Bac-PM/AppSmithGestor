export default {
getPesoTempo () {
    const data = get_cios.data.data;

    // Encontrar a última data de entrada
    const ultimaData = new Date(Math.max(...data.map(item => new Date(item.data_de_entrada).getTime())));

    // Filtrar dados dos últimos 12 meses em relação à última data
    const umAnoAtras = new Date(ultimaData);
    umAnoAtras.setFullYear(ultimaData.getFullYear() - 1);

    const dadosFiltrados = data.filter(item => {
        const dataDeEntrada = new Date(item.data_de_entrada);
        return dataDeEntrada >= umAnoAtras && dataDeEntrada <= ultimaData;
    });

    // Formatar as datas no formato dd/mm/yyyy
    const yAxisData = dadosFiltrados.map(item => {
        const dataDeEntrada = new Date(item.data_de_entrada);
        return `${dataDeEntrada.getDate()}/${dataDeEntrada.getMonth() + 1}/${dataDeEntrada.getFullYear()}`;
    });

    const xAxisData = dadosFiltrados.map(item => item.animal.Nome);

    // Criar rótulos de "Cio N"
    const seriesData = dadosFiltrados.map((item, index) => ({
        value: index + 1, // Número do cio
        name: `Cio ${index + 1}` // Rótulo do cio
    }));

    // Montar o gráfico com os dados filtrados
    const graficoCio = {
        title: {
            text: 'Histórico de Entradas no Cio (Último Ano)'
        },
        xAxis: {
            type: 'category',
            data: yAxisData // Datas filtradas no eixo X
        },
        yAxis: {
            type: 'value',
            name: 'Cio'
        },
			 series: [{
							data: seriesData.map(item => item.value), // Apenas os valores dos cios
							type: 'line',
							markLine: {
									data: [
											{
													name: 'Período entre Cios',
                    coord: [yAxisData[0]],
                    coord2: [yAxisData[1]],
                    yAxis: (0),
													label: {
															show: true,
															formatter: '3 meses',  // Texto a ser exibido
															position: 'middle',   // Posição da label
															color: 'red'
													},
													lineStyle: {
															color: 'red',  // Cor da linha
															type: 'solid'
													}
											}
									]
							}
					}]
    };

    return graficoCio;
},
	
	getCios () {
		
    const data = get_cios.data.data;
		const datasFormatadas = funcoesAuxiliaGraficos.formataDatas(data);

    // Montar o gráfico com os dados filtrados
		const graficoCio = {
			title: {
				text: 'Histórico de Entradas no Cio - Xena'
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: datasFormatadas,  // Usar as datas formatadas como rótulos do eixo X
				name: 'Data de Entrada no Cio'
			},
			yAxis: {
				type: 'value',
				name: 'Número de Cios'
			},
			series: [{
				name: 'Entradas no Cio',
				type: 'line',
				data: datasFormatadas.map(() => 1),  // Marcar todas as entradas como "1" para representar os cios
				markPoint: {
					data: [
						{ type: 'max', name: 'Mais Recente' },
						{ type: 'min', name: 'Mais Antiga' }
					]
				}
			}]
		}

    return graficoCio;
},
	graficoCioCalendario () {
		
		// Supondo que a resposta do get seja armazenada na variável `get_cios`
		const dataCio = get_cios.data.data;

		// Função para formatar os dados para o formato necessário do gráfico
		const formatarDadosParaCalendario = (data) => {
				return data.map(item => {
						return [item.data_de_entrada, 1]; // 1 indica a presença de cio
				});
		};

		// Formatar os dados de cio
		const dadosFormatados = formatarDadosParaCalendario(dataCio);
		const graficoCioCalendario = {
				title: {
						text: 'Períodos de Cio do Animal'
				},
				tooltip: {
						position: 'top'
				},
				visualMap: {
						min: 0,
						max: 1,
						calculable: true,
						orient: 'horizontal',
						left: 'center',
						top: 'top'
				},
				calendar: {
						range: '2024',  // Ano que será exibido no calendário
						cellSize: ['auto', 20],
						itemStyle: {
								borderWidth: 1
						},
						dayLabel: {
								nameMap: 'pt-br'
						},
						monthLabel: {
								nameMap: 'pt-br'
						},
						yearLabel: {
								show: false
						}
				},
				series: [{
						type: 'heatmap',
						coordinateSystem: 'calendar',
						data: dadosFormatados
				}]
		};

	return graficoCioCalendario;
		
	}


	
	
	
	
}