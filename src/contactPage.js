function contactPageLoad(){

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
    let mainTitle = document.createElement('h1')
    let headerText = document.createElement('p')

    // Inner content of elements created
    mainTitle.innerText = 'Contact Us!'
    headerText.innerText = 'Here will be the contact information'

    // Add classes to specific created elements
    header.className = 'header'

     // Append created elements
     content.appendChild(header)
     header.appendChild(mainTitle)
     header.appendChild(headerText)

}

export  {contactPageLoad};