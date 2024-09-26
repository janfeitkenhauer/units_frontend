import DataTable from "@/components/datatable";
import Link from "next/link";

export default function ElectricCurrent() {
    return (
      <div className="m-4">
        <div className="flex justify-start">
                <Link href="/units" className="">
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
        <h1 className="text-2xl font-bold my-4">Electric Current</h1>
        <DataTable />
      </div>
    );
  }