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
