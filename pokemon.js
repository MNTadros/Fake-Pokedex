const pokemonData = [
    {
        name: "Articlaw",
        types: ["Rock", "Ice"],
        image: "imgs/articlaw.png",
        readMorePage: "articlaw.html"

    },
    {
        name: "Alchlob",
        types: ["Steel", "Water"],
        image: "imgs/alchlob.png",
        readMorePage: "alchlob.html"

    },
    {
        name: "Silwhale",
        types: ["Steel", "Water"],
        image: "imgs/alchlob.1.png",
        readMorePage: "alchlob.html"

    },
    {
        name: "Illunormous",
        types: ["Steel", "Water"],
        image: "imgs/alchlob.2.png",
        readMorePage: "alchlob.html"

    },
    {
        name: "Impactadon",
        types: ["Rock", "Ghost"],
        image: "imgs/impactadon.png",
        readMorePage: "impactadon.html"

    },
    {
        name: "Spacetean",
        types: ["Steel", "Fighting"],
        image: "imgs/spacetean.png",
        readMorePage: "spacetean.html"

    },
    {
        name: "Colobster",
        types: ["Steel", "Fighting"],
        image: "imgs/spacetean.1.png",
        readMorePage: "spacetean.html"

    },
    {
        name: "Grimwar",
        types: ["Ghost"],
        image: "imgs/grimwar.png",
        readMorePage: "grimwar.html"

    },
    {
        name: "Silantis",
        types: ["Dragon","Psychic"],
        image: "imgs/silantis.png",
        readMorePage: "silantis.html"

    },
    // Add more Pokémon data here
];

const pokemonContainer = document.getElementById('pokemon-container');

pokemonData.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('poke-card', 'bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transition-transform', 'duration-300', 'hover:translate-y-[-5px]');
    card.style.height = '450px';

    const image = document.createElement('img');
    image.src = pokemon.image;
    image.classList.add('w-full', 'poke-image', 'object-cover', 'rounded-t-lg');

    const cardBody = document.createElement('div');
    cardBody.classList.add('p-4', 'flex', 'items-center', 'justify-between' ,'bg-slate-300');

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
        typeIcon.src = `types/${type.toLowerCase()}.png`;
        typeIcon.classList.add('mr-1', 'w-4', 'h-4'); // Adjust the size as needed

        const typeText = document.createElement('p');
        typeText.textContent = type;

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

        typeBadge.appendChild(typeIcon);
        typeBadge.appendChild(typeText);
        typeContainer.appendChild(typeBadge);
    });

    const readMore = document.createElement('a');
    readMore.classList.add('inline-block', 'bg-blue-300', 'text-white', 'ml-auto', 'py-2', 'rounded', 'mono', 'px-3');
    readMore.textContent = 'Read More';
    readMore.addEventListener('click', () => {
        window.location.href = pokemon.readMorePage;
    });

    cardBody.appendChild(typeContainer);
    cardBody.appendChild(readMore);
    card.appendChild(image);
    card.appendChild(cardBody);
    pokemonContainer.appendChild(card);
});
