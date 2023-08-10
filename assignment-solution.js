function cubeNumber(number) {
    if (typeof number !== 'number'){
        return "Please enter a number......"
    }
    const cubeResult = Math.pow(number, 3);
    return cubeResult;
}

let inputNumber = '2';
let output = cubeNumber(inputNumber);
console.log(output);