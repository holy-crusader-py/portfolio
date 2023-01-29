const scrollSpeed = 60;

function scrollHorz(e) {
   e = e;
   let t = e.currentTarget;
   let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
   t.scrollLeft -= (delta * scrollSpeed);

   let dir = e.wheelDelta || -e.detail;
   if (!(dir > 0 && t.scrollLeft <= 0) && !(dir < 0 && t.scrollLeft >= t.scrollWidth - t.clientWidth)) {
      console.log("Prevent Default");
      e.preventDefault();
   }
}


$(function(){
   $(".scrollHorz").on("mousewheel DOMMouseScroll", scrollHorz);
})