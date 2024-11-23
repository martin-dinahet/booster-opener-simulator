"use client";

import { getPokemonCards } from "@/lib/utils";
import { openBoosterPack } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";

const Home = () => {
  const [allCards, setAllCards] = useState(getPokemonCards());
  const [boosterCards, setBoosterCards] = useState([]);
  const [isPackOpened, setIsPackOpened] = useState(false);

  const handleOpenBooster = () => {
    const newBoosterCards = openBoosterPack(allCards);
    setBoosterCards(newBoosterCards);
    setIsPackOpened(true);
  };

  const handleClose = () => {
    setIsPackOpened(false);
  };

  return (
    <>
      <div className="w-screen min-h-screen grid place-items-center">
        <Card>
          <CardHeader>
            <CardTitle>Pokemon Booster Simulator</CardTitle>
          </CardHeader>
          <CardContent>
            {!isPackOpened ? (
              <Button onClick={handleOpenBooster}>Open Booster</Button>
            ) : (
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {boosterCards.map((card) => (
                    <div key={card.id} className="relative">
                      <img src={card.img} alt={`${card.type} card`} className="max-w-[10rem]" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleOpenBooster}>Open one more</Button>
                  <Button onClick={handleClose} variant="outline">
                    Back
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
