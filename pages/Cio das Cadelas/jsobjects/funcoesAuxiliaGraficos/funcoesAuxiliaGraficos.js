export default {
formataDatas (data) {

	const datasFormatadas = data.map(item => {
		const data = new Date(item.data_de_entrada);
		const dia = String(data.getDate()).padStart(2, '0');
		const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês zero-indexado
		const ano = data.getFullYear();
		return `${dia}/${mes}/${ano}`;
	});
	return datasFormatadas;
}


	
	
	
	
}