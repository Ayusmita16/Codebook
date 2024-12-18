export async function getProducts(id) {
    const pdt = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if (!pdt.ok)
        throw { message: pdt.statusText, status: pdt.status }
    const res = await pdt.json();
    return res;
}

export async function getPdtList(searchTerm) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if (!response.ok)
        throw { message: response.statusText, status: response.status }
    const data = await response.json();
    return data;
}

export async function getFeaturedPdts() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if (!response.ok)
        throw { message: response.statusText, status: response.status }
    const data = await response.json();
    return data;
}