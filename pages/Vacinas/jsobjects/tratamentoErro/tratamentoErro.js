export default {
	myVar1: [],
	myVar2: {},


	async errApi (query) {
		let data =  await query.run().then(() => {
			showAlert('Adicionado com sucesso', '');
		}).catch(error => {


			let message = postVacina.data;
			const erroApi = service.getErrorApi(message);

			return erroApi;
		});
	}
}