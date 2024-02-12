function print(val) {
    console.log(val)
}
const start = (cr,lim) => {
    if(cr < lim){
        print(cr+1)
        setTimeout(() => {
            start(cr+1,lim)
        }, 1000);
    }
}

start(0,4)