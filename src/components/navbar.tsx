"use client";

import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ModeToggle } from "./theme-button-switcher";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { BuyComponent } from "./buy-component";

const pages = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Changelogs", path: "/changelogs" },
]


const mobile_regex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i

export function Navbar() {
    const [currentPage, setCurrentPage] = useState<string>("");
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        setCurrentPage(window.location.pathname);
        setIsMobile(mobile_regex.test(navigator.userAgent));
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

                    <BuyComponent data_billgang_domain="lolhax.billgang.store" data_billgang_product_path="lolhax-lifetime">
                        <Button>
                            <svg height="20px" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" className="fill-secondary" id="Core" transform="translate(-212.000000, -422.000000)"><g id="shopping-cart" transform="translate(212.000000, 422.000000)"><path d="M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z" id="Shape"/></g></g></g></svg>
                        </Button>
                    </BuyComponent>

                </div>
            )}
            
            {/* Mobile Navbar */}
            {currentPage != "" && (
                <div className="sm:hidden max-sm:flex justify-center items-center mr-2">
                    <ModeToggle />
                    
                    <Popover>
                        <PopoverTrigger>
                            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-5" onClick={()=>{
                                if (localStorage.getItem("did_iteract_with_mobile_navbar") == "true") {
                                    return;
                                }

                                if (!isMobile) {
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

                            <Link href="https://lolhax.billgang.store/">
                                <div className="py-[8px]">
                                    Buy
                                </div>
                            </Link>
                        </PopoverContent>
                    </Popover>

                </div>
            )}
        </div>
    )
}