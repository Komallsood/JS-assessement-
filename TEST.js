// create a variable to hold your NFT's

const NFTs =[];

// function will take values as parameters, create an NFT object holds metadata of nfts , 
// and store it in the variable above.
function mintNFT (_owner, _currency, _amount, _receiverID) {
  const NFt ={
    "owner": _owner,
    "currency":_currency,
    "amount": _amount,
    "recevierID": _receiverID
  }
  NFTs.push(NFt);
  console.log("minted :" + _owner); // print the  owner's name 
}

// and print their values of nfts  with console.log()
function listNFTs () {
  for(let i = 0; i < NFTs.length; i++) {
    console.log("\nID:\t\t\t " + (i+1));
    console.log("Owner:\t\t " + NFTs[i].owner);
    console.log("currency:\t " + NFTs[i].currency);
    console.log("amount:\t\t " + NFTs[i].amount);
    console.log("recevier ID: " + NFTs[i].recevierID);
  }
}

// print the total number of  minted  NFTs 
function getTotalSupply() {
  console.log("\n" + NFTs.length)
}

// call your functions below this line

mintNFT("Komal", "Bitcoin", "1.7 BTC", "0x0F97"); 
mintNFT("kajal", "Ethereum", "2.0 ETH", "0x0F96");
mintNFT("Sagar", "Polygon", "1.0 Matic", "0x0F77");
mintNFT("Akshit", "DogeCoin", "0.8 DOGE", "0x0F87");

listNFTs();
getTotalSupply();
