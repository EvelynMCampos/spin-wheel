let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = 0
const degDefault = 22.5

const getValue = () => { 
    sortedValue = Math.ceil(Math.random() * 360) + 1800;
    value = sortedValue + value;
    console.log(value - degDefault)
    console.log((value - degDefault) % 360)
}

const renderWheel = (fields) => wheel.innerHTML = 
    fields.reduce((acc, field, index) =>  
    `
    ${acc}
        <div 
            class="number" 
            style="background: ${field.color}; transform: rotate(${45 * (index+1)}deg);
        "> 
            <span>${field.label}</span> ${field.suffix ? `<label>${field.suffix}</label>` : ""};
        </div>   
    `, 
        "")

const fields = 
[
    { color: "#008B8B", label: "Dev" },
    { color: "#6A5ACD", label: 1, suffix: "$" },
    { color: "#FF1493", label: 50, suffix: "$" },
    { color: "#00FF7F", label: 0, suffix: "$" },
    { color: "#A020F0", label: "Week" },
    { color: "#FF0000", label: 10, suffix: "$" },
    { color: "#191970", label: 5, suffix: "$" },
    { color: "#808080", label: 20, suffix: "$" }
]

window.addEventListener("load", () => renderWheel(fields))

spinBtn.addEventListener("click", e => {
    getValue()
    wheel.style.transform = "rotate(" + value + "deg)"
    wheelSound.play()
    setTimeout(() => {
        applauseSound.play()
    }, 5500)
})


