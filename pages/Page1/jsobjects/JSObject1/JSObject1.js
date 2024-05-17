export default {
	async calcularData() {
		let inicio = new Date(DatePicker1.selectedDate);
		inicio.setDate(inicio.getDate()+ Input1.text)
		Text1.setText(inicio.toLocaleDateString())
	}
}