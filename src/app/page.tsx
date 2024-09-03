import { AnimationComponent } from "@/components/animation-component";
import BlurFade from "@/components/magicui/blur-fade";
import ShineBorder from "@/components/magicui/shine-border";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
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
      <div className="flex flex-col justify-center items-center text-center my-[25vh]">
        <AnimationComponent>
          <h1 className="text-4xl font-semibold text-black dark:text-white mb-5">
            The ultimate script experience.<br />
            <span className="text-[6rem] font-bold mt-1 leading-none">
              LOLHAX
            </span>
          </h1>
          <ShineBorder
            className="relative flex justify-center mt-2 px-0 py-0 rounded-none"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <Image
                src={`/Lolhax/Doors/1.png`}
                alt="Lolhax"
                height={600}
                width={800}
                className="h-full min-h-[6rem] object-cove"
                draggable={false}
              />
          </ShineBorder>
        </AnimationComponent>
      </div>

      {/* FAQ */}
      <div className="w-full flex justify-center items-center flex-col mt-5">
        <AnimationComponent>
          <h1 className="text-4xl">FAQ</h1>
          <Accordion type="single" collapsible className="max-w-[30rem] min-w-[25rem]">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do i execute lolhax?</AccordionTrigger>
              <AccordionContent>
                Use a script executor such as <Link href="https://getwave.gg" className={cn(buttonVariants({variant: "link"}), "ml-0 mr-0 px-0")} target="_blank">Wave</Link>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is lolhax free?</AccordionTrigger>
              <AccordionContent>
                No, lolhax is not free, we currently accept as payment Paypal & Cashapp (8$ USD) & Robux (1,430 Robux).
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
                All previous buyers from lolhax will NOT get a free license or a discount for lolhax v2 / v3.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AnimationComponent>
      </div>
      
      {/* About us */}
      <div className="w-full flex justify-center items-center flex-col mt-[13rem]">
          <AnimationComponent>
            <h1 className="text-3xl">About Us</h1>
            <p className="text-center mt-0.5">
              Lolhax is a script made by geodude, lolcat, upio and Zeta.<br></br>
              This script is aimed to provide the best experience in roblox games such as DOORS.
            </p>
          </AnimationComponent>
          <div className="flex flex-wrap *:mr-5 max-lg:*:mb-5 mb-[50px] justify-center items-center">
            {about_us_data.map((data, index) => (
              <BlurFade delay={0.25*2+(index * 0.25)} key={index} inView>
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
              </BlurFade>
            ))}
          </div>
      </div>
    </main>
  );
}
