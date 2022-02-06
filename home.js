const homeDescription = [
  {
    firstSentence: "Best pizza in your country",
    secondSentence: "Made with passion since 1908",
    imageSrc: "chef.png",
    finalSentence: "Order online or visit us!",
  },
];

export function renderHome(where) {
  homeDescription.forEach((home) => {
    let homePage = document.createElement("div");
    let title = document.createElement("h3");
    let paragraph = document.createElement("p");
    let chefImg = document.createElement("img");
    let finalParagraph = document.createElement("p");
    title.textContent = home.firstSentence;
    paragraph.textContent = home.secondSentence;
    chefImg.src = home.imageSrc;
    finalParagraph.textContent = home.finalSentence;
    homePage.append(title, paragraph, chefImg, finalParagraph);
    where.append(homePage);
    //classlist
    homePage.classList.add("home-page-div");
    chefImg.classList.add("chef-img");
  });
}
