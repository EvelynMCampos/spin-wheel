let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = 0
const getValue = () => value = Math.ceil(Math.random() * 3600) + value;


spinBtn.addEventListener("click", (e) => {
    console.log(value)
    getValue()
    wheel.style.transform = "rotate(" + value + "deg)"

    wheelSound.play()
    setTimeout(function(){
        applause.play()
    }, 5500)
})


