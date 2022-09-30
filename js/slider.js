const circle = document.querySelectorAll(".circle li");
const view = document.querySelector(".view");
const tags = document.querySelectorAll(".view > div");

tags.forEach(function(item,index){
    item.innerHTML = `<div class="testimonial-item">
                        <i class="fa-solid fa-quote-left"></i>
                        <p class="testimonial-para"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                        <div class="testimonial-post">
                            <a href="#"><img src="img/testimonial${index+1}.png" alt="image"></a>
                            <div class="text-content">
                                <h5 class="text-capitalize">David Walker</h5>
                                <p class="catalina"> Chairman, AcroEx </p>
                            </div>
                        </div>
                      </div>`
});

circle.forEach(function(item,index){
    item.addEventListener("click",function(e){
        e.preventDefault();
        //슬라이드 움직이는 계산식
        view.style.marginLeft = -100 * index + "%";
        circle.forEach(function(item,index){
            item.classList.remove("on");
        });
        item.classList.add("on");
    });
});