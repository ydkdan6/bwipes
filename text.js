function processArray(array){
    //created sum variable to  hold initial value 0 to total the array
    let sum = 0;

    for(let i = 0; i< array.length; i++){
        //line to check data type of each individual element in the array that is a number
        if (typeof array[i] === 'number'){

            sum+=(array[i]); //add current to sum
            //if D is contained within a string, in the array
        } else if(array[i] === "D"){
            //removes element ranging from 0 to i and doubles it by 2
            const doubleArray = array.splice(0, i).map(num => num * 2);
            doubleArray.slice(0, i, ...doubleArray);//insert back into the original element at postion 0 with the current value
            //update the length of the arrayby adding the doubled array
            i+= doubleArray.length;
            //if + is contained within a string in the array
        } else if(array[i] === "+"){
            sum = array.reduce((acc, num) => typeof num === 'number' ? acc + num : acc, 0);
            //if C is contained with a string in the array
        } else if(array[i] === "C"){
            //removes the last element in the array
            array.pop();
        }
    }
    return sum;
}

let x = [5,'D','+', 'C'];
let result = processArray(x);
console.log(result);