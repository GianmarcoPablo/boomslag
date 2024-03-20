import Image from "next/image"

export default function Sponsors() {
    return (
        <div className="container mx-auto mt-8">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./facebook.svg" className="w-40" alt="Facebook" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./airbnb.svg" className="w-40" alt="Disney" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./disney.svg" className="w-40" alt="Airbnb" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./samsung.svg" className="w-40" alt="Apple" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./sass.svg" className="w-40" alt="Spark" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./spark.svg" className="w-40" alt="Samsung" />
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./facebook.svg" className="w-40" alt="Facebook" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./airbnb.svg" className="w-40" alt="Disney" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./disney.svg" className="w-40" alt="Airbnb" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./samsung.svg" className="w-40" alt="Apple" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./sass.svg" className="w-40" alt="Spark" />
                    </li>
                    <li>
                        <Image
                            width={40}
                            height={40}
                            src="./spark.svg" className="w-40" alt="Samsung" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
