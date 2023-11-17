# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

- Which are the different primitive data types in TypeScript?
=> lowercase number , string, boolean.
ex : let exemple : number = 3;
ex : let exemple1 : string = "Hello World";
ex : let exemple2 : boolean = true;

- How to type an Array?
=>Using square brackets
ex : let fruits: string[]= ['Apple', 'Orange', 'Banana'];

- What is the `any` type?
=>TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
ex : let objet: any = "salut";
        objet = 5;

- How to type the return of a function as well as the type of its parameters?
function getTime(a:number, b:number ): number {
  return new Date().getTime();
}

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

- What is a class?
The class in TypeScript is compiled to plain JavaScript functions by the TypeScript compiler to work across platforms and browsers. A class can include the following: Constructor. Properties.

- What is a class constructor?
the keyword new.
ex : class Person {
  name: string;
} postgrey, typescript, angular.
      
const person = new Person();
person.name = "Jane";
console.log(person);

- What is a class instance?
The Typescript instanceof is one of the operators, and it is used to determine the specific constructor, and it will be creating the object of the classes

- How to check that a class is of a certain instance?
The instanceof operator is used to check if an object is an instance of a particular class. It returns a boolean value true if the object is of the specified object type and false otherwise.

- What is `this` in a class?
In TypeScript, this keyword refers to the global object if it's not used inside any class or method. Even if we use this keyword inside the function, it refers to the global means window object.

- What is a class method?
In TypeScript, a class method is a function defined within a class. 

- What is the visibility of properties?
In Typescript, by default, the visibility of all properties or methods in Typescript classes is “public“. A method with which is public can be accessed from anywhere, it has no restrictions.

- What is the difference between `public`, `private` and `protected`?
. The private modifier allows access within the same class. The protected modifier allows access within the same class and subclasses. The public modifier allows access from any location.


**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

- How to split our program into different files? (e.g. a class in a file that I import into another)
- What is the `export` keyword?
- What is the `import` keyword?
- What's inheritance?
- How to call the constructor of a parent class?
- How to call a method of a parent class?
- What is polymorphism?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Boss level

You've learned a lot of things! Now it's time to put it into practice through this exercise in pairs!

### Part 1 : Heroes

Create a `Hero` class that allows you to create objects with the following properties:

```ts
name: string;
power: number;
life: number;
```

And the methods

```ts
  attack(opponent: Hero)
  isAlive()
```

The `attack` method has an `opponent` parameter (of type `Hero`). It is necessary to reduce the number (`life`) of `opponent` by as much damage (`power`) of the attacker.

​*Example: If the Joan instance, attacks the Leon instance, it will be represented by this method call:*

```ts
joan.attack(leon);
```

The `isAlive` method should return `true` if the hero's life points are greater than zero and `false` otherwise.

Create two instances of `Hero` and check that the `attack` and `isAlive` methods work.

**Constraint to add**: you now have to make sure that the `name`, `power`, `life` properties are private. You will have to create methods to access their value and modify their value.

### Part 2 : Weapons

​
Create a `Weapon` class with the following property:

```ts
name: string;
```

Add the `weapon` attribute (of type `Weapon`) to the `Hero` class without modifying the constructor (so `weapon` is not initialized).

Create three classes `HeroAxe`, `HeroSword` and `HeroSpear` that inherit from `Hero`.

These three classes call the constructor of their parent and initialize `weapon` with instances of the `Weapon` class whose names will be `axe`, `sword` or `spear` as the case may be.

In the `HeroAxe`, `HeroSword` and `HeroSpear` classes, redefine the `attack` method to take into account the following cases:

- `HeroAxe` : if the type of `opponent` is `HeroSword`, multiply `power` by two
- `HeroSword` : if the type of `opponent` is `HeroSpear`, multiply `power` by two
- `HeroSpear` : if the type of `opponent` is `HeroAxe`, multiply `power` by two

Tip: use the `super` keyword to call the `attack` method of the parent class.
​
Create instances of the three classes `HeroAxe`, `HeroSword` and `HeroSpear` and check that their `attack` methods work correctly.
​

### Part 3 : Battle

Create a loop that makes two instances of subclasses `Hero` fight each other (they attack at the same time).

When at least one of them is dead, display `{heroName} wins`. If both are dead, display `It's a draw`.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_
