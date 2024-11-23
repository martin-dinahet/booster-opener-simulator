import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PokemonCard } from "@/lib/types";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getPokemonCards = () => {
  const pokemonCards = [];
  for (let id = 1; id <= 69; id++) {
    pokemonCards.push(
      new PokemonCard({
        id: `${id}`,
        img: `/${id}.png`,
        type: `pokemon`,
      })
    );
  }
  for (let id = 70; id <= 95; id++) {
    pokemonCards.push(
      new PokemonCard({
        id: `${id}`,
        img: `/${id}.png`,
        type: `trainer`,
      })
    );
  }
  for (let id = 96; id <= 102; id++) {
    pokemonCards.push(
      new PokemonCard({
        id: `${id}`,
        img: `/${id}.png`,
        type: `energy`,
      })
    );
  }

  return pokemonCards;
};

export const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const openBoosterPack = (allCards) => {
  const pokemonCards = allCards.filter((card) => card.type === "pokemon");
  const trainerCards = allCards.filter((card) => card.type === "trainer");
  const energyCards = allCards.filter((card) => card.type === "energy");

  return [
    ...getRandomItems(pokemonCards, 3),
    ...getRandomItems(trainerCards, 1),
    ...getRandomItems(energyCards, 1),
  ];
};
