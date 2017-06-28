function inherit(proto) {
  function F() {}     // (1)
  F.prototype = proto // (2)
  var object = new F; // (3)
  return object;      // (4)
}

1. Создана новая функция F. Она ничего не делает с this, так что если вызвать new F, то получим пустой объект.
2. Свойство F.prototype устанавливается в будущий прототип proto
3. Результатом вызова new F будет пустой объект с __proto__ равным значению F.prototype.
4. Мы получили пустой объект с заданным прототипом, как и хотели. Возвратим его.