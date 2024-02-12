let timeoutId
async function getDebouncedAns() {
    // call getAns when not called for 250ms
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        getAns()
    },250);
}
async function getAns() {
    const element = document.getElementById('finalAns')
    const prin = (document.getElementById('ib1').value) || "0"
    const roi = (document.getElementById('ib2').value) || "0"
    const time = (document.getElementById('ib3').value) || "0"
    const res = await fetch('https://sum-server.100xdevs.com/interest?principal='+prin+"&rate="+roi+"&time="+time)
    const obj = await res.json()
    element.innerHTML = "Interest is " + obj.interest + " & Amount is " + obj.total
}