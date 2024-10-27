// Data structures
const profileData = {
    name: "Zhavin Project",
    title: "Gamer | Anime Enthusiast",
    description: "A passionate gamer with experience across multiple platforms and genres.",
    image: "/api/placeholder/150/150"
};

const banAchievements = [
    {
        title: "Serial Banned Player",
        description: "Successfully got banned in multiple popular games"
    },
    {
        title: "Speed Runner",
        description: "Got banned within 24 hours of creating new account"
    },
    {
        title: "Multi-Platform Master",
        description: "Achieved bans across different gaming platforms"
    }
];

const gamesData = [
    {
        name: "Mobile Legends",
        status: "Banned",
        banReason: "Third Party Tools",
        banDate: "October 15, 2023",
        image: "/api/placeholder/400/200",
        achievement: {
            title: "🏆 Mythical Glory Before Ban",
            description: "Reached top rank before getting banned"
        }
    },
    {
        name: "PUBG Mobile",
        status: "Banned",
        banReason: "Unusual Gameplay Pattern",
        banDate: "December 3, 2023",
        image: "/api/placeholder/400/200",
        achievement: {
            title: "🏆 Conqueror Achievement",
            description: "Reached Conqueror rank in record time"
        }
    }
];

const animeData = [
    {
        title: "Attack on Titan",
        status: "Completed",
        rating: "⭐⭐⭐⭐⭐",
        episodes: "87/87",
        image: "/api/placeholder/400/200"
    },
    {
        title: "Demon Slayer",
        status: "Watching",
        rating: "⭐⭐⭐⭐½",
        episodes: "35/44",
        image: "/api/placeholder/400/200"
    },
    {
        title: "Jujutsu Kaisen",
        status: "Watching",
        rating: "⭐⭐⭐⭐⭐",
        episodes: "23/23 (Season 1)",
        image: "/api/placeholder/400/200"
    }
];

// DOM Elements
const profileContent = document.getElementById('profile');
const gamesContent = document.getElementById('games');
const animeContent = document.getElementById('anime');

// Functions
function renderProfile() {
    const profileHTML = `
        <div class="profile">
            <div class="profile-img">
                <img src="${profileData.image}" alt="Profile">
            </div>
            <div class="profile-info">
                <h2>${profileData.name}</h2>
                <p>${profileData.title}</p>
            </div>
        </div>
        <p>${profileData.description}</p>
        
        <div class="achievements-section">
            <h3>🏆 Ban Achievements</h3>
            ${banAchievements.map(achievement => `
                <div class="ban-achievement">
                    <h4>${achievement.title}</h4>
                    <p>${achievement.description}</p>
                </div>
            `).join('')}
        </div>
    `;
    profileContent.innerHTML = profileHTML;
}

function renderGames() {
    const gamesHTML = gamesData.map(game => `
        <div class="game-card">
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>Account Status: ${game.status}</p>
            </div>
            <div class="game-details">
                <img src="${game.image}" alt="${game.name} Ban">
                <p>Ban Reason: ${game.banReason}</p>
                <p>Date: ${game.banDate}</p>
                <div class="achievement">
                    <h4>${game.achievement.title}</h4>
                    <p>${game.achievement.description}</p>
                </div>
            </div>
        </div>
    `).join('');
    gamesContent.innerHTML = gamesHTML;
}

function renderAnime() {
    const animeHTML = animeData.map(anime => `
        <div class="anime-card">
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <p>Status: ${anime.status}</p>
            </div>
            <div class="anime-details">
                <img src="${anime.image}" alt="${anime.title}">
                <p>Rating: ${anime.rating}</p>
                <p>Episodes Watched: ${anime.episodes}</p>
            </div>
        </div>
    `).join('');
    animeContent.innerHTML = animeHTML;
}

function showTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for(let content of tabContents) {
        content.classList.remove('active');
    }
    
    document.getElementById(tabName).classList.add('active');
    
    const tabBtns = document.getElementsByClassName('tab-btn');
    for(let btn of tabBtns) {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === tabName) {
            btn.classList.add('active');
        }
    }
}

// Initialize
function initializeApp() {
    renderProfile();
    renderGames();
    renderAnime();
    
    // Add click listeners for mobile
    document.querySelectorAll('.game-card, .anime-card').forEach(card => {
        card.addEventListener('click', () => {
            if (window.matchMedia('(hover: none)').matches) {
                card.classList.toggle('active');
            }
        });
    });
}

// Call initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);