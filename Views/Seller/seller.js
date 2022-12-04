// DATA ------------
let productList = JSON.parse(localStorage.getItem('product-name')) ?? [];

function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

function createNewRecord(name, description, price,branch,image, index) {
    let tr = document.createElement('tr');
    tr.dataset.index = index;
    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');
    const tdFour = document.createElement('td');
    const tdFive = document.createElement('td');
    const tdSix = document.createElement('td');
    const tdseven= document.createElement('td');

    const edit = document.createElement('img');
    edit.className ="edit";
    edit.src ="../assets/Image/edit.svg";
    edit.dataset.index = index;

    const btn_delete = document.createElement('img');
    btn_delete .className ="btn_delete";
    btn_delete.src = "../assets/Image/trash.png";

    btn_delete.addEventListener("click",(e) => {
        let index = e.target.parentElement.parentElement.dataset.index;
        productList.splice(index, 1);
        addProductToLocalStorage('product-name', JSON.stringify(productList));
        displayProduct();
    })

    edit.addEventListener("click",(e) => {
        let index = e.target.dataset.index;
        dom_product_dialog.style.display = "block";
        
        productList.splice(index, 1);
    })
   
    tdSix.appendChild(edit);
    tdseven.appendChild(btn_delete);
    
    tdOne.textContent = name;
    tdTwo.textContent = description;
    tdThree.textContent = price;
    tdFour.textContent = branch;
    tdFive.textContent = image;

    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdFour);
    tr.appendChild(tdFive);
    tr.appendChild(tdSix);
    tr.appendChild(tdseven);
   
    return tr;
}

function createTableHeader() {
    const headerRow = document.createElement('tr');
    const thOne = document.createElement('th');
    const thTwo = document.createElement('th');
    const thThree = document.createElement('th');
    const thFour = document.createElement('th');
    const thFive = document.createElement('th');
    const thSix = document.createElement('th');
    const thSeven = document.createElement('th');
    thOne.textContent = "Name";
    thTwo.textContent = "Description ";
    thThree.textContent = "price";
    thFour.textContent = " Branch";
    thFive.textContent = " Image";
    thSix.textContent = " Edit";
    thSeven.textContent = " Delete";
    
    headerRow.appendChild(thOne);
    headerRow.appendChild(thTwo);
    headerRow.appendChild(thThree);
    headerRow.appendChild(thFour);
    headerRow.appendChild(thFive);
    headerRow.appendChild(thSix);
    headerRow.appendChild(thSeven);

    return headerRow;
}
function displayProduct() {

    if(tableData.firstElementChild !== null ) {
        document.querySelector('table').remove();
    }
    const  newTable = document.createElement('table');
    newTable.appendChild(createTableHeader());
    let products = getProductFromLocalStorage('product-name');
    for (let index = 0; index < products.length; index++) {
        let product = products[index];
        let row = createNewRecord(product.name, product.description, product.price+" $ ", product.branch,product.image, index);
        newTable.appendChild(row)
    }
    tableData.appendChild(newTable);

}
const productName = document.querySelector('#get-name');
const productDescription = document.querySelector('#get-description');
const productPrice = document.querySelector('#get-price');
const productBranch = document.querySelector('#get-brand');
const productImage = document.querySelector('#get-img');
const btn = document.querySelector('button');
const tableData = document.querySelector('.table-data');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    dom_product_dialog.style.display = "block";
     
    productName.value = "";
    productDescription.value = "";
    productBranch.value = "";
    productPrice.value = "";
    productImage.value = "";   
    displayProduct();
})

document.addEventListener('DOMContentLoaded', () => { displayProduct() })

// ----------------------dialog--------------------------------

const dom_product_dialog = document.querySelector("#product-dialog");
let cancel_btn = document.querySelector("#cancel");
let create_btn = document.querySelector("#create");

cancel_btn.addEventListener("click",(e) => {
    dom_product_dialog.style.display = "none";
})

create_btn.addEventListener("click",(e) => {
    dom_product_dialog.style.display = "none";
    let productObject = {name: productName.value, description: productDescription.value, price: productPrice.value, branch:productBranch.value, image:productImage.value};
    productList.push(productObject);
    if (productObject.name == "" || productObject.description == "" || productObject.price == ""|| productObject.branch == "" ||productObject.image == "" ){
        alert("please fill all inputs")
        dom_product_dialog.style.display = "block";
        return
    }
    addProductToLocalStorage('product-name', JSON.stringify(productList));
    displayProduct();
})
