import Link from "next/link";

const Card = ({ link, basePath = '' }) => {
    return (
        <div className="border border-solid border-gray-200 hover:border-gray-400 rounded-xl flex flex-col w-56 relative duration-150">
            <Link href={`${basePath}/${link}`} className="p-6 block flex flex-col w-full">
                <h5 className="mb-2 capitalize text-xl font-semibold">{link}</h5>
                <p className="text-sm">Description</p>
                <button className="flex gap-2 items-center text-sm">Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </Link>
        </div>
    );
};

export default Card;
