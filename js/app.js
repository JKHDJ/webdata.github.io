function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginStatus = document.getElementById("loginStatus");
    var a = document.getElementById("niubi");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const welcomeMessage = document.getElementById("welcome-message");

    for (let user of users) {
        if (user.username === username && user.password === password) {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';

            const storedUsername = localStorage.setItem('username', username);

            window.location.href = "../index.html";

            // 登录成功后跳转到index.html页面


            // 将用户名添加到index.html页面的<div>元素中




            return false;
        }
    }

    alert("用户名或密码错误");
    return false;
}

function register() {
    const registerUsername = document.getElementById("registerUsername").value;
    const registerPassword = document.getElementById("registerPassword").value;
    const email = document.getElementById("registerEmail").value;
    const registerPasswordtwo = document.getElementById("registerPasswordtwo").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    for (let user of users) {
        if (user.username === registerUsername) {
            alert("用户名已经存在");
            return false;
        }
    }

    users.push({
        username: registerUsername,
        password: registerPassword
    });
    document.getElementById("registerUsername").value = '';
    document.getElementById("registerPassword").value = '';
    document.getElementById("registerEmail").value = '';
    document.getElementById("registerPasswordtwo").value = '';
    localStorage.setItem("users", JSON.stringify(users));

    alert("恭喜你，注册成功");
    return true;
}