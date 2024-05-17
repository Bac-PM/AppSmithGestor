export default {

	uploadFile(data){
		let file = data; 

		const formData = new FormData();
		formData.append('file', file);

		fetch("http://host.docker.internal:2337/api/upload", {
			method: 'POST',
			body: formData,
		})
			.then(response => response.json())
			.then(data => {
			console.log('Resposta do servidor:', data);
		})
			.catch(error => {
			console.error('Erro durante o envio do arquivo:', error);
		});
	}
}

