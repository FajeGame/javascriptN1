let arr = new Map([
    ["Алексадр Сергеевич Пушкин", ["Капитанская дочка", "Евгений Онегин"]],
    ["Джордж Оруэлл", ["1984", "Скотный двор"]],
    ["Дарья Донцова", ["Дезертир из рая", "Крутые наследнички"]],
    ["Жюль Верн", ["Вокруг света в 80 дней", "Дети капитана Гранта"]]
])

for (let pair of arr) {
    console.log(`${pair[0]} - ${pair[1]}`);
}

