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

    // 스와이퍼
    // 스와이퍼
    $(document).ready(function () {
        var swiper = new Swiper(".swiper-container", {
            slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
            spaceBetween: 30, // 슬라이드 간의 간격
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                // 추가적인 옵션을 여기에 설정할 수 있습니다.
            },
            // 페이지네이션을 활성화합니다.
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });

    $(document).ready(function () {
        $(".dropdown-menu li").click(function () {
            var selectedText = $(this).text(); // 클릭한 항목의 텍스트 가져오기
            $(".sort-label").text(selectedText); // span 텍스트 업데이트
        });
    });

    document.querySelectorAll(".wishlist-btn").forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("filled"); // 클릭 시 filled 클래스 토글
        });
    });
});
