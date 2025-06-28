




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


// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "White"
// };

// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }
// let carValues = Object.values(car);

// for (let value of carValues) {
//   console.log(value);
// }
// function describeCar(carObj) {
//   return "This is a " + carObj.color + " " + carObj.year + " " + carObj.brand + " " + carObj.model + ".";
// }

// console.log(describeCar(car));



 


// const arr=[4,5,8,7,2,9];
// const out=arr.reduce(function(total,curr){
// if(curr>total){
//     total=curr
// }
// return total;
// },0); 
// console.log(out);

// let arr=[]

//  const arr=[4,5,8,7,2,9];

//  arr.forEach(x =>
//   console.log(x)
//  )
   




// const great =x=>x*x;
// console.log(great(8));




//leetcode fizzbuzz

// function str(n){
//     let result=[];
// for(let i= 1;i<=n;i++){
//     if(i%3===0 && i%5===0){
//         result.push ("FizzBuzz");
//     }else if(i%3===0){
//         result.push ("Fizz");
//     }else if(i%5===0){
//         result.push ("Buzz");
//     }else{
//         result.push (i.toString());
//     }

// }
// return result;
// }
// console.log(str(15));


// function str(x){
// let a=x.reverse()
// return a
// }
// console.log(str("hello"));


 function str(n){
    if(n===1){
        return 1;
    }
    else{ 
        return n*str(n-1);
    }
 }console.log(str(5));
 