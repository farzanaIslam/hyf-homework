function getFullname (firstname ,surname ,useFormalName ){
    if(useFormalName ==true){
        return "Lord ".concat(firstname.concat(" ",surname));
    }
    else{
       return  firstname.concat(" ",surname);
    }
    

}
let fullname1=getFullname("Benjamin","Hughes",true);
let fullname2=getFullname("Benjamin","Hughes",false);


// console.log(fullname1);
console.log(fullname2);
