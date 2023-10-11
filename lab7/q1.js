"use strict";
function askPassword(ok, fail) {
  let password = prompt("Password: ", "");

  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

//bind
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//call
// askPassword(
//   () => user.loginOk.call(user),
//   () => user.loginFail.call(user)
// );
//apply
askPassword(
  () => user.loginOk.apply(user),
  () => user.loginFail.apply(user)
);
