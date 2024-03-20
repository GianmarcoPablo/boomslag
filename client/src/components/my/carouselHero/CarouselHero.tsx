"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSpacing() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
            className="w-full max-w-6xl">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-12">
                                    <span className="text-2xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
