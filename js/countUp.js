
//배열 객체 이용 태그 데이터
let tagValue = [
    {
        icon:"fa-solid fa-image",
        h4:"Unique Layout",
        p:"A robust, multipurpose template built with modularity at<br>the core."
    },
    {
        icon:"fa-solid fa-bars-progress",
        h4:"Online Live Support",
        p:"You can build your site in-browser with modular interface blocks."
    },
    {
        icon:"fa-solid fa-tablet-button",
        h4:"Responsive Design",
        p:"There are many variations of passages of Lorem Ipsum available."
    }
];

//넣어줄 태그
const list = document.querySelector(".right_feat");
let listBox = ""; //태그 넣어줄 변수
//반복문 사용 태그 생성
tagValue.forEach(function(el){
    listBox += `<div class="list">
                    <div class="icon"><i class='${el.icon}'></i></div>
                    <div class="text">
                        <h4>${el.h4}</h4>
                        <p>${el.p}</p>
                    </div>
                </div>`
});

list.innerHTML = listBox; //태그 생성


//배열에 객체 이용 변수 선언
let countValue = [
    {
        plus:5,
        tag:".box1 .count",
        complete:1391,
        loop:10,
        tagBox:".box1"
    },
    {
        plus:5,
        tag:".box2 .count",
        complete:445,
        loop:40,
        tagBox:".box2"
    },
    {
        plus:5,
        tag:".box3 .count",
        complete:133,
        loop:100,
        tagBox:".box3"
    },
    {
        plus:5,
        tag:".box4 .count",
        complete:775,
        loop:20,
        tagBox:".box4"
    },
    {
        plus:5,
        tag:".box5 .count",
        complete:555,
        loop:40,
        tagBox:".box5"
    }
];

let cont3Start = document.querySelector(".cont3").offsetTop;
let test = true
window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    if(scTop >= cont3Start){
        if(test == true){
            countValue.forEach(function(el){
                setCount(el.plus,el.tag,el.complete,el.loop);
            });
        }
    }
});

//배열 반복문을 이용하여 함수 호출

//함수 정의
function setCount(inc,sel,com,speed){//매개변수
    test = false;
    let num = 0;
    let autoCount = setInterval(function(){
        num += inc;
        //조건문으로 자동실행 멈춤
        if(num >= com){
            clearInterval(autoCount);
            document.querySelector(sel).innerHTML = com;//마지막 도달값 넣어줌
        }
        else{
            document.querySelector(sel).innerHTML = num;//자동실행중 변화값 넣어줌
        }
    },speed);
}