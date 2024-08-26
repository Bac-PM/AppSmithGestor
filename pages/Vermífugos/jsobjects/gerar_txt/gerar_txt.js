export default {
	myFun1() {
		const dados = get_vermifugos.data.data; // Substitua 'get_vermifugos' pelo nome da sua API

		let conteudoTxt = '';

		dados.forEach(item => {
			conteudoTxt += `Id: ${item.id}\nNome do Produto: ${item.nome_produto}\nDuração do produto: ${item.duracao_em_dias} dias\n\n`;
		});

		// Certifique-se de que 'download' está disponível no ambiente
		download(conteudoTxt, "dados.txt", "text/plain");
	}
}
