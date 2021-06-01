// For of Loop Example
var students =["Akshay","Rajat","Himanshu","Varjeet"];

for (let n of students)
{
    console.log(n);
}

// It is used for Iterable things like Arrays

//For in Loop Example
var batchmates={
    name :"Akshay",
    last:"Sharma",
    mobile :980374594,
    email:"akshay.sharma@gmail.com"
}

for( const n in batchmates)
{
    console.log(batchmates[n]);
}

// It is used for Objects not the Iterable things like Arrays