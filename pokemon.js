const getPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");

    if (!response.ok) {
      throw "Error get urls";
    }

    const { results } = await response.json();

    const resultPromise = results.map(async ({ url }) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw "Error get data";
      }

      const datas = await response.json();

      console.log(datas);

      return {
        name: datas.name,
        sprites: datas.sprites.front_shiny,
        types: datas.types.map((type) => {
          return type.type.name;
        }),
      };
    });

    const result = await Promise.all(resultPromise);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const container = document.querySelector("#pokemon");

const updateUi = async () => {
  try {
    const pokemonDatas = await getPokemon();

    pokemonDatas.forEach((data) => {
      const cardContainer = document.createElement("div");

      const img = document.createElement("img");
      img.setAttribute("src", data.sprites);

      const name = document.createElement("h2");
      name.innerText = data.name;

      cardContainer.append(img, name);

      const pokemonTypeContainer = document.createElement("div");

      data.types.forEach((type) => {
        const pokemonType = document.createElement("p");
        pokemonType.innerText = type;

        pokemonTypeContainer.append(pokemonType);
        cardContainer.append(pokemonTypeContainer);
      });

      container.append(cardContainer);
    });
  } catch (error) {
    console.log(error);
  }
};

updateUi();
