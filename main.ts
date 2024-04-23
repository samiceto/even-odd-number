#! /usr/bin/cnv node

function evenOdd(value: number): string{
    if (value % 2 === 0){
        return 'even';
    }
    else{
        return 'Odd';
    }
}

const value = 9;
const result = evenOdd(value);
console.log(`${value}"is an "${result}"number"`);

