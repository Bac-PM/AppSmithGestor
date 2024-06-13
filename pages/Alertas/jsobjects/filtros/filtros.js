export default {
    async atualizarAlertas(getFunction, alertaSet) {
        await getFunction.run();
        await alertaSet.setData(getFunction.data.data);
    },
    async filtrarEAtualizarAlertas() {
        if (seletor_animal.selectedOptionValue === -1) {
            // Para todos os animais
            await this.atualizarAlertas(getTodosAlertaVacina, alertas_vacina);
            await this.atualizarAlertas(getTodosAlertaColeira, alertas_coleira);
            await this.atualizarAlertas(getTodosVermifugos, alertas_vermifugo);
            await this.atualizarAlertas(getTodosEctoparasiticida, alertas_ectoparasitisida);
        } else {
            // Para um animal específico
            await this.atualizarAlertas(getAlertaVacina, alertas_vacina);
            await this.atualizarAlertas(getAlertaColeiraUmCao, alertas_coleira);
            await this.atualizarAlertas(get_vermifugosDeCao, alertas_vermifugo);
            await this.atualizarAlertas(get_ectoparasiticidaDeCao, alertas_ectoparasitisida);
        }
    }
}
