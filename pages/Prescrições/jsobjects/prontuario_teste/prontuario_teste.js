export default {
	myFun1() {
		// Obter os dados da API
		const pront_vac = get_vacinas_aplicadas.data.data;
		const pront_peso = get_peso_cao.data.data;

		// Criar uma nova instância de jsPDF
		const doc = new jspdf.jsPDF();

		let yPosition = 10; // Posição inicial no PDF
		const pageHeight = doc.internal.pageSize.height; // Altura da página
		const pageWidth = doc.internal.pageSize.width; // Largura da página
		const lineHeight = 8; // Altura da linha/passo entre os textos
		
		// Função para formatar a data
		function formatDate(dateString) {
			// Verifica se a data está no formato com hora 'YYYY-MM-DDTHH:MM:SSZ'
			if (dateString.includes('T')) {
				const date = new Date(dateString);
				return date.toLocaleDateString('pt-BR'); // Formata para DD/MM/YYYY
			} else {
				// Assume que o formato é 'YYYY-MM-DD'
				const [year, month, day] = dateString.split('-');
				return `${day}/${month}/${year}`; // Formata para DD/MM/YYYY
			}
		}
		
		// Obter o nome do animal a partir do seletor
		const nomeAnimal = seletor_animal.selectedOptionLabel;

		// Adicionar o nome do animal no PDF
		doc.setFontSize(24);
		doc.setFont(undefined, 'bold'); // Definir fonte em negrito
		doc.text(5, yPosition, `Prontuário do ${nomeAnimal}`);
		doc.setFont(undefined, 'normal'); // Definir fonte normal
		
		// Adicionar linha horizontal no meio da página
		doc.line(5, yPosition + 10, pageWidth - 5, yPosition + 10); // Linha da margem esquerda à direita
		yPosition += lineHeight * 2 ; // Espaço após a linha para o próximo conteúdo
	
		// Iterar sobre os dados e adicionar texto ao PDF
		doc.setFontSize(16);
		doc.text(5, yPosition, `Vacinas`);
		yPosition += lineHeight; // Ajusta para a próxima linha
		
		doc.setFontSize(12);
		pront_vac.forEach((item, index) => {
			// Verifica se a próxima posição de texto ultrapassa a altura da página
			if (yPosition + 3 * lineHeight > pageHeight) {
				doc.addPage(); // Adiciona uma nova página
				yPosition = 10; // Redefine a posição para o topo da nova página
			}
			doc.text(10, yPosition, `Nome da Vacina: ${item.nome_vacina.nome}`);
			yPosition += lineHeight;
			doc.text(10, yPosition, `${item.dose_atual}° Dose de ${item.doses_totais} Doses`);
			yPosition += lineHeight;
			const dataAplicacaoFormatada = formatDate(item.data_aplicacao);
			doc.text(10, yPosition, `Aplicada por: ${item.aplicado_por.username} em ${dataAplicacaoFormatada}`);
			yPosition += lineHeight * 2; // Espaço adicional entre os grupos de dados
		});
		
		// Adicionar linha horizontal no meio da página
		doc.line(5, yPosition + 10, pageWidth - 5, yPosition + 10); // Linha da margem esquerda à direita
		yPosition += lineHeight * 3; // Espaço após a linha para o próximo conteúdo
		
		doc.setFontSize(16);
		doc.text(5, yPosition, `Pesos`);
		yPosition += lineHeight; // Ajusta para a próxima linha
		
		doc.setFontSize(12);
		pront_peso.forEach((item, index) => {
			// Verifica se a próxima posição de texto ultrapassa a altura da página
			if (yPosition + 2 * lineHeight > pageHeight) {
				doc.addPage(); // Adiciona uma nova página
				yPosition = 10; // Redefine a posição para o topo da nova página
			}
			const dataPesoFormatada = formatDate(item.data);
			doc.text(10, yPosition, `Data: ${dataPesoFormatada}`);
			yPosition += lineHeight;
			doc.text(10, yPosition, `Peso do semovente: ${item.peso}kg`);
			yPosition += lineHeight * 2; // Espaço adicional entre os grupos de dados
		});

		// Download do PDF
		doc.save("teste_de_prontuario.pdf");
		download(doc.output(), "teste_de_prontuario.pdf");
	}
}
