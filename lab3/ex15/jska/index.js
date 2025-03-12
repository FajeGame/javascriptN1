// Добавление свойства по умолчанию к встроенному объекту
String.prototype.color = "black";
// Добавление (изменение) метода к встроенному объекту
String.prototype.write = stringWrite;
function stringWrite(){
    console.log("Цвет текста: " + this.color);
    console.log("Текст: " + this.toString())
}
// используем измененный класс
let s = new String("Это строка");
s.color = "red";
s.write();
let s2 = new String("Вторая строка");
s2.write();
