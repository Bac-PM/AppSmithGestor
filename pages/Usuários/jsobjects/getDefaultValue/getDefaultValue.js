export default {

	getDefaultValue (nome, data) {
	
		let nomeValue = nome;
		let selectedValue = "";
		if(nomeValue){
			nomeValue = nomeValue?.toLowerCase();

			for (const elemento of data) {
				if(elemento?.name)
					if (elemento?.name.toLowerCase() === nomeValue) {
						selectedValue =  elemento;
					}
			}
			if (selectedValue) 
			{ 
				return { label: selectedValue.name, value: selectedValue.id }; 
			}

		}
		
		return selectedValue;
	},
}