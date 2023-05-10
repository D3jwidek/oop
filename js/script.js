'use strict'

const login = 'pkania';
const name = 'Kania';
const firstname = 'Piotr'
const age = 20;
const boss = true;

const person1 = {
    login: 'pkania',
    name: 'Kania',
    firstname: 'Piotr',
    age: 20,
    boss: true,
    sayHello: () => {
        console.log(person1.name);
    }
}
console.log(typeof person1);

console.log(person1.login);
console.log(person1.age);

person1.sayHello();

function User (login, name, age, boss) {
    this.login = login;
    this.name = name;
    this.age = age;
    this.boss = boss;
    this.sayHello = function () {
        console.log(`Czesc tu ${this.name}`)
    }
}
const user1 = new User('akowalsk', 'Anna' , 30 , false);
user1.sayHello();
const user2 = new User('jnowak', 'Jan' , 40 , true);
user2.sayHello();