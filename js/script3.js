$(function () {
    // TOP버튼
    const backToTop = document.querySelector(".back-to-top");
    const html = document.documentElement;
    const htmlPos = html.scrollHeight / 2;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop >= htmlPos) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });

    // 부드럽게 맨 위로 스크롤하는 기능 추가
    backToTop.addEventListener("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600); // 600밀리초 동안 부드럽게 스크롤
    });

    // //

    // document.addEventListener("DOMContentLoaded", function () {
    //     const newSlider = new Swiper(".new-slider", {
    //         loop: true,
    //         pagination: {
    //             el: ".swiper-pagination",
    //             clickable: true,
    //         },
    //         navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev",
    //         },
    //         autoplay: {
    //             delay: 3000,
    //             disableOnInteraction: false,
    //         },
    //     });
    // });
});