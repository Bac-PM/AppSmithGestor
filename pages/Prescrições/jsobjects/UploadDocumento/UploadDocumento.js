export default {
	data: {},
	id: "",
	sendDoc () {
		upload_documento.run().then((response) =>  {

			this.data = upload_documento.data;
			atualizaId.setIdDocument(response[0].id);
			
		}).catch(error => {	
			showAlert("Documento não enviado, tenta novamente");
			
			showAlert(JSON.stringify(upload_documento.data.error.details.errors), 'error');		
		});

		return this.data;	
	},

}