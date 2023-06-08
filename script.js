
const input = document.getElementById('search');
const form = document.getElementById('form');
const searchresult = document.getElementById('search-result');
const showmore = document.getElementById('showmore');


let item;
let pages = 1


async function getData() {
    if (pages = 1) {
        searchresult.innerHTML = "";
    }

    try {

        const response = await fetch(`https://api.unsplash.com/search/photos?page=${pages}&per_page=12&query=${item}&client_id=ZrU7PwPvrhEJwme0AVuj6wUbGDA_rLWtdMl0VWEScDw`);
        const result = await response.json();
        result.results.map(item => {
            let urls = item.urls.small;

            let imageContainer = document.createElement('div');
            imageContainer.classList.add("image-container");
            let image = document.createElement('img');
            image.src = urls;
            imageContainer.appendChild(image);
            searchresult.appendChild(imageContainer);
        })

    } catch (e) {
        alert("sorry something wents wrong..")
    }




}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    item = input.value;
    getData()
})
