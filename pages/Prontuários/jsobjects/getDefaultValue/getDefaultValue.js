export default {

	getDefaultValue (nome, data) {
	
		let nomeValue = nome;
		let selectedValue = "";
		if(nomeValue){
			nomeValue = nomeValue?.toLowerCase();

			for (const elemento of data) {
				if(elemento?.nome_produto)
					if (elemento?.nome_produto.toLowerCase() === nomeValue) {
						selectedValue =  elemento;
					}
			}
			if (selectedValue) 
			{ 
				return { label: selectedValue.nome_produto, value: selectedValue.id }; 
			}

		}
		
		return selectedValue;
	},
}