"use client";

import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ModeToggle } from "./theme-button-switcher";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const pages = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Changelogs", path: "/changelogs" },
]


export function Navbar() {
    const [currentPage, setCurrentPage] = useState<string>("");

    useEffect(() => {
        setCurrentPage(window.location.pathname);
    }, []); 

    return (
        <div className="sticky flex justify-center items-center top-0 w-screen h-[50px] border-b border-border z-50 backdrop-blur-sm bg-background/90 supports-[backdrop-filter]:bg-background/60">
            <p className="mr-auto ml-3 text-xl" onClick={() => {window.location.href = "/";}}>Lolhax</p>
            
            {/* PC Navbar */}
            {currentPage != "" && (
                <div className="flex flex-row mr-5 *:ml-1 max-sm:hidden justify-center items-center">
                    {pages.map((page) => (
                        <Link href={page.path} key={page.name} onClick={() => {window.location.href = page.path;}}>
                            <div className={`px-[15px] py-[12px] ${currentPage === page.path ? "font-bold" : ""}`}>
                                {page.name}
                            </div>
                        </Link>   
                    ))}
                    <ModeToggle />
                </div>
            )}
            
            {/* Mobile Navbar */}
            {currentPage != "" && (
                <div className="sm:hidden max-sm:flex justify-center items-center mr-5">
                    <ModeToggle />
                    
                    <Popover>
                        <PopoverTrigger>
                            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-5" onClick={()=>{
                                if (localStorage.getItem("did_iteract_with_mobile_navbar") == "true") {
                                    return;
                                }

                                toast("WARNING: Lolhax Script", {
                                    description: "This script only supports PC devices, please switch to a PC device to use the script."
                                });

                                localStorage.setItem("did_iteract_with_mobile_navbar", "true");
                            }}>
                                <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                            </svg>
                        </PopoverTrigger>
                        <PopoverContent className="sm:hidden max-sm:flex flex-col">
                            {pages.map((page) => (
                                <Link href={page.path} key={page.name} onClick={() => {window.location.href = page.path;}}>
                                    <div className={`py-[8px] ${currentPage === page.path ? "font-bold" : ""}`}>
                                        {page.name}
                                    </div>
                                </Link>   
                            ))}
                        </PopoverContent>
                    </Popover>

                </div>
            )}
        </div>
    )
}