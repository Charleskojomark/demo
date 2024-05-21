// ads display
function swiperOne(){


const swiper = new Swiper(".swiper-container", {
    loop: true, // Add this option to enable continuous sliding
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
  });

}

swiperOne()


  // services section

  function swiperTwo() {
    
 

  let swiperServices = new Swiper(".services_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
      delay: 4000,
    },
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
 
 });

}


swiperTwo();

// expert section

function swiperThree() {
    
 

  let swiperServices = new Swiper(".expert_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
      delay: 5000,
    },
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
 
 });

}


swiperThree();


// trending services

function swiperFour() {
    
 

  let swiperServices = new Swiper(".trending_services", {
    slidesPerView: 1,
    // loop: true,
    
    // spaceBetween: 10,
    autoplay: {
      delay: 4000,
    },
    // autoHeight: true,
    
      // when window width is >= 640px
      
     


  //  pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true, 
  //    dynamicBullets: true,
  //  },
   },
 
 );

}


swiperFour();


let swiperTestimonial = new Swiper(".testimonial_container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  autoplay: {
    delay: 5000,
  },

//  pagination: {
//    el: ".swiper-pagination",
//    clickable: true, 
//    dynamicBullets: true,
//  }, 
 
});
