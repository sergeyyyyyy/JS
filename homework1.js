

/*    ЗАДАНИЕ 1:
    Напишите функцию, которая принимает 2 
    параметра - 2 числа и возвращает true, если 
    первое число больше второго, и false, если это не 
    так.
*/
var a;
var b;
function vvod (a,b){
    if (a>b){
        alert("true");
        }
    else    {
        alert("false");
        }
    }
console.log();


/*    ЗАДАНИЕ 2:
    Напишите функцию, которая принимает 1 
    параметр - строку и возвращает новую строку 
    вида, “Вы ввели * полученная строка *”.
*/

var k = "";
function tak (){
 document.write("Вы ввели :" +k);
}
console.log();


/*    ЗАДАНИЕ 3:
    Напишите функцию, которая принимает 1 
    параметр любого типа и проверяет, является ли 
    полученное значение null или undefined.
*/

var a;
    function prov () {
        if (a === undefined){
             return "undefined";
        }
        else if (a === null){
            return "null";
        }
        else return "not null andn't undefined";
      }
       
      console.log();


/*    ЗАДАНИЕ 4:
    Напишите функцию, которая принимает 1 
    параметр - объект и добавляет этому объекту 
    поле checked со значением true.
*/

var a = {
    name:"Xan",
    age: 25,
    checked:false};
function check() {
    a.checked = true
}
console.log();


/*     ЗАДАНИЕ 5:
     Напишите функцию, которая принимает 1 
     параметр - число и выводит в консоль все числа 
     от нуля до введенного числа (в обе стороны).
*/

var k;
function str(){
    for(var i=0; i<=k; i++){
        document.write(i+ "<br/>");
    }
    for(var j=k; j>=0; j--){

        document.write(j+"<br/>");
    }
  }
console.log();



