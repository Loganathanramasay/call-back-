let count = 10;

function countdown() {
    console.log(count);
    if (count === 1) {
     console.log("Happy Independence day");
    } else{
        count--;
        setTimeout(countdown, 1000);
    }
    
}
countdown();