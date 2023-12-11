//헤더
//내비게이션 바 이동
const headerMenu = document.querySelectorAll("#header nav a");

const about = document.querySelector("#s2");
const exhibition = document.querySelector("#s11");
const visit = document.querySelector("#s15");

headerMenu[0].onclick = function (event) {
    event.preventDefault();
    about.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[1].onclick = function (event) {
    event.preventDefault();
    exhibition.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[2].onclick = function (event) {
    event.preventDefault();
    visit.scrollIntoView({ behavior: 'smooth' });
};


//헤더 없애기
var myHeader = document.querySelector("#header");
var isHeaderVisible = true; 
var previousScrollPosition = 0; 

window.addEventListener("scroll", function () {
    var currentScrollPosition = window.scrollY; 

    if (currentScrollPosition > previousScrollPosition && currentScrollPosition > 1100 && isHeaderVisible) { 
        myHeader.style.top = -150 + "px";
        isHeaderVisible = false;
    }
    else if ((currentScrollPosition < previousScrollPosition || currentScrollPosition <= 200) && !isHeaderVisible) {
        myHeader.style.top = 0; 
        isHeaderVisible = true;
    }

    previousScrollPosition = currentScrollPosition; 
});


//section s1
//랜덤 색
const colors = ['#FF4429', '#00D46C', '#002E80', '#C0FC4B', '#DCDCDE', '#137CF4', '#FFFC63'];

function getRandomColor() {
  var colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
}

function changeColor() {
  const color = getRandomColor();
  var svgElements = document.querySelectorAll('.main-logo path, .main-logo polygon');
  svgElements.forEach(function(svgElement) {
    svgElement.style.stroke = color;
  });
}

setInterval(changeColor, 2000); // 2초마다 색상 변경



//section s4
//숫자 증가
let counterElement = document.querySelector('#s4 p');

//숫자 1~6 증가
function increaseCounter() {
    let counter = 1;
    let intervalId = setInterval(() => {
        if (counter <= 4) {
            counterElement.textContent = counter; //<p>의 텍스트
            counter++;
        } else {
            clearInterval(intervalId); //6이 되면 멈춤
            counterElement.style.color="#FFFC63";
        }
    }, 200); //2.5s
}
//숫자 0으로 리셋
function resetCounter() {
    counterElement.textContent = '1';
    counterElement.style.color="#c9c9c9";
}

let countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        //위치 감지
        if (entry.isIntersecting) {
            increaseCounter(); //함수 실행
        } else {
            resetCounter(); //함수 리셋
        }
    });
}, {threshold: 0}); //#s4 p가 화면에서 완전히 나갔을 때 리셋함수 실행

countObserver.observe(counterElement); 


//section s5
//배경 차게
window.addEventListener('scroll', function() {
    const s5Circle = document.querySelector('#s5 .circle');
    const s5viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const s5scrollY = (window.scrollY / s5viewportWidth) * 100; //scrollY vw 단위로 계산
    let s5scale = 0;

    console.log(s5scrollY);
    if (s5scrollY >= 190 && s5scrollY <= 220) {
        const progress = (s5scrollY - 190) / (220 - 190);
        s5scale = 1 + (6 - 1) * progress;
    } else if (s5scrollY > 220) {
        s5scale = 6;
    }

    // 스케일 값을 적용합니다.
    s5Circle.style.transform = `translate(-50%, -50%) scale(${s5scale})`;
});
//section s8
//배경 차게
window.addEventListener('scroll', function() {
    const s8Circle = document.querySelector('#s8 .circle');
    const s8viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const s8scrollY = (window.scrollY / s8viewportWidth) * 100; //scrollY vw 단위로 계산
    let s8scale = 0;

    console.log(s8scrollY);
    if (s8scrollY >= 245 && s8scrollY <= 275) {
        const progress = (s8scrollY - 245) / (275 - 245);
        s8scale = 1 + (6 - 1) * progress;
    } else if (s8scrollY > 275) {
        s8scale = 6;
    }

    // 스케일 값을 적용합니다.
    s8Circle.style.transform = `translate(-50%, -50%) scale(${s8scale})`;
});
//section s9
//배경 차게
window.addEventListener('scroll', function() {
    const s9Circle = document.querySelector('#s9 .circle');
    const s9viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const s9scrollY = (window.scrollY / s9viewportWidth) * 100; //scrollY vw 단위로 계산
    let s9scale = 0;

    console.log(s9scrollY);
    if (s9scrollY >= 300 && s9scrollY <= 330) {
        const progress = (s9scrollY - 300) / (330 - 300);
        s9scale = 1 + (6 - 1) * progress;
    } else if (s9scrollY > 330) {
        s9scale = 6;
    }

    // 스케일 값을 적용합니다.
    s9Circle.style.transform = `translate(-50%, -50%) scale(${s9scale})`;
});
//section s10
//배경 차게
window.addEventListener('scroll', function() {
    const s10Circle = document.querySelector('#s10 .circle');
    const s10viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const s10scrollY = (window.scrollY / s10viewportWidth) * 100; //scrollY vw 단위로 계산
    let s10scale = 0;

    console.log(s10scrollY);
    if (s10scrollY >= 360 && s10scrollY <= 390) {
        const progress = (s10scrollY - 360) / (390 - 360);
        s10scale = 1 + (6 - 1) * progress;
    } else if (s10scrollY > 390) {
        s10scale = 6;
    }

    // 스케일 값을 적용합니다.
    s10Circle.style.transform = `translate(-50%, -50%) scale(${s10scale})`;
});


//section s9
//시계
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawNumbers(ctx, radius) {
  let ang;
  for(let num = 1; num <= 36; num++){
    ang = num * Math.PI / 18;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.beginPath();
    ctx.lineWidth = 5; // 스트로크 너비 설정
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 20); // 스트로크 길이 설정
    ctx.stroke();
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}


function drawTime(ctx, radius){
    const now = new Date();
    let second = now.getSeconds();
    //minute
    let minute = 1.4; // 분침이 항상 12시 방향을 가리키게 합니다.
    drawHand(ctx, minute, radius*0.4, radius*0.02);
    // second
    second=(second*Math.PI/18);
    drawHand(ctx, second, radius*0.6, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}


//section s11
//원 커지게
window.addEventListener('scroll', function() {
    const circle = document.querySelector('#s11 .circle');
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const scrollY = (window.scrollY / viewportWidth) * 100; //scrollY vw 단위로 계산
    let scale = 0;

    let translateY = 50;
    if (scrollY >= 450 && scrollY <= 500) {
        const progress = (scrollY - 450) / (500 - 450);
        scale = 0 + (6- 0) * progress;
        translateY = 50 + (220 - 50) * progress;
    } else if (scrollY > 500) {
        scale = 6;
        translateY = 220;
    }

    // 스케일 값을 적용합니다.
    circle.style.top = `${translateY}%`;
    circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
});


//section s13
//스크롤 시 컨텐츠 변화
var sections = document.querySelectorAll('.s13');  // 모든 섹션을 가져옴
var currentSectionIndex = 0;  // 현재 섹션 인덱스
var lastScrollTime = new Date().getTime();  // 마지막 스크롤 시간

// 모든 섹션의 opacity를 0으로 설정
for (var i = 0; i < sections.length; i++) {
    sections[i].style.opacity = '0';
    sections[i].style.transition = 'opacity 1s';
}
// 첫번째 섹션의 opacity를 1로 설정
sections[currentSectionIndex].style.opacity = '1';

var scrollElement = document.querySelector('#information');

// 스크롤 이벤트 핸들러
function handleScroll(e) {
    var now = new Date().getTime();  // 현재 시간
    if (now - lastScrollTime < 1000) {  // 마지막 스크롤 이후 1초가 지나지 않았으면 리턴
        return;
    }
    lastScrollTime = now;  // 마지막 스크롤 시간 업데이트

    if(e.deltaY > 0) {  // 아래로 스크롤
        if(currentSectionIndex < sections.length - 1) {  // 마지막 섹션이 아니면
            sections[currentSectionIndex].style.opacity = '0';  // 현재 섹션의 opacity를 0으로 설정
            currentSectionIndex++;  // 섹션 인덱스를 증가시킴
            sections[currentSectionIndex].style.opacity = '1';  // 다음 섹션의 opacity를 1로 설정
        }
        e.preventDefault();
    } else if(e.deltaY < 0) {
        if(currentSectionIndex > 0) {  // 첫번째 섹션이 아니면
            sections[currentSectionIndex].style.opacity = '0';  // 현재 섹션의 opacity를 0으로 설정
            currentSectionIndex--;  // 섹션 인덱스를 감소시킴
            sections[currentSectionIndex].style.opacity = '1';  // 이전 섹션의 opacity를 1로 설정
        }
        e.preventDefault();
    }
}

// 스크롤 이벤트 등록
scrollElement.addEventListener('wheel', handleScroll);
