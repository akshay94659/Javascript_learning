const incidents =()=>{
    console.log("Hi, i got two incicents");

}

var solution = ()=>{
    setTimeout(()=>
    {
        console.log("Hi, Mehul have been assigned");
    },2000);
    console.log("Hi, I have solved one Incident");
}

const more_incidents = ()=>
{
    console.log("hi, I got twp more incidnets");

}

incidents();
solution();
more_incidents();

// This signifies that in Javascript, the function will not work as synchorn but rather will work as async
// This is used for functions with heavy load required.