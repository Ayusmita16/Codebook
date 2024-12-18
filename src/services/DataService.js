function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid }
}

export async function getUser() {

    const browserSession = getSession();
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserSession.cbid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserSession.token}` }
    });
    if (!response.ok)
        throw { message: response.statusText, status: response.status }//eslint-disable-line
    const user = await response.json();
    return user;
}

export async function createOrder(cartList, total, user) {
    const browserSession = getSession();
    const order = {
        cartList: cartList,
        amount: total,
        quanify: cartList.length,
        user: {
            named: user.name,
            email: user.email,
            id: user.id
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserSession.token}` },
        body: JSON.stringify(order)
    })
    if (!response.ok)
        throw { message: response.statusText, status: response.status }//eslint-disable-line
    const data = await response.json();
    return data;
}

export async function getOrders() {
    const browserSession = getSession();
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserSession.cbid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserSession.token}` }
    });
    if (!response.ok)
        throw { message: response.statusText, status: response.status }//eslint-disable-line
    const orders = await response.json();
    return orders;
}