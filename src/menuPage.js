function menuPageLoad(){

    // Remove other pages (elements of their functions)
    let oldHeader = document.querySelector('#content')

    oldHeader.innerHTML = ' '
    oldHeader.innerText = ' '

    // Select content container
    let content = document.getElementById('content')

    // Create elements
    let header = document.createElement('div')
    let mainTitle = document.createElement('h1')

    // Create Item card
    let itemCard1 = document.createElement('div')
        // Create item card content
        let imageCard1 = document.createElement('div')
        let titleCard1 = document.createElement('h1')
        let textCard1 = document.createElement('p')

    // Inner content of elements created
    mainTitle.innerText = 'Check our Menu'
    titleCard1.innerText = 'Sweet Pizza'
    imageCard1.innerHTML = "<img src=\"https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\">";
    textCard1.innerText = 'The best pizza of the whole valley, crunchy and super tasty.'

    // Add classes to specific created elements
    header.className = 'header';
    itemCard1.className = 'item-card';
    imageCard1.className = 'image-card';

    // Append created elements
    content.appendChild(header);
    header.appendChild(mainTitle);
    content.appendChild(itemCard1)
    itemCard1.appendChild(titleCard1)
    itemCard1.appendChild(imageCard1)
    itemCard1.appendChild(textCard1)

    return
}

export  {menuPageLoad};
