"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

const games = [
    {
        name: "DOORS",
        id: "doors",

        total_images: 4,
        path: "/Lolhax/Doors/"
    },

    /*{
        name: "Michael's Zombies",
        id: "michaelszombies",

        total_images: 1,
        path: "/Lolhax/Michael's Zombies/"
    }*/
]

export default function Features() {
    const [current_game, setCurrentGame] = useState<string>("doors");
    const [path, setPath] = useState<string>("/Lolhax/Doors/");
    const [total_images, setTotalImages] = useState<number>(4);


    return (
        <main className="flex flex-col justify-center items-center h-[calc(100vh-50px)]">
            <Select onValueChange={(value) => {
                setCurrentGame(value as string);

                games.map((game) => {
                    if (game.id === value) {
                        setPath(game.path);
                        setTotalImages(game.total_images);
                    }
                });
            }}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a game" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Game</SelectLabel>
                        {games.map((game) => (
                            <SelectItem key={game.id} value={game.id}>
                                {game.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Carousel className="w-[35vw] mt-2">
                <CarouselContent>
                    {Array.from({ length: total_images }, (_, i) => (
                        <CarouselItem key={i}>
                            <Card>
                                <CardContent>
                                    <img
                                        src={`${path}${i + 1}.png`}
                                        alt="Lolhax"
                                        className="w-full h-full object-contain"
                                        draggable={false}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    )
}