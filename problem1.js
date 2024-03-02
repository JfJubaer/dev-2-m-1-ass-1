// function repeater(str: string, num: number = 3): void {
//   for (let i = 1; i <= num; i++) {
//     console.log(str);
//   }
// }
function ageCheck(arr) {
    var newArr = [];
    arr.map(function (a) {
        if (a.age > 18) {
            newArr.push(a);
        }
    });
    return newArr;
}
console.log(ageCheck([
    { name: "zubs", age: 20 },
    { name: "zub", age: 15 },
    { name: "zuba", age: 115 },
]));
