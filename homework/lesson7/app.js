/*
    1) Переписать функцию-конструктор из урока №6 с использованием классов

    Создайте класс Cat экземпляры которого (объекты созданные с помощью данного конструктора)
    должны содержать свойства { name, state }
    и должны наследовать методы из прототипа
    meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
    up - меняет состояние кошки на 'standing'
    down - меняет состояние кошки на 'lying'

    Например:
    const cat = new Cat('murzik');
    console.log(cat.name); // 'murzik'
    console.log(cat.state); // 'lying'
    cat.up();
    console.log(cat.state); // 'standing'
    cat.down();
    console.log(cat.state); // 'lying'
    cat.meow(); // выводит в консоль "murzik: meow"
 */

class Cat {   
   constructor (name) {
      this.name = name;
      this.state = "lying";
   }
   meow () {
      console.log(`${this.name}: meow`);
   }
   up () {
      this.state = "standing";
   }
   down () {
      this.state = "lying";
   }
}

 /*
    2)

    Создайте два класса Animal и Dog
    У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
    Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
    А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
    Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
    Реализуйте наследование класса Animal классом Dog,
    так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
    Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };
 */

 class Animal {    
   constructor (movingType, color) {
      this.movingType = movingType;
      this.color = color;
   }
 }

 class Dog extends Animal {
   constructor (movingType, color, name, age, weight) {
      super (movingType, color);
      this.name = name;
      this.age = age;
      this.weight = weight;      
   }
 }

 /*
    3)

    Создайте два конструктора Transport и Car
    Эклемпляры конструктора Transport имеют свойтсво status и методы run и stop,
    которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
    Унаследуйте эти методы и свойство конструктором Car
    
    Например:
    const someTransport = new Transport();
    console.log(someTransport.status); // 'stopped'
    console.log(someTransport.run()); // 'running'
    console.log(someTransport.stop()); // 'stopped'
    const someCar = new Car();
    console.log(someCar.status); // 'stopped'
    console.log(someCar.run()); // 'running'
    console.log(someCar.stop()); // 'stopped'
 */

 class Transport {
    constructor () {
       this.status = 'stopped';
    }
    run () {
       this.status = 'running';
    }
    stop () {
       this.status = 'stopped';
    }
 }

 class Car extends Transport {
    constructor (props) {
       super (props);
    }
 }

/*
   4)

   — Опишите класс Human:  для создания объектов со свойствами name,
   age и height конструктор класса должен принимать одноимённые аргументы.

   — Создайте массив humans из десяти объектов на основе класса Human:
   «Коля», 23, 180,
   «Даша», 19, 170,
   «Ваня», 18, 192,
   «Петя», 45, 178,
   «Вася», 34, 197,
   «Джони», 40, 168,
   «Катя», 37, 160,
   «Петя», 29, 200,
   «Соня», 21, 172,
   «Женя», 25, 175

   — Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»),
   — Укажите метод геттер firstname ( он должен возвращать свойство name объекта)
   — Укажите метод сеттер firstname ( он должен настраивать свойство name объекта)

   — Напишите функции сортировки sortByName и sortByHeight,
     которые смогут отсортировать массив по именам (в алфавитном порядке)
     или росту (по убыванию роста). Вызовите только функцию сортировки по росту.
*/

class Human {
   constructor (name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
   }
   getInfo () {
      return `${this.name}, ${this.age}, ${this.height}`;
   }
   get firstname () {
      return this.name;
   }
   set firstname (name) {
      this.name = name;
   }   
}

let humans = [
   new Human ('Коля', 23, 180),
   new Human ('Даша', 19, 170),
   new Human ('Ваня', 18, 192),
   new Human ('Петя', 45, 178),
   new Human ('Вася', 34, 197),
   new Human ('Джони', 40, 168),
   new Human ('Катя', 37, 160),
   new Human ('Петя', 29, 200),
   new Human ('Соня', 21, 172),
   new Human ('Женя', 25, 175)
];

function sortByName (humanArr) {
   humanArr.sort((humanA, humanB) => {
      return humanA.firstname < humanB.firstname ? -1 : (humanA.firstname > humanB.firstname ? 1 : 0);   //используем геттер firstname
   });
}

function sortByHeight (humanArr) {
   humanArr.sort((humanA, humanB) => {
      return humanA.height - humanB.height;
   });
}

sortByHeight(humans);
console.log(humans);
/*
   0: Human {name: "Катя", age: 37, height: 160}
   1: Human {name: "Джони", age: 40, height: 168}
   2: Human {name: "Даша", age: 19, height: 170}
   3: Human {name: "Соня", age: 21, height: 172}
   4: Human {name: "Женя", age: 25, height: 175}
   5: Human {name: "Петя", age: 45, height: 178}
   6: Human {name: "Коля", age: 23, height: 180}
   7: Human {name: "Ваня", age: 18, height: 192}
   8: Human {name: "Вася", age: 34, height: 197}
   9: Human {name: "Петя", age: 29, height: 200}
*/