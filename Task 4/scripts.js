const selector = document.getElementById("select");
selector.value = "grass";
var event = new Event("change");
selector.dispatchEvent(event);
const textButton = document.getElementById("textButton");

textButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const datas = [];
  try {
    const limit = document.getElementById("limit");
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${+limit}&limit=${+limit}`;
    const response1 = await fetch(URL);
    const data1 = await response1.json();
    for (let i = 0; i < data1.results.length; ++i) {
      if (data1.results[i].name.startsWith(textBox.value)) {
        const response2 = await fetch(data1.results[i].url);
        const data2 = await response2.json();
        for (let j = 0; j < data2.types.length; ++j) {
          const response3 = await fetch(data2.forms[0].url);
          const data3 = await response3.json();
          datas.push({
            name: data1.results[i].name,
            type: data2.types[j].type.name,
            img: data3.sprites.front_default,
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  update(datas);
});

selector.addEventListener("change", async () => {
  const datas = [];
  try {
    const limit = document.getElementById("limit");
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${+limit}&limit=${+limit}`;
    const response1 = await fetch(URL);
    const data1 = await response1.json();
    for (let i = 0; i < data1.results.length; ++i) {
      const response2 = await fetch(data1.results[i].url);
      const data2 = await response2.json();
      for (let j = 0; j < data2.types.length; ++j) {
        if (selector.value === data2.types[j].type.name) {
          const response3 = await fetch(data2.forms[0].url);
          const data3 = await response3.json();
          datas.push({
            name: data1.results[i].name,
            type: data2.types[j].type.name,
            img: data3.sprites.front_default,
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  update(datas);
});

function update(data) {
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = data[i].img;
    image.alt = "Image";
    card.appendChild(image);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = data[i].name;
    cardBody.appendChild(title);
    const cardType = document.createElement("span");
    cardType.classList.add("card-type");
    cardType.textContent = data[i].type;
    cardBody.appendChild(cardType);
    card.appendChild(cardBody);
    cardList.appendChild(card);
  }
}
