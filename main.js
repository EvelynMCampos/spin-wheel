let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.addEventListener("click", (e) => {
    
    wheel.style.transform = "rotate(" + value + "deg)"

    wheelSound.play()
    setTimeout(function(){
        applause.play()
    }, 5500)
})


