let a = 100;

var c = 10;

if(true){
    let a = 10;
   const b = 20;
   //console.log("Inner: " , a);

}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Raziya"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);

    two();
}
//one()

if(true){
    const username = "Raziya";
    if(username === "Raziya"){
        const website = "youtube";
        //console.log(username + website)
    }
    //console.log(website);
}
//console.log(username);

// +++++++++ Concept ++++

console.log(addone(5));
function addone(num){
    return num + 1;
}


const addTwo = function(num){
    return num + 2;

}

addTwo(5);