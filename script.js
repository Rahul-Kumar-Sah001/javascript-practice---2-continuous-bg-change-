const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
const changeBackground = function () {
    document.body.style.backgroundColor = randomColor();
}

let changeColor;
const startChangingColor = () => {
    if (!changeColor) changeColor = setInterval(changeBackground, 1000);
}
const stopChangingColor =
    () => {
        if (changeColor) {
            clearInterval(changeColor);
            changeColor = null;
        }
    }
start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);
