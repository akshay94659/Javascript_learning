// loops in js

for(let i =0; i<10;i++)
{
    //console.log(` the count is ${i}`);
}
// iterating in array

var mystates =["Shimla","Punjab","Delhi","UK" ];
for(let j=0; j<mystates.length;j++)
{
    if(mystates[j]!="Shimla")
    {
        console.log(mystates[j]);
    }
    
}

console.log("-------------------------------");
// while loop
var i =0;

while(i<mystates.length)
{
    console.log(mystates[i]);
    i++
}

// do while loop
console.log("--------------------------------");
var i =0;
do{
    console.log(mystates[i]);
    i++;
}
while(i<mystates.length)
;
