window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// $(document).ready(function() {
//     // scroll down
//     $("html, body").animate({
//         scrollTop: $(document).height()
//     }, 1000);                  

//     //scroll back up
//     $("html, body").animate({
//         scrollTop: 101
//     }, 1000);                  
// });

// $(window).scroll(function() {
//     if ($(this).scrollTop()) {
//         $('#toTop').fadeIn();
//     } else {
//         $('#toTop').fadeOut();
//     }
// });

// $("#toTop").click(function () {
// //1 second of animation time
// //html works for FFX but not Chrome
// //body works for Chrome but not FFX
// //This strange selector seems to work universally
// $("html, body").animate({scrollTop: 0}, 1000);
// });