 var swiper = new Swiper('.swiper-container', {
 	
        onSlideChangeStart: function(swiper){
     document.getElementById("page1-1").classList.toggle("pager2-moveTobottom");
document.getElementById("page1-2").classList.toggle("pager2-moveTotop");     
document.getElementById("page1-3").classList.toggle("pager2-moveTotop1");        
document.getElementById("page1-4").classList.toggle("pt-page-moveFromLeft"); 
document.getElementById("page2-1").classList.toggle("rote11");
document.getElementById("page2-2").classList.toggle("pager3-moveTobottom");
document.getElementById("page2-3").classList.toggle("page3-moveFromLeft");
document.getElementById("page2-4").classList.toggle("page4-moveFromRight");
document.getElementById("page2-5").classList.toggle("page4-moveFromLeft");
document.getElementById("page3-1").classList.toggle("page5-moveFromCenter");
document.getElementById("page3-2").classList.toggle("page5-moveFromTop");
document.getElementById("page3-3").classList.toggle("page5-moveFromBottom");
document.getElementById("page4-1").classList.toggle("page6-move1");
document.getElementById("page4-2").classList.toggle("page6-move2");
document.getElementById("page4-3").classList.toggle("page6-move3");
document.getElementById("page4-4").classList.toggle("page6-move4");
document.getElementById("page4-5").classList.toggle("page6-move5");
document.getElementById("page4-6").classList.toggle("page6-move6");
document.getElementById("page4-7").classList.toggle("page6-move7");
document.getElementById("page4-8").classList.toggle("page6-move8");
document.getElementById("page5-1").classList.toggle("page7-move1");
document.getElementById("page5-2").classList.toggle("rote12");
document.getElementById("page5-3").classList.toggle("page7-move2");








     
},
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
         onInit: function(swiper){
   swiperAnimateCache(swiper);
   swiperAnimate(swiper);
	  },
   onSlideChangeEnd: function(swiper){
	swiperAnimate(swiper);
    }
    });