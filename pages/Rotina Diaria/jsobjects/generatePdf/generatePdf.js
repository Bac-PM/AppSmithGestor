export default {
	baixarPdf: () => { 
		generatePdfRotina.run();
		const base64data = generatePdfRotina.data;
		const nomeUsuario = getMe.data.username;	
		const dataTitulo = new Date().toLocaleDateString('pt-BR');
		download(base64data, `Relatório Diário de ${nomeUsuario} - ${dataTitulo}.pdf`, "application/pdf");
	}
}
