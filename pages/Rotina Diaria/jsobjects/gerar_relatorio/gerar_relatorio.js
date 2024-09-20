export default {		
    gerarPDF: () => {
			
			rodarGets.getsRelatorio();
			
			// Supondo que os dados vêm da API chamada "GetPesosAPI"
			const dadosBanho = getBanhoRelatorio.data.data;
			//const dadosColeira = getColeiraRelatorio.data.data;
			const dadosConsulta = getConsultaRelatorio.data.data;
			const dadosEcto = getEctoRelatorio.data.data;
			const dadosLiberdade = getLiberdadeRelatorio.data.data;
			const dadosRacao = getRacaoRelatorio.data.data;
			const dadosRasqueamento = getRasqueamentoRelatorio.data.data;
			const dadosVacina = getVacinaRelatorio.data.data;
			const dadosVerm = getVermRelatorio.data.data;
			const dadosUsuario = getIdUsuario.data;	
			
			function formatarHoras(dataP){
				const hours = dataP.getHours().toString().padStart(2, '0');
				const minutes = dataP.getMinutes().toString().padStart(2, '0');
    		return `${hours}:${minutes}`;
			}
			
			function formatarData(dataP) {
				const dia = dataP.getDate().toString().padStart(2, '0');
				const mes = (dataP.getMonth() + 1).toString().padStart(2, '0'); // Lembre-se de adicionar 1 ao mês
				const ano = dataP.getFullYear();
				return `${dia}/${mes}/${ano}`;
			}
			
							
			//const dataHoje = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();							
			const dataHoje = formatarData(new Date());

			// Criar o documento PDF
			const doc = new jspdf.jsPDF();
			
			// Definir o tamanho da fonte e o estilo para o título
			doc.setFontSize(24);
			doc.setFont(undefined, "bold"); // Define o estilo como bold sem mudar a fonte

			// Adicionar o título "Prontuário de (nome do cão)"
			const nomeUsuario = dadosUsuario.username;
			doc.text(`Relatório diário de ${nomeUsuario} - ${dataHoje}`, 10, 20); // Posição inicial do título

			// Redefinir o tamanho da fonte e o estilo para o restante do documento
			doc.setFontSize(16);
			doc.setFont(undefined, "normal"); // Restaura o estilo para normal sem mudar a fonte

			let positionY = 30; // Adicione espaço extra após o título
			
			// Banhos
						
			//Verifique se os dados de banho estão disponíveis
			if (!dadosBanho || dadosBanho.length !== 0) {
				
				doc.text("Banhos", 14, positionY);
				positionY += 12;
			
				// Definir as colunas da tabela
				const colunasBanho = ["Animal", "Horário do Banho"];

				// Definir as linhas da tabela a partir dos dados da API
				const linhasBanho = dadosBanho.map((item) => [
					item.animal.Nome,
					formatarHoras(new Date(item.data))
					//new Date(item.data).getHours() + ":" + new Date(item.data).getMinutes()
				]);

				// Gerar a tabela
				doc.autoTable({
					head: [colunasBanho],  // Cabeçalhos da tabela
					body: linhasBanho,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			} 
			
			// Consultas
			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosConsulta|| dadosConsulta.length !== 0) {
				
				doc.text("Consultas", 14, positionY);
				positionY += 12;
				
				const colunasConsulta = ["Animal", "Anamnese", "Exame Físico", "Diagnóstico", "É Retorno"];
			
				const linhasConsulta = dadosConsulta.map((item) => [
					item.animal.Nome,
					item.anamnese,
					item.exame_fisico,
					item.diagnostico,
					item.retorno ? "Sim" : "Não"
				]);


				doc.autoTable({
					head: [colunasConsulta],  // Cabeçalhos da tabela
					body: linhasConsulta,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
			positionY = doc.lastAutoTable.finalY + 12;
			}
			
			//ECTOS
			//Verifique se os dados de banho estão disponíveis
			if (!dadosEcto|| dadosEcto.length !== 0) {
				
				doc.text("Ectoparasiticida", 14, positionY);
				positionY += 12;
				
				const colunasEcto = ["Animal", "Nome do Ectoparasiticida"]
			
				const linhasEcto = dadosEcto.map((item) => [
					item.animal.Nome,
					item.historico_nome,
				]);

				doc.autoTable({
					head: [colunasEcto],  // Cabeçalhos da tabela
					body: linhasEcto,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12;
			}
			
			//LIBERDADE	
			//Verifique se os dados de banho estão disponíveis
			if (!dadosEcto|| dadosEcto.length !== 0) {
				
				doc.text("Liberdade", 14, positionY);
				positionY += 12;
				
				const colunasLiberdade = ["Animal", "Horário da Liberdade", "Descrição da Atividade"]
			
				const linhasLiberdade = dadosLiberdade.map((item) => [
					item.animal.Nome,
					formatarHoras(new Date(item.Data)),
					//new Date(item.Data).getHours() + ":" + new Date(item.Data).getMinutes(),
					item.descricao
				]);


				doc.autoTable({
					head: [colunasLiberdade],  // Cabeçalhos da tabela
					body: linhasLiberdade,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12;
			}
							
			//RACAO			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosRacao|| dadosRacao.length !== 0) {
				
				doc.text("Ração", 14, positionY);
				positionY += 12;
				
				const colunasRacao = ["Animal", "Horário de Alimentação", "Quantidade", "Tipo da Ração"]
			
				const linhasRacao = dadosRacao.map((item) => [
					item.animal.Nome,
					formatarHoras(new Date(item.data)),
					//new Date(item.data).getHours() + ":" + new Date(item.data).getMinutes(),
					item.quantidade + "g",
					item.tipo_racao
				]);

				doc.autoTable({
					head: [colunasRacao],  // Cabeçalhos da tabela
					body: linhasRacao,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
				}
			});
				positionY = doc.lastAutoTable.finalY + 12;
			}

			
			//RASQUEAMENTO					
			//Verifique se os dados de banho estão disponíveis
			if (!dadosRasqueamento|| dadosRasqueamento.length !== 0) {
				
				doc.text("Rasqueamento", 14, positionY);
				positionY += 12;
				
				const colunasRasqueamento = ["Animal", "Horário que foi Rasqueado"]
			
				const linhasRasqueamento =  dadosRasqueamento.map((item) => [
					item.animal.Nome,
					formatarHoras(new Date(item.Data))
					//new Date(item.Data).getHours() + ":" + new Date(item.Data).getMinutes()
				]);

				doc.autoTable({
					head: [colunasRasqueamento],  // Cabeçalhos da tabela
					body: linhasRasqueamento,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12;
			}

			//VACINAS
			//Verifique se os dados de banho estão disponíveis
			if (!dadosVacina|| dadosVacina.length !== 0) {
				
				doc.text("Vacinas", 14, positionY);
				positionY += 12;
				
				const colunasVacina = ["Animal", "Nome e Tipo da Vacina", "Dose Aplicada", "Doses Totais"]
			
				const linhasVacina = dadosVacina.map((item) => [
					item.animal.Nome,
					item.historico_nome,
					item.dose_atual,
					item.doses_totais === 0 ? "Dose Anual" : item.doses_totais
				]);

				doc.autoTable({
					head: [colunasVacina],  // Cabeçalhos da tabela
					body: linhasVacina,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12;
			}	
			
			//VERMIFUGO
			//Verifique se os dados de banho estão disponíveis
			if (!dadosVerm|| dadosVerm.length !== 0) {
				doc.text("Vermífugo", 14, positionY);
				positionY += 12;
				
				const colunasVerm = ["Animal", "Nome do Vermífugo"]
			
				const linhasVerm = dadosVerm.map((item) => [
					item.animal.Nome,
					item.historico_nome
				]);

				doc.autoTable({
					head: [colunasVerm],  // Cabeçalhos da tabela
					body: linhasVerm,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12;
			}
			
			positionY += 12;

			// Verificar se há espaço suficiente para o campo de texto na página atual
			const pageHeight = doc.internal.pageSize.height; // Altura total da página

			// Verifique se o campo de texto vai ultrapassar o limite da página
			if (positionY + 50 > pageHeight) {
					doc.addPage(); // Adiciona uma nova página se necessário
					positionY = 20; // Redefine a posição Y na nova página
			}

			// Adicionar o campo de texto para observações
			const textField = new jspdf.AcroFormTextField();
			textField.Rect = [10, positionY, 180, 50]; // Usar positionY para evitar sobreposição
			textField.fieldName = "obs";
			textField.fontSize = 12;
			textField.defaultValue = "Escreva aqui as observações"; // Define o texto inicial
			textField.multiline = true;

			// Adicionar o campo de texto ao PDF
			doc.addField(textField);

			// Adicionar o texto no PDF para indicar onde o campo está
			doc.text("Observações:", 10, positionY - 5); // Adicionar um pouco acima do campo de texto
			doc.rect(10, positionY, 180, 50); // Desenhar a caixa ao redor do campo de texto

			// Atualizar a posição Y para evitar que novos elementos se sobreponham ao campo de texto
			positionY += 55; // Ajustar para o espaço do campo de texto
			
			// Baixar o PDF
			const dataTitulo = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();
			doc.save(`Relatório diário de ${nomeUsuario} - ${dataTitulo}`);
			download(doc.output(), `Relatório diário de ${nomeUsuario} - ${dataHoje}.pdf`);

		}
}