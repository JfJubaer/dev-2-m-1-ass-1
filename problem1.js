// function repeater(str: string, num: number = 3): void {
//   for (let i = 1; i <= num; i++) {
//     console.log(str);
//   }
// }
// repeater("Zubs");
// type Generic<T> = Array<T>;
// type Obj = {
//   name: string;
//   age: number;
// };
// function ageCheck(arr: Generic<Obj>): Generic<Obj> {
//   let newArr: Generic<Obj> = [];
//   arr.map((a) => {
//     if (a.age > 18) {
//       newArr.push(a);
//     }
//   });
//   return newArr;
// }
// console.log(
//   ageCheck([
//     { name: "zubs", age: 20 },
//     { name: "zub", age: 15 },
//     { name: "zuba", age: 115 },
//   ])
// );
// function reverseArray<T>(...items: T[]): T[] {
//   return items.reverse();
// }
// const reversedArray = reverseArray("apple", "banana", "cherry", "date");
// console.log(reversedArray);
// class Person {
//   constructor(public name: string, private age: number) {}
//   makeNoise(): string {
//     return `His age ${this.age}`;
//   }
// }
// const person1 = new Person("Any", 18);
// class Student extends Person {
//   constructor(name: string, age: number, public roll: number) {
//     super(name, age);
//   }
//   makeNoise(): string {
//     return `His age ${this.roll}`;
//   }
// }
// const person2 = new Student("Any", 18, 2);
// console.log(person1, person2);
function paramChecker(param) {
    if (typeof param == "string") {
        console.log("Yes");
    }
    else {
        console.error("Not");
    }
}
paramChecker("20");
