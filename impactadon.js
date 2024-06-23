const pokemonData = [
    {
        name: "Impactadon",
        types: ["Rock", "Ghost"],
        image: "imgs/impactadon.png",
        description: "Impactadon is a fearsome Pokémon with a ghostly presence and formidable rock abilities. It is known for its imposing stature and its ability to phase through solid objects."
    },

];

const pokemonContainer = document.getElementById('impactadon-container');

pokemonData.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('poke-card', 'bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transition-transform', 'duration-300', 'hover:translate-y-[-5px]',"bg-slate-300");

    const image = document.createElement('img');
    image.src = pokemon.image;
    image.classList.add('w-full', 'poke-image', 'object-cover', 'rounded-t-lg');

    const cardBody = document.createElement('div');
    cardBody.classList.add('p-4', 'flex', 'flex-col', 'items-center', 'bg-slate-300');

    const typeContainer = document.createElement('div');
    typeContainer.classList.add('container-side-by-side', 'flex', 'items-center', 'bg-gradient-to-r', 'from-amber-500', 'to-orange-500', 'py-1', 'px-2', 'rounded-lg', 'flex-shrink-0');

    const name = document.createElement('h3');
    name.classList.add('text-lg', 'font-semibold', 'mr-3', 'whitespace-nowrap');
    name.textContent = pokemon.name;

    typeContainer.appendChild(name);

    pokemon.types.forEach(type => {
        const typeBadge = document.createElement('p');
        typeBadge.classList.add('inline-block', 'text-sm', 'mb-1', 'px-2', 'py-1', 'text-white', 'rounded', 'mr-2', 'whitespace-nowrap');
        switch(type) {
            case "Rock":
                typeBadge.classList.add('bg-amber-400');
                break;
            case "Ghost":
                typeBadge.classList.add('bg-indigo-400');
                break;
            default:
                typeBadge.classList.add('bg-gray-400');
                break;
        }
        typeBadge.textContent = type;
        typeContainer.appendChild(typeBadge);
    });

    cardBody.appendChild(typeContainer);

    const description = document.createElement('p');
    description.classList.add('mt-4', 'text-center', 'text-m', 'text-gray-700');
    description.textContent = pokemon.description;
    cardBody.appendChild(description);

    card.appendChild(image);
    card.appendChild(cardBody);
    pokemonContainer.appendChild(card);
});
