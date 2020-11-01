let map = new Map([
  ["apple", "green"],
 ["strawberry", "red"],
 ["blueberry",    "blue"]
])
let key = []
let value = []
let strKey = `Ключ — `
let strVal = `, значение - `
for (let name of map.keys()) {
  key.push(name)
}
for (let name1 of map.values()) {
  value.push(name1)
}
for (var i = 0; i < key.length; i++) {
 console.log( strKey + key[i] + strVal + value[i]);
}

// По факту решено верно, но использовать 3 цикла для вывода значений одного Map'а - это избыточное усложнение кода. Для перебора элементов Map'a есть более простые способы, например так:

for (let entry of map) {
    console.log(`Ключ — ${entry[0]}, значение — ${entry[1]}`);
}