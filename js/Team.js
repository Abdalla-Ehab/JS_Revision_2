// S.W.A.T. Cast Array
const swatCast = [
    {
        actorName: "Shemar Moore",
        characterName: "Daniel 'Hondo' Harrelson",
        role: "Team Leader",
        image: "images/Hondo_Character_Still.jpg" // Replace with your image path
    },
    {
        actorName: "Alex Russell",
        characterName: "Jim Street",
        role: "Officer",
        image: "images/jim_street.png" // Replace with your image path
    },
    {
        actorName: "Jay Harrington",
        characterName: "David 'Deacon' Kay",
        role: "Senior Officer",
        image: "images/Jay_Harrington.png" // Replace with your image path
    },
    {
        actorName: "Lina Esco",
        characterName: "Christina 'Chris' Alonso",
        role: "Officer",
        image: "images/Lina_Esco.jpg" // Replace with your image path
    },
    {
        actorName: "Kenny Johnson",
        characterName: "Dominique Luca",
        role: "Specialist",
        image: "images/Kenny_Johnson.jpg" // Replace with your image path
    },
    {
        actorName: "David Lim",
        characterName: "Victor Tan",
        role: "Officer",
        image: "images/David_Lim.jpg" // Replace with your image path
    },
    {
        actorName: "Patrick St. Esprit",
        characterName: "Robert Hicks",
        role: "Commander",
        image: "images/Patrick_Esprit.jpg" // Replace with your image path
    },
    {
        actorName: "Amy Farrington",
        characterName: "Barbara Hicks",
        role: "Supporting",
        image: "images/Amy_Farrington.jpg" // Replace with your image path
    },
    {
        actorName: "Rochelle Aytes",
        characterName: "Nichelle",
        role: "Supporting",
        image: "images/Rochelle_Aytes.jpg" // Replace with your image path
    },
    {
        actorName: "Anna Enger Ritch",
        characterName: "Bonnie Lonsdale",
        role: "Officer",
        image: "images/Anna_Enger.jpg" // Replace with your image path
    },
    {
        actorName: "Niko Pepaj",
        characterName: "Erika Rogers",
        role: "Officer",
        image: "images/Niko_Pepaj.jpg" // Replace with your image path
    },
    {
        actorName: "Annie Ilonzeh",
        characterName: "Devin Gamble",
        role: "Officer",
        image: "images/Annie_Ilonzeh.jpg" // Replace with your image path
    }
];

// Function to create cast cards
function displaySwatCast() {
    const container = document.getElementById('cast-container');
    
    swatCast.forEach(member => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'cast-card';
        
        // Create card HTML
        card.innerHTML = `
            <div class="card-image">
                <img src="${member.image}" alt="${member.actorName}">
            </div>
            <div class="card-content">
                <h2 class="actor-name">${member.actorName}</h2>
                <p class="character-name">${member.characterName}</p>
                <span class="role-badge">${member.role}</span>
            </div>
        `;
        
        // Add card to container
        container.appendChild(card);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displaySwatCast);