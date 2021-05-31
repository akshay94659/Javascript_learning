function sayHi()
{
    this.firstanem ="Akshauy";
    console.log((this.firstanem));
    function sayHello()
    {
        console.log(this.firstanem);
     }
     sayHello();
}

sayHi();