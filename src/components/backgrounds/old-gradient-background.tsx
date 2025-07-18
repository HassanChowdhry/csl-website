import { HTMLAttributes } from 'react';

interface GradientBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GradientBackground({ children, className = "", ...props }: GradientBackgroundProps) {
  return (
    <div className={`relative ${className}`} {...props}>
      {/* Background SVGs */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none select-none">
        {/*TODO: How are you able to get the background to be a gradient as a svg? */}
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-84.75 max-w-none -translate-x-1/2 rotate-30 sm:left-[calc(50%-30rem)] sm:h-169.5"
          viewBox="0 0 1155 678"
        >
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
        </svg>
      </div>
      
      <div className="relative">
        {children}
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none select-none">
        <svg
          className="relative left-[calc(50%+3rem)] h-84.75 max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-169.5"
          viewBox="0 0 1155 678"
        >
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
        </svg>
      </div>
    </div>
  );
} 