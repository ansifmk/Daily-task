




// // let car={
// //     Brand:"bmw",
// //     model:911,
// //     year:2022,
// //     color:"blue",
// // }
// // function ans(obj){
// // let arr=[]
// // for(key in car){
// //     arr.push(key,car[key])
// // }
// // }

// // console.log(arr);
// // let print=""
// // for(Element of print){


// // }console.log(print);


// (function() {
//     // IIFE code block
//     var localVar = 'This is a local variable';
//     console.log(localVar); // Output: This is a local variable
// })();



// function Car(name,year,color){
//     this.Name=name;
//     this.Year=year;
//     this.color=color;

// }
// const jhon=new Car('bmw',2022,'blue');
// const jhn=new Car('bm',202,'bue');

// console.log(jhon);
// console.log(jhn);



// const user=["a","b","c","d"]

// let [...rest]=user;

// console.log(rest);


// const person={
//     name:"ansif",
//     age:22,
//     place:"puthanthani",
// };
// let {name, place,age}=person;
// console.log(name);
// console.log(place);
// console.log(age);


// function name(){
//     return["a","b","c","d"]
// }
// let[fst,snd,...rest]=name();
// console.log(fst,snd,...rest);

// let obj={
//     name:"abc",
//     add:{
//         country:"india",
//         state  :{
//             pincode:56516,
//             code:"js",
//             article:{
//                 topic:"dfaeaaddf"
//             }


//         }
//     }
// }
// let{name}=obj;
// console.log(name);
// let{add:{country: abcd}}=obj
// console.log(abcd);
// let{add:{state:{pincode:ef}}}=obj
// console.log(ef);
// let{add:{state:{article:{topic:gt}}}}=obj
// console.log(gt);



// function outer() {
//   let a = "Hello";

//   function middle() {
//     let b = "Ansif";

//     function inner() {
//       console.log(a + " " + b);
//     }

//     return inner;
//   }

//   return middle;
// }

// let step1 = outer();      
// let step2 = step1();     
// step2();                   

// sessionStorage.setItem("film","24")
// localStorage.setItem("year","2024")
// localStorage.setItem("actor","surya")

// let year=localStorage.getItem("year")
// console.log(year);
//  localStorage.remo veItem("actor")




// let name1={
//     name:" fasil",
//     age:22,
//     greet:function(city){
//         console.log("hello"+" "+this.name+" in "+city);

//     }
// }
// const name2={
//     name:"ansif"
// }

// let printmyname=name1.greet.bind(name2, "malapuram")
// printmyname();



// const map=new Map();
// map.set("name","ansif");
// map.set("age",22);
// map.set("city","ptni");

// console.log(map.get("name"));
// console.log(map.get("age"));


// const map =new Map([['a',1],['b',2]])
// map.set('c',3)
// map.delete('b')
// for(const[key,value]of map){
//     console.log(key+':'+value);

// }


// let a = 1
// let c = 2
// [a, c]= [c, a]
// console.log(a);
// console.log(c);


// let a =4.5;
// let b=math.round(a);
// console.log(b);

// console.log(Math.round(-2.5));   // Output: -2
// console.log(Math.round(-2.6));   // Output: -3


const user = { name: "Ansif", age: 22 };
const extra = { city: "Kozhikode", age: 23 };

const fullUser = { ...user, ...extra };

console.log(fullUser);
