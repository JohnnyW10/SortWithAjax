const sortOptionDisplay = () => {
  const optionArray = ['Producent', 'Category', 'Growing Price', 'Decreasing price', 'Show all']
  let optionBox = document.getElementById('sortOption')
  let content = '<h3><h3>'

  optionArray.map((el) => {
    content += `<button class="sortBtn" onclick="test(value)" value="${el}">${el}</button>`
  })
  optionBox.innerHTML = content
}

sortOptionDisplay()


function test(val) {
  console.log(`It works ${val}`)
}