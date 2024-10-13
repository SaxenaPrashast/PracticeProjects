const clock = document.getElementById('clock') // ya fir query selector dono mein sein kuch bhi le sakte hai
//document.querySelector('#clock')




setInterval(function(){
    let date  = new Date()
    //console.log(date.toLocaleTimeString())
    clock.innerText = date.toLocaleTimeString();
},1000)