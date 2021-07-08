//Tasawar Saraf Fibanachi Sequence Homework Day 3

class fibSequence{
  
    // give the length of the array i.e make sure to put 10 since we are doing 10 digits

    constructor(length){
        this.numberOne = 0;
        this.numberTwo = 1;
        this.length = length;
        
    }

    // make sure is 1 because if you put 0 then it can't be sequence[-1]
    doSequence(){
        let sequence = [this.numberOne, this.numberTwo];
        for(let i=1; i < this.length + 1; i++){
            sequence.push(sequence[i-1] + sequence[i])
        }
        console.log(sequence);
    }
  
  


    
    
}

let sequence = new fibSequence(10);

sequence.doSequence();











