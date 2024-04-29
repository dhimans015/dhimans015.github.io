let carts = document.querySelectorAll('.add-cart');



let products = [{
        name: "Dora:The Explorer",
        tag: "1",
        price: 21,
        inCart: 0
    },
    {
        name: "IT",
        tag: "2",
        price: 22,
        inCart: 0
    },
    {
        name: "Archer",
        tag: "3",
        price: 23,
        inCart: 0
    },
    {
        name: "Black Panther",
        tag: "4",
        price: 24,
        inCart: 0
    },
    {
        name: "Black Mirror",
        tag: "5",
        price: 25,
        inCart: 0
    },
    {
        name: "Alladin",
        tag: "6",
        price: 26,
        inCart: 0
    },
    {
        name: "The Shawshank",
        tag: "7",
        price: 27,
        inCart: 0
    },
    {
        name: "Bhoemian",
        tag: "8",
        price: 28,
        inCart: 0
    },
    {
        name: "Spider-Man",
        tag: "9",
        price: 10,
        inCart: 0
    },
    {
        name: "Harry Potter Part-I",
        tag: "10",
        price: 11,
        inCart: 0
    },
    {
        name: "Harry Potter Part-II",
        tag: "11",
        price: 12,
        inCart: 0
    },
    {
        name: "Avengers",
        tag: "12",
        price: 13,
        inCart: 0
    },
    {
        name: "Fight Club",
        tag: "13",
        price: 14,
        inCart: 0
    },
    {
        name: "Mr Clean",
        tag: "14",
        price: 15,
        inCart: 0
    },
    {
        name: "Split",
        tag: "15",
        price: 16,
        inCart: 0
    },
    {
        name: "Death of a fool",
        tag: "16",
        price: 17,
        inCart: 0
    },
    {
        name: "Vengenence",
        tag: "17",
        price: 18,
        inCart: 0
    },
    {
        name: "LIFE",
        tag: "18",
        price: 19,
        inCart: 0
    },
    {
        name: "X-Men",
        tag: "19",
        price: 20,
        inCart: 0
    },
    {
        name: "Avenger",
        tag: "20",
        price: 21,
        inCart: 0
    }

];


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}




function cartNumbers(product) {

    console.log("product is", product);


    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        // document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        // document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
    swal("Good job!", "Your item is added to cart!", "success");

}


function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}




function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}



function displayCart() {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-items");

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `



        
         <div class="cart-row">
             <div class="cart-item cart-column">
                 <img class="img-men" src="../images/${item.tag}.jpg" style="width:50px; height:50px">
                 <span class="cart-item-title">${item.name}</span>
             </div>
             <span class="cart-price cart-column">$${item.price},00</span>
             <span class="cart-price cart-column">💚${item.inCart}</span>
             
             <div class="cart-quantity cart-column">
                 <input class="cart-quantity-input" type="number" value="1">
                 <button class="btn btn-dark" type="button">REMOVE</button>
             </div>
         </div>
     
         


         `
        });
    }

}

// onLoadCartNumbers();
displayCart();
updateCartTotal();






// remove items from cart


var removeCartItemButtons = document.getElementsByClassName('btn-dark')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }



    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }


    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }


    function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }

    
    function purchaseClicked() {
        swal({
            title: "Are you sure?",
            text: "Once placed you are not able to change it soon",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("hey! Your Order has been placed!", {
                icon: "success",
              });
            } else {
              swal("Add items to cart");
            }
          });
        var cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
        localStorage.clear();
    }





function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        
    }
    total = Math.round(total * 100) / 100
    console.log(total);
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total +',00'
}