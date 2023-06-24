// console.log("hi hi hi!!!!!!!!!!!")


// document.getElementById("btn-submit").addEventListener('click', function () {
//     console.log("submited")
// })
document.getElementById("btn-submit").addEventListener('click', function () {

    const emailId = document.getElementById("user-email");
    const email = emailId.value;

    const passId = document.getElementById("user-password");
    const password = passId.value;


    if (email === "admin@admin.com" && password === "admin")
        window.location.href = "savings.html";
    else alert("Wrong password");
    emailId.value = '';
    passId.value = '';
})