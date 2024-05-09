export default {
	myVar1: [],
	myVar2: {},
	
	
	async addTipoVac () {
		let data = await postTipoVacina.run().then(() => {
			showAlert('Adicionado com sucesso', '');
			resetWidget('add_tipo_vacina');
			getAllTipoVacina.run();
			errorTipoVac.setText("");
			closeModal('add_tipo_vacina');
		}).catch(error => {
			let message = postTipoVacina.data;
			
			let erroApi = service.getErrorApi(message);
			
			errorTipoVac.setText(erroApi);
		});
		return data;
	}
}