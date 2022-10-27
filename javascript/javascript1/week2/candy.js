const candytype=["Sweet","Chocolate","Toffee","Chewing-gum"];
const weight=[20,30,40,20];
const gram=[0.5,0.7,1.1,0.03];
let amountToSpend =Math.random()*100;

function addCandy(c,w,cb){
    const boughtCandyPrices=[];
    for(let i=0;i<candytype.length;i++){
       let price= weight[i]*gram[i];
       boughtCandyPrices.push(price);
        
    }
    
  return  cb(boughtCandyPrices);

}

function canBuyMoreCandy(boughtCandyPrices){
    for(let j=0;j<boughtCandyPrices.length;j++){
        if(amountToSpend > boughtCandyPrices[j] ){
            console.log(amountToSpend ,boughtCandyPrices[j] +" you can by more candy!!!!")
        }
        else{
            console.log(amountToSpend ,boughtCandyPrices[j] +" enough    .....");
        }
        
    }
    

}
addCandy(candytype,weight, canBuyMoreCandy);

