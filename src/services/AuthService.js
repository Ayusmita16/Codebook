export async function login(authDetail) {
    const reqOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, reqOptions)
    if (!response.ok)
        throw { message: response.statusText, status: response.status }
    const data = await response.json();
    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }
    return data;
}

export async function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}

export async function register(authDetail) {

    const reqOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, reqOptions)
    if (!response.ok)
        throw { message: response.statusText, status: response.status }
    const data = await response.json();
    return data;
}