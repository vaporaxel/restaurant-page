function mainPageLoad(){
    let content = document.getElementById('content')
    // Create elements
    let header = document.createElement('div')
    let headerImage = document.createElement('div')
    let mainTitle = document.createElement('h1')
    let headerText = document.createElement('p')

    // Inner content of elements created
    mainTitle.innerText = 'Welcome to Our Restaurant Page'
    headerText.innerText = 'This restaurant is so cool and obviously you will end up loving it!'
    headerImage.innerHTML = "<img src=\"../src/cover-template-image.jpeg\">";

    // Add classes to specific created elements
    header.className = 'header'
    headerImage.className = 'header-image'
    
    // Append created elements
    content.appendChild(header)
    header.appendChild(mainTitle)
    header.appendChild(headerImage)
    header.appendChild(headerText)
}
export  {mainPageLoad};