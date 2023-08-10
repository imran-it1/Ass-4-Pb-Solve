// Problem 1

function cubeNumber(number) {
    if (typeof number !== 'number'){
        return "Please enter a number......"
    }
    const cubeResult = Math.pow(number, 3);
    return cubeResult;
}

// let inputNumber = '2';
// let output = cubeNumber(inputNumber);
// console.log(output);


// Problem 2

function matchFinder(string1, string2) {

    if( typeof string1 !== 'string' || typeof string2 !== 'string' ){
        return 'Please provide two string.....';
    }

    else if (string1.includes(string2)){
        return true;
    }

    else{
        return false;
    }
}

// const str1 = 'john doe'
// const str2 = 'e';

// const output2 = matchFinder(str1, str2);
// console.log(output2);



function sortMaker(arr) {

    if (arr[0] >= 0 && arr[1] >= 0){

        if( arr[0] > arr[1] ){
            return arr;
        }

        else if( arr[1] > arr[0] ){
            let sortArray = [arr[1], arr[0]];
            return sortArray;
        }
        else if ( arr[0] === arr[1] ){
            return 'equal'
        }
    }
    else{
        return 'Invalid Input'
    }

}

// let input = [0, 1]
// let output3 = sortMaker(input);
// console.log(output3);



function findAddress(obj) {



}


