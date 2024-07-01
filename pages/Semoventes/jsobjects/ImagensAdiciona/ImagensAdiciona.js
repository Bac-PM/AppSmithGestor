export default {
	frente: "",
	direita: "",
	esquerda: "",
	atualizaFrente (url) {
		ImagensAdiciona.frente = LinkUrl.url_App_Smith + url ; 
	},
	atualizaDireita () {
		ImagensAdiciona.direita = LinkUrl.url_App_Smith + upload_file_direita.data[0].formats.thumbnail.url ;
	},
	atualizaEsquerda () {
		ImagensAdiciona.esquerda = LinkUrl.url_App_Smith + upload_file_esquerda.data[0].formats.thumbnail.url ;
	}
}