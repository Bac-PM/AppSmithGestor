export default {
	myFun1 () {
	const vaccineData = getNomeVacinas.data; // Assuming this is your query to get vaccine data
	const vaccineTypeData = getTipoVacina.data; // Assuming this is your query to get vaccine type data

const options = vaccineData.map(vaccine => {
  const vaccineType = vaccineTypeData.find(type => type.id === vaccine.tipo_vacina);
  return {
    label: vaccine.nome_vacina + ' - ' + (vaccineType ? vaccineType.tipo : 'No Type'),
    value: vaccine.id
  };
});

return options;

}
}