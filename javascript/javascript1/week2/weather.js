function weather(temperature){
if (temperature<=0 ){
    return " you weare jacket and jense";

}
else if(temperature<=12){
    return "you weare formal dress ";
}
else if(temperature<=20){
 return " you weare tshirt and short";
}
else{
    return "as your wish";
}
}
let clothesToWear = weather(0);
console.log(clothesToWear);