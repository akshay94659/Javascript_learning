function sayHi()
{
    this.firstname ="Akshay";
    console.log((this.firstname));
    function sayHello()
    {
        console.log(this.firstanem);
     }
     sayHello();
}

sayHi();

// Lexical scope is the ability for a function scope to access variables from the parent scope.
// We call the child function to be lexically bound by that of the parent function.