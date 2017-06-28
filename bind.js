function bind(func, context) {
  return function() { // (*)
    return func.apply(context, arguments);
  };
}

function f() {
  alert( this );
}

var g = bind(f, "Context");
g(); // Context
=======================================
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
};

setTimeout(bind(user.sayHi, user), 1000);
========================================
Привязать всё: bindAll
Если у объекта много методов и мы планируем их активно передавать, то можно привязать контекст для них всех в цикле:

for (var prop in user) {
  if (typeof user[prop] == 'function') {
    user[prop] = user[prop].bind(user);
  }
}
В некоторых JS-фреймворках есть даже встроенные функции для этого, например _.bindAll(obj).
========================================
