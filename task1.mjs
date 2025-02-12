// Your program should start at this line.


do{
    move();
    
    if(!peek()){
       turn();
       
       while(!peek()){
        turnLeft()
       }
    }

}while (!atGoal())

    









/*
Example:
move();
move();
move();
turn();
move();
move();
turn();
turn();
turn();
move();
*/


//#region Basic functions
// These functions are just her to make your intelisense work. 
// They only have a conceptual function.
/*


//#endregion*/
function turnLeft(){
    turn()
    turn()
    turn()
}
console.log("turned left")
function move() {
    // Moves the car 1 cell in the direction it is heading.
    console.log("Move one tile foreward");
}

function turn() {
    // Turns the car 90 deg clockwise.
    console.log("Turned 90 degrees");
}

function peek() {
    // Returns true if the next cell is open, otherwise false.
    console.log("Checked if it's open spot in front of me");
    return true; // Just a placeholder value. 
}

function atGoal() {
    // Returns true if the current cell is the goal cell.
    console.log("Checked if I'm at Goal");
    return true; // just a placholder
}


