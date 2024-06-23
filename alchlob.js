const evolutionsData = [
    {
        name: "Alchlob",
        types: ["Steel", "Water"],
        image: "imgs/alchlob.png"
    },
    {
        name: "Silwhale",
        types: ["Steel", "Water"],
        image: "imgs/alchlob.1.png"
    },
    {
        name: "Illunormous",
        types: ["Steel", "Water"],
        image: "imgs/alchlob.2.png"
    }
];

const pokemonContainer = document.getElementById('alchlob-container');


evolutionsData.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('poke-card', 'bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transition-transform', 'duration-300', 'hover:translate-y-[-5px]');

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
            case "Bug":
                typeBadge.classList.add('bg-green-700');
                break;
            case "Dark":
                typeBadge.classList.add('bg-slate-900');
                break;
            case "Dragon":
                typeBadge.classList.add('bg-teal-400');
                break;
            case "Electric":
                typeBadge.classList.add('bg-yellow-300');
                break;
            case "Fairy":
                typeBadge.classList.add('bg-pink-600');
                break;
            case "Fighting":
                typeBadge.classList.add('bg-orange-800');
                break;
            case "Fire":
                typeBadge.classList.add('bg-red-500');
                break;
            case "Flying":
                typeBadge.classList.add('bg-gray-600');
                break;
            case "Ghost":
                typeBadge.classList.add('bg-indigo-400');
                break;
            case "Grass":
                typeBadge.classList.add('bg-lime-500');
                break;
            case "Ground":
                typeBadge.classList.add('bg-yellow-800');
                break;
            case "Ice":
                typeBadge.classList.add('bg-blue-400');
                break;
            case "Normal":
                typeBadge.classList.add('bg-stone-200');
                break;
            case "Poison":
                typeBadge.classList.add('bg-purple-900');
                break;
            case "Psychic":
                typeBadge.classList.add('bg-fuchsia-600');
                break;
            case "Rock":
                typeBadge.classList.add('bg-amber-400');
                break;
            case "Steel":
                typeBadge.classList.add('bg-slate-500');
                break;
            case "Water":
                typeBadge.classList.add('bg-cyan-500');
                break;
            default:
                typeBadge.classList.add('bg-gray-400');
                break;
        }
        typeBadge.textContent = type;
        typeContainer.appendChild(typeBadge);
    });

    cardBody.appendChild(typeContainer);
    card.appendChild(image);
    card.appendChild(cardBody);
    pokemonContainer.appendChild(card);
});
