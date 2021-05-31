// objects in javascript

var data = {
    name :"Akshay",
    last_name :"Sharma",
    login :"google",
    id :91729129,
    attempts : [],
    myAttempts : function(attemp){
       this.attempts.push(attemp);
    },

    addattempts : function()
    {
        return `the ${this.name} is enrolled in ${this.attempts.length} courses`;
    }
};

// methods to access the objects 

console.log(data["last_name"]);
console.log(data.name);
console.log(data.addattempts());



