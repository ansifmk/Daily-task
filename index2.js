//daily task =1

// const student=[
//     {name:"ansif",score:90},
//     {name:"rashi",score:55},
//     {name:"fasil",score:80},
//     {name:"aflu",score:85},
//     {name:"arjun",score:20},
// ]
// console.log(student);

// const names=student.map((students)=>students.name);
// console.log(names);

// const nam=student.filter((student)=>student.score>75);
// console.log(nam);

// const totalScore = student.reduce((sum, student)=>sum + student.score, 0);
// const averageScore = totalScore / student.length;
// console.log(averageScore)

// function grade(score){
//     if(score>=90){
//         return 'A'
//     }else if(score>=70){
//         return 'B'
//     }else{
//         return 'c'
//     }
// }
// console.log("name:ansif,garde:", grade(90));
// console.log("name:rashi,garde:", grade(55));
// console.log("name:fasil,garde:", grade(80));
// console.log("name:aflu,garde:", grade(85));
// console.log("name:arjun,garde:", grade(20));



//dailytask 2

// function factorial(n){
// if(n===0 || n===1){
//     return 1;
// }
// return n*factorial(n-1)
// }
// console.log(factorial(5));

// function sum(n){
//     if(n===0){
//         return 0;
//     }
//     return n+sum(n-1);
// }
// console.log(sum(5));


// function operate(num,callback){
//     return callback(num);

// }console.log(operate(5,factorial));
// console.log(operate(5,sum));



//dailytask 3


const clr=["red","green","yellow"];
const [first,second,third]=clr;
console.log(first);
console.log(second);
console.log(third);



const user={
    name:"ansif",
    email:"ansif@gmail.com",
    location:"puthanathani"
};
const {name,email,location}=user;
console.log(name);
console.log(email);
console.log(location);

function data({name,email,location}){
console.log(name);
console.log(email);
console.log(location);

}

const userdata={
    name:"ansif",
    email:"ansif@gamil.com",
    location:"puthanathani"
};
data(userdata);
