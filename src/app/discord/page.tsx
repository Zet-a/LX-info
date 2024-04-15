"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

const URL = "https://discord.gg/G2qDAeFmTa"

export default function Discord() {
    useEffect(() => {
        window.location.href = URL;
    }, []);

    return (
        <main className="flex flex-col items-center justify-center w-full h-[calc(100vh-50px)]">
            <h1 className="text-3xl">Joining Discord...</h1>
            <p>You should be redirected automatically OR <Link href={URL} className={cn(buttonVariants({variant: "link"}), "ml-0 mr-0 px-0")} target="_blank"><strong>Join discord via link</strong></Link></p>
        </main>
    )
}