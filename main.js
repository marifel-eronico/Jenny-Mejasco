// const navbar = document.getElementById('navbar');
// window.onscroll = function () {
//     scrollFunction()
// }
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
//     } else {
//         navbar.classList.remove('active')

//     }
// }


document.querySelectorAll(".top-nav").forEach((ele) =>
    ele.addEventListener("click", function (event) { 
      document
        .querySelectorAll(".top-nav")
        .forEach((ele) => ele.classList.remove("active"));
      this.classList.add("active");
    })
  );

 /*windows.onscroll= ()=> {
    Section.forEach(sec => {
        Let top=window.scrollY;
        Let offset=sec.offsetTop;
        Let height=sec.offsetHeight;
        Let id=sec.getAttribute('id');
        
    
} )
window.onscroll = ()=> {
    menubar.classList.remove('fa-times');
    menubar.classList.remover('active');
}

} 
*/



// const scrollrevealOption = {
//     distance: '50px',
//     origin: 'bottom',
//     duration: 1500,
// }

// ScrollReveal().reveal('.home h1',scrollrevealOption)
// ScrollReveal().reveal('.home h4',{
//     ...scrollrevealOption,
//     delay:800,
// });
// ScrollReveal().reveal('.home .btn-explore',{
//     ...scrollrevealOption,
//     delay:1200,
// });

// ScrollReveal().reveal('.about .about-title',scrollrevealOption)
// ScrollReveal().reveal('.about .about-desc',{
//     ...scrollrevealOption,
//     delay:600,
// });
// ScrollReveal().reveal('.about .item-data',{
//     ...scrollrevealOption,
//     delay:1200,
// });
// ScrollReveal().reveal('.btn-explore',{
//     ...scrollrevealOption,
//     delay:2000,
// });
// ScrollReveal().reveal('.btn-more',{
//     ...scrollrevealOption,
//     delay:2000,
// });
// ScrollReveal().reveal('.card',scrollrevealOption)

// ScrollReveal().reveal('.card .image',{
//     ...scrollrevealOption,
//     delay:600,
// });
// ScrollReveal().reveal('.card .content-card h4',{
//     ...scrollrevealOption,
//     delay:1600,
// });
// ScrollReveal().reveal('.next .card .content-card  p',{
//     ...scrollrevealOption,
//     delay:2000,
// });



// ScrollReveal().reveal('.next .card .content-card p',{
//     ...scrollrevealOption,
//     delay:600,
// });


// ScrollReveal().reveal('form .input',scrollrevealOption) ;
// ScrollReveal().reveal('row .card',scrollrevealOption) ;


// document.querySelectorAll(".top-nav").forEach((ele) =>
//     ele.addEventListener("click", function (event) {
//       event.preventDefault();
//       document
//         .querySelectorAll(".top-nav")
//         .forEach((ele) => ele.classList.remove("active"));
//       this.classList.add("active")
//     })
//   );


