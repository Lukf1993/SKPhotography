
    var swiper = new Swiper('.swiper-container', {
      
      centeredSlides: true,
      loop: true,
      speed: 2000,
      effect: 'fade',
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // var controller = new ScrollMagic.Controller();

    // var scene = new ScrollMagic.Scene({triggerElement: ".dynamicContent #loader", triggerHook: "onEnter"})
    //   .addTo(controller)
    //   .on("enter", function (e) {
    //     if (!$("#loader").hasClass("active")) {
    //       $("loader").addClass("active");
    //       if (console){
    //         console.log("loading new items");
    //       }
    //       setTimeout(addBoxes, 1000, 9);
    //     }
    //   });

    // function addBoxes (amount) {
    //   for (i=1; i<=amount; i++) {
    //     $("<div></div>")
    //       .addClass("box1")
    //       .appendTo("dynamicContent #content");          
    //   }
    //   scene.update();
    //   $("#loader").removeClass("active");
    // }
    // addBoxes(18);


    
    

