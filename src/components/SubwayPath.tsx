import React from "react";

type SubwayPathProps = {
  color: string,
  data: string,
}

function SubwayPath({color, data}: SubwayPathProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.4967in"
      height="8.14333in"
      viewBox="0 0 3449 2443"
    >
      <path
        id="Asakusa Line Full"
        fill="none"
        stroke={color}
        stroke-width="20"
        d={data}
        />
      </svg>
    )
}

export default SubwayPath;
