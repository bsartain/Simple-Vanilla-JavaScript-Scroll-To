function scrollWin(destination, speed) {
    let to = document.getElementById(`${destination}`).offsetTop;
    let num = 0;
    let runScroll = setInterval(function() {
        window.scrollTo(0, num = num + speed);
        if(num >= to){
            clearInterval(runScroll);
        }
    }, 1);              
}