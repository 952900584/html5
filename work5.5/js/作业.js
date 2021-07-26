var a_price = 5; //公鸡价格
var b_price = 3; //母鸡价格
var c_price = 1; //小鸡价格

function math() {
    for (var i = 0; i <= 20; i++) {
        for (var j = 0; j <= 33; j++) {
            for (var k = 0; k <= 100; k++) {
                if (5 * i + 3 * j + k / 3 == 100 && i + j + 3 * k == 100) {
                    document.write("公鸡：" + i + " 母鸡：" + j + " 小鸡：" + 3 * k + "<br/>");
                }
            }
        }
    }
    document.write("<hr>")
}

function zhishu() {
    var count = 0;
    for (var i = 100; i <= 200; i++) {
        for (var j = 2; j <= i; j++) {
            if (i % j == 0) {
                break;
            }
        }
        if (j >= i) {
            count++;
            document.write(i + " ");
        }
    }
    document.write("<hr>");
}


function sum() {
    var count = 1;
    var a = document.getElementById("a").value;
    a = parseInt(a);
    var n = document.getElementById("n").value;
    n = parseInt(n);
    var sn = 0;
    var tn = 0;
    while (count <= n) {
        tn = tn + a;
        sn = sn + tn;
        a = a * 10;
        ++count;
    }
    document.getElementById("sum").innerHTML = sn;
}