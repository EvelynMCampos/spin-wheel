let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
const degDefault = 22.5
let value = degDefault

const getValue = () => { 
    sortedValue = Math.ceil(Math.random() * 360) + 1800;
    value = value - sortedValue;
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
    { color: "#008B8B", label: "Perdeu", message: 'Poxa, que pena! Tente novamente...'},
    { color: "#6A5ACD", label: 1, suffix: "$" },
    { color: "#FF1493", label: 50, suffix: "$" },
    { color: "#00FF7F", label: 0, suffix: "$" },
    { color: "#A020F0", label: "Sorte", message: 'Agora vale o dobro!!' }, 
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
        index = parseInt((Math.abs(value - degDefault) % 360) / 45)
        field = fields[index]
        alert(`${field.message ? field.message : `Você parou no campo ${field.label}`} `)
    }, 5500)
})
