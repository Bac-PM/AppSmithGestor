export default {
	baixarPdf: () => { 
		generatePdfApi.run();
		const base64data = generatePdfApi.data;
		const nomeCao = Lista_de_Animais.triggeredRow.Nome;

		download(base64data, `Relatório do ${nomeCao}.pdf`, "application/pdf");
	}
}