1;
function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
console.log(Account.prototype.getInfo);
mango.getInfo();
poly.getInfo();

// 2
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
    );
  }
}
const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
mango2.getInfo();
poly2.getInfo();

3;
class Storage {
  // Конструктор приймає початковий масив товарів
  constructor(items) {
    this.items = items;
  }

  // Повертає масив поточних товарів
  getItems() {
    return this.items;
  }

  // Додає новий товар до масиву
  addItem(item) {
    this.items.push(item);
  }

  // Видаляє товар, якщо він є у списку
  removeItem(item) {
    const itemIndex = this.items.indexOf(item);

    // Перевіряємо, чи товар існує в масиві (index не дорівнює -1)
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}

const storage = new Storage([
  "Нанітоїди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.log(items); // Початковий список

storage.addItem("Дроїд");
console.log(storage.items); // Список після додавання 'Дроїд'

storage.removeItem("Пролонгер");
console.log(storage.items); // Список після видалення 'Пролонгер'

// 4
class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this._value = str + this.value + str;
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
// 5
class Car {
  static getSpecs(car) {
    console.log(
      `${car.maxSpeed},${car.speed}, ${car.isOn}, ${car.distance} и ${car.price}`,
    );
  }

  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this.price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   * speed - поточна швидкість, початкова 0
   * price - ціна автомобіля
   * maxSpeed - максимальна швидкість
   * isOn - заведений автомобіль, значення true або false. Спочатку false
   * distance - загальний кілометраж, спочатку 0
   */

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */

  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    const newSpeed = this.speed + value;
    if (this.newSpeed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed = newSpeed;
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    const lowSpeed = this.speed - value;
    if (lowSpeed >= 0) {
      this.speed = lowSpeed;
    } else {
      // Якщо ж після віднімання виходить "мінус",
      // зазвичай швидкість просто скидають до нуля
      this.speed = 0;
    }
  }
  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
