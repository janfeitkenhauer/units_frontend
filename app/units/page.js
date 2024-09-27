import Card from "@/components/card";
import Link from "next/link";

export default function Units() {
    const dimensions = ['mass', 'velocity', 'electric-current', 'time', 'volume'];
    return (
        <div className="m-4">
            <div className="flex justify-start">
                <Link href="/" className="">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:border-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4 rotate-180"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                        <p>Back</p>
                    </div>
                </Link>
            </div>
            <div className="container mx-auto flex justify-center w-full">
                <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4">
                    {dimensions.map((dimensions, index) => (
                        <Card key={index} link={dimensions} basePath="/units" />
                    ))}
                </div>
            </div>
        </div>
    );
}
