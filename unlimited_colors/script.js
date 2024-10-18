const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId
const startChargingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeByColor,1000);
    }
    

    function changeByColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChargingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};
document.querySelector("#start").addEventListener('click',startChargingColor);
document.querySelector("#stop").addEventListener('click',stopChargingColor);