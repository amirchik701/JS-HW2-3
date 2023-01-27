


var a = +prompt('введите первое число')
var b = +prompt('введите второе число')
var c = +prompt('введите третье число')


if (a < b && a > c || a > b && a < c) {
   alert('Среднее число ' + a)
} else if (b < a && b > c || b > a && b < c) {
   alert('Среднее число ' + b)
} else if (c < a && c > b || c > a && c < b) {
   alert('Среднее число ' + c)
}




