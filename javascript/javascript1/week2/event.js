
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getEventWeekday(n){
    
 let day=new Date();
let today=day.getDay();

let eventDay=(today+n)%5;
console.log(eventDay);

return weekday[eventDay] ;
}
 let result=getEventWeekday(9);
 console.log("eventday is :"+result);
let result1=getEventWeekday(1);
console.log("eventday is :"+result1);
