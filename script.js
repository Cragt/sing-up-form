const password1 = document.querySelector("#password");
const password2 = document.querySelector("#con-password");
const submit = document.querySelector("button");
const match = document.querySelector(".no-match");

// submit.addEventListener("click", confirm);

function confirm () {
    if (document.querySelector("#password").value === document.querySelector("#con-password").value) {
        match.style.display = "none";
    } else {
    match.style.display = "inline";
    // password1.style.border = "2px solid red;"
};
};

// if (document.querySelectorAll("input").value.length = 0) {
//     document.querySelectorAll("input").classlist.remove("invalid");
//     document.querySelectorAll("input").classlist.add("valid");
// }