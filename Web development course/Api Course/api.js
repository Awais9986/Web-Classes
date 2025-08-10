const API_KEY = "e1a0dd68";
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let cardContainer = document.querySelector("#card-container");
let skeleton = document.querySelector("#skeleton")

skeleton.classList.add("hidden")

async function apiCall(movieName) {
  try {
    skeleton.classList.remove("hidden")
    const URL = `https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`;

    const response = await fetch(URL);
    let data = await response.json();
console.log(data)
    console.log(data.Search);

    let cards = ``;

    data.Search.forEach((element) => {
      cards += `

                <div class="movie-card rounded-xl shadow-xl overflow-hidden">
                <img
                    src="${element.Poster}"
                    alt="Movie Poster"
                    class="rounded-t-xl"
                    onerror="this.onerror=null;this.src='https://placehold.co/400x600/1e293b/e2e8f0?text=Image+Not+Found';"
                />
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-white mb-2">${element.Title}</h2>
                    <p class="text-blue-300 text-lg mb-1">Year: ${element.Year}</p>
                    <p class="text-gray-400 text-base">Type: ${element.Type}</p>
                </div>
            </div>
                
                `;
    });

    skeleton.classList.add("hidden")

    cardContainer.innerHTML = cards;
  } catch (error) {
    alert("Something Went wrong", error);
  }
}

btn.addEventListener("click", () => {
  if (input.value) {
    apiCall(input.value);
  }
});
