console.log("code is running")

let nameCheck = document.getElementById("inputName");
let buttonCheck = document.getElementById("btnCheck");
let answerBlock = document.getElementById("answer");

buttonCheck.addEventListener("click", function (e) {
    if (nameCheck.value == "Pingolas") {
        answerBlock.innerHTML = ("Bem vindo de volta, " + nameCheck.value);
    }

    else {
        answerBlock.innerHTML = "vai ti fude";
    }
});