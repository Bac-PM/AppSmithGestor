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
            
        }]
    };

    return graficoCio;
}


	
	
	
	
}