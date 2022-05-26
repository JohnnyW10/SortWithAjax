const sortOptionDisplay = () => {
  const optionArray = [
    {
      name: "Producent",
      types: ['Samsung', 'Asus', 'Iphone', 'Logitech', 'Steelseries']
    },

    {
      name: 'Category',
      types: ['Mouse', 'Keyboard', 'Phone']
    }, 

    {
      name: 'Growing Price',
      types: []
    }, 

    {
      name: 'Decreasing price',
      types: []
    }, 

    {
      name: 'Show all',
      types: []
    }]
  
  let optionBox = document.getElementById('sortOption')
  let content = ''

  optionArray.map(el => {
    if(el.types.length === 0) {
      content += `<div><button onclick="test(this)">${el.name}</button></div>`
    } else {
      content += `<div><p>${el.name}</p>`
      el.types.map(ele => {
        content += `<button class="hide" onclick="test(this)">${ele}</button>`
      })
      content += '</div>'
    }
  })
  optionBox.innerHTML = content
}

sortOptionDisplay()


function test(sortType) {
  let HttpObject = new XMLHttpRequest()
  HttpObject.open('GET', 'data.xml')
  HttpObject.send()
  let typeSort = sortType.innerHTML
  

  HttpObject.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200) {
      processedXML(this, typeSort)
    } else if (this.status === 404) {
      console.log(`Error: ${this.status}`)
    }
  }
}

function processedXML(processed, sortType) {
  let dataXML = processed.responseXML
  let listOfProduct = dataXML.getElementsByTagName("product");
  let atribiute = ['name', 'prod', 'description', 'cost']

  console.log(sortType)
  for(let i=0; i < listOfProduct.length; i++) {
    atribiute.map(el => {
      let x = listOfProduct[i].getElementsByTagName(el)[0].childNodes[0].nodeValue;
      console.log(x)
    })
  }
}

