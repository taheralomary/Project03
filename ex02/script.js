const title = document.getElementById("title");
const message = document.querySelector("#message");
const button = document.getElementById("changeButton");
const box = document.querySelector("#box");

button.addEventListener("click", function () {
    message.textContent = "The DOM has been changed!";
    title.textContent = "DOM Updated";

    box.style.border = "3px solid black";
    box.classList.add("active");
});