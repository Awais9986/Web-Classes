// make a calculator class which take two  arguements
// it will add multiple, subtract or divide or module any number
// it will show percentage and its subject

class Calculator{

    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2

        console.log("parent class contructor called");
        
        
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


class ScientificCaculator extends Calculator{
    constructor(num1, num2, subjectName, subjectMarks){
        // calling super or parent class contructor
        super(num1, num2)
        console.log("child class constructor called");

        // remaning are class variables
        this.subjectName = subjectName;
        this.subjectMarks = subjectMarks;
        
    }

    percentage = () =>{
        console.log(this.subjectName);
        
        return ( 150 * this.subjectMarks) / 100
    }


}


// let newCal = new Calculator(12, 2)

let newSciCal = new ScientificCaculator(12, 2, "Maths", 110)
console.log(newSciCal.subtract())
console.log(newSciCal.percentage())





