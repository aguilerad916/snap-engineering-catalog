/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const teamData = [
    {
        name: "Inter Milan",
        description: "Inter Milan is a professional football club based in Milan, Italy. Currently the top-ranked team in Europe with an exceptional record in Serie A.",
        wins: 26,
        draws: 4,
        losses: 1,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1024px-FC_Internazionale_Milano_2021.svg.png"
    },
    {
        name: "Paris Saint-Germain",
        description: "Paris Saint-Germain is a professional football club based in Paris, France. Among Europe's elite clubs, they've had an impressive season in Ligue 1.",
        wins: 21,
        draws: 8,
        losses: 2,
        imageURL: "https://i.pinimg.com/564x/e9/6c/67/e96c675afa3d76277bf0c26dae200bba.jpg"
    },
    {
        name: "Liverpool FC",
        description: "Liverpool FC is a professional football club based in Liverpool, England. A powerhouse in the Premier League with a strong European presence.",
        wins: 24,
        draws: 6,
        losses: 3,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png"
    },
    {
        name: "Barcelona",
        description: "FC Barcelona is a professional football club based in Barcelona, Spain. Known for its distinctive style of play and continued dominance in La Liga.",
        wins: 22,
        draws: 7,
        losses: 3,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png"
    },
    {
        name: "Arsenal",
        description: "Arsenal is a professional football club based in London, England. 'The Gunners' have shown impressive form in the Premier League this season.",
        wins: 23,
        draws: 6,
        losses: 4,
        imageURL: "https://i.pinimg.com/564x/ca/c5/14/cac51494a8a86772311c36bcac303073.jpg"
    },
    {
        name: "Manchester City",
        description: "Manchester City is a professional football club based in Manchester, England. The club leads the UEFA club coefficient rankings for a third consecutive year.",
        wins: 22,
        draws: 5,
        losses: 5,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png"
    },
    {
        name: "Real Madrid",
        description: "Real Madrid is a professional football club based in Madrid, Spain. One of the most successful clubs in history and consistently among Europe's elite.",
        wins: 20,
        draws: 9,
        losses: 2,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png"
    },
    {
        name: "Bayern Munich",
        description: "Bayern Munich is a professional football club based in Munich, Germany. A dominant force in the Bundesliga and regular Champions League contender.",
        wins: 21,
        draws: 6,
        losses: 4,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
    },
    {
        name: "Bayer Leverkusen",
        description: "Bayer Leverkusen is a professional football club based in Leverkusen, Germany. Following their unbeaten season, they remain one of Europe's top teams.",
        wins: 19,
        draws: 8,
        losses: 3,
        imageURL: "https://i.pinimg.com/originals/21/8d/f1/218df1cbc645a3fc0a9d1745d4ed333a.png"
    },
    {
        name: "Chelsea",
        description: "Chelsea is a professional football club based in London, England. The Blues have been consistently performing at the highest level in domestic and European competitions.",
        wins: 20,
        draws: 6,
        losses: 6,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png"
    }
];

// Keep a copy of the original data for resetting after filters
let teams = [...teamData];

// Function to display all teams as cards
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing cards
    const templateCard = document.querySelector(".card");
    
    if (teams.length === 0) {
        const noResultsMsg = document.createElement("div");
        noResultsMsg.className = "no-results";
        noResultsMsg.textContent = "No teams match your filter criteria.";
        noResultsMsg.style.textAlign = "center";
        noResultsMsg.style.fontSize = "20px";
        noResultsMsg.style.padding = "40px";
        noResultsMsg.style.color = "#777";
        cardContainer.appendChild(noResultsMsg);
        return;
    }
    
    // Create a card for each team
    teams.forEach(team => {
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, team);
        cardContainer.appendChild(nextCard);
    });
}

function editCardContent(card, team) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = team.name;

    const cardImage = card.querySelector("img");
    cardImage.src = team.imageURL;
    cardImage.alt = team.name + " Logo";

    const cardInfo = card.querySelector("li");
    const cardStats = cardInfo.nextElementSibling;

    cardInfo.textContent = team.description;
    
    // Calculate points (3 for win, 1 for draw)
    const points = (team.wins * 3) + team.draws;
    
    cardStats.innerHTML = `<strong>Stats:</strong> ${team.wins}W ${team.draws}D ${team.losses}L <br><strong>Points:</strong> ${points}`;
}

document.addEventListener("DOMContentLoaded", () => {
    showCards();
    document.getElementById("input").value = 0;
});

// Sort functions
function sortByWins() {
    teams.sort((a, b) => b.wins - a.wins);
    showCards();
    highlightActiveButton('Sort By Wins');
}

function sortByDraws() {
    teams.sort((a, b) => b.draws - a.draws);
    showCards();
    highlightActiveButton('Sort By Draws');
}

function sortByLosses() {
    teams.sort((a, b) => b.losses - a.losses);
    showCards();
    highlightActiveButton('Sort By Losses');
}

// Filter function
function filterByWins() {
    const input = parseInt(document.getElementById("input").value) || 0;
    teams = teamData.filter(team => team.wins >= input);
    showCards();
    
    // Add visual feedback
    const filterButton = document.querySelector('.filter-controls button');
    filterButton.textContent = `Filtered: ≥ ${input} Wins`;
    
    // Add reset button if not already present
    if (!document.getElementById('resetFilter')) {
        const resetButton = document.createElement('button');
        resetButton.id = 'resetFilter';
        resetButton.textContent = 'Reset Filter';
        resetButton.onclick = resetFilters;
        document.querySelector('.filter-controls').appendChild(resetButton);
    }
}

// Reset filters function
function resetFilters() {
    teams = [...teamData]; // Reset to original data
    document.getElementById("input").value = 0;
    showCards();
    
    // Reset button text
    const filterButton = document.querySelector('.filter-controls button');
    filterButton.textContent = 'Filter Teams';
    
    // Remove reset button
    const resetButton = document.getElementById('resetFilter');
    if (resetButton) {
        resetButton.remove();
    }
}

function highlightActiveButton(buttonText) {
    const buttons = document.querySelectorAll('.sort-controls button');
    buttons.forEach(button => {
        if (button.textContent === buttonText) {
            button.style.background = 'linear-gradient(to right, #005bea, #00c04b)';
            button.style.fontWeight = '700';
        } else {
            button.style.background = 'linear-gradient(to right, #0575E6, #00F260)';
            button.style.fontWeight = '500';
        }
    });
}