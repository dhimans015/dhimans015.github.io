$(".send-button").click(function(){
    var firstname=$(".name").val(); 
    var check= /^[a-zA-Z\s]+$/;
    //name//
    
    if(firstname==""){
    $(".name-hide").text("Enter your name");
    return false;}
    else{true;}
    
    if(!firstname.match(check)){
    $(".name-hide").text("Enter your valid name");
        return false;}
        else{true;}
    
    if(firstname.length>20){
    $(".name-hide").text("More than 20 char. is not allowed");
    return false;
    }
    else{ $(".first-name-hide").text("");}
    
    //mobile no//
    var mobile=$(".mobile").val();
    var check_moblie=/^[0-9]+$/;
    if(mobile==""){
        $(".mobile-hide").text("enter your mobile no.");
        return false;
    }
    else{true}
    if(!mobile.match(check_moblie)){
        $(".mobile-hide").text("enter your valid mobile no.");
        return false;
    }
    else{$(".mobile-hide").text("");}
    //mobile no//
    
    //email //
    
    var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=$(".email").val();
    if(email==""){
        $(".email-hide").text("Enter your email id");
        return false;
    }
    else{true}
    if(!email.match(check_email)){
        $(".email-hide").text("Enter your valid email id");
        return false;
    }
    else{ $(".email-hide").text("");}
    //message//
    var message =$(".message").val();
    if(message==""){
        $(".hide-message").text("write something for us");
        return false;
    }
    else{$(".hide-message").text("")}
    })



    document.getElementsByClassName('.send-button')[0].addEventListener('click',  cartNumbers)


    function cartNumbers(){
        swal({
            title: "Hey!",
            text: "You need to sign up before adding movies to wishlist!!",
            icon: "warning",
            button: "Ok!",
          });
    }