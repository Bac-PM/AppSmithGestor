export default {
    gerarPDF: () => {
			// Supondo que os dados vêm da API chamada "GetPesosAPI"
			const dadosBanho = getBanho.data;
			const dadosColeira = getColeira.data;
			const dadosConsulta = getConsulta.data;
			const dadosEcto = getEcto.data;
			const dadosLiberdade = getLiberdade.data;
			const dadosMedicamento = getMedicamento.data;
			const dadosPeso = getPeso.data;
			const dadosRacao = getRacao.data;
			const dadosRasqueamento = getRasqueamento.data;
			const dadosVacina = getVacina.data;
			const dadosVerm = getVerm.data;
			
			
			function formatarHoras(date){
				const hours = date.getHours().toString().padStart(2, '0');
				const minutes = date.getMinutes().toString().padStart(2, '0');
    
    		return `${hours}:${minutes}`;
			}

			// Criar o documento PDF
			const doc = new jspdf.jsPDF();
			
			// Definir o tamanho da fonte e o estilo para o título
			doc.setFontSize(24);
			doc.setFont(undefined, "bold"); // Define o estilo como bold sem mudar a fonte

			// Adicionar o título "Prontuário de (nome do cão)"
			const nomeCao = Lista_de_Animais.triggeredRow.Nome;
			doc.text(`Prontuário de ${nomeCao}`, 10, 20); // Posição inicial do título

			// Redefinir o tamanho da fonte e o estilo para o restante do documento
			doc.setFontSize(16);
			doc.setFont(undefined, "normal"); // Restaura o estilo para normal sem mudar a fonte



			let positionY = 30; // Adicione espaço extra após o título
			
			// Banhos
			
			doc.text("Banhos", 14, positionY);
			positionY += 12;
			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosBanho || dadosBanho.length !== 0) {
			
				// Definir as colunas da tabela
				const colunasBanho = ["Data", "Realizado por"];

				// Definir as linhas da tabela a partir dos dados da API
				const linhasBanho = dadosBanho.map((item) => [
					new Date(item.data).toLocaleDateString(),  // Formatar a data
					item.users_permissions_user.username
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}
			
			// COLEIRAS
			doc.text("Coleiras", 14, positionY);
			positionY += 12;
			//Verifique se os dados de banho estão disponíveis
			if (!dadosColeira|| dadosColeira.length !== 0) {
				const colunasColeira = ["Nome", "Inicio de Uso", "Fim de Uso"];
			
				const linhasColeira = dadosColeira.map((item) => [
					item.historico_nome,
					new Date(item.data_aplicacao).toLocaleDateString(),
					new Date(item.data_proxima_aplicacao).toLocaleDateString()
				]);

				doc.autoTable({
					head: [colunasColeira],  // Cabeçalhos da tabela
					body: linhasColeira,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12;
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}
			
			// Consultas
			doc.text("Consultas", 14, positionY);
			positionY += 12;
			//Verifique se os dados de banho estão disponíveis
			if (!dadosConsulta|| dadosConsulta.length !== 0) {
				const colunasConsulta = ["Data da Consulta", "Realizado Por", "Anamnese", "Exame Físico", "Diagnóstico", "É Retorno"];
			
				const linhasConsulta = dadosConsulta.map((item) => [
					new Date(item.data_consulta).toLocaleDateString(),  // Formatar a data
					item.users_permissions_user.username,
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}
			
			//ECTOS
			doc.text("Ectoparasiticida", 14, positionY);
			positionY += 12;
			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosEcto|| dadosEcto.length !== 0) {
				const colunasEcto = ["Nome", "Data de Aplicação", "Aplicado Por"]
			
				const linhasEcto = dadosEcto.map((item) => [
					item.historico_nome,
					new Date(item.data_aplicacao).toLocaleDateString(),  // Formatar a data,
					item.aplicado_por.username
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}
			
			//LIBERDADE
			
			doc.text("Liberdade", 14, positionY);
			positionY += 12;
			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosEcto|| dadosEcto.length !== 0) {
				const colunasLiberdade = ["Data", "Descrição da Atividade", "Acompanhado Por"]
			
				const linhasLiberdade = dadosLiberdade.map((item) => [
					new Date(item.Data).toLocaleDateString(),
					item.descricao,
					item.users_permissions_user.username
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}
			
			//LIBERDADE
			
			doc.text("Medicamentos", 14, positionY);
			positionY += 12;
			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosMedicamento|| dadosMedicamento.length !== 0) {
				const colunasMedicamentos = ["Nome", "Data de Início", "Data de Fim", "Posologia", "Horário de Aplicação", "Observação", "Aplicado Por"];

				const linhasMedicamentos = dadosMedicamento.map((item) => [
					item.historico_nome,
					new Date(item.data_inicio).toLocaleDateString(),
					new Date(item.data_fim).toLocaleDateString(),
					item.posologia,
					formatarHoras(new Date(item.hora_de_aplicacao)),
					item.observacao,
					item.aplicado_por.username
				]);

				doc.autoTable({
					head: [colunasMedicamentos],  // Cabeçalhos da tabela
					body: linhasMedicamentos,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12;
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}
			
			//Pesos
			
			doc.text("Pesos", 14, positionY);
			positionY += 12;
			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosPeso|| dadosPeso.length !== 0) {
				const colunasPeso = ["Data", "Peso"]
			
				const linhasPeso = dadosPeso.map((item) => [
					new Date(item.data).toLocaleDateString(),
					item.peso + "kg"
				]);

				doc.autoTable({
					head: [colunasPeso],  // Cabeçalhos da tabela
					body: linhasPeso,     // Dados da tabela
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12;
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}
			
			//RACAOS
			
			doc.text("Ração", 14, positionY);
			positionY += 12;
			
			//Verifique se os dados de banho estão disponíveis
			if (!dadosRacao|| dadosRacao.length !== 0) {
				const colunasRacao = ["Data", "Quantidade", "Tipo da Ração", "Alimentado Por"]
			
				const linhasRacao = dadosRacao.map((item) => [
					new Date(item.data).toLocaleDateString(),
					item.quantidade + "g",
					item.tipo_racao,
					item.users_permissions_user.username
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});

				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}	
			
			//RASQUEAMENTO
			
			doc.text("Rasqueamento", 14, positionY);
			positionY += 12;
					
			//Verifique se os dados de banho estão disponíveis
			if (!dadosRasqueamento|| dadosRasqueamento.length !== 0) {
				const colunasRasqueamento = ["Data", "Rasqueado Por"]
			
				const linhasRasqueamento =  dadosRasqueamento.map((item) => [
					new Date(item.Data).toLocaleDateString(),
					item.users_permissions_user.username
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}	
			
			//VACINAS
			doc.text("Vacinas", 14, positionY);
			positionY += 12;
			//Verifique se os dados de banho estão disponíveis
			if (!dadosVacina|| dadosVacina.length !== 0) {
				const colunasVacina = ["Nome e Tipo", "Data da Aplicação", "Dose Aplicada", "Doses Totais", "Intervalo entre Doses", "Observação"]
			
				const linhasVacina = dadosVacina.map((item) => [
					item.historico_nome,
					new Date(item.data_aplicacao).toLocaleDateString(),
					item.dose_atual,
					item.doses_totais === 0 ? "Dose Anual" : item.doses_totais,
					item.intervalo_entre_doses,
					item.observacao
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}	
			
			
			//VERMIFUGO
			doc.text("Vermífugo", 14, positionY);
			positionY += 12;
			//Verifique se os dados de banho estão disponíveis
			if (!dadosVerm|| dadosVerm.length !== 0) {
				const colunasVerm = ["Nome", "Data de Aplicação", "Aplicado Por"]
			
				const linhasVerm = dadosVerm.map((item) => [
					item.historico_nome,
					new Date(item.data_aplicacao).toLocaleDateString(),  // Formatar a data,
					item.aplicado_por.username
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
			} else {
				const semDados = [["Não há dados"]]; // Colocar "Não há dados" como uma célula de corpo

				doc.autoTable({
					head: semDados,  // Cabeçalhos da tabela vazios, pois não há dados
					startY: positionY,
					headStyles: {
						fillColor: [48, 73, 136],
						fontStyle: 'bold',
						halign: 'center'
					}
				});
				positionY = doc.lastAutoTable.finalY + 12; // Atualizar a posição vertical após a tabela
			}	
			
			// Baixar o PDF
			doc.save(`Prontuário de ${nomeCao}`);
			download(doc.output(), `Prontuário do ${nomeCao}.pdf`);

		}
}