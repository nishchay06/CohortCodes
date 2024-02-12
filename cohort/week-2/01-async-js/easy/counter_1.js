function print(val){
    console.log(val)
}
function start() {
    let cr = 0
    setInterval(() => print(cr=cr+1),1000)
}

start()