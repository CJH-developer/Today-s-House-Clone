var index = 0;   //이미지에 접근하는 인덱스
    window.onload = function(){
        slideShow();
    }
    
function slideShow() {
    var i;
    var x = document.getElementsByClassName("slider");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index++;
    if (index > x.length) {
        index = 1;  //인덱스가 초과되면 1로 변경
    }   
    x[index-1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow, 5000);   //함수를 4초마다 호출
}

// 버튼 눌러서 이미지 슬라이드


const slideTrack = document.querySelector('.recommend__image__list');
const slides = document.querySelectorAll('.listImg');
const totalSlides = slides.length;
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlideTrack();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlideTrack();
}

function updateSlideTrack() {
    const distanceToMove = currentIndex * -100;
    slideTrack.style.transform = `translateX(${distanceToMove}%)`;

  // 만약 현재 슬라이드가 마지막 슬라이드이면 초기 위치로 이동
    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            slideTrack.style.transition = 'none';
            currentIndex = 0;
            slideTrack.style.transform = `translateX(0%)`;
            setTimeout(() => {
            slideTrack.style.transition = 'transform 0.5s ease-in-out';
            });
        }, 500);
    }

}




