let elList = document.querySelector(".pokimon__list");

for (let element of pokemons) {


  //CREATE
  let newItem = document.createElement("li");
  let newCard = document.createElement("div");
  let newCardImg = document.createElement("img");
  let newCardWrap = document.createElement("div");
  let newCardTop = document.createElement("div");
  let newCardBot = document.createElement("div");
  let newCardHeading = document.createElement("h3");
  let newCardTopImg = document.createElement("img");
  let newCardDescOne = document.createElement("p");
  let newCardMassa = document.createElement("h3");
  let newCardHeigh = document.createElement("h3");

  //SET ATTRIBUTE
  newItem.setAttribute("class", "pokimon__item");
  newCard.setAttribute("class", "item__wrapper bg-light");
  newCardImg.setAttribute("class", "item__img");
  newCardImg.setAttribute("src", element["img"]);
  newCardWrap.setAttribute("class", "desc_wrap");
  newCardTop.setAttribute("class", "item__top");
  newCardBot.setAttribute("class", "item__bot");
  newCardHeading.setAttribute("class", "item__heading");
  newCardTopImg.setAttribute("class", "item__top-element");
  newCardTopImg.setAttribute("src", "./images/pokemon-top-element.svg");
  newCardDescOne.setAttribute("class", "item__desc item__desc-one");
  newCardMassa.setAttribute("class", "item__num item__bot-massa");
  newCardHeigh.setAttribute("class", "item__num item__bot-age");


  //TEXT CONTENT
  newCardHeading.textContent = element["name"];
  newCardDescOne.textContent = element["type"];
  newCardMassa.textContent = element["weight"];
  newCardHeigh.textContent = element["height"]




  //APPEND
  elList.appendChild(newItem);
  newItem.appendChild(newCard);
  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardWrap);
  newCardWrap.appendChild(newCardTop);
  newCardTop.appendChild(newCardHeading);
  newCardTop.appendChild(newCardTopImg);
  newCardWrap.appendChild(newCardDescOne);
  newCardWrap.appendChild(newCardBot);
  newCardBot.appendChild(newCardMassa);
  newCardBot.appendChild(newCardHeigh);
}
