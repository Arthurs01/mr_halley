

/*---------------Menu responsivo------------*/




  /*------------Scroll Animation-------------*/   
  

  window.onscroll=function(){
  let animation = document.querySelectorAll(".animation");
  
  function MostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animation.length; i++ ) {
      let alturaAnimado = animation[i].offsetTop;
      if(alturaAnimado - 500 < scrollTop) {
        animation[i].style.opacity = 1;
        animation[i].classList.add("mostrar-arriba");
        
      }
    }
  
  }
   window.addEventListener('scroll', MostrarScroll);
   
   
   
   let animation2 = document.querySelectorAll(".animation2");

   function MostrarScroll2() {
     let scrollTop = document.documentElement.scrollTop;
     for (var i=0; i < animation2.length; i++ ) {
       let alturaAnimado = animation2[i].offsetTop;
       if(alturaAnimado - 500 < scrollTop) {
         animation2[i].style.opacity = 1;
         animation2[i].classList.add("mostrar-izquierda");
         
       }
     }
   
   }
    window.addEventListener('scroll', MostrarScroll2);  
 
  }


