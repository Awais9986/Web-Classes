class MyArray{
    constructor(...baga){
        this.ba = [...baga]
    }


    myForEach = () => {
        console.log(this.ba);
        
    }

}

let arr = new MyArray(1,2,3,4)

console.log(arr.ba)


arr.myForEach()