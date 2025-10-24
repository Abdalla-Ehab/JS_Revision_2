
// // let studentName1 ="souad";
// // let studentId1 = 1234;
// // let studentCourse1 = "Ab12"; let studentUnil = "EUI";
// // let student1 = {
// // name: "souad",
// // id:1234,
// // courses: ["A12", "B11", "C9"],
// // uni: "EUI"
// // };
// // console.log(student1)
// // ------------------------------------
// let Team = [
//     {
//         name: "souad",
//         id: 1234,
//         courses: ["A12", "B11", "C9"],
//         uni: "EUI",
//         img: "https://picsum.photos/200/200?random=1"
//     },
//     {
//         name: "omar",
//         id: 7654,
//         courses: ["A2", "B111", "C9"],
//         uni: "EUI",
//         img: "https://picsum.photos/200/200?random=2"
//     },
//     {
//         name: "amr",
//         id: 345,
//         courses: ["A22", "B1311", "C19"],
//         uni: "EUI",
//         img: "https://picsum.photos/200/200?random=3"
//     }
// ];
// console.log(students);

// // ---------------------------------------
// // document.getElementById("studentsCard").innerHTML += `
// //     <div class="card">
// //         <img src='${students[0].img}' style="width:150px">
// //         <h4>Name: ${students[0].name}</h4>
// //         <p>Courses: ${students[0].courses}</p>
// //     </div>
// // `;

// // document.getElementById("studentsCard").innerHTML += `
// //     <div class="card">
// //         <img src='${students[1].img}' style="width:150px">
// //         <h4>Name: ${students[1].name}</h4>
// //         <p>Courses: ${students[1].courses}</p>
// //     </div>
// // `;

// // for (let i = 0; i < students.length; i++) {
// //     document.getElementById("studentsCard").innerHTML += `
// //     <div class="card">
// //         <img src='${students[i].img}' style="width:150px">
// //         <h4>Name: ${students[i].name}</h4>
// //         <p>Courses: ${students[i].courses}</p>
// //     </div>
// // `;
// // }

// Team.forEach( (s)=> {
//     document.getElementById("studentsCard").innerHTML += `
//     <div class="card">
//         <img src='${s.img}' style="width:150px">
//         <h4>Name: ${s.name}</h4>
//         <p>Courses: ${s.courses}</p>
//     </div>
//     `;
// });



// Equipment Array
const equipment = [
    {
        name: "Tactical Rifle",
        description: "Primary assault weapon for high-risk operations",
        category: "Firearms",
        image: "images/Tactical_Rifle.jpg"
    },
    {
        name: "Ballistic Shield",
        description: "Heavy-duty protection for breach operations",
        category: "Defense",
        image: "images/Ballistic_Shield.png"
    },
    {
        name: "Flash Bang",
        description: "Non-lethal distraction device",
        category: "Tactical",
        image: "images/Flash_Bang.jpg"
    },
    {
        name: "Night Vision Goggles",
        description: "Advanced optics for night operations",
        category: "Equipment",
        image: "images/Night_Vision_Goggles.jpeg"
    },
    {
        name: "Tactical Vest",
        description: "Level IV body armor protection",
        category: "Defense",
        image: "images/Tactical_Vest.jpeg"
    },
    {
        name: "Breaching Tool",
        description: "Hydraulic door breaching equipment",
        category: "Tactical",
        image: "images/Breaching_Tool.jpg"
    }
];

// Show Stats Array
const showStats = [
    {
        number: "8",
        label: "Seasons",
        icon: "📺"
    },
    {
        number: "150+",
        label: "Episodes",
        icon: "🎬"
    },
    {
        number: "2017",
        label: "First Aired",
        icon: "📅"
    },
    {
        number: "12",
        label: "Main Cast",
        icon: "👥"
    },
    {
        number: "8.2",
        label: "IMDb Rating",
        icon: "⭐"
    },
    {
        number: "CBS",
        label: "Network",
        icon: "📡"
    }
];

// Function to display equipment
function displayEquipment() {
    const container = document.getElementById('equipment-container');
    
    equipment.forEach(item => {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        
        card.innerHTML = `
            <div class="equipment-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="equipment-category">${item.category}</div>
            </div>
            <div class="equipment-content">
                <h3 class="equipment-name">${item.name}</h3>
                <p class="equipment-description">${item.description}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Function to display stats
function displayStats() {
    const container = document.getElementById('stats-container');
    
    showStats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        
        statCard.innerHTML = `
            <div class="stat-icon">${stat.icon}</div>
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        
        container.appendChild(statCard);
    });
}

// Call functions when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayEquipment();
    displayStats();
});