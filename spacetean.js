const pokemonData = [
    {
        name: "Spacetean",
        types: ["Steel", "Fighting"],
        image: "imgs/spacetean.png",
        description: "Spacetean is a Pokémon known for its strong steel armor and its prowess in fighting. It excels in close combat and is revered for its resilience and adaptability in various environments, it evolves into Colobster."
    },
    {
        name: "Colobster",
        types: ["Steel", "Fighting"],
        image: "imgs/spacetean.1.png",
        description: "Colobster, the evolved form of Spacetean, retains its steel and fighting attributes while growing larger and more powerful. It is known for its strategic prowess and relentless determination in battles."
    },

];

const pokemonContainer = document.getElementById('spacetean-container');

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
        const typeBadge = document.createElement('div');
        typeBadge.classList.add('inline-flex', 'items-center', 'text-sm', 'mb-1', 'px-2', 'py-1', 'text-white', 'rounded', 'mr-2', 'whitespace-nowrap');

        const typeIcon = document.createElement('img');
        typeIcon.src = `types/${type}.png`;
        typeIcon.classList.add('mr-1', 'w-4', 'h-4'); // Adjust the size as needed

        const typeText = document.createElement('p');
        typeText.textContent = type;

        switch(type) {
            case "Steel":
                typeBadge.classList.add('bg-slate-500');
                break;
            case "Fighting":
                typeBadge.classList.add('bg-orange-800');
                break;
            default:
                typeBadge.classList.add('bg-gray-400');
                break;
        }
        typeBadge.appendChild(typeIcon);
        typeBadge.appendChild(typeText);
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
