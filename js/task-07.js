const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// console.table(logins);

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};
// console.log(isLoginValid(logins,'robotGoogles'));

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};
// console.log(isLoginUnique(logins,'robotGoogles'));

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  } else if (isLoginUnique(allLogins, login) === true) {
    return "Такий логін уже використовується!";
  } else {
    logins.push(login);
    return "Логін успішно доданий!";
  }
};

// console.log(addLogin(logins, 'Ajak'));
// console.log(addLogin(logins, 'robotGoogles'));
// console.log(addLogin(logins, 'Zod'));
// console.log(addLogin(logins, 'jqueryisextremelyfast'));

console.table(logins);
