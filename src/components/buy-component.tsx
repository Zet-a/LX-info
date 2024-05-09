"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link";
import { Button } from "./ui/button";

export function BuyComponent({ data_billgang_domain, data_billgang_product_path, children }: { data_billgang_domain: string, data_billgang_product_path: string, children?: React.ReactNode}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-center">Buy {data_billgang_product_path.replaceAll("_"," ").replaceAll("-"," ")}</AlertDialogTitle>
                </AlertDialogHeader>
                
                <iframe className="w-full h-[50vh]" src={`https://${data_billgang_domain}/embed/${data_billgang_product_path}`} />

                <AlertDialogFooter>
                    <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}