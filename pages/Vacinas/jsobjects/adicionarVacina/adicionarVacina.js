export default {
	myVar1: [],
	myVar2: {},
	
	
	async addVac () {
		let data = await postVacina.run().then(() => {
			showAlert('Adicionado com sucesso', '');
			resetWidget('add_nome_vacina');
			getAllVacina.run();
			errorWidget.setText("");
			closeModal('add_nome_vacina');
		}).catch(error => {
			let message = postVacina.data;
			
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