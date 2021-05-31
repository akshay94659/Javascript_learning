console.log(this);
var element="high"
var new_year="Wooh"
console.log(element);
var odata={
    partner:"No valye",
    partner :"no val",
    getme:"never",
    myfunc : function()
    {
        console.log(this);
    }
}

odata.myfunc();

// regular functions call back to the window or the global object
