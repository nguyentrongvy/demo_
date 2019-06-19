

$('.dropbtn').on('click', function(event){
    // event.stopPropagation();
    // event.stopPropagation && event.stopPropagation();
    // event.preventDefault && event.preventDefault();
    document.getElementById("myDropdown").classList.toggle("show");
});

// $(document).on("click", function (e) {
//     console.log(1);
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
// });


// $(document).click(function(e) {
//     if($(e.target).is('.dropbtn')) {
//         return
//     } else {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// });

// $('.dropdown').on('focusout', function(event) {
//     alert('yo');
// });


// $('.dropdown').on('blur', function(event) {
//     console.log('hêr');
//     // var dropdowns = document.getElementsByClassName("dropdown-content");
//     // var i;
//     // for (i = 0; i < dropdowns.length; i++) {
//     //     var openDropdown = dropdowns[i];
//     //     if (openDropdown.classList.contains('show')) {
//     //         openDropdown.classList.remove('show');
//     //     }
//     // }
// });

  // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//             var dropdowns = document.getElementsByClassName("dropdown-content");
//             var i;
//             for (i = 0; i < dropdowns.length; i++) {
//                 var openDropdown = dropdowns[i];
//                 if (openDropdown.classList.contains('show')) {
//                     openDropdown.classList.remove('show');
//                 }
//             }
//     }
// }

$('.a').on('click', function(e){
    console.log($(this).html())
    $('.dropbtn').html($(this).html());
    // document.getElementById("myDropdown").classList.toggle("show");

    $(window).on('click', function(){
        console.log('dr',!event.target.matches('.dropbtn'));
        // console.log('ra',!event.target.matches('.rate'));
        if (!event.target.matches('.rate') && !event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
    }
    });

    // window.onclick = function(event) {
    //     if (!event.target.matches('.rate')) {
    //             var dropdowns = document.getElementsByClassName("dropdown-content");
    //             var i;
    //             for (i = 0; i < dropdowns.length; i++) {
    //                 var openDropdown = dropdowns[i];
    //                 if (openDropdown.classList.contains('show')) {
    //                     openDropdown.classList.remove('show');
    //                 }
    //             }
    //     }
    // }

    
})

//   function b(){
//     console.log($(this).html())

//     $('.dropbtn').html($(this).html());
//   }


// $(document).ready(function()
//     {
//         $(".dropdown").mouseleave(function()
//         {
//             alert("mouseleave");
//         });
//     });

// $(document).ready(function () {
//     $("body").not(".dropdown").click(function (e) {
//         alert(1);
//         // $("#addstuff").fadeOut();
//     });
// });