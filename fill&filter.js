// arrya.fill("Value", start o index, end of index)

// It is used to fill the array values with the array function
// Includes the Start index but exclusive of the end index

var arrays = ["Akshay", "Sharma", "IS","A","Good"];
arrays.fill("h",2,3);

console.log(arrays);

//filter is used to find the value in the array

console.log(arrays.filter((e)=> e!="h"))