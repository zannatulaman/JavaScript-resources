async function products () {
    const url = 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b83bfa34fmsh1cb2a465df63ecep11f8f7jsn1813a9689c5e',
		'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

products()