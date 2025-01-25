import React from "react";
import Card from "./Card";
import Button from "./Button";
import CardContent from "./CardContent";

interface CardType {
  id: number;
  url: string;
  flipped: boolean;
}

const getUserName = (): string => {
  const storedName =
    typeof window !== "undefined" ? localStorage.getItem("userName") : null;
  if (storedName) {
    return storedName;
  } else {
    // const name = prompt("Please enter your name:");
    // if (name && typeof window !== "undefined") {
    //   localStorage.setItem("userName", name);
    //   return name;
    // }
    return "Player";
  }
};

export async function MemoryGame() {
  //   const fetchImages = async (): Promise<CardType[]> => {
  //     const response = await fetch("https://challenge-uno.vercel.app/api/images");
  //     const data = await response.json();
  //     const duplicatedImages = [...data?.items, ...data?.items];
  //     const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5);
  //     return (
  //       shuffledImages.map((image: string, index: number) => ({
  //         id: index,
  //         url: image,
  //         flipped: false,
  //       })) || []
  //     );
  //   };

  const userName = getUserName();
  const response = await fetch(`https://challenge-uno.vercel.app/api/images`);
  const data = (await response.json()) as CardType[];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
        <div className="mt-4">
          <p className="text-gray-700">Errors: 0</p>
          <p className="text-gray-700">Successes: 0</p>
        </div>
      </header>

      <div className="grid grid-cols-4 gap-4">
        {data.map((card) => (
          <Card key={card.id} className={`relative w-24 h-32 bg-blue-500`}>
            <CardContent className="w-full h-full flex items-center justify-center">
              <img
                src={card.url}
                alt="Animal"
                className="object-cover w-full h-full rounded-md hidden"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-green-600 text-xl font-bold">
          Congratulations! Start playing to track your scores!
        </p>
        <Button className="mt-4" onClick={() => window.location.reload()}>
          Play Again
        </Button>
      </div>
    </div>
  );
}

export default MemoryGame;
