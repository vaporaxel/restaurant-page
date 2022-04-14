function mainPageLoad(){

    // Remove other pages (elements of their functions)
    let oldHeader = document.querySelector('#content')
    let oldItemCard = document.querySelector('.item-card')

    oldHeader.innerHTML = ''
    oldHeader.innerText = ''
    // oldItemCard.innerHTML = ''
    // oldItemCard.classList.remove('item-card')

    
    

    // Select content container
    let content = document.getElementById('content')

    // Create elements
    let header = document.createElement('div')
    let headerImage = document.createElement('div')
    let mainTitle = document.createElement('h1')
    let headerText = document.createElement('p')

    // Inner content of elements created
    mainTitle.innerText = 'Welcome to Our Restaurant Page'
    headerText.innerText = 'This restaurant is so cool and obviously you will end up loving it!'
    headerImage.innerHTML = "<img src=\"https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\">";

    // Add classes to specific created elements
    header.className = 'header'
    headerImage.className = 'header-image'
    
    // Append created elements
    content.appendChild(header)
    header.appendChild(mainTitle)
    header.appendChild(headerImage)
    header.appendChild(headerText)

    return
}
export  {mainPageLoad};
