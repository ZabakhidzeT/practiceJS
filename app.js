//ex 1

const userData = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function user(userData) {
  let youngestUser = userData[0];

  for (let i = 1; i < userData.length; i++) {
    if (userData[i].age < youngestUser.age) {
      youngestUser = userData[i];
    }
  }
  return youngestUser.name;
}

console.log(user(userData));

/// ex 2

const usersArray = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function arrayToObject(usersArray) {
  return usersArray.map(function (user) {
    return Object.assign({}, user);
  });
}

const usersArrayToObject = arrayToObject(usersArray);
console.log(usersArrayToObject);

//ex3

function rollDice(playerAttempts) {
  while (true) {
    const diceRollA = Math.floor(Math.random() * 6) + 1;
    const diceRollB = Math.floor(Math.random() * 6) + 1;
    playerAttempts.a++;
    playerAttempts.b++;
    if (diceRollA > diceRollB) break;
  }

  console.log(
    `Player ${
      playerAttempts.a < playerAttempts.b ? "A" : "B"
    } wins in ${Math.min(playerAttempts.a, playerAttempts.b)} attempts!`
  );
}

const playerAttempts = { a: 0, b: 0 };
rollDice(playerAttempts);
