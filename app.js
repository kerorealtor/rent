const listings = [
  {
    city: "Murfreesboro",
    price: "$2,500",
    beds: "3 Bed • 2 Bath",
    img: "https://via.placeholder.com/400x250"
  },
  {
    city: "Antioch",
    price: "$2,000",
    beds: "4 Bed • 3 Bath",
    img: "https://via.placeholder.com/400x250"
  }
];

function render(data) {
  const div = document.getElementById("listings");
  div.innerHTML = "";
  data.forEach(x => {
    div.innerHTML += `
      <div class="card">
        <img src="${x.img}">
        <div class="price">${x.price}</div>
        <div>${x.city}</div>
        <div>${x.beds}</div>
      </div>
    `;
  });
}

render(listings);

document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  render(listings.filter(x =>
    x.city.toLowerCase().includes(q) ||
    x.price.includes(q)
  ));
});
