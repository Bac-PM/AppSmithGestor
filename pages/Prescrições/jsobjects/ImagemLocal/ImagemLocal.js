export default {
	frente: "",
	atualizaFrente (url) {
		ImagemLocal.frente = LinkUrl.url_App_Smith + url ; 
	},
	
	ImagemTabelaFrente () {
		ImagemLocal.frente = LinkUrl.url_App_Smith + vacinas_ativas.triggeredRow.foto_etiqueta.formats.thumbnail.url
	}

}
