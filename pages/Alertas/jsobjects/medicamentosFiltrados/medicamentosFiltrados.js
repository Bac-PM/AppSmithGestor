export default {
    async getTodosMedicamentosAnimal() {
        await get_all_med.run();

        const hoje = moment();

        return get_all_med.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
    
    async getUmMedicamentosAnimal() {
        await get_medicamento_animal.run();

        const hoje = moment();

        return get_medicamento_animal.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },

    // Função auxiliar para calcular a data de inicio do medicamento corrigida
	  // 
    calcularDataInicio(dataInicio) {
        const dataDeInicio = new Date(dataInicio); // Esta linha vem com a data de inicio subtraindo 1 no valor original que vem da API, por isso é adicionado + 1
        dataDeInicio.setDate(dataDeInicio.getDate() + 1);
        return dataDeInicio;
    },

    // Função auxiliar para calcular a data do lembrete
    calcularDataComLembrete(dataProximaAplicacao, lembreteEmDias) {
        const dataComLembrete = new Date(dataProximaAplicacao);
        dataComLembrete.setDate(dataComLembrete.getDate() - lembreteEmDias);
        return dataComLembrete;
    },

    // Função auxiliar para verificar se uma tarefa está dentro do período de lembrete e aplicação
     isTarefaValida(tarefa, hoje) {
        const { data_inicio, lembrete_em_dias, data_fim } = tarefa;

        const dataDeInicio = this.calcularDataInicio(data_inicio);
        const dataComLembrete = this.calcularDataComLembrete(dataDeInicio, lembrete_em_dias);

        const lembreteValido = hoje.isSameOrAfter(dataComLembrete, 'day');
        const aplicacaoValida = hoje.isSameOrBefore(data_fim, 'day');

        return lembreteValido && aplicacaoValida;
    }
}
