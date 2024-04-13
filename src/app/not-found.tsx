import { BackgroundBeams } from "@/components/ui/background-beams";

export default function NotFoundPage() {
    return (
        <main>
            <div className="flex w-full h-[calc(100vh-50px)] flex-col justify-center items-center">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    404
                </h1>
                <p className="relative z-10 text-lg  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Page not found</p>
            </div>
            <BackgroundBeams />
        </main>
    )
}