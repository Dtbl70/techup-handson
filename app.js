const places = [
  {
    name: "The Replacement - Lodge & Kitchen",
    halal: "Yes",
    budget: "$$",
    opening: "Mon–Thu: 9am–6pm; Fri–Sun: 8am–9pm",
    rating: "4.0",
    link: "https://maps.app.goo.gl/3PJ1BsPsxNK9qrFV7",
    type: "Cafe"
  },
  {
    name: "Principle Cafe by T.A.M.",
    halal: "No",
    budget: "$$",
    opening: "8am–6pm daily",
    rating: "5.0",
    link: "https://maps.app.goo.gl/ZN686QH5jTesSAEf8",
    type: "Cafe"
  },
  {
    name: "Flowers in the Window",
    halal: "No",
    budget: "$$",
    opening: "Mon, Wed–Sun: 10am–10pm; Tue: Closed",
    rating: "4.1",
    link: "https://maps.app.goo.gl/tLes4oxjjs1JHYXG8",
    type: "Cafe"
  },
  {
    name: "Keijometo",
    halal: "No",
    budget: "$$",
    opening: "Tue–Sun: 11am–7pm; Mon: Closed",
    rating: "N/A",
    link: "https://maps.app.goo.gl/SrPHPs5Gmi3jDMRE7",
    type: "Cafe"
  },
  {
    name: "Nimmies Pastry Cafe",
    halal: "Yes",
    budget: "$$",
    opening: "Daily: 8am–11pm",
    rating: "4.2",
    link: "https://maps.app.goo.gl/fZLxZAvhBavrb4aG6",
    type: "Cafe"
  },
  {
    name: "Commune by the Creators",
    halal: "Yes",
    budget: "$",
    opening: "Thu–Tue: 12pm–10pm; Wed: Closed",
    rating: "5.0",
    link: "https://maps.app.goo.gl/L8gXwibxfaj9AxqEA",
    type: "Cafe"
  },
  {
    name: "Kam Long Ah Zai Curry Fish Head",
    halal: "No",
    budget: "$",
    opening: "Daily: 8am–late afternoon",
    rating: "4.0",
    link: "https://maps.app.goo.gl/tXpjTuy9MxgbCp296",
    type: "Local Food"
  },
  {
    name: "Tua Thow Restaurant 大头粿条汤",
    halal: "No",
    budget: "$",
    opening: "Daily: 7:30am–2pm; Fri: Closed",
    rating: "N/A",
    link: "https://maps.app.goo.gl/BnfRHqhGn8DJrnHa7",
    type: "Local Food"
  },
  {
    name: "Oriental Kopi",
    halal: "Yes",
    budget: "$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/t6Djnyq4ZBNNk3Qc9",
    type: "Local Food"
  },
  {
    name: "Restoran Hua Mui",
    halal: "No",
    budget: "$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/DP8UbVgCxWUZscPp6",
    type: "Local Food"
  },
  {
    name: "Kopiloco by 1993",
    halal: "Yes",
    budget: "$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/Xm58Ce1xnJwYUCFy7",
    type: "Cafe"
  },
  {
    name: "WW Laksa House 水塘。辣沙",
    halal: "No",
    budget: "$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/Mps7wmu1MHCi3LoCA",
    type: "Local Food"
  },
  {
    name: "Meng Meng Roasted Duck",
    halal: "No",
    budget: "$$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/Uk36VoyeY1gJtRbH8",
    type: "Local Food"
  },
  {
    name: "Hiap Joo Bakery",
    halal: "No",
    budget: "$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/r5WhkJSBTpw72oKM8",
    type: "Local Food"
  },
  {
    name: "IT Roo Café",
    halal: "No",
    budget: "$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/ujUx5XgmvXcc9RgQ8",
    type: "Local Food"
  },
  {
    name: "Warung Saga",
    halal: "Yes",
    budget: "$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/zFfpSmVVwgXMeRck9",
    type: "Local Food"
  },
  {
    name: "Basilico Restaurant",
    halal: "No",
    budget: "$$$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/chbzX8C1HZBhY2J58",
    type: "Restaurant"
  },
  {
    name: "The Lightwood by Mues",
    halal: "Yes",
    budget: "$$$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/ANqEcggKQpToJ8Pr8",
    type: "Cafe"
  },
  {
    name: "Chez Papa French Bistro",
    halal: "No",
    budget: "$$$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/WjqmwvrvQ6f24Whs9",
    type: "Restaurant"
  },
  {
    name: "Space Cafe",
    halal: "No",
    budget: "$$",
    opening: "N/A",
    rating: "N/A",
    link: "https://maps.app.goo.gl/sRpG7C6E6AMXNeDM9",
    type: "Cafe"
  }
];

// Render cards
function renderCards(placesList) {
  const container = document.getElementById("recommendations");
  container.innerHTML = "";

  placesList.forEach(place => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow hover:bg-gray-100";

    card.innerHTML = `
      <h2 class="text-lg font-semibold mb-1">${place.name}</h2>
      <p><strong>Halal:</strong> ${place.halal}</p>
      <p><strong>Budget:</strong> ${place.budget}</p>
      <p><strong>Type:</strong> ${place.type}</p>
      <p><strong>Opening Hours:</strong> ${place.opening}</p>
      <p><strong>Google Rating:</strong> ${place.rating}</p>
      <a href="${place.link}" target="_blank" class="text-blue-500">View on Google Maps</a>
      <div class="mt-2 bg-gray-200 text-center text-sm text-gray-500 p-2 rounded">Map Preview (Embed later)</div>
      <button class="mt-3 bg-green-500 text-white px-4 py-2 rounded">Save to Favourite</button>
    `;

    container.appendChild(card);
  });
}

// Filter function
function filterPlaces() {
  const halal = document.getElementById("halal").value;
  const budget = document.getElementById("budget").value;
  const type = document.getElementById("type").value;

  const filtered = places.filter(p =>
    (halal === "" || p.halal === halal) &&
    (budget === "" || p.budget === budget) &&
    (type === "" || p.type === type)
  );

  renderCards(filtered);
}

// Initialize page
renderCards(places);
document.getElementById("halal").addEventListener("change", filterPlaces);
document.getElementById("budget").addEventListener("change", filterPlaces);
document.getElementById("type").addEventListener("change", filterPlaces);

