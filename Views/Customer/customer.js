
function createCard(name, price, description,branch,image,moredetail) {

    
    const card = document.createElement('div');
    card.className = 'card';

    const nameElement = document.createElement('p');
    nameElement.classList.add('textname');
    nameElement.textContent = "Name :" + name;

    const priceElement =document.createElement('p');
    priceElement.classList.add('text');
    priceElement.textContent  ="Price : "+ price + " $" 

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('text');
    descriptionElement.textContent = "Decription : "+ description;

    const branchElement = document.createElement('p');
    branchElement.classList.add('text');
    branchElement.textContent = "Brand :" + branch;

    const imageElement = document.createElement('img');
    imageElement.className = 'image';
    imageElement.src  = image;
    imageElement.style.width = '100%';


    card.appendChild(imageElement)
    card.appendChild(nameElement);
    card.appendChild(priceElement);
    card.appendChild(descriptionElement);
    card.appendChild(branchElement);
    container.appendChild(card);

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

// ----------------Search product---------------

let search_product = document.querySelector('#search-product');
let listName = document.querySelectorAll('.card')

function search() {
    let containers = document.querySelector(".container").children
    let user_input = search_product.value.toLowerCase()
    console.log(user_input)
    for (let card of containers){
        let listName =card.children[1].textContent
        if (listName.toLowerCase().indexOf(user_input)>-1){
            card.style.display ="block"
        }
        else {
            card.style.display ="none"
        }
    }
}

