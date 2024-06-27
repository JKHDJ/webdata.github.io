var localStorage = window.localStorage;
var yh = localStorage.getItem("b");
yh = JSON.parse(yh);
console.log(yh.username);
var login = document.querySelector(".dl_jc");
// login.style.display = "none";
if (yh.username != "游客") {
    login.id = "1111_jc";
    login.innerHTML = yh.username;
} else {
    login.innerHTML = yh.username + ",请登录";
    login.style.width = "100px"
}