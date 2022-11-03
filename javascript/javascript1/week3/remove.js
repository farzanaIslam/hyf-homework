const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  for(let i=0;i<names.length;i++){
    if (names[i]===nameToRemove){
        continue;
    }
    console.log(names[i])
  }
  
 