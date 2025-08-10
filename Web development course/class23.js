// classes and Objects



// class is a blue print (nakshi / sanchi) which help us to create objects
// for example: Da block sancha
class Block{

    // it will automatically calls when we create objects
    
    constructor(shega, krish, cemat, khaka, oba){
        this.shega = shega;
        this.krish = krish;
        this.cemat = cemat;
        this.khaka = khaka;
        this.oba = oba
        
        
    }

    printData = ()=>{
        console.log(this.shega);
        
    }
    
}

// block1 is object you can create many objects with different properties
// objects are real thing

let block1 = new Block("2 tatki", "2 tatki", "1 buray", "1 tatki", "5 litter")

let chawalAoAlwaBlock = new Block("chawal", "Alwa", "oski", "biryani", "tel malga", "2 letter")
chawalAoAlwaBlock.printData()


// let str = new Strings("baga the great")
// str.printName() // baga the great











