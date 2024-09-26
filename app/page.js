'use client'
import { useState } from "react";

import Card from "@/components/card";

export default function Homepage() {
  const sections = ['units'];

  const [displayFirstIcon, setDisplayFirstIcon] = useState(true);

  const handleClick = () => {
    setDisplayFirstIcon(false); // Show the second SVG (the check mark)
    
    setTimeout(() => {
      setDisplayFirstIcon(true); // Revert back to the first SVG after 2 seconds
    }, 2000);
  };

  return (
    <div className="mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {sections.map((section, index) => (
              <Card key={index} link={section} basePath="" />
          ))}
      </div>
      <button onClick={handleClick}>
            {displayFirstIcon ? (
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
              </svg>
            ) : (
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            )}
          </button>
    </div>
  )
}
