
export function setArticles (state, articles) {
    
    filterEnabled(articles)
    filterFeatured(articles)
    parseArticles(articles)
    
    state.articles = articles
}


export function setFeaturedArticles (state, articles) {
    filterEnabled(articles)
    parseArticles(articles)
    state.featuredArticles = articles
}

function filterEnabled (articles) {
    articles = articles.filter((article) => {
        return article.attributes.enabled
    }) 
}

function filterFeatured (articles) {
    articles = articles.filter((article) => {
        return !article.attributes.featured
    }) 
}

function parseArticles (articles) {
    articles.map((article) => {
        return parseArticle(article)
    })
}

function parseArticle (article) {
    article.title = article.attributes.title
    article.cover = article.attributes.image.data?.attributes?.url
    article.cover ??='https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
    article.date = article.attributes.date
    article.description = article.attributes.description
    article.content = article.attributes.content
    article.geome7ric = article.attributes.geome7ric
    article.status = article.attributes.status
    article.images = article.attributes.images.data?.map((image) => {
        return image.attributes.url
    })
    article.image = article.attributes.image?.data?.attributes.url
    console.log('article.image: ' + article.image)
    article.media = article.attributes.meta?.media
    article.video = article.attributes.meta?.media?.video?.src
    article.documents = article.attributes.documents?.data?.map((document) => {
        return document.attributes
    })
    return article
}

