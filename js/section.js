
const header = document.querySelector("#header");
const move = document.querySelectorAll(".move");
const gnb = document.querySelectorAll(".gnb > li");
const hbgGnb = document.querySelectorAll(".hbgGnb > li");
const hbgMenu = document.querySelector(".hbgMenu");
let secStart = [];
window.addEventListener("scroll",function(){
    let cont2Start = document.querySelector(".cont2").offsetTop;
    //tag의 위치값 가져옴 -> 스크롤할 때마다
    //구역 위치값
    for(let i=0; i<move.length; i++){
        secStart[i] = move[i].offsetTop;
    }
    let scTop = window.scrollY;
    //스크롤바의 위치가 cont2 구역의 시작 위치값 -40을 위치보다 크다면 
    // offsetTop
    if(scTop >= (cont2Start - 40)){
        header.classList.add("fixed");
    }
    else{
        header.classList.remove("fixed");
    }
    for(let i=0; i<gnb.length; i++){
        if(scTop >= secStart[i]){
            for(let j=0; j<gnb.length; j++){
                gnb[j].classList.remove("on");
                hbgGnb[j].classList.remove("on");
            }
            gnb[i].classList.add("on");
            hbgGnb[i].classList.add("on");
        }
    }
});

//gnb 클릭시 구역별로 나타내기
scrollTocont(gnb);
scrollTocont(hbgGnb);

function scrollTocont(tag){
    for(let i=0; i<gnb.length; i++){
        tag[i].addEventListener("click",function(e){
        e.preventDefault();
        //해당 섹션구역의 위치값으로 스크롤바가 부드럽게 이동
        let scrollMove = move[i].offsetTop;
        window.scrollTo({
            top:scrollMove,
            behavior:"smooth"
        });
        hbgMenu.classList.remove("on");
    });
    }
}
//햄버거 메뉴
const hbgBtn = document.querySelector(".hbgBtn");
const xBtn = document.querySelector(".xBtn");
const operX = document.querySelector(".operci");

hbgBtn.addEventListener("click",function(){
    hbgMenu.classList.add("on");
});
xBtn.addEventListener("click",function(){
    hbgMenu.classList.remove("on");
});
operX.addEventListener("click",function(){
    hbgMenu.classList.remove("on");
});
