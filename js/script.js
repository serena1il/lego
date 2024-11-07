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

    //  //

    document.querySelectorAll(".wishlist-btn").forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("filled"); // 클릭 시 filled 클래스 토글
        });
    });

    document.querySelectorAll(".wish-btn").forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("filled"); // 클릭 시 filled 클래스 토글
        });
    });

    document.querySelectorAll(".wishlist-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 이벤트 전파 막기
            event.preventDefault(); // 기본 링크 동작 방지
            // 찜하기 기능을 여기에 추가
        });
    });
    document.querySelectorAll(".wish-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 이벤트 전파 막기
            event.preventDefault(); // 기본 링크 동작 방지
            // 찜하기 기능을 여기에 추가
        });
    });
    // //

    const topSlider = new Swiper(".top-slider", {
        // Optional parameters
        direction: "horizontal", // vertical
        loop: true,
        autoplay: {
            delay: 1000, // 자동 슬라이드 간격(밀리초)
            disableOnInteraction: false, // 상호작용 후에도 자동 슬라이드 계속
        },
        speed: 1000,
        effect: "slide", //slide, fade, cube, flip, coverflow

        // 캐러셀 만들기
        slidesPerView: 3, // 한번에 보여질 슬라이드 갯수
        spaceBetween: 50, // 슬라이드 간의 간격

        // Pagination (페이지네이션)
        pagination: {
            el: ".top-slider-wrap .pagination",
            clickable: true,
        },
    });

    // 이벤트 슬라이드

    const eventSlider = new Swiper(".event-slider", {
        // 옵션 설정
        loop: true, // 루프 설정
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 클릭 가능 설정
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000, // 자동 재생 지연 시간 (밀리초)
            disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
        },
    });

    // //

    // 모든 버튼 요소를 선택
    const tabButtons = document.querySelectorAll(".tab-button");

    // 각 버튼에 클릭 이벤트 리스너 추가
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // 모든 버튼에서 active 클래스 제거
            tabButtons.forEach((btn) => btn.classList.remove("active"));

            // 클릭된 버튼에 active 클래스 추가
            button.classList.add("active");
        });
    });
});
