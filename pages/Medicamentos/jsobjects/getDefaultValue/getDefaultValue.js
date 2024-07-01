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
	getDefaultValues(nomesSelecionados, data) {
        let selectedValues = [];

        if (nomesSelecionados && data) {
            const nomesArray = nomesSelecionados.split(',').map(nome => nome.trim());

            for (const nome of nomesArray) {
                const elemento = data.find(e => e.Nome === nome);
                if (elemento) {
                    selectedValues.push({ label: elemento.Nome, value: elemento.id });
                }
            }
        }

        return selectedValues;
    },
}