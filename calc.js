function display(num) {
    console.log(results)
    results.value +=num
}
function allClear(){
    results.value= ""
}
function equal(){
    results.value = eval(results.value)
}
function remove(){
    results.value= results.value.slice(0,-1)
}