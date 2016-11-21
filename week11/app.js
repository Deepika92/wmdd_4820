// select an attribute
let ptitle = document.querySelector('[title=pageTitle]')

ptitle.style.color = '#325faa'

// select all the list items
const allList = document.querySelectorAll('p')

for (let i = 0; i < allList.length; i++) {
  allList[i].style.color = 'pink'
}

// select using pseudo class
const listItems = document.querySelectorAll('li:nth-child(1)')

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = '#32f2a4'
}

console.log(listItems)
