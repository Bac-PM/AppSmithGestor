export default {

	getDefaultValue (nome, data) {
	
		let nomeValue = nome;
		let selectedValue = "";
		if(nomeValue){
			nomeValue = nomeValue?.toLowerCase();

			for (const elemento of data) {
				if(elemento?.stt_operacional)
					if (elemento?.stt_operacional.toLowerCase() === nomeValue) {
						selectedValue =  elemento;
					}
			}
			if (selectedValue) 
			{ 
				return { label: selectedValue.stt_operacional, value: selectedValue.id }; 
			}

		}
		
		return selectedValue;
	},
}