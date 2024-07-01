export default {
    async getTodosVermifugosAnimal() {
        await getTodosVermifugos.run();

        const hoje = moment();

        return getTodosVermifugos.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
    
    async getUmVermifugoAnimal() {
        await get_vermifugosDeCao.run();

        const hoje = moment();

        return get_vermifugosDeCao.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
	
		async getTodosEctoAnimal() {
        await getTodosEctoparasiticida.run();

        const hoje = moment();

        return getTodosEctoparasiticida.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
    
    async getUmEctoAnimal() {
        await get_ectoparasiticidaDeCao.run();

        const hoje = moment();

        return get_ectoparasiticidaDeCao.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
	
		async getTodosVacinaAnimal() {
        await getTodosAlertaVacina.run();

        const hoje = moment();

        return getTodosAlertaVacina.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
    
    async getUmVacinaAnimal() {
        await getAlertaVacina.run();

        const hoje = moment();

        return getAlertaVacina.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
	
		async getTodosColeiraAnimal() {
        await getTodosAlertaColeira.run();

        const hoje = moment();

        return getTodosAlertaColeira.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },
    
    async getUmColeiraAnimal() {
        await getAlertaColeiraUmCao.run();

        const hoje = moment();

        return getAlertaColeiraUmCao.data.data.filter(tarefa => this.isTarefaValida(tarefa, hoje));
    },

    // Função auxiliar para calcular a data de inicio do medicamento corrigida
	  // 
    calcularDataInicio(data_proxima_aplicacao) {
        const dataDeInicio = new Date(data_proxima_aplicacao); // Esta linha vem com a data de inicio subtraindo 1 no valor original que vem da API, por isso é adicionado + 1
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
        const { data_proxima_aplicacao, lembrete_em_dias} = tarefa;

        const dataDeInicio = this.calcularDataInicio(data_proxima_aplicacao);
        const dataComLembrete = this.calcularDataComLembrete(dataDeInicio, lembrete_em_dias);

        const lembreteValido = hoje.isSameOrAfter(dataComLembrete, 'day');

        return lembreteValido;
    }
}
