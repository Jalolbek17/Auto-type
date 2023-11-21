const titleString = document.getElementById("string");
const sentence = "We can help you with ";
const variants = ["design", "frontend", "backend", "testing"];
var i = 0;
var j = 0;

window.addEventListener("load", wordChanger);

function wordChanger() {
    if (i < variants[j].length) {
        titleString.innerHTML += variants[j][i];
        i++;
        setTimeout(wordChanger, 180);
    } else if (i = variants[j].length) {
        setTimeout( () => {
            titleString.innerHTML = sentence;
            if (j < 3) {
                j++;
            } else {
                j = 0;
            };
            i = 0;
            wordChanger();
        }, 900);
    };
};