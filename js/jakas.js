const openMap = document.getElementById('openMap');
const mapPopup = document.getElementById('mapPopup');
const closeBtn = document.querySelector('.close-btn');


openMap.addEventListener('click', function(e) {
    e.preventDefault(); 
    mapPopup.style.display = 'block';
});


closeBtn.addEventListener('click', function() {
    mapPopup.style.display = 'none';
});


window.addEventListener('click', function(e) {
    if (e.target === mapPopup) {
        mapPopup.style.display = 'none';
    }
});