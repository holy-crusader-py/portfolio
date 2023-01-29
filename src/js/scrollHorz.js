console.log("Loadded");

const scrollSpeed = 60;

function scrollHorz(e) {
   console.log("scrollHorz");
   e = e;
   let t = $(".projects-scroller")[0];
   var translateX;
   if (t.style.transform) {
      translateX = parseInt(t.style.transform.split("(")[1].split("px")[0]);
   } else {
      translateX = 0;
   }
   let b_translateX = translateX;
   let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

   translateX += delta * scrollSpeed;
   if (translateX > 10) {
      translateX = 0;
   } else if (translateX < -t.scrollWidth + t.clientWidth) {
      translateX = -t.scrollWidth + t.clientWidth;
   }
   t.style.transform = `translateX(${translateX}px)`;

   if (translateX != b_translateX) {
      e.preventDefault();
   }

}

const observeUrlChange = () => {
   var oldHref = document.location.href;
   const body = document.querySelector("body");
   const observer = new MutationObserver(mutations => {
       mutations.forEach(() => {
         if (oldHref !== document.location.href) {
           oldHref = document.location.href;
           
            $(".project-container").on("mousewheel DOMMouseScroll", scrollHorz);
         }
       });
     });
     observer.observe(body, { childList: true, subtree: true });
   };

$(function(){
   window.onload = observeUrlChange;
   $(".project-container").on("mousewheel DOMMouseScroll", scrollHorz);
})