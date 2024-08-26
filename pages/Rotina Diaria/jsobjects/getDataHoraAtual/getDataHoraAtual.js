export default {
	getDataHoraAtual() {
		let data = new Date();
		let offset = -180;
		data.setMinutes(data.getMinutes() + offset);
		
		return data;
	}
}