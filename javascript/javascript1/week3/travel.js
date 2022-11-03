const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
 function calculation(tr){
    const hours=Math.floor(tr.destinationDistance/tr.speed);
    const minute=Math.floor(((tr.destinationDistance/tr.speed)-hours)*60);
    return `${hours}  hours and  ${minute} minutes`;
  
 }
   const travelTime =calculation(travelInformation);
  
  console.log(travelTime);
