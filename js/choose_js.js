var divs = document.getElementsByClassName("choose_jc");
var position = [100, 300, 500, 700, 900, 1100];
var gou = document.getElementsByClassName("gou_jc");
var gaidong = [false, false, false, false, false, false];
var jidutiao = 0;
for (let i = 0; i < gou.length; i++) {
    gou[i].style.display = "none";
}
for (let i = 0; i < divs.length; i++) {
    var choose_color = ["#33a474", "#33a474", "#33a474", "#9b9faa", "#88619a", "#88619a", "#88619a"];
    divs[i].onclick = function(e) {
        let row = parseInt(i / 7);
        for (let j = row * 7; j < row * 7 + 7; j++) {
            divs[j].style.background = "white";
            gou[j].style.display = "none";
        }
        divs[i].style.background = choose_color[i % 7];
        gou[i].style.display = "block";
        var choosehll = document.getElementsByClassName("chooseshll_jc");
        choosehll[row].style.opacity = "0.3";

        if (gaidong[row] == false) {
            jidutiao += 1 / 60.0 * 100;
            gaidong[row] = true;
        }
        var quzheng = parseInt(jidutiao) + "%";
        var ys = document.getElementsByClassName("ys_jc");
        ys[0].innerHTML = quzheng;
        var xbk = document.getElementsByClassName("xbk_jc");
        xbk[0].style.width = quzheng;
        console.log(choosehll[row].offsetTop);
        console.log(row);
        document.body.scrollTop = document.documentElement.scrollTop = choosehll[row].offsetTop - 105;
    }
}
var ci = 0;
var localStorage = window.localStorage;
var an = document.getElementsByClassName("an_jc");
var choosehll = document.getElementsByClassName("chooseshll_jc");
var data_jc = new Array();
var daxiao = [3, 2, 1, 0, 1, 2, 3];
for (let i = 0; i < 10; i++) {
    data_jc[i] = 50;
}
an[0].onclick = function(ee) {
    var sum = localStorage.a;
    for (let i = 0; i < divs.length; i++) {

        if (divs[i].style.background != "white") {
            let row = parseInt(i / 7);
            if (i % 7 <= 2)
                data_jc[row % 4] += daxiao[i % 7];
            else {
                data_jc[row % 4 + 4] += daxiao[i % 7];
            }
        }
    }
    if (ci == 9) {
        for (let i = 0; i < 4; i++) {
            data_jc[i] = parseInt(data_jc[i] / (data_jc[i] + data_jc[i + 4]) * 100);
        }
        let jieguo = data_jc[0] > 50 ? "I" : "E";
        jieguo += data_jc[1] > 50 ? "N" : "S";
        jieguo += data_jc[2] > 50 ? "F" : "T";
        jieguo += data_jc[3] > 50 ? "J" : "P";
        var chuandao = { "E": (100 - data_jc[0]), "I": data_jc[0], "S": (100 - data_jc[1]), "N": data_jc[1], "T": (100 - data_jc[2]), "F": data_jc[2], "P": (100 - data_jc[3]), "J": data_jc[3], "结果": jieguo };
        localStorage.setItem("a", JSON.stringify(chuandao));
        window.location.href = "../html/" + jieguo + ".html";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    if (ci < 9) {
        zidongjiafeng();
        for (let i = 0; i < choosehll.length; i++) {
            choosehll[i].style.opacity = "1";
            choosehll[i].children[2].innerHTML = data[ci * 6 + i];
        }
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.background = "white";
            gou[i].style.display = "none";
        }
        ci++;
        if (ci == 9) {
            var jieshu = document.getElementsByClassName("xg_jc");
            jieshu[0].innerHTML = "结束";
            jieshu[0].style.marginLeft = "calc(50% - 15px)";
            var jiantou = document.getElementsByClassName("syh_jc");
            jiantou[0].style.display = "none";
        }
    }

    // document.body.scrollTop = document.documentElement.scrollTop = 0;

}

function zidongjiafeng() {
    var panduan = false;
    var ans = 0;
    for (let i = 0; i < gaidong.length; i++) {
        if (gaidong[i] == false) ans++;
        else gaidong[i] = false;
    }
    jidutiao += ans / 60.0 * 100;
    var quzheng = parseInt(jidutiao);
    quzheng = (Math.trunc((quzheng + 9) / 10) * 10) + "%";
    var ys = document.getElementsByClassName("ys_jc");
    ys[0].innerHTML = quzheng;
    var xbk = document.getElementsByClassName("xbk_jc");
    xbk[0].style.width = quzheng;

}