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