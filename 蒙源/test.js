var printDouble = function () {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            document.write(i + ' ')
        }
    }
}
printDouble()
document.write('<br/>')
var printSeven = function () {
    for (var i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            document.write(i + ' ')
        }
    }
}
printSeven()
document.write('<br/>')
function printOdd() {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            document.write(i + ' ')
        }
    }
}
printOdd()
document.write('<br/>')
function printOddSum() {
    var sum = 0
    for (var i = 0; i <= 100; i++) {
        if (i % 2 != 0) {
            sum += i
        }
    }
    document.write(sum)
}
printOddSum()
document.write('<br/>')
function narcissus() {
    var k, m, n, i
    for (k = 100; k <= 999; k++) {
        m = parseInt(k / 100)
        n = parseInt(k / 10) - m * 10
        i = k - m * 100 - n * 10
        if (k == m * m * m + n * n * n + i * i * i) {
            document.write(k + ' ')
        }
    }
}
narcissus()
document.write('<br/>')
function Rise(r) {
    for (var i = 2; i <= 50; i++) {
        r *= 1.05
    }
    document.write(r)
}
Rise(10000)
document.write('<br/>')
function printThree() {
    var count = 0
    for (var i = 20; i <= 80; i++) {
        var num = i
        if (num % 3 == 0) {
            document.write(num + ' ')
            count++
        }
        if (count == 5) {
            document.write('<br/>')
            count = 0
        }
    }
}
printThree()
document.write('<br/>')
function printTwo() {
    var conut = 0
    for (var i = 1000; i <= 2000; i++) {
        var year = i
        if (year % 4 == 0 && year % 100 != 0) {
            document.write(year + ' ')
            conut++
            if (conut % 4 == 0) {
                document.write('<br/>')
            }
        }
        // if(conut==4){
        //     document.write('<br/>')
        //     conut=0
        // }
    }
}
printTwo()
document.write('<br/>')
function triangle() {
    for (var i = 1; i <= 5; i++) {
        for (var M = 1; M <= 5 - i; M++) {
            document.write('&ensp;')
        }
        for (var N = 1; N <= 2 * i - 1; N++) {
            document.write('*')
        }
        document.write('<br/>')
    }
}
triangle()