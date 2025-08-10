class MyNumber extends Number{
    constructor(num, name){
        super(num)

        this.name = name
    }

    printName = function(){
        console.log(this.name, "is a great man");
        
    }
}




let myNum = new MyNumber(12, "baga")

console.log(myNum.printName());

