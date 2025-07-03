const student=[
    {name:"ansif",score:90},
    {name:"rashi",score:55},
    {name:"fasil",score:80},
    {name:"aflu",score:85},
    {name:"arjun",score:20},
]
console.log(student);

const names=student.map((students)=>students.name);
console.log(names);

const nam=student.filter((student)=>student.score>75);
console.log(nam);

const totalScore = student.reduce((sum, student)=>sum + student.score, 0);
const averageScore = totalScore / student.length;
console.log(averageScore)

function grade(score){
    if(score>=90){
        return 'A'
    }else if(score>=70){
        return 'B'
    }else{
        return 'c'
    }
}
console.log("name:ansif,garde:", grade(90));
console.log("name:rashi,garde:", grade(55));
console.log("name:fasil,garde:", grade(80));
console.log("name:aflu,garde:", grade(85));
console.log("name:arjun,garde:", grade(20));

