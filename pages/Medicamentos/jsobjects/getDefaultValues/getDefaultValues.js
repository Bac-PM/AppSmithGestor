export default {
    getDefaultValues(nomesSelecionados, data) {
        let selectedValues = [];

        if (nomesSelecionados && data) {
            for (const item of nomesSelecionados) {
                const elemento = data.find(e => e.id === item.id);
                if (elemento) {
                    selectedValues.push({ label: elemento.Nome, value: elemento.id });
                }
            }
        }

        return selectedValues;
    },
}
