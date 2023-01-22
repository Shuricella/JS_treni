// class User {
//     constructor(name, age) {
//         this.userName = name;
//         this.age = age;
//         this.seyHi();
//     }
//     seyHi() {
//         console.log("Hello my friend!", `${this.userName}`, ", she is", `${this.age}`, "year");
//     }
// }
// let bar = new User("Anna", 25);
// console.log("obj user=", bar);



// function User(name) {
//     this.name = name;
// }
// User.prototype.seyHi = function() {console.log(this.name);};
// let user = new User("Ivan");
// user.seyHi();




// let User = class Anichka {
//     seyHi() {console.log(Anichka);}
// }
// let result = new User()
// console.log(result.seyHi());
// console.log("result=", result);




// function makeClass(title) {
//     return class {
//         constructor() {
//             this.title = title;
//             this.seyHi();
//         }
//         seyHi() {console.log("title=", title);};
//     };
// }
// let User = makeClass("Anna");
// let result = new User();
// console.log("obj=", result);



// function makeClass(title) {
//     return class 
//     {
//         constructor() {
//             this.title = title;
//             this.seyHi();
//         }
//         seyHi() {console.log("title=", title);};
//     };
// }
// let User = makeClass("Anna");
// let result = new User();
// console.log("obj=", result);



// function readNumber() {
//     let value = 1;
//     let result;
    
//     while(value != 77) {
//         console.log("Предварительное значие=", value);
//         value = +prompt("Enter number 77!", 5);
//         if(value === 0) {
//             break;
//         };
//     }

//     if(value === 77) {result = value;}
//     else{result = null}
    
//     return console.log("После цыкла=", result);
// }

// readNumber();



// function readNumber() {
//     let a;

//     do { a = prompt("Enter value", 1);}
//     while ( !isFinite(a) );

//     if(a === null || a === "") {
//         return null;
//     }

//     return console.log(`Число ${+a}`);
// }

// readNumber();



// let result;
// function getRandomArbitrary (a, b) {
//     console.log("a_min=", a, "b_max=", b);

//     result = Math.random() * (b - a) + a;
//     return console.log("result=", result);
// }

// getRandomArbitrary (2, 8);



// let result;
// function getRandomIntInclusive (a, b) {
//     console.log("a_min=", a, "b_max", b);
//     const amin = Math.ceil(a);
//     const bmax = Math.floor(b);

//     console.log("amin=", amin);
//     console.log("bmax=", bmax);

//     result = Math.floor(Math.random() * (bmax - amin + 1) + amin);

//     return console.log(result);
// }
// getRandomIntInclusive(2.1, 9.3);




// function ucFirst(name) {
//     let result = "";
//     for(let item in name) {
//         if(item == 0) {result += name[item].toUpperCase()}
//         else{result += name[item]}
//     }
//     return console.log(result);
// }
// ucFirst("вася");



// function ucFirst(name) {
//     let result = "";
//     for(let item = 0; item < name.length; item++) {
//         if(item == 0) {result += name[item].toUpperCase()}
//         else{result += name[item]}
//     }
//     return console.log(result);
// }
// ucFirst("вася");



// function ucFirst(name) {
//     let result = "";
//     if(!name) {return name;}
//     result = name[0].toUpperCase() + name.slice(1);
//     return console.log(result);
// }
// ucFirst("вася");
// ucFirst(" ");



// function checkSpam(string = "") {
//     // str = string.toLowerCase();
//     str = string;
//     if(str.includes("ViAgRA") || str.includes("xxxxx")) {return true;}
//     else{return false};
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));



// function truncate(string = "", maxlenght = string.length) {
//     let result = "";

//     result = string.slice(0, maxlenght - 1) + "…";

//     return console.log(result, "`length=`", result.length);
// }
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
// console.log("…".length);




// "Рок-н-ролл", "45456", "Sany"
// let styles = ["Джаз", "Блюз", "45456", "Sany", "Рок-н-ролл"];
// styles.push("Рок-н-ролл");
// console.log("arr=", styles);



// let styles = ["Джаз", "Блюз", "45456", "Sany", "Рок-н-ролл"];
// function removeElementArr (arr = []) {
//     if(arr.length >= 3 && arr.length%2 !== 0 ) {
//         let index = Math.round(arr.length / 2 - 1);
//         arr[index] = "Классика";
//         console.log(arr);
//     }
//     else{return console.log(arr);}
// }
// removeElementArr(styles);


// console.log(styles)
// styles.shift();
// console.log(styles)

// styles.unshift("Рэп", "Регги");
// console.log(styles)





// let many = [];
// let sum;
// function sumInput() {
    
//     let numb = prompt("Enter to number", 55);
   

//     while(isFinite(numb) && numb !== null && numb !== "") {
//         many.push(+numb);
//         numb = prompt("Enter to number", 5);
//     }

//     sum = 0;
//     for(let item of many) {
//         sum += item;
//     }
//     return console.log(many, "typeof=", typeof many, "sum=", sum);
// }
// sumInput();





// function getMaxSubSum(arr = []) {
//     let muxsum = 0;
//     let arrsum = [];
//     let result;

//     for(let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for(let j = i; j< arr.length; j++) {
//             sum += arr[j];
//             arrsum.push(sum);
//         }
//     }

//     muxsum = Math.max.apply(null, arrsum);

//     if(muxsum > 0) {result = muxsum}
//     else{result = 0}

//     console.log("muxsum=", result);
// }

// getMaxSubSum([-1, 2, 3, -9]); // 5
// getMaxSubSum([-1, 2, 3, -9, 11]); // 11
// getMaxSubSum([-2, -1, 1, 2]); // 3
// getMaxSubSum([1, 2, 3]); // 6
// getMaxSubSum([100, -9, 2, -3, 5]); // 100
// getMaxSubSum([-100, -9, -2, -3, -5]); // 0





// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // для каждого элемента массива
//       partialSum += item; // добавляем значение элемента к partialSum
//       maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//       if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }
  
//     return console.log("maxSum=", maxSum);
//   }
  
//   getMaxSubSum([-1, 2, 3, -9]); // 5
//   getMaxSubSum([-1, 2, 3, -9, 11]); // 11
//   getMaxSubSum([-2, -1, 1, 2]); // 3
//   getMaxSubSum([100, -9, 2, -3, 5]); // 100
//   getMaxSubSum([1, 2, 3]); // 6
//   getMaxSubSum([-1, -2, -3]); // 0