const get = (key) => {
    return localStorage.getItem(key);
}

const getArray = (key) => {
    const strLocal = this.get(key);
    if (!strLocal) return [];

    const arrLocal = JSON.parse(strLocal);
    if (!arrLocal || !arrLocal.length) return [];

    return arrLocal;
}

const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const remove = (key) => {
    localStorage.removeItem(key);
}

const clear = () => {
    localStorage.clear();
}

export default { get, getArray, set, remove, clear };