const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((plants) => displayAllPlants(plants.plants));
};

const displayAllPlants = (plants) => {
  const cardsContainer = document.getElementById("card_container");
  cardsContainer.innerHTML = "";

  plants.forEach((plant) => {
    const cardParent = document.createElement("div");
    cardParent.className = "bg-white card p-5 h-full";

    const img = document.createElement("img");
    img.className = "h-40 object-cover";
    img.src = plant.image;
    img.alt = plant.name;

    const title = document.createElement("h2");
    title.className = "font-bold text-xl cursor-pointer";
    title.innerText = plant.name;
    title.onclick = () => my_modal_5.showModal();

    const desc = document.createElement("p");
    desc.className = "font-medium text-gray-400 line-clamp-2";
    desc.innerText = plant.description;

    const infoDiv = document.createElement("div");
    infoDiv.className = "flex justify-between items-center my-4";

    const category = document.createElement("span");
    category.className = "bg-green-100 px-2 p-1 rounded-2xl";
    category.innerText = plant.category;

    const price = document.createElement("h3");
    price.innerText = `৳ ${plant.price}`;

    infoDiv.append(category, price);

    const btn = document.createElement("button");
    btn.className = "btn bg-green-600 w-full";
    btn.innerText = "Add to Cart";
    cardParent.append(img, title, desc, infoDiv, btn);
    cardsContainer.appendChild(cardParent);
  });
};

loadAllPlants();