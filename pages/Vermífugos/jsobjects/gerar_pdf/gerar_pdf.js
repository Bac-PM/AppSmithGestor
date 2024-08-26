export default {
	myFun1() {
		// Obter os dados da API
		const dados = get_vermifugos.data.data; // Substitua 'get_vermifugos' pelo nome da sua API

		// Criar uma nova instância de jsPDF
		const doc = new jspdf.jsPDF();

		let yPosition = 10; // Posição inicial no PDF

		// Iterar sobre os dados e adicionar texto ao PDF
		dados.forEach((item, index) => {
			doc.text(10, yPosition + 10, `Id: ${item.id}`);
			doc.text(10, yPosition + 20, `Nome do Produto: ${item.nome_produto}`);
			doc.text(10, yPosition + 30, `Duração do Produto: ${item.duracao_em_dias} dias`);
			doc.text(10, yPosition + 30, ` `);
			yPosition += 40; // Move para a próxima linha
		});

		// Download do PDF
		doc.save("dados.pdf");
		download(doc.output(), "dados.pdf")
	}
}
