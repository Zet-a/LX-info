import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const about_us_data = [
  {
    "name": "geodude",
    "role": "Lead Developer",
    "avatar": "/Avatars/geo.png"
  },
  {
    "name": "lolcat",
    "role": "Developer",
    "avatar": "/Avatars/lolcat.png"
  },
  {
    "name": "upio",
    "role": "Developer",
    "avatar": "/Avatars/upio.ico"
  },
  {
    "name": "Zeta",
    "role": "Developer",
    "avatar": "/Avatars/zeta.png"
  }
]

export default function Home() {
  return (
    <main>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
              The ultimate script experience.<br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  LOLHAX
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/Lolhax/Doors/1.png`}
            alt="Lolhax"
            height={600}
            width={800}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      
      {/* FAQ */}
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl">FAQ</h1>
        <Accordion type="single" collapsible className="w-[30vw] max-w-[35rem] max-md:w-[70vw]">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do i execute lolhax?</AccordionTrigger>
            <AccordionContent>
              Use a script executor such as <Link href="https://krampus.gg" className={cn(buttonVariants({variant: "link"}), "ml-0 mr-0 px-0")} target="_blank">Krampus</Link>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is lolhax free?</AccordionTrigger>
            <AccordionContent>
              No, lolhax is not free, we currently accept as payment Paypal (5$ USD) & Robux (857 Robux).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can i get a refund?</AccordionTrigger>
            <AccordionContent>
              You may not refund your purchase, all sales are final.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>If i previously bought lolhax, ...</AccordionTrigger>
            <AccordionContent>
              All previous buyers from lolhax v2 will NOT get a free license or a discount for lolhax v3.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      {/* About us */}
      <div className="w-full flex justify-center items-center flex-col mt-[13rem]">
          <h1 className="text-3xl">About Us</h1>
          <p className="text-center mt-0.5">
            Lolhax is a script made by geo, lolcat and upio.<br></br>
            This script is aimed to provide the best experience in roblox games such as DOORS.
          </p>

          <div className="flex flex-row *:mr-5 mb-[50px]">
            {about_us_data.map((data, index) => (
              <div key={index} className="flex justify-center items-center flex-row max-sm:flex-col mt-5">
                <Image
                  src={`${data.avatar}`}
                  alt={data.name}
                  height={100}
                  width={100}
                  className="rounded-full"
                  draggable={false}
                />
                <div className="ml-2">
                  <h1 className="text-2xl font-bold">{data.name}</h1>
                  <p className="text-center mt-0.5">{data.role}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </main>
  );
}
