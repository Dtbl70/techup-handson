document.addEventListener("DOMContentLoaded", function () {
  // Real data for all 20 recommendations
  const recommendations = [
    {
      name: "The Replacement - Lodge & Kitchen",
      halal: "Yes",
      budget: "$$",
      foodType: "Cafe",
      openingHours: "Mon–Thu: 9am–4:30pm; Fri: 9am–5pm; Sat–Sun: 9am–4:30pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/3PJ1BsPsxNK9qrFV7",
      latitude: 1.2931,
      longitude: 103.8496
    },
    {
      name: "Principle Cafe by T.A.M.",
      halal: "No",
      budget: "$$",
      foodType: "Cafe",
      openingHours: "Daily: 8am–5:30pm",
      googleRating: 4.7,
      googleMapsLink: "https://maps.app.goo.gl/ZN686QH5jTesSAEf8",
      latitude: 1.2950,
      longitude: 103.8443
    },
    {
      name: "Flowers in the Window",
      halal: "No",
      budget: "$$",
      foodType: "Cafe",
      openingHours: "Wed–Mon: 9am–4pm; Tue: Closed",
      googleRating: 4.1,
      googleMapsLink: "https://maps.app.goo.gl/tLes4oxjjs1JHYXG8",
      latitude: 1.2951,
      longitude: 103.8450
    },
    {
      name: "Keijometo",
      halal: "No",
      budget: "$$",
      foodType: "Restaurant",
      openingHours: "Tue–Sun: 11am–7pm; Mon: Closed",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/SrPHPs5Gmi3jDMRE7",
      latitude: 1.2952,
      longitude: 103.8460
    },
    {
      name: "Nimmies Pastry Cafe",
      halal: "Yes",
      budget: "$$",
      foodType: "Cafe",
      openingHours: "Daily: 8am–11pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/fZLxZAvhBavrb4aG6",
      latitude: 1.2953,
      longitude: 103.8470
    },
    {
      name: "Commune by the Creators",
      halal: "Yes",
      budget: "$",
      foodType: "Cafe",
      openingHours: "Tue–Sun: 9am–6pm; Mon: Closed",
      googleRating: 5.0,
      googleMapsLink: "https://maps.app.goo.gl/L8gXwibxfaj9AxqEA",
      latitude: 1.2960,
      longitude: 103.8480
    },
    {
      name: "Kam Long Ah Zai Curry Fish Head",
      halal: "No",
      budget: "$",
      foodType: "Restaurant",
      openingHours: "Tue–Sun: 8am–4pm; Mon: Closed",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/tXpjTuy9MxgbCp296",
      latitude: 1.2961,
      longitude: 103.8491
    },
    {
      name: "Tua Thow Restaurant 大头粿条汤",
      halal: "No",
      budget: "$",
      foodType: "Restaurant",
      openingHours: "Sat–Thu: 7:30am–2pm; Fri: Closed",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/BnfRHqhGn8DJrnHa7",
      latitude: 1.2962,
      longitude: 103.8501
    },
    {
      name: "Oriental Kopi",
      halal: "Yes",
      budget: "$",
      foodType: "Cafe",
      openingHours: "Daily: 9am–10pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/t6Djnyq4ZBNNk3Qc9",
      latitude: 1.2970,
      longitude: 103.8512
    },
    {
      name: "Restoran Hua Mui",
      halal: "No",
      budget: "$",
      foodType: "Restaurant",
      openingHours: "Daily: 8am–5pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/DP8UbVgCxWUZscPp6",
      latitude: 1.2971,
      longitude: 103.8523
    },
    {
      name: "Kopiloco by 1993",
      halal: "Yes",
      budget: "$",
      foodType: "Cafe",
      openingHours: "Daily: 7:30am–5:30pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/Xm58Ce1xnJwYUCFy7",
      latitude: 1.2980,
      longitude: 103.8534
    },
    {
      name: "WW Laksa House 水塘。辣沙",
      halal: "No",
      budget: "$",
      foodType: "Restaurant",
      openingHours: "Daily: 8:30am–3pm; Wed: Closed",
      googleRating: 4.1,
      googleMapsLink: "https://maps.app.goo.gl/Mps7wmu1MHCi3LoCA",
      latitude: 1.2985,
      longitude: 103.8545
    },
    {
      name: "Meng Meng Roasted Duck",
      halal: "No",
      budget: "$$",
      foodType: "Restaurant",
      openingHours: "Daily: 10:45am–9:30pm",
      googleRating: 4.2,
      googleMapsLink: "https://maps.app.goo.gl/Uk36VoyeY1gJtRbH8",
      latitude: 1.2990,
      longitude: 103.8550
    },
    {
      name: "Hiap Joo Bakery",
      halal: "No",
      budget: "$",
      foodType: "Cafe",
      openingHours: "Mon: 11:30am–5pm; Tue–Sat: 7:30am–4:30pm; Sun: 7:30am–12noon",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/r5WhkJSBTpw72oKM8",
      latitude: 1.3000,
      longitude: 103.8562
    },
    {
      name: "IT Roo Café",
      halal: "No",
      budget: "$",
      foodType: "Cafe",
      openingHours: "Daily: 11:30am–8:30pm",
      googleRating: 3.6,
      googleMapsLink: "https://maps.app.goo.gl/ujUx5XgmvXcc9RgQ8",
      latitude: 1.3010,
      longitude: 103.8573
    },
    {
      name: "Warung Saga",
      halal: "Yes",
      budget: "$",
      foodType: "Restaurant",
      openingHours: "Mon–Thu: 7am–2:30pm; 5:30pm–12am; Fri: Closed",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/zFfpSmVVwgXMeRck9",
      latitude: 1.3020,
      longitude: 103.8585
    },
    {
      name: "Basilico Restaurant",
      halal: "No",
      budget: "$$$",
      foodType: "Restaurant",
      openingHours: "Daily: 12pm–10pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/chbzX8C1HZBhY2J58",
      latitude: 1.3030,
      longitude: 103.8596
    },
    {
      name: "Frenche Roast Cafe (Molek)",
      halal: "Yes",
      budget: "$$$",
      foodType: "Cafe",
      openingHours: "Daily: 8:30am–8pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/ANqEcggKQpToJ8Pr8",
      latitude: 1.3040,
      longitude: 103.8607
    },
    {
      name: "Chez Papa French Bistro",
      halal: "No",
      budget: "$$$",
      foodType: "Restaurant",
      openingHours: "Tue–Sun: 5pm–10:30pm; Mon: Closed",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/WjqmwvrvQ6f24Whs9",
      latitude: 1.3050,
      longitude: 103.8618
    },
    {
      name: "Space Cafe",
      halal: "No",
      budget: "$$",
      foodType: "Cafe",
      openingHours: "Daily: 8am–9pm",
      googleRating: 4.0,
      googleMapsLink: "https://maps.app.goo.gl/sRpG7C6E6AMXNeDM9",
      latitude: 1.3060,
      longitude: 103.8629
    }
  ];

  // Set the title of the web app
  document.title = "EatWhereJB Fast recommender";

  // Cache DOM elements
  const filterHalal = document.getElementById("filter-halal");
  const filterBudget = document.getElementById("filter-budget");
  const filterFoodType = document.getElementById("filter-food-type");

  // Default user location
  let userLocation = { latitude: 1.2960, longitude: 103.8480 };

  // Helper to update the UI with filtered recommendations
  const updateRecommendationCards = (filteredRecommendations) => {
    const recommendationList = document.getElementById("recommendation-list");
    recommendationList.innerHTML = ""; // Clear previous recommendations

    filteredRecommendations.forEach((rec) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const content = `
        <h3>${rec.name}</h3>
        <p>Halal: ${rec.halal}</p>
        <p>Budget: ${rec.budget}</p>
        <p>Food Type: ${rec.foodType}</p>
        <p><a href="${rec.googleMapsLink}" target="_blank">Google Maps Link</a></p>
        <button class="save-favorite" data-name="${rec.name}">Save Favorite</button>
      `;

      card.innerHTML = content;

      // Add event listener for saving to localStorage
      const saveButton = card.querySelector(".save-favorite");
      saveButton.addEventListener("click", () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(rec);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${rec.name} saved to favorites!`);
      });

      recommendationList.appendChild(card);
    });
  };

  // Filter function
  const filterRecommendations = () => {
    const selectedHalal = filterHalal.value;
    const selectedBudget = filterBudget.value;
    const selectedFoodType = filterFoodType.value;

    const filtered = recommendations.filter((rec) => {
      return (
        (selectedHalal === "all" || rec.halal === selectedHalal) &&
        (selectedBudget === "all" || rec.budget === selectedBudget) &&
        (selectedFoodType === "all" || rec.foodType === selectedFoodType)
      );
    });

    updateRecommendationCards(filtered);
  };

  // Event listeners for filters
  filterHalal.addEventListener("change", filterRecommendations);
  filterBudget.addEventListener("change", filterRecommendations);
  filterFoodType.addEventListener("change", filterRecommendations);

  // Initial load
  filterRecommendations();

});

