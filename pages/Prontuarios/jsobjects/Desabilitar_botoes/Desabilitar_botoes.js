export default {
	disabilitaBotoes() {
	  //desabilita os botoes (eles não podem ser clicados) para nao deixar o usuario cadastrar um cão antes de enviar essa mensagem 
		addAnimalVacinaANDTipoVacina.setDisabled(true);
		addAnimalVacinaANDTipoVacina.setDisabled(true);
		//habilita a visibilidade desses textos para mostrar que a imagem esta sendo carregada
		//LoadingItem.setVisibility(true);
		//TextLoading.setVisibility(true);
		//LoadingItem.setVisibility(true);
		//TextLoading.setVisibility(true);
	},
	habilitaBotoes() {
			addAnimalVacinaANDTipoVacina.setDisabled(false);
			addAnimalVacinaANDTipoVacina.setDisabled(false);
		
			//desabilita a visibilidade de textos que avisam que a imagem esta sendo carregada, porque a imgaem já foi enviada
			//LoadingItem.setVisibility(false);
			//TextLoading.setVisibility(false);
			//LoadingItem.setVisibility(false);
			//TextLoading.setVisibility(false);
	}
}