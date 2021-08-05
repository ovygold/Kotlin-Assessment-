function spanalCAse(str){
    return str.replace(/([a-z])([A-Z])|[_|\s]+/g,
    '$1-$2'.toLowerCase());

}

console.log(spanalCAse("This is the Tap")); 