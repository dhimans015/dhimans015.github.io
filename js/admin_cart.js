let carts = document.querySelectorAll('.add-cart');



let products = [{
        name: "Dora:The Explorer",
        tag: "1",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt2",
        tag: "2",
        price: 20,
        inCart: 0
    },
    {
        name: "Tshirt3",
        tag: "3",
        price: 15,
        inCart: 0
    },
    {
        name: "Tshirt4",
        tag: "4",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt5",
        tag: "5",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt6",
        tag: "6",
        price: 20,
        inCart: 0
    },
    {
        name: "Tshirt7",
        tag: "7",
        price: 15,
        inCart: 0
    },
    {
        name: "Tshirt8",
        tag: "8",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt5",
        tag: "9",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt6",
        tag: "10",
        price: 20,
        inCart: 0
    },
    {
        name: "Tshirt7",
        tag: "11",
        price: 15,
        inCart: 0
    },
    {
        name: "Tshirt8",
        tag: "12",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt5",
        tag: "13",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt6",
        tag: "14",
        price: 20,
        inCart: 0
    },
    {
        name: "Tshirt7",
        tag: "15",
        price: 15,
        inCart: 0
    },
    {
        name: "Tshirt8",
        tag: "16",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt5",
        tag: "17",
        price: 15,
        inCart: 0
    },
    {
        name: "tshirt6",
        tag: "18",
        price: 20,
        inCart: 0
    },
    {
        name: "Tshirt7",
        tag: "19",
        price: 15,
        inCart: 0
    },
    {
        name: "Tshirt8",
        tag: "20",
        price: 15,
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
                 <span class="cart-item-title">${item.price}</span>
             </div>
             <span class="cart-price cart-column">$${item.price}</span>
             <span class="cart-price cart-column">💚${item.inCart}</span>
             <span class="cart-price cart-column">❌</span>
             
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
            text: "Once changed movie details can't revert soon!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("hey!Changes made successfully to movies!", {
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
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}