export default {

	getDefaultValue (nome, data) {
	
		let nomeValue = nome;
		let selectedValue = "";
		if(nomeValue){
			nomeValue = nomeValue?.toLowerCase();

			for (const elemento of data) {
				if(elemento?.Nome)
					if (elemento?.Nome.toLowerCase() === nomeValue) {
						selectedValue = elemento;
					}
			}
			if (selectedValue) 
			{ 
				return { label: selectedValue.Nome, value: selectedValue.id }; 
			}

		}
		
		return selectedValue;
	},
}