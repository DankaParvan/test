function localStorageInit() {
    if (localStorage.getItem("Favourites") == null) {
        localStorage.setItem("Favourites", "[]");
    }
}

function forEachFavourite(handler) {
    let array = JSON.parse(localStorage.getItem("Favourites"));
    for (let i = 0; i < array.length; i++) {
        handler(array[i]);
    }
}

function addFavourite(value) {
    let array = JSON.parse(localStorage.getItem("Favourites"));
    array.push(value.toLowerCase());
    localStorage.setItem("Favourites", JSON.stringify(array));
}

function removeFavourite(value) {
    let array = JSON.parse(localStorage.getItem("Favourites"));
    var index = array.indexOf(value.toLowerCase());
    if (index !== -1) {
        array.splice(index, 1);
    }
    localStorage.setItem("Favourites", JSON.stringify(array));
    alert("update ls " + JSON.stringify(array));
}