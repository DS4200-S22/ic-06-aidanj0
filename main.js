/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21

REFERENCED: MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modify the body of this function as described in the assignment Readme
function button1Clicked() {
    let div = document.getElementById("random_num");
    min = Math.ceil(1);
    max = Math.floor(11);
    div.append(Math.floor((Math.random() * (10) + 1)).toString() + " ");

}