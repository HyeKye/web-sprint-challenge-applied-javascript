import axios from 'axios'

const Card = (article) => {
const articleWrapper = document.createElement('div')
const articleHeadline = document.createElement('div')
const articleAuthor = document.createElement('div')
const imgContainer = document.createElement('div')
const articleImg = document.createElement('img')
const articleName = document.createElement('span')

articleWrapper.classList.add('card')
articleHeadline.classList.add('headline')
articleAuthor.classList.add('author')
imgContainer.classList.add('img-container')

articleHeadline.textContent = article.headline
articleImg.src = article.authorPhoto
articleName.textContent = article.authorName

articleWrapper.appendChild(articleHeadline)
articleWrapper.appendChild(articleAuthor)
articleAuthor.appendChild(imgContainer)
articleAuthor.appendChild(articleName)
imgContainer.appendChild(articleImg)

articleWrapper.addEventListener ('click', () => {
  console.log(`${headline}`)
})

return articleWrapper
}

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    const data = res.data.articles
    for (let key in data) {
      data[key].forEach(article => {
        let DOMelement = document.querySelector(selector)
        DOMelement.append(Card(article)) 
      })
    }
  })
  .catch(err => console.error(err))
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

export { Card, cardAppender }
