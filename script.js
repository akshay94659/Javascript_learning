// for the counte part

var counter = document.querySelector(".counter");
var follower= document.querySelector(".folower");


let count =0;

setInterval(()=>{
    if(count <1000)
    {
         count++;
         counter.innerText = count;
    }
},1)

setTimeout(()=>{
    follower.innerText="Followers on Twitter";
},5000)


console.log("Hey Console");
// alert("are you learning");
var name;
//prompt("what is your name",name);
//confirm("your age is ${name}");

var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);

var firstName= "Akshay";
var lastName="Sharma";
var phoneNumber =980374504;
var email="akshay@gmail.com"
var address ="234/22, Gali Kuch Heer Singh, Amritsar";
var pan="snjndkj1212";
var password="1234";
var confirmpassword="123s4";
var status;

if (password == confirmpassword)
{
    status ="Confirmed"
}
else{
    status="Not-Confirmed"
}

// bulk values to the  console
console.log(`
      The First Name is : ${firstName}
      The Last Name is : ${lastName}
      You can Dail in : ${phoneNumber}
      Spam this mail : ${email}
      Send the Vitamin M to : ${address}
      The important for salary is : ${pan}
      You login is : ${status}
`)

// conditional statements // the if-else

var temperature= 20;

if(temperature<20)
{
   console.log("its cold")
}
else 
{
  console.log("Its hot here")
}

// tertaory operator in Java script 

var asuthenticated = true;
 
asuthenticated ? console.log("Yes Login Checked") : console.log("logged out");

// type of operator 

var user = "admin";
console.log(typeof user);

// case statement
var auth ="admin";

switch(auth)
{
    case "user":
        console.log("you got less authorities");
        break;
    case "admin":
        console.log("You got all the authorities");
        break;
    case "subadmin":
        console.log("ypu have midn authorities");
        break;
    default:
        console.log  
}
 
//falsy values

// undefined
// 0
// null
// ''
// NaN

var akshay;
console.log(akshay);

var abc =0;
var aks= "null";
console.log(aks);

console.log(abc);

var num= 1/0;
console.log(num)

// functions in javascript

function printHello(name)
{
    console.log("Hello World",name);
}

printHello("Bon Gateau");

// Global COntext 
var myname="Akshay";

function contexts()
{
    
    if(myname == this.myname)
    {
        console.log("true");
        console.log(myname);
        console.log(this.myname);
    }
    else{
        console.log("false");
        console.log(myname);
        console.log(this.myname);
    }
    
 }

 contexts();

 // Code Hoisting

 // So, basically in js, two type of context is there, that is Global and the Execution context

 

 console.log(name);
 var name ="Akshay";

 
  var Code_hoisting = function ()
 {
     console.log("Hey Man!!");
 }

 Code_hoisting(); 

 // Scope Chaining, Smaller demands from bigger and bigger demands from biggest but not vice - versa

 var myName ="AS";
 console.log(myName);

 function bigger()
 {
    var name ="Mr. AS";
    console.log(name);
    smaller();
    function smaller()
    {
        console.log(name);
    }

 }

 bigger();
 
 // this keyword

 console.log(this);
