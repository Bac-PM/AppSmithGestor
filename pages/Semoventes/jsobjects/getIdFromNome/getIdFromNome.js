export default {
	getIdFromNome (nome, data) {
		let nomeValue = nome;
		nomeValue = nomeValue?.toLowerCase();
		let selectedValue = null;
		for (const elemento of data) {
			if (elemento?.Nome.toLowerCase() === nomeValue) {
				selectedValue =  elemento;
			}
		}
		if (selectedValue) 
		{ 
			return  selectedValue.id; 
		}
		return null; 
	},
}