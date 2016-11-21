let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1}
]

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author.indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}
// event listeners
document.getElementById('autSearch').addEventListener('click', authSearch)

function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

