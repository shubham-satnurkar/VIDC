$(document).ready(function(){
    $('#menu-btn').click(function(event){
        $('#navbar').toggle(500).css('display', 'flex');
        console.log("Clicked")
    });

    $(window).resize(function(){
        // if ($(this).width() >= 768) {
        //     location.reload();
        // }
        if(window.innerWidth == 768 || window.innerWidth == 770)
        location.reload();
    });

    // Scrollspy
    var $scrollspy=$("#scrollspy");
    let $target =$("#manage-dev")
    function scrollToAnchor($arrow){
        // var $arrow=$(".arrow");
        $('html,body').animate({scrollTop: $arrow.offset().top },'500');
    }
    $scrollspy.click(function() {
       scrollToAnchor($target);
    });



    // Onclick Search Bar Modal Show
    let $search = $("#searchBtn");
    let $modal2 =$("#modal2");
    let $formBox =$("#formBox");
    let $close = $("#close");
   $search.on("click", function(){
        $modal2.css({
            "display":"block",
        }); 
        $formBox.animate({
            margin : "2rem auto 1rem",
        }, 500) 
    });
    $close.on("click" ,function(){
        $modal.css({
            "display":"none"
        }); 
        location.reload()
        console.log("close")
    });

 
    //Onclick Video Modal Show
    let $show = $(".show-modal")
    let $dismis = $("#dismis");
    let $box = $(".modal-box")
    $modal = $("#modal")
    $show.on("click", function(){
        $modal.css({
            "display":"block",
        }); 
        $box.animate({
            margin : "2rem auto 1rem",
        }, 500)
    }) 
    $dismis.on("click" ,function(){
        $modal.css({
            "display":"none"
        }); 
        location.reload()
        console.log("close")
    });


    // Bottom To top SCroll button animation
        // Bottom to top scroll btn animation
        var scrBtn = $('.scroll-top-btn');
        $(window).scroll(function () {
          if ($(window).scrollTop() > 200) {
            scrBtn.addClass('show');
          }
          else {
            scrBtn.removeClass('show');
          }
        });
        scrBtn.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, 1000)
        })




    
});








// Subscribe Form Validation
let emailNode = document.getElementById("email");
let errorNode = document.getElementById("error");
let border1 = "1px solid #f00";
let border2 = "1px solid #0f0";
let form = document.querySelector(".form");

function validate(){
    errorNode.textContent = "";
    let email = emailNode.value;
    let subStr = email.substring(email.indexOf("@")+1);
    console.log(subStr);
    if (email == "") {
        errorNode.textContent="this field is required";
        form.style.border=border1;
        return false
    } 
    else if(!email.includes("@") || subStr==""){
        errorNode.textContent="Inavalid Email Id";
        form.style.border=border1;
        return false
    }
    else {
        form.style.border=border2;
        return true
    }
}

function formValidate(){
    let validState = validate();
    return validState;
}
