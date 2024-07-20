document.addEventListener('DOMContentLoaded', () => {
    bodyload();

    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value;
        if (query) {
            fetchNews(query);
        }
    });
    function bodyload() {
        fetchNews('apple');
    }

    function fetchNews(query) {
        const blogContainer = document.getElementById('blog-container');
        const apiKey = '04c0fc80a3ef4756a0277c937f885c4f';
        const url = `https://newsapi.org/v2/everything?q=${query}&from=2024-07-19&to=2024-07-19&sortBy=popularity&apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayNews(data.articles);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                blogContainer.innerHTML = '<p>Error fetching news. Please try again later.</p>';
            });
    }

    function displayNews(articles) {
        const blogContainer = document.getElementById('blog-container');
        blogContainer.innerHTML = '';
        if (!articles.length) {
            blogContainer.innerHTML = '<p>No articles found. Please try a different search term.</p>';
            return;
        }
        articles.forEach(article => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('card');
            newsCard.style.height = "auto";
            newsCard.innerHTML = `
                <img src="${article.urlToImage || 'https://placehold.co/600x400'}" class="card-img-top" alt="News Image">
                <div class="card-header">
                    <h5 class="news-title">${article.title}</h5>
                </div>
                <div class="card-body">
                    <p class="news-content">${article.description || 'No description available.'}</p>
                </div>
                <div class="card-footer">
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
                </div>
            `;
            blogContainer.appendChild(newsCard);
        });
    }
});
