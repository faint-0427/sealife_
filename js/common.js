/* 전체 풀페이지 */


const lanContainer = document.querySelector('.lan');
const selectBtn = document.querySelector('.selected-lan');
const optionItems = document.querySelectorAll('.language-list li');


selectBtn.addEventListener('click', () => {
    lanContainer.classList.toggle('active');
});



optionItems.forEach(item => {
    item.addEventListener('click', () => {
        selectBtn.textContent = item.textContent; // 버튼 텍스트 변경
        lanContainer.classList.remove('active'); // 리스트 닫기
        console.log("Selected Value:", item.getAttribute('data-value'));
    });
});

//gnb_depth2

$(document).ready(function() {
    $('.gnb > li').on('click', function(e) {
        e.stopPropagation();

        $(this).toggleClass('on').siblings().removeClass('on');
    });

    $('.gnb .depth2 a, .gnb .depth2 button').on('click', function(e) {
        e.stopPropagation();
    });

        $(document).on('click', function() {
        $('.gnb > li').removeClass('on');
    });

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