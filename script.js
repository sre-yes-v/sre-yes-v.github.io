// var TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });








var icon1=document.getElementById("icon1");
    var icon=document.getElementById("icon");

function toggle0()
{

    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
        icon.src="image/night.png";
    }
    else
    {
        icon.src="image/day.png";
    }
}










 icon1.onclick=function toggle1()
 {
         document.body.classList.toggle("dark");
     if(document.body.classList.contains("dark"))
     {
         icon1.src="image/night.png";
     }
     else
     {
         icon1.src="image/day.png";
     }
    
 }


 function showsidebar()
 {
     const sidebar=document.querySelector('.sidebar');
     sidebar.style.display='block';
 }


 function hidesidebar()
 {
     const sidebar=document.querySelector('.sidebar');
     sidebar.style.display='none';
 }



 //work slide
 let slideIndex = 1;
 showSlides(slideIndex);
 
 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 // Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }








 
 