//You say it's your birthday
//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",
function yourBirthday(a,b){

if ( ((a == 11)&&(b == 8))){
console.log("How did you know?");
}
if ( ((a == 8)&&(b == 11))){
console.log("How did you know?");
}

else{
console.log("Just another day....");
}
}
yourBirthday(11,8);
