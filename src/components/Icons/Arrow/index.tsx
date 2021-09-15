import * as React from "react"

export function ArrowSvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={27}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.429 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth={2.057}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6h22.667"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={2.286}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={24.667}
          y1={6}
          x2={4}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.19} stopColor="currentColor" />
          <stop offset={1} stopColor="currentColor" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}