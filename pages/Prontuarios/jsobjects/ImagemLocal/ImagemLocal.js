export default {
	frente: "",
	atualizaFrente (url) {
		ImagemLocal.frente = LinkUrl.url_App_Smith + url ; 
	},
	
	ImagemTabelaFrente () {
		ImagemLocal.frente = LinkUrl.url_App_Smith + Vacinas.triggeredRow.fotoEtiqueta.formats.thumbnail.url
	}

}