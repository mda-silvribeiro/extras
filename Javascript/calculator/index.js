var tmp;
var x;
function btn(num){
    tmp = document.calc.visor.value += num;
}
function del(){
    document.calc.visor.value = '';
}
function result(){
    x = eval(tmp);
    document.calc.visor.value = x;
}