export default {
	filtarPainel (data=get_animals_painel.data.data) {
		let caes = data;

		caes = caes.filter( u =>u.Status_geral === "Operacional");

		return caes;
	}
}

/*
Como colocar no painel de Semoventes
{{filtrarPainel.filtarPainel(get_animals_painel.data.data)}}
*/