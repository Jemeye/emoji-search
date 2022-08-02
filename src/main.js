
// https://api.giphy.com/v1/stickers/search?api_key=&q=&limit=25&offset=0&rating=g&lang=en
const URL = 'https://api.giphy.com/v1/gifs/search?api_key=CY3nHx0uROdbU5Ens5c8qbf7ra33tJik'

const search = document.querySelector('#search');
const searchbtn = document.querySelector('#button-search');
const gitContainer = document.querySelector('.gif-container');

search.addEventListener('keyup', function (e) {
    const searchTerm =e.target.value;
    if(searchTerm.length > 2){
        getGifs(searchTerm);
    }
    // console.log(searchTerm.length);   
});

searchbtn.addEventListener('click', function () {
    const searchTerm =search.value;
    if(searchTerm.length > 2){
        getGifs(searchTerm);
    }
    // console.log(searchTerm.length);   
});

function getGifs(searchTerm) {
        // console.log(searchTerm);
        const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=CY3nHx0uROdbU5Ens5c8qbf7ra33tJik&q=${searchTerm}&limit=9&offset=0&rating=g&lang=en`;

        fetch(searchURL)
            .then(response => response.json())
            .then(data => {
                const gifs = data;
                if (gifs) {
                    console.log(gifs);
                    let view = `${gifs.data?.map(gif => `<figure class="git-containter__content">
            <iframe src="${gif.embed_url}" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </figure>`).join('')}`;
                    gitContainer.innerHTML = view;
                }
            })
            .catch(err => console.log(err));
}