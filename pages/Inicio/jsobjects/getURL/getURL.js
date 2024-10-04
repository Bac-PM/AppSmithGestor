export default {
	getUrl () {
		storeValue('SERVIDOR','LEDS');
		const url = service.getUrlApi();
		return url;
	}
}