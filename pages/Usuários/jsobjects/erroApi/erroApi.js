export default {
	myVar1: [],
	myVar2: {},
	
	async addUsuario () {
		let data = await CadastraUsuario.run().then(() => {
			AtualizaPapelUsuario.run().then(() => {
			showModal("Cadastro_Realizado");
			getAllUsuario.run();
  });
  		showModal('Cadastro_Realizado');
		}).catch(error => {
			let message = CadastraUsuario.data;
			
			let erroApi = service.getErrorApi(message);
			
			errorWidget.setText(erroApi);
		});
		return data;
	}
}
