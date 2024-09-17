export default {
	gerarPdf: () => {
		const dadosBanho = getBanhoAllTeste.data;
		
		const doc = jspdf.jsPDF();
		
		const colunasBanho = ["Data", "Realizado por"];

		// Definir as linhas da tabela a partir dos dados da API
		const linhasBanho = dadosBanho.map((item) => [
			new Date(item.data).toLocaleDateString(),  // Formatar a data
			item.users_permissions_user.username
		]);
		
		doc.autoTable({
					head: [colunasBanho],  // Cabeçalhos da tabela
					body: linhasBanho,     // Dados da tabela
					startY: 20,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});

		// Baixar o PDF
			doc.save('Prontuário do Cão');
			download(doc.output(), 'Prontuário do Cão.pdf');
		
	}
}