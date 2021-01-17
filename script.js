const email = document.querySelector(".email-input");
const form = document.querySelector(".get-access-form");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", e => {
    if(!email.validity.valid)
    {
        errorMsg.style.display = "block";
        e.preventDefault();
    }
});

email.addEventListener("input", e => {
    if(email.validity.valid)
    {
        errorMsg.style.display = "none";
    }
})
