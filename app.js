var loginDiv = document.getElementById('logindiv');
function closeform(){
    loginDiv.style.display = 'none';
}

function loginPage(){
    loginDiv.style.display = 'flex';
}

// load cards
function loadCard(){
    var userData = {
        email: '',
        password: ''
    }
    var emailInput = document.getElementById('emailInput');
    var passwordInput = document.getElementById('passInput');
    var heroSection = document.getElementById('hero-section');
    var loginText = document.getElementById('loginText');
    if(emailInput.value.length>0 && passwordInput.value.length>0){
        userData.email = emailInput.value;
        userData.password = passwordInput.value;
        heroSection.style.display = 'block';
        loginDiv.style.display = 'none';
        loginText.innerHTML = "Logged In";
    }else{
        alert("Please enter the feild");
    }
    console.log(userData);
    emailInput.value = '';
    passwordInput.value = '';
}


var parent = document.getElementById("main-section")

var data = [
    {
        image: 'images/img.webp',
        desciption: 'sunglaFashion Retro Design Sunglasses for Men',
        price: 'Rs 870',
        rating: 3
    },
    {
        image: 'images/img2.webp',
        desciption: 'M10 , A6s , F2 earbuds Headphones',
        price: 'Rs 999',
        rating: 5
    },
    {
        image: 'images/img3.webp',
        desciption: 'Akg s10 Stereo Handsfree - Handsfree',
        price: 'Rs 1,186',
        rating: 4
    },
    {
        image: 'images/img3.webp',
        desciption: 'Lint Remover For Clothes Usb Electric',
        price: 'Rs 1,232',
        rating: 4
    },
    {
        image: 'images/img4.webp',
        desciption: 'WORTHBUY Plastic Coffee Mug',
        price: 'Rs 432',
        rating: 3
    },
    {
        image: 'images/img5.webp',
        desciption: 'Meezab Arts Rice Face Wash 225ML',
        price: 'Rs.429',
        rating: 5
    },
    {
        image: 'images/img6.webp',
        desciption: 'sunglaFashion Retro Design Sunglasses for Men',
        price: 'Rs 870',
        rating: 3
    },
    {
        image: 'images/img.webp',
        desciption: 'sunglaFashion Retro Design Sunglasses for Men',
        price: 'Rs 870',
        rating: 3
    },
    {
        image: 'images/img2.webp',
        desciption: 'M10 , A6s , F2 earbuds Headphones',
        price: 'Rs 999',
        rating: 5
    },
    {
        image: 'images/img3.webp',
        desciption: 'Akg s10 Stereo Handsfree - Handsfree',
        price: 'Rs 1,186',
        rating: 4
    },
    {
        image: 'images/img3.webp',
        desciption: 'Lint Remover For Clothes Usb Electric',
        price: 'Rs 1,232',
        rating: 4
    },
    {
        image: 'images/img4.webp',
        desciption: 'WORTHBUY Plastic Coffee Mug',
        price: 'Rs 432',
        rating: 3
    },
    {
        image: 'images/img5.webp',
        desciption: 'Meezab Arts Rice Face Wash 225ML',
        price: 'Rs.429',
        rating: 5
    },
    {
        image: 'images/img6.webp',
        desciption: 'sunglaFashion Retro Design Sunglasses for Men',
        price: 'Rs 870',
        rating: 3
    },
    {
        image: 'images/img.webp',
        desciption: 'sunglaFashion Retro Design Sunglasses for Men',
        price: 'Rs 870',
        rating: 3
    },
    {
        image: 'images/img2.webp',
        desciption: 'M10 , A6s , F2 earbuds Headphones',
        price: 'Rs 999',
        rating: 5
    },
    {
        image: 'images/img3.webp',
        desciption: 'Akg s10 Stereo Handsfree - Handsfree',
        price: 'Rs 1,186',
        rating: 4
    },
    {
        image: 'images/img3.webp',
        desciption: 'Lint Remover For Clothes Usb Electric',
        price: 'Rs 1,232',
        rating: 4
    },
    {
        image: 'images/img4.webp',
        desciption: 'WORTHBUY Plastic Coffee Mug',
        price: 'Rs 432',
        rating: 3
    },
    {
        image: 'images/img5.webp',
        desciption: 'Meezab Arts Rice Face Wash 225ML',
        price: 'Rs.429',
        rating: 5
    },
    {
        image: 'images/img6.webp',
        desciption: 'sunglaFashion Retro Design Sunglasses for Men',
        price: 'Rs 870',
        rating: 3
    }
]

for (var i=0; i<data.length; i++) {
    var card = document.createElement('div');
    card.setAttribute('class', 'card');

    var imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'img');

    var img = document.createElement('img');
    img.src = data[i].image;

    var contentSec = document.createElement('div');
    contentSec.setAttribute('class', 'content-sec');

    var desc = document.createElement('p');
    desc.setAttribute('class', 'desc');
    desc.innerHTML = data[i].desciption;

    var price = document.createElement('p');
    price.setAttribute('class', 'price');
    price.innerHTML = data[i].price

    var rating = document.createElement('p');
    rating.setAttribute('class', 'rating');
    // rating.innerHTML = data[i].rating;
    starCount(Number(data[i].rating));


    parent.appendChild(card);
    card.appendChild(imgDiv);
    imgDiv.appendChild(img);
    card.appendChild(contentSec);
    contentSec.appendChild(desc);
    contentSec.appendChild(price);
    contentSec.appendChild(rating);
}

function starCount(star){
    for(var i=0; i<star; i++){
        var rate = document.createElement('i');
        rate.style.color = 'goldenrod';
        rate.setAttribute('class', 'fa-solid fa-star');
        rating.appendChild(rate);
        console.log("hi");
    }
}