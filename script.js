let text = document.getElementById("typewritter");
const textArray = text.textContent.split("");
console.log(textArray)
let timeLooper;
text.innerHTML = "";
function typeWritterEffect() {
    if (textArray.length > 0) {
        text.innerHTML += textArray.shift();
    } else {
        clearTimeout(timeLooper);
    }
    timeLooper = setTimeout("typeWritterEffect()", Math.floor(Math.random() * (200, 250)));
}
typeWritterEffect()