export default {

	data: {},
	getAlertasDeColeiras (data) {
		
       let caesAtivosTransformados = data.data.data
            .filter(u => u.Status_geral === "Operacional")
            .map(obj => ({ label: obj.Nome, value: obj.id }));

        return caesAtivosTransformados;
	},
	consultasDeUmCao(idAnimal) {
		
  

  getAllConsultas.run().then((response) => {
		
		this.data = response.data.filter(consulta => consulta.animal && consulta.animal.id === idAnimal && consulta.removido === false);
		
  }).catch(() => {
		
  showAlert("O cão não tem nenhuma consulta");
});
		return this.data;

	  
	}
}

