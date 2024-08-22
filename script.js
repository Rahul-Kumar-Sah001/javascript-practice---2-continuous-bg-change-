const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color ="#"; 
    for(let i = 0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
const changeBackground = function(){
    document.body.style.backgroundColor = randomColor();
}

let changeColor;
start.addEventListener('click',()=>{
    changeColor = setInterval(changeBackground,1000);
});

stop.addEventListener('click',()=>{
   if(changeColor) clearInterval(changeColor);
});
