$(document).ready(function () {

    const banner_list = new Swiper(".banner_list", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    const swiperTabOptions = {
        effect: 'fade',
        speed: 1000,
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    };

    const xb_list = new Swiper(".xb_list", swiperTabOptions);
    const concert_list = new Swiper(".concert_list", swiperTabOptions);



    const review_list = new Swiper(".review_list", {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
    });

    const tickerOptions = {

        loop: true,
        speed: 3000,
        allowTouchMove: false,
        freeMode: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    };






    $("[class^='tab_btn'] button").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active");

        let num = $(this).index();

        let parentClass = $(this).parent().attr('class').split(' ')[0];
        let tabNum = parentClass.replace(/[^0-9]/g, '');


        const $targetGroup = $(".tab_list" + tabNum);
        const $targetContent = $targetGroup.find(".tab_contents").eq(num);


        $targetContent.fadeIn(300).siblings().hide();
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const ticketLists = document.querySelectorAll('.ticket_txt_more');

    ticketLists.forEach(function (dl) {
        const dt = dl.querySelector('dt');
        dt.addEventListener('click', function () {
            ticketLists.forEach(target => {
                if (target !== dl) target.classList.remove('active');
            });
            dl.classList.toggle('active');
        });
    });
});