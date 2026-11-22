const result = document.getElementById(`result`);

const input = document.getElementById(`input`);
const ctfRadio = document.getElementById(`ctf`);
const ftcRadio = document.getElementById(`ftc`);

function convert(){
    if((input.value).trim() === ``){
        result.textContent = `Please enter a valid Number!`;
    }

    let inputValue = Number(input.value);

    if(isNaN(inputValue)){
        result.textContent = `Please enter a valid Number!`;
    }

    if(ctfRadio.checked){
        result.textContent = `${((inputValue * (9/5) + 32)).toFixed(1)}°F`
    }
    else if(ftcRadio.checked){
        result.textContent = `${((inputValue - 32) * (5/9)).toFixed(1)}°C`
    }
    else{
        result.textContent = `Please select one of the conversion methods!`
    }
}