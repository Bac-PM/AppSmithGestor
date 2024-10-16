export default {
	idFrente: semoventes_ativos.triggeredRow.Foto_frente.id,
	idDireita: semoventes_ativos.triggeredRow.Foto_direita.id,
	idEsquerda: semoventes_ativos.triggeredRow.Foto_esquerda.id,
	frente (id) {
		atualizaId.idFrente = id;
	},
	direita (id) {
		atualizaId.idDireita = id;
	},
	esquerda (id) {
		atualizaId.idEsquerda = id;
	}
	
}