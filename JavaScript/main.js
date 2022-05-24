const sortOptionDisplay = () => {
  const optionArray = ['Producent', 'Category', 'Growing Price', 'Decreasing price', 'Show all']
  let optionBox = document.getElementById('sortOption')
  let content = '<h3><h3>'

  optionArray.map((el) => {
    content += `<button class="sortBtn" onclick="test()" value="${el}">${el}</button>`
  })
  optionBox.innerHTML = content
}

sortOptionDisplay()


function test() {
  let HttpObject = new XMLHttpRequest()

  HttpObject.open('GET', 'data.xml')
  HttpObject.send()
  HttpObject.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200) {
      document.getElementById('test').innerHTML = this.responseText
    } else if (this.readyState === 4 && this.status === 404) {
      console.log('404')
    }
  }
}