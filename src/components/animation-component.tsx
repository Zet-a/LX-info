import React from "react";
import BlurFade from "./magicui/blur-fade";


export function AnimationComponent({ children }: { children: React.ReactNode }) {
    return (
        <>
            {React.Children.map(children, (child, index) => {
                return (
                    <BlurFade delay={index * 0.25} inView key={index}>
                        {child}
                    </BlurFade>
                )
            })}
        </>
    )
}