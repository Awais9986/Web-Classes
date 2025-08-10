// make a calculator class which take two  arguements
// it will add multiple, subtract or divide or module any number

class Calculator{

    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
        
    }

    add = (name)=>{
        console.log("my name is", name);
        
        return this.num1 + this.num2
    }

    subtract = () =>{
        return this.num1 - this.num2
    }
    multiple = () =>{
        return this.num1 * this.num2
    }
    divide = () =>{
        return this.num1 / this.num2
    }
    reminder = () =>{
        return this.num1 % this.num2
    }
   
}


let cal = new Calculator(12, 4)

console.log(cal.add("baga"));
console.log(cal.multiple());
console.log(cal.subtract());
console.log(cal.divide());
console.log(cal.reminder());
