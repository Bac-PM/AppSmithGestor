export default {
	baixarDocumento: () => { 
		getUrlDocumento.run();
		const linkDocumento = getUrlDocumento.data.url;
		const nomeDocumento = TableDocuments.triggeredRow.arquivo;

		download(linkDocumento, `${nomeDocumento}`);
	}
}