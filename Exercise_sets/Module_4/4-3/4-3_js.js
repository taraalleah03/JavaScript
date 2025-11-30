'use strict';

const form = document.querySelector('#search');
const results = document.querySelector('#info');

form.addEventListener('submit', async function(event){
    event.preventDefault();

    const query = document.querySelector('#query').value;
    results.innerHTML ='';

    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();


        data.forEach(TVshow => {
            const article = document.createElement('article');

            const header = document.createElement('h2');
            header.innerText = TVshow.show.name;
            article.appendChild(header);


            if (TVshow.show.image?.medium){
                const photo = document.createElement('img');
                photo.src = TVshow.show.image.medium;
                photo.alt = TVshow.show.name;
                article.appendChild(photo);
            }

            const link = document.createElement('a');
            link.href = TVshow.show.url;
            link.target = '_blank';
            link.innerText = 'Link for more.';
            article.appendChild(link);

            const div = document.createElement('div');
            div.innerHTML = TVshow.show.summary|| 'No summary found';
            article.appendChild(div);

            results.appendChild(article);

        });
        console.log(data);

    }catch (error) {
        console.log(error);
        results.innerText = 'Error! Cannot fetch TV show/s.'
    }
});
