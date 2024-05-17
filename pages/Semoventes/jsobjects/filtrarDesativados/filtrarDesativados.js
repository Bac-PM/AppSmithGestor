export default {
	filtarPainel (data ) {
		//data = = get_animals_painel.data.data
		let caes = data;
		
		caes = caes.filter( u => u.Status_geral === "Desativado");
		
		return caes;
	}
}

/*
Como colocar o filtro na tabela Desativados na página Semoventes
{{filtrarDesativados.filtarPainel(get_all_animals_someventes.data.data)}}
*/