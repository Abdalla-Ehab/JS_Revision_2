
// let studentName1 ="souad";
// let studentId1 = 1234;
// let studentCourse1 = "Ab12"; let studentUnil = "EUI";
// let student1 = {
// name: "souad",
// id:1234,
// courses: ["A12", "B11", "C9"],
// uni: "EUI"
// };
// console.log(student1)
// ------------------------------------
let students = [
    {
        name: "souad",
        id: 1234,
        courses: ["A12", "B11", "C9"],
        uni: "EUI",
        img: "https://picsum.photos/200/200?random=1"
    },
    {
        name: "omar",
        id: 7654,
        courses: ["A2", "B111", "C9"],
        uni: "EUI",
        img: "https://picsum.photos/200/200?random=2"
    },
    {
        name: "amr",
        id: 345,
        courses: ["A22", "B1311", "C19"],
        uni: "EUI",
        img: "https://picsum.photos/200/200?random=3"
    }
];
console.log(students);

// ---------------------------------------
// document.getElementById("studentsCard").innerHTML += `
//     <div class="card">
//         <img src='${students[0].img}' style="width:150px">
//         <h4>Name: ${students[0].name}</h4>
//         <p>Courses: ${students[0].courses}</p>
//     </div>
// `;

// document.getElementById("studentsCard").innerHTML += `
//     <div class="card">
//         <img src='${students[1].img}' style="width:150px">
//         <h4>Name: ${students[1].name}</h4>
//         <p>Courses: ${students[1].courses}</p>
//     </div>
// `;

// for (let i = 0; i < students.length; i++) {
//     document.getElementById("studentsCard").innerHTML += `
//     <div class="card">
//         <img src='${students[i].img}' style="width:150px">
//         <h4>Name: ${students[i].name}</h4>
//         <p>Courses: ${students[i].courses}</p>
//     </div>
// `;
// }

students.forEach( (s)=> {
    document.getElementById("studentsCard").innerHTML += `
    <div class="card">
        <img src='${s.img}' style="width:150px">
        <h4>Name: ${s.name}</h4>
        <p>Courses: ${s.courses}</p>
    </div>
    `;
});