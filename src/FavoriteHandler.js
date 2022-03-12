
export const addToFav = (id) => {
    const array = JSON.parse(localStorage.getItem("favs_id"));
    array.push(id);
    localStorage.setItem("favs_id", JSON.stringify(array));
}

export const removeFromFav = (id) => {
    const array = JSON.parse(localStorage.getItem("favs_id"));
    const index = array.indexOf(id);
    if (index > -1) {
        array.splice(index, 1);
    }
    localStorage.setItem("favs_id", JSON.stringify(array));
}

export const isInFav = (id) => {
    return localStorage.getItem("favs_id")?.includes(id);
}