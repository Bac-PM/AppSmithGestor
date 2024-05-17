export default {
	/*
@author Mateus Lannes 
@altered Felipe Frechiani
Faz o envio de imagem para o servidor. Atualiza o identificador da imagem no objeot image e atualiza a url para ser exbida no componente visual da interface. 
@params identificadorPOPup - valor 1 caso seja o Pop-up "Adicionar Semovente", caso contrario o Pop-up "Editar Semovente"
*/
	data: {},
	url: "",
	id: 0,
	sendImage (identificadorPOPup) {
		Desabilitar_botoes.disabilitaBotoes();
		upload_file_esquerda.run().then((response) =>  {

			this.data = upload_file_esquerda.data;
			

			if(identificadorPOPup == 'popUpAdicionar'){
				//atualiza o identificador na imagem no pop-up "Adicionar Semovente" da página "Semoventes"
				atualizaIdFrenteAdiciona.AtualizaEsquerda(response[0].id);
			}else if(identificadorPOPup == 'popUpEditar'){
				//Atualizar o identificador da imagem para poder enviar na hora da atualização o id novo gerado no backend
				atualizaId.esquerda(response[0].id);
				//atualizar a imagem no componente visual 
				ImagemLocal.atualizaEsquerda(response[0].formats.thumbnail.url);
			}
			
			showAlert("Imagem enviada com sucesso");
			Desabilitar_botoes.habilitaBotoes();

		}).catch(error => {
			showAlert("Imagem não enviada, tenta novamente");
			Desabilitar_botoes.habilitaBotoes();
			// mostra o erro do porque a imagem nao foi enviada
			showAlert(JSON.stringify(upload_file_esquerda.data.error.details.errors), 'error');
		});

		return this.data;	
	},

}