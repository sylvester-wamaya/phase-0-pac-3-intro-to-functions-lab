function shout(hello){
    return hello.toUpperCase();
}
function whisper(HELLO){
    return HELLO.toLowerCase();
}
function logShout(moringa){
const MORINGA = moringa.toUpperCase();
console.log(MORINGA); 
}
function logWhisper(JAVA){
    const java = JAVA.toLowerCase();
    console.log(java);
}
function sayHiToHeadphonedRoommate(hi){
    if (hi === hi.toLowerCase())
    {
        return "I can't hear you!";
    } 
    else if( hi === hi.toUpperCase()){
        return "YES INDEED!";
    }
    else if(hi === "Let's have dinner together!"){
        return "I would love to!";
    }

}
