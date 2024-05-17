export default {

	getDefaultValue (nome, data) {
	
		let nomeValue = nome;
		let selectedValue = "";
		if(nomeValue){
			nomeValue = nomeValue?.toLowerCase();

			for (const elemento of data) {
				if(elemento?.tipo)
					if (elemento?.tipo.toLowerCase() === nomeValue) {
						selectedValue =  elemento;
					}
			}
			if (selectedValue) 
			{ 
				return { label: selectedValue.tipo, value: selectedValue.id }; 
			}

		}
		
		return selectedValue;
	},
}