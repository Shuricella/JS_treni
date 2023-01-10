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

