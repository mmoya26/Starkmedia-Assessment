(() => {
    function setSwiper(){
        // User hasn't resized in 500ms

        // If window width is less than or equal to 500px then set carousel to only show one image
        if (window.innerWidth <= 500) {
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 45,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".next_arrow",
                    prevEl: ".prev_arrow",
                },
            });
        } else if(window.innerWidth <= 1400) {
            // If window width is less than or equal to 1400px then set carousel to only show two image
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 45,
                slidesPerGroup: 2,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".next_arrow",
                    prevEl: ".prev_arrow",
                },
            });
        } else {
            // If window is not less than or equal to 500 px or 1400px set to original state to show three images
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".next_arrow",
                    prevEl: ".prev_arrow",
                },
            });
        }
    }

    let timer;

    // Set timer on window resize to check if user has resized the window any in the last half second
    window.onresize = function(){
      clearTimeout(timer);
      timer = setTimeout(setSwiper, 500);
    };

    // This function will be called once the script loads once so that the carousel can be set right away
    setSwiper();
})();