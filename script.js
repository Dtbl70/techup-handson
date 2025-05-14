const places = [
    { name: "The Replacement - Lodge & Kitchen", halal: "Yes", budget: "$$", type: "cafe", link: "https://maps.app.goo.gl/3PJ1BsPsxNK9qrFV7", lat: 1.456, lng: 103.762, mapEmbed: "https://www.google.com/maps?q=The+Replacement+-+Lodge+%26+Kitchen,+Johor+Bahru&output=embed" },
    { name: "Principle Cafe by T.A.M.", halal: "No", budget: "$$", type: "cafe", link: "https://maps.app.goo.gl/ZN686QH5jTesSAEf8", lat: 1.479, lng: 103.761, mapEmbed: "https://www.google.com/maps?q=Principle+Cafe+by+T.A.M.,+Johor+Bahru&output=embed" },
    { name: "Flowers in the Window", halal: "No", budget: "$$", type: "cafe", link: "https://maps.app.goo.gl/tLes4oxjjs1JHYXG8", lat: 1.454, lng: 103.761, mapEmbed: "https://www.google.com/maps?q=Flowers+in+the+Window,+Johor+Bahru&output=embed" },
    { name: "Keijometo", halal: "No", budget: "$$", type: "cafe", link: "https://maps.app.goo.gl/SrPHPs5Gmi3jDMRE7", lat: 1.467, lng: 103.761, mapEmbed: "https://www.google.com/maps?q=Keijometo,+Johor+Bahru&output=embed" },
    { name: "Nimmies Pastry Cafe", halal: "Yes", budget: "$$", type: "cafe", link: "https://maps.app.goo.gl/fZLxZAvhBavrb4aG6", lat: 1.465, lng: 103.762, mapEmbed: "https://www.google.com/maps?q=Nimmies+Pastry+Cafe,+Johor+Bahru&output=embed" },
    { name: "Commune by the Creators", halal: "Yes", budget: "$", type: "cafe", link: "https://maps.app.goo.gl/L8gXwibxfaj9AxqEA", lat: 1.455, lng: 103.760, mapEmbed: "https://www.google.com/maps?q=Commune+by+the+Creators,+Johor+Bahru&output=embed" },
    { name: "Kam Long Ah Zai Curry Fish Head", halal: "No", budget: "$", type: "local food", link: "https://maps.app.goo.gl/tXpjTuy9MxgbCp296", lat: 1.481, lng: 103.755, mapEmbed: "https://www.google.com/maps?q=Kam+Long+Ah+Zai+Curry+Fish+Head,+Johor+Bahru&output=embed" },
    { name: "Tua Thow Restaurant 大头粿条汤", halal: "No", budget: "$", type: "local food", link: "https://maps.app.goo.gl/BnfRHqhGn8DJrnHa7", lat: 1.481, lng: 103.764, mapEmbed: "https://www.google.com/maps?q=Tua+Thow+Restaurant,+Johor+Bahru&output=embed" },
    { name: "Oriental Kopi", halal: "Yes", budget: "$", type: "local food", link: "https://maps.app.goo.gl/t6Djnyq4ZBNNk3Qc9", lat: 1.462, lng: 103.757, mapEmbed: "https://www.google.com/maps?q=Oriental+Kopi,+Johor+Bahru&output=embed" },
    { name: "Restoran Hua Mui", halal: "No", budget: "$", type: "local food", link: "https://maps.app.goo.gl/DP8UbVgCxWUZscPp6", lat: 1.481, lng: 103.757, mapEmbed: "https://www.google.com/maps?q=Restoran+Hua+Mui,+Johor+Bahru&output=embed" },
    { name: "Kopiloco by 1993", halal: "Yes", budget: "$", type: "cafe", link: "https://maps.app.goo.gl/Xm58Ce1xnJwYUCFy7", lat: 1.475, lng: 103.768, mapEmbed: "https://www.google.com/maps?q=Kopiloco+by+1993,+Johor+Bahru&output=embed" },
    { name: "WW Laksa House 水塘。辣沙", halal: "No", budget: "$", type: "local food", link: "https://maps.app.goo.gl/Mps7wmu1MHCi3LoCA", lat: 1.482, lng: 103.762, mapEmbed: "https://www.google.com/maps?q=WW+Laksa+House,+Johor+Bahru&output=embed" },
    { name: "Meng Meng Roasted Duck", halal: "No", budget: "$$", type: "local food", link: "https://maps.app.goo.gl/Uk36VoyeY1gJtRbH8", lat: 1.475, lng: 103.758, mapEmbed: "https://www.google.com/maps?q=Meng+Meng+Roasted+Duck,+Johor+Bahru&output=embed" },
    { name: "Hiap Joo Bakery", halal: "No", budget: "$", type: "local food", link: "https://maps.app.goo.gl/r5WhkJSBTpw72oKM8", lat: 1.479, lng: 103.761, mapEmbed: "https://www.google.com/maps?q=Hiap+Joo+Bakery,+Johor+Bahru&output=embed" },
    { name: "IT Roo Café", halal: "No", budget: "$", type: "cafe", link: "https://maps.app.goo.gl/ujUx5XgmvXcc9RgQ8", lat: 1.472, lng: 103.765, mapEmbed: "https://www.google.com/maps?q=IT+Roo+Café,+Johor+Bahru&output=embed" },
    { name: "Warung Saga", halal: "Yes", budget: "$", type: "local food", link: "https://maps.app.goo.gl/zFfpSmVVwgXMeRck9", lat: 1.452, lng: 103.763, mapEmbed: "https://www.google.com/maps?q=Warung+Saga,+Johor+Bahru&output=embed" },
    { name: "Basilico Restaurant", halal: "No", budget: "$$$", type: "restaurant", link: "https://maps.app.goo.gl/chbzX8C1HZBhY2J58", lat: 1.463, lng: 103.765, mapEmbed: "https://www.google.com/maps?q=Basilico+Restaurant,+Johor+Bahru&output=embed" },
    { name: "The Lightwood by Mues", halal: "Yes", budget: "$$$", type: "restaurant", link: "https://maps.app.goo.gl/ANqEcggKQpToJ8Pr8", lat: 1.467, lng: 103.769, mapEmbed: "https://www.google.com/maps?q=The+Lightwood+by+Mues,+Johor+Bahru&output=embed" },
    { name: "Chez Papa French Bistro", halal: "No", budget: "$$$", type: "restaurant", link: "https://maps.app.goo.gl/WjqmwvrvQ6f24Whs9", lat: 1.459, lng: 103.754, mapEmbed: "https://www.google.com/maps?q=Chez+Papa+French+Bistro,+Johor+Bahru&output=embed" },
    { name: "Space Cafe", halal: "No", budget: "$$", type: "cafe", link: "https://maps.app.goo.gl/sRpG7C6E6AMXNeDM9", lat: 1.457, lng: 103.765, mapEmbed: "https://www.google.com/maps?q=Space+Cafe,+Johor+Bahru&output=embed" }
];
// Google Sign-In integration

function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const userName = profile.getName();
  const userEmail = profile.getEmail();

  // Display user info
  const userInfo = document.getElementById("user-info");
  userInfo.innerHTML = `Logged in as: ${userName} (${userEmail})`;

  // Save user info to localStorage for session persistence
  localStorage.setItem("userName", userName);
  localStorage.setItem("userEmail", userEmail);
}

// Sign out function
function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    // Clear user info from UI and localStorage
    document.getElementById("user-info").innerHTML = "Not logged in";
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
  });
}

// Load user info from localStorage on page load
window.onload = function () {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  if (userName && userEmail) {
    document.getElementById("user-info").innerHTML = `Logged in as: ${userName} (${userEmail})`;
  } else {
    document.getElementById("user-info").innerHTML = "Not logged in";
  }
};
// Filter function
function filterPlaces() {
    const halal = document.getElementById("halal").value;
    const budget = document.getElementById("budget").value;
    const type = document.getElementById("type").value;

    const filteredPlaces = places.filter(place => {
        return (halal === "" || place.halal === halal) &&
               (budget === "" || place.budget === budget) &&
               (type === "" || place.type === type);
    });

    renderCards(filteredPlaces);
}

// Render the place cards
function renderCards(placesToRender) {
    const recommendationsContainer = document.getElementById("recommendations");
    recommendationsContainer.innerHTML = '';

    placesToRender.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card bg-white p-4 rounded-lg shadow-lg hover:bg-gray-100';
        
        card.innerHTML = `
            <h2 class="font-semibold text-lg">${place.name}</h2>
            <p><strong>Halal:</strong> ${place.halal}</p>
            <p><strong>Budget:</strong> ${place.budget}</p>
            <p><strong>Type:</strong> ${place.type}</p>
            <a href="${place.link}" target="_blank" class="text-blue-500">View on Google Maps</a>
            <iframe src="${place.mapEmbed}" width="100%" height="200" frameborder="0" style="border:0;"></iframe>
            <button class="mt-4 bg-green-500 text-white p-2 rounded">Save to Favourite</button>
        `;

        recommendationsContainer.appendChild(card);
    });
}
// Function to calculate distance using the Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

// Function to sort places by proximity
function sortByProximity() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const sortedPlaces = [...places].sort((a, b) => {
            const distanceA = calculateDistance(userLat, userLng, a.lat, a.lng);
            const distanceB = calculateDistance(userLat, userLng, b.lat, b.lng);
            return distanceA - distanceB;
        });

        renderCards(sortedPlaces);
    }, error => {
        alert("Unable to retrieve your location.");
    });
}

// Add a button to sort by proximity
const sortButton = document.createElement('button');
sortButton.textContent = "Sort by Nearest";
sortButton.className = "bg-blue-500 text-white p-2 rounded mb-4";
sortButton.addEventListener("click", sortByProximity);

// Add the button to the DOM
document.querySelector(".container").insertBefore(sortButton, document.getElementById("recommendations"));

// Initialize page with all places
renderCards(places);

// Event listeners for filter change
document.getElementById("halal").addEventListener("change", filterPlaces);
document.getElementById("budget").addEventListener("change", filterPlaces);
document.getElementById("type").addEventListener("change", filterPlaces);
