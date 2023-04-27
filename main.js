const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // if mobileMenu is open, must be closed
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const urlImg = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: urlImg,
});

productList.push({
    name: 'TV',
    price: 220,
    img: urlImg,
});

productList.push({
    name: 'Computer',
    price: 620,
    img: urlImg,
})


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)