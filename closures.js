// What Closure is?
// A function bundlled with its lexical scope is known as Closure, Whenever the function is returenned by using return statememt in Closures, The
// function still holds the closure binding. 

function sayHi()
{
    this.firstname ="Akshay";
    this.lastname ="Sharma";
    console.log((this.firstname));
    console.log(a);
    function sayHello()
    {
        console.log(this.lastname);
     }
    return sayHello; // returning the function sayHello
}

var x =sayHi();
x();

sayHi()();

// sayHi()()() its curring 