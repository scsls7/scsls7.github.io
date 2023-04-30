function alertMsg() {
    alert("Hello, world!");
}

function makeHuge() {
    document.getElementById("txt").style.fontSize="24pt";
}

function fancify() {
    alert("Fancified!")
    document.getElementById("txt").style.fontWeight="bold";
    document.getElementById("txt").style.color="blue";
    document.getElementById("txt").style.textDecoration="underline";
}

function boring() {
    document.getElementById("txt").style.fontWeight="";
}

function moo() {
    document.getElementById("txt").style.textTransform="uppercase";
    const text = document.getElementById("txt").value;
    const words = text.split("");
    for(var i=0; i< words.length; i++){
        let word = words[i].trim();
        word += "-Moo";
        words[i] = word;
    }
    document.getElementById("txt").value=words.join("");
}