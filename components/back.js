'use client'

import { useRouter } from 'next/router';

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        const currentPath = router.asPath;
        const segments = currentPath.split('/');

        // Remove the last segment
        segments.pop();
        const backPath = segments.join('/') || '/';

        router.push(backPath);
    }

    return (
        <div>
            <button onClick={handleBack} type="button" className="flex items-center gap-2">
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
                Back
            </button>
        </div>
    )
}

export default BackButton;