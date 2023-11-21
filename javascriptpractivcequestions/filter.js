let number=[11,20,31,40,51,60]
function evennumber(number){
    if(number%2===0)
    return true;
else
    return false;


}
let evennumbers=number.filter(evennumber)
console.log(evennumbers);