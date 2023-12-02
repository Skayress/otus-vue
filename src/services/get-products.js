export default async function getProducts() {
	try {
		const URL = 'https://fakestoreapi.com/products'
		const response = await fetch(URL)

		if (response.ok) {
			const data = await response.json()
			return data
		}
	} catch (e) {
		console.log("Ошибка запроса", e);
	}
}