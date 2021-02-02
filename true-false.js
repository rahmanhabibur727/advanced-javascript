// age = 0;

//NOTE:: [age=0; hole false;age=1/2/3...number hole true;  name=""; hole false; name="j kono name"; hole true;

// const name = "Karima";
// if(name){
//     console.log("it is age");
// }
// else{
//     console.log("it's not age");
// }

//Falsy::
// false, 0, "", undefined, null,  NaN 

// Truthy::     
//   "0", " ", 'false', [], "j kono word"


// Example:-

// let name = 'false';
// let name = false;
// if(name){
let name = 22;

if (name || name == 0) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}