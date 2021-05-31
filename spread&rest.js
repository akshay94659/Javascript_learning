// Problem - When you define a function and send parameters not  according to as defined in the function, it gives error

//  Solution - Spread Operator helps in solving the issue.

// Example - In the below problem, the array cannot be send as parameters, so we use spread operator to solve the issue

function subtract (a,b)
{

    return a-b;
}

var myArr =[ 8,4];
console.log(subtract(...myArr));  // Spread Operator


function sum_all(a,b,...args)  // this is rest operator
{
    let product = a*b;
    let sum =0;
    
    for (const arg of args) {
        sum +=arg;
    }
    return [sum,product];

}

console.log(sum_all(2,1,3,45,6,2));

// Use cases of spread and rest, when you dont want to change the function definition or when input comes as in changing number