const meals = [
  {
    name: "Carne pizza",
    description: "Taste the unbelievable",
    price: "1.60$",
    imgSrc: "pizzas/carne.png",
  },
  {
    name: "Colorato",
    description: "Taste the unbelievable",
    price: "1.60$",
    imgSrc: "pizzas/colorato.png",
  },
  {
    name: "Crema",
    description: "Taste the unbelievable",
    price: "1.60$",
    imgSrc: "pizzas/crema.png",
  },
  {
    name: "Disgustoso",
    description: "Taste the unbelievable",
    price: "1.60$",
    imgSrc: "pizzas/disgustoso.png",
  },
  {
    name: "Gambari",
    description: "Taste the unbelievable",
    price: "1.60$",
    imgSrc: "pizzas/gamberi.png",
  },
  {
    name: "Pomodora",
    description: "Taste the unbelievable",
    price: "1.60$",
    imgSrc: "pizzas/pomodoro.png",
  },
  {
    name: "Salsiccia",
    description: "Taste the unbelievable",
    price: "1.60$",
    imgSrc: "pizzas/salsiccia.png",
  },
  //  {
  //   name: "Pepe",
  //   description: "Taste the unbelievable",
  //   price: "1.60$",
  //   imgSrc: "pizzas/Pepe.png",
  // },
];

export function renderMenu(where) {
  meals.forEach((meal) => {
    let container = document.createElement("div");
    let productImage = document.createElement("img");
    let right = document.createElement("div");
    let title = document.createElement("h2");
    let description = document.createElement("p");
    let price = document.createElement("span");
    container.classList.add("container-meal");
    right.classList.add("list-meal");
    container.classList.add("div-meal");
    productImage.src = meal.imgSrc;
    title.textContent = meal.name;
    description.textContent = meal.description;
    price.textContent = meal.price;
    right.append(title, description, price);
    container.append(productImage, right);
    where.append(container);
  });
}
