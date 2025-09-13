const loadingSpinner = (status) => {
  if (status) {
    document.getElementById("loading-spinner").classList.remove("hidden");
    document.getElementById("card_container").classList.add("hidden");
  } else {
    document.getElementById("loading-spinner").classList.add("hidden");
    document.getElementById("card_container").classList.remove("hidden");
  }
};

const loadAllPlants = () => {
  loadingSpinner(true);
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
    img.className = "h-40 object-cover mb-4";
    img.src = plant.image;
    img.alt = plant.name;

    const title = document.createElement("h2");
    title.className = "font-bold text-xl cursor-pointer";
    title.innerText = plant.name;
    title.onclick = () => loadPlantDetails(plant.id);

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
    btn.addEventListener("click", () => addCart(plant));

    cardParent.append(img, title, desc, infoDiv, btn);
    cardsContainer.appendChild(cardParent);
  });

  loadingSpinner(false);
};

const loadCategoriesBtn = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const displayCategories = (categories) => {
  const parentNode = document.getElementById("categories_btn_box");
  parentNode.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className =
      "categories-btn hover:bg-green-600 hover:text-white px-5 py-2 rounded-xl w-full text-black m-1";
    button.id = `categories-btn-${category.id}`;
    button.innerText = category.category_name;
    button.addEventListener("click", () => loadCategory(category.id));
    parentNode.appendChild(button);
  });
};

const loadCategory = (id) => {
  loadingSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((singleCategory) => {
      displayAllPlants(singleCategory.plants);
      loadingSpinner(false);
    });

  const allCategories = document.querySelectorAll(".categories-btn");
  allCategories.forEach((el) => el.classList.remove("active-category"));
  document
    .getElementById(`categories-btn-${id}`)
    .classList.add("active-category");
};

const loadPlantDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => displayPLantDetails(data.plants));
};

const displayPLantDetails = (details) => {
  const parentNodeModal = document.getElementById("details-modal");
  parentNodeModal.innerHTML = `
    <div class="bg-white card p-5 h-full">
      <img class="h-40 object-cover" src="${details.image}" alt ="${details.name}">
      <h2 class="font-bold text-xl">${details.name}</h2>
      <p class="font-medium text-gray-400">${details.description}</p>
      <div class="my-4">
        <span class="bg-green-100 px-2 p-1 rounded-2xl">${details.category}</span>
        <h3>৳ ${details.price}</h3>
      </div>
    </div>
  `;
  document.getElementById("trees_detail_modal").showModal();
};

let total = 0;
const addCart = (item) => {
  const cartParent = document.getElementById("cart_container");

  const cartElement = document.createElement("div");
  cartElement.className =
    "bg-[#F0FDF4] px-2 py-3 rounded-lg flex justify-between items-center my-2";

  const infoDiv = document.createElement("div");
  const name = document.createElement("h2");
  name.className = "font-bold text-xl";
  name.innerText = item.name;

  const priceTag = document.createElement("p");
  priceTag.className = "text-gray-400";
  priceTag.innerText = `৳ ${item.price}`;

  infoDiv.append(name, priceTag);

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn text-red-500 text-xl";
  removeBtn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

  removeBtn.addEventListener("click", () => {
    cartParent.removeChild(cartElement);
    total -= item.price;
    updateTotal();
  });

  cartElement.append(infoDiv, removeBtn);
  cartParent.appendChild(cartElement);
  total += item.price;
  updateTotal();
};

const updateTotal = () => {
  const cartParent = document.getElementById("total-container");
  cartParent.innerHTML = `<h2 class="text-xl font-semibold">৳ ${total}</h2>`;
};

loadAllPlants();
loadCategoriesBtn();