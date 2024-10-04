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
	downloadChart() {
		
  const chart = Chart4.getElementById('your-echarts-widget-id');
  if (chart) {
    const url = chart.getDataURL({
      type: 'png',
      pixelRatio: 2,
      backgroundColor: '#fff'
    });
    const a = document.createElement('a');
    a.href = url;
    a.download = "chart.png"; // You can customize the file name
    a.click();
  }
}
}