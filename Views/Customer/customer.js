
function createCard(name, price, description,branch,image) {
    const card = document.createElement('div');
    card.classList.add('card');

    const nameElement = document.createElement('div');
    nameElement.classList.add('title');
    nameElement.textContent = name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const priceElement =document.createElement('div');
    priceElement.classList.add('price');
    priceElement.textContent  = "$" + price

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = description;

    const branchElement = document.createElement('div');
    branchElement.classList.add('branch');
    branchElement.textContent = branch;

    const imageElement = document.createElement('img');
    imageElement.src  = image;

    cardBody.appendChild(priceElement);
    cardBody.appendChild(descriptionElement);
    cardBody.appendChild(branchElement);

    card.appendChild(imageElement)
    card.appendChild(nameElement);
    card.appendChild(cardBody);
 
    return card;
}

function displayProduct() {
    let products = JSON.parse(localStorage.getItem('product-name')) ?? [];
    for (let product of products) {
        let card = createCard(product.name, product.price, product.description,product.branch,product.image);
        container.appendChild(card);
    }
}

const container = document.querySelector('#container');
document.addEventListener('DOMContentLoaded', () => { displayProduct(); });