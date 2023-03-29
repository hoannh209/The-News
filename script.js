const list = document.getElementById('list');
const search = document.getElementById('search');


getDataFromPublicAPI();

function getDataFromPublicAPI() {
    list.innerHTML='Loading...';
    list.innerHTML=''; 
    fetch('https://gnews.io/api/v4/top-headlines?token=331421be69154607e43cb9cd8ecccea5&lang=en')
    .then((response) =>{
        return response.json();
    })
    .then((datas) =>{
        datas.articles.forEach(article => {
            const divItem = document.createElement('div');
            divItem.innerHTML =`
            <img src="${article.image}">
            <div class="detail">
                <a href="${article.url}" target="_blank">${article.title}</a>
                <p>${article.publishedAt}</p>
                <h4>${article.description}</h4>
            </div>
        `;
        list.appendChild(divItem)
    });
    
    }); 

};

function filterItems() {
    list.innerHTML='<h1>Loading...</h1>';
    setTimeout(()=>{
        list.innerHTML=''; 
        var keyWord = document.getElementById("search").value;
        if (keyWord === '') {
            console.log ("Nhập keyword");
            return;
        };
        // console.log(keyWord);
        var url = 'https://gnews.io/api/v4/search?q=' + keyWord + '&token=331421be69154607e43cb9cd8ecccea5&lang=en';
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.articles.forEach(article => {
                const divItem = document.createElement('div');
                divItem.innerHTML =`
                <img src="${article.image}">
                <div class="detail">
                    <a href="${article.url}" target="_blank">${article.title}</a>
                    <p>${article.publishedAt}</p>
                    <h4>${article.description}</h4>
                </div>
            `;
            list.appendChild(divItem)
            }); 
        });
    }, 2000)
    
};


