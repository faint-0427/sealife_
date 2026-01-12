/* 전체 풀페이지 */
$('#fullpage').fullpage({
    responsiveWidth: 1380,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 2 || destination === 4) {
            $("#header,#fp-nav").addClass("active");
        } else {
            $("#header,#fp-nav").removeClass("active");
        };
        if (destination === 6) {
            $("#fp-nav, #header").fadeOut();
        } else {
            $("#fp-nav, #header").fadeIn();
        };
    },
});


const lanContainer = document.querySelector('.lan');
const selectBtn = document.querySelector('.selected-lan');
const optionItems = document.querySelectorAll('.language-list li');

// 1. 클릭 시 리스트 열기/닫기
selectBtn.addEventListener('click', () => {
    lanContainer.classList.toggle('active');
});

// 2. 항목 선택 시 텍스트 변경 및 닫기
optionItems.forEach(item => {
    item.addEventListener('click', () => {
        selectBtn.textContent = item.textContent; // 버튼 텍스트 변경
        lanContainer.classList.remove('active'); // 리스트 닫기
        console.log("Selected Value:", item.getAttribute('data-value'));
    });
});