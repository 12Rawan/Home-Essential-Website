
//const username = document.getElementById('username')
//const password = document.getElementById('password')
//const form = document.getElementById('form')
//const errorElement = document.getElementById('error')
//form.addEventListener('submit', (e) => {
//    let message = [];
//    if (username.value ==='admin' ) {
//        messages.push('name is required')
//    }
//    if (messages.length > 0) {
//        e.preventDefault()
//        errorElement.innerText = message.join(',')
//    }
//    if (password.value.length <= 4) {

//        messages.push('password more than 4 char')
//    }
//})



function validate() {
    var username = document.getElementById('username').value;
   
    var password = document.getElementById('password').value;
    if (username == "admin" && password == "admin") {
        window.loccation = href = "home.html";
        alert("user name is required");
        return false;
    }
    else
        alert("user name failed");
}