export default {

	async addLogin () {
		let data = await LoginLib.run().then(() => {
			const jwt = LoginLib?.data?.jwt;				 
			if(jwt){
				storeValue('jwt' , jwt);
				storeValue('url', getURL.getUrl.data),
				navigateTo('Semoventes', {});
  		}
		}).catch(error => {
			let message = LoginLib.data;
			
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