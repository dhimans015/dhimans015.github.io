let carts = document.querySelectorAll('.add-cart');
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
        
    })
}
function cartNumbers(){
    swal({
        title: "Hey!",
        text: "You need to sign up before adding movies to wishlist!!",
        icon: "warning",
        button: "Ok!",
      });
}