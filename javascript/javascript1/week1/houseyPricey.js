let patersWide=8
let petersDepth=10
let petersHight=10
let petersGardenSize=100
let petersHouseCost=1500000
let volumeInMeters=petersDepth*petersHight*patersWide;
let gardenSizeInM2=petersGardenSize
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(petersHouseCost>housePrice){
    console.log("petrer paying too much");
}
else{
    console.log("peters paying too little ");
}
let JuliasWide=5
let JuliasDepth=11
let JuliasHight=8
let JuliasGardenSize=70
let JuliasHouseCost=1000000
let JuliasvolumeInMeters=JuliasDepth*JuliasHight*JuliasWide;
let JuliasgardenSizeInM2=JuliasGardenSize
let JuliashousePrice = JuliasvolumeInMeters * 2.5 * 1000 + JuliasgardenSizeInM2 * 300;
if(JuliashousePrice){
    console.log("Julia  paying too much");
}
else{
    console.log("Julia paying too little ");
}

