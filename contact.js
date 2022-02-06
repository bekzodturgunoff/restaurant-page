export function renderContact(where) {
  let contactPage = document.createElement("div");
  let telephoneNum = document.createElement("h3");
  let location = document.createElement("p");
  let locationImg = document.createElement("img");
  telephoneNum.textContent = "Call us: +998 (93)195-55-51";
  location.textContent = "Germany, Berlin city";
  locationImg.src = "restaurant-location.png";
  contactPage.append(telephoneNum, location, locationImg);
  where.append(contactPage);
  contactPage.classList.add("contact-page");
  locationImg.classList.add("location-img");
}
