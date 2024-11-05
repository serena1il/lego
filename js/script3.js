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

    document.querySelectorAll(".wishlist-btn").forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("filled"); // 클릭 시 filled 클래스 토글
        });
    });
    document.querySelectorAll(".new-wish").forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("filled"); // 클릭 시 filled 클래스 토글
        });
    });

    // //
    document.addEventListener("DOMContentLoaded", function () {
        // Swiper 인스턴스 생성
        const newSlider = new Swiper(".new-slider", {
            direction: "horizontal",
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            speed: 1000,
            effect: "slide",
            slidesPerView: 1,
            spaceBetween: 50,

            // Pagination
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // Navigation buttons
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        // newSlider 변수를 활용할 수 있는 추가 코드가 필요할 수 있습니다.
    });
});
