const randomColor = () => {
    const hexCodeDigits = "0123456789ABCDEF";
    let colorCode = "#";
    for(let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * 16);
        colorCode += hexCodeDigits[randomIndex];
    }
    return colorCode;
}

const setBackgroundColor = () => {
    document.querySelector('body').style.backgroundColor = randomColor();
}

let bgColor = null;
document.querySelector('#start').addEventListener('click', () => {
    if(!bgColor){ // null is falsy so for the first time it runs, but when you press start again, now the bgColor has previous timer id which is a number(truthsy) and !truthsy => false. hence if does not execute the next time!
        bgColor = setInterval(setBackgroundColor, 1000); // without null check multiple intervals start executing the number of times you press start button.
    }
})

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(bgColor);
    bgColor = null; // basically you are replacing the timer id with null.
})