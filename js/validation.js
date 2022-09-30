//인풋 태그와 버튼 태그 선택
const userName = document.querySelector("#name");
const resultBtn = document.querySelector("#contactBtn");
const userContact = document.querySelector("#contact");
const userEmail = document.querySelector("#email");
const userSubject = document.querySelector("#subject");
const userMessage = document.querySelector("#message");
const messages = document.querySelectorAll(".message");//메세지 출력 p 태그들
//변수 세팅
let nameCheck = /^[ㄱ-힣]{2,4}$/; //체크할 문자패턴 수식
let ConNumCheck = /^[0-9]{1,2}$/; //숫자만
let subjectCheck = /^[ㄱ-힣|\w\#\$\!\*]{1,12}$/; //영,한,특,숫자만
let emailCheck = /^[\w]+\@+[a-z]+\.[a-z]{2,3}$/;
// //test() <-- 정규표현식을 가지고 특정단어 체크시 true false값으로 알려주는 함수
// console.log(checkComplete);

//입력받은 value값을 가지고 정규표현식 체크
resultBtn.addEventListener("click",function(e){
    e.preventDefault();
    let nameValue = userName.value;
    let contactValue = userContact.value;
    let subjectValue = userSubject.value;
    let emailValue = userEmail.value;

    let checkComplete1 = nameCheck.test(nameValue);
    let checkComplete2 = emailCheck.test(emailValue);
    let checkComplete3 = ConNumCheck.test(contactValue);
    let checkComplete4 = subjectCheck.test(subjectValue);
    if(checkComplete1){
        messages[0].innerHTML = "이름을 형식에 맞게 입력하였습니다.";
    }
    else{
        messages[0].innerHTML = "이름은 2~4자리의 한글만 가능합니다.";
    }
    if(checkComplete2){
        messages[1].innerHTML = "이메일을 형식에 맞게 입력하였습니다.";
    }
    else{
        messages[1].innerHTML = "이메일을 제대로 입력해 주세요. ex) hskim1234@naver.com";
    }
    if(checkComplete3){
        messages[2].innerHTML = "순번을 형식에 맞게 입력하였습니다.";
    }
    else{
        messages[2].innerHTML = "순번은 두자리까지의 숫자만 가능합니다";
    }
    if(checkComplete4){
        messages[3].innerHTML = "주제를 형식에 맞게 입력하였습니다.";
    }
    else{
        messages[3].innerHTML = "주제는 12자리까지 영문,한글,숫자,특수문자#$!*가 가능합니다.";
    }
    if(checkComplete1 && checkComplete2 && checkComplete3 && checkComplete4){
        alert("전송되었습니다!!");
    }
    else{
        alert("오류 메시지들을 다시 확인해주세요!");
    }
});