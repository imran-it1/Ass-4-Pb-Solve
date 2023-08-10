// 1

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


// 2

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



//3

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


// 4

function findAddress(obj) {

    let address = obj.street + ',' + obj.house+ ',' + obj.society;
    return address;

}


let person = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
}


// let output = findAddress(person);
// console.log(output);



//5


function canPay(changeArray, totalDue) {

    if(changeArray.length === 0){
        return 'Please provide valid array....';
    }

    let moneyHave = 0;

    for (let item of changeArray ){
        moneyHave += item;
    }

    if(moneyHave >= totalDue){
        return true;
    }
    else{
        return false;
    }
}

let changeArray = [1, 5, 5];
let actualPrice = 10;
 
let output4 = canPay(changeArray, actualPrice);
console.log(output4);