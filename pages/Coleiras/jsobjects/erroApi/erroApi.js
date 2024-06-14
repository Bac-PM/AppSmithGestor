export default {

	async addColeira () {
		let data = await postColeira.run().then(() => {
			showAlert('Adicionado com sucesso', '');
			getAllColeiras.run();
			resetWidget('Add');
			closeModal('Add');
		}).catch(error => {
			let message = postColeira.data;
			
			let erroApi = service.getErrorApi(message);
			
			errorWidget.setText(erroApi);
		});
		return data;
	}
}

/*
{{(async function() {
	let errorMensagem = await tratamentoErro.errApi(postVacina);
	errorWidget.setText(errorMensagem)
})();
closeModal(add_nome_vacina);
}}
*/