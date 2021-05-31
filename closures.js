function sayHi()
{
    this.firstanem ="Akshauy";
    this.lastname ="Sharma";
    console.log((this.firstanem));
    function sayHello()
    {
        console.log(this.lastname);
     }
    return sayHello;
     
}

var x =sayHi();
x();

sayHi()();

// sayHi()()() its curring 