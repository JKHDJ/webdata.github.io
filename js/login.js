function close1_jc() {
    // cover_jc.style.display = 'none';
    login_jc.style.height = "0px";
    register_jc.style.height = "0px";
    document.body.parentNode.style.overflow = "auto";
    // document.querySelector("#login_jc").parentNode.style.overflow = "hidden";

}

function close2_jc() {
    // cover_jc.style.display = 'none';
    login_jc.style.height = "0px";
    register_jc.style.height = "0px";
    document.body.parentNode.style.overflow = "auto";
    // document.querySelector("#login_jc").parentNode.style.overflow = "hidden";
    signup.style.transform = "rotateY(180deg)"
    login.style.transform = "rotateY(0deg)"
    name_jc.value = "";
    name_message_jc.innerHTML = ' ';
    password_message_jc.innerHTML = ' ';
    password2_message_jc.innerHTML = ' ';
    email_message_jc.innerHTML = ' ';
}

function close3_jc() {
    // cover_jc.style.display = 'none';
    serve_jc.style.height = "0px";
    serve_jc.style.height = "0px";
    document.body.parentNode.style.overflow = "auto";
    // document.querySelector("#login_jc").parentNode.style.overflow = "hidden";

}

var login_jc = document.getElementById('login_jc');
var register_jc = document.getElementById('register_jc');
var name_jc = document.getElementById('name_jc');

// function changeregister_jc() {
//     login_jc.style.display = "none";
//     register_jc.style.display = "block";
// }
name_jc.onblur = function() {
    var name_jc = document.querySelector('.name_jc');
    var name_message_jc = document.querySelector('.name_message_jc');
    var name = name_jc.value.length;
    console.log(name);
    if (name == 0) {
        name_message_jc.className = 'name_message_jc wrong';
        name_message_jc.innerHTML = '昵称不能为空';
    } else if (name > 9 || name < 0) {
        name_message_jc.className = 'name_message_jc wrong';
        name_message_jc.innerHTML = '昵称长度请在1到9个字符';
    } else {
        name_message_jc.innerHTML = ' ';
    }
}
regUN_jc.onblur = function() {
    var email = document.getElementById('regUN_jc').value;
    var email_message_jc = document.querySelector('.email_message_jc');

    var pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    console.dir(regUN_jc);
    var email = regUN_jc.value;
    var flag = email.match(pattern);
    if (email == '') {
        email_message_jc.className = 'email_message_jc wrong';
        email_message_jc.innerHTML = '邮箱不能为空';
    } else if (flag) {
        email_message_jc.innerHTML = ' ';
    } else {
        email_message_jc.className = 'email_message_jc wrong';
        email_message_jc.innerHTML = '邮箱格式不对';
    }

}
regPW_jc.onblur = function() {
    var regPW_jc = document.querySelector('.regPW_jc');
    var password_message_jc = document.querySelector('.password_message_jc');
    var password = document.getElementById('regPW_jc').value;
    var pattern = /^[A-Za-z]\w{5,17}$/;
    console.dir(regPW_jc);
    var password = regPW_jc.value;
    var flag = password.match(pattern);
    if (password == '') {
        password_message_jc.className = 'password_message_jc wrong';
        password_message_jc.innerHTML = '密码不能为空';
    } else if (flag) {
        password_message_jc.innerHTML = ' ';
    } else {
        password_message_jc.className = 'password_message_jc wrong';
        password_message_jc.innerHTML = '密码请以字母开头，长度在6~18之间，只能包含字母、数字和下划线';
    }
}
regPW2_jc.onblur = function() {
    var regPW2_jc = document.querySelector('.regPW2_jc');
    var password2_message_jc = document.querySelector('.password2_message_jc');
    var password2 = document.getElementById('regPW2_jc').value;
    var pattern = /^[A-Za-z]\w{5,17}$/;
    console.dir(regPW2_jc);
    // var password2 = regPW2_jc.value;
    var flag = password2.match(pattern);
    if (password2 == '') {
        password2_message_jc.className = 'password2_message_jc wrong';
        password2_message_jc.innerHTML = '密码不能为空';
    } else if (flag) {
        password2_message_jc.innerHTML = ' ';
    } else {
        password2_message_jc.className = 'password2_message_jc wrong';
        password2_message_jc.innerHTML = '密码请以字母开头，长度在6~18之间，只能包含字母、数字和下划线';
    }
}

function log() {
    var logUN_jc = document.getElementById('logUN_jc').value;
    var logPW_jc = document.getElementById('logPW_jc').value;
    var wuyu_jc = document.getElementById('wuyu_jc');

    if (logUN_jc === "" && logPW_jc === "") {
        alert("亲！请输入用户名或密码");
    } else {

        if (logUN_jc in localStorage) {

            let password = localStorage[logUN_jc];
            if (wuyu_jc.checked == false) {
                alert("请勾选服务条款");
            } else if (logPW_jc === password) {
                window.location.href = "./choose.html";
                console.log(wuyu_jc.checked);
                document.getElementById('logUN_jc').value = "";
                document.getElementById('logPW_jc').value = "";
                var name__jc = localStorage.getItem(logUN_jc + "123");
                console.log(name__jc);
                var email__jc = { "username": name__jc, "password": logPW_jc };
                localStorage.setItem("b", JSON.stringify(email__jc));
            } else {
                alert("密码错误");
            }
        } else {
            alert("用户不存在，请先注册！");
        }
    }
}

function reg() {
    var email = document.getElementById('regUN_jc').value;
    var password = document.getElementById('regPW_jc').value;
    var password2 = document.getElementById('regPW2_jc').value;
    var login = document.querySelector(".login_jc");
    var signup = document.querySelector(".register_jc");
    var name_message_jc = document.querySelector('.name_message_jc');
    var password_message_jc = document.querySelector('.password_message_jc');
    var password2_message_jc = document.querySelector('.password2_message_jc');
    var email_message_jc = document.querySelector('.email_message_jc');
    // var regPW1_jc = document.querySelector('.regPW_jc');
    // var message1_jc = document.querySelector('.password_message_jc');
    var password2_message_jc = document.querySelector('.password2_message_jc');
    var name_jc = document.getElementById('name_jc');
    var name = name_jc.value.length;
    if (email == "" || password == "" || password2 == "") {
        alert("请输入邮箱地址或密码,不能为空");
    } else if (email in localStorage) {
        alert("哎呀！用户已经存在了，换一个试试把~~");
        document.getElementById('regUN_jc').value = "";
    } else {
        if (password != password2) {
            password2_message_jc.className = 'password2_message_jc wrong';
            password2_message_jc.innerHTML = '两次密码不同';
            regPW_jc.value = "";
            regPW2_jc.value = "";

        } else {
            if (name_message_jc.innerHTML == ' ' && password_message_jc.innerHTML == ' ' && password2_message_jc.innerHTML == ' ' && email_message_jc.innerHTML == ' ') {
                localStorage.setItem(email, password);
                localStorage.setItem(email + "123", name_jc.value);
                alert("注册成功！！");
                var logUN_jc = document.getElementById('logUN_jc');
                logUN_jc.value = regUN_jc.value;
                name_jc.value = "";
                regUN_jc.value = "";
                regPW_jc.value = "";
                regPW2_jc.value = "";
                signup.style.transform = "rotateY(180deg)"
                login.style.transform = "rotateY(0deg)"
                name_message_jc.innerHTML = ' ';
                password_message_jc.innerHTML = ' ';
                password2_message_jc.innerHTML = ' ';
                email_message_jc.innerHTML = ' ';
                // cover_jc.style.transform = "rotateY(360deg)"
            } else {
                alert("出现错误");
            }


        }
    }
}
var login = document.querySelector(".login_jc");
var signup = document.querySelector(".register_jc");
var cover_jc = document.querySelector(".cover_jc");
var name_message_jc = document.querySelector('.name_message_jc');
var password_message_jc = document.querySelector('.password_message_jc');
var password2_message_jc = document.querySelector('.password2_message_jc');
var email_message_jc = document.querySelector('.email_message_jc');
var name_jc = document.getElementById('name_jc');

var gos = login.querySelector("#a1");
var gol = signup.querySelector("#a2");
var serve_jc = login.querySelector('#serve_jc');
serve.addEventListener('click', () => {
        serve_jc.style.height = "550px";
        serve_jc.style.zIndex = 999;
        serve_jc.style.display = "inline-block";
        console.log(serve.style);
    })
    //点击去注册，触发事件
gos.addEventListener("click", () => {
        login.style.transform = "rotateY(180deg)"
        signup.style.transform = "rotateY(0deg)"
        name_jc.value = "";
        regUN_jc.value = "";
        regPW_jc.value = "";
        regPW2_jc.value = "";
        // cover_jc.style.transform = "rotateY(360deg)"
    })
    //点击去登录，触发事件
gol.addEventListener("click", () => {
    signup.style.transform = "rotateY(180deg)"
    login.style.transform = "rotateY(0deg)"
    name_jc.value = "";
    regUN_jc.value = "";
    regPW_jc.value = "";
    regPW2_jc.value = "";
    name_message_jc.innerHTML = ' ';
    password_message_jc.innerHTML = ' ';
    password2_message_jc.innerHTML = ' ';
    email_message_jc.innerHTML = ' ';
    // cover_jc.style.transform = "rotateY(360deg)"
})