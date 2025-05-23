// Complete data for all 20 recommendations
const recommendations = [
    {
        name: "The Replacement - Lodge & Kitchen",
        halal: "Yes",
        budget: "$$",
        openingHours: "Mon–Thu: 9am–4:30pm; Fri: 9am–5pm; Sat–Sun: 9am–4:30pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/3PJ1BsPsxNK9qrFV7",
        foodType: "Cafe",
        latitude: 1.4925,
        longitude: 103.7412
    },
    {
        name: "Principle Cafe by T.A.M.",
        halal: "No",
        budget: "$$",
        openingHours: "Daily: 8am–5:30pm",
        rating: 4.7,
        googleLink: "https://maps.app.goo.gl/ZN686QH5jTesSAEf8",
        foodType: "Cafe",
        latitude: 1.4976,
        longitude: 103.7359
    },
    {
        name: "Flowers in the Window",
        halal: "No",
        budget: "$$",
        openingHours: "Wed–Mon: 9am–4pm; Tue: Closed",
        rating: 4.1,
        googleLink: "https://maps.app.goo.gl/tLes4oxjjs1JHYXG8",
        foodType: "Cafe",
        latitude: 1.4987,
        longitude: 103.7351
    },
    {
        name: "Keijometo",
        halal: "No",
        budget: "$$",
        openingHours: "Tue–Sun: 11am–7pm; Mon: Closed",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/SrPHPs5Gmi3jDMRE7",
        foodType: "Restaurant",
        latitude: 1.4921,
        longitude: 103.7414
    },
    {
        name: "Nimmies Pastry Cafe",
        halal: "Yes",
        budget: "$$",
        openingHours: "Daily: 8am–11pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/fZLxZAvhBavrb4aG6",
        foodType: "Cafe",
        latitude: 1.4984,
        longitude: 103.7358
    },
    {
        name: "Commune by the Creators",
        halal: "Yes",
        budget: "$",
        openingHours: "Tue–Sun: 9am–6pm; Mon: Closed",
        rating: 5.0,
        googleLink: "https://maps.app.goo.gl/L8gXwibxfaj9AxqEA",
        foodType: "Cafe",
        latitude: 1.4956,
        longitude: 103.7371
    },
    {
        name: "Kam Long Ah Zai Curry Fish Head",
        halal: "No",
        budget: "$",
        openingHours: "Tue–Sun: 8am–4pm; Mon: Closed",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/tXpjTuy9MxgbCp296",
        foodType: "Local Food",
        latitude: 1.4945,
        longitude: 103.7365
    },
    {
        name: "Tua Thow Restaurant 大头粿条汤",
        halal: "No",
        budget: "$",
        openingHours: "Sat–Thu: 7:30am–2pm; Fri: Closed",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/BnfRHqhGn8DJrnHa7",
        foodType: "Local Food",
        latitude: 1.4911,
        longitude: 103.7407
    },
    {
        name: "Oriental Kopi",
        halal: "Yes",
        budget: "$",
        openingHours: "Daily: 9am–10pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/t6Djnyq4ZBNNk3Qc9",
        foodType: "Cafe",
        latitude: 1.4992,
        longitude: 103.7355
    },
    {
        name: "Restoran Hua Mui",
        halal: "No",
        budget: "$",
        openingHours: "Daily: 8am–5pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/DP8UbVgCxWUZscPp6",
        foodType: "Restaurant",
        latitude: 1.4998,
        longitude: 103.7363
    },
    {
        name: "Kopiloco by 1993",
        halal: "Yes",
        budget: "$",
        openingHours: "Daily: 7:30am–5:30pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/Xm58Ce1xnJwYUCFy7",
        foodType: "Cafe",
        latitude: 1.4978,
        longitude: 103.7353
    },
    {
        name: "WW Laksa House 水塘。辣沙",
        halal: "No",
        budget: "$",
        openingHours: "Daily: 8:30am–3pm; Wed: Closed",
        rating: 4.1,
        googleLink: "https://maps.app.goo.gl/Mps7wmu1MHCi3LoCA",
        foodType: "Local Food",
        latitude: 1.4959,
        longitude: 103.7368
    },
    {
        name: "Meng Meng Roasted Duck",
        halal: "No",
        budget: "$$",
        openingHours: "Daily: 10:45am–9:30pm",
        rating: 4.2,
        googleLink: "https://maps.app.goo.gl/Uk36VoyeY1gJtRbH8",
        foodType: "Restaurant",
        latitude: 1.4927,
        longitude: 103.7398
    },
    {
        name: "Hiap Joo Bakery",
        halal: "No",
        budget: "$",
        openingHours: "Mon: 11:30am–5pm; Tue–Sat: 7:30am–4:30pm; Sun: 7:30am–12noon",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/r5WhkJSBTpw72oKM8",
        foodType: "Restaurant",
        latitude: 1.4913,
        longitude: 103.7382
    },
    {
        name: "IT Roo Café",
        halal: "No",
        budget: "$",
        openingHours: "Daily: 11:30am–8:30pm",
        rating: 3.6,
        googleLink: "https://maps.app.goo.gl/ujUx5XgmvXcc9RgQ8",
        foodType: "Cafe",
        latitude: 1.4962,
        longitude: 103.7377
    },
    {
        name: "Warung Saga",
        halal: "Yes",
        budget: "$",
        openingHours: "Mon–Thu: 7am–2:30pm; 5:30pm–12am; Fri: Closed",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/zFfpSmVVwgXMeRck9",
        foodType: "Local Food",
        latitude: 1.4990,
        longitude: 103.7364
    },
    {
        name: "Basilico Restaurant",
        halal: "No",
        budget: "$$$",
        openingHours: "Daily: 12pm–10pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/chbzX8C1HZBhY2J58",
        foodType: "Restaurant",
        latitude: 1.4948,
        longitude: 103.7354
    },
    {
        name: "Frenche Roast Cafe (Molek)",
        halal: "Yes",
        budget: "$$$",
        openingHours: "Daily: 8:30am–8pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/ANqEcggKQpToJ8Pr8",
        foodType: "Cafe",
        latitude: 1.4939,
        longitude: 103.7380
    },
    {
        name: "Chez Papa French Bistro",
        halal: "No",
        budget: "$$$",
        openingHours: "Tue–Sun: 5pm–10:30pm; Mon: Closed",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/WjqmwvrvQ6f24Whs9",
        foodType: "Restaurant",
        latitude: 1.4952,
        longitude: 103.7356
    },
    {
        name: "Space Cafe",
        halal: "No",
        budget: "$$",
        openingHours: "Daily: 8am–9pm",
        rating: 4.0,
        googleLink: "https://maps.app.goo.gl/sRpG7C6E6AMXNeDM9",
        foodType: "Cafe",
        latitude: 1.4933,
        longitude: 103.7379
    }
];

// Function to get the user's current location using Geolocation API
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}

// Render recommendations based on filters
async function renderRecommendations() {
    const halalFilter = document.getElementById('filter-halal').value;
    const budgetFilter = document.getElementById('filter-budget').value;
    const foodTypeFilter = document.getElementById('filter-food-type').value;
    const recommendationList = document.getElementById('recommendation-list');

    // Get user's location and then filter and sort recommendations
    try {
        const position = await getUserLocation();
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        // Filter recommendations based on the selected filters
        const filteredRecommendations = recommendations.filter(rec => {
            const matchesHalal = halalFilter === 'all' || rec.halal === halalFilter;
            const matchesBudget = budgetFilter === 'all' || rec.budget === budgetFilter;
            const matchesFoodType = foodTypeFilter === 'all' || rec.foodType === foodTypeFilter;
            return matchesHalal && matchesBudget && matchesFoodType;
        });

        // Calculate the distance from user and add it to each recommendation
        filteredRecommendations.forEach(rec => {
            rec.distance = calculateDistance(userLat, userLon, rec.latitude, rec.longitude);
        });

        // Sort recommendations by distance (nearest first)
        filteredRecommendations.sort((a, b) => a.distance - b.distance);

        // Clear existing recommendations
        recommendationList.innerHTML = '';

        // Loop through filtered and sorted recommendations and create card elements
        filteredRecommendations.forEach(rec => {
            const card = document.createElement('div');
            card.className = 'card col-md-3'; // 4 cards in each row (Bootstrap grid)

            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${rec.name}</h5>
                    <p class="card-text">Halal: ${rec.halal}</p>
                    <p class="card-text">Budget: ${rec.budget}</p>
                    <p class="card-text">Food Type: ${rec.foodType}</p>
                    <p class="card-text">Rating: ${rec.rating}</p>
                    <p class="card-text">Opening Hours: ${rec.openingHours}</p>
                    <p class="card-text">Distance: ${rec.distance.toFixed(2)} km</p>
                    <a href="${rec.googleLink}" class="btn btn-primary" target="_blank">View on Google Maps</a>
                    <button class="btn btn-secondary save-favorite" data-name="${rec.name}">Save to Favorites</button>
                </div>
            `;

            // Add event listener for saving to favorites
            const saveButton = card.querySelector('.save-favorite');
            saveButton.addEventListener('click', () => saveToFavorites(rec));

            recommendationList.appendChild(card);
        });
    } catch (error) {
        alert("Unable to retrieve your location: " + error);
    }
}

// Function to calculate the distance between two lat/long points using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Save favorite to local storage
function saveToFavorites(rec) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.name === rec.name)) {
        favorites.push(rec);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${rec.name} saved to favorites!`);
    } else {
        alert(`${rec.name} is already in your favorites.`);
    }
}

// Event listener for filters
document.getElementById('filter-budget').addEventListener('change', renderRecommendations);
document.getElementById('filter-halal').addEventListener('change', renderRecommendations);
document.getElementById('filter-food-type').addEventListener('change', renderRecommendations);

// Call the function initially to render all recommendations
renderRecommendations();


