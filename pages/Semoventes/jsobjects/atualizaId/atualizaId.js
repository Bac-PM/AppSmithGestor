export default {
	idFrente: Table1.triggeredRow.Foto_frente.id,
	idDireita: Table1.triggeredRow.Foto_direita.id,
	idEsquerda: Table1.triggeredRow.Foto_esquerda.id,
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